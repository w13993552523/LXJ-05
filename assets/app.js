'use strict';
const $ = (s,root=document)=>root.querySelector(s);
const $$ = (s,root=document)=>Array.from(root.querySelectorAll(s));
const esc = v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const paths={box:'M3 7l9-4 9 4v10l-9 4-9-4V7z M3 7l9 4 9-4 M12 11v10',report:'M6 3h9l4 4v14H6V3z M14 3v5h5 M9 12h7 M9 16h7',template:'M4 4h6v6H4z M14 4h6v6h-6z M4 14h6v6H4z M14 14h6v6h-6z',shield:'M12 3l8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3z M8 12l3 3 5-6',alert:'M12 3l10 18H2L12 3z M12 9v5 M12 17h.01',leaf:'M20 4C8 2 2 9 5 16s15 4 15-12z M4 21L16 9',farm:'M3 21V9l9-6 9 6v12 M8 21v-8h8v8 M12 3v5',truck:'M2 5h12v12H2V5z M14 9h4l4 4v4h-8 M6 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4 M18 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4',store:'M3 10h18l-2-7H5l-2 7z M4 10v11h16V10 M9 21v-7h6v7',user:'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M4 21v-2a8 8 0 0 1 16 0v2',search:'M10 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14 M15 15l6 6',refresh:'M20 7a9 9 0 1 0 1 8 M20 3v5h-5',export:'M12 3v12 M8 11l4 4 4-4 M4 15v6h16v-6',plus:'M12 4v16 M4 12h16',gear:'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8 M12 2v3 M12 19v3 M2 12h3 M19 12h3 M5 5l2 2 M17 17l2 2 M5 19l2-2 M17 7l2-2',back:'M19 12H5 M10 7l-5 5 5 5',empty:'M4 5h16v16H4V5z M8 3v4 M16 3v4 M8 12h8 M8 16h5',file:'M6 3h9l4 4v14H6V3z M14 3v5h5 M9 13h7 M9 17h5'};
function icon(n){return `<span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="${paths[n]||paths.box}"/></svg></span>`}
function btn(t,a,cls='',extra=''){return `<button class="${cls}" data-act="${a}" ${extra}>${esc(t)}</button>`}
function ibtn(t,a,ic,cls='',extra=''){return `<button class="btn-icon ${cls}" data-act="${a}" ${extra}>${icon(ic)}${esc(t)}</button>`}
const groups=[...new Set(PAGES.filter(p=>!p.hiddenFromMenu).map(p=>p.group))];
const groupIcons=['report','shield','template','alert','leaf','farm','box','box','gear','truck','store','user','gear'];
const state={routeContext:readTemplateRouteContext(),page:'forward',index:0,tab:0,stage:0,expanded:false,filters:{},pageNo:1,size:10,openGroups:new Set(['溯源报告查询中心']),selected:new Set(),overlay:null,subQuery:'',navQuery:'',menuChannel:'TS01',relationStep:1,editor:null,components:[],componentIndex:0,conditions:[],stageDraft:[]};
let dataStore={};try{dataStore=JSON.parse((localStorage.getItem('lxj-prototype-v1')||'{}').replace(/蛋品出库/g,'牧场出库'))}catch{}
function persist(){try{localStorage.setItem('lxj-prototype-v1',JSON.stringify(dataStore))}catch{toast('当前浏览器无法保存演示数据')}}
const materialNames=['鸡腿肉','鲜鸡蛋','香菇','稻米','鸡胸肉','黄豆'];
const dishNames=['香菇炖鸡','农家蒸蛋','肥西老母鸡汤','毛豆烧鸡','鸡汁娃娃菜','香菇鸡腿饭'];
const storeNames=['合肥政务万达店','南京新仁里店','上海虹桥天地店','杭州西湖银泰店','合肥银泰中心店','南京建邺万达店'];
function options(name,page){
 if(name==='报告状态')return ['开放中','已关闭'];
 if(name==='是否加急')return ['不加急','应用内加急','短信加急','电话加急'];if(name==='消费者评论')return ['关闭','开启'];if(name==='环节适用类型'||name==='环节类型')return ['菜品','原料','供应商'];if(name==='配置状态')return ['启用','禁用'];if(name==='告警角色')return ['食安管理员','门店负责人','仓储食安人员'];if(name==='告警用户')return ['王敏','李晓','陈宁'];if(name.includes('是否'))return ['是','否'];
 if(name.includes('状态')){
  if(name.includes('营业'))return ['正常','重装','冻结(暂停营业)','关店','新店待开'];
  if(name.includes('配置')&&page.id==='overview')return ['已配置','未配置','部分配置'];
  if(page.id==='consumer')return ['待配置','草稿','生效中','禁用'];
  if(name.includes('质检')||name.includes('审核'))return ['审核通过','待审核','不合格'];
  if(name.includes('运行'))return ['正常','构建中','异常','未初始化'];
  if(name.includes('确认'))return ['已确认','待确认'];
  if(page.id==='storage')return ['已配置','未配置'];
  return ['启用','禁用',...(['template','link'].includes(page.kind)?['草稿']:[])];
 }
 if(name.includes('经营类型'))return ['直营店','特许加盟店','特许直营店'];
 if(name.includes('选餐方式'))return ['点餐式','选餐式','自选+称重','自选+体验','自选式'];
 if(name.includes('库存地点类型'))return ['冷藏库','冷冻库','常温库'];
 if(name.includes('告警类型'))return ['告警条件累加','多告警值对比','全局告警条件'];
 if(name.includes('告警方式'))return ['系统记录','IM通知'];
 if(name.includes('告警频率'))return ['不限制','1小时一次','12小时一次','24小时一次'];
 if(name.includes('是否加急'))return ['不加急','应用内加急','短信加急','电话加急'];
 if(name.includes('用户组类型'))return ['按角色','按用户'];
 if(name.includes('适配模板范围'))return ['按菜品模板','按原料模板','按供应商模板'];
 if(name==='菜品/供应商选择')return ['菜品','供应商'];
 if(name==='状态'&&page.id==='role')return ['启用','禁用'];if(name==='账号来源/状态')return ['外部同步 / 启用','外部同步 / 禁用','本地创建 / 启用','本地创建 / 禁用'];if(name==='告警级别')return ['一般告警','重要告警','紧急告警'];
 if(name==='告警用户组')return ['门店负责人组','仓储食安组','供应商质量组'];
 if(name==='告警阶段')return ['养殖','生产加工','仓储','配送','门店'];
 if(name==='告警环节')return ['到货验收','大仓存储','大仓出库','门店配送','门店收货','门店存储'];
 if(name==='告警信息'||name==='告警对象')return ['温度记录','收货记录','质检单'];
 if(name==='告警字段')return ['记录温度','采集时间','生产日期','整体数据集'];
 if(name==='告警条件')return ['大于','小于','等于','不等于','大于等于（≥）','小于等于（≤）','为空','不为空','包含','不包含'];
 if(name.includes('入库单类型'))return ['采购入库','调拨入库','退货入库'];
 if(name==='退货类型')return ['退款退货','退款不退货','家享卡退货','职能退货'];
 if(name==='退货单类型')return ['正常退货单','OA 品质异常退货单'];
 if(name.includes('损耗类型'))return ['半成品损耗','成品损耗','货品损耗'];
 if(name==='配送类型'||name.includes('配送方式'))return ['ZC＝整车','ZT＝自提','KD＝快递'];
 if(name==='送货类型')return ['1＝直送','2＝代送'];
 if(name==='菜品类型')return ['单品','固定套餐','随心配套餐'];
 if(name.includes('分类')||name.includes('原料类型'))return ['禽肉类','蛋品类','蔬菜类','粮油类'];
 if(name==='账号来源')return ['外部同步','本地创建'];
 if(name==='用户组类型')return ['按角色','按用户'];
 if(name==='是否加急')return ['不加急','应用内加急','短信加急','电话加急'];
 return [];
}
function sample(name,i,p){
 const j=i%6,n=i+1,code=String(n).padStart(4,'0');
 if(name==='半成品编码')return '30000'+j;
 if(name==='半成品名称')return ['调理鸡腿肉','蛋液','香菇配料','米饭','调理鸡胸肉','豆浆基料'][j];
 const extra=detailDemoValues(i);if(name in extra)return extra[name];
 if(p.id==='complaint'){
  if(name==='涉及金额')return [38,0,68.5,128,25,56][j].toFixed(2);
  if(name==='处理反馈')return ['已联系门店核查，待补充调查结果','已回访顾客，门店持续跟进','已登记涉及批次，待食安人员核查'][i%3];
  if(name==='是否食安事件')return ['待判定','是','否'][i%3];
  if(name==='食安事件责任方')return '';
 }
 if(name==='序号'||name==='排序'||name==='站点顺序')return String(n);
 if(name.includes('版本'))return ['V1.0','V1.1','V2.0'][i%3];
 if(name==='状态')return ['template','link'].includes(p.kind)?['启用','启用','禁用','草稿'][i%4]:p.id==='consumer'?['生效中','草稿','待配置'][i%3]:p.id==='storage'?['已配置','未配置'][i%2]:'启用';
 if(name==='原料收货数量')return (Number(REPORT_MODEL.links.find(l=>l.name==='门店收货').tables.find(t=>t.id==='stb_storeReceiptDetail').fields.find(f=>f.key==='received_quantity').example)*(p.id==='forward'?12:1)).toFixed(4);
 if(name==='报告状态')return '开放中';
 if(name==='告警级别名称')return ['一级','二级','三级'][i%3];
 if(name==='告警用户组名称')return ['门店负责人组','仓储食安组','供应商质量组'][i%3];
 const opts=options(name,p);if(opts.length)return opts[i%opts.length];
 if(name==='模板名称')return materialNames[j]+'溯源模板';if(name==='用户组类型')return '按角色';if(name==='告警角色')return '食安管理员';if(name==='消费者评论')return '关闭';if(name==='告警动作')return '系统记录；IM通知';if(name==='告警时间')return '00:00-24:00';if(name.includes('批次'))return 'B202609'+String(28-i%7).padStart(2,'0')+code;
 if(name.includes('数量')||name.includes('总数')||name.includes('存栏')||name.includes('产量'))return (120+i*15).toFixed(name.includes('4 位')||name.includes('4位')?4:0);
 if(name.includes('温度')||name==='报出值')return String((-18.4+i%5*.3).toFixed(1))+' ℃';
 if(name.includes('天数')||name==='最佳赏味期')return '7';
 if(name.includes('日期')||name.includes('时间')||name.includes('有效期')||name.includes('赏味'))return '2026-09-'+String(28-i%7).padStart(2,'0')+(name.includes('日期')?'':' 09:'+String(10+i%40).padStart(2,'0')+':00');
 if(name.includes('溯源报告')&&!name.includes('数量')&&!name.includes('模板'))return (name.includes('消费者')?'CR':name.includes('菜品')?'DR':'MR')+'20260928'+code;
 if(name.includes('溯源记录编码'))return 'TR20260928'+code;
 if(name.includes('消费者模板编码'))return 'CT20260928'+code;
 if(name.includes('模板编码'))return 'ST20260928'+code;
 if(name.includes('环节编码'))return 'TL20260928'+code;
 if(name.includes('告警配置编码')||name==='配置编码')return 'AC20260928'+code;
 if(name.includes('告警记录编码')||name==='告警编码')return 'AR20260928'+code;
 if(name.includes('单号')||name.includes('任务号')||name.includes('单编码'))return (name.includes('配送')?'8':name.includes('收货')?'GR':name.includes('生产')?'MO':'DOC')+'20260928'+code;
 if(name.includes('物料编码')||name.includes('原料编码')||name.includes('货品编码')||name==='对象编码')return '10000'+j;
 if(name.includes('菜品编码')||name.includes('成品编码')||name.includes('产品编码')||name==='POS编码')return '60000'+j;
 if(name.includes('原料名称')||name.includes('物料名称')||name.includes('货品名称'))return materialNames[j];
 if(name.includes('菜品名称')||name.includes('成品名称')||name.includes('产品名称')||name==='订单菜品'||name.includes('涉及菜品'))return dishNames[j];
 if(name.includes('关联原料')||name==='关联物料')return materialNames[j]+' - 10000'+j+'，鲜鸡蛋 - 100001';
 if(name.includes('关联菜品'))return dishNames[j]+' - 60000'+j;
 if(name.includes('门店编码')||name==='所属门店编码')return '51'+String(41+j);
 if(name.includes('门店名称')||name==='门店'||name==='收货门店'||name==='退货门店'||name==='安装门店'||name==='所属门店'||name==='适用门店')return storeNames[j];
 if(name.includes('地址')||name.includes('街道')||name.includes('地点')&&name.includes('发生'))return ['安徽省合肥市政务区','江苏省南京市秦淮区','上海市闵行区'][i%3]+'示范路 18 号';
 if(name.includes('公司')||name==='供应商'||name.includes('供应商名称')||name==='生厂商'||name.includes('生产商名称'))return ['老乡鸡农牧有限公司','安徽鲜食供应有限公司','合肥农产品供应有限公司'][i%3];
 if(name.includes('供应商编码')||name==='供应商ID')return 'V1000'+j;
 if(name.includes('工厂名称')||name.includes('仓库名称')||name==='仓库'||name==='出库仓库'||name==='发货仓')return ['合肥大仓','南京大仓','上海大仓'][i%3];
 if(name==='工厂'||name==='区域中心')return ['合肥食品工厂','南京食品工厂','上海食品工厂'][i%3];
 if(name.includes('库存地点编码')||name.includes('库区编码'))return '51'+String(41+j)+'0001';
 if(name.includes('库存地点名称')||name==='安装库存地点')return ['冷冻库 A01','冷藏库 B02','常温库 C03'][i%3];
 if(name.includes('设备编码')||name.includes('设备号')||name==='测温设备编号')return 'IOT-0'+code;
 if(name.includes('车牌'))return ['皖 A·L'+code,'苏 A·J'+code][i%2];
 if(name.includes('UID'))return 'u_9f2b****'+code;
 if(name.includes('联系方式'))return '138****'+code;
 if(name.includes('编号')||name.includes('编码')||name.includes('ID')||name.includes('工号'))return 'LXJ'+code;
 if(name.includes('创建人')||name.includes('更新人')||name.includes('审核用户')||name.includes('操作人')||name.includes('配置人')||name.includes('负责人')||name==='人员姓名'||name.includes('司机姓名')||name.includes('饲养员')||name==='上传人'||name==='姓名')return ['王敏','李晓','陈宁'][i%3];
 if(name.includes('文件名')||name==='文档名称'||name.includes('报告')&&name==='工序报告')return ['检验报告.pdf','随货票证.pdf','食品安全规范.pdf'][i%3];
 if(name.includes('格式'))return 'PDF';if(name.includes('大小'))return '1.2 MB';
 if(name.includes('单位')||name==='退货计量')return 'kg';if(name==='规格')return ['2kg / 袋','30枚 / 箱','5kg / 箱'][i%3];
 if(name==='保质日期'||name==='失效日期')return '2026-10-05';
 if(name==='评分'||name==='评价打分')return String(4+i%2);
 if(name.includes('得分')||name.includes('分值'))return '100';
 if(name.includes('检验结论')||name.includes('检查结果')||name.includes('检测结果')||name==='结论'||name==='评估结果')return '合格';
 if(name==='告警配置名称'||name==='配置名称'||name==='告警名称')return ['仓储温度超标预警','收货关键字段缺失','效期不足预警'][i%3];
 if(name==='环节名称')return ['到货验收','大仓存储','门店配送','门店收货'][i%4];
 if(name.includes('告警说明'))return '冷冻库存温度超过配置阈值';
 if(name.includes('温层'))return '冷冻';if(name==='表单类型'||name==='评估表目')return '健康评估-集团（直营）';
 if(name.includes('单元'))return '食品安全';if(name==='检视结果')return '优秀';
 if(name==='投诉内容')return '鸡汤口味反馈，已同步门店核查';
 if(name==='事件名称')return '收货包装异常核查';if(name==='事件描述')return '到货外包装破损，源系统已记录处理过程';
 if(name.includes('说明')||name.includes('原因')||name.includes('内容')||name.includes('备注'))return '原型演示记录';
 if(name==='基本单位')return 'kg';if(name==='用户组类型')return '按角色';
 if(name==='运行状态')return '正常';if(name==='数据范围')return '安徽区域 · 6 家门店';
 if(name==='角色名称'||name==='角色')return '食安管理员';if(name==='适用系统')return '溯源中台';
 if(name==='告警级别名称')return ['一般告警','重要告警','紧急告警'][i%3];if(name==='告警用户组名称')return ['门店负责人组','仓储食安组','供应商质量组'][i%3];
 return '—';
}
function records(p){
 if(!dataStore[p.id]){
  if(p.id==='dish-template-detail'){dataStore[p.id]=overviewDishTemplates(p);return dataStore[p.id]}
  const fs=[...p.columns,...(p.detailFields||[]),...(p.healthFields||[]),...p.form,...p.tabs.flatMap(t=>t.fields),...p.filters];
  dataStore[p.id]=Array.from({length:24},(_,i)=>{const r={_key:p.id+'-'+i};fs.forEach(f=>r[f.name]=sample(f.name,i,p));return r});
  if(p.id==='material-reverse')dataStore[p.id].forEach((r,i)=>{
   const dish=Math.floor(i/4),bom=[[0,2],[1],[0,4],[0,2],[2,4],[0,2,3]][dish],material=bom[i%4%bom.length];
   r['原料编码']='10000'+material;r['原料名称']=materialNames[material];r['_dishCode']='60000'+dish;
   r['关联菜品']=dishNames[dish]+' - '+r['_dishCode'];r['门店编码']='51'+(41+dish);r['门店名称']=storeNames[dish];
  });
  if(p.id==='alert-config')dataStore[p.id].forEach((r,i)=>{
   const coverage=['原料','菜品','供应商'][i%3],templates=alertTemplateChoices(coverage);
   r['告警覆盖类型']=coverage;r['适配模板范围']=templates[i%templates.length]?.value||'';r['告警级别']=['一级','二级','三级'][i%3];
   r['配置状态']=r['状态'];r['是否只发送对应门店人员']='否';r['配置说明']=r['告警说明'];r['告警时间']='09:00-22:00';
   r['告警类型']=i%3===2?'全局告警条件':'告警条件累加';r['全局告警条件']=i%3===2?'保质期剩余不足':'';
  });
 }
 if(p.id==='alert-level')dataStore[p.id].forEach((r,i)=>{if(!r['告警级别名称']||r['告警级别名称']==='—')r['告警级别名称']=['一级','二级','三级'][i%3]});
 if(p.id==='alert-group')dataStore[p.id].forEach((r,i)=>{if(!r['告警用户组名称']||r['告警用户组名称']==='—')r['告警用户组名称']=['门店负责人组','仓储食安组','供应商质量组'][i%3]});
 if(['forward','material-reverse'].includes(p.id))dataStore[p.id].forEach((r,i)=>{if(r['原料收货数量']==null)r['原料收货数量']=sample('原料收货数量',i,p)});
 if(p.id==='reverse')dataStore[p.id].forEach(r=>{const sources=dishReverseReports(r);r['关联原料数量']=new Set(sources.map(x=>x['原料编码'])).size;r['关联原料']=[...new Set(sources.map(x=>x['原料名称']))].join('、')||'—';r['关联原料溯源报告']=sources.map(x=>x['溯源报告编码']).join('、')||'—'});
 if(p.id==='public-report')dataStore[p.id].forEach(r=>{r['报告状态']||='开放中'});
 if(['material','production','driver'].includes(p.id))dataStore[p.id].forEach((r,i)=>{const extra=detailDemoValues(i);[...(p.detailFields||[]),...(p.healthFields||[]),...p.tabs.filter(t=>t.name==='原料验收标准').flatMap(t=>t.fields)].forEach(f=>{if(r[f.name]==null)r[f.name]=extra[f.name]??'—'});if(p.id==='driver')r['健康证持有人']=r['司机姓名']});
 if(p.id==='semi')dataStore[p.id].forEach((r,i)=>{for(const name of ['半成品编码','半成品名称'])if(!r[name]||r[name]==='—')r[name]=sample(name,i,p)});
 if(p.id==='dish-display')dataStore[p.id].forEach(r=>r['关联原料数量']=dishMaterialRelations(r).length);
 if(p.id==='complaint')dataStore[p.id].forEach(normalizeComplaint);
 return dataStore[p.id];
}
function page(){return PAGES.find(p=>p.id===state.page)||PAGES[0]}
function row(){const p=page(),ctx=state.routeContext;if(ctx&&location.hash.split('/')[1]==='detail'){const contextual=overviewContextRecord(p,ctx);if(contextual)return contextual}return records(p)[state.index]||records(p)[0]}
function toast(msg){const el=$('#toast');el.textContent=msg;el.style.display='block';clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.style.display='none',3000)}
function status(v){const cls=/禁用|异常|不合格|停用/.test(v)?'danger':/草稿|待|未|部分|配置中/.test(v)?'warning':v==='—'||v==='已关闭'?'info':'';return `<span class="status ${cls}">${esc(v)}</span>`}
function valueCell(name,v,p,i){
 if(name==='操作')return actionsCell(p,i);
 if(name==='供应商资质'&&['forward','material-reverse'].includes(p.id))return `<a href="#supplier-qualifications" class="text" data-act="report-qualifications">查看供应商资质（${reportQualificationContext().rows.length} 条）</a>`;
 if(Array.isArray(v))return multiValueHTML(v);
 if(p.id==='driver'&&name==='健康证图片')return btn('查看健康证','driver-health-preview','text');
 if(p.id==='complaint'&&name==='是否食安事件')return status(v);
 if(p.id==='complaint'&&name==='涉及金额')return v!==null&&v!==''&&Number.isFinite(Number(v))?'¥ '+Number(v).toFixed(2):'—';
 if(p.id==='complaint'&&name==='食安事件责任方')return esc(v||'待定位');
 if(name==='消费者溯源开关')return switchHTML(v!=='禁用','toggle-switch',`data-index="${i}" data-field="${esc(name)}"`);
 if(name.includes('状态')||name==='是否有溯源卡'||name==='是否配置溯源模板')return status(v);
 if(['预览','附件查看','查看','详情','复制','下载','健康证图片','营业执照','门店营业执照','附件地址','附件','检测附件'].includes(name))return btn(name==='下载'?'下载':'预览',name==='下载'?'download':'attachment','text',`data-name="${esc(name)}"`);
 if(/编码|单号|任务号|ID/.test(name))return `<span class="code">${esc(v)}</span>`;
 if(name==='关联物料'||name==='关联原料'||name==='适用门店')return `<button class="text" data-act="row-action" data-index="${i}" data-label="${name==='关联物料'?'关联物料':name==='适用门店'?'适用门店':'关联原料'}"><span class="truncate" title="${esc(v)}">${esc(v)}</span></button>`;
 return `<span class="truncate" title="${esc(v)}">${esc(v)}</span>`;
}
function switchHTML(on,act,extra=''){return `<button class="switch ${on?'on':''}" data-act="${act}" role="switch" aria-checked="${on}" ${extra}><span class="switch-track"></span><span class="muted">${on?'启用':'禁用'}</span></button>`}
function actionsCell(p,i){if(p.id==='public-report')return btn('查看','row-action','text',`data-index="${i}" data-label="查看"`)+btn('关闭溯源报告','row-action','text',`data-index="${i}" data-label="关闭溯源报告" ${records(p)[i]['报告状态']==='已关闭'?'disabled':''}`)+btn('更多','more-actions','text',`data-index="${i}"`);return p.uiActions.slice(0,2).map(a=>btn(a,'row-action','text',`data-index="${i}" data-label="${esc(a)}"`)).join('')+(p.uiActions.length>2?btn('更多','more-actions','text',`data-index="${i}"`):'')}
function tableHTML(p,rows,fields=p.columns,main=false){
 const hasAction=fields.some(f=>f.name==='操作');
 const ff=main&&!hasAction&&p.uiActions.length?[...fields,{name:'操作'}]:fields;
 return `<div class="table-scroll"><table class="data-table"><thead><tr>${main&&p.id==='public-report'?`<th class="check sticky-check"><input type="checkbox" data-public-select-page aria-label="选择本页可关闭报告" ${rows.every(r=>r['报告状态']==='已关闭')?'disabled':''} ${rows.some(r=>r['报告状态']!=='已关闭')&&rows.filter(r=>r['报告状态']!=='已关闭').every(r=>state.closedSelection?.has(r._key))?'checked':''}></th>`:main&&p.kind==='template'?'<th class="check">选择</th>':''}${ff.map((f,i)=>`<th class="${main&&i===0?'sticky-first':''} ${f.name==='操作'?'sticky-action':''}" title="${esc(f.description||f.note||f.name)}">${esc(f.name)}</th>`).join('')}</tr></thead><tbody>${rows.length?rows.map((r,k)=>`<tr>${main&&p.id==='public-report'?`<td class="check sticky-check"><input type="checkbox" data-public-key="${esc(r._key)}" aria-label="选择报告 ${esc(r['消费者溯源报告编码'])}" ${state.closedSelection?.has(r._key)?'checked':''} ${r['报告状态']==='已关闭'?'disabled':''}></td>`:''}${main&&p.kind==='template'?`<td class="check"><input type="radio" name="template-choice" data-act="select-template" value="${records(p).indexOf(r)}" ${state.templateChoice===records(p).indexOf(r)?'checked':''} aria-label="选择模板"></td>`:''}${ff.map((f,i)=>`<td class="${main&&i===0?'sticky-first':''} ${f.name==='操作'?'sticky-action':''}">${main&&i===0&&p.uiActions.length?`<button class="text code" data-act="row-action" data-index="${records(p).indexOf(r)}" data-label="查看">${esc(r[f.name])}</button>`:valueCell(f.name,r[f.name]??'—',p,main?records(p).indexOf(r):k)}</td>`).join('')}</tr>`).join(''):`<tr><td colspan="${ff.length}" class="empty">暂无符合条件的数据</td></tr>`}</tbody></table></div>`;
}
function control(f,v='',readonly=false,scope='filter'){
 const name=f.name,opts=options(name,page());
 const isSel=/下拉|选择|枚举|树/.test(f.type||'')||opts.length>0;
 const attr=`name="${esc(name)}" data-field="${esc(name)}" ${readonly?'disabled':''}`;
 if(/时间段|时间点|日期区间/.test(f.type||'')&&scope==='filter')return /段|区间/.test(f.type)?`<div class="date-range"><input type="date" ${attr} data-part="start" value="${esc(v?.start||'')}" aria-label="${esc(name)}开始"><span class="muted">至</span><input type="date" ${attr} data-part="end" value="${esc(v?.end||'')}" aria-label="${esc(name)}结束"></div>`:`<input type="date" ${attr} value="${esc(v)}">`;
 if(isSel){let oo=opts.length?opts:[...new Set(records(page()).map(r=>r[name]).filter(x=>x&&x!=='—'))];if(v&&typeof v==='string'&&!oo.includes(v))oo=[v,...oo];return `<select ${attr} ${/多选/.test(f.type||'')?'multiple':''}><option value="">${scope==='filter'?'全部':'请选择'}</option>${oo.map(o=>`<option ${v===o?'selected':''}>${esc(o)}</option>`).join('')}</select>`}
 if(/说明|备注|变更说明/.test(name)&&scope==='form')return `<textarea ${attr} maxlength="${name==='配置说明'?100:500}" placeholder="请输入${esc(name)}">${esc(v)}</textarea>`;
 return `<input ${attr} ${readonly?'readonly':''} type="${/时间/.test(name)&&scope==='form'&&name!=='告警时间'?'datetime-local':/天数|数量|最佳赏味期/.test(name)?'number':'text'}" ${name==='配置名称'?'maxlength="20"':''} value="${esc(/时间/.test(name)&&scope==='form'&&name!=='告警时间'?String(v).replace(' ','T'):v==='—'?'':v)}" placeholder="请输入${esc(name)}" autocomplete="off">`;
}
function filtersHTML(p){const visible=state.expanded?p.filters:p.filters.slice(0,6);return `<section class="panel filters"><form id="filters-form"><div class="filter-grid">${visible.map(f=>`<div class="field"><label for="f-${esc(f.name)}">${esc(f.name)}</label>${control(f,state.filters[f.name]||'')}</div>`).join('')}</div><div class="filter-footer">${ibtn('搜索','search','search','primary','type="submit"')}${btn('重置','reset','info','type="button"')}${p.filters.length>6?btn(state.expanded?'收起 ∧':'展开 ∨','expand','text','type="button"'):''}<span class="hint">${p.filters.length} 项查询条件 · 按更新时间倒序</span></div></form></section>`}
function filteredRows(p){return records(p).filter(r=>Object.entries(state.filters).every(([name,val])=>{
 if(p.id==='public-report'&&name==='门店收货时间')return publicScopeMatches(r);
 if(typeof val==='object'){const aliases={'生产日期时间段':'生产日期','收货时间':'收货日期','发生日期':'损耗发生日期','更新时间':'最后更新时间'};const n=name in r?name:aliases[name]||name;return (!val.start||String(r[n]).slice(0,10)>=val.start)&&(!val.end||String(r[n]).slice(0,10)<=val.end);}
 if(!val)return true;if(p.id==='public-report'&&['原料编码','原料名称','原料批次号','供应商编码','供应商名称'].includes(name))return publicScopeMatches(r);const aliases={'原料批次号':'原料批次号','收货时间':'收货日期','发生日期':'损耗发生日期','数据更新时间':'最后更新时间','库存组织':'销售组织','门店/组织':'门店','门店':'适用门店'};if(!(name in r)&&aliases[name])name=aliases[name];const f=p.filters.find(f=>f.name===name);if(name==='菜品名称/编码')return String(r['菜品名称']).includes(val)||r['菜品编码']===val;
 if(name==='关联物料名称')return String(r['关联物料']).includes(val);
 return /精准|精确|编码精准/.test(f?.match||'')?String(r[name])===val:String(r[name]).toLowerCase().includes(val.toLowerCase());
 }))}
function headingHTML(p,title=p.name,description=p.description||'',tools=''){return `<div class="page-heading"><div><h1>${esc(title)}</h1><p>${esc(description)}</p></div><div class="heading-tools">${tools}</div></div>`}
function pagination(total,sub=false){const max=Math.max(1,Math.ceil(total/state.size));return `<div class="pagination"><span class="total">共 ${total} 条记录</span><select aria-label="每页条数" data-act="page-size"><option ${state.size===10?'selected':''} value="10">10 条 / 页</option><option ${state.size===20?'selected':''} value="20">20 条 / 页</option></select>${btn('‹','prev-page','','aria-label="上一页" '+(state.pageNo<=1?'disabled':''))}${Array.from({length:max},(_,i)=>btn(String(i+1),'go-page',state.pageNo===i+1?'primary':'',`data-num="${i+1}"`)).join('')}${btn('›','next-page','','aria-label="下一页" '+(state.pageNo>=max?'disabled':''))}<span>前往</span><input type="number" aria-label="跳转页码" value="${state.pageNo}" min="1" max="${max}" data-act="jump-page"><span>页</span></div>`}
function listHTML(p){
 if(p.id==='overview'){records(p).forEach(r=>{const graph=overviewGraph(r);r['菜品模板状态']=graph.dish.active?'已配置':'未配置';r['原料模板状态']=graph.materialTemplateCount===graph.branches.length?'已配置':graph.materialTemplateCount===0?'未配置':'部分配置';r['菜品模板配置状态']=r['菜品模板状态'];r['原料模板配置状态']=r['原料模板状态'];r['关联原料名称']=graph.branches.map(b=>b.node.name).join('，');r['关联原料类型']=graph.branches.length>1?'多品类关联':'单一关联'})}
 const rows=filteredRows(p),start=(state.pageNo-1)*state.size;
 const editable=['template','link','alert','consumer','consumer-link','editable','knowledge'].includes(p.kind);
 const add=editable?ibtn(p.kind==='knowledge'?'上传文档':'新增','new','plus','primary'):'';
 return headingHTML(p,p.name,p.description,ibtn('刷新','refresh','refresh','plain'))+
 (p.id==='knowledge'?`<section class="panel"><div class="section-title">外部平台入口</div><div class="external-links">${btn('法规知识库 · 待配置','external','plain')}${btn('风险评估 · 待配置','external','plain')}</div></section>`:'')+
 filtersHTML(p)+`<section class="panel ${p.id==='public-report'?'public-report-list':''}">${p.id==='public-report'?publicReportSelectionHTML():''}<div class="table-toolbar"><h2>${esc(p.kind==='report'?'溯源报告列表':p.name+'列表')}</h2><span class="muted">${p.kind==='report'?'按批次归集 · 仅供查看':p.kind==='readonly'?'源系统同步数据':''}</span>${add}${p.id==='dish-display'?btn('按原料批量关闭展示','material-batch-open','primary'):''}${p.id==='location'?btn('批量添加','batch-import','plain'):''}${p.kind==='template'?btn('新增版本','new-version','plain'):''}</div>${tableHTML(p,rows.slice(start,start+state.size),p.columns,true)}${pagination(rows.length)}</section><p class="note">当前展示为原型演示数据；${['readonly','report','consumer-report'].includes(p.kind)?'业务事实以源系统数据为准。':'配置操作保存在本机浏览器，可用于交互评审。'}</p>`;
}
function infoHTML(fields,r){return `<div class="info-grid">${fields.filter(f=>f.name!=='操作').map(f=>`<div class="info-item"><label>${esc(f.name)}</label><div class="value">${valueCell(f.name,r[f.name]??'—',page(),state.index)}</div></div>`).join('')}</div>`}
function panel(title,body,tools=''){return `<section class="panel"><div class="section-title">${esc(title)}${tools?`<span class="right">${tools}</span>`:''}</div>${body}</section>`}
function subRows(t){return Array.from({length:13},(_,i)=>{let r={};t.fields.forEach(f=>r[f.name]=sample(f.name,i,page()));return r})}
function subtableHTML(t){
 if(t.mode==='trace-cards')return traceCardListHTML();
 if(t.mode==='dish-craft')return dishCraftHTML();
 if(page().id==='dish'&&t.name==='BOM关系')return tableHTML(page(),dishMaterialRelations(row()).map(m=>({'父项编码':row()['成品编码'],'子项编码':m.code,'物料编码':m.code,'物料名称':m.name,'数量':'按有效配方','单位':'kg','BOM版本':'V1.0','生效开始时间':'2026-09-01','生效结束时间':'—','门店编码':'适用门店','映射状态':'已关联'})),t.fields);
 if(!t.fields.length)return `<div class="empty">${icon('empty')}<div>暂无已接入数据</div><p class="note">${esc(t.note||'具体字段待源接口清单提供')}</p></div>`;
 if(t.mode==='info')return infoHTML(t.fields,row());
 if(t.mode==='remark')return `<div class="field"><label>食安备注</label><textarea id="food-remark">${esc(row()['食安备注']==='原型演示记录'?'':row()['食安备注']||'')}</textarea>${btn('保存','save-remark','primary')}</div>`;
 const rr=subRows(t).filter(r=>!state.subQuery||Object.values(r).join(' ').includes(state.subQuery));
 return `${/温度/.test(t.name)?chartHTML():''}<div class="sub-filter">${page().id==='store'&&t.name==='门店售卖菜单'?`<select id="menu-channel">${['TS01（堂食）','WX02（堂食扫码点餐）','MT03（美团外卖）','EL04（饿了么外卖）'].map(x=>`<option value="${x.slice(0,4)}" ${x.startsWith(state.menuChannel)?'selected':''}>${x}</option>`).join('')}</select>`:''}<input id="sub-query" placeholder="${t.name==='BOM关系'||t.name==='出库物料明细'?'物料编码 / 物料名称 / 批次':'输入关键词筛选明细'}" value="${esc(state.subQuery)}">${btn('搜索','sub-search','primary')}${btn('重置','sub-reset','info')}<span class="right muted">${t.fields.length} 个字段</span></div>${tableHTML(page(),rr.slice((state.subPage||0)*10,((state.subPage||0)+1)*10),t.fields)}<div class="pagination"><span class="total">共 ${rr.length} 条明细</span>${btn('上一页','sub-prev','',!state.subPage?'disabled':'')}${btn('下一页','sub-next','',(state.subPage||0)+1>=Math.ceil(rr.length/10)?'disabled':'')}</div>${t.note?`<p class="note">${esc(t.note)}</p>`:''}`;
}
function chartHTML(){return `<svg class="chart" viewBox="0 0 760 180" role="img" aria-label="演示温度曲线，温度在零下18.4至零下17.2摄氏度之间"><path d="M50 25H730 M50 65H730 M50 105H730 M50 145H730" stroke="rgba(144,147,153,.2)"/><text x="8" y="30">−16℃</text><text x="8" y="70">−17℃</text><text x="8" y="110">−18℃</text><text x="8" y="150">−19℃</text><path d="M50 118L115 103L180 114L245 97L310 108L375 82L440 103L505 105L570 118L635 104L730 108" stroke="#008042" stroke-width="2" fill="none"/><path d="M50 105H730" stroke="#e6a23c" stroke-dasharray="5 4"/><text x="50" y="174">09:00</text><text x="245" y="174">09:30</text><text x="440" y="174">10:00</text><text x="680" y="174">10:30</text></svg>`}
const complaintRoutes={'供应商':'供应商协同系统','中央厨房':'中央厨房管理系统','大仓':'仓储管理系统','物流配送':'物流配送系统','门店':'门店管理系统'};
function normalizeComplaint(r,i){
 // Existing local records remain unclassified; never infer responsibility during migration.
 const defaults={'涉及金额':null,'处理反馈':'—','日报日期':'—','是否食安事件':'待判定','食安事件责任方':'',_complaintTicket:'CS20260928'+String(i+1).padStart(4,'0'),_foodUnit:'',_foodBasis:'',_foodSends:[]};
 Object.entries(defaults).forEach(([k,v])=>{if(r[k]===undefined)r[k]=v});
}
function complaintTrackingHTML(r){
 const history=r._foodSends||[];
 return panel('食安事件处理',`<div class="info-grid"><div class="info-item"><label>原客诉工单</label><div class="value code">${esc(r._complaintTicket)}</div></div><div class="info-item"><label>责任单位</label><div class="value">${esc(r._foodUnit||'待定位')}</div></div><div class="info-item"><label>最近发送</label><div class="value">${history.length?'模拟发送成功':'未发送'}</div></div><div class="info-item complaint-wide"><label>判定说明</label><div class="value">${esc(r._foodBasis||'—')}</div></div></div>`,btn('食安事件发送','complaint-open','plain'))+
 panel('发送记录',history.length?`<div class="complaint-history">${history.slice().reverse().map(h=>`<article><div class="complaint-history-head"><strong>${esc(h.target)}</strong>${status('模拟发送成功')}</div><p class="muted">${esc(h.time)} · ${esc(h.operator)} · ${esc(h.id)}</p><p>责任归属：${esc(h.party)} / ${esc(h.unit)}</p><p>原客诉工单：${esc(h.ticket)} · 判定说明：${esc(h.basis)}</p><p>涉及金额：${h.amount===null?'—':esc(h.amount)+' 元'} · 日报日期：${esc(h.dailyDate)}</p><p>处理反馈：${esc(h.feedback)}</p></article>`).join('')}</div>`:'<div class="empty complaint-empty">暂无发送记录，完成责任定位后可发送。</div>');
}
function openComplaintEvent(){
 const r=row(),party=r['食安事件责任方'];
 const select=(id,values,value,placeholder)=>`<select id="${id}">${placeholder?`<option value="">${placeholder}</option>`:''}${values.map(v=>`<option value="${esc(v)}" ${v===value?'selected':''}>${esc(v)}</option>`).join('')}</select>`;
 const body=`<div class="notice">当前为原型演示：发送仅保存到本机浏览器，不会实际传递至外部系统。</div>
 <div class="complaint-summary"><strong>${esc(r['门店名称'])}</strong><span class="code">原客诉工单：${esc(r._complaintTicket)}</span><p>${esc(r['投诉内容'])}</p></div>
 <div class="form-grid complaint-form">
 <div class="field"><label for="complaint-is-food"><span class="required">*</span>是否食安事件</label>${select('complaint-is-food',['是','否'],r['是否食安事件'],'请选择')}</div>
 <div class="field"><label for="complaint-party"><span class="required">*</span>食安事件责任方</label>${select('complaint-party',Object.keys(complaintRoutes),party,'请选择责任方')}</div>
 <div class="field wide"><label for="complaint-unit"><span class="required">*</span>责任单位</label><input id="complaint-unit" maxlength="100" value="${esc(r._foodUnit)}" placeholder="填写已定位的供应商、中央厨房或其他责任单位名称"></div>
 <div class="field wide"><label for="complaint-basis"><span class="required">*</span>判定说明</label><textarea id="complaint-basis" maxlength="500" placeholder="填写调查结果及责任归属依据">${esc(r._foodBasis)}</textarea></div>
 <div class="field"><label for="complaint-target">发送目标</label>${select('complaint-target',['对应责任系统','原客诉工单'],r._foodTarget||'对应责任系统')}</div>
 <div class="field"><label>接收位置</label><div class="complaint-route" id="complaint-route" aria-live="polite"></div></div>
 </div><p class="note">发送内容包含原工单、门店、投诉内容、涉及金额、处理反馈、日报日期及人工责任判定。系统名称为演示映射。</p><p id="complaint-error" class="form-error" role="alert"></p>`;
 openOverlay('食安事件发送',body,btn('取消','close-overlay','plain')+btn('保存判定','complaint-save','plain')+btn('一键发送','complaint-send','primary'),'dialog complaint-dialog','complaint-event',{recordKey:r._key});
 updateComplaintRoute();
}
function updateComplaintRoute(){
 const isFood=$('#complaint-is-food').value,party=$('#complaint-party'),unit=$('#complaint-unit'),target=$('#complaint-target');
 party.disabled=unit.disabled=isFood!=='是';target.disabled=isFood!=='是';
 $('#complaint-route').textContent=isFood!=='是'?'仅食安事件可发送':target.value==='原客诉工单'?row()._complaintTicket:(complaintRoutes[party.value]||'选择责任方后显示对应系统');
 $('[data-act="complaint-send"]').disabled=isFood!=='是';
 $('#complaint-error').textContent='';
}
function saveComplaintEvent(send){
 if(page().id!=='complaint'||state.overlay?.task!=='complaint-event')return;
 const r=row();if(r._key!==state.overlay.recordKey)return;
 const food=$('#complaint-is-food').value,party=$('#complaint-party').value,unit=$('#complaint-unit').value.trim(),basis=$('#complaint-basis').value.trim(),target=$('#complaint-target').value;
 const fail=(msg,id)=>{$('#complaint-error').textContent=msg;if(id)$(id).focus()};
 if(!['是','否'].includes(food))return fail('请先判定是否为食安事件。','#complaint-is-food');
 if(!basis)return fail('请填写判定说明。','#complaint-basis');
 if(send&&food!=='是')return fail('仅食安事件可发送。');
 if(food==='是'&&(!complaintRoutes[party]||!unit))return fail('请明确食安事件责任方和责任单位。',!party?'#complaint-party':'#complaint-unit');
 const next={...r,'是否食安事件':food,'食安事件责任方':food==='是'?party:'',_foodUnit:food==='是'?unit:'',_foodBasis:basis,_foodTarget:target};
 if(send){
  const snapshot={ticket:r._complaintTicket,storeCode:r['门店编码'],store:r['门店名称'],content:r['投诉内容'],amount:r['涉及金额'],feedback:r['处理反馈'],dailyDate:r['日报日期'],food,party,unit,basis,target:target==='原客诉工单'?'原客诉工单 · '+r._complaintTicket:complaintRoutes[party]};
  const signature=JSON.stringify(snapshot);
  if((r._foodSends||[]).some(h=>h.signature===signature))return fail('相同内容已发送至该目标，请在详情的发送记录中查看。');
  next._foodSends=[...(r._foodSends||[]),{...snapshot,signature,id:'FA-'+Date.now(),time:new Date().toLocaleString('zh-CN',{hour12:false}),operator:'食安管理员（演示）'}];
 }
 // Save atomically before displaying success, including browsers with unavailable storage.
 const updated=records(page()).map(x=>x._key===r._key?next:x);
 try{localStorage.setItem('lxj-prototype-v1',JSON.stringify({...dataStore,complaint:updated}))}catch{return fail('浏览器保存失败，尚未保存或发送。请检查本地存储后重试。')}
 dataStore.complaint=updated;closeOverlay();render();detailOverlay(state.index);toast(send?'模拟发送成功，可在发送记录中查看':'食安判定已保存');
}

function generalDetail(p,r){
 const tabs=p.tabs;
 if(p.id==='driver')return panel('基本信息',infoHTML(p.columns.filter(f=>f.name!=='操作'),r))+panel('驾驶证信息',infoHTML(p.tabs[0].fields,r))+panel('健康证信息',infoHTML(p.healthFields,r));
 if(p.id==='supplier'){const fields=[...new Map([...p.columns,...tabs.filter(t=>t.mode==='info').flatMap(t=>t.fields)].filter(f=>f.name!=='操作').map(f=>[f.name,f])).values()];return panel('基本信息与营业执照',infoHTML(fields,r))+tabs.filter(t=>t.mode!=='info').map(t=>panel(t.name,`<div class="tab-body">${subtableHTML(t)}</div>`)).join('')}
 return (p.kind==='consumer-report'?reportSummaryHTML(p.columns.filter(f=>f.name!=='操作'),r):panel('基本信息',infoHTML([...p.columns.filter(f=>f.name!=='操作'),...(p.detailFields||[])],r)))+(p.id==='complaint'?complaintTrackingHTML(r):'')+(p.id==='public-report'&&r._closedAt?panel('关闭记录',infoHTML([{name:'关闭时间'},{name:'关闭人'},{name:'关联事件'},{name:'关闭原因'}],{'关闭时间':r._closedAt,'关闭人':r._closedBy,'关联事件':r._closeEvent||'—','关闭原因':r._closeReason||'历史关闭记录'})):'')+(tabs.length?`<section class="panel"><div class="tabs">${tabs.map((t,i)=>btn(t.name,'tab',`tab ${state.tab===i?'active':''}`,`data-num="${i}"`)).join('')}</div><div class="tab-body">${subtableHTML(tabs[state.tab]||tabs[0])}</div></section>`:'');
}
function reportDisplayHTML(html){return ['report','consumer-report'].includes(page().kind)?html.replace(/主表|子表|孙表/g,'').replace(/大仓/g,'仓储'):html}
function reportLinks(p=page(),includeQualifications=false){
 const links=structuredClone(REPORT_MODEL.links).filter(l=>!['牧场出库','农场养殖'].includes(l.name)),kitchen=links.find(l=>l.name==='央厨加工'),receipt=links.find(l=>l.tables.some(t=>t.id==='tb_whReceiptRecord'));
 if(kitchen&&receipt){
  kitchen.tables=kitchen.tables.filter(t=>!['stb_rawMaterialReceipt','ftb_productionInspectionFile'].includes(t.id));
  kitchen.tables.forEach(t=>{if(t.id==='ftb_productionInspection')t.name='成品检测'});
  const source=receipt.tables.find(t=>t.id==='tb_whReceiptRecord');
  const copied=receipt.tables.map(t=>({...structuredClone(t),id:'kitchen_'+t.id,parent:t===source?'tb_kitchenProduction':'kitchen_'+t.parent,type:t===source?'2-子表':'3-孙表',name:t===source?'仓储收货':t.name}));
  kitchen.tables.splice(1,0,...copied);
 }
 if(!includeQualifications&&['forward','material-reverse'].includes(p.id))links.forEach(l=>{l.tables=l.tables.filter(t=>!isSupplierQualification(t));});
 const reverse=p.traceDirection==='reverse'||p.id==='reverse';
 if(reverse)links.reverse();
 if(kitchen&&receipt){links.splice(links.indexOf(kitchen),1);links.splice(links.indexOf(receipt)+(reverse?1:0),0,kitchen)}
 links.forEach(l=>{l.id=l.id.replace(/大仓/g,'仓储');l.name=l.name.replace(/大仓/g,'仓储');l.tables.forEach(t=>t.name=t.name.replace(/大仓/g,'仓储'))});return links;
}

function dishReverseReports(r){
 const source=records(PAGES.find(p=>p.id==='material-reverse'));
 if(Array.isArray(r._reverseReportKeys))return [...new Set(r._reverseReportKeys)].map(key=>source.find(x=>x._key===key)).filter(Boolean);
 return source.filter(x=>(x._dishCode===r['菜品编码']||String(x['关联菜品']||'').includes(r['菜品编码']))&&materialReverseContext(x).storeCode===r['门店编码']);
}
function reportMaterials(p,r){
 if(p.id==='reverse')return dishReverseReports(r).map(source=>({name:source['原料名称'],code:source['原料编码'],batch:source['原料批次号'],sourceReport:source}));
 return [{name:r['原料名称']||materialNames[state.index%materialNames.length],code:r['原料编码']||'100000',batch:r['原料批次号']||'B202609280001'}];
}
function isReverseReport(p=page()){return p.singleStoreReceipt||p.id==='reverse'}

function reportVisibleFields(t){return t.fields.filter(f=>f.visible)}
function reportValue(f,record,p,r,material,reportIndex=state.index){
 const key=f.key,name=f.name;
 if(key==='productionTeams')return detailDemoValues(reportIndex)['班组'];
 if(key==='workshops'||key==='productionLines')return detailDemoValues(reportIndex)[key==='workshops'?'车间':'流水线'];
 if(/^(itemCode|item_code|merchandise_code)$/.test(key))return material.code;
 if(/^(itemName|item_name)$/.test(key))return material.name;
 if(/^(batch|batchCode|batch_code|rawMaterialBatchCode|breedingBatchCode)$/.test(key))return material.batch;
 if(/^(store_code)$/.test(key))return r['门店编码']||'5141';
 if(f.masked||/Mobile|mobile|联系电话/.test(name+' '+key))return '138****1234';
 let ex=(f.example||'').trim();
 if(/^NULL|NULL 不允许|默认/.test(ex))return '—';
 if(ex===name||ex===key||ex===f.description||/需要增补|推测|物料ID|租户ID|通过逗号|用来处理锁/.test(ex))ex='';
 if(ex){ex=ex.replace(/["“”]/g,'').replace(/（[^）]*）/g,'').replace(/\([^)]*\)/g,'').trim();if(ex){if(record>0&&key==='temperature'&&Number.isFinite(Number(ex)))return (Number(ex)+(record%5)*0.15).toFixed(2);if(record>0&&(key==='id'||f.isPrimary)&&/^\d+$/.test(ex))return String(Number(ex)+record);if(record>0&&key==='guid')return ex.slice(0,-4)+String(record+1).padStart(4,'0');return ex;}}
 if(key==='pendingFieldDefinition')return '—';
 if(/attachment|dataUrl|mageId/.test(key))return '未接入';
 if(/No$|Code$|_code$|fbillno|dailyRecordNo/.test(key))return 'DEMO'+String(reportIndex+1).padStart(4,'0')+String(record+1).padStart(2,'0');
 if(/quantity|Qty|Stock|Count|fqty|Quantity|quantity|fdeathqty/.test(key))return /received|actual|closing/i.test(key)?'98.0000':'100.0000';
 if(/Date|date|Time|time|created|lastUpdated|fbizdate/.test(key))return '2026-09-28 09:'+String(10+record).padStart(2,'0')+':00';
 if(/temperature/i.test(key))return '-18.50';if(/humidity/i.test(key))return '55.00';
 if(/unitName/.test(key))return 'kg';
 if(key==='sequenceNo')return String(record+1);
 const v=sample(name,record,p);return v==='原型演示记录'?'—':v;
}
function materialReverseContext(r){
 const n=Number(String(r._key||'').match(/-(\d+)$/)?.[1]||state.index)+1,suffix=String(n).padStart(4,'0');
 const ctx={receiptGuid:'a8c71234-6b90-4e12-9d31-'+String(n).padStart(12,'0'),lineGuid:'b9d82345-7c01-4f23-8e42-'+String(n).padStart(12,'0'),receiptCode:'SH20260928'+suffix,storeCode:r['门店编码']||'51'+String(41+(n-1)%6),storeName:r['门店名称']||storeNames[(n-1)%6],deliveryOrderNo:'820260928'+suffix,purchaseOrderNo:'4500'+suffix,inboundCode:'RK20260923'+suffix,inboundId:String(100000+n),inboundDetailId:String(200000+n),outboundCode:'CK20260928'+suffix,outboundId:String(800000+n),outboundDetailId:String(800100+n),inventoryId:String(300000+n),taskId:String(900000+n),departCode:'FC20260928'+suffix,inspectionId:String(600000+n),warehouseCode:'WH00'+String(1+(n-1)%3),supplierCode:'SUP'+String(1+(n-1)%3).padStart(3,'0'),productionOrderNo:'MO20260926'+suffix,productionDate:String(r['原料生产日期']||'2026-09-15').slice(0,10),expectedReceiptTime:r['预计收货时间']||'2026-09-28 10:00:00',receiptTime:'2026-09-28 10:30:00',quantity:'98.0000'};
 ctx.materialCode=r['原料编码']||'100000';ctx.materialName=r['原料名称']||materialNames[(n-1)%6];ctx.batchCode=r['原料批次号']||'B202609280001';ctx.lineageKey=ctx.receiptGuid+'|'+ctx.materialCode+'|'+ctx.batchCode;return ctx;
}
function materialReverseLinkedValue(f,t,ctx){
 const map={store_code:ctx.storeCode,purchase_code:ctx.receiptCode,delivery_order_no:ctx.deliveryOrderNo,deliveryOrderNo:ctx.deliveryOrderNo,purchase_order_no:ctx.purchaseOrderNo,purchase_orde_no:ctx.purchaseOrderNo,purchaseOrderNo:ctx.purchaseOrderNo,purchaseOrderCode:ctx.purchaseOrderNo,warehouseCode:ctx.warehouseCode,receiptCode:ctx.inboundCode,receiptId:ctx.inboundId,receiptDetailId:ctx.inboundDetailId,shipmentCode:ctx.outboundCode,shipmentId:ctx.outboundId,shipmentDetailId:ctx.outboundDetailId,inventoryId:ctx.inventoryId,invId:ctx.inventoryId,taskId:ctx.taskId,orderId:ctx.outboundId,orderDetailId:ctx.outboundDetailId,departId:ctx.taskId,departCode:ctx.departCode,iqcId:ctx.inspectionId,iqcCode:'ZJ'+ctx.inboundCode.slice(2),productionOrderNo:ctx.productionOrderNo,itemCode:ctx.materialCode,item_code:ctx.materialCode,merchandise_code:ctx.materialCode,itemName:ctx.materialName,batch:ctx.batchCode,batchCode:ctx.batchCode,batch_code:ctx.batchCode,rawMaterialBatchCode:ctx.batchCode,breedingBatchCode:ctx.batchCode,manufactureDate:ctx.productionDate+' 00:00:00',make_date:ctx.productionDate+' 00:00:00',productionDate:ctx.productionDate,produceTimestamp:ctx.productionDate+' 08:00:00',shipFromCode:ctx.supplierCode,supplier:ctx.supplierCode,purchase_date:ctx.receiptTime.slice(0,10)+' 00:00:00',confirm_time:ctx.receiptTime,confirm_flag:'2',del_flag:'N',ship_date:'2026-09-28 08:00:00'};
 if(f.key==='guid')return t.id==='tb_storeRecvRecord'?ctx.receiptGuid:t.id==='stb_storeReceiptDetail'?ctx.lineGuid:undefined;
 if(t.id==='stb_storeReceiptDetail'){if(f.key==='received_quantity')return ctx.quantity;if(f.key==='receivable_quantity')return '100.0000';if(f.key==='difference_quantity')return '2.0000';}
 return Object.prototype.hasOwnProperty.call(map,f.key)?map[f.key]:undefined;
}
function materialReverseReceiptHTML(p,r){if(!p.singleStoreReceipt)return '';const ctx=materialReverseContext(r),fields=[{name:'收货单号'},{name:'门店编码'},{name:'门店名称'},{name:'预计收货时间'},{name:'收货时间'},{name:'原料编码'},{name:'原料名称'},{name:'原料批次号'},{name:'实收数量'}];return reportSummaryHTML(fields,{'收货单号':ctx.receiptCode,'门店编码':ctx.storeCode,'门店名称':ctx.storeName,'预计收货时间':ctx.expectedReceiptTime,'收货时间':ctx.receiptTime,'原料编码':ctx.materialCode,'原料名称':ctx.materialName,'原料批次号':ctx.batchCode,'实收数量':ctx.quantity},'当前门店收货记录',5);}

function baseReportRecords(t,materialIndex=0){
 const p=page(),r=row(),material=reportMaterials(p,r)[materialIndex]||reportMaterials(p,r)[0],source=material?.sourceReport||r,ctx=isReverseReport(p)?materialReverseContext(source):null;
 const sourcePage=ctx?PAGES.find(x=>x.id==='material-reverse'):p,sourceIndex=ctx?records(sourcePage).indexOf(source):state.index,singleLine=ctx&&t.id==='stb_storeReceiptDetail';
 return Array.from({length:t.type.startsWith('1-')||singleLine?1:12},(_,index)=>{const values={};reportVisibleFields(t).forEach(f=>{const linked=ctx?materialReverseLinkedValue(f,t,ctx):undefined;values[f.key]=linked===undefined?reportValue(f,index,sourcePage,source,material,sourceIndex):linked});return {_index:index,values,...(ctx?{_lineageKey:ctx.lineageKey,_storeReceiptGuid:ctx.receiptGuid}:{})}});
}

function reportCell(f,v){
 if(Array.isArray(v))return multiValueHTML(v);
 if(/attachment|dataUrl|processReport/.test(f.key)||/附件|报告$/.test(f.name)&&!/^检验|检测/.test(f.name))return `<span class="report-file-value">${esc(v==='未接入'||v==='—'?'暂无附件':v)}</span> ${btn('预览','report-attachment','text',`data-name="${esc(f.name)}"`)}`;
 if(/status|flag|result|conclusion/i.test(f.key)&&v!=='—')return status(v);
 return `<span class="${/编码|单号|编号|ID|主键/.test(f.name)?'code ':' '}report-field-value" title="${esc(v)}">${esc(v)}</span>`;
}
function reportInfoHTML(t,record){return `<div class="info-grid report-info-grid">${reportVisibleFields(t).map(f=>`<div class="info-item" data-field-key="${esc(f.key)}"><label title="${esc(f.description)}">${esc(f.name)}</label><div class="value">${reportCell(f,record.values[f.key]??'—')}</div></div>`).join('')}</div>`}
function reportTableKey(t,m){return page().id+'-'+state.index+'-'+m+'-'+t.id}
function reportNestedTables(link,t){return link.tables.filter(child=>child.parent===t.id)}
function isInlineReportLink(link){return page().id==='forward'&&link.name==='央厨加工'||isReverseReport()&&['门店收货','物流配送','仓储出库','仓储存储','央厨加工'].includes(link.name)}
function reportInlinePaths(link,t,m){
 if(!t.parent)return [[]];
 const parent=link.tables.find(x=>x.id===t.parent);
 return reportInlinePaths(link,parent,m).flatMap(path=>reportRecords(parent,m,path).map(r=>r._path));
}
function reportTableRecords(link,t,m,path=[]){
 if(t._summaryRecords)return t._summaryRecords;
 return isInlineReportLink(link)?reportInlinePaths(link,t,m).flatMap(parentPath=>reportRecords(t,m,parentPath)):reportRecords(t,m,path);
}
function reportDataTable(link,t,materialIndex,parentPath=[]){
 const fields=reportVisibleFields(t),key=reportTableKey(t,materialIndex)+'/'+parentPath.join('.'),query=state.reportQueries?.[key]||'',date=state.reportDates?.[key]||{},pageNo=state.reportPages?.[key]||0;
 if(!fields.length)return '<div class="empty">暂无已定义的展示字段</div>';
 const dateField=fields.find(f=>(f.searchType||'').startsWith('3-')||f.attribute==='日期');
 const records=reportTableRecords(link,t,materialIndex,parentPath).filter(r=>(!query||Object.values(r.values).some(v=>String(v).toLowerCase().includes(query.toLowerCase())))&&(!dateField||(!date.start||String(r.values[dateField.key]).slice(0,10)>=date.start)&&(!date.end||String(r.values[dateField.key]).slice(0,10)<=date.end)));
 const max=Math.max(1,Math.ceil(records.length/5)),current=Math.min(pageNo,max-1),rows=records.slice(current*5,(current+1)*5),children=isInlineReportLink(link)?[]:reportNestedTables(link,t),showReceipt=isInlineReportLink(link)&&t.parent==='kitchen_tb_whReceiptRecord';
 const receiptLabel=r=>reportRecords(link.tables.find(x=>x.id===t.parent),materialIndex,r._path.slice(0,-2))[r._path.at(-2)]?.values.receiptCode||'—';
 const exportKey=registerReportExport(key,{name:link.name+'-'+t.name,headers:[...(showReceipt?['关联收货单']:[]),...fields.map(f=>f.name)],rows:records.map(r=>[...(showReceipt?[receiptLabel(r)]:[]),...fields.map(f=>r.values[f.key]??'—')])});
 return `<div class="sub-filter report-filter" data-report-key="${esc(key)}"><input class="report-query" value="${esc(query)}" placeholder="搜索${esc(t.name)}" aria-label="${esc(t.name)}关键词">${dateField?`<label class="muted">${esc(dateField.name)}</label><div class="date-range"><input class="report-date-start" type="date" value="${esc(date.start||'')}" aria-label="开始日期"><span>至</span><input class="report-date-end" type="date" value="${esc(date.end||'')}" aria-label="结束日期"></div>`:''}${btn('搜索','report-search','primary')}${btn('重置','report-reset','info')}${ibtn('导出','report-export','export','plain',`data-export-key="${esc(exportKey)}" ${records.length?'':'disabled'}`)}<span class="muted report-export-hint">导出当前筛选的全部 ${records.length} 条记录</span></div>
 <div class="table-scroll"><table class="data-table report-data-table"><thead><tr>${showReceipt?'<th>关联收货单</th>':''}${fields.map(f=>`<th data-field-key="${esc(f.key)}" title="${esc(f.description)}">${esc(f.name)}</th>`).join('')}${children.length?'<th class="sticky-action">关联记录</th>':''}</tr></thead><tbody>${rows.map(r=>`<tr data-record-key="${esc(r._recordKey)}">${showReceipt?`<td class="code">${esc(receiptLabel(r))}</td>`:''}${fields.map(f=>`<td>${reportCell(f,r.values[f.key]??'—')}</td>`).join('')}${children.length?`<td class="sticky-action report-related-links">${children.map(c=>`<a href="#report-related" data-act="report-related" data-link="${esc(link.id)}" data-table="${esc(c.id)}" data-material="${materialIndex}" data-path="${esc(JSON.stringify(r._path))}">${esc(c.name.replace(/主表|子表|孙表/g,''))}（${reportRecords(c,materialIndex,r._path).length}）</a>`).join('')}</td>`:''}</tr>`).join('')||`<tr><td colspan="${fields.length+(children.length?1:0)+(showReceipt?1:0)}" class="empty">暂无符合条件的数据</td></tr>`}</tbody></table></div>
 <div class="pagination report-pagination" data-report-key="${esc(key)}"><span class="total">共 ${records.length} 条 · 5 条 / 页</span>${btn('上一页','report-prev','',current===0?'disabled':'')}<span>${current+1} / ${max}</span>${btn('下一页','report-next','',current>=max-1?'disabled':'')}</div>`;
}

function reportTemperatureChart(t,materialIndex,parentPath=[]){const f=reportVisibleFields(t).find(f=>f.key==='temperature'),time=reportVisibleFields(t).find(f=>/collectedTime|created/.test(f.key));if(!f||!time)return '';const rows=reportRecords(t,materialIndex,parentPath).slice(0,8),values=rows.map(r=>parseFloat(r.values[f.key])).filter(Number.isFinite);if(!values.length)return '';const min=Math.min(...values)-1,max=Math.max(...values)+1;const points=values.map((v,i)=>[50+i*680/Math.max(1,values.length-1),145-(v-min)/(max-min)*120]);return `<svg class="chart" viewBox="0 0 760 180" role="img" aria-label="${esc(t.name)}演示温度曲线"><path d="M50 25H730 M50 85H730 M50 145H730" stroke="rgba(144,147,153,.2)"/><text x="4" y="30">${max.toFixed(1)}℃</text><text x="4" y="150">${min.toFixed(1)}℃</text><polyline points="${points.map(p=>p.join(',')).join(' ')}" stroke="#008042" stroke-width="2" fill="none"/><text x="50" y="174">${esc(rows[0].values[time.key])}</text><text x="580" y="174">${esc(rows[rows.length-1].values[time.key])}</text></svg>`}
function reportSectionHTML(link,t,m,depth=0){
 if(isInlineReportLink(link)){
  const records=reportTableRecords(link,t,m),singleRoute=isReverseReport()&&t.id==='stb_deliveryRoute',body=singleRoute?deliveryRouteMapHTML(m,records[0])+reportInfoHTML(t,records[0]):t.parent?`<div class="report-table-body">${reportTemperatureChart(t,m,reportInlinePaths(link,t,m)[0]||[])}${reportDataTable(link,t,m)}</div>`:reportInfoHTML(t,records[0]);
  return `<section id="report-table-${m}-${link.tables.indexOf(t)}" class="report-source-section" data-report-table="${esc(t.id)}"><div class="report-source-heading"><h3>${esc(t.name)}</h3><span class="muted">${records.length} 条记录 · ${reportVisibleFields(t).length} 个字段</span></div>${body}</section>`;
 }
 return `<section id="report-table-${m}-${link.tables.indexOf(t)}" class="report-source-section" data-report-table="${esc(t.id)}"><div class="report-source-heading"><h3>${esc(t.name)}</h3><span class="muted">${reportRecords(t,m).length} 条记录 · ${reportVisibleFields(t).length} 个字段</span></div><div class="report-table-body">${reportDataTable(link,t,m)}</div></section>`;
}

function reportChildOverlayHTML(o){
 const link=reportLinks().find(l=>l.id===o.linkId),t=link?.tables.find(t=>t.id===o.tableId);if(!t)return '<div class="empty">关联记录不存在</div>';
 const parent=link.tables.find(t=>t.id===o.parent),path=o.parentPath||[];
 return `<p class="report-context">${esc(link.name)} / ${esc(parent?.name||'关联记录')} 第 ${(path.at(-1)||0)+1} 条 / ${esc(t.name)}<br><span class="muted">仅展示当前选中记录的关联数据</span></p>${reportTemperatureChart(t,o.material,path)}${reportDataTable(link,t,o.material,path)}`;
}

function reportHTML(p,r){
 const links=reportLinks(p);state.stage=Math.max(0,Math.min(state.stage,links.length-1));const current=links[state.stage],materials=reportMaterials(p,r),mainTables=isInlineReportLink(current)?current.tables:current.tables.filter(t=>t.type.startsWith('1-'));
 const overviewFields=p.columns.filter(f=>!['操作','溯源报告'].includes(f.name));
 const overviewRow={...r};
 if(['forward','material-reverse'].includes(p.id))overviewFields.splice(3,0,{name:'供应商资质'});
 if(p.id==='forward'){
  overviewFields.splice(overviewFields.findIndex(f=>f.name==='报告生成时间'),0,{name:'仓储收货时间'});
  const receipt=links.find(l=>l.name==='仓储入库')?.tables.find(t=>!t.parent);
  overviewRow['仓储收货时间']=r['仓储收货时间']|| (receipt?reportRecords(receipt)[0]?.values.checkInAt:'—');
 }
 return headingHTML(p,p.name+'详情',`${p.id==='forward'?'正向追溯 · 原料到门店':p.singleStoreReceipt?'逆向追溯 · 当前门店收货原料到来源':'逆向追溯 · 菜品到来源'} · 报告编码 ${r['溯源报告编码']}`,ibtn('返回','back','back','plain'))+
 reportSummaryHTML(overviewFields,overviewRow)+materialReverseReceiptHTML(p,r)+
 `<div class="stage-bar report-stage-bar">${btn('‹','stage-prev','','aria-label="上一环节" '+(state.stage===0?'disabled':''))}${links.map((link,i)=>`<button class="stage-button ${state.stage===i?'active':''}" data-act="stage" data-num="${i}" aria-pressed="${state.stage===i}"><span class="stage-number">${i+1}</span>${esc(link.name)}</button>`).join('')}${btn('›','stage-next','','aria-label="下一环节" '+(state.stage===links.length-1?'disabled':''))}</div>
 <div class="report-body"><nav class="report-nav" aria-label="${esc(current.name)}信息定位"><div class="report-nav-caption">${esc(current.name)}</div>${current.tables.map((t,i)=>({...t,_tableIndex:i})).filter(t=>!t.parent||isInlineReportLink(current)).map((t)=>`<button class="${t.parent?'report-nav-child':''}" data-act="report-anchor" data-num="${t._tableIndex}" title="${esc(t.name)}">${esc(t.name)}</button>`).join('')}</nav><div class="report-item">${materials.map((material,m)=>`<details ${p.id==='reverse'||m===0?'open':''} class="report-material"><summary>${esc(material.name)} · ${esc(material.code)}<span class="muted">${esc(material.batch)}</span></summary><div class="report-section">${material.sourceReport?`<p class="report-context">来源逆向报告：${esc(material.sourceReport['溯源报告编码'])}</p>${materialReverseReceiptHTML(PAGES.find(x=>x.id==='material-reverse'),material.sourceReport)}`:''}${mainTables.map(t=>reportSectionHTML(current,t,m)).join('')}</div></details>`).join('')||'<div class="empty">暂无关联原料逆向报告</div>'}</div></div>`;
}

function readTemplateRouteContext(){try{const raw=new URLSearchParams(location.search).get('templateContext');const ctx=raw?JSON.parse(raw.replace(/蛋品出库/g,'牧场出库')):null;return ctx&&typeof ctx==='object'&&['dish-template-detail','material-template','supplier-template','link'].includes(ctx.page)?ctx:null}catch{return null}}
function overviewDishTemplates(p){return Array.from({length:6},(_,i)=>({'_key':'dish-template-'+i,'模板编码':'DT20260928'+String(i+1).padStart(4,'0'),'模板名称':dishNames[i]+'溯源模板','菜品编码':'60000'+i,'菜品名称':dishNames[i],'溯源菜品范围':dishNames[i]+' - 60000'+i,'模板说明':'门店收货与存储环节配置','模板状态':i===5?'禁用':'启用','状态':i===5?'禁用':'启用','最后更新时间':'2026-09-28 09:00:00','创建时间':'2026-09-28 09:00:00','创建人':'食安管理员','版本号':'V1.0','_stages':[{name:'门店阶段',links:['门店收货','门店存储']}]}))}
function overviewIsActive(r){return /^(启用|开启|生效中)$/.test(r?.['状态']||r?.['模板状态']||'')}
function overviewLatestTemplate(id,predicate){const p=PAGES.find(p=>p.id===id);return records(p).filter(r=>overviewIsActive(r)&&predicate(r)).sort((a,b)=>String(b['最后更新时间']||b['创建时间']||'').localeCompare(String(a['最后更新时间']||a['创建时间']||''))||String(b['版本号']||'').localeCompare(String(a['版本号']||''),undefined,{numeric:true}))[0]||null}
function overviewDefaultStages(type){return type==='dish'?[{name:'门店阶段',links:['门店收货','门店存储']}]:type==='supplier'?[{name:'农牧阶段',links:['农场养殖','牧场出库']}]:[{name:'门店阶段',links:['门店存储','门店收货']},{name:'配送阶段',links:['门店配送']},{name:'仓储阶段',links:['大仓出库','大仓存储','到货验收']}]}
function overviewNode(type,name,code,material,template){const target=type==='dish'?'dish-template-detail':type==='supplier'?'supplier-template':'material-template';const stages=template?structuredClone(template._stages||overviewDefaultStages(type)):[];return {type,name,code,material,template,target,stages,active:!!template}}
function overviewGraph(r){const n=Math.max(0,Number(String(r['菜品编码']||'600000').slice(-1))%6),dishCode=r['菜品编码']||'60000'+n,dishName=r['菜品名称']||dishNames[n],dish=overviewNode('dish',dishName,dishCode,null,overviewLatestTemplate('dish-template-detail',t=>t['菜品编码']===dishCode));
 const mapping=[[0,2],[1],[0,4],[0,2],[2,4],[0,2,3]],indices=r._bomMaterials||mapping[n];const branches=indices.map(i=>{const material={name:materialNames[i],code:'10000'+i},template=overviewLatestTemplate('material-template',t=>t['原料编码']===material.code),node=overviewNode('material',material.name,material.code,material,template);const supplierPage=PAGES.find(p=>p.id==='supplier-template'),candidates=records(supplierPage).filter(t=>t['原料编码']===material.code),supplierMap=new Map();candidates.forEach(t=>{if(t['供应商编码']&&!supplierMap.has(t['供应商编码']))supplierMap.set(t['供应商编码'],t['供应商名称'])});const suppliers=[...supplierMap].map(([code,name])=>overviewNode('supplier',name,code,material,overviewLatestTemplate('supplier-template',t=>t['原料编码']===material.code&&t['供应商编码']===code)));return {node,suppliers,height:Math.max(150,suppliers.length*96+40)}});
 return {dish,branches,materialTemplateCount:branches.filter(b=>b.node.active).length,supplierTemplateCount:branches.reduce((total,b)=>total+b.suppliers.filter(n=>n.active).length,0)};
}
function overviewTemplateContext(node,mode=node.active?'detail':'new'){return {overviewIndex:state.index,page:node.target,mode,index:node.template?records(PAGES.find(p=>p.id===node.target)).indexOf(node.template):0,templateCode:node.template?.['模板编码']||'',entityType:node.type,entityName:node.name,entityCode:node.code,materialName:node.material?.name||'',materialCode:node.material?.code||'',stages:node.active?node.stages:overviewDefaultStages(node.type)}}
function overviewContextHref(ctx){const url=new URL(location.href);url.searchParams.set('templateContext',JSON.stringify(ctx));url.hash=ctx.page+'/'+ctx.mode+'/'+(ctx.index||0);return url.href}
function overviewNameHTML(node,root=false){const href=overviewContextHref(overviewTemplateContext(node));const name=`${esc(node.name)}${root?' · '+esc(node.code):''}`;return `<div class="tree-entity ${root?'tree-entity-root':''} ${node.active?'':'tree-entity-missing'}">${node.active?`<a class="tree-entity-name" href="${esc(href)}" target="_blank" rel="noopener" title="查看 ${esc(node.name)} 溯源模板">${name}</a>`:`<span class="tree-entity-name" tabindex="0">${name}</span>`}<small>${node.active?esc(node.template['版本号']||'V1.0')+' · 已启用':'未配置启用模板'}</small><div class="tree-entity-actions"><a class="tree-template-action" href="${esc(href)}" target="_blank" rel="noopener">${node.active?'查看溯源模板':'创建溯源模板'} ↗</a></div></div>`}
function overviewRingModel(name,type,version='V1.0'){const normal=name.replace('储存','存储'),pageLink=PAGES.find(p=>p.id==='link'),known=records(pageLink).filter(r=>overviewIsActive(r)&&r['环节名称']===normal&&r['版本号']===version&&r['环节类型']==={dish:'菜品',material:'原料',supplier:'供应商'}[type]).sort((a,b)=>String(b['版本号']).localeCompare(String(a['版本号']),undefined,{numeric:true}))[0];let hash=0;for(const ch of normal+type+version)hash=(hash*31+ch.charCodeAt(0))>>>0;return {name:normal,type:{dish:'菜品',material:'原料',supplier:'供应商'}[type],version:known?.['版本号']||version,code:known?.['环节编码']||'TL'+String(hash).padStart(10,'0'),record:known||null}}
function overviewStagesHTML(node){if(!node.active)return '<div class="tree-stage-empty">配置模板后展示环节</div>';return `<div class="tree-stages">${node.stages.flatMap(stage=>stage.links.map((name,i)=>{const ring=overviewRingModel(typeof name==='string'?name:name.name,node.type,typeof name==='string'?'V1.0':name.version||'V1.0'),ctx={overviewIndex:state.index,page:'link',mode:'detail',index:ring.record?records(PAGES.find(p=>p.id==='link')).indexOf(ring.record):0,ringName:ring.name,ringType:ring.type,ringVersion:ring.version,ringCode:ring.code,stageName:stage.name,templateCode:node.template['模板编码'],virtual:!ring.record},id='ring-'+state.overviewRings.length;state.overviewRings.push({...ring,id,stageName:stage.name,templateCode:node.template['模板编码']});return `<a class="tree-stage" href="${esc(overviewContextHref(ctx))}" target="_blank" rel="noopener" data-overview-ring="${id}" aria-label="查看${esc(ring.name)}环节详情">${esc(ring.name)}</a>`})).join('')}</div>`}
function overviewHTML(p,r){const graph=overviewGraph(r);state.overviewRings=[];const height=graph.branches.reduce((sum,b)=>sum+b.height,0),rootWidth=390,branchX=rootWidth+24;let y=0;const middles=graph.branches.map(b=>{const mid=y+b.height/2;y+=b.height;return mid}),paths=[`M174 ${height/2}H${branchX}`,`M${branchX} ${middles[0]||0}V${middles[middles.length-1]||0}`,...middles.map(mid=>`M${branchX} ${mid}H${branchX+24}`)];const tree=`<div class="tree-scroll"><div class="template-tree" style="--tree-height:${height}px"><svg class="tree-connectors" viewBox="0 0 438 ${height}" aria-hidden="true"><path d="${paths.join(' ')}"/></svg><div class="tree-dish-lane">${overviewNameHTML(graph.dish,true)}${overviewStagesHTML(graph.dish)}</div><div class="tree-material-list">${graph.branches.map(branch=>`<div class="tree-material-branch" style="height:${branch.height}px"><div class="tree-material-lane"><div class="tree-material-title">${overviewNameHTML(branch.node)}</div>${overviewStagesHTML(branch.node)}</div><div class="tree-supplier-list">${branch.suppliers.map(supplier=>`<div class="tree-supplier-lane">${overviewNameHTML(supplier)}${overviewStagesHTML(supplier)}</div>`).join('')}<a class="tree-add-supplier" href="${esc(overviewContextHref({...overviewTemplateContext(overviewNode('supplier','', '',branch.node.material,null),'new')}))}" target="_blank" rel="noopener">＋ 新增供应商模板</a></div></div>`).join('')}</div></div></div>`;const info={'菜品编码':graph.dish.code,'菜品名称':graph.dish.name,'关联原料模板':graph.materialTemplateCount,'关联供应商模板':graph.supplierTemplateCount};
 return headingHTML(p,'关联溯源模板','查看当前菜品关联的模板及各模板中的环节信息',ibtn('返回','back','back','plain'))+panel('基础信息总览',infoHTML(Object.keys(info).map(name=>({name})),info))+panel('关联溯源模板',`<div class="tree-legend"><span><i class="tree-key active"></i>已配置启用模板</span><span><i class="tree-key missing"></i>未配置启用模板</span><span class="right muted">点击名称或环节，在新标签页查看详情</span></div>${tree}`);
}
function overviewContextRecord(p,ctx){if(ctx.page!==p.id)return null;if(p.id!=='link'){const selected=records(p).find(r=>r['模板编码']===ctx.templateCode);return selected||null}const known=records(p).find(r=>r['环节编码']===ctx.ringCode&&r['环节名称']===ctx.ringName);if(known)return known;
 const source=REPORT_MODEL.links.find(l=>l.name===({到货验收:'大仓入库',大仓存储:'大仓存储',大仓出库:'大仓出库',门店配送:'物流配送',门店收货:'门店收货'}[ctx.ringName]||ctx.ringName)),fields=source?.tables.find(t=>t.type.startsWith('1-'))?.fields.filter(f=>f.visible)||[];
 const record={'_key':'context-'+ctx.ringCode,'环节编码':ctx.ringCode,'环节名称':ctx.ringName,'环节说明':ctx.ringName+'环节的信息配置','环节适用类型':ctx.ringType,'环节类型':ctx.ringType,'环节状态':'启用','状态':'启用','创建时间':'2026-09-28 09:00:00','最后更新时间':'2026-09-28 09:00:00','版本号':ctx.ringVersion,'表英文名':source?.tables[0]?.id||'store_storage','表中文名':ctx.ringName,'_fields':fields.map((f,i)=>({'排序':i+1,'字段名':f.name,'字段英文名':f.key,'字段采集说明':f.description,'字段属性':f.attribute,'是否必填':f.required?'是':'否','是否可编辑':'否','字段类型':f.dataType,'列表显示':f.showLevel.startsWith('3-')?'是':'否','支持筛选':f.search?'是':'否','现场采集':'否','是否为主键':f.isPrimary?'是':'否'})),'_info':source?source.tables.filter(t=>!t.type.startsWith('1-')).map(t=>t.name.replace(/主表|子表|孙表/g,'')):['库存地点温度记录']};
 if(!fields.length&&ctx.ringName==='门店存储')record._fields=['门店编码','库存地点编码','设备编码','记录时间','记录温度'].map((name,i)=>({'排序':i+1,'字段名':name,'字段英文名':['store_code','storage_location_code','device_code','record_time','temperature'][i],'字段属性':'input','是否可编辑':'否','是否必填':'是','字段类型':i===4?'数字':'单行文本'}));return record;
}
function overviewApplyEditorContext(p,e){const ctx=state.routeContext;if(!ctx||ctx.page!==p.id)return;const values=e.values;if(p.kind==='template'){if(!e.isNew){if(!values['溯源原料范围']||values['溯源原料范围']==='—')values['溯源原料范围']=(ctx.materialName||ctx.entityName)+' - '+(ctx.materialCode||ctx.entityCode);if(ctx.entityType==='supplier'&&(!values['供应商范围']||values['供应商范围']==='—'))values['供应商范围']=ctx.entityName+' - '+ctx.entityCode;}if(e.isNew){values['模板名称']=ctx.entityName?ctx.entityName+'溯源模板':'';values['模板说明']='';values['状态']='草稿';values['模板状态']='启用';values['溯源菜品范围']=ctx.entityType==='dish'?ctx.entityName+' - '+ctx.entityCode:values['溯源菜品范围'];values['菜品编码']=ctx.entityType==='dish'?ctx.entityCode:values['菜品编码'];values['菜品名称']=ctx.entityType==='dish'?ctx.entityName:values['菜品名称'];values['溯源原料范围']=ctx.entityType==='material'?ctx.entityName+' - '+ctx.entityCode:ctx.materialName+' - '+ctx.materialCode;values['原料编码']=ctx.materialCode||ctx.entityCode;values['原料名称']=ctx.materialName||ctx.entityName;if(ctx.entityType==='supplier'){values['供应商编码']=ctx.entityCode;values['供应商名称']=ctx.entityName;values['供应商范围']=ctx.entityName||'';}}state.stageDraft=structuredClone(ctx.stages||overviewDefaultStages(ctx.entityType));}}
function overviewShowRingTooltip(anchor){const ring=state.overviewRings?.find(r=>r.id===anchor.dataset.overviewRing);if(!ring)return;let tooltip=$('#overview-ring-tooltip');if(!tooltip){tooltip=document.createElement('div');tooltip.id='overview-ring-tooltip';tooltip.className='tree-ring-tooltip';tooltip.setAttribute('role','tooltip');document.body.appendChild(tooltip)}tooltip.innerHTML=`<strong>${esc(ring.name)}</strong><dl><dt>环节编码</dt><dd class="code">${esc(ring.code)}</dd><dt>适用类型</dt><dd>${esc(ring.type)}</dd><dt>版本号</dt><dd>${esc(ring.version)}</dd><dt>所属阶段</dt><dd>${esc(ring.stageName)}</dd><dt>关联模板</dt><dd class="code">${esc(ring.templateCode)}</dd></dl><div class="muted">点击查看环节详情 ↗</div>`;tooltip.hidden=false;const rect=anchor.getBoundingClientRect(),width=284;tooltip.style.left=Math.max(10,Math.min(rect.left,window.innerWidth-width-10))+'px';const h=tooltip.offsetHeight||230;tooltip.style.top=(rect.bottom+h+12<window.innerHeight?rect.bottom+8:Math.max(10,rect.top-h-8))+'px';anchor.setAttribute('aria-describedby','overview-ring-tooltip')}
function overviewHideRingTooltip(){const tooltip=$('#overview-ring-tooltip');if(tooltip)tooltip.hidden=true;}

function detailHTML(p,r){
 if(p.kind==='report')return reportHTML(p,r);
 if(p.kind==='overview')return overviewHTML(p,r);
 if(p.kind==='consumer-report')return headingHTML(p,'消费者溯源报告详情','查看公开信息与熔断情况',ibtn('返回','back','back','plain'))+`<div class="tabs">${consumerVisibleMaterials(r).map(m=>btn(m.name,'public-material',`tab ${consumerPreviewMaterial()?.code===m.code?'active':''}`,`data-num="${Number(m.code.slice(-1))}"`)).join('')}</div>`+generalDetail(p,r)+consumerReportHTML();
 if(['template','link','alert','consumer','consumer-link'].includes(p.kind))return editorHTML(p,r,false);
 return headingHTML(p,p.name+'详情','',ibtn('返回','back','back','plain'))+generalDetail(p,r);
}
function shell(content){const p=page();return `<header class="topbar"><div class="brand"><div><div class="brand-logo">老乡鸡</div><small>产品溯源系统</small></div></div><span class="top-title">食品安全 · 全链路溯源</span><div class="top-right"><span class="prototype-tag">原型演示</span><span class="avatar">丁</span><span class="user-name">食安管理员</span></div></header><aside class="sidebar"><div class="nav-caption">溯源数据中台</div><div class="nav-search"><input id="nav-query" placeholder="搜索菜单" aria-label="搜索菜单" value="${esc(state.navQuery)}"></div>${groups.map((g,i)=>`<div class="nav-group ${state.openGroups.has(g)||state.navQuery?'open':''}"><button class="nav-heading ${p.group===g?'active':''}" data-act="nav-group" data-group="${esc(g)}">${icon(groupIcons[i])}<span>${esc(g)}</span><span class="chevron">${state.openGroups.has(g)?'⌃':'⌄'}</span></button><div class="nav-items">${PAGES.filter(x=>!x.hiddenFromMenu&&x.group===g&&(!state.navQuery||x.name.includes(state.navQuery))).map(x=>`<button class="nav-item ${x.id===p.id?'selected':''}" data-act="nav" data-page="${x.id}">${esc(x.name)}</button>`).join('')}</div></div>`).join('')}<div class="nav-footer">老乡鸡产品溯源系统<br>原型 V1.0 · ${PAGES.filter(p=>!p.hiddenFromMenu).length} 个业务菜单</div></aside><main><div class="workspace-bar"><span>溯源中台</span><span> / </span><span>${esc(p.group)}</span><span> / </span><span class="current">${esc(p.name)}</span><span class="right">${btn('恢复演示数据','reset-data','text')}</span></div><div class="content">${content}</div></main>`}
function render(){state.reportExports=new Map();const sidebarScroll=$('.sidebar')?.scrollTop??state.sidebarScroll??0;overviewHideRingTooltip();const p=page(),mode=(location.hash.split('/')[1]||'');$('#app').innerHTML=shell(reportDisplayHTML(mode==='detail'?detailHTML(p,row()):mode==='new'?editorHTML(p,{},true):listHTML(p)));state.sidebarScroll=sidebarScroll;$('.sidebar').scrollTop=sidebarScroll;if(state.overlay)renderOverlay();else $('#overlay-root').innerHTML='';labelControls();startDeliveryRouteAnimation();}
function labelControls(){
 $$('.field,.alert-field').forEach((f,i)=>{const l=$('label',f),c=$('input:not([type=hidden]),select,textarea,button[role=switch]',f);if(l&&c){if(!c.id)c.id='control-'+i;l.htmlFor=c.id;if(c.getAttribute('role')==='switch')c.setAttribute('aria-label',l.textContent)}});
 const selectPage=$('[data-public-select-page]'),selectable=$$('[data-public-key]:not(:disabled)');
 if(selectPage)selectPage.indeterminate=selectable.some(el=>el.checked)&&!selectable.every(el=>el.checked);
} 
function navigate(id,mode='',index=0){overviewHideRingTooltip();state.routeContext=null;if(id!==state.page){state.closedSelection=new Set();state.filters={};state.expanded=false;state.pageNo=1;state.tab=0;state.stage=0;state.editor=null;state.subQuery='';state.subPage=0;}state.overlay=null;state.page=id;state.index=index;if(mode==='detail'&&page().singleStoreReceipt)state.stage=0;state.openGroups.add(page().group);location.hash=id+(mode?'/'+mode+'/'+index:'');render();window.scrollTo(0,0)}
window.addEventListener('hashchange',()=>{const [id,mode,index]=location.hash.slice(1).split('/');if(PAGES.some(p=>p.id===id)){state.page=id;state.index=Number(index)||0;if(mode==='detail'&&page().singleStoreReceipt)state.stage=0;state.openGroups.add(page().group);render()}});
function initEditor(p,r,isNew){const key=p.id+'-'+(isNew?'new':state.index);if(state.editor?.key!==key){state.editor={key,isNew,values:{...r},readOnly:!isNew&&p.kind==='link'};state.conditions=r._conditions?structuredClone(r._conditions):[{stage:'仓储',link:'大仓存储',object:'温度记录',field:'记录温度',operator:'大于',value:'-18'}];state.stageDraft=r._stages?structuredClone(r._stages):overviewDefaultStages(p.id==='supplier-template'?'supplier':p.id==='dish-template-detail'?'dish':'material');state.components=r._components?structuredClone(r._components):[{type:'动态信息块1',title:'到货验收',config:{}},{type:'温度',title:'食材存放',config:{}},{type:'资质报告',title:'资质报告',config:{}}];state.componentIndex=0;if(p.kind==='link'&&!isNew&&!state.editor.values._fields){state.editor.values._fields=['收货记录编码','物料编码','采集温度'].map((n,i)=>({'排序':String(i+1),'字段名':n,'字段英文名':['receipt_id','material_code','temperature'][i],'字段采集说明':i===0?'系统自动生成，不可编辑':'来源系统同步','字段属性':'input','是否可编辑':'否','是否必填':'是','字段类型':i===2?'数字':'单行文本','长度限制':i===2?'10':'100','单位':i===2?'℃':'—','列表显示':'是','支持筛选':'是','现场采集':'否','是否为主键':i===0?'是':'否','是否唯一索引':i===0?'是':'否','ETL表达式':'源字段映射'}))}if(isNew){state.editor.values['配置状态']='启用';state.editor.values['模板状态']='启用';state.editor.values['环节状态']='启用';state.editor.values['告警时间']='00:00-24:00';state.editor.values['告警频率']='不限制';state.editor.values['用户组类型']='按角色'}overviewApplyEditorContext(p,state.editor)}}
function formHTML(fields,values,readOnly=false){return `<form id="editor-form" class="form-grid">${fields.map(f=>{const conditionalStyle=page().id==='alert-group'&&((f.name==='告警用户'&&(values['用户组类型']||'按角色')!=='按用户')||(f.name==='告警角色'&&values['用户组类型']==='按用户'))?'display:none':'';const ro=readOnly||(!state.editor?.isNew&&['模板编码','配置编码','环节编码','创建时间','创建人','版本号','菜品名称'].includes(f.name));return `<div class="field ${/说明|备注/.test(f.name)?'wide':''}" style="${conditionalStyle}"><label>${!ro&&/^(模板名称|环节名称|配置名称|门店名称|库存地点名称|角色名称|角色编码|告警级别名称|告警用户组名称|文档名称)$/.test(f.name)?'<span class="required">*</span>':''}${esc(f.name)}</label>${control(f,values[f.name]||'',ro,'form')}${f.note?`<div class="note">${esc(f.note).slice(0,160)}</div>`:''}</div>`}).join('')}</form>`}
function editorHTML(p,r,isNew){
 initEditor(p,r,isNew);const e=state.editor,editable=isNew||!e.readOnly;
 const title=(isNew?'新增':'详情 · ')+p.name;
 const top=headingHTML(p,title,isNew?'填写配置后保存或提交':'当前版本 '+(r['版本号']||r['最新版本']||'V1.0'),ibtn('返回','back','back','plain'));
 if(p.kind==='template')return top+panel('模板基本信息',formHTML(p.form,e.values))+templateBuilder(p)+editorFooter(p);
 if(p.kind==='link')return top+panel('环节基本信息',formHTML(p.form,e.values,e.readOnly),!isNew&&!state.routeContext?.virtual?switchHTML(r['状态']==='启用','link-toggle'):'')+linkBuilder(p,e.readOnly)+editorFooter(p);
 if(p.kind==='alert')return top+alertConfigurationHTML(e.values)+editorFooter(p);
 if(['consumer','consumer-link'].includes(p.kind))return top+panel('基础信息',formHTML(p.form,e.values))+consumerBuilder()+editorFooter(p);
 return top+panel('基本信息',formHTML(p.form.length?p.form:p.columns.filter(f=>f.name!=='操作'),e.values))+editorFooter(p);
}
function editorFooter(p){if(p.kind==='link'&&state.editor.readOnly)return `<div class="bottom-actions">${btn('返回','back','plain')}<span class="right muted">已发布环节仅允许切换启停状态</span></div>`;return `<div class="bottom-actions">${btn(['consumer','consumer-link'].includes(p.kind)?'保存':p.kind==='template'||p.kind==='link'?'存草稿':'保存','save-editor','primary')}${['consumer','consumer-link'].includes(p.kind)?btn('发布','publish-editor','primary'):['template','link','alert'].includes(p.kind)?btn('提交','publish-editor','primary'):''}${btn('取消','back','plain')}<span class="right muted">${p.id==='consumer'&&!state.editor.isNew?'':['consumer','consumer-link'].includes(p.kind)?btn('页面预览','consumer-preview','plain')+btn('预览链路','chain-preview','text'):p.kind==='template'?'已发布结构保留历史版本':''}</span></div>`}
function templateType(p=page()){return p.id==='supplier-template'?'供应商':p.id==='dish-template-detail'?'菜品':'原料'}
function templateAssociationLabel(p=page()){return p.id==='supplier-template'?'供应商':'原料'}
function templateEditable(){return !!state.editor&&(state.editor.isNew||state.editor.values['状态']==='草稿')}
function templateNormalName(name){return String(name||'').replace('大仓储存','大仓存储')}
function templateNormalizeLink(value,p=page()){const raw=typeof value==='string'?{name:value}:value,name=templateNormalName(raw.name),version=raw.version||'V1.0',type=raw.type||templateType(p);const kind={菜品:'dish',原料:'material',供应商:'supplier'}[type],ring=overviewRingModel(name,kind,version);return {...raw,name,version,type,code:raw.code||ring.code,id:name+'|'+version+'|'+type,description:raw.description||ring.record?.['环节说明']||name+'环节的采集信息',updated:raw.updated||ring.record?.['最后更新时间']||'2026-09-28 09:00:00'}}
function templateSourceTables(ref){const aliases={到货验收:'大仓入库',大仓储存:'大仓存储',门店配送:'物流配送',供应商加工:'央厨加工',供应商出库:'牧场出库',雏鸡入栏:'农场养殖',养殖日报:'农场养殖'},source=REPORT_MODEL.links.find(l=>l.name===(aliases[ref.name]||ref.name));if(source){if(ref.name==='养殖日报'){const root=source.tables.find(t=>t.id==='stb_breedingDaily');return [{...root,type:'1-主表',parent:null},...source.tables.filter(t=>t.parent===root.id)]}return source.tables;}
 if(ref.name==='门店存储'){const field=(name,key,attribute='文本')=>({name,key,attribute,dataType:attribute==='日期'?'6-日期':'1-字符串',visible:true,required:true,isPrimary:false,search:false});return [{id:'tb_storeStorage',name:'库存地点信息',type:'1-主表',parent:null,fields:[field('安装门店','storeCode'),field('安装库存地点','storageLocationCode'),field('安装位置详情','locationDescription'),field('门店编码','storeCodeId')]},{id:'stb_storeStorageTemperature',name:'库存地点温度记录',type:'2-子表',parent:'tb_storeStorage',fields:[field('记录时间','recordTime','日期'),field('记录温度','temperature'),field('设备编码','deviceCode')]}]}
 const p=PAGES.find(p=>p.id==='link'),r=records(p).find(r=>r['环节编码']===ref.code);return [{id:ref.code+'_main',name:ref.name+'信息',type:'1-主表',parent:null,fields:(r?._fields||[]).map(f=>({name:f['字段名'],key:f['字段英文名'],attribute:f['字段属性'],dataType:f['字段类型'],visible:true,required:f['是否必填']==='是',isPrimary:f['是否为主键']==='是',structure:f}))}];}
function templateLinkCatalog(p=page()){const type=templateType(p),catalog=new Map();const active=records(PAGES.find(p=>p.id==='link')).filter(r=>overviewIsActive(r)&&r['环节类型']===type).sort((a,b)=>String(b['最后更新时间']).localeCompare(String(a['最后更新时间'])));active.forEach(r=>{const ref=templateNormalizeLink({name:r['环节名称'],version:r['版本号'],code:r['环节编码'],type,description:r['环节说明'],updated:r['最后更新时间']},p);if(!catalog.has(ref.id))catalog.set(ref.id,ref)});
 const names=type==='供应商'?['农场养殖','养殖日报','牧场出库','央厨加工','供应商加工','供应商出库']:type==='菜品'?['门店收货','门店存储','门店配送','到货验收','大仓存储','大仓出库']:['到货验收','大仓存储','大仓出库','央厨加工','门店配送','门店收货','门店存储','农场养殖','牧场出库'];
 names.forEach(name=>{const ref=templateNormalizeLink({name,version:'V1.0',type},p);if(!catalog.has(ref.id))catalog.set(ref.id,ref)});(state.stageDraft||[]).flatMap(s=>s.links).forEach(raw=>{const ref=templateNormalizeLink(raw,p);if(!catalog.has(ref.id))catalog.set(ref.id,ref)});return [...catalog.values()].sort((a,b)=>b.updated.localeCompare(a.updated)||a.name.localeCompare(b.name,'zh-CN')||b.version.localeCompare(a.version,undefined,{numeric:true}));}
function templateMasterAssociations(kind){const p=PAGES.find(p=>p.id===(kind==='供应商'?'supplier':'material'));const map=new Map();records(p).forEach(r=>{const code=r[kind==='供应商'?'SAP供应商编码':'原料编码'],name=r[kind==='供应商'?'供应商名称':'原料名称'];if(code&&!map.has(code))map.set(code,{code,name})});return [...map.values()];}
function templateAssociationRows(p,values){const kind=templateAssociationLabel(p);if(p.id==='dish-template-detail'){return overviewGraph(values).branches.map(b=>({code:b.node.code,name:b.node.name}))}const saved=values[kind==='供应商'?'_associatedSuppliers':'_associatedMaterials'];if(saved)return saved;const catalog=templateMasterAssociations(kind),scope=String(values[kind==='供应商'?'供应商范围':'溯源原料范围']||''),directCode=values[kind==='供应商'?'供应商编码':'原料编码'];const byCode=catalog.filter(x=>scope.includes(x.code));if(byCode.length)return byCode;const byName=catalog.filter(x=>scope.includes(x.name));if(byName.length)return byName;if(directCode){const found=catalog.find(x=>x.code===directCode);return [found||{code:directCode,name:values[kind==='供应商'?'供应商名称':'原料名称']||'—'}]}return [];}
function templateRelatedObjects(ref,p=page()){const found=new Map();records(p).filter(overviewIsActive).forEach(r=>{const stages=r._stages||overviewDefaultStages(p.id==='supplier-template'?'supplier':p.id==='dish-template-detail'?'dish':'material');if(stages.some(s=>s.links.some(raw=>templateNormalizeLink(raw,p).id===ref.id)))templateAssociationRows(p,r).forEach(x=>found.set(x.code,x))});return [...found.values()];}
function templateBuilder(p){const readonly=!templateEditable(),label=templateAssociationLabel(p);return panel('溯源阶段配置',`<div id="stage-list">${state.stageDraft.map((s,i)=>`<div class="stage-card"><div class="stage-head"><strong>${i+1}. ${esc(s.name)}</strong><span class="muted">${s.links.length} 个环节</span><span class="right">${btn('阶段编辑','stage-edit','text',`data-num="${i}" ${readonly?'disabled':''}`)}${btn('环节导入','import-links','plain',`data-num="${i}"`)}${btn('删除','stage-delete','danger',`data-num="${i}" ${readonly?'disabled':''}`)}</span></div><div class="table-scroll"><table class="data-table template-stage-table"><thead><tr><th>排序</th><th>环节名称</th><th>版本号</th><th>环节主表</th><th>子表总数</th><th>关联${label}</th>${readonly?'':'<th>操作</th>'}</tr></thead><tbody>${s.links.map((raw,k)=>{const ref=templateNormalizeLink(raw,p),tables=templateSourceTables(ref),main=tables.find(t=>t.type.startsWith('1-')),children=tables.filter(t=>!t.type.startsWith('1-'));return `<tr><td>${k+1}</td><td>${esc(ref.name)}</td><td>${esc(ref.version)}</td><td>${btn(main?.name.replace(/主表$/,'')||'查看主表','template-main-table','text',`data-stage="${i}" data-num="${k}"`)}</td><td>${btn(String(children.length)+' 个子表','template-child-tables','text',`data-stage="${i}" data-num="${k}" ${children.length?'':'disabled'}`)}</td><td>${btn('关联'+label,'template-associations','text',`data-stage="${i}" data-num="${k}"`)}</td>${readonly?'':`<td>${btn('↑','link-up','text',`aria-label="上移环节" data-stage="${i}" data-num="${k}"`)}${btn('移除','link-remove','text',`data-stage="${i}" data-num="${k}"`)}</td>`}</tr>`}).join('')||'<tr><td colspan="7" class="empty">暂无环节，请导入</td></tr>'}</tbody></table></div></div>`).join('')}</div><div style="padding:18px 20px">${ibtn('新增阶段','stage-add','plus','plain',readonly?'disabled':'')}${btn('配置覆盖范围','scope','text')}</div>`);}
function templateOpenAssociations(stageIndex,linkIndex){rememberEditor();const label=templateAssociationLabel(),ref=templateNormalizeLink(state.stageDraft[stageIndex].links[linkIndex]),associated=new Map([...templateRelatedObjects(ref),...templateAssociationRows(page(),state.editor.values)].map(r=>[r.code,r]));openOverlay('关联'+label,'',btn('确定','close-overlay','primary'),'dialog template-dialog','template-associations',{kind:label,rows:[...associated.values()],codeQuery:'',nameQuery:'',pageNo:0,size:10});}
function templateAssociationModalHTML(o){const filtered=o.rows.filter(r=>(!o.codeQuery||r.code===o.codeQuery)&&(!o.nameQuery||r.name.includes(o.nameQuery)));return `<div class="template-modal-filter"><div class="field"><label>${o.kind}编码</label><input id="association-code" value="${esc(o.codeQuery)}" placeholder="请输入${o.kind}编码"></div><div class="field"><label>${o.kind}名称</label><input id="association-name" value="${esc(o.nameQuery)}" placeholder="请输入${o.kind}名称"></div>${btn('搜索','association-search','primary')}${btn('重置','association-reset','info')}</div><div class="table-scroll"><table class="data-table association-table"><thead><tr><th>关联编码</th><th>关联名称</th></tr></thead><tbody>${filtered.slice(o.pageNo*o.size,(o.pageNo+1)*o.size).map(r=>`<tr><td class="code">${esc(r.code)}</td><td>${esc(r.name)}</td></tr>`).join('')||'<tr><td colspan="2" class="empty">暂无关联记录</td></tr>'}</tbody></table></div>${templateModalPagination(filtered.length,o)}`;}
function templateModalPagination(total,o){const max=Math.max(1,Math.ceil(total/o.size));o.pageNo=Math.min(o.pageNo,max-1);return `<div class="pagination"><span class="total">共 ${total} 条记录</span><select aria-label="弹框每页条数" data-template-page-size><option value="10" ${o.size===10?'selected':''}>10条/页</option><option value="20" ${o.size===20?'selected':''}>20条/页</option><option value="50" ${o.size===50?'selected':''}>50条/页</option></select>${btn('‹','template-modal-prev','',o.pageNo===0?'disabled':'')}${Array.from({length:max},(_,i)=>btn(String(i+1),'template-modal-page',o.pageNo===i?'primary':'',`data-num="${i}"`)).join('')}${btn('›','template-modal-next','',o.pageNo>=max-1?'disabled':'')}<span>跳至</span><input type="number" min="1" max="${max}" value="${o.pageNo+1}" aria-label="弹框跳转页" data-template-jump><span>页</span></div>`;}
function templateOpenLinkImport(index){rememberEditor();const catalog=templateLinkCatalog(),selected=new Set(state.stageDraft[index].links.map(raw=>templateNormalizeLink(raw).id));openOverlay('环节导入','', '', 'dialog template-dialog template-import-dialog','template-link-import',{catalog,selected,stageIndex:index,kind:templateAssociationLabel(),objectQuery:'',linkQuery:'',pageNo:0,size:10,readonly:!templateEditable()});}
function templateImportFiltered(o){return o.catalog.filter(r=>(!o.linkQuery||r.name.includes(o.linkQuery))&&(!o.objectQuery||templateRelatedObjects(r).some(x=>x.name.includes(o.objectQuery)||x.code===o.objectQuery)));}
function templateImportModalHTML(o){const filtered=templateImportFiltered(o),max=Math.max(1,Math.ceil(filtered.length/o.size));o.pageNo=Math.min(o.pageNo,max-1);const rows=filtered.slice(o.pageNo*o.size,(o.pageNo+1)*o.size),checked=rows.filter(r=>o.selected.has(r.id)).length;return `<div class="template-modal-filter"><div class="field"><label>${o.kind}名称</label><input id="import-object-name" value="${esc(o.objectQuery)}" placeholder="请输入${o.kind}名称"></div><div class="field"><label>环节名称</label><input id="import-link-name" value="${esc(o.linkQuery)}" placeholder="请输入环节名称"></div>${btn('搜索','import-link-search','primary')}${btn('重置','import-link-reset','info')}</div><div class="table-scroll"><table class="data-table template-import-table"><thead><tr><th class="check"><input type="checkbox" aria-label="全选当前页环节" data-import-select-page ${checked===rows.length&&rows.length?'checked':''} ${checked>0&&checked<rows.length?'data-indeterminate="true"':''} ${o.readonly?'disabled':''}></th><th>环节名称</th><th>版本号</th><th>环节说明</th><th>关联${o.kind}</th></tr></thead><tbody>${rows.map(ref=>{const objects=templateRelatedObjects(ref).map(r=>r.name+'（'+r.code+'）').join('，');return `<tr><td class="check"><input type="checkbox" data-import-link-id="${esc(ref.id)}" aria-label="选择${esc(ref.name)} ${esc(ref.version)}" ${o.selected.has(ref.id)?'checked':''} ${o.readonly?'disabled':''}></td><td>${esc(ref.name)}</td><td>${esc(ref.version)}</td><td><span class="template-long-text">${esc(ref.description)}</span></td><td><span class="template-long-text" title="${esc(objects)}">${esc(objects||'暂无关联对象')}</span></td></tr>`}).join('')||'<tr><td colspan="5" class="empty">暂无符合条件的环节</td></tr>'}</tbody></table></div>${templateModalPagination(filtered.length,o)}`;}
function templateImportFooterHTML(o){return `<span class="template-selection-count">已选择 ${o.selected.size} 项 / 共 ${o.catalog.length} 项${o.readonly?' · 当前模板已发布':''}</span>${btn('取消','close-overlay','plain')}${btn('确定','links-save','primary')}`;}
function templateOpenTableStructure(stageIndex,linkIndex,childrenOnly=false){rememberEditor();const ref=templateNormalizeLink(state.stageDraft[stageIndex].links[linkIndex]),all=templateSourceTables(ref),tables=all.filter(t=>childrenOnly?!t.type.startsWith('1-'):t.type.startsWith('1-'));if(!tables.length){toast('当前环节暂无'+(childrenOnly?'子表':'主表'));return}openOverlay((childrenOnly?'子表结构':'主表结构')+' · '+ref.name,'',btn('确定','close-overlay','primary'),'dialog template-dialog template-structure-dialog','template-table-structure',{ref,tables,allTables:all,childrenOnly,selectedTable:tables[0].id});}
function templateStructureRows(t){const yes=v=>v?'是':'否';return t.fields.map((f,i)=>f.structure?{...f.structure,'排序':i+1}:({'排序':i+1,'字段名':f.name,'字段英文名':f.key,'字段采集说明':f.collectionInstruction||f.description||'','字段属性':f.attribute||'文本','是否可编辑':yes(f.editable),'是否必填':yes(f.required),'字段类型':f.dataType||'1-字符串','长度限制':f.length||'—','枚举项':'—','单位':/温度/.test(f.name)?'℃':'—','列表显示':yes((f.showLevel||'').startsWith('3-')),'支持筛选':yes(f.search),'筛选类型':f.searchType||'—','现场采集':yes(f.collectedOnSite),'填写校验':'—','是否为主键':yes(f.isPrimary),'是否唯一索引':yes(f.unique),'绑定内容函数':f.function||'—','函数类型':f.functionType||'—','数据字典类型':f.dictionary||'—','ETL表达式':f.etl||'—','是否可关联':yes(f.refKey),'是否分片字段':'—','是否可追溯':'—','是否影响按钮':yes(f.influenceButton),'按钮展示规则':f.buttonRule||'—','下拉展示规则':f.valueRule||'—','字段简称':f.simpleName||f.key}));}
function templateStructureModalHTML(o){const t=o.tables.find(t=>t.id===o.selectedTable)||o.tables[0],fields=PAGES.find(p=>p.id==='link').tabs[0].fields;const selector=o.childrenOnly?`<div class="template-child-list"><table class="data-table"><thead><tr><th>子表名称</th><th>字段数量</th><th>上级表</th><th>操作</th></tr></thead><tbody>${o.tables.map(table=>`<tr class="${table.id===t.id?'selected':''}"><td>${esc(table.name)}</td><td>${table.fields.length}</td><td>${esc(o.allTables.find(parent=>parent.id===table.parent)?.name||'—')}</td><td>${btn('查看结构','template-select-table','text',`data-table="${esc(table.id)}"`)}</td></tr>`).join('')}</tbody></table></div>`:'';return `${selector}<div class="template-table-metadata"><strong>${esc(t.name)}</strong><span class="code">${esc(t.id)}</span><span class="muted">${esc(o.ref.version)} · ${t.fields.length} 个字段</span></div>${t.fields.some(f=>f.key==='pendingFieldDefinition')?'<div class="notice">该表含待补充的字段占位定义，实际字段清单待确认。</div>':''}${t.fields.length?tableHTML(page(),templateStructureRows(t),fields):'<div class="empty">暂无字段结构定义</div>'}`;}
function linkBuilder(p,readonly){const t=p.tabs[0],rows=state.editor.values._fields||[];return panel('环节溯源主表',`<div class="table-toolbar">${ibtn('新增字段','field-add','plus','primary',readonly?'disabled':'')}${btn('导入字段','field-import','plain',readonly?'disabled':'')}<span class="muted">字段结构 ${readonly?'只读':'可配置'}</span></div>${tableHTML(p,rows,t.fields)}${readonly?'':`<div style="padding:16px">${btn('编辑字段','field-edit','plain')}</div>`}`)+panel('环节溯源信息',`<div class="table-toolbar">${ibtn('增加溯源信息','add-info','plus','primary',readonly?'disabled':'')}${btn('溯源信息管理','manage-info','plain',readonly?'disabled':'')}</div>${tableHTML(p,(state.editor.values._info||['收货记录','批检报告（随货）']).map((n,i)=>({'信息名':n,'表英文名':'trace_info_'+i,'采集端icon':state.editor.values['_upload-icon']?.[0]?.name||'未上传'})),p.tabs[1].fields)}`)}
function selectOpt(name,arr,value=''){return `<select data-setting="${esc(name)}">${arr.map(a=>`<option ${a===value?'selected':''}>${esc(a)}</option>`).join('')}</select>`}
function alertBuilder(){const type=state.editor.values['告警类型']||'告警条件累加';return panel('配置详情',`<div class="rule-builder"><div class="radio-line">${['告警条件累加','多告警值对比','全局告警条件'].map(x=>`<label><input type="radio" name="alert-mode" value="${x}" ${type===x?'checked':''}>${x}</label>`).join('')}</div>${type==='全局告警条件'?`<div class="form-grid"><div class="field"><label>全局告警条件</label>${selectOpt('global',['溯源必填字段为空','IOT设备异常','保质期不足','门店IOT设备温度超标'],state.editor.values._global)}</div><div class="field"><label>保质期不足阈值（%）</label><input type="number" data-setting="global-threshold" value="33" min="1" max="100"></div></div>`:`${state.conditions.map((c,i)=>`<div class="condition" data-num="${i}"><div class="form-grid" style="padding:15px 0"><div class="field"><label>告警阶段</label>${conditionSelect('stage',['养殖','生产加工','仓储','配送','门店'],c.stage,i)}</div><div class="field"><label>告警环节</label>${conditionSelect('link',['到货验收','大仓存储','大仓出库','门店配送','门店收货','门店存储'],c.link,i)}</div><div class="field"><label>告警信息 / 对象</label>${conditionSelect('object',['温度记录','收货记录','质检单'],c.object,i)}</div><div class="field"><label>告警字段</label>${conditionSelect('field',['记录温度','采集时间','生产日期','整体数据集'],c.field,i)}</div></div><div class="rule-row"><span>条件 ${i+1}</span>${conditionSelect('operator',['大于','小于','等于','不等于','大于等于（≥）','小于等于（≤）','为空','不为空','包含','不包含'],c.operator,i)}<input data-cond="value" data-num="${i}" aria-label="告警值" value="${esc(c.value)}" placeholder="告警值"><span class="muted">${type==='多告警值对比'?'参与算法对比':'与其他条件为 AND'}</span>${btn('×','condition-delete','text',`data-num="${i}" aria-label="删除告警值"`)}</div></div>`).join('')}${type==='多告警值对比'?`<div class="rule-row"><span>告警值一</span>${selectOpt('math',['+','−','×','÷'])}<span>告警值二</span><input data-setting="comparison" aria-label="对比值" placeholder="对比值" value="0"></div>`:''}${ibtn('添加告警值','condition-add','plus','plain')}`}</div>`)}
function conditionSelect(key,opts,val,i){return `<select data-cond="${key}" data-num="${i}">${opts.map(o=>`<option ${o===val?'selected':''}>${esc(o)}</option>`).join('')}</select>`}
const componentTypes=['视频','轮播图','表格1','表格2','温度','动态信息块1','动态信息块2','资质报告','安全检测','模块标题','分割线'];
function phoneContent(c,i,preview=false){const cfg=c.config||{};let body='';
 if(c.type==='温度')body=chartHTML();
 else if(c.type.startsWith('表格'))body=`<div class="muted">物料名称　生产日期</div><div>${esc(page().kind==='consumer-report'?consumerPreviewMaterial()?.name||'—':materialNames[0])}　2026-09-28</div>`;
 else if(c.type==='资质报告')body=`<div style="display:flex;gap:8px">${['检验报告','批检报告','动检票'].map(n=>`<div class="file-thumb">${icon('file')}<small>${n}</small></div>`).join('')}</div>`;
 else if(c.type==='视频')body='<div style="background:var(--info-light);padding:26px;text-align:center">▷ 视频预览</div>';
 else if(c.type==='轮播图')body='<div style="background:var(--light);padding:30px;text-align:center;color:var(--primary)">轮播图展示区域</div>';
 else if(c.type==='安全检测')body='<span class="status">验收合格</span><p class="muted">显示已配置的检测数据</p>';
 else if(c.type==='分割线')body='<hr style="border:0;border-top:1px solid var(--line)">';
 else if(c.type.startsWith('动态'))body=`<span class="status">验收合格</span>${page().kind==='consumer-report'?`<p>原料名称　${esc(consumerPreviewMaterial()?.name||'—')}</p>`:''}<p class="muted">原料来源　老乡鸡农牧<br>生产日期　2026-09-28</p>`;
 return `<div class="phone-card ${!preview&&state.componentIndex===i?'selected':''}" ${!preview?`draggable="true" data-component="${i}" data-act="component-select" data-num="${i}"`:''}>${cfg.showTitle==='否'?'':`<h4>${esc(cfg.title||c.title||c.type)}</h4>`}${body}${!preview?`<div class="tools">${btn('↑','component-up','text',`data-num="${i}" aria-label="上移组件"`)}${btn('↓','component-down','text',`data-num="${i}" aria-label="下移组件"`)}${btn('移除','component-remove','text',`data-num="${i}"`)}</div>`:''}</div>`;
}
function consumerBuilder(){return `<div class="editor-layout"><section class="panel"><div class="section-title">基础组件</div><div class="component-palette">${componentTypes.map((c,i)=>`<button draggable="true" data-palette="${i}" data-act="component-add" data-num="${i}">${icon(c==='温度'?'report':c==='资质报告'?'file':'template')}<br>${c}</button>`).join('')}</div><p class="note" style="padding:0 16px">点击或拖入预览区域添加；拖动组件或使用箭头调整顺序。</p></section><section class="panel"><div class="section-title">样式预览<span class="right muted">${state.components.length} 个组件</span></div><div class="phone" id="component-drop"><div class="phone-header">${esc(state.editor.values['菜品名称']||dishNames[0])}</div>${state.components.map((c,i)=>phoneContent(c,i)).join('')}${!state.components.length?'<p class="empty">添加展示组件</p>':''}</div></section><section class="panel"><div class="section-title">内容设置</div>${componentSettingsHTML()}</section></div>`}
function settingField(label,controlHTML){return `<div class="field"><label>${esc(label)}</label>${controlHTML}</div>`}
function settingInput(key,value='',type='text',extra=''){return `<input data-setting="${esc(key)}" type="${type}" value="${esc(value)}" ${extra}>`}
function componentSettingsHTML(){const c=state.components[state.componentIndex];if(!c)return '<div class="empty">选择一个展示组件</div>';const cfg=c.config||{},ty=c.type;
 let html=settingField('组件标题是否展示',selectOpt('showTitle',['是','否'],cfg.showTitle))+settingField('组件名称',`<input readonly value="${ty}">`)+settingField('组件标题',settingInput('title',cfg.title||c.title,'text','maxlength="8"'));
 if(ty==='视频')html+=settingField('排布方式',selectOpt('layout',['一行1列','一行2列'],cfg.layout))+settingField('视频（MP4，≤100MB）','<input type="file" data-upload="video" accept="video/mp4">')+settingField('封面图（≤1MB）','<input type="file" data-upload="cover" accept="image/*">');
 else if(ty==='轮播图')html+=settingField('轮播图（1～8张，345×345，单张≤500KB）','<input type="file" data-upload="carousel" accept="image/jpeg,image/png" multiple>');
 else if(ty==='模块标题')html+=settingField('文本大小',selectOpt('fontSize',['大','中','小'],cfg.fontSize))+settingField('文本位置',selectOpt('align',['靠左','居中'],cfg.align))+settingField('文本颜色',settingInput('color',cfg.color||'#008042','color'));
 else if(ty==='分割线')html+=settingField('线条宽度',selectOpt('lineWidth',['大','中','小'],cfg.lineWidth))+settingField('线条颜色',settingInput('color',cfg.color||'#909399','color'));
 else if(ty==='安全检测')html+=settingField('SQL代码（只读）','<textarea readonly>SELECT approved_inspection FROM source_inspection WHERE receipt_id = :receipt_id</textarea>');
 else{
  html+=settingField('环节名称',selectOpt('link',['门店收货','门店存储','到货验收','大仓存储','生产加工'],cfg.link))+settingField('环节版本',selectOpt('version',['V1.0','V1.1'],cfg.version))+settingField('环节表',selectOpt('table',['收货记录','温度记录','质检单'],cfg.table));
  if(ty.startsWith('表格')||ty==='资质报告')html+=settingField('排布方式',selectOpt('layout',ty==='资质报告'?['1行3列','1行4列']:['1行2列','1行3列','1行4列'],cfg.layout));
  if(ty!=='资质报告')html+=settingField('展示数据行（1～20）',settingInput('rows',cfg.rows||10,'number','min="1" max="20"'));
  if(ty==='温度')html+=settingField('组件icon','<input type="file" data-upload="icon" accept="image/*">')+settingField('横轴 · 时间取值',selectOpt('xField',['采集时间','记录时间'],cfg.xField))+settingField('纵轴 · 温度取值',selectOpt('yField',['记录温度','实测温度'],cfg.yField))+settingField('冷冻原料',`<select data-setting="frozen" multiple>${materialNames.map(x=>`<option ${cfg.frozen?.includes(x)?'selected':''}>${x}</option>`).join('')}</select>`)+settingField('冷藏原料',`<select data-setting="chilled" multiple>${materialNames.map(x=>`<option ${cfg.chilled?.includes(x)?'selected':''}>${x}</option>`).join('')}</select>`)+settingField('冷冻温度范围（−100～100℃）',settingInput('frozenRange',cfg.frozenRange||'-24～-18'))+settingField('冷藏温度范围（−100～100℃）',settingInput('chilledRange',cfg.chilledRange||'0～8'))+settingField('有效数据行少于此数量时隐藏组件',settingInput('minRows',cfg.minRows||1,'number','min="1" max="19"'));
  else html+=ty.startsWith('动态')?settingField('组件标签',selectOpt('tag',ty==='动态信息块1'?['不展示','日配送达','验收合格']:['不展示'],cfg.tag))+settingField('组件icon','<input type="file" data-upload="icon" accept="image/*">'):'';
  if(ty!=='温度')html+=settingField('展示字段 / 字段取值',`<div class="scope-list">${(cfg.fields||['原料名称','生产日期','供应商']).map((n,i)=>`<div class="field"><input data-setting="displayField-${i}" value="${esc(n)}" aria-label="展示名称">${selectOpt('sourceField-'+i,['原料名称','生产日期','供应商','记录温度','发车时间','送达时间'],cfg['sourceField-'+i]||n)}</div>`).join('')}</div>`)+btn('添加展示字段','display-field-add','plain')+btn('添加合格样式字段','qualified-field-add','text');
  html+=settingField('默认熔断',`<p class="note">${ty==='温度'?'有效数据行不足时隐藏组件':ty==='动态信息块1'&&cfg.tag==='日配送达'?'配送时长大于24h或时间字段为空时熔断':ty==='动态信息块1'&&cfg.tag==='验收合格'?'收货日期或检测时间为空时熔断组件':'任意展示字段为空时隐藏该字段或数据行；有效数据不足时隐藏组件'}</p>`)+settingField('补充熔断规则',selectOpt('fuse',['关闭','开启'],cfg.fuse));
  if(cfg.fuse==='开启')html+=settingField('熔断类型',selectOpt('fuseMode',['熔断条件累加','多熔断值对比'],cfg.fuseMode))+settingField('是否对比',selectOpt('compare',['否','是'],cfg.compare))+settingField('对比值',selectOpt('compareTo',['服务器时间','生产日期','采集时间'],cfg.compareTo))+settingField('规则关系',selectOpt('logic',['AND','OR'],cfg.logic))+`<div>${(cfg.rules||[{field:'生产日期',op:'为空',val:''}]).map((r,i)=>`<div class="field"><label>熔断条件 ${i+1}</label>${selectOpt('fuseField-'+i,['生产日期','采集时间','记录温度','发车时间','送达时间'],r.field)}${selectOpt('fuseOp-'+i,['等于','不等于','为空','不为空','大于','小于','大于等于（≥）','小于等于（≤）','包含','不包含'],r.op)}${settingInput('fuseValue-'+i,r.val)}${btn('删除熔断条件','fuse-delete','text',`data-num="${i}"`)}</div>`).join('')}</div>`+btn('添加熔断条件','fuse-add','plain')+settingField('熔断动作',selectOpt('fuseAction',['隐藏字段','隐藏数据行','隐藏组件','显示暂无数据'],cfg.fuseAction));
 }
 if(page().kind==='consumer-link'){html+=settingField('组件名称（自定义）',settingInput('componentName',cfg.componentName||c.type))+settingField('组件类型',selectOpt('componentType',componentTypes,c.type))+settingField('是否审核',selectOpt('approval',['是','否'],cfg.approval))+settingField('属性',selectOpt('attribute',['字段','数据表'],cfg.attribute))+settingField('字段/表名称',selectOpt('fieldTable',['收货记录/物料编码','温度记录/记录温度','质检单/检验结论'],cfg.fieldTable))+settingField('路径',settingInput('path',cfg.path||'温度记录/记录温度'))+settingField('小程序展示字段',settingInput('consumerField',cfg.consumerField||'记录温度'))+settingField('展示名称',settingInput('displayName',cfg.displayName||'温度'))+settingField('是否熔断',selectOpt('isFuse',['ON','OFF'],cfg.isFuse))+settingField('熔断值',selectOpt('fuseValue',['记录温度','采集时间','生产日期'],cfg.fuseValue))+settingField('对比阶段',selectOpt('compareStage',['仓储','配送','门店'],cfg.compareStage))+settingField('对比环节',selectOpt('compareLink',['大仓存储','门店配送','门店存储'],cfg.compareLink))+settingField('对比对象',selectOpt('compareObject',['温度记录','收货记录'],cfg.compareObject))+settingField('对比值',settingInput('compareReference',cfg.compareReference||'0'))+settingField('熔断动作',selectOpt('fuseAction',['隐藏字段','隐藏组件','显示暂无数据'],cfg.fuseAction));}
 return `<div class="component-settings">${html}</div>`;
}
function consumerReportHTML(){if(row()['报告状态']==='已关闭')return panel('消费者展示状态','<div class="empty">此溯源报告已关闭，消费者不可查看。</div>');if(!consumerVisibleMaterials().length)return panel('消费者展示状态','<div class="empty">当前菜品暂无可向消费者展示的原料信息。</div>');const comps=row()._components||[{type:'动态信息块1',title:'原料来源'},{type:'温度',title:'食材存放'},{type:'资质报告',title:'检验凭证'}];return panel('消费者页面预览',`<div class="mobile-preview"><div class="phone"><div class="phone-header">${esc(row()['菜品名称']||dishNames[0])}</div>${comps.map((c,i)=>phoneContent(c,i,true)).join('')}<p class="muted" style="text-align:center;font-size:11px">演示公开信息</p></div></div>`)+panel('熔断情况',tableHTML(page(),[{'组件名称':'配送温度','熔断字段':'记录温度','熔断条件':'有效数据行不足','熔断动作':'隐藏组件','实际值':'暂无已接入数据','配置版本':'V1.0'}],['组件名称','熔断字段','熔断条件','熔断动作','实际值','配置版本'].map(name=>({name}))))}
function openOverlay(title,body,footer='',type='dialog',task='',meta={}){state.overlay={title,body,footer,type,task,...meta};renderOverlay()}
function renderOverlay(){const o=state.overlay;if(!o)return;let body=o.task==='material-batch'?materialBatchHTML(o):o.task==='report-qualifications'?reportQualificationHTML():o.task==='detail'?generalDetail(page(),row()):o.task==='report-child'?reportChildOverlayHTML(o):o.task==='template-associations'?templateAssociationModalHTML(o):o.task==='template-link-import'?templateImportModalHTML(o):o.task==='template-table-structure'?templateStructureModalHTML(o):o.body;const parent=o.returnOverlay;const behind=parent?overlayMarkup(parent,parent.task==='detail'?generalDetail(page(),row()):parent.task==='material-batch'?materialBatchHTML(parent):parent.body,true):'';$('#overlay-root').innerHTML=reportDisplayHTML(behind+overlayMarkup(o,body));$$('[data-indeterminate]', $('#overlay-root')).forEach(el=>el.indeterminate=true);labelControls()}

function closeOverlay(){const o=state.overlay;if(o?.returnOverlay){state.overlay=o.returnOverlay;renderOverlay();if(o.returnCardIndex!=null)$('[data-act=trace-card-view][data-num="'+o.returnCardIndex+'"]')?.focus();return}state.overlay=null;$('#overlay-root').innerHTML=''}
function detailOverlay(index,tab=0){state.index=index;state.tab=tab;state.subQuery='';state.subPage=0;openOverlay(page().name+'详情','',page().id==='complaint'?btn('食安事件发送','complaint-open','primary')+btn('关闭','close-overlay','plain'):page().kind==='editable'?btn('编辑','overlay-edit','primary')+btn('关闭','close-overlay','plain'):'','drawer','detail')}
function quickTable(title,fields,rows,task=''){openOverlay(title,tableHTML(page(),rows,fields.map(name=>({name}))),btn('关闭','close-overlay','plain'),'drawer',task)}
function attach(name='附件'){openOverlay('附件预览',`<div class="attachment-preview">${icon('file')}<h3>${esc(name)}</h3><p>原型演示预览</p><p>源附件尚未接入。选择本地文件后可预览实际内容。</p><input id="preview-upload" type="file" accept=".pdf,image/*,.txt"></div>`,btn('关闭','close-overlay','plain'))}
function editModal(p,isNew=false){state.editor={key:p.id+'-modal',isNew,values:isNew?{}:{...row()}};openOverlay((isNew?'新增':'编辑')+p.name,formHTML(p.form.length?p.form:p.columns.filter(f=>f.name!=='操作'),state.editor.values),btn('保存','save-modal','primary')+btn('取消','close-overlay','plain'),'dialog','edit')}
function formValues(){const form=$('#editor-form');if(!form)return {};const out={};$$('[name]',form).forEach(el=>{if(el.type==='radio'&&!el.checked)return;out[el.name]=el.multiple?Array.from(el.selectedOptions).map(o=>o.value).join('，'):el.type==='checkbox'?el.checked:el.value});return out}
function validate(values,p,publish=false){
 if(p.kind==='alert'&&!validateAlert(values))return false;
 const required={ 'dish-template-detail':['模板名称','溯源菜品范围'], 'alert-config':['配置名称','告警级别','告警用户组'], 'link':['环节名称'], 'material-template':['模板名称','溯源原料范围'], 'supplier-template':['模板名称','溯源原料范围','供应商范围'], 'alert-level':['告警级别名称'], 'alert-group':['告警用户组名称','用户组类型'], 'location':['库存地点名称','门店编码','库存地点类型','生效开始时间'], 'storage':['门店名称','库存地点名称','原料信息','生效开始时间'], 'role':['角色编码','角色名称'], 'user':['登录账号/工号','姓名','所属组织'], 'consumer':['适用门店'], 'knowledge':['文档名称'] };
 if(publish||!['template','link'].includes(p.kind))for(const n of required[p.id]||[]){if(!values[n]||values[n]==='—'){toast('请填写'+n);return false}}
 for(const [n,v] of Object.entries(values)){if(/最佳赏味期|天数/.test(n)&&(!Number.isInteger(Number(v))||Number(v)<1)){toast(n+'必须为正整数');return false}}
 if(values['生效结束时间']&&values['生效开始时间']&&values['生效结束时间']<=values['生效开始时间']){toast('结束时间须晚于开始时间');return false}
 const uniqueField={'link':'环节名称','alert-level':'告警级别名称','alert-group':'告警用户组名称','role':'角色编码','location':'库存地点名称'}[p.id];
 if(uniqueField&&records(p).some((r,i)=>(state.editor?.isNew||i!==state.index)&&r[uniqueField]===values[uniqueField]&&(p.id!=='location'||r['门店编码']===values['门店编码']))){toast(uniqueField+'已存在，请使用其他名称');return false}
 if(publish&&p.kind==='template'&&(!state.stageDraft.length||state.stageDraft.some(s=>!s.links.length))){toast('至少配置一个阶段，每个阶段须导入环节');return false}
 if(publish&&p.kind==='alert'&&values['告警类型']!=='全局告警条件'&&(!state.conditions.length||state.conditions.some(c=>!c.field||!c.operator||(!['为空','不为空'].includes(c.operator)&&!c.value)))){toast('请配置至少一个完整告警条件');return false}
 if(p.kind==='alert'&&values['告警时间']&&!/^([01]\d|2[0-3]):[0-5]\d-([01]\d|2[0-3]|24):[0-5]\d$/.test(values['告警时间'])){toast('告警时间格式为 HH:mm-HH:mm');return false}
 if(publish&&['consumer','consumer-link'].includes(p.kind)&&!state.components.length){toast('请添加至少一个展示组件');return false}
 if(['consumer','consumer-link'].includes(p.kind))for(const c of state.components){const cfg=c.config||{};if((cfg.frozen||[]).some(n=>(cfg.chilled||[]).includes(n))){toast('同一原料不能同时配置为冷冻和冷藏');return false}if(cfg.minRows&&Number(cfg.minRows)>=Number(cfg.rows||10)){toast('温度熔断有效行数须小于展示行数');return false}if(c.type==='资质报告'&&(cfg.fields||['原料名称','生产日期','供应商']).length<3){toast('资质报告至少配置3个取值字段');return false}}
 if(p.id==='storage'&&records(p).some((r,i)=>(state.editor.isNew||i!==state.index)&&r['门店名称']===values['门店名称']&&r['库存地点名称']===values['库存地点名称']&&r['原料信息']===values['原料信息']&&(!r['生效结束时间']||r['生效结束时间']>values['生效开始时间'])&&(!values['生效结束时间']||values['生效结束时间']>r['生效开始时间']))){toast('同一地点与原料的有效期存在冲突');return false}
 if(publish&&p.kind==='template'&&records(p).some((r,i)=>(state.editor.isNew||i!==state.index)&&r['状态']==='启用'&&r['溯源原料范围']===values['溯源原料范围']&&(p.kind!=='supplier-template'||r['供应商范围']===values['供应商范围']))){toast('所选原料范围已有启用模板，请调整覆盖范围');return false}
 return true;
}
function saveEditor(p,publish=false,modal=false){const context=state.routeContext;const values={...(state.editor?.values||{}),...formValues()};if(!validate(values,p,publish))return;
 if(p.kind==='template')values._stages=structuredClone(state.stageDraft);
 if(p.kind==='alert'){values._conditions=structuredClone(state.conditions);values['创建人']=state.editor.isNew?'食安管理员':row()['创建人'];values['创建时间']=state.editor.isNew?new Date().toLocaleString('sv-SE'):row()['创建时间'];values['配置编码']||='AC'+Date.now();values['告警配置编码']=values['配置编码'];}
 if(['consumer','consumer-link'].includes(p.kind))values._components=structuredClone(state.components);
 values['最后更新时间']=values['更新时间']=values['最近更新时间']='2026-10-12 18:30:00';values['更新人']=values['最近更新人']='食安管理员';if(p.kind!=='alert')values['创建人']='食安管理员';
 if(['template','link','consumer'].includes(p.kind))values['状态']=publish?(['consumer','consumer-link'].includes(p.kind)?'生效中':values['模板状态']||values['环节状态']||'启用'):(state.editor.isNew||state.editor.values['状态']==='草稿')?'草稿':values['模板状态']||values['环节状态']||values['状态']||'草稿';
 const rr=records(p),isNew=state.editor?.isNew;if(isNew){if(state.editor?.sourceKey)values._sourceKey=state.editor.sourceKey;p.columns.forEach(f=>{if(!values[f.name])values[f.name]=sample(f.name,rr.length,p)});values._key=p.id+'-'+Date.now();rr.unshift(values);state.index=0}else{const old=rr[state.index];values._history=[...(old._history||[]),{版本号:old['版本号']||'V1.0',创建时间:old['最后更新时间']||'2026-09-28',创建人:'食安管理员',变更说明:values['变更说明']||'配置更新',状态:old['状态'],_snapshot:JSON.parse(JSON.stringify({...old,_history:undefined}))}];rr[state.index]={...old,...values}}
 persist();state.editor=null;closeOverlay();navigate(context?.page===p.id?'overview':p.id,context?.page===p.id?'detail':'',context?.overviewIndex||0);toast(publish?'提交成功，已生成新的配置记录':'保存成功');
}
function download(content,name,type='text/csv;charset=utf-8'){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([content],{type}));a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
function relationWizard(step=1){state.relationStep=step;const body=step===1?`<div class="step-line"><span class="active">① 选择上游环节</span><span>② 选择关联关系</span></div><p class="note">当前环节：${esc(row()['环节名称'])}</p><table class="data-table"><thead><tr><th>选择</th><th>上游环节名称</th><th>关联模板</th><th>环节引用次数</th><th>状态</th></tr></thead><tbody>${['大仓出库','大仓存储','到货验收'].map((n,i)=>`<tr><td><input type="radio" name="upstream" value="${n}" ${i===0?'checked':''}></td><td>${n}</td><td>老乡鸡原料溯源模板</td><td>${i+1}</td><td>${status(i===0?'未配置':'已配置')}</td></tr>`).join('')}</tbody></table>`:`<div class="step-line"><span>① 选择上游环节</span><span class="active">② 选择关联关系</span></div><p>当前环节：${esc(row()['环节名称'])} → 上游环节：${esc(state.upstream||'大仓出库')}</p><div id="relation-lines">${relationLineHTML(0)}</div>${btn('新增','relation-add','plain')}`;openOverlay('追溯关联关系维护',body,step===1?btn('下一步','relation-next','primary')+btn('取消','close-overlay','plain'):btn('上一步','relation-prev','plain')+btn('完成','relation-save','primary')+btn('取消','close-overlay','plain'),'drawer','relation')}
function relationLineHTML(i){return `<div class="relation-line"><div class="form-grid"><div class="field"><label>选中环节</label><input readonly value="${esc(i===0?row()['环节名称']:state.upstream||'大仓出库')}"></div><div class="field"><label>关联环节</label>${selectOpt('associatedLink',['大仓出库','大仓存储','到货验收','门店配送'])}</div><div class="field"><label>选中环节表</label>${selectOpt('selectedTable',['收货记录','温度记录','主表'])}</div><div class="field"><label>关联环节表</label>${selectOpt('associatedTable',['出库记录','收货记录','主表'])}</div></div><div class="rule-row"><span>字段选择</span>${selectOpt('leftField',['物料编码','物料批次','配送单号'])}<span>＝</span>${selectOpt('rightField',['物料编码','物料批次','配送单号'])}${btn('×','relation-field-delete','text','aria-label="删除字段关联"')}</div>${btn('添加字段关联','relation-field-add','text')}</div>`}
function permissions(p){openOverlay(p.id==='role'?'配置权限':'分配角色 / 数据范围',`<p class="note">当前${p.id==='role'?'角色':'用户'}：${esc(row()[p.id==='role'?'角色名称':'姓名'])}</p>${p.id==='role'?`<div class="section-title">菜单权限</div><div class="scope-list">${groups.map(g=>`<label><input type="checkbox" name="permission" value="${g}" checked>${g}</label>`).join('')}</div><div class="section-title">操作权限</div><div class="scope-list">${['查看','新增','发布模板','修改展示配置','索引重建'].map(n=>`<label><input type="checkbox" name="operation" value="${n}" ${n==='索引重建'?'':'checked'}>${n}</label>`).join('')}</div>`:`<div class="field"><label>角色</label><select name="roles" multiple>${['食安管理员','门店负责人','仓储食安人员'].map(x=>`<option selected>${x}</option>`).join('')}</select></div>`}<div class="section-title">数据范围</div><div class="scope-list">${storeNames.map((n,i)=>`<label><input type="checkbox" name="scope" value="${n}" ${i<3?'checked':''}>${n}</label>`).join('')}</div><div class="field" style="margin-top:16px"><label>变更原因</label><textarea id="change-reason" placeholder="请填写变更原因"></textarea></div>`,btn('预览权限变化','permission-preview','primary')+btn('取消','close-overlay','plain'),'drawer','permissions')}
function rowAction(label,index){const p=page();state.index=index;state.tab=0;state.subPage=0;state.subQuery='';
 if(p.id==='complaint'&&label==='食安事件发送'){openComplaintEvent();return}
 if(['查看','详情','查看详情'].includes(label)){if(p.kind==='knowledge'&&row()._file){openOverlay('文档预览',`<iframe src="${row()._file.content}" title="文档预览" style="width:100%;height:60vh;border:0"></iframe>`,btn('关闭','close-overlay','plain'),'drawer');return}if(p.detailMode==='page')navigate(p.id,'detail',index);else detailOverlay(index);return}
 if(label==='编辑'){if(p.kind==='knowledge'){knowledgeModal(false);return}if(['template','link','alert','consumer','consumer-link'].includes(p.kind)){state.editor=null;navigate(p.id,'detail',index)}else editModal(p);return}
 if(label==='关联溯源卡'&&['material','semi','dish'].includes(p.id)){openTraceCards();return}
 if(['投料明细','工序报告','关联溯源卡','关联物料','关联门店','配置历史'].includes(label)){const target=label==='关联物料'?'BOM关系':label;detailOverlay(index,Math.max(0,p.tabs.findIndex(t=>t.name===target)));return}
 if(label==='关联溯源模板'){if(p.id==='overview'){navigate('overview','detail',index);return}navigate('material-template',records(p)[index]['是否配置溯源模板']==='否'?'new':'detail');return}
 if(label==='关联原料'){detailOverlay(index);if(p.id==='overview'){const tt=PAGES.find(p=>p.id==='dish').tabs.find(t=>t.name==='BOM关系');openOverlay('关联原料 · BOM关系',tableHTML(p,subRows(tt),tt.fields),btn('关闭','close-overlay','plain'),'drawer')}return}
 if(label==='复制模板'||label==='复制并添加'||label==='复制环节'||label==='复制'){const old={...row()};state.editor=null;navigate(p.id,'new');state.editor.values={...old};state.editor.isNew=true;state.stageDraft=structuredClone(old._stages||state.stageDraft);['模板编码','环节编码','创建时间','版本号','适用门店'].forEach(n=>state.editor.values[n]='');if(p.id==='role'){state.editor.values['角色编码']='';state.editor.values['角色名称']=old['角色名称']+'副本';state.editor.values['状态']='禁用'}if(['consumer','consumer-link'].includes(p.kind))state.components=(old._components||state.components).map(c=>({...c,config:['视频','轮播图','分割线','模块标题'].includes(c.type)?c.config:{}}));render();return}
 if(label==='版本管理'||label==='变更记录'||label.includes('变更记录')||label==='查看授权记录'){const hist=row()._history||[];openOverlay('版本与变更记录',hist.length?`<div class="table-scroll"><table class="data-table"><thead><tr><th>版本编码</th><th>适用门店</th><th>变更人</th><th>变更时间</th><th>变更说明</th><th>操作</th></tr></thead><tbody>${hist.map((r,i)=>`<tr><td>${esc(r['版本号'])}</td><td>${esc(row()['适用门店']||'—')}</td><td>${esc(r['创建人'])}</td><td>${esc(r['创建时间'])}</td><td>${esc(r['变更说明'])}</td><td>${btn('查看详情','history-detail','text',`data-num="${i}"`)}${p.kind==='template'?btn('复制','history-copy','text',`data-num="${i}"`):''}</td></tr>`).join('')}</tbody></table></div>`:'<div class="empty">暂无历史变更记录</div>',btn('关闭','close-overlay','plain'),'drawer','history');return}
 if(label==='覆盖范围'||label==='适用门店'){const names=label==='适用门店'?storeNames:materialNames;openOverlay(label,`<div class="sub-filter"><input id="scope-query" placeholder="${label==='适用门店'?'门店编码 / 门店名称':'原料编码 / 原料名称'}">${btn('搜索','scope-search','primary')}</div><div class="scope-list">${names.map((n,i)=>`<label data-scope-name="${esc(n)}" data-scope-code="${label==='适用门店'?'51'+(41+i):'10000'+i}"><input type="checkbox" name="scope" value="${n}" ${i===0?'checked':''}>${n} <span class="muted">${label==='适用门店'?'51'+(41+i):'10000'+i}</span></label>`).join('')}</div>`,btn('确定','scope-save','primary')+btn('取消','close-overlay','plain'),'dialog','scope',{scopeField:label==='适用门店'?'适用门店':'溯源原料范围'});return}
 if(label==='预览链路'){openOverlay('溯源链路预览',`<div class="chain">${['原料信息','到货验收','大仓存储','大仓出库','门店配送','门店收货','门店存储'].map(n=>`<div class="chain-node">${n}<small>V1.0</small></div>`).join('')}</div>`,btn('关闭','close-overlay','plain'),'drawer');return}
 if(label==='配置'){relationWizard();return}if(label==='关联模板查看'){quickTable('关联模板',['模板编码','模板名称','模板状态'],[{'模板编码':'ST202609280001','模板名称':'鸡腿肉溯源模板','模板状态':'启用'}]);return}
 if(label==='最佳赏味期'){openOverlay('最佳赏味期设置',`<p>菜品名称：${esc(row()['菜品名称'])}</p><div class="field"><label><span class="required">*</span>最佳赏味期（天）</label><input id="taste-days" type="number" min="1" step="1" value="${esc(row()['最佳赏味期']||7)}"></div><p class="note">超出配置的赏味期后，消费者端隐藏对应菜品溯源信息。</p>`,btn('保存','taste-save','primary')+btn('取消','close-overlay','plain'),'dialog','taste');return}
 if(label==='原料显示配置'){openSingleMaterialDisplay();return}
 if(label==='菜品图片'){openOverlay('菜品图片',`<p>菜品名称：${esc(row()['菜品名称'])}</p><div class="field"><label>菜单图片（1:1，≤200KB）</label><input type="file" data-upload="menu-image" accept="image/jpeg,image/png,image/webp"></div><div class="field" style="margin-top:20px"><label>溯源详情图片（1:1，≤2MB）</label><input type="file" data-upload="detail-image" accept="image/jpeg,image/png,image/webp"></div><div id="image-previews"></div>`,btn('保存','images-save','primary')+btn('取消','close-overlay','plain'),'dialog','images');return}
 if(label==='配置权限'||label==='分配角色/数据范围'){permissions(p);return}
 if(label==='查看任务日志'){detailOverlay(index,0);return}
 if(label==='发起重建'||label==='重试失败任务'){if(label==='重试失败任务'&&row()['运行状态']!=='异常'){toast('当前无失败任务可重试');return}openOverlay(label,`<p>索引：${esc(row()['索引编码/名称'])}</p><div class="field"><label>重建范围</label><select id="rebuild-scope"><option>当前业务对象 · 增量</option><option>当前业务对象 · 全量</option></select></div><div class="field" style="margin-top:16px"><label>原因</label><textarea id="rebuild-reason"></textarea></div><p class="note">将生成演示任务，保留源业务数据。</p>`,btn('确认发起','rebuild-save','primary')+btn('取消','close-overlay','plain'));return}
 if(label==='重新生成'){openOverlay('重新生成消费者报告',`<p>按当前关联的消费者模板 ${esc(row()['消费者模板编码'])} / ${esc(row()['消费者模板版本'])} 重新生成演示报告？</p>`,btn('确认重新生成','regenerate-report','primary')+btn('取消','close-overlay','plain'));return}
 if(label==='关闭溯源报告'){openPublicClose([row()._key]);return}
 if(label==='二维码'&&row()['报告状态']==='已关闭'){toast('报告已关闭，消费者不可查看');return}
 if(label==='二维码'){openOverlay('报告二维码','<div class="empty">小程序入口待配置</div><p class="note">PRD 中二维码方式待小程序方案确认；配置入口前不生成无效二维码。</p>',btn('关闭','close-overlay','plain'));return}
 if(label==='下载'){toast('源附件尚未接入，请上传本地文件后下载');return}if(label==='删除'){openOverlay('删除文档',`<p>确认删除“${esc(row()['文档名称'])}”？</p>`,btn('删除','delete-record','danger')+btn('取消','close-overlay','plain'));return}
 attach(label);
}
function rememberEditor(){if(state.editor)state.editor.values={...state.editor.values,...formValues()}}
function settingsChanged(el){const c=state.components[state.componentIndex];if(!c)return;const k=el.dataset.setting,v=el.multiple?Array.from(el.selectedOptions).map(o=>o.value):el.value;c.config||={};
 if(k.startsWith('displayField-')){c.config.fields||=['原料名称','生产日期','供应商'];c.config.fields[Number(k.split('-')[1])]=v}
 else if(/^fuse(Field|Op|Value)-/.test(k)){c.config.rules||=[{field:'生产日期',op:'为空',val:''}];const [key,i]=k.split('-');c.config.rules[Number(i)]||={};c.config.rules[Number(i)][{fuseField:'field',fuseOp:'op',fuseValue:'val'}[key]]=v}
 else c.config[k]=v;
 if(['fuse','tag','logic','fuseMode','compare'].includes(k)){rememberEditor();render()}
 else if(k==='title'){$$('.phone-card h4')[state.componentIndex].textContent=v||c.type}
}
document.addEventListener('submit',e=>{e.preventDefault();if(e.target.id==='filters-form')doSearch()});
function doSearch(){if(page().id==='public-report')state.closedSelection=new Set();state.filters={};$$('[data-field]',$('#filters-form')).forEach(el=>{const n=el.dataset.field;if(el.dataset.part){state.filters[n]||={};state.filters[n][el.dataset.part]=el.value}else state.filters[n]=el.value});state.pageNo=1;render()}
document.addEventListener('click',e=>{
 const el=e.target.closest('[data-act]');if(!el)return;const act=el.dataset.act,p=page(),num=Number(el.dataset.num)||0;

 if(act==='trace-card-view'){openTraceCard(num);return}
 if(act==='material-batch-open'){openMaterialBatch();return}
 if(act==='material-batch-search'||act==='material-batch-reset'){const o=state.overlay;if(o?.task!=='material-batch')return;o.query=act==='material-batch-reset'?'':$('#batch-material-query').value.trim();o.materialCode='';o.selected=new Set();renderOverlay();return}
 if(act==='material-batch-pick'){const o=state.overlay;if(o?.task!=='material-batch')return;o.materialCode=el.dataset.code;o.selected=new Set();renderOverlay();return}
 if(act==='material-batch-review'){reviewMaterialBatch();return}
 if(act==='material-batch-confirm'){confirmMaterialBatch();return}
 if(act==='route-play'||act==='route-restart'){controlDeliveryRoute(el,act);return}
 if(act==='report-related'){e.preventDefault();openReportRelated(el);return}
 if(act==='report-related-back'){state.overlay=state.reportModalStack.pop();renderOverlay();return}
 if(act==='report-qualifications'){e.preventDefault();openOverlay('供应商资质','',btn('关闭','close-overlay','plain'),'dialog report-record-dialog','report-qualifications');return}
 if(act==='report-export'){exportReportTable(el.dataset.exportKey);return}
 if(act==='driver-health-back'){detailOverlay(state.index);return}
 if(act==='driver-health-preview'){openDriverHealth();return}
 if(act==='public-select-filtered'){state.closedSelection=new Set(filteredRows(p).filter(r=>r['报告状态']!=='已关闭').map(r=>r._key));render();return}
 if(act==='public-close-batch'){openPublicClose([...(state.closedSelection||[])]);return}
 if(act==='public-close-confirm'){confirmPublicClose();return}
 if(act==='public-clear-selection'){state.closedSelection=new Set();render();return}
 if(act==='alert-switch'){rememberEditor();const n=el.dataset.name;state.editor.values[n]=state.editor.values[n]===el.dataset.on?el.dataset.off:el.dataset.on;render();return}
 if(act==='complaint-open'){openComplaintEvent();return}
 if(act==='complaint-save'||act==='complaint-send'){saveComplaintEvent(act==='complaint-send');return}
 if(act==='nav'){navigate(el.dataset.page);return}if(act==='nav-group'){state.openGroups.has(el.dataset.group)?state.openGroups.delete(el.dataset.group):state.openGroups.add(el.dataset.group);render();return}
 if(act==='search'){e.preventDefault();doSearch();return}if(act==='reset'){if(p.id==='public-report')state.closedSelection=new Set();state.filters={};state.pageNo=1;render();return}if(act==='expand'){if(p.id==='public-report')state.closedSelection=new Set();state.filters={...state.filters};$$('[data-field]',$('#filters-form')).forEach(x=>{if(x.dataset.part){state.filters[x.dataset.field]||={};state.filters[x.dataset.field][x.dataset.part]=x.value}else state.filters[x.dataset.field]=x.value});state.expanded=!state.expanded;render();return}
 if(act==='refresh'){render();toast('演示数据已刷新，查询条件已保留');return}
 if(act==='prev-page'||act==='next-page'||act==='go-page'){state.pageNo=act==='go-page'?num:state.pageNo+(act==='next-page'?1:-1);render();return}
 if(act==='back'){const ctx=state.routeContext;state.editor=null;if(ctx?.page===p.id){navigate('overview','detail',ctx.overviewIndex||0);return}navigate(p.id);return}if(act==='close-overlay'){closeOverlay();return}
 if(act==='select-template'){state.templateChoice=Number(el.value);return}
 if(act==='more-actions'){state.index=Number(el.dataset.index)||0;openOverlay('操作',`<div class="scope-list">${p.uiActions.map(a=>btn(a,'row-action','text',`data-index="${state.index}" data-label="${esc(a)}"`)).join('')}</div>`,btn('取消','close-overlay','plain'));return}
 if(act==='row-action'){closeOverlay();rowAction(el.dataset.label,Number(el.dataset.index)||0);return}
 if(act==='tab'){state.tab=num;state.subQuery='';state.subPage=0;render();return}if(act==='sub-search'){state.subQuery=$('#sub-query')?.value||'';state.subPage=0;render();return}if(act==='sub-reset'){state.subQuery='';state.subPage=0;render();return}if(act==='sub-prev'||act==='sub-next'){state.subPage=(state.subPage||0)+(act==='sub-next'?1:-1);render();return}
 if(act==='public-material'){state.publicMaterial=num;render();toast('已切换原料：'+materialNames[num]);return}
 if(act==='report-anchor'){const target=$('#report-table-0-'+num);if(target){let parent=target.parentElement;while(parent){if(parent.tagName==='DETAILS')parent.open=true;parent=parent.parentElement}target.scrollIntoView({behavior:'smooth',block:'start'});}return}
 if(act==='report-search'||act==='report-reset'){const filter=el.closest('[data-report-key]'),key=filter.dataset.reportKey;state.reportQueries||={};state.reportDates||={};state.reportPages||={};state.reportQueries[key]=act==='report-reset'?'':$('.report-query',filter).value.trim();state.reportDates[key]=act==='report-reset'?{}:{start:$('.report-date-start',filter)?.value||'',end:$('.report-date-end',filter)?.value||''};state.reportPages[key]=0;render();return}
 if(act==='report-prev'||act==='report-next'){const key=el.closest('[data-report-key]').dataset.reportKey;state.reportPages||={};state.reportPages[key]=Math.max(0,(state.reportPages[key]||0)+(act==='report-next'?1:-1));render();return}
 if(act==='report-child-record'){const link=reportLinks()[state.stage],table=link.tables.find(t=>t.id===el.dataset.table),material=Number(el.dataset.material)||0,recordIndex=Number(el.dataset.record)||0;openOverlay(table.name+' · 关联明细','',btn('关闭','close-overlay','plain'),'drawer','report-child',{tableId:table.id,material,recordIndex});return}
 if(act==='report-attachment'){attach(el.dataset.name||'附件');return}

 if(act==='stage'){state.stage=num;render();return}if(act==='stage-prev'||act==='stage-next'){state.stage=Math.max(0,Math.min(reportLinks().length-1,state.stage+(act==='stage-next'?1:-1)));render();return}if(act==='anchor'){$('#report-section-0-'+num)?.scrollIntoView({behavior:'smooth',block:'start'});return}

 if(act==='new'){state.editor=null;if(['template','link','alert','consumer','consumer-link'].includes(p.kind))navigate(p.id,'new');else if(p.kind==='knowledge')knowledgeModal(true);else editModal(p,true);return}
 if(act==='new-version'){if(state.templateChoice==null){toast('请先单选一个模板');return}const old=records(p)[state.templateChoice];state.editor=null;navigate(p.id,'new');state.editor.values={...old,'版本号':'V1.'+((Number((old['版本号']||'V1.0').split('.')[1])||0)+1),'状态':'草稿'};state.stageDraft=structuredClone(old._stages||state.stageDraft);state.editor.sourceKey=old._key;render();toast('以选中模板创建新版本，原版本保留');return}
 if(act==='overlay-edit'){closeOverlay();editModal(p);return}if(act==='save-modal'){const v=formValues();if(['role','user'].includes(p.id)&&!state.editor.isNew&&((v['状态']&&v['状态']!==row()['状态'])||(v['账号来源/状态']&&v['账号来源/状态']!==row()['账号来源/状态']))){rememberEditor();openOverlay('确认状态变更','<div class="field"><label>变更原因</label><textarea id="status-reason"></textarea></div>',btn('确认保存','status-save','primary')+btn('取消','close-overlay','plain'));return}saveEditor(p,false,true);return}
 if(act==='status-save'){const reason=$('#status-reason').value.trim();if(!reason){toast('请填写变更原因');return}state.editor.values['变更说明']=reason;saveEditor(p,false,true);return}
 if(act==='save-editor'||act==='publish-editor'){rememberEditor();saveEditor(p,act==='publish-editor');return}
 if(act==='attachment'){attach(el.dataset.name);return}if(act==='download'){if(row()._file){downloadDataURL(row()._file.content,row()._file.name)}else toast('源附件尚未接入');return}
 if(act==='toggle-switch'){state.index=Number(el.dataset.index)||0;openOverlay('消费者溯源开关',`<p>确认${row()[el.dataset.field]==='禁用'?'启用':'停用'}“${esc(row()['菜品名称'])}”的消费者溯源？</p><p class="note">该操作影响消费者可见信息。</p>`,btn('确认','confirm-switch','primary')+btn('取消','close-overlay','plain'),'dialog','toggle',{field:el.dataset.field});return}
 if(act==='confirm-switch'){const f=state.overlay.field;row()[f]=row()[f]==='禁用'?'启用':'禁用';persist();closeOverlay();render();toast('溯源开关已更新');return}
 if(act==='taste-save'){const days=Number($('#taste-days').value);if(!Number.isInteger(days)||days<1){toast('请输入正整数天数');return}row()['最佳赏味期']=String(days);persist();closeOverlay();render();toast('最佳赏味期已保存');return}
 if(act==='material-display-save'){saveSingleMaterialDisplay();return}
 if(act==='images-save'){if(!state.pendingImages){toast('请先选择图片');return}row()._images={...row()._images,...state.pendingImages};persist();closeOverlay();toast('菜品图片已保存');return}
 if(act==='save-remark'){row()['食安备注']=$('#food-remark').value;persist();toast('食安备注已保存');return}
 if(act==='stage-add'||act==='stage-edit'){rememberEditor();openOverlay(act==='stage-add'?'新增阶段':'阶段编辑',`<div class="field"><label>阶段名称</label><input id="stage-name" value="${act==='stage-edit'?esc(state.stageDraft[num].name):''}" maxlength="30"></div><div class="field" style="margin-top:16px"><label>采集端icon</label><input type="file" accept="image/*" data-upload="stage-icon"></div>`,btn('保存','stage-save','primary')+btn('取消','close-overlay','plain'),'dialog','stage',{editIndex:act==='stage-add'?-1:num});return}
 if(act==='stage-save'){const name=$('#stage-name').value.trim(),index=state.overlay.editIndex;if(!name){toast('请填写阶段名称');return}if(state.stageDraft.some((s,i)=>i!==index&&s.name===name)){toast('阶段名称不能重复');return}if(index<0)state.stageDraft.push({name,links:[]});else state.stageDraft[index].name=name;closeOverlay();render();return}
 if(act==='stage-delete'){rememberEditor();state.stageDraft.splice(num,1);render();return}
 if(act==='import-links'){templateOpenLinkImport(num);return}
 if(act==='links-save'){const o=state.overlay;if(!o.readonly){const existing=state.stageDraft[o.stageIndex].links.map(raw=>templateNormalizeLink(raw)),ids=new Set(existing.map(r=>r.id));state.stageDraft[o.stageIndex].links=[...existing.filter(r=>o.selected.has(r.id)),...o.catalog.filter(r=>o.selected.has(r.id)&&!ids.has(r.id))].map(({name,version,code,type})=>({name,version,code,type}));}closeOverlay();render();return}
 if(act==='template-associations'){templateOpenAssociations(Number(el.dataset.stage),num);return}
 if(act==='template-main-table'||act==='template-child-tables'){templateOpenTableStructure(Number(el.dataset.stage),num,act==='template-child-tables');return}
 if(act==='template-select-table'){state.overlay.selectedTable=el.dataset.table;renderOverlay();return}
 if(act==='association-search'||act==='association-reset'){const o=state.overlay;o.codeQuery=act==='association-reset'?'':$('#association-code').value.trim();o.nameQuery=act==='association-reset'?'':$('#association-name').value.trim();o.pageNo=0;renderOverlay();return}
 if(act==='import-link-search'||act==='import-link-reset'){const o=state.overlay;o.objectQuery=act==='import-link-reset'?'':$('#import-object-name').value.trim();o.linkQuery=act==='import-link-reset'?'':$('#import-link-name').value.trim();o.pageNo=0;renderOverlay();return}
 if(act==='template-modal-prev'||act==='template-modal-next'||act==='template-modal-page'){const o=state.overlay;o.pageNo=act==='template-modal-page'?num:Math.max(0,o.pageNo+(act==='template-modal-next'?1:-1));renderOverlay();return}
 if(act==='link-remove'||act==='link-up'){rememberEditor();const links=state.stageDraft[Number(el.dataset.stage)].links;if(act==='link-remove')links.splice(num,1);else if(num>0)[links[num-1],links[num]]=[links[num],links[num-1]];render();return}
 if(act==='go-link'){navigate('link','detail',0);return}if(act==='go-supplier-template'){navigate('supplier-template','detail',0);return}if(act==='open-template'){navigate('material-template',num===2?'new':'detail',num);return}
 if(act==='scope'){rememberEditor();rowAction('覆盖范围',state.index);return}if(act==='scope-search'){const q=$('#scope-query').value;$$('[data-scope-name]').forEach(x=>x.style.display=x.dataset.scopeName.includes(q)||x.dataset.scopeCode.includes(q)?'':'none');return}
 if(act==='scope-save'){const names=$$('input[name="scope"]:checked').map(x=>x.value);if(!names.length){toast('请选择至少一项');return}const field=state.overlay.scopeField;if(state.editor){state.editor.values[field]=names.join('，')}else {row()[field]=names.join('，');persist()}closeOverlay();render();return}
 if(act==='component-add'){rememberEditor();state.components.push({type:componentTypes[num],title:componentTypes[num],config:{}});state.componentIndex=state.components.length-1;render();return}
 if(act==='component-select'){rememberEditor();state.componentIndex=num;render();return}
 if(act==='component-remove'){rememberEditor();state.components.splice(num,1);state.componentIndex=Math.max(0,Math.min(state.componentIndex,state.components.length-1));render();return}
 if(act==='component-up'||act==='component-down'){rememberEditor();const dest=num+(act==='component-up'?-1:1);if(dest>=0&&dest<state.components.length){[state.components[num],state.components[dest]]=[state.components[dest],state.components[num]];state.componentIndex=dest;render()}return}
 if(act==='display-field-add'||act==='qualified-field-add'){rememberEditor();const cfg=state.components[state.componentIndex].config;cfg.fields||=['原料名称','生产日期','供应商'];if(cfg.fields.length>=8){toast('每个组件最多8个展示字段');return}cfg.fields.push(act==='qualified-field-add'?'合格样式':'展示字段');render();return}
 if(act==='fuse-add'){rememberEditor();const cfg=state.components[state.componentIndex].config;cfg.rules||=[{field:'生产日期',op:'为空',val:''}];if(cfg.rules.length>=(cfg.logic==='OR'?2:5)){toast(cfg.logic==='OR'?'OR最多2个规则':'AND最多5个规则');return}cfg.rules.push({field:'生产日期',op:'为空',val:''});render();return}
 if(act==='fuse-delete'){rememberEditor();state.components[state.componentIndex].config.rules.splice(num,1);render();return}
 if(act==='consumer-preview'){openOverlay('消费者页面预览',`<div class="phone"><div class="phone-header">${esc(state.editor.values['菜品名称']||dishNames[0])}</div>${state.components.map((c,i)=>phoneContent(c,i,true)).join('')}</div>`,btn('关闭','close-overlay','plain'),'dialog');return}
 if(act==='chain-preview'){rowAction('预览链路',state.index);return}
 if(act==='condition-add'){rememberEditor();state.conditions.push({stage:'仓储',link:'大仓存储',object:'温度记录',field:'记录温度',operator:'大于',value:''});render();return}if(act==='condition-delete'){rememberEditor();state.conditions.splice(num,1);render();return}
 if(act==='relation-next'){state.upstream=$('input[name="upstream"]:checked')?.value;relationWizard(2);return}if(act==='relation-prev'){relationWizard(1);return}if(act==='relation-add'){$('#relation-lines').insertAdjacentHTML('beforeend',relationLineHTML($$('.relation-line').length));return}
 if(act==='relation-field-add'){el.insertAdjacentHTML('beforebegin',`<div class="rule-row"><span>字段选择</span>${selectOpt('leftField',['物料编码','物料批次','配送单号'])}<span>＝</span>${selectOpt('rightField',['物料编码','物料批次','配送单号'])}${btn('×','relation-field-delete','text','aria-label="删除字段关联"')}</div>`);return}
 if(act==='relation-field-delete'){el.closest('.rule-row').remove();return}if(act==='relation-save'){if(!$$('.relation-line .rule-row').length){toast('至少配置一条字段关联');return}row()['关联关系配置状态']='已配置';row()._relations=$$('.relation-line').map(x=>$$('input,select',x).map(e=>e.value));persist();closeOverlay();render();toast('关联关系已保存');return}
 if(act==='link-toggle'){if(row()['状态']==='启用'){toast('请先在引用模板中移除当前环节，再进行禁用');return}row()['状态']='启用';persist();render();toast('环节已启用');return}
  if(act==='field-add'||act==='field-edit'){rememberEditor();state.fieldDraft={};openOverlay('字段编辑',`<form id="field-form" class="form-grid">${p.tabs[0].fields.map(f=>`<div class="field"><label>${esc(f.name)}</label><input name="${esc(f.name)}" placeholder="请填写${esc(f.name)}"></div>`).join('')}</form>`,btn('填写校验','validation','plain')+btn('保存','field-save','primary')+btn('取消','close-overlay','plain'),'drawer','field');return}
 if(act==='validation'){state.fieldDraft=Object.fromEntries(new FormData($('#field-form')));openOverlay('填写校验',`<div class="field"><label>校验类型</label><select id="validate-type"><option>常规条件运算符</option><option>正则表达式</option></select></div><div class="field" style="margin-top:16px"><label>运算方式</label><select id="validate-op"><option>等于</option><option>不等于</option><option>大于</option><option>小于</option></select></div><div class="field" style="margin-top:16px"><label>对比值 / 正则表达式</label><input id="validate-value"></div>`,btn('确定','validation-save','primary')+btn('取消','close-overlay','plain'));return}
 if(act==='validation-save'){state.fieldDraft['填写校验']=$('#validate-type').value+' '+$('#validate-op').value+' '+$('#validate-value').value;state.editor.values._fields||=[];state.editor.values._fields.push(state.fieldDraft);closeOverlay();render();return}
 if(act==='regenerate-report'){row()['更新时间']=row()['最近更新时间']='2026-10-12 18:30:00';row()['更新人']=row()['最近更新人']='食安管理员';persist();closeOverlay();render();toast('消费者演示报告已重新生成');return}
 if(act==='field-save'){const vals=Object.fromEntries(new FormData($('#field-form')));if(!vals['字段名']||!vals['字段英文名']){toast('字段名和字段英文名必填');return}const fields=state.editor.values._fields||[];if(fields.some(f=>f['字段名']===vals['字段名']||f['字段英文名']===vals['字段英文名'])){toast('字段名或英文名不能重复');return}fields.push(vals);state.editor.values._fields=fields;closeOverlay();render();return}
 if(act==='field-import'||act==='manage-info'){rememberEditor();openOverlay(act==='field-import'?'导入字段':'溯源信息管理',`<div class="scope-list">${(act==='field-import'?['物料编码','物料批次','采集时间','记录温度']:['收货记录','检测结果数据（自检）','批检报告（随货）','动检票（随货）']).map(n=>`<label><input type="checkbox" name="selected-info" value="${n}">${n}</label>`).join('')}</div>`,btn('确定','info-select-save','primary')+btn('取消','close-overlay','plain'),'dialog','field-import',{importKind:act});return}
 if(act==='info-select-save'){const names=$$('input[name="selected-info"]:checked').map(x=>x.value);if(state.overlay.importKind==='field-import'){state.editor.values._fields||=[];names.forEach((n,i)=>state.editor.values._fields.push({'字段名':n,'字段英文名':'field_'+i}))}else state.editor.values._info=names;closeOverlay();render();return}
 if(act==='add-info'){rememberEditor();openOverlay('增加溯源信息',`<div class="field"><label>信息名</label><input id="info-name"></div><div class="field" style="margin-top:16px"><label>表英文名</label><input id="info-english"></div><div class="field" style="margin-top:16px"><label>采集端icon</label><input type="file" accept="image/*"></div>`,btn('保存','info-add-save','primary')+btn('取消','close-overlay','plain'));return}
 if(act==='info-add-save'){if(!$('#info-name').value||!$('#info-english').value){toast('请填写信息名和表英文名');return}state.editor.values._info||=[];state.editor.values._info.push($('#info-name').value);closeOverlay();render();toast('溯源信息已添加');return}
 if(act==='history-detail'){const h=row()._history[num];const snap=h._snapshot||h;openOverlay('历史版本 · 只读',infoHTML([...p.columns,...p.form],snap),btn('关闭','close-overlay','plain'),'drawer','historical');return}
 if(act==='history-copy'){const snap=row()._history[num]._snapshot;closeOverlay();navigate(p.id,'new');state.editor.values={...snap};state.editor.values['模板编码']='';render();return}
 if(act==='permission-preview'){const reason=$('#change-reason').value.trim();if(!reason){toast('请填写变更原因');return}state.permissionDraft={menus:$$('input[name="permission"]:checked').map(x=>x.value),operations:$$('input[name="operation"]:checked').map(x=>x.value),scope:$$('input[name="scope"]:checked').map(x=>x.value),reason};openOverlay('确认权限变更',`<p>受影响用户数：${esc(row()['关联用户数']||1)}</p><p>原数据范围：${esc(row()['数据范围'])}</p><p>调整后范围：${esc(state.permissionDraft.scope.join('，')||'无访问权限')}</p><p>原因：${esc(reason)}</p>`,btn('确认保存','permission-save','primary')+btn('取消','close-overlay','plain'));return}
 if(act==='permission-save'){row()._permissions=state.permissionDraft;row()['数据范围']=state.permissionDraft.scope.join('，')||'无访问权限';persist();closeOverlay();render();toast('授权变更已保存');return}
 if(act==='rebuild-save'){if(!$('#rebuild-reason').value.trim()){toast('请填写重建原因');return}if(row()['运行状态']==='构建中'){toast('同一范围已有执行中的任务');return}row()['运行状态']='构建中';row()._task={reason:$('#rebuild-reason').value,scope:$('#rebuild-scope').value};persist();closeOverlay();render();toast('演示重建任务已创建');return}
 if(act==='delete-record'){records(p).splice(state.index,1);persist();closeOverlay();render();toast('文档已删除');return}
 if(act==='external'){toast('外部系统地址待客户提供');return}
 if(act==='batch-import'){openOverlay('批量添加库存地点',`<p class="note">下载模板、填写库存地点后上传CSV。必填门店编码、库存地点名称和库存地点类型。</p>${btn('下载模板','batch-template','plain')}<input id="batch-file" type="file" accept=".csv" style="margin-top:20px"><div id="batch-result"></div>`,btn('导入','batch-save','primary')+btn('取消','close-overlay','plain'));return}
 if(act==='batch-template'){download('\ufeff门店编码,门店名称,库存地点编码,库存地点名称,库存地点类型,库存地点说明\n5141,合肥政务万达店,51410001,冷冻库A01,冷冻库,冷冻原料存储\n','库存地点导入模板.csv');return}
 if(act==='batch-save'){if(!state.batchRows?.length){toast('请先上传有效CSV');return}records(p).unshift(...state.batchRows);persist();closeOverlay();render();toast('已导入 '+state.batchRows.length+' 条库存地点');return}
 if(act==='reset-data'){openOverlay('恢复演示数据','<p>将清除本原型保存在当前浏览器中的配置，重新生成演示记录。</p>',btn('恢复','confirm-reset','danger')+btn('取消','close-overlay','plain'));return}
 if(act==='confirm-reset'){dataStore={};localStorage.removeItem('lxj-prototype-v1');state.editor=null;closeOverlay();navigate(p.id);toast('演示数据已恢复');return}
 if(act==='knowledge-save'){saveKnowledge();return}
});
document.addEventListener('input',e=>{const el=e.target;if(el.hasAttribute('data-route-progress')){controlDeliveryRoute(el,'seek');return}if(page().kind==='alert'&&['配置名称','配置说明'].includes(el.name)){const counter=$('[data-count-for="'+el.name+'"]');if(counter)counter.textContent=el.value.length+' / '+el.maxLength;}if(el.id==='nav-query'){state.navQuery=el.value;const pos=el.selectionStart;render();$('#nav-query').focus();$('#nav-query').setSelectionRange(pos,pos)}if(el.dataset.setting)settingsChanged(el);if(el.dataset.cond)state.conditions[Number(el.dataset.num)][el.dataset.cond]=el.value;});
document.addEventListener('change',async e=>{const el=e.target,o=state.overlay;
 if(o?.task==='material-batch'&&el.hasAttribute('data-material-batch-code')){el.checked?o.selected.add(el.dataset.materialBatchCode):o.selected.delete(el.dataset.materialBatchCode);renderOverlay();return}
 if(o?.task==='material-batch'&&el.hasAttribute('data-material-batch-all')){o.selected=new Set(el.checked?relatedDishGroups(o.materialCode).filter(g=>g.visible).map(g=>g.code):[]);renderOverlay();return}
 if(el.hasAttribute('data-route-speed')){controlDeliveryRoute(el,'speed');return}
 if(el.hasAttribute('data-public-key')){state.closedSelection||=new Set();el.checked?state.closedSelection.add(el.dataset.publicKey):state.closedSelection.delete(el.dataset.publicKey);render();return}
 if(el.hasAttribute('data-public-select-page')){state.closedSelection||=new Set();filteredRows(page()).slice((state.pageNo-1)*state.size,state.pageNo*state.size).filter(r=>r['报告状态']!=='已关闭').forEach(r=>el.checked?state.closedSelection.add(r._key):state.closedSelection.delete(r._key));render();return}
 if(page().kind==='alert'&&['告警覆盖类型','告警类型','告警级别'].includes(el.name)){rememberEditor();if(el.name==='告警覆盖类型')state.editor.values['适配模板范围']='';render();return}

 if(o?.task==='complaint-event'&&['complaint-is-food','complaint-party','complaint-target'].includes(el.id)){if(el.id==='complaint-party')$('#complaint-unit').value='';updateComplaintRoute();return}
 if(el.hasAttribute('data-import-link-id')&&o?.task==='template-link-import'){if(!o.readonly){el.checked?o.selected.add(el.dataset.importLinkId):o.selected.delete(el.dataset.importLinkId);renderOverlay();}return}
 if(el.hasAttribute('data-import-select-page')&&o?.task==='template-link-import'){if(!o.readonly){templateImportFiltered(o).slice(o.pageNo*o.size,(o.pageNo+1)*o.size).forEach(r=>el.checked?o.selected.add(r.id):o.selected.delete(r.id));renderOverlay();}return}
 if(el.hasAttribute('data-template-page-size')){o.size=Number(el.value);o.pageNo=0;renderOverlay();return}
 if(el.hasAttribute('data-template-jump')){const total=o.task==='template-link-import'?templateImportFiltered(o).length:o.rows.filter(r=>(!o.codeQuery||r.code===o.codeQuery)&&(!o.nameQuery||r.name.includes(o.nameQuery))).length;o.pageNo=Math.max(0,Math.min((Number(el.value)||1)-1,Math.max(0,Math.ceil(total/o.size)-1)));renderOverlay();return}
 if(el.dataset.act==='page-size'){state.size=Number(el.value);state.pageNo=1;render()}
 if(el.dataset.act==='jump-page'){state.pageNo=Math.max(1,Math.min(Number(el.value)||1,Math.ceil(filteredRows(page()).length/state.size)));render()}
 if(el.name==='alert-mode'){rememberEditor();state.editor.values['告警类型']=el.value;render()}
 if(el.id==='menu-channel'){state.menuChannel=el.value;state.subQuery='';state.subPage=0;render()}
 if(el.name==='用户组类型'){const isRole=el.value==='按角色';$$('.field').forEach(f=>{const name=$('label',f)?.textContent;if(name==='告警角色')f.style.display=isRole?'':'none';if(name==='告警用户')f.style.display=isRole?'none':''})}
 if(el.dataset.upload){const files=Array.from(el.files);if(!files.length)return;const ty=el.dataset.upload,limit={video:100*1024*1024,cover:1024*1024,carousel:500*1024,'menu-image':200*1024,'detail-image':2*1024*1024}[ty]||10*1024*1024;if(files.some(f=>f.size>limit)||(ty==='carousel'&&files.length>8)){el.value='';toast('文件超过允许大小或数量');return}
 if(ty==='video'&&files[0].type!=='video/mp4'){toast('仅支持MP4视频');el.value='';return}
 if(ty.includes('image')){const file=files[0],url=await asDataURL(file);const img=new Image();img.onload=()=>{if(img.width!==img.height){toast('图片宽高必须为1:1');el.value='';return}state.pendingImages||={};state.pendingImages[ty]=url;$('#image-previews').insertAdjacentHTML('beforeend',`<img src="${url}" alt="已选图片" style="width:100px;height:100px;margin:15px">`)};img.src=url}
 else if(state.editor){state.editor.values['_upload-'+ty]=files.map(f=>({name:f.name,size:f.size}));toast('已选择 '+files.length+' 个文件')}
 }
 if(el.id==='preview-upload'){const f=el.files[0];if(!f)return;const url=URL.createObjectURL(f);const body=$('.attachment-preview');if(f.type.startsWith('image/'))body.innerHTML=`<img src="${url}" alt="${esc(f.name)}" style="max-width:100%">`;else if(f.type==='application/pdf')body.innerHTML=`<iframe src="${url}" title="${esc(f.name)}" style="width:100%;height:60vh;border:0"></iframe>`;else body.textContent=await f.text()}
 if(el.id==='batch-file'){const text=await el.files[0].text(),lines=text.trim().replace(/^\ufeff/,'').split(/\r?\n/),heads=lines.shift().split(',');const required=['门店编码','库存地点名称','库存地点类型'];if(required.some(x=>!heads.includes(x))){toast('CSV缺少必填列');return}state.batchRows=lines.map((line,i)=>{const rr={_key:'import-'+Date.now()+'-'+i};line.split(',').forEach((v,j)=>rr[heads[j]]=v.trim());rr['状态']='启用';rr['创建时间']=rr['最后更新时间']='2026-10-12 18:30:00';return rr});if(state.batchRows.some(r=>required.some(n=>!r[n]))){toast('存在必填字段为空的行');state.batchRows=[];return}$('#batch-result').textContent='已校验 '+state.batchRows.length+' 条记录，点击导入完成'}
});
function asDataURL(file){return new Promise((resolve,reject)=>{const f=new FileReader();f.onload=()=>resolve(f.result);f.onerror=reject;f.readAsDataURL(file)})}
function knowledgeModal(isNew){state.editor={isNew,values:isNew?{}:{...row()}};openOverlay(isNew?'上传文档':'编辑文档',formHTML([{name:'文档名称'},{name:'文档分类'},{name:'文档说明'}],state.editor.values)+`<div class="field" style="padding:0 22px 22px"><label>文件（Word / Excel / PDF / 图片，≤5MB）</label><input id="knowledge-file" type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.webp" ${isNew?'multiple':''}></div>`,btn('保存','knowledge-save','primary')+btn('取消','close-overlay','plain'),'dialog','knowledge')}
async function saveKnowledge(){const values=formValues(),files=Array.from($('#knowledge-file').files);if(!values['文档名称']){toast('文档名称必填');return}if(state.editor.isNew&&!files.length){toast('请选择文件');return}if(files.some(f=>f.size>5*1024*1024)||files.length>10){toast('单个附件≤5MB，最多10个');return}if(!files.length){Object.assign(row(),values);persist();closeOverlay();render();toast('文档信息已保存');return}for(const f of files){const r={...values,'文档名称':files.length>1?f.name:values['文档名称'],'文件格式':f.name.split('.').pop().toUpperCase(),'文件大小':(f.size/1024).toFixed(1)+'KB','上传人':'食安管理员','上传时间':'2026-10-12 18:30:00',_file:{name:f.name,type:f.type,content:await asDataURL(f)}};if(state.editor.isNew)records(page()).unshift(r);else Object.assign(row(),r)}persist();closeOverlay();render();toast('文档已保存')}
let dragItem=null;document.addEventListener('dragstart',e=>{const c=e.target.closest('[data-component],[data-palette]');if(!c)return;dragItem=c.dataset.palette!=null?{type:'new',index:Number(c.dataset.palette)}:{type:'move',index:Number(c.dataset.component)};e.dataTransfer.setData('text/plain',JSON.stringify(dragItem))});document.addEventListener('dragover',e=>{if(e.target.closest('#component-drop'))e.preventDefault()});document.addEventListener('drop',e=>{if(!e.target.closest('#component-drop')||!dragItem)return;e.preventDefault();rememberEditor();const dst=e.target.closest('[data-component]'),index=dst?Number(dst.dataset.component):state.components.length;if(dragItem.type==='new')state.components.splice(index,0,{type:componentTypes[dragItem.index],title:componentTypes[dragItem.index],config:{}});else{const c=state.components.splice(dragItem.index,1)[0];state.components.splice(Math.min(index,state.components.length),0,c)}state.componentIndex=Math.min(index,state.components.length-1);dragItem=null;render()});
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.id==='batch-material-query'){e.preventDefault();$('[data-act=material-batch-search]').click()}if(e.key==='Escape')closeOverlay();if(e.key==='Enter'&&['association-code','association-name'].includes(e.target.id)){e.preventDefault();$('[data-act="association-search"]').click()}if(e.key==='Enter'&&['import-object-name','import-link-name'].includes(e.target.id)){e.preventDefault();$('[data-act="import-link-search"]').click()}if(e.key==='Enter'&&e.target.id==='sub-query'){$('[data-act="sub-search"]').click()}});

function reportSummaryHTML(fields,r,title='报告概要',visibleCount=4){
 return `<section class="panel report-summary"><div class="section-title">${title}<span class="right muted">${fields.length} 项信息</span></div>${infoHTML(fields.slice(0,visibleCount),r)}<details><summary>展开完整概要</summary>${infoHTML(fields.slice(visibleCount),r)}</details></section>`;
}
function reportRecords(t,materialIndex=0,parentPath=[]){
 const sourceId=t.id.replace(/^kitchen_/,''),base=baseReportRecords({...t,id:sourceId},materialIndex),isMain=t.type.startsWith('1-');
 const count=isMain?(page().id==='forward'&&sourceId!=='tb_kitchenProduction'?3:1):isReverseReport()&&['stb_storeReceiptDetail','stb_deliveryRoute'].includes(sourceId)?1:4;
 const pathCode=parentPath.map(i=>i+1).join('-')||'root';
 return Array.from({length:count},(_,i)=>{
  const original=base[i%base.length],values={...original.values},suffix=pathCode+'-'+(i+1),forward=page().id==='forward';let parentRecordKey=null;
  for(const f of reportVisibleFields(t)){
   if(!isReverseReport()&&(/^(id|guid)$/.test(f.key)||f.isPrimary))values[f.key]=sourceId+'-'+materialIndex+'-'+suffix;
   if(forward&&/单号|单据编号/.test(f.name)&&!/采购订单/.test(f.name))values[f.key]=String(values[f.key]).replace(/-R\d+.*$/,'')+'-R'+suffix;
   if(forward&&/^(warehouseCode|factoryCode|dc_code)$/.test(f.key))values[f.key]='WH'+String((parentPath[0]??i)+1).padStart(3,'0');
   if(forward&&/^(factoryName|warehouseName)$/.test(f.key))values[f.key]=(sourceId==='tb_kitchenProduction'?['合肥中央厨房','南京中央厨房','上海中央厨房']:['合肥仓储中心','南京仓储中心','上海仓储中心'])[(parentPath[0]??i)%3];
   if(forward&&f.key==='factoryId')values[f.key]='CK'+String((parentPath[0]??i)+1).padStart(3,'0');
   if(forward&&f.key==='store_code')values[f.key]='51'+(41+(parentPath[0]??i)%3);
  }
  // Distinct business documents share the material batch; related tables inherit the selected document.
  if(forward){
   const branch=String((parentPath[0]??i)+1).padStart(3,'0');
   if(sourceId==='tb_whReceiptRecord'||sourceId==='tb_whOutboundRecord'){
    const receiptSuffix=sourceId==='tb_whReceiptRecord'&&parentPath.length?branch+'-'+(i+1):branch;
    values.receiptId='RID'+receiptSuffix;values.receiptDetailId='RLINE'+receiptSuffix;values.receiptCode='RK20260928-'+receiptSuffix;
   }
   if(sourceId==='tb_whOutboundRecord'){values.shipmentId='SID'+branch;values.shipmentDetailId='SLINE'+branch;values.shipmentCode='CK20260928-'+branch;}
  }
  // Resolve child foreign keys from the selected parent record, including nested receipt inspection.
  if(parentPath.length){
   const link=reportLinks(page(),true).find(l=>l.tables.some(x=>x.id===t.id)),pt=link?.tables.find(x=>x.id===t.parent);
   if(pt){const pr=reportRecords(pt,materialIndex,parentPath.slice(0,-1))[parentPath.at(-1)];
    if(pr){parentRecordKey=pr._recordKey;const pv=pr.values;
     for(const k of ['purchase_code','store_code','deliveryOrderNo','delivery_order_no','receiptCode','receiptId','shipmentId','productionOrderNo'])if(k in values&&k in pv)values[k]=pv[k];
     if('workOrderNo' in values&&pv.productionOrderNo)values.workOrderNo=pv.productionOrderNo;
     if('receiptId' in values&&pv.receiptId)values.receiptId=pv.receiptId;
     if('warehouseCode' in values&&pv.warehouseCode)values.warehouseCode=pv.warehouseCode;
     if('dataIdOrCode' in values&&pv.id)values.dataIdOrCode=pv.id;
     if('dataHeaderIdOrCode' in values&&pv.receiptId)values.dataHeaderIdOrCode=pv.receiptId;
     if('tableName' in values)values.tableName=pt.id.replace(/^kitchen_/,'');
     if('receiptCode' in values&&pv.receiptCode)values.receiptCode=pv.receiptCode;
    }
   }
  }
  return {...original,_index:i,values,_recordKey:t.id+'-'+materialIndex+'-'+suffix,_parentKey:parentRecordKey,_path:[...parentPath,i]};
 });
}



function openReportRelated(el){
 const link=reportLinks().find(l=>l.id===el.dataset.link),table=link.tables.find(t=>t.id===el.dataset.table),parentPath=JSON.parse(el.dataset.path),material=Number(el.dataset.material);
 const pt=link.tables.find(t=>t.id===table.parent),pr=reportRecords(pt,material,parentPath.slice(0,-1))[parentPath.at(-1)];
 state.reportModalStack||=[];if(state.overlay?.task==='report-child')state.reportModalStack.push({...state.overlay});else state.reportModalStack=[];
 openOverlay(table.name,'',(state.reportModalStack.length?btn('返回上一级','report-related-back','plain'):'')+btn('关闭','close-overlay','plain'),'dialog report-record-dialog','report-child',{linkId:link.id,tableId:table.id,material,parentPath,parent:table.parent,parentRecordKey:pr._recordKey});
}

function publicRangeCounts(rows){return `${rows.length} 份报告 · ${new Set(rows.map(r=>r['菜品编码'])).size} 个菜品 · ${new Set(rows.map(r=>r['门店编码'])).size} 家门店`;}
function publicFilterSummary(){const items=Object.entries(state.filters).filter(([,v])=>typeof v==='object'?v.start||v.end:v);return items.length?items.map(([n,v])=>n+'：'+(typeof v==='object'?(v.start||'不限')+' 至 '+(v.end||'不限'):v)).join('；'):'全部报告（未设置筛选条件）';}
function publicReportSelectionHTML(){
 state.closedSelection||=new Set();const all=filteredRows(page()),available=all.filter(r=>r['报告状态']!=='已关闭'),selected=records(page()).filter(r=>state.closedSelection.has(r._key)&&r['报告状态']!=='已关闭');
 return `<div class="public-scope-summary"><strong>当前查询命中：${publicRangeCounts(all)}</strong><span>可关闭 ${available.length} 份 · 已关闭 ${all.length-available.length} 份</span><p>${esc(publicFilterSummary())}</p></div><div class="public-batch-bar"><span>已选择 ${publicRangeCounts(selected)}（支持跨页）</span>${btn('选择全部筛选结果（'+available.length+'）','public-select-filtered','plain',available.length?'':'disabled')}${btn('批量关闭溯源报告','public-close-batch','plain',selected.length?'':'disabled')}${btn('清空选择','public-clear-selection','text',selected.length?'':'disabled')}</div><p class="note public-selection-note">表头复选框仅选择本页；全部筛选结果会跨页选择。搜索或重置条件后将清空选择。批量关闭只影响确认清单中的既有报告。</p>`;
}
function openPublicClose(keys){
 const rows=records(page()).filter(r=>keys.includes(r._key)&&r['报告状态']!=='已关闭');if(!rows.length){toast('请选择尚未关闭的报告');return}
 const filters=publicFilterSummary();
 openOverlay('确认关闭消费者溯源报告',`<div class="public-close-impact"><strong>本次影响：${publicRangeCounts(rows)}</strong><p>${esc(filters)}</p></div><p>仅关闭以下固定清单中的报告；未选报告和未来新报告不受影响。内部证据保留，重新生成不会自动开启报告。</p><div class="field"><label>事件编号（选填）</label><input id="public-close-event" maxlength="60" placeholder="填写关联舆情或食安事件编号"></div><div class="field"><label>关闭原因 <span class="required">*</span></label><textarea id="public-close-reason" maxlength="500" placeholder="请填写本次关闭原因，便于核查与留痕"></textarea></div><p class="error" id="public-close-error" role="alert"></p><div class="close-report-list">${rows.map(r=>`<p><span class="code">${esc(r['消费者溯源报告编码'])}</span> · ${esc(r['门店名称'])} · ${esc(r['菜品名称'])}</p>`).join('')}</div><p class="note">当前为本地演示，关闭状态保存在本机浏览器。</p>`,btn('取消','close-overlay','plain')+btn('确认关闭 '+rows.length+' 份报告','public-close-confirm','primary'),'dialog','public-close',{keys:rows.map(r=>r._key),filterSummary:filters});
}
function confirmPublicClose(){
 if(state.overlay?.task!=='public-close')return;const reason=$('#public-close-reason').value.trim(),event=$('#public-close-event').value.trim();if(!reason){$('#public-close-error').textContent='请填写关闭原因后再确认。';$('#public-close-reason').focus();return}
 const keys=new Set(state.overlay.keys),time=new Date().toLocaleString('zh-CN',{timeZone:'Asia/Shanghai',hour12:false}),filterSummary=state.overlay.filterSummary;let count=0;
 const updated=records(page()).map(r=>{if(!keys.has(r._key)||r['报告状态']==='已关闭')return r;count++;return {...r,'报告状态':'已关闭',_closedAt:time,_closedBy:'食安管理员',_closeReason:reason,_closeEvent:event,_closeHistory:[...(r._closeHistory||[]),{time,operator:'食安管理员',reason,event,filterSummary}]}});
 try{localStorage.setItem('lxj-prototype-v1',JSON.stringify({...dataStore,'public-report':updated}))}catch{toast('本地保存失败，尚未关闭报告');return}
 dataStore['public-report']=updated;state.closedSelection=new Set();state.pageNo=1;closeOverlay();render();openOverlay('批量关闭结果',`<div class="public-close-impact"><strong>成功 ${count} 份 · 失败 0 份 · 已关闭跳过 ${keys.size-count} 份</strong></div><p>报告已在当前原型中关闭。未选报告保持原状态。</p><div class="close-report-list">${updated.filter(r=>keys.has(r._key)).map(r=>`<p>${esc(r['消费者溯源报告编码'])} · ${esc(r['门店名称'])} · 已关闭</p>`).join('')}</div>`,btn('完成','close-overlay','primary'));toast('已关闭 '+count+' 条消费者溯源报告');
}

function alertSelect(name,choices,value,placeholder='请选择'){
 return `<select name="${esc(name)}"><option value="">${placeholder}</option>${choices.map(x=>{const v=typeof x==='string'?x:x.value,label=typeof x==='string'?x:x.label;return `<option value="${esc(v)}" ${v===value?'selected':''}>${esc(label)}</option>`}).join('')}</select>`;
}
function alertTemplateChoices(type){const id={'菜品':'dish-template-detail','原料':'material-template','供应商':'supplier-template'}[type]||'material-template';return records(PAGES.find(p=>p.id===id)).filter(r=>overviewIsActive(r)).map(r=>({value:r._key,label:(r['模板名称']||'溯源模板')+' '+(r['版本号']||'V1.0')+' · '+r['模板编码']}))}
function alertNamedRecords(id,field){return [...new Map(records(PAGES.find(p=>p.id===id)).filter(r=>r['状态']==='启用').map(r=>[r[field],r])).values()].filter(r=>r[field]&&r[field]!=='—')}
function alertConfigurationHTML(v){
 if(!['菜品','原料','供应商'].includes(v['告警覆盖类型']))v['告警覆盖类型']=({'按菜品模板':'菜品','按供应商模板':'供应商'}[v['适配模板范围']]||'原料');
 if(!['启用','禁用'].includes(v['配置状态']))v['配置状态']=v['状态']==='禁用'?'禁用':'启用';
 if(!['是','否'].includes(v['是否只发送对应门店人员']))v['是否只发送对应门店人员']='否';
 if(!['告警条件累加','多告警值对比','全局告警条件'].includes(v['告警类型']))v['告警类型']='告警条件累加';
 if(!v['配置名称']||v['配置名称']==='—')v['配置名称']=v['告警配置名称']||'';
 if(!v['配置说明']||v['配置说明']==='—')v['配置说明']=v['告警说明']||'';
 if(v._global==='保质期不足'&&!v['全局告警条件'])v['全局告警条件']='保质期剩余不足';
 const field=(name,control,required=false,cls='')=>`<div class="alert-field ${cls}"><label>${required?'<span class="required">*</span>':''}${esc(name)}</label><div class="alert-control">${control}</div></div>`;
 const switcher=(name,on,off)=>`<input type="hidden" name="${name}" value="${esc(v[name])}"><span class="muted">${off}</span><button type="button" class="switch ${v[name]===on?'on':''}" role="switch" aria-checked="${v[name]===on}" data-act="alert-switch" data-name="${name}" data-on="${on}" data-off="${off}"><span class="switch-track"></span></button><span>${on}</span>`;
 const radios=(name,choices)=>`<div class="alert-radio-options">${choices.map(x=>`<label><input type="radio" name="${name}" value="${x}" ${v[name]===x?'checked':''}>${x}</label>`).join('')}</div>`;
 const levels=alertNamedRecords('alert-level','告警级别名称'),groups=alertNamedRecords('alert-group','告警用户组名称'),level=levels.find(r=>r['告警级别名称']===v['告警级别']);
 const actions=level?level['告警方式']==='IM通知'?'IM通知、系统记录':'系统记录':'选择级别后显示';v['告警动作']=actions;
 const name=v['配置名称']||'',description=v['配置说明']||'';
 const basics=`<div class="alert-metadata"><span>配置编码：<b>${esc(state.editor.isNew?'保存后生成':v['配置编码']||v['告警配置编码'])}</b></span><span>创建时间：${esc(state.editor.isNew?'保存后生成':v['创建时间'])}</span><span>创建人：${esc(state.editor.isNew?'食安管理员':v['创建人'])}</span></div><div class="alert-form-fields">`+
 field('配置名称',`<div class="counted-control"><input name="配置名称" maxlength="20" value="${esc(name)}"><span data-count-for="配置名称">${name.length} / 20</span></div>`,true)+
 field('配置状态',switcher('配置状态','启用','禁用'))+
 field('配置说明',`<div class="counted-control"><textarea name="配置说明" maxlength="100" placeholder="请输入">${esc(description)}</textarea><span data-count-for="配置说明">${description.length} / 100</span></div>`)+`</div>`;
 const coverage=`<div class="alert-form-fields">${field('请选择',radios('告警覆盖类型',['菜品','原料','供应商']))}${field('适配模板范围',alertSelect('适配模板范围',alertTemplateChoices(v['告警覆盖类型']),v['适配模板范围']),true)}</div>`;
 const mode=v['告警类型'],condition=mode==='全局告警条件'?field('告警条件',alertSelect('全局告警条件',['保质期剩余不足','溯源必填字段为空','IOT设备异常','门店IOT设备温度超标'],v['全局告警条件']||v._global),true):alertConditionsHTML(mode);
 const range=(v['告警时间']||'09:00-22:00').split('-');if(v._alertStart!==undefined)range[0]=v._alertStart;if(v._alertEnd!==undefined)range[1]=v._alertEnd;
 const details=`<div class="alert-form-fields">${field('告警类型',radios('告警类型',['告警条件累加','多告警值对比','全局告警条件']),true)}${condition}
 ${field('告警级别',`<div class="alert-inline">${alertSelect('告警级别',levels.map(r=>r['告警级别名称']),v['告警级别'])}<span>告警动作：<strong>${esc(actions)}</strong></span><input type="hidden" name="告警动作" value="${esc(actions)}"><label>告警频率</label>${alertSelect('告警频率',['不限制','1小时一次','12小时一次','24小时一次'],v['告警频率']||'不限制')}</div>`,true)}
 ${field('告警用户组',alertSelect('告警用户组',groups.map(r=>r['告警用户组名称']),v['告警用户组']),true)}
 ${field('时间范围',`<div class="alert-inline"><input type="time" name="_alertStart" aria-label="告警开始时间" value="${esc(range[0])}"><span>至</span><input type="time" name="_alertEnd" aria-label="告警结束时间" value="${esc(range[1]==='24:00'?'23:59':range[1])}"></div>`)}
 ${field('是否只发送对应门店人员',switcher('是否只发送对应门店人员','是','否'))}</div>`;
 return `<form id="editor-form" class="alert-editor">${panel('配置基本信息',basics)}${panel('告警覆盖范围',coverage)}${panel('配置详情',details)}</form>`;
}
function alertConditionsHTML(mode){return `<div class="alert-condition-list">${state.conditions.map((c,i)=>`<div class="condition"><div class="form-grid">${[['stage','告警阶段',['养殖','生产加工','仓储','配送','门店']],['link','告警环节',['到货验收','大仓存储','大仓出库','门店配送','门店收货','门店存储']],['object','告警信息',['温度记录','收货记录','质检单']],['field','告警字段',['记录温度','采集时间','生产日期','整体数据集']]].map(([key,label,opts])=>`<div class="field"><label>${label}</label>${conditionSelect(key,opts,c[key],i)}</div>`).join('')}</div><div class="rule-row"><span>条件 ${i+1}</span>${conditionSelect('operator',['大于','小于','等于','不等于','大于等于（≥）','小于等于（≤）','为空','不为空','包含','不包含'],c.operator,i)}<input data-cond="value" data-num="${i}" aria-label="告警值" value="${esc(c.value)}"><span>${mode==='多告警值对比'?'参与数值对比':'条件同时满足'}</span>${btn('×','condition-delete','text',`type="button" data-num="${i}" aria-label="删除条件"`)}</div></div>`).join('')}${mode==='多告警值对比'?`<div class="alert-inline"><span>告警值一</span>${alertSelect('对比算法',['+','−','×','÷'],state.editor.values['对比算法']||'+')}<span>告警值二，结果大于</span><input type="number" name="对比阈值" value="${esc(state.editor.values['对比阈值']??0)}"></div>`:''}${btn('添加告警值','condition-add','plain','type="button"')}</div>`}
function validateAlert(values){
 for(const n of ['配置名称','适配模板范围','告警级别','告警用户组','告警频率'])if(!values[n]||values[n]==='—'){toast('请选择或填写'+n);return false}
 if(values['配置名称'].trim().length===0||values['配置名称'].length>20||String(values['配置说明']||'').length>100){toast('配置名称限20字，配置说明限100字');return false}
 if(!alertTemplateChoices(values['告警覆盖类型']).some(x=>x.value===values['适配模板范围'])){toast('请选择当前覆盖类型下的有效模板');return false}
 if(values['告警类型']==='全局告警条件'&&!values['全局告警条件']){toast('请选择全局告警条件');return false}
 if(values['告警类型']!=='全局告警条件'&&(!state.conditions.length||state.conditions.some(c=>!c.field||!c.operator||(!['为空','不为空'].includes(c.operator)&&!String(c.value).trim())))){toast('请配置完整的告警条件');return false}
 if(values['告警类型']==='多告警值对比'&&(state.conditions.length<2||!Number.isFinite(Number(values['对比阈值'])))){toast('多告警值对比至少需要两个告警值和有效阈值');return false}
 if(!values._alertStart||!values._alertEnd||values._alertStart>=values._alertEnd){toast('请选择有效时间范围，结束时间须晚于开始时间');return false}
 values['告警时间']=values._alertStart+'-'+values._alertEnd;values['状态']=values['配置状态'];values['告警配置名称']=values['配置名称'];values['告警说明']=values['配置说明'];return true;
}

const init=location.hash.slice(1).split('/');if(PAGES.some(p=>p.id===init[0])){state.page=init[0];state.index=Number(init[2])||0}state.openGroups.add(page().group);render();

function downloadDataURL(url,name){const a=document.createElement('a');a.href=url;a.download=name;a.click()}

document.addEventListener('pointerover',e=>{const anchor=e.target.closest('[data-overview-ring]');if(anchor)overviewShowRingTooltip(anchor)});
document.addEventListener('pointerout',e=>{const anchor=e.target.closest('[data-overview-ring]');if(anchor&&!anchor.contains(e.relatedTarget))overviewHideRingTooltip()});
document.addEventListener('focusin',e=>{if(e.target.matches('[data-overview-ring]'))overviewShowRingTooltip(e.target)});
document.addEventListener('focusout',e=>{if(e.target.matches('[data-overview-ring]'))overviewHideRingTooltip()});
window.addEventListener('scroll',overviewHideRingTooltip,true);

function deliveryRouteMapHTML(materialIndex,record){
 const material=reportMaterials(page(),row())[materialIndex],source=material.sourceReport||row(),ctx=materialReverseContext(source);
 const key=page().id+':'+row()._key+':'+source._key,origin='发货仓储 '+ctx.warehouseCode,destination=ctx.storeName;
 const points=[[110,280],[250,280],[250,220],[410,220],[410,140],[600,140],[600,100],[840,100]];
 state.routePlayback||={};
 const model=state.routePlayback[key]||={progress:0,playing:!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,speed:1};
 Object.assign(model,{points,origin,destination,startTime:'2026-09-28 08:00:00',endTime:ctx.receiptTime});
 return `<div class="delivery-route-map" data-route-map="${esc(key)}">
  <div class="route-map-heading"><div><h4>运输轨迹</h4><span class="muted">${esc(record.values.departCode)} · ${esc(record.values.carNumber)}</span></div><span class="route-demo-tag">演示回放</span></div>
  <div class="route-endpoints"><div><span class="route-node start">起</span><div><strong>${esc(origin)}</strong><small>发车时间 ${esc(model.startTime)}</small></div></div><span class="route-direction">→</span><div><span class="route-node end">终</span><div><strong>${esc(destination)}</strong><small>到达时间 ${esc(model.endTime)}</small></div></div></div>
  <div class="route-map-canvas">
   <svg viewBox="0 0 960 380" role="img" aria-label="配送路线示意地图，从${esc(origin)}到${esc(destination)}">
    <rect width="960" height="380" fill="#f1f5f2"/>
    <g fill="#e5eee8" stroke="#dce6df"><rect x="24" y="26" width="174" height="124" rx="12"/><rect x="274" y="30" width="102" height="86" rx="8"/><rect x="442" y="24" width="118" height="86" rx="8"/><rect x="642" y="24" width="114" height="48" rx="8"/><rect x="790" y="144" width="140" height="82" rx="8"/><rect x="24" y="188" width="174" height="52" rx="8"/><rect x="280" y="254" width="92" height="98" rx="8"/><rect x="450" y="250" width="110" height="98" rx="8"/><rect x="26" y="316" width="174" height="42" rx="8"/></g>
    <path d="M490 380C550 300 650 330 680 255S690 190 760 160S870 150 960 176" fill="none" stroke="#d1e6ee" stroke-width="40"/>
    <g fill="none" stroke="#fff" stroke-width="18"><path d="M0 170H960 M0 280H960 M250 0V380 M410 0V380 M600 0V380 M840 0V380 M0 100H960 M0 220H960"/></g>
    <g fill="none" stroke="#dce5df" stroke-width="1"><path d="M0 170H960 M0 280H960 M250 0V380 M410 0V380 M600 0V380 M840 0V380 M0 100H960 M0 220H960"/></g>
    <g fill="#a7b9ab" font-size="13"><text x="88" y="82">仓储园区</text><text x="453" y="70">城市配送</text><text x="790" y="195">门店服务区</text><text x="700" y="330" fill="#87b0bf">水域</text></g>
    <polyline points="${points.map(p=>p.join(',')).join(' ')}" fill="none" stroke="#fff" stroke-width="13" stroke-linejoin="round"/>
    <polyline points="${points.map(p=>p.join(',')).join(' ')}" fill="none" stroke="#99c9ae" stroke-width="6" stroke-linejoin="round" stroke-dasharray="7 5"/>
    <polyline data-route-completed fill="none" stroke="#008042" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    <g transform="translate(110 280)"><circle r="13" fill="#008042" stroke="#fff" stroke-width="3"/><text y="4" text-anchor="middle" font-size="12" fill="#fff">起</text></g>
    <g transform="translate(840 100)"><circle r="13" fill="#e6a23c" stroke="#fff" stroke-width="3"/><text y="4" text-anchor="middle" font-size="12" fill="#fff">终</text></g>
    <g font-size="12" fill="#333"><rect x="44" y="303" width="150" height="30" rx="5" fill="#fff"/><text x="119" y="323" text-anchor="middle">${esc(origin)}</text><rect x="724" y="44" width="204" height="30" rx="5" fill="#fff"/><text x="826" y="64" text-anchor="middle">${esc(destination)}</text></g>
    <g data-route-vehicle transform="translate(110 280)"><circle r="23" fill="#008042" fill-opacity=".12"/><circle r="17" fill="#008042" stroke="#fff" stroke-width="3"/><path d="M-10-7H3V5H-10Z M3-3H7L11 1V5H3 M-7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4 M7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" fill="none" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/></g>
    <g transform="translate(916 306)" fill="#7f9988"><path d="M0-18L-6 2L0-2L6 2Z"/><text y="18" text-anchor="middle" font-size="12">N</text></g>
   </svg>
   <div class="route-map-readout"><span data-route-status>待发车</span><strong data-route-time>08:00:00</strong><span data-route-percent>0%</span></div>
  </div>
  <div class="route-playback-controls">${btn('暂停','route-play','primary')}${btn('重新播放','route-restart','plain')}<label class="route-progress-control"><span class="sr-only">配送进度</span><input type="range" min="0" max="100" step="0.1" value="0" data-route-progress aria-label="配送轨迹回放进度"></label><label class="route-speed-control">速度<select data-route-speed aria-label="配送轨迹回放速度"><option value="1" ${model.speed===1?'selected':''}>1×</option><option value="2" ${model.speed===2?'selected':''}>2×</option><option value="4" ${model.speed===4?'selected':''}>4×</option></select></label></div>
  <p class="route-map-note">示意地图 · 轨迹为演示数据，未接入实时 GPS。</p>
 </div>`;
}
function routePosition(points,progress){
 const lengths=points.slice(1).map((p,i)=>Math.hypot(p[0]-points[i][0],p[1]-points[i][1]));
 let distance=lengths.reduce((a,b)=>a+b,0)*Math.max(0,Math.min(1,progress));const completed=[points[0]];
 for(let i=0;i<lengths.length;i++){
  if(distance<=lengths[i]){const ratio=lengths[i]?distance/lengths[i]:0,point=points[i].map((v,j)=>v+(points[i+1][j]-v)*ratio);return {point,completed:[...completed,point]}}
  distance-=lengths[i];completed.push(points[i+1]);
 }
 return {point:points.at(-1),completed};
}
function paintDeliveryRoute(root,model){
 const {point,completed}=routePosition(model.points,model.progress);
 $('[data-route-vehicle]',root).setAttribute('transform',`translate(${point[0]} ${point[1]})`);
 $('[data-route-completed]',root).setAttribute('points',completed.map(p=>p.join(',')).join(' '));
 const parse=t=>{const [h,m,s]=t.slice(11).split(':').map(Number);return h*3600+m*60+s},seconds=Math.round(parse(model.startTime)+(parse(model.endTime)-parse(model.startTime))*model.progress),time=[Math.floor(seconds/3600),Math.floor(seconds%3600/60),seconds%60].map(n=>String(n).padStart(2,'0')).join(':');
 $('[data-route-time]',root).textContent=time;$('[data-route-percent]',root).textContent=Math.round(model.progress*100)+'%';
 const status=model.progress>=1?'已到达':model.progress===0?'待发车':model.playing?'运输中':'已暂停';
 $('[data-route-status]',root).textContent=status;
 const play=$('[data-act="route-play"]',root);play.textContent=model.playing?'暂停':model.progress>=1?'再次播放':'播放';play.setAttribute('aria-pressed',String(model.playing));
 const range=$('[data-route-progress]',root);range.value=String(model.progress*100);range.setAttribute('aria-valuetext',Math.round(model.progress*100)+'%，'+time+'，'+status);
}
function startDeliveryRouteAnimation(){
 if(state.routeAnimationFrame&&typeof cancelAnimationFrame==='function')cancelAnimationFrame(state.routeAnimationFrame);state.routeAnimationFrame=null;
 const roots=$$('[data-route-map]');roots.forEach(root=>paintDeliveryRoute(root,state.routePlayback[root.dataset.routeMap]));
 if(!roots.some(root=>state.routePlayback[root.dataset.routeMap].playing)||typeof requestAnimationFrame!=='function')return;
 let previous=null;
 const frame=now=>{const delta=previous===null?0:Math.min((now-previous)/1000,.2);previous=now;let playing=false;
  for(const root of roots){if(!root.isConnected)continue;const model=state.routePlayback[root.dataset.routeMap];if(model.playing){const bounds=$('.route-map-canvas',root).getBoundingClientRect();if(bounds.bottom>60&&bounds.top<innerHeight){model.progress=Math.min(1,model.progress+delta*model.speed/24);if(model.progress>=1)model.playing=false;paintDeliveryRoute(root,model)}}playing||=model.playing}
  state.routeAnimationFrame=playing?requestAnimationFrame(frame):null;
 };
 state.routeAnimationFrame=requestAnimationFrame(frame);
}
function controlDeliveryRoute(el,action){
 const root=el.closest('[data-route-map]'),model=state.routePlayback?.[root?.dataset.routeMap];if(!model)return;
 if(action==='route-play'){if(model.progress>=1)model.progress=0;model.playing=!model.playing;}
 if(action==='route-restart'){model.progress=0;model.playing=true;}
 if(action==='seek'){model.progress=Math.max(0,Math.min(1,Number(el.value)/100));model.playing=false;}
 if(action==='speed')model.speed=Number(el.value);
 startDeliveryRouteAnimation();
}

function detailDemoValues(i=0){return {
 '车间':i%2?['调理车间']:['调理车间','熟制车间'],
 '流水线':i%2?['调理一线']:['调理一线','熟制二线'],
 '班组':i%2?['调理一班']:['调理一班','熟制二班'],
 '验收标准编号':'YS-DEMO-'+String(i+1).padStart(4,'0'),'标准版本':'V1.0',
 '感官要求':'色泽、气味正常，无异物；以该原料正式标准为准',
 '包装要求':'包装完整、标识清晰，无破损或渗漏',
 '验收温度要求':'按物料温层及采购验收标准核对',
 '随货资料要求':'随货单、批次信息及对应检验凭证齐全',
 '标准说明':'原型示例字段与内容，非正式验收依据',
 '健康证编号':'JK-DEMO-'+String(i+1).padStart(5,'0'),'健康证持有人':['王敏','李晓','陈宁'][i%3],
 '健康证签发机构':'合肥市示例体检机构（演示）','健康证签发日期':'2026-01-01',
 '健康证有效期至':'2026-12-31','健康证状态':'有效（演示）','健康证图片':'演示凭证'
};}
function multiValueHTML(values){return `<div class="multi-value">${values.map(v=>`<span class="value-chip">${esc(v)}</span>`).join('')}</div>`;}
function openDriverHealth(){const r=row();openOverlay('司机健康证信息',`<p class="note">以下为原型演示信息，真实健康证图片尚未接入。</p>${infoHTML(page().healthFields.filter(f=>f.name!=='健康证图片'),r)}<div class="health-document"><strong>健康证附件占位</strong><p>${esc(r['司机姓名'])} · ${esc(r['健康证编号'])}</p><span>示例 · 非真实证件</span></div>`,btn('返回司机详情','driver-health-back','plain'));}
function registerReportExport(key,payload){state.reportExports||=new Map();state.reportExports.set(key,payload);return key;}
function reportCSVCell(value){let s=(Array.isArray(value)?value.join('；'):String(value??'')).replace(/主表|子表|孙表/g,'').replace(/大仓/g,'仓储');if(/^[\s]*[=+@-]/.test(s)&&!/^[-+]\d+(\.\d+)?$/.test(s))s="'"+s;return '"'+s.replace(/"/g,'""')+'"';}
function reportCSV(payload){return '\uFEFF'+[payload.headers,...payload.rows].map(r=>r.map(reportCSVCell).join(',')).join('\r\n');}
function exportReportTable(key){const payload=state.reportExports?.get(key);if(!payload?.rows.length){toast('暂无可导出的数据');return}const name=(page().name+'-'+payload.name).replace(/主表|子表|孙表/g,'').replace(/大仓/g,'仓储').replace(/[\\/:*?"<>|]/g,'-');download(reportCSV(payload),name+'.csv');toast('已导出 '+payload.rows.length+' 条记录（含所有匹配分页）');}
// Resolve material criteria on the same reverse-report branch, never combine unrelated material/batch matches.
function publicScopeRows(r){return dishReverseReports(r).map(source=>{const c=materialReverseContext(source);return {'原料编码':source['原料编码'],'原料名称':source['原料名称'],'原料批次号':source['原料批次号'],'供应商编码':c.supplierCode,'供应商名称':sample('供应商名称',Math.max(0,records(PAGES.find(p=>p.id==='material-reverse')).indexOf(source)),page()),'门店收货时间':c.receiptTime}});}
function publicScopeMatches(r){const names=['原料编码','原料名称','原料批次号','供应商编码','供应商名称','门店收货时间'],criteria=Object.entries(state.filters).filter(([n,v])=>names.includes(n)&&(typeof v==='object'?v.start||v.end:v));if(!criteria.length)return true;return publicScopeRows(r).some(s=>criteria.every(([n,v])=>typeof v==='object'?(!v.start||s[n].slice(0,10)>=v.start)&&(!v.end||s[n].slice(0,10)<=v.end):n.endsWith('名称')?String(s[n]||'').includes(v):String(s[n]||'')===v));}

// Qualification evidence is moved to the report overview; preserve its original document scope.
function isSupplierQualification(t){return /supplierQualification/i.test(t.id)||/供应商资质/.test(t.name);}
function reportQualificationContext(){
 const p=page(),materials=reportMaterials(p,row()),links=reportLinks(p,true),entries=[];
 for(const link of links)for(const table of link.tables.filter(isSupplierQualification)){
  materials.forEach((material,m)=>{
   const paths=reportInlinePaths(link,table,m);
   paths.forEach(path=>{
    const parent=link.tables.find(t=>t.id===table.parent),receipt=parent?reportRecords(parent,m,path.slice(0,-1))[path.at(-1)]:null;
    reportRecords(table,m,path).forEach(record=>entries.push({...record,values:{...record.values,qualificationSource:link.name,qualificationMaterial:material.name+' · '+material.code,qualificationReceipt:receipt?.values.receiptCode||receipt?.values.purchase_code||'—'}}));
   });
  });
 }
 const original=links.flatMap(l=>l.tables).find(isSupplierQualification);
 const extra=(key,name)=>({key,name,visible:true,attribute:'文本',description:'原报告关联信息'});
 const table={...(original||{}),id:'summary_supplierQualification',name:'供应商资质',parent:null,type:'2-子表',fields:[extra('qualificationSource','来源环节'),extra('qualificationMaterial','关联原料'),extra('qualificationReceipt','关联收货单'),...(original?.fields||[])],_summaryRecords:entries};
 return {table,rows:entries,link:{id:'summary_supplierQualification',name:'供应商资质',tables:[table]}};
}
function reportQualificationHTML(){const ctx=reportQualificationContext();return `<p class="note">当前原料报告关联的供应商资质，保留来源环节、原料与收货单信息。支持筛选、分页和导出。</p>${reportDataTable(ctx.link,ctx.table,0)}`;}
