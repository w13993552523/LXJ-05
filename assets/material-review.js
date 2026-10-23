'use strict';
// Structured PLM cards and consumer material visibility. Demo data only.
const traceCardFields=[
 ['id','溯源卡ID'],['source_type','来源类型'],['standard_id','原料验收标准ID'],['standard_release_id','发布版本ID'],
 ['wlmc','物料名称'],['wljc','物料简称'],['wlbm','物料编码'],['relation_id','SAP编码'],['wlfl','物料分类'],
 ['ccyq','存储要求'],['ysyq','运输要求'],['cd','产地'],['bzq','保质期'],['ysq','允收期'],
 ['sfgm','是否转基因'],['sftjfj','是否添加防腐剂'],['yt','用途'],
 ['gysxx','供应商信息'],['ggzb','感官指标'],['lhzb','理化指标'],['wswzb','微生物指标'],
 ['status','状态'],['remark','备注'],['create_user_id','创建人ID'],['create_time','创建时间'],
 ['update_user_id','更新人ID'],['update_time','更新时间'],['deleted','删除标志'],['root_id','租户ID'],
 ['unit_id','单位ID'],['dept_id','部门ID'],['is_draft','是否草稿'],['ref_id','草稿对应正式行ID'],
 ['draft_data','草稿表单快照'],['data_state','数据状态']
];
function materialEntity(p=page(),r=row()){
 const prefix={material:'原料',semi:'半成品',dish:'成品'}[p.id]||'原料';
 return {name:r[prefix+'名称']||'—',code:r[prefix+'编码']||'—',category:r[prefix+'分类']||'—'};
}
function materialTraceCards(p=page(),r=row()){
 if(Array.isArray(r._traceCards))return r._traceCards.filter(c=>Number(c.deleted||0)!==1).sort((a,b)=>String(b.update_time||'').localeCompare(String(a.update_time||'')));
 if(r['是否有溯源卡']==='否')return [];
 const e=materialEntity(p,r);
 return [0,1,2].map(i=>({
  id:`TC-${p.id}-${e.code}-${i+1}`,source_type:i===2?'manual':'standard',standard_id:i===2?null:`YS-${e.code}`,
  standard_release_id:i===2?null:`YS-${e.code}-V${3-i}`,wlmc:e.name,wljc:e.name,wlbm:e.code,relation_id:e.code,wlfl:e.category,
  ccyq:p.id==='dish'?'制作后按门店出餐规范暂存':'按物料规定温层分区存放，保持包装完好',
  ysyq:'按规定温层运输，防止交叉污染',cd:'安徽合肥（演示）',bzq:p.id==='dish'?'以菜品现制要求为准':'以批次标签标识为准',
  ysq:'按已发布的原料验收标准核对',sfgm:i===2?0:2,sftjfj:i===2?0:2,yt:p.id==='dish'?'门店出餐':'门店及中央厨房加工使用',
  gysxx:[{供应商编码:'V10000',供应商名称:'老乡鸡农牧有限公司（演示）',生产商:'合肥食品工厂（演示）',供货物料:e.name}],
  ggzb:[{指标名称:'外观',标准要求:'外观正常，无可见异物',检验方式:'目视检查'},{指标名称:'气味',标准要求:'具有物料正常气味，无异味',检验方式:'感官检查'}],
  lhzb:[{指标名称:'理化检测项目',标准要求:'按对应正式验收标准执行',单位:'按检测项目',检验方法:'对应标准方法'}],
  wswzb:[{指标名称:'微生物检测项目',限量要求:'按对应正式验收标准执行',采样要求:'按标准抽样',检验方法:'对应标准方法'}],
  status:i?'历史版本':'已发布',remark:'原型演示记录，指标不作为实际验收依据。',create_user_id:'U1001',create_time:`2026-0${9-i}-01 09:00:00`,
  update_user_id:'U1002',update_time:`2026-${String(10-i).padStart(2,'0')}-01 10:30:00`,deleted:0,root_id:'LXJ-DEMO',unit_id:'UNIT-01',dept_id:'QA-01',
  is_draft:0,ref_id:null,draft_data:null,data_state:i===2?2:1
 }));
}
function traceCardListHTML(){
 const cards=materialTraceCards(),e=materialEntity();
 return `<div class="trace-card-context"><strong>${esc(e.name)}</strong><span class="code">${esc(e.code)}</span><span class="muted">共 ${cards.length} 张溯源卡 · 按更新时间倒序</span></div><div class="table-scroll"><table class="data-table trace-card-list"><thead><tr><th>序号</th><th>更新时间</th><th>查看</th></tr></thead><tbody>${cards.map((c,i)=>`<tr><td>${i+1}</td><td>${esc(c.update_time||'—')}</td><td>${btn('查看','trace-card-view','text',`data-num="${i}" aria-label="查看第${i+1}张溯源卡"`)}</td></tr>`).join('')||'<tr><td colspan="3" class="empty">暂无关联溯源卡</td></tr>'}</tbody></table></div>`;
}
function openTraceCards(){openOverlay('关联溯源卡',traceCardListHTML(),btn('关闭','close-overlay','plain'),'drawer','trace-card-list');}
function traceCardValue(key,v){
 if(v===null||v===undefined||v==='')return '—';
 if(key==='source_type')return ({manual:'手动填报',standard:'来自原料验收标准'})[v]||String(v);
 if(['sfgm','sftjfj'].includes(key))return ({1:'是',2:'否',0:'未明确'})[v]||'未明确';
 if(key==='deleted')return Number(v)===1?'已删除':'未删除';
 if(key==='is_draft')return Number(v)===1?'草稿':'正式';
 if(key==='data_state')return ({1:'正常',2:'废弃'})[v]||'未明确';
 return typeof v==='object'?JSON.stringify(v,null,2):String(v);
}
function traceCardInfo(card,keys){return `<div class="info-grid trace-card-info">${keys.map(k=>`<div class="info-item" data-card-field="${k}"><label>${esc(traceCardFields.find(f=>f[0]===k)[1])}</label><div class="value">${esc(traceCardValue(k,card[k]))}</div></div>`).join('')}</div>`;}
function traceCardJSON(card,key){
 let data=card[key];if(typeof data==='string'){try{data=JSON.parse(data)}catch{return `<div data-card-field="${key}" class="trace-json-empty">数据格式待核验<pre>${esc(data)}</pre></div>`}}
 if(!data||typeof data!=='object')return `<div data-card-field="${key}" class="trace-json-empty">暂无数据</div>`;
 const rows=Array.isArray(data)?data:[data];if(!rows.length)return `<div data-card-field="${key}" class="trace-json-empty">暂无数据</div>`;
 if(rows.some(r=>!r||typeof r!=='object'||Array.isArray(r)))return `<pre data-card-field="${key}" class="trace-json-empty">${esc(JSON.stringify(data,null,2))}</pre>`;
 const keys=[...new Set(rows.flatMap(r=>Object.keys(r)))];
 return `<div class="table-scroll" data-card-field="${key}"><table class="data-table trace-json-table"><thead><tr>${keys.map(k=>`<th>${esc(k)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${keys.map(k=>`<td>${esc(traceCardValue(k,r[k]))}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}
function openTraceCard(index){
 const card=materialTraceCards()[index];if(!card)return;
 const parent=state.overlay;
 const basics=['id','source_type','standard_id','standard_release_id','wlmc','wljc','wlbm','relation_id','wlfl','status','update_time'];
 const quality=['ccyq','ysyq','cd','bzq','ysq','sfgm','sftjfj','yt','remark'];
 const meta=['create_user_id','create_time','update_user_id','deleted','root_id','unit_id','dept_id','is_draft','ref_id','data_state'];
 const body=`<p class="note">以下为结构化溯源卡数据；示例内容仅用于原型评审。</p>${panel('基本信息',traceCardInfo(card,basics))}${panel('存储、运输与物料要求',traceCardInfo(card,quality))}${['gysxx','ggzb','lhzb','wswzb'].map(k=>panel(traceCardFields.find(f=>f[0]===k)[1],traceCardJSON(card,k))).join('')}<details class="trace-card-meta"><summary>维护信息与草稿</summary>${traceCardInfo(card,meta)}${panel('草稿表单快照',traceCardJSON(card,'draft_data'))}</details>`;
 openOverlay('溯源卡详情 · '+(index+1),body,btn('返回溯源卡列表','close-overlay','plain'),'dialog trace-card-dialog','trace-card-detail',{returnOverlay:parent,returnCardIndex:index});
}
function overlayMarkup(o,body,background=false){return `<div class="overlay ${background?'overlay-underlay':''}" ${background?'aria-hidden="true" inert':''}><section ${background?'':'role="dialog" aria-modal="true"'} aria-label="${esc(o.title)}" class="${o.type}"><div class="overlay-header"><h2>${esc(o.title)}</h2><button class="close" data-act="close-overlay" aria-label="关闭">×</button></div><div class="overlay-body">${body}</div><div class="overlay-footer">${o.task==='template-link-import'?templateImportFooterHTML(o):o.footer||btn('关闭','close-overlay','plain')}</div></section></div>`;}
function dishMaterialCatalog(){
 const rows=records(PAGES.find(p=>p.id==='material')),map=new Map();
 rows.forEach(r=>{const code=r['原料编码'];if(code&&!map.has(code))map.set(code,{code,name:r['原料名称']})});return [...map.values()];
}
function dishMaterialRelations(r){
 const code=r['菜品编码']||r['成品编码'];
 if(Array.isArray(r._materialCodes))return dishMaterialCatalog().filter(m=>r._materialCodes.includes(m.code));
 const n=Number(String(code||'600000').slice(-1))%6,indices=r._bomMaterials||[[0,2],[1],[0,4],[0,2],[2,4],[0,2,3]][n]||[];
 const catalog=dishMaterialCatalog();return indices.map(i=>catalog.find(m=>m.code==='10000'+i)).filter(Boolean);
}
function visibleMaterialCodes(r){const materials=dishMaterialRelations(r);if(Array.isArray(r._displayMaterialCodes))return materials.filter(m=>r._displayMaterialCodes.includes(m.code)).map(m=>m.code);if(Array.isArray(r._displayMaterials))return materials.filter(m=>r._displayMaterials.includes(m.name)).map(m=>m.code);return materials.map(m=>m.code);}
function dishDisplayRows(){return records(PAGES.find(p=>p.id==='dish-display'));}
function relatedDishGroups(code){
 const groups=new Map();dishDisplayRows().forEach(r=>{if(!dishMaterialRelations(r).some(m=>m.code===code))return;const id=r['菜品编码'];if(!groups.has(id))groups.set(id,{code:id,name:r['菜品名称'],rows:[]});groups.get(id).rows.push(r)});
 return [...groups.values()].map(g=>({...g,visible:g.rows.some(r=>visibleMaterialCodes(r).includes(code))}));
}
function openSingleMaterialDisplay(){
 const r=row(),visible=visibleMaterialCodes(r),materials=dishMaterialRelations(r);
 openOverlay('原料显示配置',`<div class="trace-card-context"><strong>${esc(r['菜品名称'])}</strong><span class="code">${esc(r['菜品编码'])}</span></div><p class="note">勾选表示向消费者展示。仅列出当前菜品关联的原料。</p><div class="scope-list">${materials.map(m=>`<label><input type="checkbox" name="display-material" value="${esc(m.code)}" ${visible.includes(m.code)?'checked':''}>${esc(m.name)} <span class="code muted">${esc(m.code)}</span></label>`).join('')||'<p class="empty">暂无关联原料</p>'}</div>`,btn('取消','close-overlay','plain')+btn('保存','material-display-save','primary'),'dialog','single-material-display',{dishCode:r['菜品编码']});
}
function saveSingleMaterialDisplay(){
 const o=state.overlay;if(o?.task!=='single-material-display')return;
 const codes=$$('input[name="display-material"]:checked').map(x=>x.value);
 const next=dishDisplayRows().map(r=>r['菜品编码']!==o.dishCode?r:{...r,_displayMaterialCodes:codes,_displayMaterials:dishMaterialRelations(r).filter(m=>codes.includes(m.code)).map(m=>m.name)});
 if(!saveDishDisplayRows(next))return;closeOverlay();render();toast('原料显示配置已保存');
}
function saveDishDisplayRows(rows){const next={...dataStore,'dish-display':rows};try{localStorage.setItem('lxj-prototype-v1',JSON.stringify(next))}catch{toast('保存失败，请检查浏览器存储后重试');return false}dataStore=next;return true;}
function openMaterialBatch(){openOverlay('按原料批量关闭展示','',btn('取消','close-overlay','plain')+btn('下一步：确认影响范围','material-batch-review','primary'),'dialog material-batch-dialog','material-batch',{query:'',materialCode:'',selected:new Set()});}
function materialBatchHTML(o){
 const catalog=dishMaterialCatalog(),matches=catalog.filter(m=>!o.query||`${m.code} ${m.name}`.toLowerCase().includes(o.query.toLowerCase())),material=catalog.find(m=>m.code===o.materialCode),dishes=material?relatedDishGroups(material.code):[],available=dishes.filter(g=>g.visible);
 return `<p class="note">搜索并选择一个原料，勾选需要关闭展示的关联菜品。仅调整所选菜品中的该原料展示，不改变菜品溯源总开关或内部溯源数据。</p><div class="sub-filter"><input id="batch-material-query" aria-label="原料编码或名称" placeholder="搜索原料编码 / 原料名称" value="${esc(o.query)}">${btn('搜索','material-batch-search','primary')}${btn('重置','material-batch-reset','plain')}</div><div class="material-search-results">${matches.map(m=>`<button class="material-result ${m.code===o.materialCode?'active':''}" data-act="material-batch-pick" data-code="${esc(m.code)}"><strong>${esc(m.name)}</strong><span class="code">${esc(m.code)}</span></button>`).join('')||'<p class="empty">未找到匹配的原料</p>'}</div>${material?`<div class="material-batch-impact"><strong>已选原料：${esc(material.name)}（${esc(material.code)}）</strong><span>关联 ${dishes.length} 个菜品，${available.length} 个可关闭，已选 ${o.selected.size} 个</span></div><div class="table-scroll"><table class="data-table material-batch-table"><thead><tr><th><input type="checkbox" data-material-batch-all aria-label="选择全部可关闭的关联菜品" ${!available.length?'disabled':''} ${available.length&&available.every(g=>o.selected.has(g.code))?'checked':''} ${available.some(g=>o.selected.has(g.code))&&!available.every(g=>o.selected.has(g.code))?'data-indeterminate':''}></th><th>菜品编码</th><th>菜品名称</th><th>该原料消费者展示</th><th>本次调整</th></tr></thead><tbody>${dishes.map(g=>`<tr><td><input type="checkbox" data-material-batch-code="${esc(g.code)}" aria-label="选择${esc(g.name)}" ${o.selected.has(g.code)?'checked':''} ${g.visible?'':'disabled'}></td><td class="code">${esc(g.code)}</td><td>${esc(g.name)}</td><td>${status(g.visible?'展示中':'已关闭')}</td><td>${g.visible?'关闭该原料展示':'无需重复关闭'}</td></tr>`).join('')||'<tr><td colspan="5" class="empty">该原料未关联任何菜品</td></tr>'}</tbody></table></div>`:'<div class="empty">选择原料后，查看关联菜品并勾选操作范围</div>'}`;
}
function reviewMaterialBatch(){
 const o=state.overlay;if(o?.task!=='material-batch')return;
 const material=dishMaterialCatalog().find(m=>m.code===o.materialCode),selected=material?relatedDishGroups(material.code).filter(g=>g.visible&&o.selected.has(g.code)):[];
 if(!material||!selected.length){toast('请先选择原料并勾选需要关闭展示的菜品');return}
 const body=`<div class="material-batch-impact"><strong>${esc(material.name)} · ${esc(material.code)}</strong><span>将关闭以下 ${selected.length} 个菜品中的该原料消费者展示</span></div><ul class="material-confirm-list">${selected.map(g=>`<li>${esc(g.name)} <span class="code muted">${esc(g.code)}</span></li>`).join('')}</ul><p>保存后按菜品统一生效，覆盖这些菜品适用的消费者展示入口。其他原料和未选菜品保持当前配置。</p><p class="note">菜品消费者溯源开关、单份报告开关及内部报告不受此操作影响。当前原型状态保存在本机浏览器。</p>`;
 openOverlay('确认批量关闭原料展示',body,btn('返回调整','close-overlay','plain')+btn('确认关闭 '+selected.length+' 个菜品中的原料展示','material-batch-confirm','primary'),'dialog material-confirm-dialog','material-batch-confirm',{returnOverlay:o,material,keys:selected.map(g=>g.code)});
}
function confirmMaterialBatch(){
 const o=state.overlay;if(o?.task!=='material-batch-confirm')return;
 const valid=new Set(relatedDishGroups(o.material.code).filter(g=>g.visible&&o.keys.includes(g.code)).map(g=>g.code));
 if(!valid.size){toast('所选原料展示状态已变化，请重新选择');return}
 const timestamp=new Date().toLocaleString('sv-SE'),next=dishDisplayRows().map(r=>{if(!valid.has(r['菜品编码']))return r;const codes=visibleMaterialCodes(r).filter(c=>c!==o.material.code);return {...r,_displayMaterialCodes:codes,_displayMaterials:dishMaterialRelations(r).filter(m=>codes.includes(m.code)).map(m=>m.name),'操作人':'食安管理员',_materialDisplayHistory:[...(r._materialDisplayHistory||[]),{materialCode:o.material.code,materialName:o.material.name,action:'关闭',time:timestamp,operator:'食安管理员'}]};});
 if(!saveDishDisplayRows(next))return;state.overlay=null;render();toast(`已关闭 ${valid.size} 个菜品中的“${o.material.name}”消费者展示`);
}
function consumerVisibleMaterials(r=row()){
 const config=dishDisplayRows().find(x=>x['菜品编码']===r['菜品编码']);
 if(config?.['消费者溯源开关']==='禁用')return [];
 const materials=dishMaterialRelations(config||r),visible=config?visibleMaterialCodes(config):materials.map(m=>m.code);
 return materials.filter(m=>visible.includes(m.code));
}
function consumerPreviewMaterial(){const available=consumerVisibleMaterials();return available.find(m=>Number(m.code.slice(-1))===state.publicMaterial)||available[0]||null;}
function dishCraftHTML(){
 const r=row(),name=r['成品名称']||'菜品',n=Number(String(r['成品编码']||'0').slice(-1))%6;
 const methods=['炖制','蒸制','煨煮','烧制','焖制','组合出餐'],method=methods[n];
 const steps=[['备料','按菜品配方核对原料名称、规格和用量','操作台 / 备料容器','按标准完成清洗、分切及备料'],[method,`按${name}作业规范进行${method}`,'对应烹饪设备','火力、时间及中心温度按已发布作业标准执行'],['出餐','核对成品状态后按份装盘','出餐器具','检查色泽、口感、份量与摆盘，完成出餐复核']];
 const fields={'工艺编号':'GY-DEMO-'+r['成品编码'],'工艺版本':'V1.0','菜品名称':name,'加工方式':method,'适用场景':'门店制作与出餐','单份配方基准':'1份（演示）','主要设备':'按门店设备清单配置','标准用时':'待工艺标准确认','质量控制点':'熟制状态、感官、份量与交叉污染控制','出餐要求':'按菜品摆盘规范及时出餐','更新时间':'2026-10-23 10:00:00','编制部门':'产品研发部（演示）'};
 return `<p class="note">以下为原型示例工艺字段与步骤，实际加工参数以已发布作业标准为准。</p>${infoHTML(Object.keys(fields).map(name=>({name})),fields)}<div class="section-title">加工步骤</div><div class="table-scroll"><table class="data-table craft-table"><thead><tr><th>步骤</th><th>工序名称</th><th>操作说明</th><th>使用设备 / 工具</th><th>关键控制要求</th></tr></thead><tbody>${steps.map((s,i)=>`<tr><td>${i+1}</td>${s.map(v=>`<td>${esc(v)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}
