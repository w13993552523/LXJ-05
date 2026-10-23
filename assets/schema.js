window.PAGES = [
  {
    "id": "forward",
    "group": "溯源报告查询中心",
    "name": "原料溯源报告正向",
    "kind": "report",
    "sourceRange": [
      44,
      74
    ],
    "filters": [
      {
        "name": "溯源报告编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "原料名称",
        "type": "input",
        "default": "/",
        "match": "下拉列表模糊查询"
      },
      {
        "name": "原料编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "原料批次号",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "菜品名称",
        "type": "input",
        "default": "/",
        "match": "下拉列表模糊查询"
      },
      {
        "name": "菜品编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "原料生产日期",
        "type": "时间点",
        "default": "/",
        "match": "/"
      },
      {
        "name": "物料模板编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "供应商模板编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "生产日期时间段",
        "type": "时间段",
        "match": "精准查询"
      },
      {
        "name": "车牌号",
        "type": "input",
        "match": "精准查询"
      },
      {
        "name": "收货任务编码",
        "type": "input",
        "match": "精准查询"
      },
      {
        "name": "仓库编码",
        "type": "input",
        "match": "精准查询"
      },
      {
        "name": "供应商编码",
        "type": "input",
        "match": "精准查询"
      },
      {
        "name": "模板编码",
        "type": "input",
        "match": "精准查询"
      }
    ],
    "columns": [
      {
        "name": "溯源报告编码",
        "description": "",
        "note": ""
      },
      {
        "name": "原料编码",
        "description": "",
        "note": ""
      },
      {
        "name": "原料名称",
        "description": "",
        "note": ""
      },
      {
        "name": "原料收货数量",
        "description": "当前报告关联原料的收货数量，最多保留4位小数",
        "note": "以关联收货记录及其计量单位为准"
      },
      {
        "name": "关联菜品",
        "description": "#菜品名称-#菜品编码",
        "note": "可能多个，逗号隔开"
      },
      {
        "name": "原料批次号",
        "description": "",
        "note": ""
      },
      {
        "name": "原料生产日期",
        "description": "原料生产日期",
        "note": "~"
      },
      {
        "name": "原料供应商",
        "description": "",
        "note": ""
      },
      {
        "name": "物料模板编码",
        "description": "",
        "note": ""
      },
      {
        "name": "模板版本号",
        "description": "",
        "note": ""
      },
      {
        "name": "原料模板编码",
        "description": "",
        "note": ""
      },
      {
        "name": "模板版本号",
        "description": "",
        "note": ""
      },
      {
        "name": "报告生成时间",
        "description": "yyyy-mm-dd hh:mm:ss",
        "note": ""
      },
      {
        "name": "溯源报告",
        "description": "点击查看详情",
        "note": ""
      },
      {
        "name": "菜品模板编码"
      },
      {
        "name": "供应商模板编码"
      },
      {
        "name": "供应商名称"
      },
      {
        "name": "生产日期"
      }
    ],
    "tabs": [
      {
        "name": "大仓入库 · 收货主表",
        "mode": "info",
        "fields": [
          {
            "name": "入库箱记录主键",
            "key": "id",
            "description": "入库箱记录主键，自增 ID",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 3
          },
          {
            "name": "入库单内部 ID",
            "key": "receiptId",
            "description": "入库单内部 ID",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 4
          },
          {
            "name": "入库单明细行号",
            "key": "receiptDetailId",
            "description": "入库单明细行号，是否为明细记录主键需确认",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 5
          },
          {
            "name": "入库单编码",
            "key": "receiptCode",
            "description": "入库单编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 6
          },
          {
            "name": "入库单类型",
            "key": "receiptType",
            "description": "入库单类型，具体枚举未提供",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 7
          },
          {
            "name": "货品描述或名称",
            "key": "itemName",
            "description": "货品描述或名称",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 8
          },
          {
            "name": "仓库编码",
            "key": "warehouseCode",
            "description": "仓库编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 9
          },
          {
            "name": "包装编码",
            "key": "packingCode",
            "description": "包装编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 10
          },
          {
            "name": "关联库存记录 ID",
            "key": "inventoryId",
            "description": "关联库存记录 ID",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 11
          },
          {
            "name": "入库箱状态",
            "key": "status",
            "description": "入库箱状态，具体枚举未提供",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 12
          },
          {
            "name": "批次",
            "key": "batch",
            "description": "批次，与 lot 的业务区别需确认",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 13
          },
          {
            "name": "批号",
            "key": "lot",
            "description": "批号，与 batch 的业务区别需确认",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 14
          },
          {
            "name": "生产日期",
            "key": "manufactureDate",
            "description": "生产日期",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 15
          },
          {
            "name": "失效日期",
            "key": "expirationDate",
            "description": "失效日期",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 16
          },
          {
            "name": "入库日期",
            "key": "agingDate",
            "description": "入库日期",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 17
          },
          {
            "name": "收货时间",
            "key": "checkInAt",
            "description": "收货时间",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 18
          },
          {
            "name": "收货操作用户",
            "key": "checkInBy",
            "description": "收货操作用户",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 19
          },
          {
            "name": "验收方式",
            "key": "acceptanceMethod",
            "description": "验收方式，具体枚举未提供",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 20
          },
          {
            "name": "二次验收状态",
            "key": "twiceAcceptanceStatus",
            "description": "二次验收状态，具体枚举未提供",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 21
          },
          {
            "name": "第二收货用户",
            "key": "secondCheckInBy",
            "description": "第二收货用户，具体是否对应二次验收操作人需确认",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 22
          },
          {
            "name": "第二收货时间",
            "key": "secondCheckInAt",
            "description": "第二收货时间",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 23
          },
          {
            "name": "采购订单号",
            "key": "purchaseOrderNo",
            "description": "本次入库对应的采购订单业务编号；与采购单及后续收货记录关联，源字段映射待确认。",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 24
          }
        ],
        "note": "",
        "reportTableId": "tb_whReceiptRecord"
      },
      {
        "name": "大仓入库 · 质检子表",
        "mode": "table",
        "fields": [
          {
            "name": "质检明细内部 ID",
            "key": "id",
            "description": "质检明细内部 ID，自增主键",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 25
          },
          {
            "name": "所属质检单 ID",
            "key": "iqcId",
            "description": "所属质检单 ID，默认 0",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 26
          },
          {
            "name": "所属质检单号",
            "key": "iqcCode",
            "description": "所属质检单号",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 27
          },
          {
            "name": "关联入库单 ID",
            "key": "receiptId",
            "description": "关联入库单 ID，默认 0",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 28
          },
          {
            "name": "关联入库单号",
            "key": "receiptCode",
            "description": "关联入库单号",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 29
          },
          {
            "name": "货品编码",
            "key": "itemCode",
            "description": "货品编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 30
          },
          {
            "name": "货品名称",
            "key": "itemName",
            "description": "货品名称",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 31
          },
          {
            "name": "货主编码",
            "key": "companyCode",
            "description": "货主编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 32
          },
          {
            "name": "仓库编码",
            "key": "warehouseCode",
            "description": "仓库编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 33
          },
          {
            "name": "包装编码",
            "key": "packingCode",
            "description": "包装编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 34
          },
          {
            "name": "生产商",
            "key": "manufacture",
            "description": "生产商，存储名称还是编码未注明",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 35
          },
          {
            "name": "质检规则编码",
            "key": "qcRuleCode",
            "description": "质检规则编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 36
          },
          {
            "name": "质检方式",
            "key": "iqcMethod",
            "description": "质检方式，具体枚举未提供",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 37
          },
          {
            "name": "二次质检状态",
            "key": "twiceIqcStatus",
            "description": "二次质检状态，具体枚举未提供",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 38
          },
          {
            "name": "质检类型",
            "key": "iqcType",
            "description": "质检类型，具体枚举未提供",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 39
          },
          {
            "name": "合格率",
            "key": "qualifiedRate",
            "description": "合格率，整数存储；是否按百分数及如何取整需确认",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 40
          },
          {
            "name": "质检结果",
            "key": "iqcResult",
            "description": "质检结果，存储编码还是文字未注明",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 41
          },
          {
            "name": "质检处理建议",
            "key": "iqcOpinion",
            "description": "质检处理建议",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 42
          },
          {
            "name": "处理标记",
            "key": "processStamp",
            "description": "处理标记，具体用途及格式未注明",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 43
          },
          {
            "name": "总数量",
            "key": "totalQty",
            "description": "总数量，根据字段名推断；是入库总量还是待检批次总量需确认",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 44
          },
          {
            "name": "质检数量",
            "key": "iqcQty",
            "description": "质检数量，根据字段名推断；是否为计划检验量或抽检量需确认",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 45
          },
          {
            "name": "已检数量",
            "key": "checkedQty",
            "description": "已检数量，根据字段名推断",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 46
          },
          {
            "name": "合格数量",
            "key": "qualifiedQty",
            "description": "合格数量，根据字段名推断",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 47
          },
          {
            "name": "不合格数量",
            "key": "unqualifiedQty",
            "description": "不合格数量，根据字段名推断",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 48
          },
          {
            "name": "计量单位",
            "key": "quantityUm",
            "description": "计量单位，存储编码还是名称未注明",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 49
          },
          {
            "name": "创建时间",
            "key": "created",
            "description": "创建时间，默认当前时间，允许为空",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 50
          },
          {
            "name": "创建用户",
            "key": "createdBy",
            "description": "创建用户",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 51
          },
          {
            "name": "最后更新时间",
            "key": "lastUpdated",
            "description": "最后更新时间，默认当前时间，并配置为记录更新时自动更新时间；允许为空",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 52
          }
        ],
        "note": "",
        "reportTableId": "stb_whInspection"
      },
      {
        "name": "大仓入库 · 批检附件子表",
        "mode": "table",
        "fields": [
          {
            "name": "文件记录内部 ID",
            "key": "id",
            "description": "文件记录内部 ID，自增主键",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 53
          },
          {
            "name": "关联业务表的表名",
            "key": "tableName",
            "description": "关联业务表的表名",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 54
          },
          {
            "name": "对应业务表记录的 ID 或编码",
            "key": "dataIdOrCode",
            "description": "对应业务表记录的 ID 或编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 55
          },
          {
            "name": "供应商编码",
            "key": "shipFromCode",
            "description": "供应商编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 56
          },
          {
            "name": "供应商名称",
            "key": "shipFromName",
            "description": "供应商名称",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 57
          },
          {
            "name": "货品批号",
            "key": "lot",
            "description": "货品批号",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 58
          },
          {
            "name": "货品编码",
            "key": "itemCode",
            "description": "货品编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 59
          },
          {
            "name": "货品名称",
            "key": "itemName",
            "description": "货品名称",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 60
          },
          {
            "name": "数量",
            "key": "quantity",
            "description": "数量，整数类型",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 61
          },
          {
            "name": "计量单位",
            "key": "quantityUM",
            "description": "计量单位，存储编码还是名称未注明",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 62
          },
          {
            "name": "生产日期",
            "key": "manufactureDate",
            "description": "生产日期",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 63
          },
          {
            "name": "入库日期",
            "key": "agingDate",
            "description": "入库日期",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 64
          },
          {
            "name": "状态",
            "key": "status",
            "description": "状态，默认 0，具体枚举未提供",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 65
          },
          {
            "name": "文件或数据的 URL 地址",
            "key": "dataUrl",
            "description": "文件或数据的 URL 地址",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 66
          },
          {
            "name": "文件名称",
            "key": "fileName",
            "description": "文件名称",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 67
          },
          {
            "name": "创建时间",
            "key": "created",
            "description": "创建时间，默认当前时间，允许为空",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 68
          },
          {
            "name": "创建用户",
            "key": "createdBy",
            "description": "创建用户",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 69
          },
          {
            "name": "最后更新时间",
            "key": "lastUpdated",
            "description": "最后更新时间，默认当前时间，并配置为记录更新时自动更新时间；允许为空",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 70
          },
          {
            "name": "最后更新用户",
            "key": "lastUpdatedBy",
            "description": "最后更新用户；DDL 未配置自动填充规则",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 71
          },
          {
            "name": "根据字段名推测为图片 ID",
            "key": "mageId",
            "description": "根据字段名推测为图片 ID，所属系统及用途待确认",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 72
          },
          {
            "name": "根据字段名推测为关联业务主表的 ID 或编码",
            "key": "dataHeaderIdOrCode",
            "description": "根据字段名推测为关联业务主表的 ID 或编码，具体主表及关联方式待确认",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 73
          },
          {
            "name": "图片是否上传",
            "key": "uploadImage",
            "description": "图片是否上传，默认 0，具体取值定义未注明",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 74
          },
          {
            "name": "工厂",
            "key": "factory",
            "description": "工厂，存储编码还是名称未注明",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 75
          },
          {
            "name": "逻辑仓",
            "key": "logicalWarehouse",
            "description": "逻辑仓，存储编码还是名称未注明",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 76
          },
          {
            "name": "采购单号",
            "key": "purchaseOrderCode",
            "description": "采购单号",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 77
          }
        ],
        "note": "",
        "reportTableId": "stb_whInspectionFile"
      },
      {
        "name": "大仓入库 · 供应商资质子表",
        "mode": "table",
        "fields": [
          {
            "name": "租户ID",
            "key": "tenant_id",
            "description": "租户ID",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 78
          },
          {
            "name": "供应商供货能力清单ID",
            "key": "supply_ability_id",
            "description": "供应商供货能力清单ID",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 79
          },
          {
            "name": "物料ID",
            "key": "item_id",
            "description": "物料ID",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 80
          },
          {
            "name": "物料编码",
            "key": "item_code",
            "description": "物料编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 81
          },
          {
            "name": "物料品类ID",
            "key": "item_category_id",
            "description": "物料品类ID",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 82
          },
          {
            "name": "物料品类编码",
            "key": "item_category_code",
            "description": "物料品类编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 83
          },
          {
            "name": "库存组织id",
            "key": "inventory_organization_id",
            "description": "库存组织id，通过逗号分隔组成",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 84
          },
          {
            "name": "采购组织id",
            "key": "purchase_organization_id",
            "description": "采购组织id",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 85
          },
          {
            "name": "是否可供",
            "key": "supply_flag",
            "description": "是否可供:1/是;0/否",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 86
          },
          {
            "name": "可供状态(G",
            "key": "supply_status",
            "description": "可供状态(G:绿色状态，无问题;Y:黄色，有风险会造成项目延迟或出现问题;R：红色，有影响整个项目进程的问题发生，需要马上解决)",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 87
          },
          {
            "name": "PSA评级",
            "key": "psa_evaluation_level",
            "description": "PSA评级",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 88
          },
          {
            "name": "PSA评分",
            "key": "psa_evaluation_score",
            "description": "PSA评分",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 89
          },
          {
            "name": "PSA完成时间",
            "key": "psa_finish_date",
            "description": "PSA完成时间",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 90
          },
          {
            "name": "SPA评级",
            "key": "spa_evaluation_level",
            "description": "SPA评级",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 91
          },
          {
            "name": "SPA评分",
            "key": "spa_evaluation_score",
            "description": "SPA评分",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 92
          },
          {
            "name": "SPA完成时间",
            "key": "spa_finish_date",
            "description": "SPA完成时间",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 93
          },
          {
            "name": "备注",
            "key": "remark",
            "description": "备注",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 94
          },
          {
            "name": "评价信息",
            "key": "evaluate_remark",
            "description": "评价信息",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 95
          },
          {
            "name": "评审附件",
            "key": "attachment_uuid",
            "description": "评审附件",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 96
          },
          {
            "name": "行版本号",
            "key": "object_version_number",
            "description": "行版本号，用来处理锁",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 97
          },
          {
            "name": "创建时间",
            "key": "creation_date",
            "description": "创建时间",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 98
          },
          {
            "name": "创建人",
            "key": "created_by",
            "description": "创建人",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 99
          },
          {
            "name": "最后修改人",
            "key": "last_updated_by",
            "description": "最后修改人",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 100
          },
          {
            "name": "最后修改时间",
            "key": "last_update_date",
            "description": "最后修改时间",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 101
          },
          {
            "name": "适配产品",
            "key": "adapter_products",
            "description": "适配产品",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 102
          },
          {
            "name": "服务国家",
            "key": "country_id",
            "description": "服务国家",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 103
          },
          {
            "name": "服务地区",
            "key": "region_id",
            "description": "服务地区",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 104
          },
          {
            "name": "服务城市",
            "key": "city_id",
            "description": "服务城市",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 105
          },
          {
            "name": "有效期从",
            "key": "date_from",
            "description": "有效期从",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 106
          },
          {
            "name": "有效期至",
            "key": "date_to",
            "description": "有效期至",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 107
          },
          {
            "name": "一次性供货标识",
            "key": "one_time_flag",
            "description": "一次性供货标识",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 108
          },
          {
            "name": "物料标准",
            "key": "item_standard",
            "description": "物料标准",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 109
          },
          {
            "name": "批准文号",
            "key": "approval_number",
            "description": "批准文号",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 110
          },
          {
            "name": "供货能力评审行状态",
            "key": "supply_review_status",
            "description": "供货能力评审行状态，值集：SUPPLY_ABILITY_REVIEW_LINE_STATUS",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 111
          },
          {
            "name": "配额比",
            "key": "quota_ratio",
            "description": "配额比",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 112
          },
          {
            "name": "字符扩展字段1",
            "key": "attribute_varchar1",
            "description": "字符扩展字段1",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 113
          },
          {
            "name": "长字符扩展字段1",
            "key": "attribute_longtext1",
            "description": "长字符扩展字段1",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 114
          },
          {
            "name": "长字符扩展字段2",
            "key": "attribute_longtext2",
            "description": "长字符扩展字段2",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 115
          }
        ],
        "note": "",
        "reportTableId": "stb_supplierQualification"
      },
      {
        "name": "大仓存储 · 大仓存储主表",
        "mode": "info",
        "fields": [
          {
            "name": "工厂 (主键）",
            "key": "factoryCode",
            "description": " 工厂 (主键）",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 3
          },
          {
            "name": "名称",
            "key": "factoryName",
            "description": "名称",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 4
          },
          {
            "name": "库存地点",
            "key": "storageLocationCode",
            "description": " 库存地点",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 5
          },
          {
            "name": "库存地点描述",
            "key": "storageLocationName",
            "description": " 库存地点描述",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 6
          },
          {
            "name": "物料编码",
            "key": "itemCode",
            "description": "物料编码",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 7
          },
          {
            "name": "物料批次号",
            "key": "batchCode",
            "description": "物料批次号",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 8
          }
        ],
        "note": "",
        "reportTableId": "tb_whStorageRecord"
      },
      {
        "name": "大仓存储 · 大仓温度子表",
        "mode": "table",
        "fields": [
          {
            "name": "ID",
            "key": "id",
            "description": "ID",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 9
          },
          {
            "name": "设备编码",
            "key": "deviceCode",
            "description": "设备编码",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 10
          },
          {
            "name": "温度",
            "key": "temperature",
            "description": "温度",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 11
          },
          {
            "name": "采集时间",
            "key": "collectedTime",
            "description": "采集时间",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 12
          }
        ],
        "note": "",
        "reportTableId": "stb_whTemperature"
      },
      {
        "name": "央厨加工 · 生产订单主表",
        "mode": "info",
        "fields": [
          {
            "name": "生产订单号",
            "key": "productionOrderNo",
            "description": "生产订单号",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 3
          },
          {
            "name": "工厂ID",
            "key": "factoryId",
            "description": "工厂ID",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 4
          },
          {
            "name": "工厂名称",
            "key": "factoryName",
            "description": "工厂名称",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 5
          },
          {
            "name": "成品编码",
            "key": "productCode",
            "description": "成品编码",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 6
          },
          {
            "name": "成品名称",
            "key": "productName",
            "description": "成品名称",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 7
          },
          {
            "name": "商品生产日期",
            "key": "productionDate",
            "description": "商品生产日期",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 8
          },
          {
            "name": "成品批次号",
            "key": "productBatchCode",
            "description": "成品批次号",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 9
          },
          {
            "name": "数量",
            "key": "quantity",
            "description": "数量",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 10
          },
          {
            "name": "计量单位",
            "key": "unitName",
            "description": "计量单位",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 11
          },
          {
            "name": "生产开始日期",
            "key": "productionStartDate",
            "description": "生产开始日期",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 12
          },
          {
            "name": "生产开始时间",
            "key": "productionStartTime",
            "description": "生产开始时间",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 13
          },
          {
            "name": "生产结束时间",
            "key": "productionEndTime",
            "description": "生产结束时间",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 14
          },
          {
            "name": "移动类型",
            "key": "movementType",
            "description": "移动类型",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 16
          },
          {
            "name": "车间",
            "key": "workshops",
            "visible": true
          },
          {
            "name": "班组",
            "key": "productionTeams",
            "visible": true,
            "description": "支持多个班组"
          }
        ],
        "note": "",
        "reportTableId": "tb_kitchenProduction"
      },
      {
        "name": "央厨加工 · 原料收货子表",
        "mode": "table",
        "fields": [
          {
            "name": "收货单号",
            "key": "receiptCode",
            "description": "收货单号",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 17
          },
          {
            "name": "工厂名称",
            "key": "factoryName",
            "description": "工厂名称",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 18
          },
          {
            "name": "物料编码",
            "key": "itemCode",
            "description": "物料编码",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 19
          },
          {
            "name": "物料名称",
            "key": "itemName",
            "description": "物料名称",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 20
          },
          {
            "name": "物料批次",
            "key": "batchCode",
            "description": "物料批次",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 21
          },
          {
            "name": "到货数量",
            "key": "arrivalQuantity",
            "description": "到货数量",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 22
          },
          {
            "name": "收货数量",
            "key": "receivedQuantity",
            "description": "收货数量",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 23
          },
          {
            "name": "单位",
            "key": "unitName",
            "description": "单位",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 24
          },
          {
            "name": "供应商",
            "key": "supplierName",
            "description": "供应商",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 25
          },
          {
            "name": "生产商",
            "key": "producerName",
            "description": "生厂商",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 26
          },
          {
            "name": "收货时间",
            "key": "receiptTime",
            "description": "收货时间",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 27
          },
          {
            "name": "创建日期",
            "key": "createdDate",
            "description": "创建日期",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 28
          },
          {
            "name": "最后更新时间",
            "key": "lastUpdated",
            "description": "最后更新时间",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 29
          }
        ],
        "note": "",
        "reportTableId": "stb_rawMaterialReceipt"
      },
      {
        "name": "央厨加工 · 投料明细子表",
        "mode": "table",
        "fields": [
          {
            "name": "物料编码",
            "key": "itemCode",
            "description": "物料编码",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 30
          },
          {
            "name": "物料名称",
            "key": "itemName",
            "description": "物料名称",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 31
          },
          {
            "name": "类型",
            "key": "materialType",
            "description": "类型",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 32
          },
          {
            "name": "计划量",
            "key": "plannedQuantity",
            "description": "计划量",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 33
          },
          {
            "name": "报工量汇总",
            "key": "reportedQuantity",
            "description": "报工量汇总",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 34
          },
          {
            "name": "原料批次",
            "key": "rawMaterialBatchCode",
            "description": "原料批次",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 35
          },
          {
            "name": "报工明细",
            "key": "reportDetails",
            "description": "报工明细",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 36
          },
          {
            "name": "单位",
            "key": "unitName",
            "description": "单位",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 37
          },
          {
            "name": "供应商",
            "key": "supplierName",
            "description": "供应商",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 38
          },
          {
            "name": "生产商",
            "key": "producerName",
            "description": "生产商",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 39
          },
          {
            "name": "工单流水号",
            "key": "workOrderNo",
            "description": "工单流水号",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 40
          },
          {
            "name": "工序",
            "key": "processName",
            "description": "工序",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 41
          },
          {
            "name": "工序报告",
            "key": "processReport",
            "description": "工序报告",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 42
          },
          {
            "name": "更新时间",
            "key": "lastUpdated",
            "description": "更新时间",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 43
          },
          {
            "name": "附件地址",
            "key": "attachmentUrl",
            "description": "附件地址",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 44
          }
        ],
        "note": "",
        "reportTableId": "stb_materialInput"
      },
      {
        "name": "央厨加工 · 检测字段表",
        "mode": "table",
        "fields": [
          {
            "name": "检验申请单号",
            "key": "inspectionRequestNo",
            "description": "检验申请单号",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 45
          },
          {
            "name": "业务类型",
            "key": "businessType",
            "description": "业务类型",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 46
          },
          {
            "name": "检验结论",
            "key": "inspectionConclusion",
            "description": "检验结论",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 47
          },
          {
            "name": "检验时间",
            "key": "inspectionTime",
            "description": "检验时间",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 48
          },
          {
            "name": "序号",
            "key": "sequenceNo",
            "description": "序号",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 50
          },
          {
            "name": "检测项目",
            "key": "inspectionItem",
            "description": "检测项目",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 51
          },
          {
            "name": "检测分项",
            "key": "inspectionSubItem",
            "description": "检测分项",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 52
          },
          {
            "name": "计量单位",
            "key": "unitName",
            "description": "计量单位",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 53
          },
          {
            "name": "报出值",
            "key": "reportedValue",
            "description": "报出值",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 54
          },
          {
            "name": "合格范围",
            "key": "qualifiedRange",
            "description": "合格范围",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 55
          },
          {
            "name": "英文报出值",
            "key": "reportedValueEn",
            "description": "英文报出值",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 56
          },
          {
            "name": "结论",
            "key": "conclusion",
            "description": "结论",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 57
          },
          {
            "name": "附件",
            "key": "attachmentUrl",
            "description": "附件",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 58
          }
        ],
        "note": "",
        "reportTableId": "ftb_productionInspection"
      },
      {
        "name": "央厨加工 · 批检附件表",
        "mode": "table",
        "fields": [
          {
            "name": "文件名",
            "key": "fileName",
            "description": "文件名",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 59
          },
          {
            "name": "更新时间",
            "key": "lastUpdated",
            "description": "更新时间",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 60
          },
          {
            "name": "附件地址",
            "key": "attachmentUrl",
            "description": "附件地址",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 61
          }
        ],
        "note": "",
        "reportTableId": "ftb_productionInspectionFile"
      },
      {
        "name": "大仓出库 · 大仓出库主表",
        "mode": "info",
        "fields": [
          {
            "name": "出库箱明细记录内部 ID",
            "key": "id",
            "description": "出库箱明细记录内部 ID，自增主键；原注释为“出库箱内部号”",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 3
          },
          {
            "name": "出库单号",
            "key": "shipmentCode",
            "description": "出库单号",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 4
          },
          {
            "name": "仓库编码",
            "key": "warehouseCode",
            "description": "仓库编码",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 5
          },
          {
            "name": "出库单内部 ID",
            "key": "shipmentId",
            "description": "出库单内部 ID",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 6
          },
          {
            "name": "出库单内部行号",
            "key": "shipmentDetailId",
            "description": "出库单内部行号，具体是否对应明细主键需确认",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 7
          },
          {
            "name": "货主编码",
            "key": "companyCode",
            "description": "货主编码",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 8
          },
          {
            "name": "货品编码",
            "key": "itemCode",
            "description": "货品编码",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 9
          },
          {
            "name": "货品名称",
            "key": "itemName",
            "description": "货品名称",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 10
          },
          {
            "name": "数量",
            "key": "quantity",
            "description": "数量，根据字段名推断；具体计量单位及业务口径未注明",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 11
          },
          {
            "name": "生产日期",
            "key": "manufactureDate",
            "description": "生产日期",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 12
          },
          {
            "name": "失效日期",
            "key": "expirationDate",
            "description": "失效日期",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 13
          },
          {
            "name": "入库日期",
            "key": "agingDate",
            "description": "入库日期",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 14
          },
          {
            "name": "库存状态",
            "key": "inventorySts",
            "description": "库存状态，具体枚举未提供",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 15
          },
          {
            "name": "创建时间",
            "key": "created",
            "description": "创建时间，默认当前时间",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 16
          },
          {
            "name": "创建用户",
            "key": "createdBy",
            "description": "创建用户",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 17
          },
          {
            "name": "最后更新时间",
            "key": "lastUpdated",
            "description": "最后更新时间，默认当前时间，并配置为记录更新时自动更新时间",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 18
          },
          {
            "name": "最后更新用户",
            "key": "lastUpdatedBy",
            "description": "最后更新用户；DDL 未配置自动填充规则",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 19
          },
          {
            "name": "关联入库单号",
            "key": "receiptCode",
            "description": "关联入库单号",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 20
          },
          {
            "name": "关联入库单内部 ID",
            "key": "receiptId",
            "description": "关联入库单内部 ID",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 21
          },
          {
            "name": "关联入库单明细内部 ID",
            "key": "receiptDetailId",
            "description": "关联入库单明细内部 ID",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 22
          },
          {
            "name": "单位",
            "key": "unitName",
            "description": "单位",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 23
          },
          {
            "name": "批次号",
            "key": "batchCode",
            "description": "批次号",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 25
          },
          {
            "name": "配送单号",
            "key": "deliveryOrderNo",
            "description": "贯穿大仓出库、物流配送和门店收货的配送单业务编号；与出库单号、发车单号分别保留，不设单列唯一索引。",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 26
          }
        ],
        "note": "",
        "reportTableId": "tb_whOutboundRecord"
      },
      {
        "name": "物流配送 · 物流配送主表",
        "mode": "info",
        "fields": [
          {
            "name": "所属运输任务 ID",
            "key": "taskId",
            "description": "所属运输任务 ID",
            "sourceSheet": "物流配送环节",
            "sourceRow": 3
          },
          {
            "name": "关联订单 ID",
            "key": "orderId",
            "description": "关联订单 ID",
            "sourceSheet": "物流配送环节",
            "sourceRow": 4
          },
          {
            "name": "关联订单明细 ID",
            "key": "orderDetailId",
            "description": "关联订单明细 ID",
            "sourceSheet": "物流配送环节",
            "sourceRow": 5
          },
          {
            "name": "商品行号",
            "key": "lineNo",
            "description": "商品行号，字符串类型",
            "sourceSheet": "物流配送环节",
            "sourceRow": 6
          },
          {
            "name": "商品编码",
            "key": "itemCode",
            "description": "商品编码",
            "sourceSheet": "物流配送环节",
            "sourceRow": 7
          },
          {
            "name": "库存状态",
            "key": "inventoryStatus",
            "description": "库存状态，具体枚举未提供",
            "sourceSheet": "物流配送环节",
            "sourceRow": 8
          },
          {
            "name": "计划数量",
            "key": "planQty",
            "description": "计划数量",
            "sourceSheet": "物流配送环节",
            "sourceRow": 9
          },
          {
            "name": "实际数量",
            "key": "actQty",
            "description": "实际数量，具体指装载、发运还是其他环节需确认",
            "sourceSheet": "物流配送环节",
            "sourceRow": 10
          },
          {
            "name": "签收数量",
            "key": "signQty",
            "description": "签收数量",
            "sourceSheet": "物流配送环节",
            "sourceRow": 11
          },
          {
            "name": "揽收数量",
            "key": "collectQty",
            "description": "揽收数量",
            "sourceSheet": "物流配送环节",
            "sourceRow": 12
          },
          {
            "name": "拒收数量",
            "key": "rejectQty",
            "description": "拒收数量",
            "sourceSheet": "物流配送环节",
            "sourceRow": 13
          },
          {
            "name": "剩货数量",
            "key": "leftoverQty",
            "description": "剩货数量，具体业务口径需确认",
            "sourceSheet": "物流配送环节",
            "sourceRow": 14
          },
          {
            "name": "批次号",
            "key": "batchCode",
            "description": "批次号",
            "sourceSheet": "物流配送环节",
            "sourceRow": 15
          },
          {
            "name": "生产批号",
            "key": "produceCode",
            "description": "生产批号",
            "sourceSheet": "物流配送环节",
            "sourceRow": 16
          },
          {
            "name": "生产日期及时间",
            "key": "produceTimestamp",
            "description": "生产日期及时间",
            "sourceSheet": "物流配送环节",
            "sourceRow": 17
          },
          {
            "name": "过期日期及时间",
            "key": "expireTimestamp",
            "description": "过期日期及时间",
            "sourceSheet": "物流配送环节",
            "sourceRow": 18
          },
          {
            "name": "是否温控",
            "key": "temperatureFlag",
            "description": "是否温控，具体取值未提供",
            "sourceSheet": "物流配送环节",
            "sourceRow": 19
          },
          {
            "name": "最低温度",
            "key": "minTemperature",
            "description": "最低温度，温标及是否为要求值需确认",
            "sourceSheet": "物流配送环节",
            "sourceRow": 20
          },
          {
            "name": "最高温度",
            "key": "maxTemperature",
            "description": "最高温度，温标及是否为要求值需确认",
            "sourceSheet": "物流配送环节",
            "sourceRow": 21
          },
          {
            "name": "最低湿度",
            "key": "minHumidity",
            "description": "最低湿度，单位及业务口径未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 22
          },
          {
            "name": "最高湿度",
            "key": "maxHumidity",
            "description": "最高湿度，单位及业务口径未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 23
          },
          {
            "name": "商品名称",
            "key": "itemName",
            "description": "商品名称",
            "sourceSheet": "物流配送环节",
            "sourceRow": 24
          },
          {
            "name": "商品类别",
            "key": "itemClass",
            "description": "商品类别，存储编码还是名称未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 25
          },
          {
            "name": "库存记录 ID",
            "key": "invId",
            "description": "库存记录 ID",
            "sourceSheet": "物流配送环节",
            "sourceRow": 26
          },
          {
            "name": "创建时间",
            "key": "created",
            "description": "创建时间；实际配置了更新时自动更新时间，可能不保留最初创建时间",
            "sourceSheet": "物流配送环节",
            "sourceRow": 27
          },
          {
            "name": "创建用户",
            "key": "createdBy",
            "description": "创建用户",
            "sourceSheet": "物流配送环节",
            "sourceRow": 28
          },
          {
            "name": "最后更新时间",
            "key": "lastUpdated",
            "description": "最后更新时间，默认当前时间，并配置为记录更新时自动更新时间",
            "sourceSheet": "物流配送环节",
            "sourceRow": 29
          },
          {
            "name": "最后更新用户",
            "key": "lastUpdatedBy",
            "description": "最后更新用户，DDL 未配置自动填充规则",
            "sourceSheet": "物流配送环节",
            "sourceRow": 30
          },
          {
            "name": "删除标记",
            "key": "deleteFlag",
            "description": "删除标记：0＝正常，1＝删除；默认 0",
            "sourceSheet": "物流配送环节",
            "sourceRow": 31
          },
          {
            "name": "启用状态",
            "key": "status",
            "description": "启用状态：0＝未启用，1＝启用，2＝禁用；默认 1",
            "sourceSheet": "物流配送环节",
            "sourceRow": 32
          },
          {
            "name": "配送单号",
            "key": "deliveryOrderNo",
            "description": "贯穿大仓出库、物流配送和门店收货的配送单业务编号；与出库单号、发车单号分别保留，不设单列唯一索引。",
            "sourceSheet": "物流配送环节",
            "sourceRow": 33
          }
        ],
        "note": "",
        "reportTableId": "tb_distRecord"
      },
      {
        "name": "物流配送 · 配送温度子表",
        "mode": "table",
        "fields": [
          {
            "name": "发车单号",
            "key": "departCode",
            "description": "发车单号",
            "sourceSheet": "物流配送环节",
            "sourceRow": 34
          },
          {
            "name": "车牌号",
            "key": "carNumber",
            "description": "车牌号",
            "sourceSheet": "物流配送环节",
            "sourceRow": 35
          },
          {
            "name": "承运商",
            "key": "vendorCode",
            "description": "承运商，结合字段名推测为承运商编码",
            "sourceSheet": "物流配送环节",
            "sourceRow": 36
          },
          {
            "name": "线路",
            "key": "lineCode",
            "description": "线路，结合字段名推测为线路编码",
            "sourceSheet": "物流配送环节",
            "sourceRow": 37
          },
          {
            "name": "公司",
            "key": "clientCode",
            "description": "公司，结合字段名推测为公司编码",
            "sourceSheet": "物流配送环节",
            "sourceRow": 38
          },
          {
            "name": "基地",
            "key": "centerCode",
            "description": "基地，结合字段名推测为基地编码",
            "sourceSheet": "物流配送环节",
            "sourceRow": 39
          },
          {
            "name": "司机姓名",
            "key": "driverName",
            "description": "司机姓名",
            "sourceSheet": "物流配送环节",
            "sourceRow": 40
          },
          {
            "name": "司机联系电话",
            "key": "driverMobile",
            "description": "司机联系电话",
            "sourceSheet": "物流配送环节",
            "sourceRow": 41
          },
          {
            "name": "监测设备编号",
            "key": "deviceNo",
            "description": "监测设备编号",
            "sourceSheet": "物流配送环节",
            "sourceRow": 42
          },
          {
            "name": "发车时间",
            "key": "departTime",
            "description": "发车时间",
            "sourceSheet": "物流配送环节",
            "sourceRow": 43
          },
          {
            "name": "温度",
            "key": "temperature",
            "description": "温度，保留 2 位小数；温标未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 44
          },
          {
            "name": "湿度",
            "key": "humidity",
            "description": "湿度，保留 2 位小数；单位未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 45
          },
          {
            "name": "温度报警上限",
            "key": "upperLimit",
            "description": "温度报警上限",
            "sourceSheet": "物流配送环节",
            "sourceRow": 46
          },
          {
            "name": "温度报警下限",
            "key": "lowerLimit",
            "description": "温度报警下限",
            "sourceSheet": "物流配送环节",
            "sourceRow": 47
          },
          {
            "name": "湿度报警上限",
            "key": "hUpperLimit",
            "description": "湿度报警上限",
            "sourceSheet": "物流配送环节",
            "sourceRow": 48
          },
          {
            "name": "启用状态",
            "key": "status",
            "description": "启用状态：0＝未启用，1＝启用，2＝禁用；默认 0",
            "sourceSheet": "物流配送环节",
            "sourceRow": 49
          },
          {
            "name": "记录创建时间",
            "key": "created",
            "description": "记录创建时间，默认当前时间，允许为空",
            "sourceSheet": "物流配送环节",
            "sourceRow": 50
          },
          {
            "name": "湿度报警下限",
            "key": "hLowerLimit",
            "description": "湿度报警下限",
            "sourceSheet": "物流配送环节",
            "sourceRow": 51
          },
          {
            "name": "最后更新时间",
            "key": "lastUpdated",
            "description": "最后更新时间，默认当前时间，并配置为记录更新时自动更新时间；允许为空",
            "sourceSheet": "物流配送环节",
            "sourceRow": 52
          },
          {
            "name": "最后更新用户",
            "key": "lastUpdatedBy",
            "description": "最后更新用户，DDL 未配置自动填充规则",
            "sourceSheet": "物流配送环节",
            "sourceRow": 53
          }
        ],
        "note": "",
        "reportTableId": "stb_deliveryTemperature"
      },
      {
        "name": "物流配送 · 配送线路子表",
        "mode": "table",
        "fields": [
          {
            "name": "所属发车单 ID",
            "key": "departId",
            "description": "所属发车单 ID",
            "sourceSheet": "物流配送环节",
            "sourceRow": 54
          },
          {
            "name": "所属发车单号",
            "key": "departCode",
            "description": "所属发车单号",
            "sourceSheet": "物流配送环节",
            "sourceRow": 55
          },
          {
            "name": "车牌号",
            "key": "carNumber",
            "description": "车牌号",
            "sourceSheet": "物流配送环节",
            "sourceRow": 56
          },
          {
            "name": "配送模式",
            "key": "deliveryOrPick",
            "description": "配送模式，具体枚举未提供",
            "sourceSheet": "物流配送环节",
            "sourceRow": 57
          },
          {
            "name": "原始纬度",
            "key": "lat",
            "description": "原始纬度；原注释“维度”应为“纬度”，原始坐标系未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 58
          },
          {
            "name": "原始经度",
            "key": "lon",
            "description": "原始经度，原始坐标系未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 59
          },
          {
            "name": "百度坐标纬度",
            "key": "bd09_lat",
            "description": "百度坐标纬度，字段名表明使用 BD-09 坐标系",
            "sourceSheet": "物流配送环节",
            "sourceRow": 60
          },
          {
            "name": "百度坐标经度",
            "key": "bd09_lon",
            "description": "百度坐标经度，字段名表明使用 BD-09 坐标系",
            "sourceSheet": "物流配送环节",
            "sourceRow": 61
          },
          {
            "name": "相对于正北方向的夹角",
            "key": "agl",
            "description": "相对于正北方向的夹角；单位、旋转方向及取值范围未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 62
          },
          {
            "name": "GPS 时间",
            "key": "gtm",
            "description": "GPS 时间，用于标识定位点对应的时间",
            "sourceSheet": "物流配送环节",
            "sourceRow": 63
          },
          {
            "name": "创建人",
            "key": "createdBy",
            "description": "创建人，存储账号、ID 还是姓名未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 64
          },
          {
            "name": "最后更新时间",
            "key": "lastUpdated",
            "description": "最后更新时间，默认当前时间，并配置为记录更新时自动更新时间；允许为空",
            "sourceSheet": "物流配送环节",
            "sourceRow": 65
          },
          {
            "name": "最后更新者",
            "key": "lastUpdatedBy",
            "description": "最后更新者，DDL 未配置自动填充规则",
            "sourceSheet": "物流配送环节",
            "sourceRow": 66
          },
          {
            "name": "数据版本号",
            "key": "version",
            "description": "数据版本号，默认 NULL；是否用于并发控制需确认",
            "sourceSheet": "物流配送环节",
            "sourceRow": 67
          },
          {
            "name": "启用状态",
            "key": "status",
            "description": "启用状态：1＝启用，0＝未启用；默认 1",
            "sourceSheet": "物流配送环节",
            "sourceRow": 68
          },
          {
            "name": "地理位置",
            "key": "location",
            "description": "地理位置，长文本类型；存储地址文字还是结构化内容未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 69
          }
        ],
        "note": "",
        "reportTableId": "stb_deliveryRoute"
      },
      {
        "name": "门店收货 · 门店收货主表",
        "mode": "info",
        "fields": [
          {
            "name": "收货单记录唯一标识",
            "key": "guid",
            "description": "收货单记录唯一标识，主键",
            "sourceSheet": "门店收货环节",
            "sourceRow": 3
          },
          {
            "name": "收货单号",
            "key": "purchase_code",
            "description": "收货单号",
            "sourceSheet": "门店收货环节",
            "sourceRow": 4
          },
          {
            "name": "收货日期",
            "key": "purchase_date",
            "description": "收货日期",
            "sourceSheet": "门店收货环节",
            "sourceRow": 5
          },
          {
            "name": "配销编码",
            "key": "dc_code",
            "description": "配销编码",
            "sourceSheet": "门店收货环节",
            "sourceRow": 6
          },
          {
            "name": "供货机构编码",
            "key": "supply_institution_code",
            "description": "供货机构编码",
            "sourceSheet": "门店收货环节",
            "sourceRow": 7
          },
          {
            "name": "送货类型",
            "key": "supply_delivery_type",
            "description": "送货类型：1＝直送，2＝代送",
            "sourceSheet": "门店收货环节",
            "sourceRow": 8
          },
          {
            "name": "门店编码",
            "key": "store_code",
            "description": "门店编码",
            "sourceSheet": "门店收货环节",
            "sourceRow": 9
          },
          {
            "name": "收货单确认状态",
            "key": "confirm_flag",
            "description": "收货单确认状态：1＝待确认，2＝已确认",
            "sourceSheet": "门店收货环节",
            "sourceRow": 10
          },
          {
            "name": "收货单确认人 ID",
            "key": "confirm_user",
            "description": "收货单确认人 ID",
            "sourceSheet": "门店收货环节",
            "sourceRow": 11
          },
          {
            "name": "收货单确认时间",
            "key": "confirm_time",
            "description": "收货单确认时间",
            "sourceSheet": "门店收货环节",
            "sourceRow": 12
          },
          {
            "name": "是否为盘点前收货",
            "key": "check_flag",
            "description": "是否为盘点前收货：1＝是，2＝不是",
            "sourceSheet": "门店收货环节",
            "sourceRow": 13
          },
          {
            "name": "采购订单号",
            "key": "purchase_order_no",
            "description": "采购订单号",
            "sourceSheet": "门店收货环节",
            "sourceRow": 14
          },
          {
            "name": "创建人 ID",
            "key": "create_id",
            "description": "创建人 ID",
            "sourceSheet": "门店收货环节",
            "sourceRow": 15
          },
          {
            "name": "创建时间",
            "key": "create_time",
            "description": "创建时间",
            "sourceSheet": "门店收货环节",
            "sourceRow": 16
          },
          {
            "name": "最后更新人 ID",
            "key": "update_id",
            "description": "最后更新人 ID",
            "sourceSheet": "门店收货环节",
            "sourceRow": 17
          },
          {
            "name": "最后更新时间",
            "key": "update_time",
            "description": "最后更新时间",
            "sourceSheet": "门店收货环节",
            "sourceRow": 18
          },
          {
            "name": "删除标识",
            "key": "del_flag",
            "description": "删除标识：N＝未删除，Y＝已删除",
            "sourceSheet": "门店收货环节",
            "sourceRow": 19
          },
          {
            "name": "发货日期及时间",
            "key": "ship_date",
            "description": "发货日期及时间",
            "sourceSheet": "门店收货环节",
            "sourceRow": 20
          },
          {
            "name": "订单下发渠道",
            "key": "channel",
            "description": "订单下发渠道：1＝SAP，2＝SRM，3＝WMS，4＝TMS",
            "sourceSheet": "门店收货环节",
            "sourceRow": 21
          },
          {
            "name": "TMS 配送方式",
            "key": "tms_delivery_type",
            "description": "TMS 配送方式：ZC＝整车，ZT＝自提，KD＝快递",
            "sourceSheet": "门店收货环节",
            "sourceRow": 22
          },
          {
            "name": "TMS 车辆状态",
            "key": "tms_car_status",
            "description": "TMS 车辆状态：1＝已发车，2＝已抵达",
            "sourceSheet": "门店收货环节",
            "sourceRow": 23
          },
          {
            "name": "TMS 单据评价状态",
            "key": "tms_evalution_status",
            "description": "TMS 单据评价状态：1＝已评价，0＝待评价，-1＝超时未评",
            "sourceSheet": "门店收货环节",
            "sourceRow": 24
          },
          {
            "name": "WMS 同步的订单配送方式",
            "key": "delivery_type",
            "description": "WMS 同步的订单配送方式，具体枚举未提供",
            "sourceSheet": "门店收货环节",
            "sourceRow": 25
          },
          {
            "name": "收货确认渠道",
            "key": "confirm_channel",
            "description": "收货确认渠道：0＝PC 端，1＝钉钉端，2＝定时任务系统自动，3＝APP 手动收货，4＝APP-RFID 扫描自动收货，5＝加盟确认",
            "sourceSheet": "门店收货环节",
            "sourceRow": 26
          },
          {
            "name": "配送单号",
            "key": "delivery_order_no",
            "description": "贯穿大仓出库、物流配送和门店收货的配送单业务编号；与出库单号、发车单号分别保留，不设单列唯一索引。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 27
          }
        ],
        "note": "",
        "reportTableId": "tb_storeRecvRecord"
      },
      {
        "name": "门店收货 · 收货明细子表",
        "mode": "table",
        "fields": [
          {
            "name": "收货明细记录唯一标识",
            "key": "guid",
            "description": "收货明细记录唯一标识，主键",
            "sourceSheet": "门店收货环节",
            "sourceRow": 28
          },
          {
            "name": "所属收货单号",
            "key": "purchase_code",
            "description": "所属收货单号",
            "sourceSheet": "门店收货环节",
            "sourceRow": 29
          },
          {
            "name": "收货门店编码",
            "key": "store_code",
            "description": "收货门店编码",
            "sourceSheet": "门店收货环节",
            "sourceRow": 30
          },
          {
            "name": "货品编码",
            "key": "merchandise_code",
            "description": "货品编码",
            "sourceSheet": "门店收货环节",
            "sourceRow": 31
          },
          {
            "name": "应收数量",
            "key": "receivable_quantity",
            "description": "应收数量，最多保留 4 位小数",
            "sourceSheet": "门店收货环节",
            "sourceRow": 32
          },
          {
            "name": "实收数量",
            "key": "received_quantity",
            "description": "实收数量，最多保留 4 位小数",
            "sourceSheet": "门店收货环节",
            "sourceRow": 33
          },
          {
            "name": "收货差异数量",
            "key": "difference_quantity",
            "description": "收货差异数量，最多保留 4 位小数；计算方向未注明",
            "sourceSheet": "门店收货环节",
            "sourceRow": 34
          },
          {
            "name": "收货计量单位编码",
            "key": "purchase_unit_code",
            "description": "收货计量单位编码",
            "sourceSheet": "门店收货环节",
            "sourceRow": 35
          },
          {
            "name": "生产日期",
            "key": "make_date",
            "description": "生产日期",
            "sourceSheet": "门店收货环节",
            "sourceRow": 36
          },
          {
            "name": "保质期天数",
            "key": "life_days",
            "description": "保质期天数",
            "sourceSheet": "门店收货环节",
            "sourceRow": 37
          },
          {
            "name": "货品批次号",
            "key": "batch_code",
            "description": "货品批次号",
            "sourceSheet": "门店收货环节",
            "sourceRow": 38
          },
          {
            "name": "明细排序号",
            "key": "seq_id",
            "description": "明细排序号",
            "sourceSheet": "门店收货环节",
            "sourceRow": 39
          },
          {
            "name": "对应采购订单行号",
            "key": "purchase_order_seq_id",
            "description": "对应采购订单行号",
            "sourceSheet": "门店收货环节",
            "sourceRow": 40
          },
          {
            "name": "创建人 ID",
            "key": "create_id",
            "description": "创建人 ID",
            "sourceSheet": "门店收货环节",
            "sourceRow": 41
          },
          {
            "name": "创建时间",
            "key": "create_time",
            "description": "创建时间",
            "sourceSheet": "门店收货环节",
            "sourceRow": 42
          },
          {
            "name": "最后更新人 ID",
            "key": "update_id",
            "description": "最后更新人 ID",
            "sourceSheet": "门店收货环节",
            "sourceRow": 43
          },
          {
            "name": "最后更新时间",
            "key": "update_time",
            "description": "最后更新时间",
            "sourceSheet": "门店收货环节",
            "sourceRow": 44
          },
          {
            "name": "删除标识",
            "key": "del_flag",
            "description": "删除标识：N＝未删除，Y＝已删除",
            "sourceSheet": "门店收货环节",
            "sourceRow": 45
          },
          {
            "name": "当前货品行对应的物料采购订单号",
            "key": "purchase_orde_no",
            "description": "当前货品行对应的物料采购订单号；支持一张交货单对应多个采购订单",
            "sourceSheet": "门店收货环节",
            "sourceRow": 46
          },
          {
            "name": "价格单位编码",
            "key": "price_unit_code",
            "description": "价格单位编码",
            "sourceSheet": "门店收货环节",
            "sourceRow": 47
          },
          {
            "name": "供应商编码",
            "key": "supplier",
            "description": "供应商编码",
            "sourceSheet": "门店收货环节",
            "sourceRow": 48
          },
          {
            "name": "供应商名称",
            "key": "supplier_name",
            "description": "供应商名称",
            "sourceSheet": "门店收货环节",
            "sourceRow": 49
          },
          {
            "name": "生产商名称",
            "key": "producerName",
            "description": "生产商名称",
            "sourceSheet": "门店收货环节",
            "sourceRow": 50
          }
        ],
        "note": "",
        "reportTableId": "stb_storeReceiptDetail"
      },
      {
        "name": "门店收货 · 关联退货子表",
        "mode": "table",
        "fields": [
          {
            "name": "退货门店",
            "key": "store_code",
            "description": "退货门店编码，与门店收货主表store_code口径一致；编码映射待确认。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 51
          },
          {
            "name": "所属退货单号",
            "key": "return_code",
            "description": "所属退货单业务编号；一张退货单可包含多条货品明细，不设单列唯一索引。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 52
          },
          {
            "name": "货品编码",
            "key": "merchandise_code",
            "description": "退货货品编码，与收货明细merchandise_code口径一致。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 53
          },
          {
            "name": "发货仓编码",
            "key": "warehouse_code",
            "description": "原配送发货仓编码；是否指原发货仓或退货接收仓需确认。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 54
          },
          {
            "name": "发货仓名称",
            "key": "warehouse_name",
            "description": "发货仓名称，与发货仓编码对应。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 55
          },
          {
            "name": "实际退货数量（最多保留 4 位小数）",
            "key": "returned_quantity",
            "description": "实际退货数量，最多保留4位小数；单位与退货计量字段一致。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 56
          },
          {
            "name": "退货计量",
            "key": "return_unit_code",
            "description": "建议存储退货计量单位编码，单位字典及换算规则待确认。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 57
          },
          {
            "name": "货品生产日期",
            "key": "make_date",
            "description": "退货货品生产日期，与收货明细make_date对应。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 58
          },
          {
            "name": "关联的收货单号",
            "key": "purchase_code",
            "description": "关联门店收货主表purchase_code；建议结合store_code定位收货单，结合货品编码及批次定位明细，唯一粒度待确认。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 59
          },
          {
            "name": "货品批次号",
            "key": "batch_code",
            "description": "退货货品批次号，与收货明细batch_code对应。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 60
          },
          {
            "name": "退货原因（描述）",
            "key": "return_reason",
            "description": "退货原因文字描述。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 61
          },
          {
            "name": "门店备注",
            "key": "store_remark",
            "description": "门店填写的退货补充说明。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 62
          },
          {
            "name": "创建时间",
            "key": "create_time",
            "description": "退货记录创建时间，建议精确到秒，以源系统时间为准。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 63
          },
          {
            "name": "供应商",
            "key": "supplier",
            "description": "建议存储供应商编码，与收货明细supplier口径一致；编码或名称口径待确认。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 64
          }
        ],
        "note": "",
        "reportTableId": "stb_storeReturnDetail"
      }
    ],
    "actions": [
      {
        "name": "溯源报告",
        "description": "新打开详情页面",
        "note": "/"
      }
    ],
    "form": [],
    "rules": [],
    "description": "\"原料溯源报告查询\"功能旨在支持对仓储收货的原料生成溯源报告，并基于后续的业务动作将此批次原料关联的业务数据与在此报告进行汇总，直观查看原料到菜品的全过程。",
    "uiActions": [
      "查看"
    ],
    "detailMode": "page",
    "reportSchemaVersion": "chain-20261013-be58622782e2",
    "traceDirection": "forward",
    "traceScope": "material"
  },
  {
    "id": "material-reverse",
    "group": "溯源报告查询中心",
    "name": "原料溯源报告逆向",
    "kind": "report",
    "sourceRange": null,
    "filters": [
      {
        "name": "溯源报告编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "原料名称",
        "type": "input",
        "default": "/",
        "match": "下拉列表模糊查询"
      },
      {
        "name": "原料编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "原料批次号",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "菜品名称",
        "type": "input",
        "default": "/",
        "match": "下拉列表模糊查询"
      },
      {
        "name": "菜品编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "原料生产日期",
        "type": "时间点",
        "default": "/",
        "match": "/"
      },
      {
        "name": "物料模板编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "供应商模板编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "生产日期时间段",
        "type": "时间段",
        "match": "精准查询"
      },
      {
        "name": "车牌号",
        "type": "input",
        "match": "精准查询"
      },
      {
        "name": "收货任务编码",
        "type": "input",
        "match": "精准查询"
      },
      {
        "name": "仓库编码",
        "type": "input",
        "match": "精准查询"
      },
      {
        "name": "供应商编码",
        "type": "input",
        "match": "精准查询"
      },
      {
        "name": "模板编码",
        "type": "input",
        "match": "精准查询"
      }
    ],
    "columns": [
      {
        "name": "溯源报告编码",
        "description": "",
        "note": ""
      },
      {
        "name": "原料编码",
        "description": "",
        "note": ""
      },
      {
        "name": "原料名称",
        "description": "",
        "note": ""
      },
      {
        "name": "原料收货数量",
        "description": "当前报告关联原料的收货数量，最多保留4位小数",
        "note": "以关联收货记录及其计量单位为准"
      },
      {
        "name": "关联菜品",
        "description": "#菜品名称-#菜品编码",
        "note": "可能多个，逗号隔开"
      },
      {
        "name": "原料批次号",
        "description": "",
        "note": ""
      },
      {
        "name": "原料生产日期",
        "description": "原料生产日期",
        "note": "~"
      },
      {
        "name": "原料供应商",
        "description": "",
        "note": ""
      },
      {
        "name": "物料模板编码",
        "description": "",
        "note": ""
      },
      {
        "name": "模板版本号",
        "description": "",
        "note": ""
      },
      {
        "name": "原料模板编码",
        "description": "",
        "note": ""
      },
      {
        "name": "模板版本号",
        "description": "",
        "note": ""
      },
      {
        "name": "报告生成时间",
        "description": "yyyy-mm-dd hh:mm:ss",
        "note": ""
      },
      {
        "name": "溯源报告",
        "description": "点击查看详情",
        "note": ""
      },
      {
        "name": "菜品模板编码"
      },
      {
        "name": "供应商模板编码"
      },
      {
        "name": "供应商名称"
      },
      {
        "name": "生产日期"
      }
    ],
    "tabs": [
      {
        "name": "大仓入库 · 收货主表",
        "mode": "info",
        "fields": [
          {
            "name": "入库箱记录主键",
            "key": "id",
            "description": "入库箱记录主键，自增 ID",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 3
          },
          {
            "name": "入库单内部 ID",
            "key": "receiptId",
            "description": "入库单内部 ID",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 4
          },
          {
            "name": "入库单明细行号",
            "key": "receiptDetailId",
            "description": "入库单明细行号，是否为明细记录主键需确认",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 5
          },
          {
            "name": "入库单编码",
            "key": "receiptCode",
            "description": "入库单编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 6
          },
          {
            "name": "入库单类型",
            "key": "receiptType",
            "description": "入库单类型，具体枚举未提供",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 7
          },
          {
            "name": "货品描述或名称",
            "key": "itemName",
            "description": "货品描述或名称",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 8
          },
          {
            "name": "仓库编码",
            "key": "warehouseCode",
            "description": "仓库编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 9
          },
          {
            "name": "包装编码",
            "key": "packingCode",
            "description": "包装编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 10
          },
          {
            "name": "关联库存记录 ID",
            "key": "inventoryId",
            "description": "关联库存记录 ID",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 11
          },
          {
            "name": "入库箱状态",
            "key": "status",
            "description": "入库箱状态，具体枚举未提供",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 12
          },
          {
            "name": "批次",
            "key": "batch",
            "description": "批次，与 lot 的业务区别需确认",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 13
          },
          {
            "name": "批号",
            "key": "lot",
            "description": "批号，与 batch 的业务区别需确认",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 14
          },
          {
            "name": "生产日期",
            "key": "manufactureDate",
            "description": "生产日期",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 15
          },
          {
            "name": "失效日期",
            "key": "expirationDate",
            "description": "失效日期",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 16
          },
          {
            "name": "入库日期",
            "key": "agingDate",
            "description": "入库日期",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 17
          },
          {
            "name": "收货时间",
            "key": "checkInAt",
            "description": "收货时间",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 18
          },
          {
            "name": "收货操作用户",
            "key": "checkInBy",
            "description": "收货操作用户",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 19
          },
          {
            "name": "验收方式",
            "key": "acceptanceMethod",
            "description": "验收方式，具体枚举未提供",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 20
          },
          {
            "name": "二次验收状态",
            "key": "twiceAcceptanceStatus",
            "description": "二次验收状态，具体枚举未提供",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 21
          },
          {
            "name": "第二收货用户",
            "key": "secondCheckInBy",
            "description": "第二收货用户，具体是否对应二次验收操作人需确认",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 22
          },
          {
            "name": "第二收货时间",
            "key": "secondCheckInAt",
            "description": "第二收货时间",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 23
          },
          {
            "name": "采购订单号",
            "key": "purchaseOrderNo",
            "description": "本次入库对应的采购订单业务编号；与采购单及后续收货记录关联，源字段映射待确认。",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 24
          }
        ],
        "note": "",
        "reportTableId": "tb_whReceiptRecord"
      },
      {
        "name": "大仓入库 · 质检子表",
        "mode": "table",
        "fields": [
          {
            "name": "质检明细内部 ID",
            "key": "id",
            "description": "质检明细内部 ID，自增主键",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 25
          },
          {
            "name": "所属质检单 ID",
            "key": "iqcId",
            "description": "所属质检单 ID，默认 0",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 26
          },
          {
            "name": "所属质检单号",
            "key": "iqcCode",
            "description": "所属质检单号",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 27
          },
          {
            "name": "关联入库单 ID",
            "key": "receiptId",
            "description": "关联入库单 ID，默认 0",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 28
          },
          {
            "name": "关联入库单号",
            "key": "receiptCode",
            "description": "关联入库单号",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 29
          },
          {
            "name": "货品编码",
            "key": "itemCode",
            "description": "货品编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 30
          },
          {
            "name": "货品名称",
            "key": "itemName",
            "description": "货品名称",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 31
          },
          {
            "name": "货主编码",
            "key": "companyCode",
            "description": "货主编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 32
          },
          {
            "name": "仓库编码",
            "key": "warehouseCode",
            "description": "仓库编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 33
          },
          {
            "name": "包装编码",
            "key": "packingCode",
            "description": "包装编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 34
          },
          {
            "name": "生产商",
            "key": "manufacture",
            "description": "生产商，存储名称还是编码未注明",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 35
          },
          {
            "name": "质检规则编码",
            "key": "qcRuleCode",
            "description": "质检规则编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 36
          },
          {
            "name": "质检方式",
            "key": "iqcMethod",
            "description": "质检方式，具体枚举未提供",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 37
          },
          {
            "name": "二次质检状态",
            "key": "twiceIqcStatus",
            "description": "二次质检状态，具体枚举未提供",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 38
          },
          {
            "name": "质检类型",
            "key": "iqcType",
            "description": "质检类型，具体枚举未提供",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 39
          },
          {
            "name": "合格率",
            "key": "qualifiedRate",
            "description": "合格率，整数存储；是否按百分数及如何取整需确认",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 40
          },
          {
            "name": "质检结果",
            "key": "iqcResult",
            "description": "质检结果，存储编码还是文字未注明",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 41
          },
          {
            "name": "质检处理建议",
            "key": "iqcOpinion",
            "description": "质检处理建议",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 42
          },
          {
            "name": "处理标记",
            "key": "processStamp",
            "description": "处理标记，具体用途及格式未注明",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 43
          },
          {
            "name": "总数量",
            "key": "totalQty",
            "description": "总数量，根据字段名推断；是入库总量还是待检批次总量需确认",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 44
          },
          {
            "name": "质检数量",
            "key": "iqcQty",
            "description": "质检数量，根据字段名推断；是否为计划检验量或抽检量需确认",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 45
          },
          {
            "name": "已检数量",
            "key": "checkedQty",
            "description": "已检数量，根据字段名推断",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 46
          },
          {
            "name": "合格数量",
            "key": "qualifiedQty",
            "description": "合格数量，根据字段名推断",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 47
          },
          {
            "name": "不合格数量",
            "key": "unqualifiedQty",
            "description": "不合格数量，根据字段名推断",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 48
          },
          {
            "name": "计量单位",
            "key": "quantityUm",
            "description": "计量单位，存储编码还是名称未注明",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 49
          },
          {
            "name": "创建时间",
            "key": "created",
            "description": "创建时间，默认当前时间，允许为空",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 50
          },
          {
            "name": "创建用户",
            "key": "createdBy",
            "description": "创建用户",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 51
          },
          {
            "name": "最后更新时间",
            "key": "lastUpdated",
            "description": "最后更新时间，默认当前时间，并配置为记录更新时自动更新时间；允许为空",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 52
          }
        ],
        "note": "",
        "reportTableId": "stb_whInspection"
      },
      {
        "name": "大仓入库 · 批检附件子表",
        "mode": "table",
        "fields": [
          {
            "name": "文件记录内部 ID",
            "key": "id",
            "description": "文件记录内部 ID，自增主键",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 53
          },
          {
            "name": "关联业务表的表名",
            "key": "tableName",
            "description": "关联业务表的表名",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 54
          },
          {
            "name": "对应业务表记录的 ID 或编码",
            "key": "dataIdOrCode",
            "description": "对应业务表记录的 ID 或编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 55
          },
          {
            "name": "供应商编码",
            "key": "shipFromCode",
            "description": "供应商编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 56
          },
          {
            "name": "供应商名称",
            "key": "shipFromName",
            "description": "供应商名称",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 57
          },
          {
            "name": "货品批号",
            "key": "lot",
            "description": "货品批号",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 58
          },
          {
            "name": "货品编码",
            "key": "itemCode",
            "description": "货品编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 59
          },
          {
            "name": "货品名称",
            "key": "itemName",
            "description": "货品名称",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 60
          },
          {
            "name": "数量",
            "key": "quantity",
            "description": "数量，整数类型",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 61
          },
          {
            "name": "计量单位",
            "key": "quantityUM",
            "description": "计量单位，存储编码还是名称未注明",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 62
          },
          {
            "name": "生产日期",
            "key": "manufactureDate",
            "description": "生产日期",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 63
          },
          {
            "name": "入库日期",
            "key": "agingDate",
            "description": "入库日期",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 64
          },
          {
            "name": "状态",
            "key": "status",
            "description": "状态，默认 0，具体枚举未提供",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 65
          },
          {
            "name": "文件或数据的 URL 地址",
            "key": "dataUrl",
            "description": "文件或数据的 URL 地址",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 66
          },
          {
            "name": "文件名称",
            "key": "fileName",
            "description": "文件名称",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 67
          },
          {
            "name": "创建时间",
            "key": "created",
            "description": "创建时间，默认当前时间，允许为空",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 68
          },
          {
            "name": "创建用户",
            "key": "createdBy",
            "description": "创建用户",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 69
          },
          {
            "name": "最后更新时间",
            "key": "lastUpdated",
            "description": "最后更新时间，默认当前时间，并配置为记录更新时自动更新时间；允许为空",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 70
          },
          {
            "name": "最后更新用户",
            "key": "lastUpdatedBy",
            "description": "最后更新用户；DDL 未配置自动填充规则",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 71
          },
          {
            "name": "根据字段名推测为图片 ID",
            "key": "mageId",
            "description": "根据字段名推测为图片 ID，所属系统及用途待确认",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 72
          },
          {
            "name": "根据字段名推测为关联业务主表的 ID 或编码",
            "key": "dataHeaderIdOrCode",
            "description": "根据字段名推测为关联业务主表的 ID 或编码，具体主表及关联方式待确认",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 73
          },
          {
            "name": "图片是否上传",
            "key": "uploadImage",
            "description": "图片是否上传，默认 0，具体取值定义未注明",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 74
          },
          {
            "name": "工厂",
            "key": "factory",
            "description": "工厂，存储编码还是名称未注明",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 75
          },
          {
            "name": "逻辑仓",
            "key": "logicalWarehouse",
            "description": "逻辑仓，存储编码还是名称未注明",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 76
          },
          {
            "name": "采购单号",
            "key": "purchaseOrderCode",
            "description": "采购单号",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 77
          }
        ],
        "note": "",
        "reportTableId": "stb_whInspectionFile"
      },
      {
        "name": "大仓入库 · 供应商资质子表",
        "mode": "table",
        "fields": [
          {
            "name": "租户ID",
            "key": "tenant_id",
            "description": "租户ID",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 78
          },
          {
            "name": "供应商供货能力清单ID",
            "key": "supply_ability_id",
            "description": "供应商供货能力清单ID",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 79
          },
          {
            "name": "物料ID",
            "key": "item_id",
            "description": "物料ID",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 80
          },
          {
            "name": "物料编码",
            "key": "item_code",
            "description": "物料编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 81
          },
          {
            "name": "物料品类ID",
            "key": "item_category_id",
            "description": "物料品类ID",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 82
          },
          {
            "name": "物料品类编码",
            "key": "item_category_code",
            "description": "物料品类编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 83
          },
          {
            "name": "库存组织id",
            "key": "inventory_organization_id",
            "description": "库存组织id，通过逗号分隔组成",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 84
          },
          {
            "name": "采购组织id",
            "key": "purchase_organization_id",
            "description": "采购组织id",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 85
          },
          {
            "name": "是否可供",
            "key": "supply_flag",
            "description": "是否可供:1/是;0/否",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 86
          },
          {
            "name": "可供状态(G",
            "key": "supply_status",
            "description": "可供状态(G:绿色状态，无问题;Y:黄色，有风险会造成项目延迟或出现问题;R：红色，有影响整个项目进程的问题发生，需要马上解决)",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 87
          },
          {
            "name": "PSA评级",
            "key": "psa_evaluation_level",
            "description": "PSA评级",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 88
          },
          {
            "name": "PSA评分",
            "key": "psa_evaluation_score",
            "description": "PSA评分",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 89
          },
          {
            "name": "PSA完成时间",
            "key": "psa_finish_date",
            "description": "PSA完成时间",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 90
          },
          {
            "name": "SPA评级",
            "key": "spa_evaluation_level",
            "description": "SPA评级",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 91
          },
          {
            "name": "SPA评分",
            "key": "spa_evaluation_score",
            "description": "SPA评分",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 92
          },
          {
            "name": "SPA完成时间",
            "key": "spa_finish_date",
            "description": "SPA完成时间",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 93
          },
          {
            "name": "备注",
            "key": "remark",
            "description": "备注",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 94
          },
          {
            "name": "评价信息",
            "key": "evaluate_remark",
            "description": "评价信息",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 95
          },
          {
            "name": "评审附件",
            "key": "attachment_uuid",
            "description": "评审附件",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 96
          },
          {
            "name": "行版本号",
            "key": "object_version_number",
            "description": "行版本号，用来处理锁",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 97
          },
          {
            "name": "创建时间",
            "key": "creation_date",
            "description": "创建时间",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 98
          },
          {
            "name": "创建人",
            "key": "created_by",
            "description": "创建人",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 99
          },
          {
            "name": "最后修改人",
            "key": "last_updated_by",
            "description": "最后修改人",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 100
          },
          {
            "name": "最后修改时间",
            "key": "last_update_date",
            "description": "最后修改时间",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 101
          },
          {
            "name": "适配产品",
            "key": "adapter_products",
            "description": "适配产品",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 102
          },
          {
            "name": "服务国家",
            "key": "country_id",
            "description": "服务国家",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 103
          },
          {
            "name": "服务地区",
            "key": "region_id",
            "description": "服务地区",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 104
          },
          {
            "name": "服务城市",
            "key": "city_id",
            "description": "服务城市",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 105
          },
          {
            "name": "有效期从",
            "key": "date_from",
            "description": "有效期从",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 106
          },
          {
            "name": "有效期至",
            "key": "date_to",
            "description": "有效期至",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 107
          },
          {
            "name": "一次性供货标识",
            "key": "one_time_flag",
            "description": "一次性供货标识",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 108
          },
          {
            "name": "物料标准",
            "key": "item_standard",
            "description": "物料标准",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 109
          },
          {
            "name": "批准文号",
            "key": "approval_number",
            "description": "批准文号",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 110
          },
          {
            "name": "供货能力评审行状态",
            "key": "supply_review_status",
            "description": "供货能力评审行状态，值集：SUPPLY_ABILITY_REVIEW_LINE_STATUS",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 111
          },
          {
            "name": "配额比",
            "key": "quota_ratio",
            "description": "配额比",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 112
          },
          {
            "name": "字符扩展字段1",
            "key": "attribute_varchar1",
            "description": "字符扩展字段1",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 113
          },
          {
            "name": "长字符扩展字段1",
            "key": "attribute_longtext1",
            "description": "长字符扩展字段1",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 114
          },
          {
            "name": "长字符扩展字段2",
            "key": "attribute_longtext2",
            "description": "长字符扩展字段2",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 115
          }
        ],
        "note": "",
        "reportTableId": "stb_supplierQualification"
      },
      {
        "name": "大仓存储 · 大仓存储主表",
        "mode": "info",
        "fields": [
          {
            "name": "工厂 (主键）",
            "key": "factoryCode",
            "description": " 工厂 (主键）",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 3
          },
          {
            "name": "名称",
            "key": "factoryName",
            "description": "名称",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 4
          },
          {
            "name": "库存地点",
            "key": "storageLocationCode",
            "description": " 库存地点",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 5
          },
          {
            "name": "库存地点描述",
            "key": "storageLocationName",
            "description": " 库存地点描述",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 6
          },
          {
            "name": "物料编码",
            "key": "itemCode",
            "description": "物料编码",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 7
          },
          {
            "name": "物料批次号",
            "key": "batchCode",
            "description": "物料批次号",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 8
          }
        ],
        "note": "",
        "reportTableId": "tb_whStorageRecord"
      },
      {
        "name": "大仓存储 · 大仓温度子表",
        "mode": "table",
        "fields": [
          {
            "name": "ID",
            "key": "id",
            "description": "ID",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 9
          },
          {
            "name": "设备编码",
            "key": "deviceCode",
            "description": "设备编码",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 10
          },
          {
            "name": "温度",
            "key": "temperature",
            "description": "温度",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 11
          },
          {
            "name": "采集时间",
            "key": "collectedTime",
            "description": "采集时间",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 12
          }
        ],
        "note": "",
        "reportTableId": "stb_whTemperature"
      },
      {
        "name": "央厨加工 · 生产订单主表",
        "mode": "info",
        "fields": [
          {
            "name": "生产订单号",
            "key": "productionOrderNo",
            "description": "生产订单号",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 3
          },
          {
            "name": "工厂ID",
            "key": "factoryId",
            "description": "工厂ID",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 4
          },
          {
            "name": "工厂名称",
            "key": "factoryName",
            "description": "工厂名称",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 5
          },
          {
            "name": "成品编码",
            "key": "productCode",
            "description": "成品编码",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 6
          },
          {
            "name": "成品名称",
            "key": "productName",
            "description": "成品名称",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 7
          },
          {
            "name": "商品生产日期",
            "key": "productionDate",
            "description": "商品生产日期",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 8
          },
          {
            "name": "成品批次号",
            "key": "productBatchCode",
            "description": "成品批次号",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 9
          },
          {
            "name": "数量",
            "key": "quantity",
            "description": "数量",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 10
          },
          {
            "name": "计量单位",
            "key": "unitName",
            "description": "计量单位",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 11
          },
          {
            "name": "生产开始日期",
            "key": "productionStartDate",
            "description": "生产开始日期",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 12
          },
          {
            "name": "生产开始时间",
            "key": "productionStartTime",
            "description": "生产开始时间",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 13
          },
          {
            "name": "生产结束时间",
            "key": "productionEndTime",
            "description": "生产结束时间",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 14
          },
          {
            "name": "移动类型",
            "key": "movementType",
            "description": "移动类型",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 16
          },
          {
            "name": "车间",
            "key": "workshops",
            "visible": true
          },
          {
            "name": "班组",
            "key": "productionTeams",
            "visible": true,
            "description": "支持多个班组"
          }
        ],
        "note": "",
        "reportTableId": "tb_kitchenProduction"
      },
      {
        "name": "央厨加工 · 原料收货子表",
        "mode": "table",
        "fields": [
          {
            "name": "收货单号",
            "key": "receiptCode",
            "description": "收货单号",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 17
          },
          {
            "name": "工厂名称",
            "key": "factoryName",
            "description": "工厂名称",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 18
          },
          {
            "name": "物料编码",
            "key": "itemCode",
            "description": "物料编码",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 19
          },
          {
            "name": "物料名称",
            "key": "itemName",
            "description": "物料名称",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 20
          },
          {
            "name": "物料批次",
            "key": "batchCode",
            "description": "物料批次",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 21
          },
          {
            "name": "到货数量",
            "key": "arrivalQuantity",
            "description": "到货数量",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 22
          },
          {
            "name": "收货数量",
            "key": "receivedQuantity",
            "description": "收货数量",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 23
          },
          {
            "name": "单位",
            "key": "unitName",
            "description": "单位",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 24
          },
          {
            "name": "供应商",
            "key": "supplierName",
            "description": "供应商",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 25
          },
          {
            "name": "生产商",
            "key": "producerName",
            "description": "生厂商",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 26
          },
          {
            "name": "收货时间",
            "key": "receiptTime",
            "description": "收货时间",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 27
          },
          {
            "name": "创建日期",
            "key": "createdDate",
            "description": "创建日期",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 28
          },
          {
            "name": "最后更新时间",
            "key": "lastUpdated",
            "description": "最后更新时间",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 29
          }
        ],
        "note": "",
        "reportTableId": "stb_rawMaterialReceipt"
      },
      {
        "name": "央厨加工 · 投料明细子表",
        "mode": "table",
        "fields": [
          {
            "name": "物料编码",
            "key": "itemCode",
            "description": "物料编码",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 30
          },
          {
            "name": "物料名称",
            "key": "itemName",
            "description": "物料名称",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 31
          },
          {
            "name": "类型",
            "key": "materialType",
            "description": "类型",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 32
          },
          {
            "name": "计划量",
            "key": "plannedQuantity",
            "description": "计划量",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 33
          },
          {
            "name": "报工量汇总",
            "key": "reportedQuantity",
            "description": "报工量汇总",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 34
          },
          {
            "name": "原料批次",
            "key": "rawMaterialBatchCode",
            "description": "原料批次",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 35
          },
          {
            "name": "报工明细",
            "key": "reportDetails",
            "description": "报工明细",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 36
          },
          {
            "name": "单位",
            "key": "unitName",
            "description": "单位",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 37
          },
          {
            "name": "供应商",
            "key": "supplierName",
            "description": "供应商",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 38
          },
          {
            "name": "生产商",
            "key": "producerName",
            "description": "生产商",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 39
          },
          {
            "name": "工单流水号",
            "key": "workOrderNo",
            "description": "工单流水号",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 40
          },
          {
            "name": "工序",
            "key": "processName",
            "description": "工序",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 41
          },
          {
            "name": "工序报告",
            "key": "processReport",
            "description": "工序报告",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 42
          },
          {
            "name": "更新时间",
            "key": "lastUpdated",
            "description": "更新时间",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 43
          },
          {
            "name": "附件地址",
            "key": "attachmentUrl",
            "description": "附件地址",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 44
          }
        ],
        "note": "",
        "reportTableId": "stb_materialInput"
      },
      {
        "name": "央厨加工 · 检测字段表",
        "mode": "table",
        "fields": [
          {
            "name": "检验申请单号",
            "key": "inspectionRequestNo",
            "description": "检验申请单号",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 45
          },
          {
            "name": "业务类型",
            "key": "businessType",
            "description": "业务类型",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 46
          },
          {
            "name": "检验结论",
            "key": "inspectionConclusion",
            "description": "检验结论",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 47
          },
          {
            "name": "检验时间",
            "key": "inspectionTime",
            "description": "检验时间",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 48
          },
          {
            "name": "序号",
            "key": "sequenceNo",
            "description": "序号",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 50
          },
          {
            "name": "检测项目",
            "key": "inspectionItem",
            "description": "检测项目",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 51
          },
          {
            "name": "检测分项",
            "key": "inspectionSubItem",
            "description": "检测分项",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 52
          },
          {
            "name": "计量单位",
            "key": "unitName",
            "description": "计量单位",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 53
          },
          {
            "name": "报出值",
            "key": "reportedValue",
            "description": "报出值",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 54
          },
          {
            "name": "合格范围",
            "key": "qualifiedRange",
            "description": "合格范围",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 55
          },
          {
            "name": "英文报出值",
            "key": "reportedValueEn",
            "description": "英文报出值",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 56
          },
          {
            "name": "结论",
            "key": "conclusion",
            "description": "结论",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 57
          },
          {
            "name": "附件",
            "key": "attachmentUrl",
            "description": "附件",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 58
          }
        ],
        "note": "",
        "reportTableId": "ftb_productionInspection"
      },
      {
        "name": "央厨加工 · 批检附件表",
        "mode": "table",
        "fields": [
          {
            "name": "文件名",
            "key": "fileName",
            "description": "文件名",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 59
          },
          {
            "name": "更新时间",
            "key": "lastUpdated",
            "description": "更新时间",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 60
          },
          {
            "name": "附件地址",
            "key": "attachmentUrl",
            "description": "附件地址",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 61
          }
        ],
        "note": "",
        "reportTableId": "ftb_productionInspectionFile"
      },
      {
        "name": "大仓出库 · 大仓出库主表",
        "mode": "info",
        "fields": [
          {
            "name": "出库箱明细记录内部 ID",
            "key": "id",
            "description": "出库箱明细记录内部 ID，自增主键；原注释为“出库箱内部号”",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 3
          },
          {
            "name": "出库单号",
            "key": "shipmentCode",
            "description": "出库单号",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 4
          },
          {
            "name": "仓库编码",
            "key": "warehouseCode",
            "description": "仓库编码",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 5
          },
          {
            "name": "出库单内部 ID",
            "key": "shipmentId",
            "description": "出库单内部 ID",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 6
          },
          {
            "name": "出库单内部行号",
            "key": "shipmentDetailId",
            "description": "出库单内部行号，具体是否对应明细主键需确认",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 7
          },
          {
            "name": "货主编码",
            "key": "companyCode",
            "description": "货主编码",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 8
          },
          {
            "name": "货品编码",
            "key": "itemCode",
            "description": "货品编码",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 9
          },
          {
            "name": "货品名称",
            "key": "itemName",
            "description": "货品名称",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 10
          },
          {
            "name": "数量",
            "key": "quantity",
            "description": "数量，根据字段名推断；具体计量单位及业务口径未注明",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 11
          },
          {
            "name": "生产日期",
            "key": "manufactureDate",
            "description": "生产日期",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 12
          },
          {
            "name": "失效日期",
            "key": "expirationDate",
            "description": "失效日期",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 13
          },
          {
            "name": "入库日期",
            "key": "agingDate",
            "description": "入库日期",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 14
          },
          {
            "name": "库存状态",
            "key": "inventorySts",
            "description": "库存状态，具体枚举未提供",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 15
          },
          {
            "name": "创建时间",
            "key": "created",
            "description": "创建时间，默认当前时间",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 16
          },
          {
            "name": "创建用户",
            "key": "createdBy",
            "description": "创建用户",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 17
          },
          {
            "name": "最后更新时间",
            "key": "lastUpdated",
            "description": "最后更新时间，默认当前时间，并配置为记录更新时自动更新时间",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 18
          },
          {
            "name": "最后更新用户",
            "key": "lastUpdatedBy",
            "description": "最后更新用户；DDL 未配置自动填充规则",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 19
          },
          {
            "name": "关联入库单号",
            "key": "receiptCode",
            "description": "关联入库单号",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 20
          },
          {
            "name": "关联入库单内部 ID",
            "key": "receiptId",
            "description": "关联入库单内部 ID",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 21
          },
          {
            "name": "关联入库单明细内部 ID",
            "key": "receiptDetailId",
            "description": "关联入库单明细内部 ID",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 22
          },
          {
            "name": "单位",
            "key": "unitName",
            "description": "单位",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 23
          },
          {
            "name": "批次号",
            "key": "batchCode",
            "description": "批次号",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 25
          },
          {
            "name": "配送单号",
            "key": "deliveryOrderNo",
            "description": "贯穿大仓出库、物流配送和门店收货的配送单业务编号；与出库单号、发车单号分别保留，不设单列唯一索引。",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 26
          }
        ],
        "note": "",
        "reportTableId": "tb_whOutboundRecord"
      },
      {
        "name": "物流配送 · 物流配送主表",
        "mode": "info",
        "fields": [
          {
            "name": "所属运输任务 ID",
            "key": "taskId",
            "description": "所属运输任务 ID",
            "sourceSheet": "物流配送环节",
            "sourceRow": 3
          },
          {
            "name": "关联订单 ID",
            "key": "orderId",
            "description": "关联订单 ID",
            "sourceSheet": "物流配送环节",
            "sourceRow": 4
          },
          {
            "name": "关联订单明细 ID",
            "key": "orderDetailId",
            "description": "关联订单明细 ID",
            "sourceSheet": "物流配送环节",
            "sourceRow": 5
          },
          {
            "name": "商品行号",
            "key": "lineNo",
            "description": "商品行号，字符串类型",
            "sourceSheet": "物流配送环节",
            "sourceRow": 6
          },
          {
            "name": "商品编码",
            "key": "itemCode",
            "description": "商品编码",
            "sourceSheet": "物流配送环节",
            "sourceRow": 7
          },
          {
            "name": "库存状态",
            "key": "inventoryStatus",
            "description": "库存状态，具体枚举未提供",
            "sourceSheet": "物流配送环节",
            "sourceRow": 8
          },
          {
            "name": "计划数量",
            "key": "planQty",
            "description": "计划数量",
            "sourceSheet": "物流配送环节",
            "sourceRow": 9
          },
          {
            "name": "实际数量",
            "key": "actQty",
            "description": "实际数量，具体指装载、发运还是其他环节需确认",
            "sourceSheet": "物流配送环节",
            "sourceRow": 10
          },
          {
            "name": "签收数量",
            "key": "signQty",
            "description": "签收数量",
            "sourceSheet": "物流配送环节",
            "sourceRow": 11
          },
          {
            "name": "揽收数量",
            "key": "collectQty",
            "description": "揽收数量",
            "sourceSheet": "物流配送环节",
            "sourceRow": 12
          },
          {
            "name": "拒收数量",
            "key": "rejectQty",
            "description": "拒收数量",
            "sourceSheet": "物流配送环节",
            "sourceRow": 13
          },
          {
            "name": "剩货数量",
            "key": "leftoverQty",
            "description": "剩货数量，具体业务口径需确认",
            "sourceSheet": "物流配送环节",
            "sourceRow": 14
          },
          {
            "name": "批次号",
            "key": "batchCode",
            "description": "批次号",
            "sourceSheet": "物流配送环节",
            "sourceRow": 15
          },
          {
            "name": "生产批号",
            "key": "produceCode",
            "description": "生产批号",
            "sourceSheet": "物流配送环节",
            "sourceRow": 16
          },
          {
            "name": "生产日期及时间",
            "key": "produceTimestamp",
            "description": "生产日期及时间",
            "sourceSheet": "物流配送环节",
            "sourceRow": 17
          },
          {
            "name": "过期日期及时间",
            "key": "expireTimestamp",
            "description": "过期日期及时间",
            "sourceSheet": "物流配送环节",
            "sourceRow": 18
          },
          {
            "name": "是否温控",
            "key": "temperatureFlag",
            "description": "是否温控，具体取值未提供",
            "sourceSheet": "物流配送环节",
            "sourceRow": 19
          },
          {
            "name": "最低温度",
            "key": "minTemperature",
            "description": "最低温度，温标及是否为要求值需确认",
            "sourceSheet": "物流配送环节",
            "sourceRow": 20
          },
          {
            "name": "最高温度",
            "key": "maxTemperature",
            "description": "最高温度，温标及是否为要求值需确认",
            "sourceSheet": "物流配送环节",
            "sourceRow": 21
          },
          {
            "name": "最低湿度",
            "key": "minHumidity",
            "description": "最低湿度，单位及业务口径未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 22
          },
          {
            "name": "最高湿度",
            "key": "maxHumidity",
            "description": "最高湿度，单位及业务口径未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 23
          },
          {
            "name": "商品名称",
            "key": "itemName",
            "description": "商品名称",
            "sourceSheet": "物流配送环节",
            "sourceRow": 24
          },
          {
            "name": "商品类别",
            "key": "itemClass",
            "description": "商品类别，存储编码还是名称未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 25
          },
          {
            "name": "库存记录 ID",
            "key": "invId",
            "description": "库存记录 ID",
            "sourceSheet": "物流配送环节",
            "sourceRow": 26
          },
          {
            "name": "创建时间",
            "key": "created",
            "description": "创建时间；实际配置了更新时自动更新时间，可能不保留最初创建时间",
            "sourceSheet": "物流配送环节",
            "sourceRow": 27
          },
          {
            "name": "创建用户",
            "key": "createdBy",
            "description": "创建用户",
            "sourceSheet": "物流配送环节",
            "sourceRow": 28
          },
          {
            "name": "最后更新时间",
            "key": "lastUpdated",
            "description": "最后更新时间，默认当前时间，并配置为记录更新时自动更新时间",
            "sourceSheet": "物流配送环节",
            "sourceRow": 29
          },
          {
            "name": "最后更新用户",
            "key": "lastUpdatedBy",
            "description": "最后更新用户，DDL 未配置自动填充规则",
            "sourceSheet": "物流配送环节",
            "sourceRow": 30
          },
          {
            "name": "删除标记",
            "key": "deleteFlag",
            "description": "删除标记：0＝正常，1＝删除；默认 0",
            "sourceSheet": "物流配送环节",
            "sourceRow": 31
          },
          {
            "name": "启用状态",
            "key": "status",
            "description": "启用状态：0＝未启用，1＝启用，2＝禁用；默认 1",
            "sourceSheet": "物流配送环节",
            "sourceRow": 32
          },
          {
            "name": "配送单号",
            "key": "deliveryOrderNo",
            "description": "贯穿大仓出库、物流配送和门店收货的配送单业务编号；与出库单号、发车单号分别保留，不设单列唯一索引。",
            "sourceSheet": "物流配送环节",
            "sourceRow": 33
          }
        ],
        "note": "",
        "reportTableId": "tb_distRecord"
      },
      {
        "name": "物流配送 · 配送温度子表",
        "mode": "table",
        "fields": [
          {
            "name": "发车单号",
            "key": "departCode",
            "description": "发车单号",
            "sourceSheet": "物流配送环节",
            "sourceRow": 34
          },
          {
            "name": "车牌号",
            "key": "carNumber",
            "description": "车牌号",
            "sourceSheet": "物流配送环节",
            "sourceRow": 35
          },
          {
            "name": "承运商",
            "key": "vendorCode",
            "description": "承运商，结合字段名推测为承运商编码",
            "sourceSheet": "物流配送环节",
            "sourceRow": 36
          },
          {
            "name": "线路",
            "key": "lineCode",
            "description": "线路，结合字段名推测为线路编码",
            "sourceSheet": "物流配送环节",
            "sourceRow": 37
          },
          {
            "name": "公司",
            "key": "clientCode",
            "description": "公司，结合字段名推测为公司编码",
            "sourceSheet": "物流配送环节",
            "sourceRow": 38
          },
          {
            "name": "基地",
            "key": "centerCode",
            "description": "基地，结合字段名推测为基地编码",
            "sourceSheet": "物流配送环节",
            "sourceRow": 39
          },
          {
            "name": "司机姓名",
            "key": "driverName",
            "description": "司机姓名",
            "sourceSheet": "物流配送环节",
            "sourceRow": 40
          },
          {
            "name": "司机联系电话",
            "key": "driverMobile",
            "description": "司机联系电话",
            "sourceSheet": "物流配送环节",
            "sourceRow": 41
          },
          {
            "name": "监测设备编号",
            "key": "deviceNo",
            "description": "监测设备编号",
            "sourceSheet": "物流配送环节",
            "sourceRow": 42
          },
          {
            "name": "发车时间",
            "key": "departTime",
            "description": "发车时间",
            "sourceSheet": "物流配送环节",
            "sourceRow": 43
          },
          {
            "name": "温度",
            "key": "temperature",
            "description": "温度，保留 2 位小数；温标未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 44
          },
          {
            "name": "湿度",
            "key": "humidity",
            "description": "湿度，保留 2 位小数；单位未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 45
          },
          {
            "name": "温度报警上限",
            "key": "upperLimit",
            "description": "温度报警上限",
            "sourceSheet": "物流配送环节",
            "sourceRow": 46
          },
          {
            "name": "温度报警下限",
            "key": "lowerLimit",
            "description": "温度报警下限",
            "sourceSheet": "物流配送环节",
            "sourceRow": 47
          },
          {
            "name": "湿度报警上限",
            "key": "hUpperLimit",
            "description": "湿度报警上限",
            "sourceSheet": "物流配送环节",
            "sourceRow": 48
          },
          {
            "name": "启用状态",
            "key": "status",
            "description": "启用状态：0＝未启用，1＝启用，2＝禁用；默认 0",
            "sourceSheet": "物流配送环节",
            "sourceRow": 49
          },
          {
            "name": "记录创建时间",
            "key": "created",
            "description": "记录创建时间，默认当前时间，允许为空",
            "sourceSheet": "物流配送环节",
            "sourceRow": 50
          },
          {
            "name": "湿度报警下限",
            "key": "hLowerLimit",
            "description": "湿度报警下限",
            "sourceSheet": "物流配送环节",
            "sourceRow": 51
          },
          {
            "name": "最后更新时间",
            "key": "lastUpdated",
            "description": "最后更新时间，默认当前时间，并配置为记录更新时自动更新时间；允许为空",
            "sourceSheet": "物流配送环节",
            "sourceRow": 52
          },
          {
            "name": "最后更新用户",
            "key": "lastUpdatedBy",
            "description": "最后更新用户，DDL 未配置自动填充规则",
            "sourceSheet": "物流配送环节",
            "sourceRow": 53
          }
        ],
        "note": "",
        "reportTableId": "stb_deliveryTemperature"
      },
      {
        "name": "物流配送 · 配送线路子表",
        "mode": "table",
        "fields": [
          {
            "name": "所属发车单 ID",
            "key": "departId",
            "description": "所属发车单 ID",
            "sourceSheet": "物流配送环节",
            "sourceRow": 54
          },
          {
            "name": "所属发车单号",
            "key": "departCode",
            "description": "所属发车单号",
            "sourceSheet": "物流配送环节",
            "sourceRow": 55
          },
          {
            "name": "车牌号",
            "key": "carNumber",
            "description": "车牌号",
            "sourceSheet": "物流配送环节",
            "sourceRow": 56
          },
          {
            "name": "配送模式",
            "key": "deliveryOrPick",
            "description": "配送模式，具体枚举未提供",
            "sourceSheet": "物流配送环节",
            "sourceRow": 57
          },
          {
            "name": "原始纬度",
            "key": "lat",
            "description": "原始纬度；原注释“维度”应为“纬度”，原始坐标系未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 58
          },
          {
            "name": "原始经度",
            "key": "lon",
            "description": "原始经度，原始坐标系未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 59
          },
          {
            "name": "百度坐标纬度",
            "key": "bd09_lat",
            "description": "百度坐标纬度，字段名表明使用 BD-09 坐标系",
            "sourceSheet": "物流配送环节",
            "sourceRow": 60
          },
          {
            "name": "百度坐标经度",
            "key": "bd09_lon",
            "description": "百度坐标经度，字段名表明使用 BD-09 坐标系",
            "sourceSheet": "物流配送环节",
            "sourceRow": 61
          },
          {
            "name": "相对于正北方向的夹角",
            "key": "agl",
            "description": "相对于正北方向的夹角；单位、旋转方向及取值范围未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 62
          },
          {
            "name": "GPS 时间",
            "key": "gtm",
            "description": "GPS 时间，用于标识定位点对应的时间",
            "sourceSheet": "物流配送环节",
            "sourceRow": 63
          },
          {
            "name": "创建人",
            "key": "createdBy",
            "description": "创建人，存储账号、ID 还是姓名未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 64
          },
          {
            "name": "最后更新时间",
            "key": "lastUpdated",
            "description": "最后更新时间，默认当前时间，并配置为记录更新时自动更新时间；允许为空",
            "sourceSheet": "物流配送环节",
            "sourceRow": 65
          },
          {
            "name": "最后更新者",
            "key": "lastUpdatedBy",
            "description": "最后更新者，DDL 未配置自动填充规则",
            "sourceSheet": "物流配送环节",
            "sourceRow": 66
          },
          {
            "name": "数据版本号",
            "key": "version",
            "description": "数据版本号，默认 NULL；是否用于并发控制需确认",
            "sourceSheet": "物流配送环节",
            "sourceRow": 67
          },
          {
            "name": "启用状态",
            "key": "status",
            "description": "启用状态：1＝启用，0＝未启用；默认 1",
            "sourceSheet": "物流配送环节",
            "sourceRow": 68
          },
          {
            "name": "地理位置",
            "key": "location",
            "description": "地理位置，长文本类型；存储地址文字还是结构化内容未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 69
          }
        ],
        "note": "",
        "reportTableId": "stb_deliveryRoute"
      },
      {
        "name": "门店收货 · 门店收货主表",
        "mode": "info",
        "fields": [
          {
            "name": "收货单记录唯一标识",
            "key": "guid",
            "description": "收货单记录唯一标识，主键",
            "sourceSheet": "门店收货环节",
            "sourceRow": 3
          },
          {
            "name": "收货单号",
            "key": "purchase_code",
            "description": "收货单号",
            "sourceSheet": "门店收货环节",
            "sourceRow": 4
          },
          {
            "name": "收货日期",
            "key": "purchase_date",
            "description": "收货日期",
            "sourceSheet": "门店收货环节",
            "sourceRow": 5
          },
          {
            "name": "配销编码",
            "key": "dc_code",
            "description": "配销编码",
            "sourceSheet": "门店收货环节",
            "sourceRow": 6
          },
          {
            "name": "供货机构编码",
            "key": "supply_institution_code",
            "description": "供货机构编码",
            "sourceSheet": "门店收货环节",
            "sourceRow": 7
          },
          {
            "name": "送货类型",
            "key": "supply_delivery_type",
            "description": "送货类型：1＝直送，2＝代送",
            "sourceSheet": "门店收货环节",
            "sourceRow": 8
          },
          {
            "name": "门店编码",
            "key": "store_code",
            "description": "门店编码",
            "sourceSheet": "门店收货环节",
            "sourceRow": 9
          },
          {
            "name": "收货单确认状态",
            "key": "confirm_flag",
            "description": "收货单确认状态：1＝待确认，2＝已确认",
            "sourceSheet": "门店收货环节",
            "sourceRow": 10
          },
          {
            "name": "收货单确认人 ID",
            "key": "confirm_user",
            "description": "收货单确认人 ID",
            "sourceSheet": "门店收货环节",
            "sourceRow": 11
          },
          {
            "name": "收货单确认时间",
            "key": "confirm_time",
            "description": "收货单确认时间",
            "sourceSheet": "门店收货环节",
            "sourceRow": 12
          },
          {
            "name": "是否为盘点前收货",
            "key": "check_flag",
            "description": "是否为盘点前收货：1＝是，2＝不是",
            "sourceSheet": "门店收货环节",
            "sourceRow": 13
          },
          {
            "name": "采购订单号",
            "key": "purchase_order_no",
            "description": "采购订单号",
            "sourceSheet": "门店收货环节",
            "sourceRow": 14
          },
          {
            "name": "创建人 ID",
            "key": "create_id",
            "description": "创建人 ID",
            "sourceSheet": "门店收货环节",
            "sourceRow": 15
          },
          {
            "name": "创建时间",
            "key": "create_time",
            "description": "创建时间",
            "sourceSheet": "门店收货环节",
            "sourceRow": 16
          },
          {
            "name": "最后更新人 ID",
            "key": "update_id",
            "description": "最后更新人 ID",
            "sourceSheet": "门店收货环节",
            "sourceRow": 17
          },
          {
            "name": "最后更新时间",
            "key": "update_time",
            "description": "最后更新时间",
            "sourceSheet": "门店收货环节",
            "sourceRow": 18
          },
          {
            "name": "删除标识",
            "key": "del_flag",
            "description": "删除标识：N＝未删除，Y＝已删除",
            "sourceSheet": "门店收货环节",
            "sourceRow": 19
          },
          {
            "name": "发货日期及时间",
            "key": "ship_date",
            "description": "发货日期及时间",
            "sourceSheet": "门店收货环节",
            "sourceRow": 20
          },
          {
            "name": "订单下发渠道",
            "key": "channel",
            "description": "订单下发渠道：1＝SAP，2＝SRM，3＝WMS，4＝TMS",
            "sourceSheet": "门店收货环节",
            "sourceRow": 21
          },
          {
            "name": "TMS 配送方式",
            "key": "tms_delivery_type",
            "description": "TMS 配送方式：ZC＝整车，ZT＝自提，KD＝快递",
            "sourceSheet": "门店收货环节",
            "sourceRow": 22
          },
          {
            "name": "TMS 车辆状态",
            "key": "tms_car_status",
            "description": "TMS 车辆状态：1＝已发车，2＝已抵达",
            "sourceSheet": "门店收货环节",
            "sourceRow": 23
          },
          {
            "name": "TMS 单据评价状态",
            "key": "tms_evalution_status",
            "description": "TMS 单据评价状态：1＝已评价，0＝待评价，-1＝超时未评",
            "sourceSheet": "门店收货环节",
            "sourceRow": 24
          },
          {
            "name": "WMS 同步的订单配送方式",
            "key": "delivery_type",
            "description": "WMS 同步的订单配送方式，具体枚举未提供",
            "sourceSheet": "门店收货环节",
            "sourceRow": 25
          },
          {
            "name": "收货确认渠道",
            "key": "confirm_channel",
            "description": "收货确认渠道：0＝PC 端，1＝钉钉端，2＝定时任务系统自动，3＝APP 手动收货，4＝APP-RFID 扫描自动收货，5＝加盟确认",
            "sourceSheet": "门店收货环节",
            "sourceRow": 26
          },
          {
            "name": "配送单号",
            "key": "delivery_order_no",
            "description": "贯穿大仓出库、物流配送和门店收货的配送单业务编号；与出库单号、发车单号分别保留，不设单列唯一索引。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 27
          }
        ],
        "note": "",
        "reportTableId": "tb_storeRecvRecord"
      },
      {
        "name": "门店收货 · 收货明细子表",
        "mode": "table",
        "fields": [
          {
            "name": "收货明细记录唯一标识",
            "key": "guid",
            "description": "收货明细记录唯一标识，主键",
            "sourceSheet": "门店收货环节",
            "sourceRow": 28
          },
          {
            "name": "所属收货单号",
            "key": "purchase_code",
            "description": "所属收货单号",
            "sourceSheet": "门店收货环节",
            "sourceRow": 29
          },
          {
            "name": "收货门店编码",
            "key": "store_code",
            "description": "收货门店编码",
            "sourceSheet": "门店收货环节",
            "sourceRow": 30
          },
          {
            "name": "货品编码",
            "key": "merchandise_code",
            "description": "货品编码",
            "sourceSheet": "门店收货环节",
            "sourceRow": 31
          },
          {
            "name": "应收数量",
            "key": "receivable_quantity",
            "description": "应收数量，最多保留 4 位小数",
            "sourceSheet": "门店收货环节",
            "sourceRow": 32
          },
          {
            "name": "实收数量",
            "key": "received_quantity",
            "description": "实收数量，最多保留 4 位小数",
            "sourceSheet": "门店收货环节",
            "sourceRow": 33
          },
          {
            "name": "收货差异数量",
            "key": "difference_quantity",
            "description": "收货差异数量，最多保留 4 位小数；计算方向未注明",
            "sourceSheet": "门店收货环节",
            "sourceRow": 34
          },
          {
            "name": "收货计量单位编码",
            "key": "purchase_unit_code",
            "description": "收货计量单位编码",
            "sourceSheet": "门店收货环节",
            "sourceRow": 35
          },
          {
            "name": "生产日期",
            "key": "make_date",
            "description": "生产日期",
            "sourceSheet": "门店收货环节",
            "sourceRow": 36
          },
          {
            "name": "保质期天数",
            "key": "life_days",
            "description": "保质期天数",
            "sourceSheet": "门店收货环节",
            "sourceRow": 37
          },
          {
            "name": "货品批次号",
            "key": "batch_code",
            "description": "货品批次号",
            "sourceSheet": "门店收货环节",
            "sourceRow": 38
          },
          {
            "name": "明细排序号",
            "key": "seq_id",
            "description": "明细排序号",
            "sourceSheet": "门店收货环节",
            "sourceRow": 39
          },
          {
            "name": "对应采购订单行号",
            "key": "purchase_order_seq_id",
            "description": "对应采购订单行号",
            "sourceSheet": "门店收货环节",
            "sourceRow": 40
          },
          {
            "name": "创建人 ID",
            "key": "create_id",
            "description": "创建人 ID",
            "sourceSheet": "门店收货环节",
            "sourceRow": 41
          },
          {
            "name": "创建时间",
            "key": "create_time",
            "description": "创建时间",
            "sourceSheet": "门店收货环节",
            "sourceRow": 42
          },
          {
            "name": "最后更新人 ID",
            "key": "update_id",
            "description": "最后更新人 ID",
            "sourceSheet": "门店收货环节",
            "sourceRow": 43
          },
          {
            "name": "最后更新时间",
            "key": "update_time",
            "description": "最后更新时间",
            "sourceSheet": "门店收货环节",
            "sourceRow": 44
          },
          {
            "name": "删除标识",
            "key": "del_flag",
            "description": "删除标识：N＝未删除，Y＝已删除",
            "sourceSheet": "门店收货环节",
            "sourceRow": 45
          },
          {
            "name": "当前货品行对应的物料采购订单号",
            "key": "purchase_orde_no",
            "description": "当前货品行对应的物料采购订单号；支持一张交货单对应多个采购订单",
            "sourceSheet": "门店收货环节",
            "sourceRow": 46
          },
          {
            "name": "价格单位编码",
            "key": "price_unit_code",
            "description": "价格单位编码",
            "sourceSheet": "门店收货环节",
            "sourceRow": 47
          },
          {
            "name": "供应商编码",
            "key": "supplier",
            "description": "供应商编码",
            "sourceSheet": "门店收货环节",
            "sourceRow": 48
          },
          {
            "name": "供应商名称",
            "key": "supplier_name",
            "description": "供应商名称",
            "sourceSheet": "门店收货环节",
            "sourceRow": 49
          },
          {
            "name": "生产商名称",
            "key": "producerName",
            "description": "生产商名称",
            "sourceSheet": "门店收货环节",
            "sourceRow": 50
          }
        ],
        "note": "",
        "reportTableId": "stb_storeReceiptDetail"
      },
      {
        "name": "门店收货 · 关联退货子表",
        "mode": "table",
        "fields": [
          {
            "name": "退货门店",
            "key": "store_code",
            "description": "退货门店编码，与门店收货主表store_code口径一致；编码映射待确认。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 51
          },
          {
            "name": "所属退货单号",
            "key": "return_code",
            "description": "所属退货单业务编号；一张退货单可包含多条货品明细，不设单列唯一索引。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 52
          },
          {
            "name": "货品编码",
            "key": "merchandise_code",
            "description": "退货货品编码，与收货明细merchandise_code口径一致。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 53
          },
          {
            "name": "发货仓编码",
            "key": "warehouse_code",
            "description": "原配送发货仓编码；是否指原发货仓或退货接收仓需确认。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 54
          },
          {
            "name": "发货仓名称",
            "key": "warehouse_name",
            "description": "发货仓名称，与发货仓编码对应。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 55
          },
          {
            "name": "实际退货数量（最多保留 4 位小数）",
            "key": "returned_quantity",
            "description": "实际退货数量，最多保留4位小数；单位与退货计量字段一致。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 56
          },
          {
            "name": "退货计量",
            "key": "return_unit_code",
            "description": "建议存储退货计量单位编码，单位字典及换算规则待确认。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 57
          },
          {
            "name": "货品生产日期",
            "key": "make_date",
            "description": "退货货品生产日期，与收货明细make_date对应。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 58
          },
          {
            "name": "关联的收货单号",
            "key": "purchase_code",
            "description": "关联门店收货主表purchase_code；建议结合store_code定位收货单，结合货品编码及批次定位明细，唯一粒度待确认。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 59
          },
          {
            "name": "货品批次号",
            "key": "batch_code",
            "description": "退货货品批次号，与收货明细batch_code对应。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 60
          },
          {
            "name": "退货原因（描述）",
            "key": "return_reason",
            "description": "退货原因文字描述。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 61
          },
          {
            "name": "门店备注",
            "key": "store_remark",
            "description": "门店填写的退货补充说明。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 62
          },
          {
            "name": "创建时间",
            "key": "create_time",
            "description": "退货记录创建时间，建议精确到秒，以源系统时间为准。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 63
          },
          {
            "name": "供应商",
            "key": "supplier",
            "description": "建议存储供应商编码，与收货明细supplier口径一致；编码或名称口径待确认。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 64
          }
        ],
        "note": "",
        "reportTableId": "stb_storeReturnDetail"
      }
    ],
    "actions": [
      {
        "name": "溯源报告",
        "description": "新打开详情页面",
        "note": "/"
      }
    ],
    "form": [],
    "rules": [],
    "description": "以单条门店收货记录为起点，按原料编码、批次及关联单据逆向查看其他环节信息。",
    "uiActions": [
      "查看"
    ],
    "detailMode": "page",
    "reportSchemaVersion": "chain-20261013-be58622782e2",
    "traceDirection": "reverse",
    "traceScope": "material",
    "singleStoreReceipt": true,
    "copiedFrom": "forward"
  },
  {
    "id": "reverse",
    "group": "溯源报告查询中心",
    "name": "菜品溯源报告",
    "kind": "report",
    "sourceRange": [
      74,
      96
    ],
    "filters": [
      {
        "name": "溯源报告编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "菜品名称",
        "type": "input",
        "default": "/",
        "match": "下拉列表模糊查询"
      },
      {
        "name": "菜品编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "菜品类型",
        "type": "下拉列表",
        "default": "单品、固定套餐、随心配套餐",
        "match": "精准查询"
      },
      {
        "name": "门店编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "门店名称",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "原料名称",
        "type": "input",
        "default": "/",
        "match": "下拉列表模糊查询"
      },
      {
        "name": "原料编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "关联原料溯源报告编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "生产日期时间段",
        "type": "时间段",
        "match": "精准查询"
      },
      {
        "name": "车牌号",
        "type": "input",
        "match": "精准查询"
      },
      {
        "name": "收货任务编码",
        "type": "input",
        "match": "精准查询"
      },
      {
        "name": "仓库编码",
        "type": "input",
        "match": "精准查询"
      },
      {
        "name": "供应商编码",
        "type": "input",
        "match": "精准查询"
      },
      {
        "name": "模板编码",
        "type": "input",
        "match": "精准查询"
      }
    ],
    "columns": [
      {
        "name": "溯源报告编码",
        "description": "",
        "note": ""
      },
      {
        "name": "菜品名称",
        "description": "",
        "note": ""
      },
      {
        "name": "菜品编码",
        "description": "",
        "note": ""
      },
      {
        "name": "菜品类型",
        "description": "",
        "note": ""
      },
      {
        "name": "门店编码",
        "description": "",
        "note": ""
      },
      {
        "name": "门店名称",
        "description": "",
        "note": ""
      },
      {
        "name": "关联原料数量",
        "description": "",
        "note": ""
      },
      {
        "name": "关联原料",
        "description": "#原料名称-#原料编码",
        "note": "可能多个，逗号隔开"
      },
      {
        "name": "原料编码",
        "description": "",
        "note": ""
      },
      {
        "name": "原料名称",
        "description": "",
        "note": ""
      },
      {
        "name": "关联菜品",
        "description": "#菜品名称-#菜品编码",
        "note": "可能多个，逗号隔开"
      },
      {
        "name": "报告生成时间",
        "description": "yyyy-mm-dd hh:mm:ss",
        "note": ""
      },
      {
        "name": "关联原料溯源报告",
        "description": "",
        "note": "可能多个，逗号隔开"
      },
      {
        "name": "溯源报告",
        "description": "点击查看详情",
        "note": ""
      },
      {
        "name": "菜品模板编码"
      },
      {
        "name": "原料模板编码"
      },
      {
        "name": "供应商模板编码"
      },
      {
        "name": "供应商名称"
      },
      {
        "name": "生产日期"
      },
      {
        "name": "模板版本号"
      }
    ],
    "tabs": [
      {
        "name": "大仓入库 · 收货主表",
        "mode": "info",
        "fields": [
          {
            "name": "入库箱记录主键",
            "key": "id",
            "description": "入库箱记录主键，自增 ID",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 3
          },
          {
            "name": "入库单内部 ID",
            "key": "receiptId",
            "description": "入库单内部 ID",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 4
          },
          {
            "name": "入库单明细行号",
            "key": "receiptDetailId",
            "description": "入库单明细行号，是否为明细记录主键需确认",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 5
          },
          {
            "name": "入库单编码",
            "key": "receiptCode",
            "description": "入库单编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 6
          },
          {
            "name": "入库单类型",
            "key": "receiptType",
            "description": "入库单类型，具体枚举未提供",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 7
          },
          {
            "name": "货品描述或名称",
            "key": "itemName",
            "description": "货品描述或名称",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 8
          },
          {
            "name": "仓库编码",
            "key": "warehouseCode",
            "description": "仓库编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 9
          },
          {
            "name": "包装编码",
            "key": "packingCode",
            "description": "包装编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 10
          },
          {
            "name": "关联库存记录 ID",
            "key": "inventoryId",
            "description": "关联库存记录 ID",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 11
          },
          {
            "name": "入库箱状态",
            "key": "status",
            "description": "入库箱状态，具体枚举未提供",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 12
          },
          {
            "name": "批次",
            "key": "batch",
            "description": "批次，与 lot 的业务区别需确认",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 13
          },
          {
            "name": "批号",
            "key": "lot",
            "description": "批号，与 batch 的业务区别需确认",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 14
          },
          {
            "name": "生产日期",
            "key": "manufactureDate",
            "description": "生产日期",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 15
          },
          {
            "name": "失效日期",
            "key": "expirationDate",
            "description": "失效日期",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 16
          },
          {
            "name": "入库日期",
            "key": "agingDate",
            "description": "入库日期",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 17
          },
          {
            "name": "收货时间",
            "key": "checkInAt",
            "description": "收货时间",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 18
          },
          {
            "name": "收货操作用户",
            "key": "checkInBy",
            "description": "收货操作用户",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 19
          },
          {
            "name": "验收方式",
            "key": "acceptanceMethod",
            "description": "验收方式，具体枚举未提供",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 20
          },
          {
            "name": "二次验收状态",
            "key": "twiceAcceptanceStatus",
            "description": "二次验收状态，具体枚举未提供",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 21
          },
          {
            "name": "第二收货用户",
            "key": "secondCheckInBy",
            "description": "第二收货用户，具体是否对应二次验收操作人需确认",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 22
          },
          {
            "name": "第二收货时间",
            "key": "secondCheckInAt",
            "description": "第二收货时间",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 23
          },
          {
            "name": "采购订单号",
            "key": "purchaseOrderNo",
            "description": "本次入库对应的采购订单业务编号；与采购单及后续收货记录关联，源字段映射待确认。",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 24
          }
        ],
        "note": "",
        "reportTableId": "tb_whReceiptRecord"
      },
      {
        "name": "大仓入库 · 质检子表",
        "mode": "table",
        "fields": [
          {
            "name": "质检明细内部 ID",
            "key": "id",
            "description": "质检明细内部 ID，自增主键",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 25
          },
          {
            "name": "所属质检单 ID",
            "key": "iqcId",
            "description": "所属质检单 ID，默认 0",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 26
          },
          {
            "name": "所属质检单号",
            "key": "iqcCode",
            "description": "所属质检单号",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 27
          },
          {
            "name": "关联入库单 ID",
            "key": "receiptId",
            "description": "关联入库单 ID，默认 0",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 28
          },
          {
            "name": "关联入库单号",
            "key": "receiptCode",
            "description": "关联入库单号",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 29
          },
          {
            "name": "货品编码",
            "key": "itemCode",
            "description": "货品编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 30
          },
          {
            "name": "货品名称",
            "key": "itemName",
            "description": "货品名称",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 31
          },
          {
            "name": "货主编码",
            "key": "companyCode",
            "description": "货主编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 32
          },
          {
            "name": "仓库编码",
            "key": "warehouseCode",
            "description": "仓库编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 33
          },
          {
            "name": "包装编码",
            "key": "packingCode",
            "description": "包装编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 34
          },
          {
            "name": "生产商",
            "key": "manufacture",
            "description": "生产商，存储名称还是编码未注明",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 35
          },
          {
            "name": "质检规则编码",
            "key": "qcRuleCode",
            "description": "质检规则编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 36
          },
          {
            "name": "质检方式",
            "key": "iqcMethod",
            "description": "质检方式，具体枚举未提供",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 37
          },
          {
            "name": "二次质检状态",
            "key": "twiceIqcStatus",
            "description": "二次质检状态，具体枚举未提供",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 38
          },
          {
            "name": "质检类型",
            "key": "iqcType",
            "description": "质检类型，具体枚举未提供",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 39
          },
          {
            "name": "合格率",
            "key": "qualifiedRate",
            "description": "合格率，整数存储；是否按百分数及如何取整需确认",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 40
          },
          {
            "name": "质检结果",
            "key": "iqcResult",
            "description": "质检结果，存储编码还是文字未注明",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 41
          },
          {
            "name": "质检处理建议",
            "key": "iqcOpinion",
            "description": "质检处理建议",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 42
          },
          {
            "name": "处理标记",
            "key": "processStamp",
            "description": "处理标记，具体用途及格式未注明",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 43
          },
          {
            "name": "总数量",
            "key": "totalQty",
            "description": "总数量，根据字段名推断；是入库总量还是待检批次总量需确认",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 44
          },
          {
            "name": "质检数量",
            "key": "iqcQty",
            "description": "质检数量，根据字段名推断；是否为计划检验量或抽检量需确认",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 45
          },
          {
            "name": "已检数量",
            "key": "checkedQty",
            "description": "已检数量，根据字段名推断",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 46
          },
          {
            "name": "合格数量",
            "key": "qualifiedQty",
            "description": "合格数量，根据字段名推断",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 47
          },
          {
            "name": "不合格数量",
            "key": "unqualifiedQty",
            "description": "不合格数量，根据字段名推断",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 48
          },
          {
            "name": "计量单位",
            "key": "quantityUm",
            "description": "计量单位，存储编码还是名称未注明",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 49
          },
          {
            "name": "创建时间",
            "key": "created",
            "description": "创建时间，默认当前时间，允许为空",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 50
          },
          {
            "name": "创建用户",
            "key": "createdBy",
            "description": "创建用户",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 51
          },
          {
            "name": "最后更新时间",
            "key": "lastUpdated",
            "description": "最后更新时间，默认当前时间，并配置为记录更新时自动更新时间；允许为空",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 52
          }
        ],
        "note": "",
        "reportTableId": "stb_whInspection"
      },
      {
        "name": "大仓入库 · 批检附件子表",
        "mode": "table",
        "fields": [
          {
            "name": "文件记录内部 ID",
            "key": "id",
            "description": "文件记录内部 ID，自增主键",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 53
          },
          {
            "name": "关联业务表的表名",
            "key": "tableName",
            "description": "关联业务表的表名",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 54
          },
          {
            "name": "对应业务表记录的 ID 或编码",
            "key": "dataIdOrCode",
            "description": "对应业务表记录的 ID 或编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 55
          },
          {
            "name": "供应商编码",
            "key": "shipFromCode",
            "description": "供应商编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 56
          },
          {
            "name": "供应商名称",
            "key": "shipFromName",
            "description": "供应商名称",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 57
          },
          {
            "name": "货品批号",
            "key": "lot",
            "description": "货品批号",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 58
          },
          {
            "name": "货品编码",
            "key": "itemCode",
            "description": "货品编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 59
          },
          {
            "name": "货品名称",
            "key": "itemName",
            "description": "货品名称",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 60
          },
          {
            "name": "数量",
            "key": "quantity",
            "description": "数量，整数类型",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 61
          },
          {
            "name": "计量单位",
            "key": "quantityUM",
            "description": "计量单位，存储编码还是名称未注明",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 62
          },
          {
            "name": "生产日期",
            "key": "manufactureDate",
            "description": "生产日期",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 63
          },
          {
            "name": "入库日期",
            "key": "agingDate",
            "description": "入库日期",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 64
          },
          {
            "name": "状态",
            "key": "status",
            "description": "状态，默认 0，具体枚举未提供",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 65
          },
          {
            "name": "文件或数据的 URL 地址",
            "key": "dataUrl",
            "description": "文件或数据的 URL 地址",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 66
          },
          {
            "name": "文件名称",
            "key": "fileName",
            "description": "文件名称",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 67
          },
          {
            "name": "创建时间",
            "key": "created",
            "description": "创建时间，默认当前时间，允许为空",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 68
          },
          {
            "name": "创建用户",
            "key": "createdBy",
            "description": "创建用户",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 69
          },
          {
            "name": "最后更新时间",
            "key": "lastUpdated",
            "description": "最后更新时间，默认当前时间，并配置为记录更新时自动更新时间；允许为空",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 70
          },
          {
            "name": "最后更新用户",
            "key": "lastUpdatedBy",
            "description": "最后更新用户；DDL 未配置自动填充规则",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 71
          },
          {
            "name": "根据字段名推测为图片 ID",
            "key": "mageId",
            "description": "根据字段名推测为图片 ID，所属系统及用途待确认",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 72
          },
          {
            "name": "根据字段名推测为关联业务主表的 ID 或编码",
            "key": "dataHeaderIdOrCode",
            "description": "根据字段名推测为关联业务主表的 ID 或编码，具体主表及关联方式待确认",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 73
          },
          {
            "name": "图片是否上传",
            "key": "uploadImage",
            "description": "图片是否上传，默认 0，具体取值定义未注明",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 74
          },
          {
            "name": "工厂",
            "key": "factory",
            "description": "工厂，存储编码还是名称未注明",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 75
          },
          {
            "name": "逻辑仓",
            "key": "logicalWarehouse",
            "description": "逻辑仓，存储编码还是名称未注明",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 76
          },
          {
            "name": "采购单号",
            "key": "purchaseOrderCode",
            "description": "采购单号",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 77
          }
        ],
        "note": "",
        "reportTableId": "stb_whInspectionFile"
      },
      {
        "name": "大仓入库 · 供应商资质子表",
        "mode": "table",
        "fields": [
          {
            "name": "租户ID",
            "key": "tenant_id",
            "description": "租户ID",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 78
          },
          {
            "name": "供应商供货能力清单ID",
            "key": "supply_ability_id",
            "description": "供应商供货能力清单ID",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 79
          },
          {
            "name": "物料ID",
            "key": "item_id",
            "description": "物料ID",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 80
          },
          {
            "name": "物料编码",
            "key": "item_code",
            "description": "物料编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 81
          },
          {
            "name": "物料品类ID",
            "key": "item_category_id",
            "description": "物料品类ID",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 82
          },
          {
            "name": "物料品类编码",
            "key": "item_category_code",
            "description": "物料品类编码",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 83
          },
          {
            "name": "库存组织id",
            "key": "inventory_organization_id",
            "description": "库存组织id，通过逗号分隔组成",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 84
          },
          {
            "name": "采购组织id",
            "key": "purchase_organization_id",
            "description": "采购组织id",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 85
          },
          {
            "name": "是否可供",
            "key": "supply_flag",
            "description": "是否可供:1/是;0/否",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 86
          },
          {
            "name": "可供状态(G",
            "key": "supply_status",
            "description": "可供状态(G:绿色状态，无问题;Y:黄色，有风险会造成项目延迟或出现问题;R：红色，有影响整个项目进程的问题发生，需要马上解决)",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 87
          },
          {
            "name": "PSA评级",
            "key": "psa_evaluation_level",
            "description": "PSA评级",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 88
          },
          {
            "name": "PSA评分",
            "key": "psa_evaluation_score",
            "description": "PSA评分",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 89
          },
          {
            "name": "PSA完成时间",
            "key": "psa_finish_date",
            "description": "PSA完成时间",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 90
          },
          {
            "name": "SPA评级",
            "key": "spa_evaluation_level",
            "description": "SPA评级",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 91
          },
          {
            "name": "SPA评分",
            "key": "spa_evaluation_score",
            "description": "SPA评分",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 92
          },
          {
            "name": "SPA完成时间",
            "key": "spa_finish_date",
            "description": "SPA完成时间",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 93
          },
          {
            "name": "备注",
            "key": "remark",
            "description": "备注",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 94
          },
          {
            "name": "评价信息",
            "key": "evaluate_remark",
            "description": "评价信息",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 95
          },
          {
            "name": "评审附件",
            "key": "attachment_uuid",
            "description": "评审附件",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 96
          },
          {
            "name": "行版本号",
            "key": "object_version_number",
            "description": "行版本号，用来处理锁",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 97
          },
          {
            "name": "创建时间",
            "key": "creation_date",
            "description": "创建时间",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 98
          },
          {
            "name": "创建人",
            "key": "created_by",
            "description": "创建人",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 99
          },
          {
            "name": "最后修改人",
            "key": "last_updated_by",
            "description": "最后修改人",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 100
          },
          {
            "name": "最后修改时间",
            "key": "last_update_date",
            "description": "最后修改时间",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 101
          },
          {
            "name": "适配产品",
            "key": "adapter_products",
            "description": "适配产品",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 102
          },
          {
            "name": "服务国家",
            "key": "country_id",
            "description": "服务国家",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 103
          },
          {
            "name": "服务地区",
            "key": "region_id",
            "description": "服务地区",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 104
          },
          {
            "name": "服务城市",
            "key": "city_id",
            "description": "服务城市",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 105
          },
          {
            "name": "有效期从",
            "key": "date_from",
            "description": "有效期从",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 106
          },
          {
            "name": "有效期至",
            "key": "date_to",
            "description": "有效期至",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 107
          },
          {
            "name": "一次性供货标识",
            "key": "one_time_flag",
            "description": "一次性供货标识",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 108
          },
          {
            "name": "物料标准",
            "key": "item_standard",
            "description": "物料标准",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 109
          },
          {
            "name": "批准文号",
            "key": "approval_number",
            "description": "批准文号",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 110
          },
          {
            "name": "供货能力评审行状态",
            "key": "supply_review_status",
            "description": "供货能力评审行状态，值集：SUPPLY_ABILITY_REVIEW_LINE_STATUS",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 111
          },
          {
            "name": "配额比",
            "key": "quota_ratio",
            "description": "配额比",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 112
          },
          {
            "name": "字符扩展字段1",
            "key": "attribute_varchar1",
            "description": "字符扩展字段1",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 113
          },
          {
            "name": "长字符扩展字段1",
            "key": "attribute_longtext1",
            "description": "长字符扩展字段1",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 114
          },
          {
            "name": "长字符扩展字段2",
            "key": "attribute_longtext2",
            "description": "长字符扩展字段2",
            "sourceSheet": "大仓入库环节",
            "sourceRow": 115
          }
        ],
        "note": "",
        "reportTableId": "stb_supplierQualification"
      },
      {
        "name": "大仓存储 · 大仓存储主表",
        "mode": "info",
        "fields": [
          {
            "name": "工厂 (主键）",
            "key": "factoryCode",
            "description": " 工厂 (主键）",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 3
          },
          {
            "name": "名称",
            "key": "factoryName",
            "description": "名称",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 4
          },
          {
            "name": "库存地点",
            "key": "storageLocationCode",
            "description": " 库存地点",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 5
          },
          {
            "name": "库存地点描述",
            "key": "storageLocationName",
            "description": " 库存地点描述",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 6
          },
          {
            "name": "物料编码",
            "key": "itemCode",
            "description": "物料编码",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 7
          },
          {
            "name": "物料批次号",
            "key": "batchCode",
            "description": "物料批次号",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 8
          }
        ],
        "note": "",
        "reportTableId": "tb_whStorageRecord"
      },
      {
        "name": "大仓存储 · 大仓温度子表",
        "mode": "table",
        "fields": [
          {
            "name": "ID",
            "key": "id",
            "description": "ID",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 9
          },
          {
            "name": "设备编码",
            "key": "deviceCode",
            "description": "设备编码",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 10
          },
          {
            "name": "温度",
            "key": "temperature",
            "description": "温度",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 11
          },
          {
            "name": "采集时间",
            "key": "collectedTime",
            "description": "采集时间",
            "sourceSheet": "大仓存储环节",
            "sourceRow": 12
          }
        ],
        "note": "",
        "reportTableId": "stb_whTemperature"
      },
      {
        "name": "央厨加工 · 生产订单主表",
        "mode": "info",
        "fields": [
          {
            "name": "生产订单号",
            "key": "productionOrderNo",
            "description": "生产订单号",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 3
          },
          {
            "name": "工厂ID",
            "key": "factoryId",
            "description": "工厂ID",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 4
          },
          {
            "name": "工厂名称",
            "key": "factoryName",
            "description": "工厂名称",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 5
          },
          {
            "name": "成品编码",
            "key": "productCode",
            "description": "成品编码",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 6
          },
          {
            "name": "成品名称",
            "key": "productName",
            "description": "成品名称",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 7
          },
          {
            "name": "商品生产日期",
            "key": "productionDate",
            "description": "商品生产日期",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 8
          },
          {
            "name": "成品批次号",
            "key": "productBatchCode",
            "description": "成品批次号",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 9
          },
          {
            "name": "数量",
            "key": "quantity",
            "description": "数量",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 10
          },
          {
            "name": "计量单位",
            "key": "unitName",
            "description": "计量单位",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 11
          },
          {
            "name": "生产开始日期",
            "key": "productionStartDate",
            "description": "生产开始日期",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 12
          },
          {
            "name": "生产开始时间",
            "key": "productionStartTime",
            "description": "生产开始时间",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 13
          },
          {
            "name": "生产结束时间",
            "key": "productionEndTime",
            "description": "生产结束时间",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 14
          },
          {
            "name": "移动类型",
            "key": "movementType",
            "description": "移动类型",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 16
          },
          {
            "name": "车间",
            "key": "workshops",
            "visible": true
          },
          {
            "name": "班组",
            "key": "productionTeams",
            "visible": true,
            "description": "支持多个班组"
          }
        ],
        "note": "",
        "reportTableId": "tb_kitchenProduction"
      },
      {
        "name": "央厨加工 · 原料收货子表",
        "mode": "table",
        "fields": [
          {
            "name": "收货单号",
            "key": "receiptCode",
            "description": "收货单号",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 17
          },
          {
            "name": "工厂名称",
            "key": "factoryName",
            "description": "工厂名称",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 18
          },
          {
            "name": "物料编码",
            "key": "itemCode",
            "description": "物料编码",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 19
          },
          {
            "name": "物料名称",
            "key": "itemName",
            "description": "物料名称",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 20
          },
          {
            "name": "物料批次",
            "key": "batchCode",
            "description": "物料批次",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 21
          },
          {
            "name": "到货数量",
            "key": "arrivalQuantity",
            "description": "到货数量",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 22
          },
          {
            "name": "收货数量",
            "key": "receivedQuantity",
            "description": "收货数量",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 23
          },
          {
            "name": "单位",
            "key": "unitName",
            "description": "单位",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 24
          },
          {
            "name": "供应商",
            "key": "supplierName",
            "description": "供应商",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 25
          },
          {
            "name": "生产商",
            "key": "producerName",
            "description": "生厂商",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 26
          },
          {
            "name": "收货时间",
            "key": "receiptTime",
            "description": "收货时间",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 27
          },
          {
            "name": "创建日期",
            "key": "createdDate",
            "description": "创建日期",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 28
          },
          {
            "name": "最后更新时间",
            "key": "lastUpdated",
            "description": "最后更新时间",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 29
          }
        ],
        "note": "",
        "reportTableId": "stb_rawMaterialReceipt"
      },
      {
        "name": "央厨加工 · 投料明细子表",
        "mode": "table",
        "fields": [
          {
            "name": "物料编码",
            "key": "itemCode",
            "description": "物料编码",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 30
          },
          {
            "name": "物料名称",
            "key": "itemName",
            "description": "物料名称",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 31
          },
          {
            "name": "类型",
            "key": "materialType",
            "description": "类型",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 32
          },
          {
            "name": "计划量",
            "key": "plannedQuantity",
            "description": "计划量",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 33
          },
          {
            "name": "报工量汇总",
            "key": "reportedQuantity",
            "description": "报工量汇总",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 34
          },
          {
            "name": "原料批次",
            "key": "rawMaterialBatchCode",
            "description": "原料批次",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 35
          },
          {
            "name": "报工明细",
            "key": "reportDetails",
            "description": "报工明细",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 36
          },
          {
            "name": "单位",
            "key": "unitName",
            "description": "单位",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 37
          },
          {
            "name": "供应商",
            "key": "supplierName",
            "description": "供应商",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 38
          },
          {
            "name": "生产商",
            "key": "producerName",
            "description": "生产商",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 39
          },
          {
            "name": "工单流水号",
            "key": "workOrderNo",
            "description": "工单流水号",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 40
          },
          {
            "name": "工序",
            "key": "processName",
            "description": "工序",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 41
          },
          {
            "name": "工序报告",
            "key": "processReport",
            "description": "工序报告",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 42
          },
          {
            "name": "更新时间",
            "key": "lastUpdated",
            "description": "更新时间",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 43
          },
          {
            "name": "附件地址",
            "key": "attachmentUrl",
            "description": "附件地址",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 44
          }
        ],
        "note": "",
        "reportTableId": "stb_materialInput"
      },
      {
        "name": "央厨加工 · 检测字段表",
        "mode": "table",
        "fields": [
          {
            "name": "检验申请单号",
            "key": "inspectionRequestNo",
            "description": "检验申请单号",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 45
          },
          {
            "name": "业务类型",
            "key": "businessType",
            "description": "业务类型",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 46
          },
          {
            "name": "检验结论",
            "key": "inspectionConclusion",
            "description": "检验结论",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 47
          },
          {
            "name": "检验时间",
            "key": "inspectionTime",
            "description": "检验时间",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 48
          },
          {
            "name": "序号",
            "key": "sequenceNo",
            "description": "序号",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 50
          },
          {
            "name": "检测项目",
            "key": "inspectionItem",
            "description": "检测项目",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 51
          },
          {
            "name": "检测分项",
            "key": "inspectionSubItem",
            "description": "检测分项",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 52
          },
          {
            "name": "计量单位",
            "key": "unitName",
            "description": "计量单位",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 53
          },
          {
            "name": "报出值",
            "key": "reportedValue",
            "description": "报出值",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 54
          },
          {
            "name": "合格范围",
            "key": "qualifiedRange",
            "description": "合格范围",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 55
          },
          {
            "name": "英文报出值",
            "key": "reportedValueEn",
            "description": "英文报出值",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 56
          },
          {
            "name": "结论",
            "key": "conclusion",
            "description": "结论",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 57
          },
          {
            "name": "附件",
            "key": "attachmentUrl",
            "description": "附件",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 58
          }
        ],
        "note": "",
        "reportTableId": "ftb_productionInspection"
      },
      {
        "name": "央厨加工 · 批检附件表",
        "mode": "table",
        "fields": [
          {
            "name": "文件名",
            "key": "fileName",
            "description": "文件名",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 59
          },
          {
            "name": "更新时间",
            "key": "lastUpdated",
            "description": "更新时间",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 60
          },
          {
            "name": "附件地址",
            "key": "attachmentUrl",
            "description": "附件地址",
            "sourceSheet": "央厨加工环节",
            "sourceRow": 61
          }
        ],
        "note": "",
        "reportTableId": "ftb_productionInspectionFile"
      },
      {
        "name": "大仓出库 · 大仓出库主表",
        "mode": "info",
        "fields": [
          {
            "name": "出库箱明细记录内部 ID",
            "key": "id",
            "description": "出库箱明细记录内部 ID，自增主键；原注释为“出库箱内部号”",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 3
          },
          {
            "name": "出库单号",
            "key": "shipmentCode",
            "description": "出库单号",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 4
          },
          {
            "name": "仓库编码",
            "key": "warehouseCode",
            "description": "仓库编码",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 5
          },
          {
            "name": "出库单内部 ID",
            "key": "shipmentId",
            "description": "出库单内部 ID",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 6
          },
          {
            "name": "出库单内部行号",
            "key": "shipmentDetailId",
            "description": "出库单内部行号，具体是否对应明细主键需确认",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 7
          },
          {
            "name": "货主编码",
            "key": "companyCode",
            "description": "货主编码",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 8
          },
          {
            "name": "货品编码",
            "key": "itemCode",
            "description": "货品编码",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 9
          },
          {
            "name": "货品名称",
            "key": "itemName",
            "description": "货品名称",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 10
          },
          {
            "name": "数量",
            "key": "quantity",
            "description": "数量，根据字段名推断；具体计量单位及业务口径未注明",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 11
          },
          {
            "name": "生产日期",
            "key": "manufactureDate",
            "description": "生产日期",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 12
          },
          {
            "name": "失效日期",
            "key": "expirationDate",
            "description": "失效日期",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 13
          },
          {
            "name": "入库日期",
            "key": "agingDate",
            "description": "入库日期",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 14
          },
          {
            "name": "库存状态",
            "key": "inventorySts",
            "description": "库存状态，具体枚举未提供",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 15
          },
          {
            "name": "创建时间",
            "key": "created",
            "description": "创建时间，默认当前时间",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 16
          },
          {
            "name": "创建用户",
            "key": "createdBy",
            "description": "创建用户",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 17
          },
          {
            "name": "最后更新时间",
            "key": "lastUpdated",
            "description": "最后更新时间，默认当前时间，并配置为记录更新时自动更新时间",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 18
          },
          {
            "name": "最后更新用户",
            "key": "lastUpdatedBy",
            "description": "最后更新用户；DDL 未配置自动填充规则",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 19
          },
          {
            "name": "关联入库单号",
            "key": "receiptCode",
            "description": "关联入库单号",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 20
          },
          {
            "name": "关联入库单内部 ID",
            "key": "receiptId",
            "description": "关联入库单内部 ID",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 21
          },
          {
            "name": "关联入库单明细内部 ID",
            "key": "receiptDetailId",
            "description": "关联入库单明细内部 ID",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 22
          },
          {
            "name": "单位",
            "key": "unitName",
            "description": "单位",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 23
          },
          {
            "name": "批次号",
            "key": "batchCode",
            "description": "批次号",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 25
          },
          {
            "name": "配送单号",
            "key": "deliveryOrderNo",
            "description": "贯穿大仓出库、物流配送和门店收货的配送单业务编号；与出库单号、发车单号分别保留，不设单列唯一索引。",
            "sourceSheet": "大仓出库环节",
            "sourceRow": 26
          }
        ],
        "note": "",
        "reportTableId": "tb_whOutboundRecord"
      },
      {
        "name": "物流配送 · 物流配送主表",
        "mode": "info",
        "fields": [
          {
            "name": "所属运输任务 ID",
            "key": "taskId",
            "description": "所属运输任务 ID",
            "sourceSheet": "物流配送环节",
            "sourceRow": 3
          },
          {
            "name": "关联订单 ID",
            "key": "orderId",
            "description": "关联订单 ID",
            "sourceSheet": "物流配送环节",
            "sourceRow": 4
          },
          {
            "name": "关联订单明细 ID",
            "key": "orderDetailId",
            "description": "关联订单明细 ID",
            "sourceSheet": "物流配送环节",
            "sourceRow": 5
          },
          {
            "name": "商品行号",
            "key": "lineNo",
            "description": "商品行号，字符串类型",
            "sourceSheet": "物流配送环节",
            "sourceRow": 6
          },
          {
            "name": "商品编码",
            "key": "itemCode",
            "description": "商品编码",
            "sourceSheet": "物流配送环节",
            "sourceRow": 7
          },
          {
            "name": "库存状态",
            "key": "inventoryStatus",
            "description": "库存状态，具体枚举未提供",
            "sourceSheet": "物流配送环节",
            "sourceRow": 8
          },
          {
            "name": "计划数量",
            "key": "planQty",
            "description": "计划数量",
            "sourceSheet": "物流配送环节",
            "sourceRow": 9
          },
          {
            "name": "实际数量",
            "key": "actQty",
            "description": "实际数量，具体指装载、发运还是其他环节需确认",
            "sourceSheet": "物流配送环节",
            "sourceRow": 10
          },
          {
            "name": "签收数量",
            "key": "signQty",
            "description": "签收数量",
            "sourceSheet": "物流配送环节",
            "sourceRow": 11
          },
          {
            "name": "揽收数量",
            "key": "collectQty",
            "description": "揽收数量",
            "sourceSheet": "物流配送环节",
            "sourceRow": 12
          },
          {
            "name": "拒收数量",
            "key": "rejectQty",
            "description": "拒收数量",
            "sourceSheet": "物流配送环节",
            "sourceRow": 13
          },
          {
            "name": "剩货数量",
            "key": "leftoverQty",
            "description": "剩货数量，具体业务口径需确认",
            "sourceSheet": "物流配送环节",
            "sourceRow": 14
          },
          {
            "name": "批次号",
            "key": "batchCode",
            "description": "批次号",
            "sourceSheet": "物流配送环节",
            "sourceRow": 15
          },
          {
            "name": "生产批号",
            "key": "produceCode",
            "description": "生产批号",
            "sourceSheet": "物流配送环节",
            "sourceRow": 16
          },
          {
            "name": "生产日期及时间",
            "key": "produceTimestamp",
            "description": "生产日期及时间",
            "sourceSheet": "物流配送环节",
            "sourceRow": 17
          },
          {
            "name": "过期日期及时间",
            "key": "expireTimestamp",
            "description": "过期日期及时间",
            "sourceSheet": "物流配送环节",
            "sourceRow": 18
          },
          {
            "name": "是否温控",
            "key": "temperatureFlag",
            "description": "是否温控，具体取值未提供",
            "sourceSheet": "物流配送环节",
            "sourceRow": 19
          },
          {
            "name": "最低温度",
            "key": "minTemperature",
            "description": "最低温度，温标及是否为要求值需确认",
            "sourceSheet": "物流配送环节",
            "sourceRow": 20
          },
          {
            "name": "最高温度",
            "key": "maxTemperature",
            "description": "最高温度，温标及是否为要求值需确认",
            "sourceSheet": "物流配送环节",
            "sourceRow": 21
          },
          {
            "name": "最低湿度",
            "key": "minHumidity",
            "description": "最低湿度，单位及业务口径未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 22
          },
          {
            "name": "最高湿度",
            "key": "maxHumidity",
            "description": "最高湿度，单位及业务口径未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 23
          },
          {
            "name": "商品名称",
            "key": "itemName",
            "description": "商品名称",
            "sourceSheet": "物流配送环节",
            "sourceRow": 24
          },
          {
            "name": "商品类别",
            "key": "itemClass",
            "description": "商品类别，存储编码还是名称未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 25
          },
          {
            "name": "库存记录 ID",
            "key": "invId",
            "description": "库存记录 ID",
            "sourceSheet": "物流配送环节",
            "sourceRow": 26
          },
          {
            "name": "创建时间",
            "key": "created",
            "description": "创建时间；实际配置了更新时自动更新时间，可能不保留最初创建时间",
            "sourceSheet": "物流配送环节",
            "sourceRow": 27
          },
          {
            "name": "创建用户",
            "key": "createdBy",
            "description": "创建用户",
            "sourceSheet": "物流配送环节",
            "sourceRow": 28
          },
          {
            "name": "最后更新时间",
            "key": "lastUpdated",
            "description": "最后更新时间，默认当前时间，并配置为记录更新时自动更新时间",
            "sourceSheet": "物流配送环节",
            "sourceRow": 29
          },
          {
            "name": "最后更新用户",
            "key": "lastUpdatedBy",
            "description": "最后更新用户，DDL 未配置自动填充规则",
            "sourceSheet": "物流配送环节",
            "sourceRow": 30
          },
          {
            "name": "删除标记",
            "key": "deleteFlag",
            "description": "删除标记：0＝正常，1＝删除；默认 0",
            "sourceSheet": "物流配送环节",
            "sourceRow": 31
          },
          {
            "name": "启用状态",
            "key": "status",
            "description": "启用状态：0＝未启用，1＝启用，2＝禁用；默认 1",
            "sourceSheet": "物流配送环节",
            "sourceRow": 32
          },
          {
            "name": "配送单号",
            "key": "deliveryOrderNo",
            "description": "贯穿大仓出库、物流配送和门店收货的配送单业务编号；与出库单号、发车单号分别保留，不设单列唯一索引。",
            "sourceSheet": "物流配送环节",
            "sourceRow": 33
          }
        ],
        "note": "",
        "reportTableId": "tb_distRecord"
      },
      {
        "name": "物流配送 · 配送温度子表",
        "mode": "table",
        "fields": [
          {
            "name": "发车单号",
            "key": "departCode",
            "description": "发车单号",
            "sourceSheet": "物流配送环节",
            "sourceRow": 34
          },
          {
            "name": "车牌号",
            "key": "carNumber",
            "description": "车牌号",
            "sourceSheet": "物流配送环节",
            "sourceRow": 35
          },
          {
            "name": "承运商",
            "key": "vendorCode",
            "description": "承运商，结合字段名推测为承运商编码",
            "sourceSheet": "物流配送环节",
            "sourceRow": 36
          },
          {
            "name": "线路",
            "key": "lineCode",
            "description": "线路，结合字段名推测为线路编码",
            "sourceSheet": "物流配送环节",
            "sourceRow": 37
          },
          {
            "name": "公司",
            "key": "clientCode",
            "description": "公司，结合字段名推测为公司编码",
            "sourceSheet": "物流配送环节",
            "sourceRow": 38
          },
          {
            "name": "基地",
            "key": "centerCode",
            "description": "基地，结合字段名推测为基地编码",
            "sourceSheet": "物流配送环节",
            "sourceRow": 39
          },
          {
            "name": "司机姓名",
            "key": "driverName",
            "description": "司机姓名",
            "sourceSheet": "物流配送环节",
            "sourceRow": 40
          },
          {
            "name": "司机联系电话",
            "key": "driverMobile",
            "description": "司机联系电话",
            "sourceSheet": "物流配送环节",
            "sourceRow": 41
          },
          {
            "name": "监测设备编号",
            "key": "deviceNo",
            "description": "监测设备编号",
            "sourceSheet": "物流配送环节",
            "sourceRow": 42
          },
          {
            "name": "发车时间",
            "key": "departTime",
            "description": "发车时间",
            "sourceSheet": "物流配送环节",
            "sourceRow": 43
          },
          {
            "name": "温度",
            "key": "temperature",
            "description": "温度，保留 2 位小数；温标未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 44
          },
          {
            "name": "湿度",
            "key": "humidity",
            "description": "湿度，保留 2 位小数；单位未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 45
          },
          {
            "name": "温度报警上限",
            "key": "upperLimit",
            "description": "温度报警上限",
            "sourceSheet": "物流配送环节",
            "sourceRow": 46
          },
          {
            "name": "温度报警下限",
            "key": "lowerLimit",
            "description": "温度报警下限",
            "sourceSheet": "物流配送环节",
            "sourceRow": 47
          },
          {
            "name": "湿度报警上限",
            "key": "hUpperLimit",
            "description": "湿度报警上限",
            "sourceSheet": "物流配送环节",
            "sourceRow": 48
          },
          {
            "name": "启用状态",
            "key": "status",
            "description": "启用状态：0＝未启用，1＝启用，2＝禁用；默认 0",
            "sourceSheet": "物流配送环节",
            "sourceRow": 49
          },
          {
            "name": "记录创建时间",
            "key": "created",
            "description": "记录创建时间，默认当前时间，允许为空",
            "sourceSheet": "物流配送环节",
            "sourceRow": 50
          },
          {
            "name": "湿度报警下限",
            "key": "hLowerLimit",
            "description": "湿度报警下限",
            "sourceSheet": "物流配送环节",
            "sourceRow": 51
          },
          {
            "name": "最后更新时间",
            "key": "lastUpdated",
            "description": "最后更新时间，默认当前时间，并配置为记录更新时自动更新时间；允许为空",
            "sourceSheet": "物流配送环节",
            "sourceRow": 52
          },
          {
            "name": "最后更新用户",
            "key": "lastUpdatedBy",
            "description": "最后更新用户，DDL 未配置自动填充规则",
            "sourceSheet": "物流配送环节",
            "sourceRow": 53
          }
        ],
        "note": "",
        "reportTableId": "stb_deliveryTemperature"
      },
      {
        "name": "物流配送 · 配送线路子表",
        "mode": "table",
        "fields": [
          {
            "name": "所属发车单 ID",
            "key": "departId",
            "description": "所属发车单 ID",
            "sourceSheet": "物流配送环节",
            "sourceRow": 54
          },
          {
            "name": "所属发车单号",
            "key": "departCode",
            "description": "所属发车单号",
            "sourceSheet": "物流配送环节",
            "sourceRow": 55
          },
          {
            "name": "车牌号",
            "key": "carNumber",
            "description": "车牌号",
            "sourceSheet": "物流配送环节",
            "sourceRow": 56
          },
          {
            "name": "配送模式",
            "key": "deliveryOrPick",
            "description": "配送模式，具体枚举未提供",
            "sourceSheet": "物流配送环节",
            "sourceRow": 57
          },
          {
            "name": "原始纬度",
            "key": "lat",
            "description": "原始纬度；原注释“维度”应为“纬度”，原始坐标系未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 58
          },
          {
            "name": "原始经度",
            "key": "lon",
            "description": "原始经度，原始坐标系未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 59
          },
          {
            "name": "百度坐标纬度",
            "key": "bd09_lat",
            "description": "百度坐标纬度，字段名表明使用 BD-09 坐标系",
            "sourceSheet": "物流配送环节",
            "sourceRow": 60
          },
          {
            "name": "百度坐标经度",
            "key": "bd09_lon",
            "description": "百度坐标经度，字段名表明使用 BD-09 坐标系",
            "sourceSheet": "物流配送环节",
            "sourceRow": 61
          },
          {
            "name": "相对于正北方向的夹角",
            "key": "agl",
            "description": "相对于正北方向的夹角；单位、旋转方向及取值范围未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 62
          },
          {
            "name": "GPS 时间",
            "key": "gtm",
            "description": "GPS 时间，用于标识定位点对应的时间",
            "sourceSheet": "物流配送环节",
            "sourceRow": 63
          },
          {
            "name": "创建人",
            "key": "createdBy",
            "description": "创建人，存储账号、ID 还是姓名未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 64
          },
          {
            "name": "最后更新时间",
            "key": "lastUpdated",
            "description": "最后更新时间，默认当前时间，并配置为记录更新时自动更新时间；允许为空",
            "sourceSheet": "物流配送环节",
            "sourceRow": 65
          },
          {
            "name": "最后更新者",
            "key": "lastUpdatedBy",
            "description": "最后更新者，DDL 未配置自动填充规则",
            "sourceSheet": "物流配送环节",
            "sourceRow": 66
          },
          {
            "name": "数据版本号",
            "key": "version",
            "description": "数据版本号，默认 NULL；是否用于并发控制需确认",
            "sourceSheet": "物流配送环节",
            "sourceRow": 67
          },
          {
            "name": "启用状态",
            "key": "status",
            "description": "启用状态：1＝启用，0＝未启用；默认 1",
            "sourceSheet": "物流配送环节",
            "sourceRow": 68
          },
          {
            "name": "地理位置",
            "key": "location",
            "description": "地理位置，长文本类型；存储地址文字还是结构化内容未注明",
            "sourceSheet": "物流配送环节",
            "sourceRow": 69
          }
        ],
        "note": "",
        "reportTableId": "stb_deliveryRoute"
      },
      {
        "name": "门店收货 · 门店收货主表",
        "mode": "info",
        "fields": [
          {
            "name": "收货单记录唯一标识",
            "key": "guid",
            "description": "收货单记录唯一标识，主键",
            "sourceSheet": "门店收货环节",
            "sourceRow": 3
          },
          {
            "name": "收货单号",
            "key": "purchase_code",
            "description": "收货单号",
            "sourceSheet": "门店收货环节",
            "sourceRow": 4
          },
          {
            "name": "收货日期",
            "key": "purchase_date",
            "description": "收货日期",
            "sourceSheet": "门店收货环节",
            "sourceRow": 5
          },
          {
            "name": "配销编码",
            "key": "dc_code",
            "description": "配销编码",
            "sourceSheet": "门店收货环节",
            "sourceRow": 6
          },
          {
            "name": "供货机构编码",
            "key": "supply_institution_code",
            "description": "供货机构编码",
            "sourceSheet": "门店收货环节",
            "sourceRow": 7
          },
          {
            "name": "送货类型",
            "key": "supply_delivery_type",
            "description": "送货类型：1＝直送，2＝代送",
            "sourceSheet": "门店收货环节",
            "sourceRow": 8
          },
          {
            "name": "门店编码",
            "key": "store_code",
            "description": "门店编码",
            "sourceSheet": "门店收货环节",
            "sourceRow": 9
          },
          {
            "name": "收货单确认状态",
            "key": "confirm_flag",
            "description": "收货单确认状态：1＝待确认，2＝已确认",
            "sourceSheet": "门店收货环节",
            "sourceRow": 10
          },
          {
            "name": "收货单确认人 ID",
            "key": "confirm_user",
            "description": "收货单确认人 ID",
            "sourceSheet": "门店收货环节",
            "sourceRow": 11
          },
          {
            "name": "收货单确认时间",
            "key": "confirm_time",
            "description": "收货单确认时间",
            "sourceSheet": "门店收货环节",
            "sourceRow": 12
          },
          {
            "name": "是否为盘点前收货",
            "key": "check_flag",
            "description": "是否为盘点前收货：1＝是，2＝不是",
            "sourceSheet": "门店收货环节",
            "sourceRow": 13
          },
          {
            "name": "采购订单号",
            "key": "purchase_order_no",
            "description": "采购订单号",
            "sourceSheet": "门店收货环节",
            "sourceRow": 14
          },
          {
            "name": "创建人 ID",
            "key": "create_id",
            "description": "创建人 ID",
            "sourceSheet": "门店收货环节",
            "sourceRow": 15
          },
          {
            "name": "创建时间",
            "key": "create_time",
            "description": "创建时间",
            "sourceSheet": "门店收货环节",
            "sourceRow": 16
          },
          {
            "name": "最后更新人 ID",
            "key": "update_id",
            "description": "最后更新人 ID",
            "sourceSheet": "门店收货环节",
            "sourceRow": 17
          },
          {
            "name": "最后更新时间",
            "key": "update_time",
            "description": "最后更新时间",
            "sourceSheet": "门店收货环节",
            "sourceRow": 18
          },
          {
            "name": "删除标识",
            "key": "del_flag",
            "description": "删除标识：N＝未删除，Y＝已删除",
            "sourceSheet": "门店收货环节",
            "sourceRow": 19
          },
          {
            "name": "发货日期及时间",
            "key": "ship_date",
            "description": "发货日期及时间",
            "sourceSheet": "门店收货环节",
            "sourceRow": 20
          },
          {
            "name": "订单下发渠道",
            "key": "channel",
            "description": "订单下发渠道：1＝SAP，2＝SRM，3＝WMS，4＝TMS",
            "sourceSheet": "门店收货环节",
            "sourceRow": 21
          },
          {
            "name": "TMS 配送方式",
            "key": "tms_delivery_type",
            "description": "TMS 配送方式：ZC＝整车，ZT＝自提，KD＝快递",
            "sourceSheet": "门店收货环节",
            "sourceRow": 22
          },
          {
            "name": "TMS 车辆状态",
            "key": "tms_car_status",
            "description": "TMS 车辆状态：1＝已发车，2＝已抵达",
            "sourceSheet": "门店收货环节",
            "sourceRow": 23
          },
          {
            "name": "TMS 单据评价状态",
            "key": "tms_evalution_status",
            "description": "TMS 单据评价状态：1＝已评价，0＝待评价，-1＝超时未评",
            "sourceSheet": "门店收货环节",
            "sourceRow": 24
          },
          {
            "name": "WMS 同步的订单配送方式",
            "key": "delivery_type",
            "description": "WMS 同步的订单配送方式，具体枚举未提供",
            "sourceSheet": "门店收货环节",
            "sourceRow": 25
          },
          {
            "name": "收货确认渠道",
            "key": "confirm_channel",
            "description": "收货确认渠道：0＝PC 端，1＝钉钉端，2＝定时任务系统自动，3＝APP 手动收货，4＝APP-RFID 扫描自动收货，5＝加盟确认",
            "sourceSheet": "门店收货环节",
            "sourceRow": 26
          },
          {
            "name": "配送单号",
            "key": "delivery_order_no",
            "description": "贯穿大仓出库、物流配送和门店收货的配送单业务编号；与出库单号、发车单号分别保留，不设单列唯一索引。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 27
          }
        ],
        "note": "",
        "reportTableId": "tb_storeRecvRecord"
      },
      {
        "name": "门店收货 · 收货明细子表",
        "mode": "table",
        "fields": [
          {
            "name": "收货明细记录唯一标识",
            "key": "guid",
            "description": "收货明细记录唯一标识，主键",
            "sourceSheet": "门店收货环节",
            "sourceRow": 28
          },
          {
            "name": "所属收货单号",
            "key": "purchase_code",
            "description": "所属收货单号",
            "sourceSheet": "门店收货环节",
            "sourceRow": 29
          },
          {
            "name": "收货门店编码",
            "key": "store_code",
            "description": "收货门店编码",
            "sourceSheet": "门店收货环节",
            "sourceRow": 30
          },
          {
            "name": "货品编码",
            "key": "merchandise_code",
            "description": "货品编码",
            "sourceSheet": "门店收货环节",
            "sourceRow": 31
          },
          {
            "name": "应收数量",
            "key": "receivable_quantity",
            "description": "应收数量，最多保留 4 位小数",
            "sourceSheet": "门店收货环节",
            "sourceRow": 32
          },
          {
            "name": "实收数量",
            "key": "received_quantity",
            "description": "实收数量，最多保留 4 位小数",
            "sourceSheet": "门店收货环节",
            "sourceRow": 33
          },
          {
            "name": "收货差异数量",
            "key": "difference_quantity",
            "description": "收货差异数量，最多保留 4 位小数；计算方向未注明",
            "sourceSheet": "门店收货环节",
            "sourceRow": 34
          },
          {
            "name": "收货计量单位编码",
            "key": "purchase_unit_code",
            "description": "收货计量单位编码",
            "sourceSheet": "门店收货环节",
            "sourceRow": 35
          },
          {
            "name": "生产日期",
            "key": "make_date",
            "description": "生产日期",
            "sourceSheet": "门店收货环节",
            "sourceRow": 36
          },
          {
            "name": "保质期天数",
            "key": "life_days",
            "description": "保质期天数",
            "sourceSheet": "门店收货环节",
            "sourceRow": 37
          },
          {
            "name": "货品批次号",
            "key": "batch_code",
            "description": "货品批次号",
            "sourceSheet": "门店收货环节",
            "sourceRow": 38
          },
          {
            "name": "明细排序号",
            "key": "seq_id",
            "description": "明细排序号",
            "sourceSheet": "门店收货环节",
            "sourceRow": 39
          },
          {
            "name": "对应采购订单行号",
            "key": "purchase_order_seq_id",
            "description": "对应采购订单行号",
            "sourceSheet": "门店收货环节",
            "sourceRow": 40
          },
          {
            "name": "创建人 ID",
            "key": "create_id",
            "description": "创建人 ID",
            "sourceSheet": "门店收货环节",
            "sourceRow": 41
          },
          {
            "name": "创建时间",
            "key": "create_time",
            "description": "创建时间",
            "sourceSheet": "门店收货环节",
            "sourceRow": 42
          },
          {
            "name": "最后更新人 ID",
            "key": "update_id",
            "description": "最后更新人 ID",
            "sourceSheet": "门店收货环节",
            "sourceRow": 43
          },
          {
            "name": "最后更新时间",
            "key": "update_time",
            "description": "最后更新时间",
            "sourceSheet": "门店收货环节",
            "sourceRow": 44
          },
          {
            "name": "删除标识",
            "key": "del_flag",
            "description": "删除标识：N＝未删除，Y＝已删除",
            "sourceSheet": "门店收货环节",
            "sourceRow": 45
          },
          {
            "name": "当前货品行对应的物料采购订单号",
            "key": "purchase_orde_no",
            "description": "当前货品行对应的物料采购订单号；支持一张交货单对应多个采购订单",
            "sourceSheet": "门店收货环节",
            "sourceRow": 46
          },
          {
            "name": "价格单位编码",
            "key": "price_unit_code",
            "description": "价格单位编码",
            "sourceSheet": "门店收货环节",
            "sourceRow": 47
          },
          {
            "name": "供应商编码",
            "key": "supplier",
            "description": "供应商编码",
            "sourceSheet": "门店收货环节",
            "sourceRow": 48
          },
          {
            "name": "供应商名称",
            "key": "supplier_name",
            "description": "供应商名称",
            "sourceSheet": "门店收货环节",
            "sourceRow": 49
          },
          {
            "name": "生产商名称",
            "key": "producerName",
            "description": "生产商名称",
            "sourceSheet": "门店收货环节",
            "sourceRow": 50
          }
        ],
        "note": "",
        "reportTableId": "stb_storeReceiptDetail"
      },
      {
        "name": "门店收货 · 关联退货子表",
        "mode": "table",
        "fields": [
          {
            "name": "退货门店",
            "key": "store_code",
            "description": "退货门店编码，与门店收货主表store_code口径一致；编码映射待确认。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 51
          },
          {
            "name": "所属退货单号",
            "key": "return_code",
            "description": "所属退货单业务编号；一张退货单可包含多条货品明细，不设单列唯一索引。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 52
          },
          {
            "name": "货品编码",
            "key": "merchandise_code",
            "description": "退货货品编码，与收货明细merchandise_code口径一致。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 53
          },
          {
            "name": "发货仓编码",
            "key": "warehouse_code",
            "description": "原配送发货仓编码；是否指原发货仓或退货接收仓需确认。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 54
          },
          {
            "name": "发货仓名称",
            "key": "warehouse_name",
            "description": "发货仓名称，与发货仓编码对应。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 55
          },
          {
            "name": "实际退货数量（最多保留 4 位小数）",
            "key": "returned_quantity",
            "description": "实际退货数量，最多保留4位小数；单位与退货计量字段一致。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 56
          },
          {
            "name": "退货计量",
            "key": "return_unit_code",
            "description": "建议存储退货计量单位编码，单位字典及换算规则待确认。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 57
          },
          {
            "name": "货品生产日期",
            "key": "make_date",
            "description": "退货货品生产日期，与收货明细make_date对应。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 58
          },
          {
            "name": "关联的收货单号",
            "key": "purchase_code",
            "description": "关联门店收货主表purchase_code；建议结合store_code定位收货单，结合货品编码及批次定位明细，唯一粒度待确认。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 59
          },
          {
            "name": "货品批次号",
            "key": "batch_code",
            "description": "退货货品批次号，与收货明细batch_code对应。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 60
          },
          {
            "name": "退货原因（描述）",
            "key": "return_reason",
            "description": "退货原因文字描述。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 61
          },
          {
            "name": "门店备注",
            "key": "store_remark",
            "description": "门店填写的退货补充说明。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 62
          },
          {
            "name": "创建时间",
            "key": "create_time",
            "description": "退货记录创建时间，建议精确到秒，以源系统时间为准。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 63
          },
          {
            "name": "供应商",
            "key": "supplier",
            "description": "建议存储供应商编码，与收货明细supplier口径一致；编码或名称口径待确认。",
            "sourceSheet": "门店收货环节",
            "sourceRow": 64
          }
        ],
        "note": "",
        "reportTableId": "stb_storeReturnDetail"
      }
    ],
    "actions": [
      {
        "name": "溯源报告",
        "description": "新打开详情页面",
        "note": "/"
      }
    ],
    "form": [],
    "rules": [],
    "description": "\"菜品溯源报告查询\"功能旨在支持对门店收货的原料生成溯源报告，并基于当前门店可通过bom生成哪些pos拥有的菜品，并生成菜品溯源报告。",
    "uiActions": [
      "查看"
    ],
    "detailMode": "page",
    "reportSchemaVersion": "chain-20261013-be58622782e2"
  },
  {
    "id": "public-report",
    "group": "溯源报告查询中心",
    "name": "消费者溯源报告",
    "kind": "consumer-report",
    "sourceRange": [
      96,
      122
    ],
    "filters": [
      {
        "name": "报告状态",
        "type": "下拉列表",
        "match": "精准查询"
      },
      {
        "name": "消费者溯源报告编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "菜品名称",
        "type": "input",
        "default": "/",
        "match": "下拉列表模糊查询"
      },
      {
        "name": "菜品编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "菜品类型",
        "type": "下拉列表",
        "default": "套餐/非套餐",
        "match": "精准查询"
      },
      {
        "name": "门店编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "门店名称",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "消费者模板编码",
        "type": "",
        "default": "",
        "match": ""
      },
      {
        "name": "消费者模板版本",
        "type": "",
        "default": "",
        "match": ""
      },
      {
        "name": "关联原料溯源报告编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "关联菜品溯源报告编码",
        "type": "",
        "default": "",
        "match": ""
      },
      {
        "name": "创建时间",
        "type": "时间段",
        "default": "",
        "match": ""
      },
      {
        "name": "原料编码",
        "type": "input",
        "match": "精准查询"
      },
      {
        "name": "原料名称",
        "type": "input",
        "match": "模糊查询"
      },
      {
        "name": "原料批次号",
        "type": "input",
        "match": "精准查询"
      },
      {
        "name": "供应商编码",
        "type": "input",
        "match": "精准查询"
      },
      {
        "name": "供应商名称",
        "type": "input",
        "match": "模糊查询"
      },
      {
        "name": "门店收货时间",
        "type": "时间段",
        "match": "精准查询"
      }
    ],
    "columns": [
      {
        "name": "消费者溯源报告编码",
        "description": "",
        "note": ""
      },
      {
        "name": "菜品名称",
        "description": "",
        "note": ""
      },
      {
        "name": "报告状态"
      },
      {
        "name": "菜品编码",
        "description": "",
        "note": ""
      },
      {
        "name": "菜品类型",
        "description": "",
        "note": ""
      },
      {
        "name": "门店编码",
        "description": "",
        "note": ""
      },
      {
        "name": "门店名称",
        "description": "",
        "note": ""
      },
      {
        "name": "关联原料数量",
        "description": "",
        "note": ""
      },
      {
        "name": "消费者模板编码",
        "description": "",
        "note": ""
      },
      {
        "name": "消费者模板版本",
        "description": "",
        "note": ""
      },
      {
        "name": "关联菜品溯源报告编码",
        "description": "#菜品名称-#菜品编码",
        "note": "可能多个，逗号隔开"
      },
      {
        "name": "创建时间",
        "description": "yyyy-mm-dd hh:mm:ss",
        "note": ""
      },
      {
        "name": "更新时间",
        "description": "yyyy-mm-dd hh:mm:ss",
        "note": ""
      },
      {
        "name": "更新人",
        "description": "usename",
        "note": ""
      },
      {
        "name": "操作",
        "description": "详情/重新生成/二维码",
        "note": "二维码操作根据小程序开发方式待定"
      },
      {
        "name": "原料编码"
      },
      {
        "name": "生产日期"
      },
      {
        "name": "供应商名称"
      }
    ],
    "tabs": [
      {
        "name": "报告链路信息",
        "mode": "info",
        "fields": [
          {
            "name": "关联原料报告编码"
          },
          {
            "name": "原料名称"
          },
          {
            "name": "原料编码"
          },
          {
            "name": "生产日期"
          },
          {
            "name": "供应商名称"
          },
          {
            "name": "供应商编码"
          },
          {
            "name": "消费者报告编码"
          },
          {
            "name": "关联菜品报告编码"
          },
          {
            "name": "最近更新人"
          },
          {
            "name": "最近更新时间"
          }
        ],
        "note": ""
      },
      {
        "name": "详细报告",
        "mode": "info",
        "fields": [
          {
            "name": "菜品名称"
          },
          {
            "name": "种类"
          },
          {
            "name": "检测次数"
          },
          {
            "name": "产地"
          },
          {
            "name": "检验结果"
          },
          {
            "name": "加工日期"
          },
          {
            "name": "菜品图片"
          },
          {
            "name": "供应商出厂检验报告"
          },
          {
            "name": "大仓收货检验报告"
          },
          {
            "name": "产品型式检验报告"
          },
          {
            "name": "产品风险检验报告"
          },
          {
            "name": "最高数"
          },
          {
            "name": "最低数"
          },
          {
            "name": "平均数"
          },
          {
            "name": "验收日期"
          },
          {
            "name": "验收结果"
          },
          {
            "name": "保质期天数"
          },
          {
            "name": "温度检测"
          },
          {
            "name": "观感检测"
          },
          {
            "name": "检测时间"
          },
          {
            "name": "检测项"
          },
          {
            "name": "标准限值"
          },
          {
            "name": "检测值"
          },
          {
            "name": "检测结果"
          },
          {
            "name": "金属探测校准"
          },
          {
            "name": "加工现场视频"
          },
          {
            "name": "原材料"
          },
          {
            "name": "保质期"
          },
          {
            "name": "原料验收"
          },
          {
            "name": "质检员"
          }
        ],
        "note": ""
      },
      {
        "name": "菜品暂存",
        "mode": "table",
        "fields": [
          {
            "name": "序号"
          },
          {
            "name": "规格"
          },
          {
            "name": "原料长编码"
          },
          {
            "name": "原料名称"
          },
          {
            "name": "体积（m³）"
          },
          {
            "name": "批次"
          },
          {
            "name": "计划调拨数"
          },
          {
            "name": "已出库数量"
          },
          {
            "name": "已入库数量"
          },
          {
            "name": "关联入库结果单"
          },
          {
            "name": "关联出库结果单"
          },
          {
            "name": "生产日期"
          },
          {
            "name": "到期日期"
          },
          {
            "name": "重量（kg）"
          }
        ],
        "note": ""
      },
      {
        "name": "温度与熔断",
        "mode": "table",
        "fields": [
          {
            "name": "采集时间"
          },
          {
            "name": "温度"
          },
          {
            "name": "菜品暂存温度"
          },
          {
            "name": "食材存放温度"
          },
          {
            "name": "存储温度"
          },
          {
            "name": "到店配送温度"
          },
          {
            "name": "熔断状态"
          }
        ],
        "note": ""
      },
      {
        "name": "健康证",
        "mode": "table",
        "fields": [
          {
            "name": "员工编码"
          },
          {
            "name": "员工姓名"
          },
          {
            "name": "门店编码"
          },
          {
            "name": "健康证到期日期"
          },
          {
            "name": "健康证图片"
          }
        ],
        "note": ""
      }
    ],
    "actions": [
      {
        "name": "详情",
        "description": "新打开详情页面",
        "note": "/"
      },
      {
        "name": "重新生成",
        "description": "需二次确认，重新生成后浮层提示",
        "note": "支持按照报告关联的显示模板和版本重新生成报告，报告重新生成记录操作人和操作时间作为最近更新人、最近更新时间"
      },
      {
        "name": "二维码",
        "description": "点击查看二维码浮层，扫码可查看此单一菜品的溯源报告",
        "note": "原二维码按钮，点击后展示报告二维码，用户扫描二维码即可进入消费者小程序查看报告"
      },
      {
        "name": "关闭溯源报告",
        "description": "支持单条和跨页多选批量关闭，确认后消费者不可查看，重新生成不自动开启。"
      }
    ],
    "form": [],
    "rules": [
      "按条件查询后支持本页多选、跨页多选及全部筛选结果选择；查询变更清空已选，确认关闭前固定报告清单。",
      "批量关闭需确认报告、菜品、门店范围并填写原因；不影响未选记录及未来新报告，重新生成不自动恢复。"
    ],
    "description": "\"消费者溯源报告\"功能旨在如对门店下的菜品配置了对应的溯源模板（原料溯源模板、消费者溯源模板），并生成溯源报告后，会在此处自动生成消费者溯源报告，用户可查看消费者查看的数据内容与数据熔断情况",
    "uiActions": [
      "查看",
      "重新生成",
      "二维码",
      "关闭溯源报告"
    ],
    "detailMode": "page"
  },
  {
    "id": "complaint",
    "group": "食安事务管理",
    "name": "客诉管理",
    "kind": "readonly",
    "sourceRange": [
      125,
      143
    ],
    "filters": [
      {
        "name": "投诉日期",
        "type": "时间段",
        "default": "近30天",
        "match": "闭区间查询"
      },
      {
        "name": "投诉渠道",
        "type": "下拉列表",
        "default": "全部",
        "match": "按源系统渠道值查询"
      },
      {
        "name": "是否食安事件",
        "type": "下拉列表",
        "default": "全部",
        "match": "精确查询"
      },
      {
        "name": "一级分类/二级分类/三级分类",
        "type": "级联下拉列表",
        "default": "全部",
        "match": "按客诉分类查询"
      },
      {
        "name": "门店编码/门店名称",
        "type": "输入框",
        "default": "/",
        "match": "编码精确、名称模糊查询"
      },
      {
        "name": "投诉内容",
        "type": "输入框",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "处理人/负责人姓名",
        "type": "输入框",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "会员订单编码/POS订单编码",
        "type": "输入框",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "是否删除",
        "type": "下拉列表",
        "default": "否",
        "match": "默认只查有效数据"
      }
    ],
    "columns": [
      {
        "name": "门店编码",
        "description": "建议保留",
        "note": "门店定位与溯源反查的核心标识"
      },
      {
        "name": "门店名称",
        "description": "建议保留",
        "note": "门店展示名称，与编码配合定位"
      },
      {
        "name": "门店负责人",
        "description": "建议保留",
        "note": "门店责任人，客诉责任定位与跟进联系人"
      },
      {
        "name": "订单菜品",
        "description": "建议保留",
        "note": "投诉涉及菜品清单，客诉→菜品→批次溯源联动的核心字段"
      },
      {
        "name": "就餐方式",
        "description": "建议保留",
        "note": "堂食/外卖/外带场景判断，影响溯源核查路径"
      },
      {
        "name": "关联菜品溯源报告",
        "description": "",
        "note": ""
      },
      {
        "name": "关联原料溯源报告",
        "description": "",
        "note": ""
      },
      {
        "name": "投诉渠道",
        "description": "建议保留",
        "note": "渠道分布分析的核心维度"
      },
      {
        "name": "评分",
        "description": "建议保留",
        "note": "顾客满意度量化，趋势分析核心"
      },
      {
        "name": "投诉日期",
        "description": "建议保留",
        "note": "时间轴与趋势分析核心"
      },
      {
        "name": "时间",
        "description": "建议保留",
        "note": "投诉发生的精确时间点"
      },
      {
        "name": "投诉内容",
        "description": "建议保留",
        "note": "客诉核心内容，分析的第一信息源"
      },
      {
        "name": "涉及金额",
        "description": "源客诉涉及金额，单位：元",
        "note": ""
      },
      {
        "name": "处理反馈",
        "description": "源客诉处理反馈",
        "note": ""
      },
      {
        "name": "日报日期",
        "description": "客诉纳入日报的日期",
        "note": ""
      },
      {
        "name": "是否食安事件",
        "description": "食安人员人工判定：是/否；未判定显示待判定",
        "note": ""
      },
      {
        "name": "食安事件责任方",
        "description": "食安人员下拉选择责任归属，不根据投诉内容自动推断",
        "note": ""
      },
      {
        "name": "一级分类",
        "description": "建议保留",
        "note": "分类统计一级维度"
      },
      {
        "name": "二级分类",
        "description": "建议保留",
        "note": "分类统计二级维度"
      },
      {
        "name": "三级分类",
        "description": "建议保留",
        "note": "含“原材料质量”等与溯源直接相关的细分类"
      },
      {
        "name": "营运区域",
        "description": "建议保留",
        "note": "区域维度统计分析"
      },
      {
        "name": "城市",
        "description": "建议保留",
        "note": "城市维度统计分析"
      },
      {
        "name": "差评涉及菜品",
        "description": "建议保留",
        "note": "与订单菜品互补，明确差评对应的责任菜品"
      }
    ],
    "tabs": [
      {
        "name": "食安备注",
        "mode": "remark",
        "fields": [
          {
            "name": "食安备注"
          }
        ],
        "note": ""
      },
      {
        "name": "源系统其他字段",
        "mode": "table",
        "fields": [],
        "note": "PRD 提及43个源字段但未附完整清单。已列明字段全部保留，其余源字段待客户提供；不推断隐私字段。"
      }
    ],
    "actions": [
      {
        "name": "查看详情",
        "description": "展示单条客诉全部字段、投诉内容与处理信息",
        "note": "源系统字段只读"
      },
      {
        "name": "食安事件发送",
        "description": "人工判定食安事件、选择责任方后，发送至对应责任系统或原客诉工单",
        "note": "本地模拟发送并留存记录"
      }
    ],
    "form": [],
    "rules": [
      "（1）平台定位为拉取数据、不造数据：具体需要拉取的分类需要业务部门确认",
      "（2）涉及金额按源客诉同步展示，单位为元；客户姓名、投诉人电话等未定义字段不推断。",
      "（3）客诉与突发事件为平行关系，双方数据尚未通过编号关联，页面按未关联处理、不推断关联关系。",
      "（4）食安判定与责任归属由食安人员维护；仅食安事件且明确责任方和责任单位后可发送。当前原型仅模拟发送并保留本地记录。"
    ],
    "description": "同步客诉与处理反馈，支持食安人员人工判定事件、定位责任归属，并发送至对应责任系统或原客诉工单。",
    "uiActions": [
      "查看",
      "食安事件发送"
    ],
    "detailMode": "drawer"
  },
  {
    "id": "event",
    "group": "食安事务管理",
    "name": "突发事件管理",
    "kind": "readonly",
    "sourceRange": [
      143,
      161
    ],
    "filters": [
      {
        "name": "事件编号",
        "type": "输入框",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "事件名称",
        "type": "输入框",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "事件类型",
        "type": "下拉列表",
        "default": "全部",
        "match": "按源系统事件类型查询"
      },
      {
        "name": "发生时间",
        "type": "时间段",
        "default": "/",
        "match": "闭区间查询"
      },
      {
        "name": "所属门店",
        "type": "输入框",
        "default": "/",
        "match": "模糊查询"
      }
    ],
    "columns": [
      {
        "name": "事件编号",
        "description": "建议保留",
        "note": "事件唯一标识，详情入口"
      },
      {
        "name": "事件名称",
        "description": "建议保留",
        "note": "事件摘要展示"
      },
      {
        "name": "事件类型",
        "description": "建议保留",
        "note": "分类统计维度（上报类型可信度有限，仅作参考）"
      },
      {
        "name": "事件等级",
        "description": "建议保留",
        "note": "分级统计与处置优先级判断"
      },
      {
        "name": "发生时间",
        "description": "建议保留",
        "note": "时间轴与趋势分析"
      },
      {
        "name": "所属门店",
        "description": "建议保留",
        "note": "门店定位与溯源关联"
      },
      {
        "name": "上报人",
        "description": "建议保留",
        "note": "事件发起人，跟进联系线索"
      },
      {
        "name": "任务中心状态",
        "description": "建议保留",
        "note": "进行中/待审批/任务完成，处置进展跟踪核心，经确认全量拉取"
      },
      {
        "name": "附件标记",
        "description": "建议保留",
        "note": "提示该事件是否带证据附件"
      }
    ],
    "tabs": [
      {
        "name": "基本信息",
        "mode": "info",
        "fields": [
          {
            "name": "事件编号"
          },
          {
            "name": "事件名称"
          },
          {
            "name": "事件类型"
          },
          {
            "name": "事件等级"
          }
        ],
        "note": ""
      },
      {
        "name": "基本信息",
        "mode": "info",
        "fields": [
          {
            "name": "发生时间"
          },
          {
            "name": "发生地点/所属门店"
          }
        ],
        "note": ""
      },
      {
        "name": "基本信息",
        "mode": "info",
        "fields": [
          {
            "name": "事件描述"
          },
          {
            "name": "上报人"
          },
          {
            "name": "联系方式"
          },
          {
            "name": "创建时间"
          }
        ],
        "note": ""
      },
      {
        "name": "物料详情",
        "mode": "table",
        "fields": [
          {
            "name": "物料编码"
          },
          {
            "name": "物料名称"
          }
        ],
        "note": ""
      },
      {
        "name": "物料详情",
        "mode": "table",
        "fields": [
          {
            "name": "批次号"
          }
        ],
        "note": ""
      },
      {
        "name": "物料详情",
        "mode": "table",
        "fields": [
          {
            "name": "数量"
          },
          {
            "name": "供应商"
          },
          {
            "name": "处理方式"
          }
        ],
        "note": ""
      },
      {
        "name": "任务相关人",
        "mode": "table",
        "fields": [
          {
            "name": "姓名"
          },
          {
            "name": "所属部门"
          },
          {
            "name": "角色"
          }
        ],
        "note": ""
      },
      {
        "name": "任务相关人",
        "mode": "table",
        "fields": [
          {
            "name": "任务状态（进行中/待审批/任务完成）"
          }
        ],
        "note": ""
      },
      {
        "name": "任务相关人",
        "mode": "table",
        "fields": [
          {
            "name": "审批流转记录"
          }
        ],
        "note": ""
      },
      {
        "name": "附件",
        "mode": "table",
        "fields": [
          {
            "name": "图片/文件列表"
          }
        ],
        "note": ""
      },
      {
        "name": "事件留言",
        "mode": "table",
        "fields": [
          {
            "name": "留言人"
          },
          {
            "name": "留言时间"
          },
          {
            "name": "留言内容"
          }
        ],
        "note": "展示钉钉任务中心留言，按时间正序排列。"
      }
    ],
    "actions": [
      {
        "name": "查看详情",
        "description": "展示事件全部字段与附件",
        "note": "源系统字段只读"
      }
    ],
    "form": [],
    "rules": [
      "（1）任务中心数据拉取范围需要确认，是否基于当前任务关联人员有食安人员，还是按照任务类型拉取"
    ],
    "description": "“突发事件记录”页面，包含查询条件、事件列表与事件详情。",
    "uiActions": [
      "查看"
    ],
    "detailMode": "drawer"
  },
  {
    "id": "knowledge",
    "group": "食安事务管理",
    "name": "法规知识库 / 风险评估",
    "kind": "knowledge",
    "sourceRange": [
      161,
      183
    ],
    "filters": [
      {
        "name": "文档名称关键词",
        "type": "文本输入",
        "default": "空",
        "match": "模糊匹配文档名称与文档说明"
      },
      {
        "name": "文档分类",
        "type": "下拉单选",
        "default": "全部",
        "match": "精确匹配；分类项由客户自行定义与维护"
      },
      {
        "name": "文件格式",
        "type": "下拉单选",
        "default": "全部",
        "match": "精确匹配；按上传文件自动识别"
      },
      {
        "name": "上传时间",
        "type": "日期区间",
        "default": "空",
        "match": "按上传时间区间筛选"
      }
    ],
    "columns": [
      {
        "name": "文档名称",
        "description": "上传时填写，必填",
        "note": "点击文档名称进入在线预览"
      },
      {
        "name": "文档分类",
        "description": "上传时选择",
        "note": "分类项由客户自行定义与维护"
      },
      {
        "name": "文件格式",
        "description": "系统按上传文件自动识别（PDF/Word/Excel/图片等）",
        "note": "只读"
      },
      {
        "name": "文件大小",
        "description": "系统自动获取",
        "note": "只读"
      },
      {
        "name": "文档说明",
        "description": "上传时选填，用于摘要描述",
        "note": "检索关键词匹配范围包含本字段"
      },
      {
        "name": "上传人",
        "description": "系统自动记录首次上传账号",
        "note": "只读"
      },
      {
        "name": "上传时间",
        "description": "系统自动记录",
        "note": "只读"
      },
      {
        "name": "最后更新人 / 更新时间",
        "description": "文档被修改时刷新",
        "note": "只读；未被修改时为空"
      }
    ],
    "tabs": [],
    "actions": [
      {
        "name": "新增（上传）",
        "description": "点击“上传文档”打开弹窗，填写文档名称、选择文档分类、选填文档说明并选择本地文件后提交；支持一次选择多份文件批量上传",
        "note": "上传中的文档先展示为“上传中”，完成后进入列表"
      },
      {
        "name": "查看",
        "description": "点击文档名称在线预览",
        "note": "不支持预览的格式提示改用下载查看；预览为只读，不改动原文件"
      },
      {
        "name": "下载",
        "description": "列表操作列点击“下载”，将文档下载到本地",
        "note": "按单份文档下载"
      },
      {
        "name": "修改",
        "description": "点击“编辑”，可修改文档名称、文档分类、文档说明，并支持替换文件，保存后刷新最后更新人与更新时间",
        "note": "替换文件后原文件不再保留，平台不提供历史版本"
      },
      {
        "name": "删除",
        "description": "点击“删除”，二次确认后删除文档",
        "note": "删除后不可恢复，列表中不再展示"
      }
    ],
    "form": [
      {
        "name": "文档名称"
      },
      {
        "name": "文档分类"
      },
      {
        "name": "文档说明"
      }
    ],
    "rules": [
      "（1）入口点击后在新窗口打开目标系统，登录与使用由外部平台完成。",
      "（2）知识库内容由客户上传与维护，平台提供分类与检索承载。",
      "（3）知识库面向食安部门使用,具备食安角色的用户可查看、下载与上传文档；修改与删除限上传人本人及知识库管理员，避免多人随意变更已沉淀的内容。文档修改采用直接替换方式，平台不保留历史版本、不提供版本回滚；删除需二次确认，删除后不可恢复。"
    ],
    "description": "法规知识库与风险评估包含两部分：一是面向食安部门的自建知识库，内容由客户自行上传与维护，平台提供分类承载、检索与下载；二是外部系统跳转入口，法规知识库与风险评估界面与数据不在平台承载，仅在平台内提供跳转入口，用户点击后在新窗口打开对应系统。跳转地址待客户提供，地址确认前入口按待配置状态展示。",
    "uiActions": [
      "查看",
      "下载",
      "编辑",
      "删除"
    ],
    "detailMode": "drawer"
  },
  {
    "id": "inspection",
    "group": "食安事务管理",
    "name": "巡检管理",
    "kind": "readonly",
    "sourceRange": [
      183,
      221
    ],
    "filters": [
      {
        "name": "表单类型",
        "type": "多选下拉列表",
        "default": "全部/已纳入范围表单",
        "match": "多选查询"
      },
      {
        "name": "门店/组织",
        "type": "可搜索下拉列表",
        "default": "/",
        "match": "按授权范围查询"
      },
      {
        "name": "检视日期",
        "type": "时间段",
        "default": "/",
        "match": "闭区间查询"
      },
      {
        "name": "检视结果",
        "type": "下拉列表",
        "default": "全部",
        "match": "按源系统结果值查询"
      },
      {
        "name": "是否含不合格项",
        "type": "下拉列表",
        "default": "全部",
        "match": "过滤存在不合格检查项的记录"
      },
      {
        "name": "状态",
        "type": "下拉列表",
        "default": "全部",
        "match": "门店已确认/待审核"
      },
      {
        "name": "整改状态",
        "type": "下拉列表",
        "default": "全部",
        "match": "按整改与复核进展查询"
      }
    ],
    "columns": [
      {
        "name": "检视单号",
        "description": "源系统检视记录标识",
        "note": "详情入口"
      },
      {
        "name": "表单类型",
        "description": "所属巡检表单的类型",
        "note": "列表筛选字段，支持多选"
      },
      {
        "name": "使用角色/检视主体",
        "description": "该表单对应的检视角色或执行主体",
        "note": "不同表单可按角色区分"
      },
      {
        "name": "门店",
        "description": "被检视门店或组织",
        "note": "带出所属营运区域"
      },
      {
        "name": "检视单元/范围",
        "description": "本次检视的单元划分",
        "note": "以源系统字段为准"
      },
      {
        "name": "检视日期",
        "description": "实际检视发生时间",
        "note": "不等同于上传时间"
      },
      {
        "name": "检视结果",
        "description": "源系统原始结果与评分",
        "note": "保留原始口径"
      },
      {
        "name": "状态",
        "description": "门店已确认/待审核等源系统状态",
        "note": "按源系统状态展示"
      },
      {
        "name": "整改状态",
        "description": "整改与复核进展",
        "note": "整改动作在源系统完成"
      },
      {
        "name": "最近同步时间",
        "description": "最近成功采集时间",
        "note": "保留同步异常提示"
      },
      {
        "name": "操作",
        "description": "详情",
        "note": ""
      }
    ],
    "tabs": [
      {
        "name": "门店信息",
        "mode": "info",
        "fields": [
          {
            "name": "门店编码"
          },
          {
            "name": "门店名称"
          },
          {
            "name": "检视月份"
          },
          {
            "name": "营运战队"
          },
          {
            "name": "营运区域"
          },
          {
            "name": "店老板工号"
          },
          {
            "name": "店老板"
          },
          {
            "name": "创业/店长教练工号"
          },
          {
            "name": "创业/店长教练"
          },
          {
            "name": "评估部门"
          }
        ],
        "note": ""
      },
      {
        "name": "评估信息",
        "mode": "info",
        "fields": [
          {
            "name": "评估人工号"
          },
          {
            "name": "评估人"
          },
          {
            "name": "评估日期"
          },
          {
            "name": "评估日期字段（评估业务日期）"
          },
          {
            "name": "评估表目"
          },
          {
            "name": "整体得分"
          },
          {
            "name": "整体得分率"
          },
          {
            "name": "是否一票否决"
          },
          {
            "name": "产品卓越得分率"
          },
          {
            "name": "干净卫生得分率"
          }
        ],
        "note": ""
      },
      {
        "name": "评估结果",
        "mode": "info",
        "fields": [
          {
            "name": "亲切服务得分率"
          },
          {
            "name": "团队提升得分率"
          },
          {
            "name": "安全数据得分率"
          },
          {
            "name": "团队养护得分率"
          },
          {
            "name": "评估结果"
          },
          {
            "name": "机会点数量"
          },
          {
            "name": "评估状态"
          },
          {
            "name": "建议整改项数量"
          },
          {
            "name": "异常报备时间"
          },
          {
            "name": "目标地址"
          }
        ],
        "note": ""
      },
      {
        "name": "过程与报备",
        "mode": "info",
        "fields": [
          {
            "name": "报备所在地址"
          },
          {
            "name": "报备原因"
          },
          {
            "name": "图片"
          },
          {
            "name": "巡检开始时间"
          },
          {
            "name": "巡检结束时间"
          },
          {
            "name": "停留时间"
          },
          {
            "name": "是否删除"
          },
          {
            "name": "评估结果确认日期"
          }
        ],
        "note": ""
      },
      {
        "name": "检查项明细",
        "mode": "table",
        "fields": [
          {
            "name": "门店编码"
          },
          {
            "name": "门店名称"
          },
          {
            "name": "检视月份"
          },
          {
            "name": "营运战队"
          },
          {
            "name": "营运区域"
          },
          {
            "name": "店老板工号"
          },
          {
            "name": "店老板"
          },
          {
            "name": "创业/店长教练工号"
          },
          {
            "name": "创业/店长教练"
          },
          {
            "name": "检视部门"
          },
          {
            "name": "检视人工号"
          },
          {
            "name": "检视人"
          },
          {
            "name": "检视日期"
          },
          {
            "name": "检视表目"
          },
          {
            "name": "项目"
          },
          {
            "name": "检视细则"
          },
          {
            "name": "分值"
          },
          {
            "name": "机会点分数"
          },
          {
            "name": "机会点"
          },
          {
            "name": "是否发生一票否决"
          },
          {
            "name": "评估是否合格"
          },
          {
            "name": "是否需要整改"
          },
          {
            "name": "问题图片"
          },
          {
            "name": "整改状态"
          },
          {
            "name": "预整改日期"
          },
          {
            "name": "机会点说明"
          },
          {
            "name": "是否有奖励项"
          },
          {
            "name": "员工工号姓名备注"
          },
          {
            "name": "奖励金额"
          },
          {
            "name": "是否重复机会点"
          },
          {
            "name": "检查项名称"
          },
          {
            "name": "检查结果"
          },
          {
            "name": "问题说明/图片"
          },
          {
            "name": "是否不合格标记"
          },
          {
            "name": "整改责任人"
          },
          {
            "name": "整改照片"
          },
          {
            "name": "复核结果"
          }
        ],
        "note": ""
      }
    ],
    "actions": [
      {
        "name": "查看详情",
        "description": "展示单条检视记录的基本信息、检查项明细、附件与整改闭环",
        "note": "源数据只读"
      }
    ],
    "form": [],
    "rules": [
      "（1）巡检数据只读展示，平台不提供巡检填报、整改上传与复核操作；食安人员查看的是巡检结果。",
      "（2）表单数量可能多于四张且结构可能不完全一致，本节按两级结构设计，不绑定具体表单与字段。",
      "（3）哪些表单纳入溯源范围由客户界定后按配置启用，未纳入的表单不在溯源平台展示。"
    ],
    "description": "依据巡检系统的检视记录与检查项明细，供食安部门查看门店巡检结果与整改情况。",
    "uiActions": [
      "查看"
    ],
    "detailMode": "drawer"
  },
  {
    "id": "overview",
    "group": "溯源模板管理",
    "name": "溯源模板总览",
    "kind": "overview",
    "sourceRange": [
      223,
      246
    ],
    "filters": [
      {
        "name": "菜品编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "菜品名称",
        "type": "带搜索的单级下拉筛选",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "关联原料名称",
        "type": "带搜索的单级下拉筛选",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "菜品模板配置状态",
        "type": "单级下拉筛选",
        "default": "全部",
        "match": "精准查询"
      },
      {
        "name": "原料模板配置状态",
        "type": "单级下拉筛选",
        "default": "全部",
        "match": "精准查询"
      }
    ],
    "columns": [
      {
        "name": "菜品编码",
        "description": "菜品主数据唯一标识编码",
        "note": "以外部接口为准"
      },
      {
        "name": "菜品名称",
        "description": "对应菜品的具体名称",
        "note": "~"
      },
      {
        "name": "菜品类型",
        "description": "套餐/非套餐等源分类",
        "note": "不改变原分类"
      },
      {
        "name": "关联原料名称",
        "description": "关联原料的名称",
        "note": "可能多个"
      },
      {
        "name": "菜品模板状态",
        "description": "当前菜品是否存在启用状态的菜品溯源模板",
        "note": "已配置/未配置"
      },
      {
        "name": "原料模板状态",
        "description": "当前菜品下的任一原料是否存在启用状态的原料溯源模板",
        "note": "已配置/未配置/部分配置"
      },
      {
        "name": "最后更新时间",
        "description": "数据最近修改的时间",
        "note": "~"
      },
      {
        "name": "关联原料类型",
        "description": "单一关联/多品类关联",
        "note": "根据当前菜品是否有多个原料类进行回显"
      },
      {
        "name": "操作",
        "description": "数据操作项入口",
        "note": ""
      }
    ],
    "tabs": [],
    "actions": [
      {
        "name": "关联原料",
        "description": "点击抽屉查看详情，可以查看接口返回的菜品关联bom",
        "note": ""
      },
      {
        "name": "关联溯源模板",
        "description": "详情页\n入参规则：\n菜品-原料-原料模板环节-供应商-供应商模板环节\n所有模板的状态均需为开启状态，如存在多个版本， 显示最新的\n样式标识：原料如当前有开启状态的模板与无开启状态下模板需要通过颜色标识\n交互1：移入菜品可根据当前菜品是否有开启状态的模板进行按钮状态切换“创建溯源模板”/”查看溯源模板“，并新打开对应标签页。\n交互2：点击已有模板的菜品/原料/供应商名称（即原型图中文字部分），则新打开模板详情页\nPS:关联原料模板与关联供应商模板的数量取值：取当前菜品中的原料/供应商",
        "note": ""
      }
    ],
    "form": [],
    "rules": [
      "（1）配置检查区分“不适用”“待接入”“未配置”和“已配置”。非自营供应商一期没有供应商模板属于范围不适用，不当作模板漏配",
      "（2）同一物料可由多个供应商供货，总览展示已知关联，不代表某一批次一定由所有供应商供货。具体报告使用业务单据的真实供应商和批次关系。",
      "（3）模板覆盖完整不代表业务数据完整。总览不显示未经实际采集验证的“全链路已追溯”结论，业务缺数须在报告中单独提示。"
    ],
    "description": "“溯源模板总览”功能旨在以菜品为主键，对运营人员配置的原料、供应商溯源模板通过菜品的角度进行整体串联与统一展示，在此处可以看到当前菜品是否对下辖所有原料的配置情况，并可以基于菜品下的原料查看原料的供应商模板的配置情况。",
    "uiActions": [
      "关联原料",
      "关联溯源模板"
    ],
    "detailMode": "page"
  },
  {
    "id": "material-template",
    "group": "溯源模板管理",
    "name": "原料溯源模板配置",
    "kind": "template",
    "sourceRange": [
      246,
      270
    ],
    "filters": [
      {
        "name": "模板编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "原料编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "原料名称",
        "type": "带搜索的单级下拉筛选，可多选",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "状态",
        "type": "单级下拉筛选",
        "default": "全部",
        "match": ""
      },
      {
        "name": "模板名称",
        "type": "input",
        "match": "模糊查询"
      }
    ],
    "columns": [
      {
        "name": "模板编码",
        "description": "模板唯一标识编码",
        "note": "ST#yyyy-mm-dd+4位流水号：ST202401020001"
      },
      {
        "name": "原料编码",
        "description": "原料的唯一标识编码",
        "note": ""
      },
      {
        "name": "原料名称",
        "description": "对应原料的具体名称",
        "note": ""
      },
      {
        "name": "状态",
        "description": "如状态机，不影响操作",
        "note": ""
      },
      {
        "name": "最后更新时间",
        "description": "数据最后更新时间，",
        "note": "即当前版本的创建时间"
      },
      {
        "name": "创建人",
        "description": "当前数据的最后创建人",
        "note": "最新版本的创建人"
      },
      {
        "name": "版本号",
        "description": "当前版本的版本号",
        "note": ""
      },
      {
        "name": "操作",
        "description": "数据操作项入口",
        "note": ""
      },
      {
        "name": "模板名称"
      }
    ],
    "tabs": [
      {
        "name": "版本管理",
        "mode": "table",
        "fields": [
          {
            "name": "版本号"
          },
          {
            "name": "模板编码"
          },
          {
            "name": "创建人"
          },
          {
            "name": "创建时间"
          },
          {
            "name": "变更说明"
          },
          {
            "name": "状态"
          },
          {
            "name": "详情"
          },
          {
            "name": "复制"
          }
        ],
        "note": ""
      }
    ],
    "actions": [
      {
        "name": "复制模板",
        "description": "复用当前模板内容，新打开模板新建",
        "note": "/"
      },
      {
        "name": "详情",
        "description": "新打开模板详情",
        "note": "/"
      },
      {
        "name": "添加",
        "description": "新打开新建模板，显示所有模板的最新版本，并可以基于最新版本进行新建或直接创建一个全新版本\n新增版本：勾选（单选）任一模板后，点击新增按钮打开模板详情页，并进行模板内容的修改（与在列表页点击详情进入一致）\n创建新模板：直接新打开模板新建页",
        "note": "新建可以选择历史版本编辑，或者新建模板"
      },
      {
        "name": "版本管理",
        "description": "打开版本管理抽屉，显示当前模板的所有历史版本\n详情：通过详情按钮进入历史版本后，无法修改任何历史版本的信息，只能查看\n复制：复用当前历史模板内容，新打开模板新建，新建的模板与当前被选取的模板不存在版本关联关系",
        "note": ""
      },
      {
        "name": "覆盖范围",
        "description": "选择/回显原料",
        "note": ""
      }
    ],
    "form": [
      {
        "name": "模板编码"
      },
      {
        "name": "模板名称"
      },
      {
        "name": "模板说明"
      },
      {
        "name": "模板状态"
      },
      {
        "name": "创建时间"
      },
      {
        "name": "版本号"
      },
      {
        "name": "变更说明"
      },
      {
        "name": "溯源原料范围"
      }
    ],
    "rules": [
      "（1）模板需要区分上游采购原料和MES加工形成的半成品。MES半成品不应重复生成报告；真实原料投入与半成品产出关系仍保留在加工链路中。",
      "（2）调拨、重复收货等单据应按汇入同一原料报告，不能仅凭相同批次文本合并不同物料。各次单据及发生时间均保留。",
      "（3）生禽不经大仓直接进入MES、自有养殖鸡蛋/肉鸡等路径须配置独立的适用条件，不强制要求不存在的大仓环节。",
      "（4）已发布版本只读；变更新版本后，原料报告仍保留原模板和环节版本。正在归集中的报告默认沿用创建时版本，新增模板的适用切换不能混用两套采集规则。"
    ],
    "description": "定义不同原料及业务路径的采集环节和关联规则，支持大仓收货原料、自有养殖产品、直入MES等差异场景，并将后续出入库、加工、配送、门店关联信息汇入对应原料溯源报告。模板须避免将经MES加工形成的半成品重复作为上游原料起点。",
    "uiActions": [
      "查看",
      "复制模板",
      "版本管理",
      "覆盖范围"
    ],
    "detailMode": "page"
  },
  {
    "id": "supplier-template",
    "group": "溯源模板管理",
    "name": "供应商溯源模板配置",
    "kind": "template",
    "sourceRange": [
      270,
      289
    ],
    "filters": [
      {
        "name": "模板编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "原料编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "原料名称",
        "type": "带搜索的单级下拉筛选，可多选",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "供应商名称",
        "type": "带搜索的单级下拉筛选，可多选",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "供应商编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "状态",
        "type": "单级下拉筛选",
        "default": "全部",
        "match": ""
      },
      {
        "name": "模板名称",
        "type": "input",
        "match": "模糊查询"
      }
    ],
    "columns": [
      {
        "name": "模板编码",
        "description": "模板唯一标识编码",
        "note": "ST#yyyy-mm-dd+4位流水号：ST202401020001"
      },
      {
        "name": "原料编码",
        "description": "原料的唯一标识编码",
        "note": ""
      },
      {
        "name": "原料名称",
        "description": "对应原料的具体名称",
        "note": ""
      },
      {
        "name": "供应商编码",
        "description": "模版中配置的供应商编码",
        "note": ""
      },
      {
        "name": "供应商名称",
        "description": "模版中配置的供应商名称",
        "note": ""
      },
      {
        "name": "状态",
        "description": "如状态机，不影响操作",
        "note": ""
      },
      {
        "name": "最后更新时间",
        "description": "数据最后更新时间",
        "note": "即当前版本的创建时间"
      },
      {
        "name": "创建人",
        "description": "当前数据的最后创建人",
        "note": "最新版本的创建人"
      },
      {
        "name": "版本号",
        "description": "当前版本的版本号",
        "note": ""
      },
      {
        "name": "操作",
        "description": "数据操作项入口",
        "note": ""
      },
      {
        "name": "模板名称"
      }
    ],
    "tabs": [
      {
        "name": "版本管理",
        "mode": "table",
        "fields": [
          {
            "name": "版本号"
          },
          {
            "name": "模板编码"
          },
          {
            "name": "创建人"
          },
          {
            "name": "创建时间"
          },
          {
            "name": "变更说明"
          },
          {
            "name": "状态"
          },
          {
            "name": "详情"
          },
          {
            "name": "复制"
          }
        ],
        "note": ""
      }
    ],
    "actions": [
      {
        "name": "复制模板",
        "description": "复用当前模板内容，新打开模板新建",
        "note": "/"
      },
      {
        "name": "详情",
        "description": "新打开模板详情",
        "note": "/"
      },
      {
        "name": "添加",
        "description": "新打开新建模板，显示所有模板的最新版本，并可以基于最新版本进行新建或直接创建一个全新版本\n新增版本：勾选（单选）任一模板后，点击新增按钮打开模板详情页，并进行模板内容的修改（与在列表页点击详情进入一致）\n创建新模板：直接新打开模板新建页",
        "note": "新建可以选择历史版本编辑，或者新建模板\n"
      },
      {
        "name": "版本管理",
        "description": "打开版本管理抽屉，显示当前模板的所有历史版本\n详情：通过详情按钮进入历史版本后，无法修改任何历史版本的信息，只能查看\n复制：复用当前历史模板内容，新打开模板新建，新建的模板与当前被选取的模板不存在版本关联关系",
        "note": ""
      },
      {
        "name": "覆盖范围",
        "description": "选择/回显供应商和原料",
        "note": ""
      }
    ],
    "form": [
      {
        "name": "模板编码"
      },
      {
        "name": "模板名称"
      },
      {
        "name": "模板说明"
      },
      {
        "name": "模板状态"
      },
      {
        "name": "创建时间"
      },
      {
        "name": "版本号"
      },
      {
        "name": "变更说明"
      },
      {
        "name": "溯源原料范围"
      },
      {
        "name": "供应商范围"
      }
    ],
    "rules": [
      "（1）同一供应商、原料仅允许一份当前有效模板。"
    ],
    "description": "“溯源模板配置”功能为不同的供应商在不同阶段下定义溯源信息内容，并通过分层分类的方式进行流程和环节拆解，支持灵活定义。",
    "uiActions": [
      "查看",
      "复制模板",
      "版本管理",
      "覆盖范围"
    ],
    "detailMode": "page"
  },
  {
    "id": "link",
    "group": "溯源模板管理",
    "name": "溯源环节管理",
    "kind": "link",
    "sourceRange": [
      289,
      323
    ],
    "filters": [
      {
        "name": "环节编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "环节名称",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "状态",
        "type": "单级下拉筛选",
        "default": "全部",
        "match": ""
      }
    ],
    "columns": [
      {
        "name": "环节编码",
        "description": "环节唯一标识编码",
        "note": "TL#yyyy-mm-dd+4位流水号：TL202401020001\ntraceability link"
      },
      {
        "name": "环节名称",
        "description": "对应环节的具体名称",
        "note": ""
      },
      {
        "name": "环节说明",
        "description": "当前环节的说明文本",
        "note": ""
      },
      {
        "name": "环节类型",
        "description": "环节适用于哪个",
        "note": ""
      },
      {
        "name": "状态",
        "description": "如状态机，不影响操作",
        "note": ""
      },
      {
        "name": "最后更新时间",
        "description": "数据最后更新时间",
        "note": "即当前版本的创建时间"
      },
      {
        "name": "创建人",
        "description": "当前数据的最后创建人",
        "note": "最新版本的创建人"
      },
      {
        "name": "版本号",
        "description": "当前版本的版本号",
        "note": ""
      },
      {
        "name": "操作",
        "description": "数据操作项入口",
        "note": ""
      }
    ],
    "tabs": [
      {
        "name": "环节溯源主表",
        "mode": "table",
        "fields": [
          {
            "name": "排序"
          },
          {
            "name": "字段名"
          },
          {
            "name": "字段英文名"
          },
          {
            "name": "字段简称"
          },
          {
            "name": "字段采集说明"
          },
          {
            "name": "字段属性"
          },
          {
            "name": "是否可编辑"
          },
          {
            "name": "是否必填"
          },
          {
            "name": "字段类型"
          },
          {
            "name": "长度限制"
          },
          {
            "name": "枚举项"
          },
          {
            "name": "单位"
          },
          {
            "name": "列表显示"
          },
          {
            "name": "支持筛选"
          },
          {
            "name": "筛选类型"
          },
          {
            "name": "现场采集"
          },
          {
            "name": "填写校验"
          },
          {
            "name": "是否为主键"
          },
          {
            "name": "是否唯一索引"
          },
          {
            "name": "绑定内容函数"
          },
          {
            "name": "函数类型"
          },
          {
            "name": "数据字典类型"
          },
          {
            "name": "ETL表达式"
          },
          {
            "name": "是否可关联"
          },
          {
            "name": "是否分片字段"
          },
          {
            "name": "是否可追溯"
          },
          {
            "name": "是否影响按钮"
          },
          {
            "name": "按钮展示规则"
          },
          {
            "name": "下拉展示规则"
          }
        ],
        "note": ""
      },
      {
        "name": "环节溯源信息",
        "mode": "table",
        "fields": [
          {
            "name": "信息名"
          },
          {
            "name": "表英文名"
          },
          {
            "name": "采集端icon"
          },
          {
            "name": "操作"
          }
        ],
        "note": ""
      }
    ],
    "actions": [
      {
        "name": "复制环节（列表）",
        "description": "复用当前环节内容，新打开模板新建\n",
        "note": "通过复制操作打开的环节详情部分数据无法编辑：\n1、环节名称\n2、环节主表中的表英文名\n3、环节主表字段中的字段名、字段英文名、字段采集说明、字段属性、字段类型、长度限制、绑定内容函数、函数类型、数据字典类型、ETL表达式、是否唯一索引、是否为主键\n4、环节子表字段中的字段名、字段英文名、字段采集说明、字段属性、字段类型、长度限制、绑定内容函数、函数类型、数据字典类型、ETL表达式、是否唯一索引、是否为主键"
      },
      {
        "name": "详情（列表）",
        "description": "新打开环节详情页面",
        "note": "通过打开详情的环节详情页绝大部分数据无法编辑，只能进行环节说明字段的编辑"
      },
      {
        "name": "添加（列表）",
        "description": "新打开环节新建页面",
        "note": "通过添加进入的环节新增页可以进行所有数据的编辑，需要校验其环节名称无法和已有环节的数据进行重名。\n如重名则无法提交"
      },
      {
        "name": "环节基本信息（详情）",
        "description": "进行环节名称、环节说明的填写",
        "note": ""
      },
      {
        "name": "溯源信息（详情）",
        "description": "各溯源环节下需记录的具体信息项（如到货验收的 “收货记录 / 检测结果数据”）",
        "note": "多选 + 编辑控件，不同环节对应不同信息项，支持勾选 / 补充，此处进行的环节顺序编辑影响在详情页中的展示顺序和溯源报告/供应商端采集顺序\n"
      },
      {
        "name": "表编辑（详情）",
        "description": "新增字段\n可以通过纯新增的方式进行字段的新增，并进行字段内容编辑，具体枚举请查看文档：\n表英文名/中文名需要进行当前环节类型下的全局唯一\n字段英文名/中文需要进行当前表唯一\n导入字段\n环节中可以进行字段的移除和字段的导入（字段在未存后端表前移除未删除，存后端表后移除不会删除，可以通过导入的方式重新导入），导入时会显示当前表的所有字段，并根据当前字段在当前环节的应用状态进行勾选或反选，用户可以进行再次勾选或反选确认后将字段应用于当前表。\n导入字段功能在直接新增的环节页面无数据或不展示按钮，只适用于通过复制新建的表单\n溯源信息管理\n溯源信息管理中的数据为当前环节的所有子表，并根据当前表在当前环节的应用状态进行勾选或反选，用户可以进行再次勾选或反选确认后将表应用于当前环节，并可以新增表\n填写校验\n填写验证可以对当前字段在前端进行采集时的格式和内容进行限定，可以通过常规运算符或正则表达式两种方式进行限制。以下是常规的正则表达式https://cloud.tencent.com/developer/article/1896302",
        "note": "\n\n"
      }
    ],
    "form": [
      {
        "name": "环节编码"
      },
      {
        "name": "环节名称"
      },
      {
        "name": "环节说明"
      },
      {
        "name": "环节适用类型"
      },
      {
        "name": "环节状态"
      },
      {
        "name": "创建时间"
      },
      {
        "name": "版本号"
      },
      {
        "name": "表英文名"
      },
      {
        "name": "表中文名"
      },
      {
        "name": "表填写说明"
      }
    ],
    "rules": [],
    "description": "“溯源环节管理”功能旨在通过对环节的预定义，明确各个溯源链路下需要的动作和动作需要收集的表信息，以便于在溯源模板中进行环节直接应用。",
    "uiActions": [
      "查看",
      "复制环节"
    ],
    "detailMode": "page"
  },
  {
    "id": "relation",
    "group": "溯源模板管理",
    "name": "环节关联关系配置",
    "kind": "relation",
    "sourceRange": [
      323,
      343
    ],
    "filters": [
      {
        "name": "环节编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "环节名称",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "状态",
        "type": "单级下拉筛选",
        "default": "全部\nPS：环节自身状态，有启用与禁用",
        "match": ""
      },
      {
        "name": "关联关系配置状态",
        "type": "单级下拉筛选",
        "default": "全部",
        "match": ""
      }
    ],
    "columns": [
      {
        "name": "环节编码",
        "description": "环节唯一标识编码",
        "note": ""
      },
      {
        "name": "环节名称",
        "description": "对应环节的具体名称",
        "note": ""
      },
      {
        "name": "环节说明",
        "description": "环节内的说明内容",
        "note": ""
      },
      {
        "name": "版本号",
        "description": "当前环节的版本号",
        "note": ""
      },
      {
        "name": "环节类型",
        "description": "环节适用于哪个",
        "note": ""
      },
      {
        "name": "状态",
        "description": "环节自身状态",
        "note": ""
      },
      {
        "name": "最后更新时间",
        "description": "数据最后更新时间",
        "note": "即当前版本的创建时间"
      },
      {
        "name": "关联关系配置状态",
        "description": "当前环节与上游环节的关联关系配置状态",
        "note": ""
      },
      {
        "name": "关联模板",
        "description": "操作项",
        "note": "后操作说明中说明"
      },
      {
        "name": "操作",
        "description": "数据操作项入口",
        "note": ""
      }
    ],
    "tabs": [],
    "actions": [
      {
        "name": "关联模板查看",
        "description": "当前环节被哪些模板所引用，展示模板的编码，时间，状态",
        "note": ""
      },
      {
        "name": "配置关联关系",
        "description": "入参：所有当前环节关联的上一个环节，未配置的排序靠前\n一、追溯关联关系维护 - 选择上游环节\n1.点击“配置”后，进入“追溯关联关系维护”界面\n2.第一步先“选择上游环节”。在选择上游环节步骤，会列出当前环节所有直接关联的上游环节，包括当前链路、非当前链路的环节。\n2.1.如果当前环节直接关联的上游环节在当前链路或其它链路已配置过，在“状态”字段会显示“已配置”。\n2.2.关联模板为显示当前环节直接关联的上游环节被引用的链路模板名称，表格中只显示前5个。环节引用次数，为上游环节被引用的链路模板数量。\n3.勾选表格第一列的一个选择框，该选择框为单选，点击“下一步”，进入“选择关联关系”配置界面\n二、追溯关联关系维护 - 选择关联关系\n1.进入该界面，如果已配置过，会默认加载配置。如未配置过，则需要“新增”。\n2.点击“新增”，添加一条环节表的关联关系。\n2.1. 当新增的是第一条环节表的关联关系时，选中环节默认填充为当前环节，并且不允许修改。\n2.2.当新增的是非第一条环节表的关联关系时，选中环节默认填充为上一条环节表关联关系的“关联环节”，并且不允许修改\n2.3.“选中环节表”下拉选择时展示“选中环节”的所有主表（扩展表）、子表。\n2.4.“关联环节”下拉选择时，展示当前链路所有的环节（如果处于原料链路，则相关的所有供应商链路的环节应当也展示）\n2.5.“关联环节表”下拉选择时展示“关联环节”的所有主表（扩展表）、子表。\n3.点击表格的首列的“展开”/“收缩”按钮，可“展开”/“收缩”当前“环节表关联关系”的“字段关联关系”配置界面。\n3.1 点击\"+\"按钮，添加一条“字段关联关系”，左侧字段可选择“选中环节表”的字段，右侧字段可选择“关联环节表”的字段。\n3.2点击“删除”按钮，删除一条“字段关联关系”。\n3.3“字段关联关系”至少有一条记录，方可提交保存。\n4.点击“上一步”，可返回“选择上游环节”步骤\n5.点击“完成”，将当前配置提交保存。",
        "note": "\n"
      }
    ],
    "form": [],
    "rules": [],
    "description": "“溯源环节管理”功能旨在通过溯源模板中配置的任意环节与上游环节的溯源关系配置，帮助溯源过程中的实例数据关联。",
    "uiActions": [
      "配置",
      "关联模板查看"
    ],
    "detailMode": "drawer"
  },
  {
    "id": "consumer",
    "group": "溯源模板管理",
    "name": "消费者展示配置",
    "kind": "consumer",
    "sourceRange": [
      343,
      364
    ],
    "filters": [
      {
        "name": "消费者模板编码",
        "type": "input",
        "match": "精准查询"
      },
      {
        "name": "菜品编码",
        "type": "input",
        "match": "精准查询"
      },
      {
        "name": "菜品名称",
        "type": "input",
        "match": "模糊查询"
      },
      {
        "name": "状态",
        "type": "下拉列表",
        "match": "模糊查询"
      },
      {
        "name": "模板是否更新",
        "type": "下拉列表",
        "match": "模糊查询"
      },
      {
        "name": "门店",
        "type": "下拉列表",
        "match": "模糊查询"
      },
      {
        "name": "更新人",
        "type": "input",
        "match": "模糊查询"
      },
      {
        "name": "更新时间",
        "type": "时间段",
        "match": "模糊查询"
      }
    ],
    "columns": [
      {
        "name": "序号"
      },
      {
        "name": "消费者模板编码"
      },
      {
        "name": "最新版本"
      },
      {
        "name": "菜品编码"
      },
      {
        "name": "菜品名称"
      },
      {
        "name": "适用门店"
      },
      {
        "name": "状态"
      },
      {
        "name": "菜品模板编码"
      },
      {
        "name": "菜品模板版本"
      },
      {
        "name": "原料模板编码"
      },
      {
        "name": "原料模板版本"
      },
      {
        "name": "供应商模板编码"
      },
      {
        "name": "供应商模板版本"
      },
      {
        "name": "模板是否更新"
      },
      {
        "name": "生效开始时间"
      },
      {
        "name": "最近更新时间"
      },
      {
        "name": "最近更新人"
      },
      {
        "name": "操作"
      }
    ],
    "tabs": [],
    "actions": [],
    "form": [
      {
        "name": "菜品名称"
      },
      {
        "name": "消费者评论"
      },
      {
        "name": "适用门店"
      },
      {
        "name": "状态"
      }
    ],
    "rules": [
      "（1）每个门店每个菜同一时点仅一份有效消费者展示配置，范围冲突时阻止发布"
    ],
    "description": "按门店配置消费者溯源报告可展示的环节、字段、顺序、说明及熔断规则，并预览配置后的实际呈现。熔断用于控制未核实、不可用或异常数据的展示方式，不能改写原始异常数据、掩盖已确认食安事实或将异常包装为正常。",
    "uiActions": [
      "编辑",
      "复制并添加",
      "预览链路",
      "变更记录",
      "适用门店"
    ],
    "detailMode": "page"
  },
  {
    "id": "dish-display",
    "group": "溯源模板管理",
    "name": "菜品显示配置",
    "kind": "dish-display",
    "sourceRange": [
      364,
      384
    ],
    "filters": [
      {
        "name": "菜品名称/编码",
        "type": "可搜索下拉列表",
        "default": "/",
        "match": "编码精准匹配"
      },
      {
        "name": "菜品名称",
        "type": "input",
        "default": "",
        "match": "名称模糊检索"
      },
      {
        "name": "菜品类型",
        "type": "下拉列表",
        "default": "全部",
        "match": "套餐/非套餐等源分类"
      },
      {
        "name": "是否开启溯源",
        "type": "下拉列表",
        "default": "全部",
        "match": "启用/禁用"
      },
      {
        "name": "更新时间",
        "type": "时间段",
        "default": "/",
        "match": "闭区间查询"
      }
    ],
    "columns": [
      {
        "name": "菜品编码",
        "description": "菜品稳定标识及名称",
        "note": "取自主数据"
      },
      {
        "name": "菜品名称",
        "description": "菜品稳定标识及名称",
        "note": "取自主数据"
      },
      {
        "name": "菜品类型",
        "description": "源系统菜品分类",
        "note": ""
      },
      {
        "name": "覆盖门店数量",
        "description": "源系统菜关联的门店数量",
        "note": "不代表全部实际在售"
      },
      {
        "name": "关联原料数量",
        "description": "源系统菜关联的物料数量",
        "note": ""
      },
      {
        "name": "最佳赏味期",
        "description": "设置最佳赏味期天数",
        "note": ""
      },
      {
        "name": "消费者溯源开关",
        "description": "启用、禁用",
        "note": ""
      },
      {
        "name": "操作人",
        "description": "",
        "note": ""
      },
      {
        "name": "操作",
        "description": "",
        "note": ""
      }
    ],
    "tabs": [],
    "actions": [
      {
        "name": "菜品图片",
        "description": "原则上通过菜品中心的图片进行消费者菜品溯源报告的菜品显示\n此处可以进行自定义，如此处上传图片，可替换菜品中心的菜品显示",
        "note": "非必须"
      },
      {
        "name": "最佳赏味期",
        "description": "  最佳赏味期主要是防止原料在出现门店调货后，当前门店的溯源信息无法体现调货的新鲜产品，所以通过最佳赏味期设置进行超过一定时间的原料消费者溯源信息屏蔽。\n  点击弹框最佳赏味期设置，回显当前菜品名称与最佳赏味期字段，可设置当前菜品的最佳赏味期天数（正整数）\n  最佳赏味期会影响消费者展示端如当前菜品中原料生产日期+最佳赏味期大于当前服务器时间，则不需要在溯源菜单中展示当前菜品（如当前菜品有多个原料构成，则构成其中之一的原料不在最佳赏味期范围之内，则不进行显示）\n  此状态不影响中台的数据采集和溯源报告的生成",
        "note": ""
      },
      {
        "name": "原料显示配置",
        "description": " 显示对应配置的菜品名称及菜品包含的原料\n 是否显示：默认开启显示，一个菜品包含多个原料可禁用某些原料在消费者溯源报告中的显示，例如葱姜",
        "note": ""
      },
      {
        "name": "消费者溯源开关",
        "description": "  消费者溯源开关主要是在原料出现溯源错误后，为防止舆情风险发酵，对消费者端此菜品进行快速下架的操作。\n  增加消费者溯源开关列，默认开启状态，此状态控制消费者端是否可以对当前菜品进行溯源\n  消费者端的菜单需要取此状态进行判断是否展示此菜品\n  此状态不影响中台的数据采集和溯源报告的生成",
        "note": ""
      }
    ],
    "form": [],
    "rules": [
      "（1）消费者实际可视须同时满足：菜品总开关启用、命中有效模板、具有可使用的对应报告，并符合消费者展示规则。",
      "（2）总开关禁用时，门店消费者配置不得绕过；已发出的二维码、订单入口及报告内容接口也应检查此开关。内部报告与历史记录继续保留供授权人员查询。",
      "（3）菜品启用后BOM变更，须重新检查相应对象的展示条件。",
      "（4）菜单关系仅用于系统内门店可售菜品映射，不能据此认定门店当日实际售卖。临时停做、自搭配、赠品菜等没有明确系统映射时，不自动建立溯源可视关系。",
      "（5）套餐必须能从已确认的主数据关系解析到实际子菜品、"
    ],
    "description": "基于菜品主体、BOM及溯源报告准备情况，维护菜品是否允许在消费者端展示溯源信息。此开关控制溯源可视性，不改变门店菜品的售卖状态、价格、菜单或库存。也不影响菜品的中台溯源报告生成。",
    "uiActions": [
      "菜品图片",
      "最佳赏味期",
      "原料显示配置"
    ],
    "detailMode": "drawer"
  },
  {
    "id": "alert-config",
    "group": "告警管理中心",
    "name": "告警配置",
    "kind": "alert",
    "sourceRange": [
      385,
      409
    ],
    "filters": [
      {
        "name": "告警配置编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "告警阶段",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "告警配置名称",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "告警创建时间段",
        "type": "时间段",
        "default": "/",
        "match": "/"
      },
      {
        "name": "状态",
        "type": "下拉列表",
        "default": "ALL",
        "match": "/"
      }
    ],
    "columns": [
      {
        "name": "告警配置编码",
        "description": "告警配置系统唯一标识编码",
        "note": "自编码"
      },
      {
        "name": "告警阶段",
        "description": "告警配置的阶段",
        "note": ""
      },
      {
        "name": "告警环节",
        "description": "告警配置的环节",
        "note": "可能多个"
      },
      {
        "name": "告警对象",
        "description": "告警配置中的对象（数据集）",
        "note": "可能多个"
      },
      {
        "name": "告警说明",
        "description": "告警说明文本",
        "note": ""
      },
      {
        "name": "创建时间",
        "description": "数据创建时间：YYYY/MM/DD-HH:MM:SS",
        "note": ""
      },
      {
        "name": "创建人",
        "description": "告警配置创建用户",
        "note": ""
      },
      {
        "name": "操作",
        "description": "数据操作项入口",
        "note": ""
      },
      {
        "name": "状态",
        "description": "告警状态机：启用/禁用",
        "note": ""
      },
      {
        "name": "告警配置名称"
      }
    ],
    "tabs": [],
    "actions": [
      {
        "name": "详情",
        "description": "新打开该数据详情页面",
        "note": "/"
      },
      {
        "name": "添加",
        "description": "新打开数据新建页面",
        "note": ""
      }
    ],
    "form": [
      {
        "name": "配置编码"
      },
      {
        "name": "创建时间"
      },
      {
        "name": "创建人"
      },
      {
        "name": "配置名称"
      },
      {
        "name": "配置状态"
      },
      {
        "name": "配置说明"
      },
      {
        "name": "告警覆盖类型"
      },
      {
        "name": "适配模板范围"
      },
      {
        "name": "告警类型"
      },
      {
        "name": "全局告警条件"
      },
      {
        "name": "告警级别"
      },
      {
        "name": "告警动作"
      },
      {
        "name": "告警频率"
      },
      {
        "name": "告警用户组"
      },
      {
        "name": "告警时间"
      },
      {
        "name": "是否只发送对应门店人员"
      }
    ],
    "rules": [],
    "description": "“告警配置”功能旨在为业务侧食安等部门、对食品整体链条过程中发生的高危情况进行预警项配置，通过过程中发生的高风险事件识别帮助企业提前进行风险感知。",
    "uiActions": [
      "查看"
    ],
    "detailMode": "page"
  },
  {
    "id": "alert-record",
    "group": "告警管理中心",
    "name": "告警记录",
    "kind": "readonly",
    "sourceRange": [
      409,
      431
    ],
    "filters": [
      {
        "name": "告警记录编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "告警配置编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "告警阶段",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "告警时间",
        "type": "时间段",
        "default": "/",
        "match": "/"
      }
    ],
    "columns": [
      {
        "name": "告警记录编码",
        "description": "告警记录唯一标识编码",
        "note": "~"
      },
      {
        "name": "告警配置编码",
        "description": "关联告警配置编码",
        "note": "~"
      },
      {
        "name": "告警阶段",
        "description": "关联告警配置阶段",
        "note": "~"
      },
      {
        "name": "告警说明",
        "description": "关联告警配置说明",
        "note": "~"
      },
      {
        "name": "告警时间",
        "description": "告警发生时间：YYYY/MM/DD-HH:MM:SS",
        "note": ""
      },
      {
        "name": "操作",
        "description": "数据操作项入口",
        "note": ""
      }
    ],
    "tabs": [
      {
        "name": "详细信息",
        "fields": [
          {
            "name": "告警编码",
            "description": "告警记录唯一标识编码",
            "note": ""
          },
          {
            "name": "告警时间",
            "description": "告警发生时间：YYYY/MM/DD-HH:MM:SS",
            "note": ""
          },
          {
            "name": "告警配置编码",
            "description": "关联告警配置编码",
            "note": ""
          },
          {
            "name": "告警类型",
            "description": "告警配置组件回显\n",
            "note": ""
          },
          {
            "name": "告警阶段",
            "description": "",
            "note": ""
          },
          {
            "name": "告警环节",
            "description": "",
            "note": ""
          },
          {
            "name": "告警对象",
            "description": "",
            "note": ""
          },
          {
            "name": "告警值",
            "description": "",
            "note": ""
          },
          {
            "name": "告警条件",
            "description": "",
            "note": ""
          },
          {
            "name": "告警动作",
            "description": "",
            "note": ""
          },
          {
            "name": "根据告警配置的告警对象，显示对象内容与具体数据",
            "description": "",
            "note": ""
          }
        ]
      },
      {
        "name": "仓储温度记录",
        "mode": "table",
        "fields": [
          {
            "name": "生产日期"
          },
          {
            "name": "物料保质期天数"
          },
          {
            "name": "物料编码"
          },
          {
            "name": "仓库名称"
          },
          {
            "name": "库区编码"
          },
          {
            "name": "仓库编码"
          },
          {
            "name": "物料过期日期"
          },
          {
            "name": "采集时间"
          },
          {
            "name": "实测温度"
          },
          {
            "name": "测温设备编号"
          }
        ],
        "note": ""
      },
      {
        "name": "告警触发快照",
        "mode": "info",
        "fields": [
          {
            "name": "告警名称"
          },
          {
            "name": "生产日期"
          },
          {
            "name": "物料保质期天数"
          },
          {
            "name": "物料编码"
          },
          {
            "name": "仓库名称"
          },
          {
            "name": "库区编码"
          },
          {
            "name": "仓库编码"
          },
          {
            "name": "物料过期日期"
          },
          {
            "name": "记录时间"
          },
          {
            "name": "记录温度"
          }
        ],
        "note": ""
      }
    ],
    "actions": [
      {
        "name": "详情",
        "description": "新打开页面",
        "note": "/"
      }
    ],
    "form": [],
    "rules": [
      "详情保留首次触发快照；后续源数据更正追加变化记录，不覆盖原触发依据。"
    ],
    "description": "“告警记录”功能旨在展示通过告警配置配置的告警事件，帮助业务人员进行告警记录查看，及时发现业务风险。",
    "uiActions": [
      "查看"
    ],
    "detailMode": "page"
  },
  {
    "id": "alert-level",
    "group": "告警管理中心",
    "name": "告警级别管理",
    "kind": "editable",
    "sourceRange": [
      431,
      456
    ],
    "filters": [
      {
        "name": "告警级别名称",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      }
    ],
    "columns": [
      {
        "name": "告警级别名称",
        "description": "告警级别名称",
        "note": ""
      },
      {
        "name": "告警级别说明",
        "description": "告警级别说明长文本",
        "note": ""
      },
      {
        "name": "告警方式",
        "description": "/",
        "note": ""
      },
      {
        "name": "是否加急",
        "description": "/",
        "note": ""
      },
      {
        "name": "创建人",
        "description": "告警级别创建人",
        "note": ""
      },
      {
        "name": "创建时间",
        "description": "告警级别创建时间：YYYY/MM/DD-HH:MM:SS",
        "note": ""
      },
      {
        "name": "状态",
        "description": "启用/禁用",
        "note": ""
      },
      {
        "name": "操作",
        "description": "数据操作项入口",
        "note": ""
      }
    ],
    "tabs": [],
    "actions": [
      {
        "name": "详情",
        "description": "打开对应数据项抽屉详情",
        "note": "/"
      },
      {
        "name": "添加",
        "description": "打开新建抽屉",
        "note": "/"
      }
    ],
    "form": [
      {
        "name": "告警级别名称",
        "description": "input，20",
        "note": "需要进行名称唯一性校验"
      },
      {
        "name": "告警级别说明",
        "description": "input，100",
        "note": "非必填"
      },
      {
        "name": "告警方式",
        "description": "下拉枚举：系统记录，IM通知",
        "note": "IM通知时系统记录之上的累加条件，无论是哪个选项都需要进行系统记录"
      },
      {
        "name": "是否加急",
        "description": "单选：不加急、应用内加急、短信加急、电话加急",
        "note": "不加急：对接飞书机器人后发送消息即可\n应用内加急：发送并加急，只在应用内加急通知\n短信加急：发送加急短信\n电话加急：拨打加急电话"
      },
      {
        "name": "状态"
      }
    ],
    "rules": [
      "级别名称、分级标准与升级责任链由老乡鸡业务方确认；系统不把自定义级别直接映射为行政风险等级或食安结论。",
      "级别变更影响后续生效的规则版本，历史告警保留触发时级别名称、策略与版本。"
    ],
    "description": "“告警级别管理”功能旨在通过预设告警的各个级别与预警方式，在预先归类的情况下便于用户在进行告警配置时快速选择。",
    "uiActions": [
      "查看",
      "编辑"
    ],
    "detailMode": "drawer"
  },
  {
    "id": "alert-group",
    "group": "告警管理中心",
    "name": "告警用户组管理",
    "kind": "editable",
    "sourceRange": [
      456,
      478
    ],
    "filters": [
      {
        "name": "告警用户组名称",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      }
    ],
    "columns": [
      {
        "name": "告警用户组编码",
        "description": "编码",
        "note": "开发定义编码规则"
      },
      {
        "name": "告警用户组名称",
        "description": "告警用户组名称title",
        "note": ""
      },
      {
        "name": "告警用户组类型",
        "description": "角色/指定用户",
        "note": ""
      },
      {
        "name": "创建人",
        "description": "告警用户组创建人",
        "note": ""
      },
      {
        "name": "创建时间",
        "description": "告警用户组创建时间：YYYY/MM/DD-HH:MM:SS",
        "note": ""
      },
      {
        "name": "状态",
        "description": "启用/禁用",
        "note": ""
      },
      {
        "name": "操作",
        "description": "数据操作项入口",
        "note": ""
      }
    ],
    "tabs": [],
    "actions": [
      {
        "name": "详情",
        "description": "打开对应数据项抽屉详情",
        "note": "可修改任意信息"
      },
      {
        "name": "添加",
        "description": "打开新建抽屉\n",
        "note": "\n"
      }
    ],
    "form": [
      {
        "name": "告警用户组名称",
        "description": "input，20",
        "note": "需要进行名称唯一性校验"
      },
      {
        "name": "用户组类型",
        "description": "单选",
        "note": "默认“按角色”"
      },
      {
        "name": "告警用户",
        "description": "如用户组类型选择”按用户“则显示告警用户选择框，进行告警用户选择",
        "note": "入参所有启用的内部用户，并支持模糊搜索与多选，选中后重新进入可回显已选中用户",
        "type": "多选下拉列表"
      },
      {
        "name": "告警角色",
        "description": "如用户组类型选择”按角色“则显示告警角色选择框，进行告警角色选择",
        "note": "入参所有启用的内部角色，并支持多选，选中后重新进入可回显已选中角色",
        "type": "多选下拉列表"
      },
      {
        "name": "状态"
      }
    ],
    "rules": [
      "同一事件命中多个包含同一成员的组时去重"
    ],
    "description": "“告警用户组管理”功能旨在通过预设告警时需要发送告警的用户和角色信息形成用户组，并通过告警配置时引用此用户组形成完整告警机制",
    "uiActions": [
      "查看",
      "编辑"
    ],
    "detailMode": "drawer"
  },
  {
    "id": "material",
    "group": "产品管理",
    "name": "原料管理",
    "kind": "readonly",
    "sourceRange": [
      479,
      499
    ],
    "filters": [
      {
        "name": "原料编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "原料名称",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "原料分类",
        "type": "下拉树",
        "default": "全部",
        "match": "按源分类查询"
      },
      {
        "name": "是否有溯源卡",
        "type": "下拉枚举",
        "default": "全部",
        "match": "精准查询"
      },
      {
        "name": "是否配置溯源模板",
        "type": "下拉枚举",
        "default": "全部",
        "match": "精准查询"
      }
    ],
    "columns": [
      {
        "name": "原料编码",
        "description": "SAP物料身份信息",
        "note": ""
      },
      {
        "name": "原料名称",
        "description": "SAP物料身份信息",
        "note": ""
      },
      {
        "name": "原料分类",
        "description": "来源系统提供的分类",
        "note": "零售商品、成品、半成品、原材料、低值易耗品、备品备件、固定资产\n溯源系统只需要2/3/4\n此处为4，以下模块分别为3/2"
      },
      {
        "name": "规格",
        "description": "",
        "note": ""
      },
      {
        "name": "基本单位",
        "description": "",
        "note": ""
      },
      {
        "name": "是否有溯源卡",
        "description": "是/否",
        "note": "关联PLM原料溯源卡，根据当前是否有生效的原料溯源卡进行回显"
      },
      {
        "name": "是否配置溯源模板",
        "description": "是/否",
        "note": "关联原料溯源报告，根据当前是否有生效的原料原料溯源报告进行回显"
      },
      {
        "name": "状态",
        "description": "主数据状态",
        "note": ""
      },
      {
        "name": "最后更新时间",
        "description": "",
        "note": ""
      },
      {
        "name": "操作",
        "description": "",
        "note": ""
      }
    ],
    "tabs": [
      {
        "name": "关联溯源卡",
        "mode": "trace-cards",
        "fields": [
          {
            "name": "序号"
          },
          {
            "name": "更新时间"
          },
          {
            "name": "查看"
          }
        ],
        "note": "点击查看结构化溯源卡信息"
      },
      {
        "name": "原料验收标准",
        "mode": "info",
        "fields": [
          {
            "name": "验收标准编号"
          },
          {
            "name": "标准版本"
          },
          {
            "name": "感官要求"
          },
          {
            "name": "包装要求"
          },
          {
            "name": "验收温度要求"
          },
          {
            "name": "随货资料要求"
          },
          {
            "name": "标准说明"
          }
        ],
        "note": "示例字段，待确认正式验收标准"
      }
    ],
    "actions": [
      {
        "name": "关联溯源模板",
        "description": "是否配置溯源模板-是：模板详情\n是否配置溯源模板-否：去创建",
        "note": "根据当前物料是否创建溯源模板进行回显操作项"
      },
      {
        "name": "关联溯源卡",
        "description": "展开侧边栏抽屉，显示序号、更新时间和查看。点击查看弹出结构化溯源卡详情。",
        "note": ""
      }
    ],
    "form": [],
    "rules": [
      "物料停用不删除历史批次与报告；停止后续适用操作时保留历史追溯能力"
    ],
    "description": "集中展示原料主数据，为原料报告生成及链路查询提供一致的物料身份",
    "uiActions": [
      "查看",
      "关联溯源模板",
      "关联溯源卡"
    ],
    "detailMode": "drawer"
  },
  {
    "id": "semi",
    "group": "产品管理",
    "name": "半成品管理",
    "kind": "readonly",
    "sourceRange": [
      499,
      519
    ],
    "filters": [
      {
        "name": "半成品编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "半成品名称",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "半成品分类",
        "type": "下拉树",
        "default": "全部",
        "match": "按源分类查询"
      },
      {
        "name": "是否有溯源卡",
        "type": "下拉枚举",
        "default": "全部",
        "match": "精准查询"
      },
      {
        "name": "是否配置溯源模板",
        "type": "下拉枚举",
        "default": "全部",
        "match": "精准查询"
      }
    ],
    "columns": [
      {
        "name": "半成品编码",
        "description": "SAP物料身份信息",
        "note": ""
      },
      {
        "name": "半成品名称",
        "description": "SAP物料身份信息",
        "note": ""
      },
      {
        "name": "半成品分类",
        "description": "来源系统提供的分类",
        "note": ""
      },
      {
        "name": "规格",
        "description": "",
        "note": ""
      },
      {
        "name": "基本单位",
        "description": "",
        "note": ""
      },
      {
        "name": "是否有溯源卡",
        "description": "是/否",
        "note": "关联PLM原料溯源卡，根据当前是否有生效的原料溯源卡进行回显"
      },
      {
        "name": "是否配置溯源模板",
        "description": "是/否",
        "note": "关联原料溯源报告，根据当前是否有生效的原料原料溯源报告进行回显"
      },
      {
        "name": "状态",
        "description": "主数据状态",
        "note": ""
      },
      {
        "name": "最后更新时间",
        "description": "",
        "note": ""
      },
      {
        "name": "操作",
        "description": "",
        "note": ""
      }
    ],
    "tabs": [
      {
        "name": "关联溯源卡",
        "mode": "trace-cards",
        "fields": [
          {
            "name": "序号"
          },
          {
            "name": "更新时间"
          },
          {
            "name": "查看"
          }
        ],
        "note": "点击查看结构化溯源卡信息"
      }
    ],
    "actions": [
      {
        "name": "关联溯源模板",
        "description": "是否配置溯源模板-是：模板详情\n是否配置溯源模板-否：去创建",
        "note": "根据是否创建溯源模板进行回显操作项"
      },
      {
        "name": "关联溯源卡",
        "description": "展开侧边栏抽屉，显示序号、更新时间和查看。点击查看弹出结构化溯源卡详情。",
        "note": ""
      }
    ],
    "form": [],
    "rules": [
      "物料停用不删除历史批次与报告；停止后续适用操作时保留历史追溯能力",
      "半成品是否不参与溯源（即均是在MES中加工过程中产生的物料）需要确认----已确认，半成品也会从外部第三方采购，也需要采购",
      "业务存在单一物料号既外购又自己生产的情况"
    ],
    "description": "集中展示成品主数据，为成品体现其可售门店和对应BOM关系",
    "uiActions": [
      "查看",
      "关联溯源模板",
      "关联溯源卡"
    ],
    "detailMode": "drawer"
  },
  {
    "id": "dish",
    "group": "产品管理",
    "name": "菜品管理",
    "kind": "readonly",
    "sourceRange": [
      519,
      540
    ],
    "filters": [
      {
        "name": "成品编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "成品名称",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "成品分类",
        "type": "下拉树",
        "default": "全部",
        "match": "按源分类查询"
      },
      {
        "name": "关联物料名称",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "是否有溯源卡",
        "type": "下拉枚举",
        "default": "全部",
        "match": "精准查询"
      }
    ],
    "columns": [
      {
        "name": "成品编码",
        "description": "SAP物料身份信息",
        "note": ""
      },
      {
        "name": "成品名称",
        "description": "SAP物料身份信息",
        "note": ""
      },
      {
        "name": "成品分类",
        "description": "来源系统提供的分类",
        "note": ""
      },
      {
        "name": "规格",
        "description": "",
        "note": ""
      },
      {
        "name": "基本单位",
        "description": "",
        "note": ""
      },
      {
        "name": "是否有溯源卡",
        "description": "是/否",
        "note": "关联PLM成品溯源卡，根据当前是否有生效的成品溯源卡进行回显"
      },
      {
        "name": "关联物料",
        "description": "根据多bom关系获取其关联物料并去重。",
        "note": "多个逗号隔开，多个后显示...截断，移入后显示Hover全显"
      },
      {
        "name": "状态",
        "description": "主数据状态",
        "note": ""
      },
      {
        "name": "最后更新时间",
        "description": "",
        "note": ""
      },
      {
        "name": "操作",
        "description": "",
        "note": ""
      }
    ],
    "tabs": [
      {
        "name": "关联溯源卡",
        "mode": "trace-cards",
        "fields": [
          {
            "name": "序号"
          },
          {
            "name": "更新时间"
          },
          {
            "name": "查看"
          }
        ],
        "note": "点击查看结构化溯源卡信息"
      },
      {
        "name": "BOM关系",
        "mode": "table",
        "fields": [
          {
            "name": "父项编码"
          },
          {
            "name": "子项编码"
          },
          {
            "name": "物料编码"
          },
          {
            "name": "物料名称"
          },
          {
            "name": "数量"
          },
          {
            "name": "单位"
          },
          {
            "name": "BOM版本"
          },
          {
            "name": "生效开始时间"
          },
          {
            "name": "生效结束时间"
          },
          {
            "name": "门店编码"
          },
          {
            "name": "映射状态"
          }
        ],
        "note": ""
      },
      {
        "name": "关联门店",
        "mode": "table",
        "fields": [
          {
            "name": "门店编码"
          },
          {
            "name": "门店名称"
          },
          {
            "name": "POS编码"
          },
          {
            "name": "渠道"
          },
          {
            "name": "可售状态"
          }
        ],
        "note": ""
      },
      {
        "name": "制作工艺",
        "mode": "dish-craft",
        "fields": [
          {
            "name": "工艺编号"
          },
          {
            "name": "工艺版本"
          },
          {
            "name": "加工方式"
          },
          {
            "name": "主要设备"
          },
          {
            "name": "标准用时"
          },
          {
            "name": "质量控制点"
          },
          {
            "name": "出餐要求"
          },
          {
            "name": "加工步骤"
          }
        ],
        "note": "原型演示工艺，实际参数以已发布作业标准为准"
      }
    ],
    "actions": [
      {
        "name": "关联物料",
        "description": "抽屉弹出其BOM关系，并可以基于物料编码和物料名称检索BOM子集，分页。\n版本有预定义，可以定义门店当前时间点下使用的bom",
        "note": "基于BOM版本和门店的关联键进行获取。"
      },
      {
        "name": "关联溯源卡",
        "description": "展开侧边栏抽屉，显示序号、更新时间和查看。点击查看弹出结构化溯源卡详情。",
        "note": ""
      },
      {
        "name": "关联门店",
        "description": "根据门店菜单进行关联，弹出弹框，查看当前菜品在POS中可售卖的门店表单，支持门店编码和门店名称检索。分页",
        "note": ""
      }
    ],
    "form": [],
    "rules": [
      "套餐按来源组合关系展开子菜品，保留层级；检测到循环BOM、子项缺编码或无有效映射时标记异常，不无限展开或自行补齐。",
      "系统菜品启用、门店菜单可售、是否开启溯源是三个独立状态；消费者是否可查看由菜品显示配置及消费者展示配置决定。"
    ],
    "description": "集中展示成品主数据，为原料报告生成及链路查询提供一致的物料身份",
    "uiActions": [
      "查看",
      "关联物料",
      "关联溯源卡",
      "关联门店"
    ],
    "detailMode": "drawer"
  },
  {
    "id": "chick",
    "group": "养殖管理",
    "name": "雏鸡入栏记录",
    "kind": "readonly",
    "sourceRange": [
      541,
      559
    ],
    "filters": [
      {
        "name": "入栏单号",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "养殖场",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "养殖批次",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "栋舍",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "上苗时间",
        "type": "时间段",
        "default": "/",
        "match": "起止时间范围查询"
      }
    ],
    "columns": [
      {
        "name": "入栏单号",
        "description": "",
        "note": ""
      },
      {
        "name": "养殖场",
        "description": "",
        "note": ""
      },
      {
        "name": "养殖批次",
        "description": "",
        "note": ""
      },
      {
        "name": "栋舍",
        "description": "",
        "note": ""
      },
      {
        "name": "养殖场批次",
        "description": "",
        "note": ""
      },
      {
        "name": "入栏数量",
        "description": "",
        "note": ""
      },
      {
        "name": "入栏重量(斤)",
        "description": "",
        "note": ""
      },
      {
        "name": "回收过磅单单号",
        "description": "",
        "note": ""
      },
      {
        "name": "养护批次",
        "description": "",
        "note": ""
      },
      {
        "name": "出栏品类",
        "description": "",
        "note": ""
      },
      {
        "name": "上苗日期",
        "description": "",
        "note": ""
      },
      {
        "name": "苗日龄",
        "description": "",
        "note": ""
      },
      {
        "name": "饲养员",
        "description": "",
        "note": ""
      },
      {
        "name": "创建人",
        "description": "",
        "note": ""
      },
      {
        "name": "创建日期",
        "description": "",
        "note": ""
      },
      {
        "name": "最后更新时间",
        "description": "",
        "note": ""
      }
    ],
    "tabs": [
      {
        "name": "批次关联",
        "mode": "table",
        "fields": [
          {
            "name": "养殖批次"
          },
          {
            "name": "SAP订单号"
          },
          {
            "name": "来源系统"
          },
          {
            "name": "入栏单号"
          },
          {
            "name": "行号"
          },
          {
            "name": "关联状态"
          }
        ],
        "note": ""
      }
    ],
    "actions": [],
    "form": [],
    "rules": [
      "只拉取审核通过有效的数据"
    ],
    "description": "展示自有农牧业务的雏鸡入栏记录，查询鸡群批次、养殖场、鸡栋及SAP订单关联，为肉鸡/蛋鸡养殖过程追溯提供起点依据。",
    "uiActions": [
      "查看"
    ],
    "detailMode": "drawer",
    "hiddenFromMenu": true
  },
  {
    "id": "farm-daily",
    "group": "养殖管理",
    "name": "养殖日报管理",
    "kind": "readonly",
    "sourceRange": [
      559,
      575
    ],
    "filters": [
      {
        "name": "业务日期",
        "type": "日期区间",
        "default": "/",
        "match": "日期范围查询"
      },
      {
        "name": "养殖场",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "养殖批次",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "栋舍",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      }
    ],
    "columns": [
      {
        "name": "日志编号",
        "description": "",
        "note": ""
      },
      {
        "name": "业务日期",
        "description": "原始记录及发生日期",
        "note": "/"
      },
      {
        "name": "养殖场",
        "description": "来源明确的养殖位置",
        "note": "缺失保留为空"
      },
      {
        "name": "栋舍",
        "description": "",
        "note": ""
      },
      {
        "name": "养殖批次",
        "description": "",
        "note": ""
      },
      {
        "name": "日初总存栏",
        "description": "",
        "note": ""
      },
      {
        "name": "日末总存栏",
        "description": "",
        "note": ""
      },
      {
        "name": "实际总喂料量",
        "description": "",
        "note": ""
      },
      {
        "name": "单只日耗料量",
        "description": "",
        "note": ""
      },
      {
        "name": "产蛋率(%)",
        "description": "",
        "note": ""
      },
      {
        "name": "当日死淘",
        "description": "",
        "note": ""
      },
      {
        "name": "当日死淘率",
        "description": "",
        "note": ""
      },
      {
        "name": "累计死淘数（只）",
        "description": "",
        "note": ""
      },
      {
        "name": "累计死淘率(%)",
        "description": "",
        "note": ""
      },
      {
        "name": "平均日龄",
        "description": "",
        "note": ""
      },
      {
        "name": "饲养员",
        "description": "",
        "note": ""
      },
      {
        "name": "创建人",
        "description": "",
        "note": ""
      },
      {
        "name": "创建日期",
        "description": "",
        "note": ""
      },
      {
        "name": "最后更新时间",
        "description": "",
        "note": ""
      },
      {
        "name": "操作",
        "description": "",
        "note": ""
      }
    ],
    "tabs": [
      {
        "name": "养殖信息",
        "mode": "table",
        "fields": [
          {
            "name": "养户批次"
          },
          {
            "name": "日龄"
          },
          {
            "name": "苗品种"
          },
          {
            "name": "苗来源"
          },
          {
            "name": "当天初始存栏"
          },
          {
            "name": "死淘数量"
          },
          {
            "name": "鸡场销售只数"
          },
          {
            "name": "售食品厂只数"
          },
          {
            "name": "出栏量"
          },
          {
            "name": "拣出乌皮数"
          },
          {
            "name": "当日存栏"
          },
          {
            "name": "当日实盘"
          },
          {
            "name": "累计乌皮数"
          }
        ],
        "note": "PRD 的养殖信息子表列明至累计乌皮数；其他源字段待接口清单提供。"
      },
      {
        "name": "投喂信息",
        "mode": "table",
        "fields": [],
        "note": "PRD 要求展示子表所有信息，具体字段待农牧接口清单提供。"
      },
      {
        "name": "用药信息",
        "mode": "table",
        "fields": [],
        "note": "PRD 要求展示子表所有信息，具体字段待农牧接口清单提供。"
      },
      {
        "name": "蛋品信息",
        "mode": "table",
        "fields": [],
        "note": "PRD 要求展示子表所有信息，具体字段待农牧接口清单提供。"
      }
    ],
    "actions": [
      {
        "name": "详情",
        "description": "展开抽屉，展示子表信息\n养殖信息（子表所有信息）\n养户批次\n日龄\n苗品种\n苗来源\n当天初始存栏\n死淘数量\n鸡场销售只数 \n售食品厂只数 \n出栏量\n拣出乌皮数\n当日存栏 \n当日实盘\n累计乌皮数\n...\n投喂信息（子表所有信息）\n用药信息（子表所有信息）\n蛋品信息（子表所有信息）",
        "note": "通过切换查看不同子表信息"
      }
    ],
    "form": [],
    "rules": [
      "只拉取审核通过有效的数据"
    ],
    "description": "展示肉鸡和蛋鸡的日常养殖记录，支持核查养殖阶段证据。",
    "uiActions": [
      "查看"
    ],
    "detailMode": "drawer",
    "hiddenFromMenu": true
  },
  {
    "id": "farm-in",
    "group": "养殖管理",
    "name": "入库记录",
    "kind": "readonly",
    "sourceRange": [
      575,
      592
    ],
    "filters": [
      {
        "name": "单据编号",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "库存组织",
        "type": "input",
        "default": "/",
        "match": "名称模糊查询"
      },
      {
        "name": "业务类型",
        "type": "input",
        "default": "/",
        "match": "名称模糊查询"
      },
      {
        "name": "业务日期",
        "type": "时间段",
        "default": "/",
        "match": "精准查询"
      }
    ],
    "columns": [
      {
        "name": "单据编号",
        "description": "",
        "note": ""
      },
      {
        "name": "库存组织",
        "description": "",
        "note": ""
      },
      {
        "name": "业务类型",
        "description": "",
        "note": ""
      },
      {
        "name": "库存事务",
        "description": "",
        "note": ""
      },
      {
        "name": "业务日期",
        "description": "",
        "note": ""
      },
      {
        "name": "业务组织",
        "description": "",
        "note": ""
      },
      {
        "name": "创建人",
        "description": "",
        "note": ""
      },
      {
        "name": "创建日期",
        "description": "",
        "note": ""
      },
      {
        "name": "最后更新时间",
        "description": "",
        "note": ""
      },
      {
        "name": "操作",
        "description": "",
        "note": ""
      }
    ],
    "tabs": [
      {
        "name": "物料明细",
        "mode": "table",
        "fields": [],
        "note": "PRD 未提供物料明细字段清单，接入后按源字段全量展示。"
      }
    ],
    "actions": [
      {
        "name": "详情",
        "description": "展开抽屉，展示子表信息\n物料明细（子表所有信息）",
        "note": "只读"
      }
    ],
    "form": [],
    "rules": [
      "只拉取审核通过有效的数据",
      "是否可能有多条出库关联同一批次肉鸡或鸡蛋"
    ],
    "description": "展示养殖场原料入库明细，只要鸡蛋。",
    "uiActions": [
      "查看"
    ],
    "detailMode": "drawer",
    "hiddenFromMenu": true
  },
  {
    "id": "farm-out",
    "group": "养殖管理",
    "name": "出库记录",
    "kind": "readonly",
    "sourceRange": [
      592,
      615
    ],
    "filters": [
      {
        "name": "单据编号",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "库存组织",
        "type": "input",
        "default": "/",
        "match": "名称模糊查询"
      },
      {
        "name": "业务类型",
        "type": "input",
        "default": "/",
        "match": "名称模糊查询"
      },
      {
        "name": "业务日期",
        "type": "时间段",
        "default": "/",
        "match": "精准查询"
      }
    ],
    "columns": [
      {
        "name": "单据编号",
        "description": "",
        "note": ""
      },
      {
        "name": "销售组织",
        "description": "",
        "note": ""
      },
      {
        "name": "业务类型",
        "description": "",
        "note": ""
      },
      {
        "name": "库存事务",
        "description": "",
        "note": ""
      },
      {
        "name": "业务日期",
        "description": "",
        "note": ""
      },
      {
        "name": "业务组织",
        "description": "",
        "note": ""
      },
      {
        "name": "客户",
        "description": "",
        "note": ""
      },
      {
        "name": "创建人",
        "description": "",
        "note": ""
      },
      {
        "name": "创建日期",
        "description": "",
        "note": ""
      },
      {
        "name": "最后更新时间",
        "description": "",
        "note": ""
      },
      {
        "name": "操作",
        "description": "",
        "note": ""
      },
      {
        "name": "肉鸡：养殖批次（关联键）与mes的收货进行关联",
        "description": "",
        "note": ""
      }
    ],
    "tabs": [
      {
        "name": "物料明细",
        "mode": "table",
        "fields": [],
        "note": "PRD 未提供物料明细字段清单，接入后按源字段全量展示。"
      },
      {
        "name": "上下游关联",
        "mode": "table",
        "fields": [
          {
            "name": "上游养殖批次"
          },
          {
            "name": "SAP订单号"
          },
          {
            "name": "配送任务号"
          },
          {
            "name": "下游收货单号"
          },
          {
            "name": "去向组织"
          },
          {
            "name": "数量"
          },
          {
            "name": "单位"
          },
          {
            "name": "关联状态"
          }
        ],
        "note": ""
      }
    ],
    "actions": [
      {
        "name": "详情",
        "description": "展开抽屉，展示子表信息\n物料明细（子表所有信息）",
        "note": "只读"
      }
    ],
    "form": [],
    "rules": [
      "只拉取审核通过有效的数据",
      "是否可能有多条出库关联同一批次肉鸡或鸡蛋"
    ],
    "description": "展示农牧成品出库/出栏及去向，关联后续配送、门店收货或MES原料收货，覆盖蛋库直送门店与肉鸡直送食品公司的实际业务路线。",
    "uiActions": [
      "查看"
    ],
    "detailMode": "drawer",
    "hiddenFromMenu": true
  },
  {
    "id": "supplier",
    "group": "采购管理",
    "name": "供应商管理",
    "kind": "readonly",
    "sourceRange": [
      616,
      635
    ],
    "filters": [
      {
        "name": "SAP供应商编码",
        "type": "input",
        "default": "/",
        "match": "编码精准"
      },
      {
        "name": "SRM供应商编码",
        "type": "input",
        "default": "/",
        "match": "编码精准"
      },
      {
        "name": "供应商名称",
        "type": "input",
        "default": "/",
        "match": "模糊精准"
      }
    ],
    "columns": [
      {
        "name": "SAP供应商编码",
        "description": "",
        "note": ""
      },
      {
        "name": "SRM供应商编码",
        "description": "",
        "note": ""
      },
      {
        "name": "供应商名称",
        "description": "",
        "note": ""
      },
      {
        "name": "税收编号",
        "description": "",
        "note": ""
      },
      {
        "name": "城市",
        "description": "",
        "note": ""
      },
      {
        "name": "街道",
        "description": "",
        "note": ""
      },
      {
        "name": "状态",
        "description": "",
        "note": ""
      },
      {
        "name": "最后更新时间",
        "description": "",
        "note": ""
      },
      {
        "name": "操作",
        "description": "",
        "note": ""
      }
    ],
    "tabs": [
      {
        "name": "基本信息与营业执照",
        "mode": "info",
        "fields": [
          {
            "name": "SAP供应商编码"
          },
          {
            "name": "SRM供应商编码"
          },
          {
            "name": "供应商名称"
          },
          {
            "name": "税收编号"
          },
          {
            "name": "城市"
          },
          {
            "name": "街道"
          },
          {
            "name": "状态"
          },
          {
            "name": "营业执照"
          }
        ],
        "note": ""
      },
      {
        "name": "关联生产商",
        "mode": "table",
        "fields": [
          {
            "name": "生产商编码"
          },
          {
            "name": "生产商名称"
          },
          {
            "name": "关系来源"
          },
          {
            "name": "生效开始时间"
          },
          {
            "name": "生效结束时间"
          },
          {
            "name": "营业执照"
          },
          {
            "name": "生产许可"
          },
          {
            "name": "补充依据"
          },
          {
            "name": "审核轨迹"
          }
        ],
        "note": ""
      },
      {
        "name": "供应商绩效",
        "mode": "table",
        "fields": [],
        "note": "按 SRM 源字段全量展示；PRD 未枚举具体字段。"
      },
      {
        "name": "供应商附件",
        "mode": "table",
        "fields": [],
        "note": "按 SRM 源字段全量展示；PRD 未枚举具体字段。"
      },
      {
        "name": "供货能力清单",
        "mode": "table",
        "fields": [],
        "note": "按 SRM 源字段全量展示；PRD 未枚举具体字段。"
      }
    ],
    "actions": [
      {
        "name": "详情",
        "description": "点击查看详情，打开详情页\n查看供应商基本信息（营业执照）\n关联生产商信息\n供应商绩效\n供应商附件\n供货能力清单（分页）",
        "note": "关联生厂商信息可点点击各个生厂商的资质附件（营业执照、生产许可...）"
      }
    ],
    "form": [],
    "rules": [
      "供应商管理表是基于SAP的供应商主数据和SRM供应商主数据联表的数据。"
    ],
    "description": "集中展示自营及外采供应商主档、贸易商与生产商关系、资质证件及已提供的绩效信息。支持在SRM关联功能上线前，以本地补充关系兜底生产商断点，并保留补充依据与审核轨迹。",
    "uiActions": [
      "查看"
    ],
    "detailMode": "page"
  },
  {
    "id": "warehouse",
    "group": "仓储管理",
    "name": "仓库信息",
    "kind": "readonly",
    "sourceRange": [
      636,
      651
    ],
    "filters": [
      {
        "name": "工厂编码",
        "type": "input",
        "default": "/",
        "match": "编码精准"
      },
      {
        "name": "工厂名称",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "库存地点编码",
        "type": "input",
        "default": "/",
        "match": "编码精准"
      },
      {
        "name": "库存地点名称",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "库存地点状态",
        "type": "下拉列表",
        "default": "全部",
        "match": "精准查询"
      }
    ],
    "columns": [
      {
        "name": "工厂编码",
        "description": "源仓库标识与名称",
        "note": "源字段只读"
      },
      {
        "name": "工厂名称",
        "description": "SAP 组织编码及名称",
        "note": "映射缺失显式提示"
      },
      {
        "name": "库存地点编码",
        "description": "原料仓、成品仓等源类型",
        "note": "不自行归类"
      },
      {
        "name": "库存地点名称",
        "description": "源地址信息",
        "note": "无数据展示未提供"
      },
      {
        "name": "库存地点状态",
        "description": "源数据状态",
        "note": "启用、禁用"
      },
      {
        "name": "操作",
        "description": "当前可查库区、库存地点数量",
        "note": "可点击查看明细"
      }
    ],
    "tabs": [
      {
        "name": "库存地点温度",
        "mode": "table",
        "fields": [
          {
            "name": "IOT设备编码"
          },
          {
            "name": "采集时间"
          },
          {
            "name": "温度"
          }
        ],
        "note": "未部署测温设备的库存地点显示暂无温度记录。"
      }
    ],
    "actions": [
      {
        "name": "详情",
        "description": "打开页面，查看库存地点温度记录，显示IOT设备编码、采集时间、温度",
        "note": "源信息只读"
      }
    ],
    "form": [],
    "rules": [
      "IOT数据和库存地点进行匹配，在库存地点中显示温度记录，部分仓库库存地点没有温度属于正常情况"
    ],
    "description": "展示仓库及库存地点基础信息，为收货、出库、仓储温度和跨仓调拨提供统一定位依据；支持查看仓库与所属组织、库区、库存地点的层级关系。",
    "uiActions": [
      "查看"
    ],
    "detailMode": "drawer"
  },
  {
    "id": "warehouse-in",
    "group": "仓储管理",
    "name": "收货信息管理",
    "kind": "readonly",
    "sourceRange": [
      651,
      671
    ],
    "filters": [
      {
        "name": "收货单号",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "入库单类型",
        "type": "下拉列表",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "仓库名称",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "物料编码",
        "type": "input",
        "default": "/",
        "match": "编码精准"
      },
      {
        "name": "物料名称",
        "type": "input",
        "default": "/",
        "match": "名称模糊查询"
      },
      {
        "name": "物料批次",
        "type": "input",
        "default": "/",
        "match": "编码精准"
      },
      {
        "name": "生产日期",
        "type": "时间点",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "供应商",
        "type": "下拉列表",
        "default": "全部",
        "match": "模糊查询"
      },
      {
        "name": "收货时间",
        "type": "时间段",
        "default": "/",
        "match": "区间查询"
      }
    ],
    "columns": [
      {
        "name": "收货单号",
        "description": "",
        "note": ""
      },
      {
        "name": "仓库名称",
        "description": "",
        "note": ""
      },
      {
        "name": "入库单类型",
        "description": "",
        "note": ""
      },
      {
        "name": "质检状态",
        "description": "",
        "note": ""
      },
      {
        "name": "物料编码",
        "description": "",
        "note": ""
      },
      {
        "name": "物料名称",
        "description": "",
        "note": ""
      },
      {
        "name": "物料批次",
        "description": "",
        "note": ""
      },
      {
        "name": "生产日期",
        "description": "",
        "note": ""
      },
      {
        "name": "失效日期",
        "description": "",
        "note": ""
      },
      {
        "name": "供应商",
        "description": "",
        "note": ""
      },
      {
        "name": "生厂商",
        "description": "",
        "note": ""
      },
      {
        "name": "收货日期",
        "description": "",
        "note": ""
      },
      {
        "name": "创建日期",
        "description": "",
        "note": ""
      },
      {
        "name": "最后更新时间",
        "description": "",
        "note": ""
      },
      {
        "name": "操作",
        "description": "",
        "note": ""
      },
      {
        "name": "数量",
        "description": "",
        "note": ""
      },
      {
        "name": "采购订单号",
        "description": "",
        "note": ""
      }
    ],
    "tabs": [
      {
        "name": "质检单",
        "mode": "table",
        "fields": [
          {
            "name": "质检单号"
          },
          {
            "name": "质检规则"
          },
          {
            "name": "质检方式"
          },
          {
            "name": "质检类型"
          },
          {
            "name": "包装"
          },
          {
            "name": "总数"
          },
          {
            "name": "抽检数"
          },
          {
            "name": "已检数合格数"
          },
          {
            "name": "不合格数"
          },
          {
            "name": "零价值数"
          },
          {
            "name": "责任采购人"
          },
          {
            "name": "审核状态"
          },
          {
            "name": "审核用户"
          },
          {
            "name": "审核备注"
          },
          {
            "name": "审核时间"
          }
        ],
        "note": ""
      },
      {
        "name": "随货票证",
        "mode": "table",
        "fields": [
          {
            "name": "文件名"
          },
          {
            "name": "更新时间"
          },
          {
            "name": "预览"
          }
        ],
        "note": ""
      }
    ],
    "actions": [
      {
        "name": "详情",
        "description": "展开抽屉，展示2个tab\n质检单（只关联审核通过且为当前入库单的质检记录）\n质检单有如下字段：\n质检单号\n质检规则\n质检方式\n质检类型\n包装\n总数\n抽检数\n已检数合格数\n不合格数\n零价值数\n责任采购人\n审核状态\n审核用户\n审核备注\n审核时间\n随货票证（只关联当前入库单的随货票证）\n有多个附件，以下是字段：\n文件名\n更新时间\n预览",
        "note": "不修改源单"
      }
    ],
    "form": [],
    "rules": [
      "同物料同批次的跨仓调拨仅追加收出库事件，不重复生成原料报告/菜品报告",
      "WMS 实际保质期作为物料判断过期预警的唯一条件",
      "调拨、退货和冲销均保留原记录及关联方向；已生成报告须展示后续变化及数据版本，不将冲销单当成新的正向收货。",
      "待确认事项实际效期权威规则、收货与检验关联键、WMS 源状态及冲销机制、检验附件采集范围和历史数据覆盖。"
    ],
    "description": "按收货单行展示大仓实际收货、批次、数量及批检/质检信息，为原料溯源报告生成和跨仓追溯提供可核查的业务依据。",
    "uiActions": [
      "查看"
    ],
    "detailMode": "drawer"
  },
  {
    "id": "warehouse-out",
    "group": "仓储管理",
    "name": "出库信息管理",
    "kind": "readonly",
    "sourceRange": [
      671,
      687
    ],
    "filters": [
      {
        "name": "配送单号",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "出库仓库",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "送达方",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "物料编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "物料名称",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "物料批次",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "生产日期",
        "type": "时间段",
        "default": "/",
        "match": "闭合区间"
      },
      {
        "name": "关联入库单号",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      }
    ],
    "columns": [
      {
        "name": "配送单号",
        "description": "一个门店的单一温层至少一个单号",
        "note": ""
      },
      {
        "name": "出库仓库",
        "description": "",
        "note": ""
      },
      {
        "name": "物料编码",
        "description": "多个",
        "note": ""
      },
      {
        "name": "物料名称",
        "description": "多个",
        "note": ""
      },
      {
        "name": "物料批次",
        "description": "多个",
        "note": ""
      },
      {
        "name": "送达方",
        "description": "",
        "note": ""
      },
      {
        "name": "发货日期",
        "description": "",
        "note": ""
      },
      {
        "name": "创建日期",
        "description": "",
        "note": ""
      },
      {
        "name": "最后更新时间",
        "description": "",
        "note": ""
      },
      {
        "name": "操作",
        "description": "",
        "note": ""
      },
      {
        "name": "数量",
        "description": "",
        "note": ""
      },
      {
        "name": "出库类型",
        "description": "",
        "note": ""
      }
    ],
    "tabs": [
      {
        "name": "出库物料明细",
        "mode": "table",
        "fields": [
          {
            "name": "货主"
          },
          {
            "name": "物料编码"
          },
          {
            "name": "物料名称"
          },
          {
            "name": "数量"
          },
          {
            "name": "单位"
          },
          {
            "name": "物料批次"
          },
          {
            "name": "生产日期"
          },
          {
            "name": "失效日期"
          },
          {
            "name": "入库日期"
          },
          {
            "name": "关联入库单号"
          },
          {
            "name": "入库日期"
          }
        ],
        "note": ""
      }
    ],
    "actions": [
      {
        "name": "详情",
        "description": "基于出库单多个出库物料进行明细行分页，有以下字段，并支持部分字段筛选\n货主\n物料编码（支持筛选）\n物料名称（支持筛选）\n数量\n单位\n物料批次（支持筛选）\n生产日期\n失效日期\n入库日期\n关联入库单号\n入库日期",
        "note": "只读"
      }
    ],
    "form": [],
    "rules": [
      "可能存在无 TMS 的第三方临时配送，可依据真实门店收货与真实 WMS 出库关联，但须校验物料、批次",
      "同一原料跨仓出入库追加到既有批次链路，报告不重复生成"
    ],
    "description": "按 WMS 出库单行展示大仓发货、生产领料、跨仓调拨等实际出库信息，向下关联运输、央厨收货及门店收货",
    "uiActions": [
      "查看"
    ],
    "detailMode": "drawer"
  },
  {
    "id": "mes-in",
    "group": "加工管理",
    "name": "原料收货记录",
    "kind": "readonly",
    "sourceRange": [
      688,
      705
    ],
    "filters": [
      {
        "name": "收货单号",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "工厂名称",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "物料编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "物料名称",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "物料批次",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "供应商",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "生厂商",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "收货时间",
        "type": "时间段",
        "default": "全部",
        "match": "闭合区间"
      }
    ],
    "columns": [
      {
        "name": "收货单号",
        "description": "",
        "note": ""
      },
      {
        "name": "工厂名称",
        "description": "",
        "note": ""
      },
      {
        "name": "物料编码",
        "description": "",
        "note": ""
      },
      {
        "name": "物料名称",
        "description": "",
        "note": ""
      },
      {
        "name": "物料批次",
        "description": "",
        "note": ""
      },
      {
        "name": "到货数量",
        "description": "",
        "note": ""
      },
      {
        "name": "收货数量",
        "description": "",
        "note": ""
      },
      {
        "name": "单位",
        "description": "",
        "note": ""
      },
      {
        "name": "供应商",
        "description": "",
        "note": ""
      },
      {
        "name": "生厂商",
        "description": "",
        "note": ""
      },
      {
        "name": "收货时间",
        "description": "",
        "note": ""
      },
      {
        "name": "创建日期",
        "description": "",
        "note": ""
      },
      {
        "name": "最后更新时间",
        "description": "",
        "note": ""
      },
      {
        "name": "操作",
        "description": "",
        "note": ""
      }
    ],
    "tabs": [
      {
        "name": "质检单主表",
        "mode": "info",
        "fields": [
          {
            "name": "检验申请单号"
          },
          {
            "name": "业务类型"
          },
          {
            "name": "检验结论"
          },
          {
            "name": "检验时间"
          }
        ],
        "note": ""
      },
      {
        "name": "质检单子表",
        "mode": "table",
        "fields": [
          {
            "name": "序号"
          },
          {
            "name": "检测项目"
          },
          {
            "name": "检测分项"
          },
          {
            "name": "计量单位"
          },
          {
            "name": "报出值"
          },
          {
            "name": "合格范围"
          },
          {
            "name": "英文报出值"
          },
          {
            "name": "结论"
          },
          {
            "name": "附件"
          }
        ],
        "note": ""
      },
      {
        "name": "随货票证",
        "mode": "table",
        "fields": [
          {
            "name": "文件名"
          },
          {
            "name": "更新时间"
          },
          {
            "name": "预览"
          },
          {
            "name": "下载"
          }
        ],
        "note": ""
      }
    ],
    "actions": [
      {
        "name": "详情",
        "description": "展开抽屉，展示2个tab\n质检单（只关联审核通过且为当前入库单的质检记录）\n质检单主表有如下字段：\n检验申请单号\n业务类型\n检验结论\n检验时间\n质检单子表有如下字段：\n序号\n检测项目\n检测分项\n计量单位\n报出值\n合格范围\n英文报出值\n结论\n附件\n随货票证（只关联当前入库单的随货票证）\n有多个附件，以下是字段：\n文件名\n更新时间\n预览\n下载",
        "note": "只读"
      }
    ],
    "form": [],
    "rules": [
      "生禽按原 PRD 直接进入 MES 屠宰加工链路处理，不要求先有大仓收出库；"
    ],
    "description": "展示央厨实际接收原料的批次及数量，关联大仓出库或直接到厂的上游来源，为生产订单投料追溯提供收货依据。",
    "uiActions": [
      "查看"
    ],
    "detailMode": "drawer"
  },
  {
    "id": "production",
    "group": "加工管理",
    "name": "生产订单管理",
    "kind": "readonly",
    "sourceRange": [
      705,
      723
    ],
    "filters": [
      {
        "name": "生产订单号",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "工厂",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "生产批号",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "产品批次",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "订单类型",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "产品编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "产品名称",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "计划时间",
        "type": "时间段",
        "default": "/",
        "match": "闭合查询"
      }
    ],
    "columns": [
      {
        "name": "生产订单号",
        "description": "",
        "note": ""
      },
      {
        "name": "工厂",
        "description": "",
        "note": ""
      },
      {
        "name": "生产批号",
        "description": "",
        "note": ""
      },
      {
        "name": "产品批次",
        "description": "",
        "note": ""
      },
      {
        "name": "订单类型",
        "description": "",
        "note": ""
      },
      {
        "name": "产品编码",
        "description": "",
        "note": ""
      },
      {
        "name": "产品名称",
        "description": "",
        "note": ""
      },
      {
        "name": "计划时间",
        "description": "时间段",
        "note": ""
      },
      {
        "name": "实际产量",
        "description": "",
        "note": ""
      },
      {
        "name": "单位",
        "description": "",
        "note": ""
      },
      {
        "name": "创建日期",
        "description": "",
        "note": ""
      },
      {
        "name": "最后更新时间",
        "description": "",
        "note": ""
      },
      {
        "name": "操作",
        "description": "",
        "note": ""
      }
    ],
    "tabs": [
      {
        "name": "投料明细",
        "mode": "table",
        "fields": [
          {
            "name": "物料编码"
          },
          {
            "name": "物料名称"
          },
          {
            "name": "类型"
          },
          {
            "name": "计划量"
          },
          {
            "name": "报工量汇总"
          },
          {
            "name": "原料批次"
          },
          {
            "name": "报工明细"
          },
          {
            "name": "单位"
          },
          {
            "name": "供应商"
          },
          {
            "name": "生产商"
          }
        ],
        "note": ""
      },
      {
        "name": "工序报告",
        "mode": "table",
        "fields": [
          {
            "name": "工单流水号"
          },
          {
            "name": "工序"
          },
          {
            "name": "工序报告"
          },
          {
            "name": "更新时间"
          },
          {
            "name": "预览"
          },
          {
            "name": "下载"
          }
        ],
        "note": ""
      }
    ],
    "actions": [
      {
        "name": "投料明细",
        "description": "展开抽屉，展示投料明细\n以下是明细表字段：\n物料编码\n物料名称\n类型\n计划量\n报工量汇总\n原料批次\n报工明细\n单位\n供应商\n生产商",
        "note": "按照物料编码进行排序，物料编码一致按照报工明细由大到小倒序"
      },
      {
        "name": "工序报告",
        "description": "展开抽屉，展示工序报告\n以下是工序报告明细字段：\n工单流水号\n工序\n工序报告\n更新时间\n预览\n下载",
        "note": ""
      }
    ],
    "form": [],
    "rules": [
      "不区分原料-半成品的关系，只关心原料-成品的关系。",
      "待确认事项MES 当前建设进度、一期工厂与工序范围"
    ],
    "description": "展示央厨生产订单、真实原料投入与成品产出批次及工序报告，支撑原料到半成品的批次关系和加工过程核查。",
    "uiActions": [
      "查看",
      "投料明细",
      "工序报告"
    ],
    "detailMode": "drawer",
    "detailFields": [
      {
        "name": "车间",
        "description": "支持多个车间"
      },
      {
        "name": "流水线",
        "description": "支持多条流水线"
      }
    ]
  },
  {
    "id": "driver",
    "group": "配送管理",
    "name": "司机信息管理",
    "kind": "readonly",
    "sourceRange": [
      724,
      743
    ],
    "filters": [
      {
        "name": "司机编号",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "司机姓名",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "承运商编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "承运商名称",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "状态",
        "type": "下拉列表",
        "default": "全部",
        "match": "精准查询"
      }
    ],
    "columns": [
      {
        "name": "司机编号",
        "description": "",
        "note": ""
      },
      {
        "name": "司机姓名",
        "description": "",
        "note": ""
      },
      {
        "name": "司机性质",
        "description": "",
        "note": ""
      },
      {
        "name": "承运商编码",
        "description": "",
        "note": ""
      },
      {
        "name": "承运商",
        "description": "",
        "note": ""
      },
      {
        "name": "创建日期",
        "description": "",
        "note": ""
      },
      {
        "name": "最后更新时间",
        "description": "",
        "note": ""
      },
      {
        "name": "操作",
        "description": "",
        "note": ""
      }
    ],
    "tabs": [
      {
        "name": "驾驶证信息",
        "mode": "info",
        "fields": [
          {
            "name": "驾驶证"
          },
          {
            "name": "预览"
          }
        ],
        "note": ""
      }
    ],
    "actions": [
      {
        "name": "详情",
        "description": "展示驾驶证信息\n支持预览",
        "note": ""
      }
    ],
    "form": [],
    "rules": [
      "不默认采集身份证、手机号等无关的信息；",
      "临时第三方、私家车等无源记录时，在配送任务中标识责任信息缺失，不建立虚构司机档案补齐链路。",
      "需要拉取TMS司机ID，作为唯一标识"
    ],
    "description": "展示配送任务中可核实的司机基础信息",
    "uiActions": [
      "查看"
    ],
    "detailMode": "drawer",
    "healthFields": [
      {
        "name": "健康证编号"
      },
      {
        "name": "健康证持有人"
      },
      {
        "name": "健康证签发机构"
      },
      {
        "name": "健康证签发日期"
      },
      {
        "name": "健康证有效期至"
      },
      {
        "name": "健康证状态"
      },
      {
        "name": "健康证图片"
      }
    ]
  },
  {
    "id": "vehicle",
    "group": "配送管理",
    "name": "车辆信息管理",
    "kind": "readonly",
    "sourceRange": [
      743,
      759
    ],
    "filters": [
      {
        "name": "车辆编号",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "车牌号",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "状态",
        "type": "下拉列表",
        "default": "全部",
        "match": "精准查询"
      }
    ],
    "columns": [
      {
        "name": "车辆编号",
        "description": "",
        "note": ""
      },
      {
        "name": "车牌号",
        "description": "",
        "note": ""
      },
      {
        "name": "供应商编码",
        "description": "",
        "note": ""
      },
      {
        "name": "供应商名称",
        "description": "",
        "note": ""
      },
      {
        "name": "车辆类型",
        "description": "",
        "note": ""
      },
      {
        "name": "跟踪设备",
        "description": "",
        "note": ""
      },
      {
        "name": "跟踪设备号",
        "description": "可能多个",
        "note": ""
      },
      {
        "name": "车辆类型",
        "description": "",
        "note": ""
      },
      {
        "name": "状态",
        "description": "",
        "note": ""
      },
      {
        "name": "创建日期",
        "description": "",
        "note": ""
      },
      {
        "name": "最后更新时间",
        "description": "",
        "note": ""
      }
    ],
    "tabs": [],
    "actions": [],
    "form": [],
    "rules": [],
    "description": "展示运输车辆及承运主体信息，",
    "uiActions": [],
    "detailMode": "drawer"
  },
  {
    "id": "delivery",
    "group": "配送管理",
    "name": "配送信息管理",
    "kind": "readonly",
    "sourceRange": [
      759,
      778
    ],
    "filters": [
      {
        "name": "配送任务号",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "仓库",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "移动类型",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "订单类型",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "配送日期",
        "type": "时间段",
        "default": "",
        "match": "闭合区间"
      },
      {
        "name": "状态",
        "type": "下拉列表",
        "default": "全部",
        "match": "精准查询"
      }
    ],
    "columns": [
      {
        "name": "配送任务号",
        "description": "",
        "note": ""
      },
      {
        "name": "区域中心",
        "description": "",
        "note": ""
      },
      {
        "name": "仓库",
        "description": "",
        "note": ""
      },
      {
        "name": "移动类型",
        "description": "",
        "note": ""
      },
      {
        "name": "订单类型",
        "description": "",
        "note": ""
      },
      {
        "name": "配送日期",
        "description": "",
        "note": ""
      },
      {
        "name": "货主",
        "description": "",
        "note": ""
      },
      {
        "name": "温层",
        "description": "",
        "note": ""
      },
      {
        "name": "发货时间",
        "description": "",
        "note": ""
      },
      {
        "name": "送达时间",
        "description": "",
        "note": ""
      },
      {
        "name": "状态",
        "description": "",
        "note": ""
      },
      {
        "name": "创建日期",
        "description": "",
        "note": ""
      },
      {
        "name": "最后更新时间",
        "description": "",
        "note": ""
      },
      {
        "name": "操作",
        "description": "",
        "note": ""
      },
      {
        "name": "配送单号（与门店收货关联）",
        "description": "多个",
        "note": ""
      }
    ],
    "tabs": [
      {
        "name": "车辆信息",
        "mode": "info",
        "fields": [
          {
            "name": "车辆编号"
          },
          {
            "name": "车牌号"
          },
          {
            "name": "司机编号"
          },
          {
            "name": "司机姓名"
          },
          {
            "name": "承运商"
          },
          {
            "name": "车辆类型"
          },
          {
            "name": "跟踪设备号"
          }
        ],
        "note": ""
      },
      {
        "name": "线路信息",
        "mode": "table",
        "fields": [
          {
            "name": "配送单号"
          },
          {
            "name": "站点顺序"
          },
          {
            "name": "收货门店编码"
          },
          {
            "name": "收货门店"
          },
          {
            "name": "发车时间"
          },
          {
            "name": "送达时间"
          },
          {
            "name": "起点纬度"
          },
          {
            "name": "起点经度"
          },
          {
            "name": "终点纬度"
          },
          {
            "name": "终点经度"
          },
          {
            "name": "配送状态"
          }
        ],
        "note": ""
      },
      {
        "name": "温度信息",
        "mode": "table",
        "fields": [
          {
            "name": "设备编码"
          },
          {
            "name": "记录时间"
          },
          {
            "name": "记录温度"
          },
          {
            "name": "温层"
          },
          {
            "name": "配送开始时间"
          },
          {
            "name": "配送结束时间"
          }
        ],
        "note": ""
      },
      {
        "name": "装载批次",
        "mode": "table",
        "fields": [
          {
            "name": "物料编码"
          },
          {
            "name": "物料名称"
          },
          {
            "name": "物料批次"
          },
          {
            "name": "数量"
          },
          {
            "name": "单位"
          },
          {
            "name": "关联出库单号"
          },
          {
            "name": "关联收货单号"
          }
        ],
        "note": ""
      }
    ],
    "actions": [
      {
        "name": "详情",
        "description": "新打开详情页，查看配送基本信息、车辆信息、线路信息、温度信息",
        "note": "温度信息需要根据当前门店配送的起止时间去根据IOT温度表中进行匹配"
      }
    ],
    "form": [],
    "rules": [
      "多站配送不得将车辆全天数据或完成配送后的温度绑定全部批次；中途换车按真实分段关联。",
      "第三方临时配送、私家车等没有 TMS 数据时，允许从真实收货追到真实出库，校验物料及时间；运输、线路、司机、温度等未知内容保留缺失。",
      "供应商直送、蛋库直送不要求经过大仓，按实际可用出发、运输、收货证据展示；无上游单据不强行关联最近一笔 WMS 出库"
    ],
    "description": "展示配送任务、线路、站点、真实装卸/到达信息及运输温度，为出库到收货建立有依据的关联，并呈现非标配送和运输数据缺失。",
    "uiActions": [
      "查看"
    ],
    "detailMode": "page"
  },
  {
    "id": "store",
    "group": "门店管理",
    "name": "门店信息管理",
    "kind": "readonly",
    "sourceRange": [
      779,
      798
    ],
    "filters": [
      {
        "name": "门店编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "门店名称",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "门店地址",
        "type": "下拉列表",
        "default": "全部",
        "match": "省市区区划，可选择任意一级"
      },
      {
        "name": "经营类型",
        "type": "下拉列表",
        "default": "全部",
        "match": "直营店\n特许加盟店\n特许直营店"
      },
      {
        "name": "所属公司名称",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "营业状态",
        "type": "下拉列表",
        "default": "全部",
        "match": "重装\n正常\n冻结(暂停营业)\n关店\n新店待开"
      },
      {
        "name": "选餐方式",
        "type": "下拉列表",
        "default": "全部",
        "match": "点餐式\n选餐式\n自选+称重\n自选+体验\n自选式"
      }
    ],
    "columns": [
      {
        "name": "门店编码",
        "description": "",
        "note": ""
      },
      {
        "name": "门店名称",
        "description": "",
        "note": ""
      },
      {
        "name": "门店地址",
        "description": "",
        "note": ""
      },
      {
        "name": "经营类型",
        "description": "",
        "note": ""
      },
      {
        "name": "所属公司名称",
        "description": "",
        "note": ""
      },
      {
        "name": "选餐方式",
        "description": "",
        "note": ""
      },
      {
        "name": "营业状态",
        "description": "",
        "note": ""
      },
      {
        "name": "创建日期",
        "description": "",
        "note": ""
      },
      {
        "name": "最后更新时间",
        "description": "",
        "note": ""
      },
      {
        "name": "操作",
        "description": "",
        "note": ""
      }
    ],
    "tabs": [
      {
        "name": "门店基本信息",
        "mode": "info",
        "fields": [
          {
            "name": "门店编码"
          },
          {
            "name": "HR门店编码"
          },
          {
            "name": "SAP门店编码"
          },
          {
            "name": "门店名称"
          },
          {
            "name": "门店地址"
          },
          {
            "name": "经营类型"
          },
          {
            "name": "门店营业执照"
          },
          {
            "name": "商圈类型"
          },
          {
            "name": "所属公司名称"
          },
          {
            "name": "选餐方式"
          },
          {
            "name": "测试门店类型"
          },
          {
            "name": "运营大区名称"
          },
          {
            "name": "运营分区名称"
          },
          {
            "name": "战区负责人姓名"
          },
          {
            "name": "营业状态"
          },
          {
            "name": "创建日期"
          },
          {
            "name": "最后更新时间"
          }
        ],
        "note": ""
      },
      {
        "name": "门店售卖菜单",
        "mode": "table",
        "fields": [
          {
            "name": "菜品ID"
          },
          {
            "name": "菜品编码"
          },
          {
            "name": "菜品名称"
          },
          {
            "name": "售卖开始时间"
          },
          {
            "name": "售卖结束时间"
          },
          {
            "name": "售卖周期"
          }
        ],
        "note": "四种渠道：TS01（堂食）、WX02（堂食扫码点餐）、MT03（美团外卖）、EL04（饿了么外卖）。"
      },
      {
        "name": "门店人员健康证",
        "mode": "table",
        "fields": [
          {
            "name": "所属门店编码"
          },
          {
            "name": "人员ID"
          },
          {
            "name": "健康证有效期"
          },
          {
            "name": "状态"
          },
          {
            "name": "附件地址"
          }
        ],
        "note": ""
      },
      {
        "name": "门店工作日志",
        "mode": "table",
        "fields": [],
        "note": "工作日志字段待 BOH 接口清单提供。"
      }
    ],
    "actions": [
      {
        "name": "详情",
        "description": "新打开详情页，显示以下模块和数据\n门店基本信息：\n门店编码\nHR门店编码\nSAP门店编码\n门店名称\n门店地址\n经营类型\n门店营业执照\n商圈类型\n所属公司名称\n选餐方式\n测试门店类型\n运营大区名称\n运营分区名称\n战区负责人姓名\n营业状态\n创建日期\n最后更新时间\n门店售卖菜单：\n分为四种渠道：TS01（堂食）、\nWX02（堂食扫码点餐）、MT03（美团外卖）、EL04（饿了么外\n卖），支持对下方子表筛选，子表字段：\n菜品ID\n菜品编码\n菜品名称\n售卖开始时间\n售卖结束时间\n售卖周期\n门店人员健康证：\n所属门店编码\n人员ID\n健康证有效期\n状态\n附件地址\n门店工作日志：\n",
        "note": "只读"
      }
    ],
    "form": [],
    "rules": [
      "门店停业、关店或更名不删除历史报告",
      "门店处于营业状态、菜单中存在菜品均不能证明该菜品当天实际在售",
      "待确认事项不同渠道可能有重复菜品，溯源系统值只会生成一个菜品报告，支撑不同渠道的溯源"
    ],
    "description": "展示门店主档和可获取的门店工作日志，为门店收货、存储、菜品候选关联及消费者溯源配置提供统一门店标识。",
    "uiActions": [
      "查看"
    ],
    "detailMode": "page"
  },
  {
    "id": "location",
    "group": "门店管理",
    "name": "门店库存地点信息",
    "kind": "editable",
    "sourceRange": [
      798,
      814
    ],
    "filters": [
      {
        "name": "库存地点编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "门店编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "门店名称",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "库存地点类型",
        "type": "下拉列表",
        "default": "ALL",
        "match": "/"
      },
      {
        "name": "状态",
        "type": "下拉列表",
        "default": "ALL",
        "match": "/"
      }
    ],
    "columns": [
      {
        "name": "库存地点编码",
        "description": "库存地点数据唯一标识编码",
        "note": "我方定义：#门店编码+该门店下四位流水号"
      },
      {
        "name": "库存地点名称",
        "description": "库存地点数据对应名称",
        "note": ""
      },
      {
        "name": "库存地点说明",
        "description": "",
        "note": ""
      },
      {
        "name": "门店编码",
        "description": "库存地点关联门店标识编码",
        "note": ""
      },
      {
        "name": "门店名称",
        "description": "库存地点关联门店标识名称",
        "note": ""
      },
      {
        "name": "库存地点类型",
        "description": "库存地点的类型",
        "note": ""
      },
      {
        "name": "创建时间",
        "description": "库存地点的创建时间：YYYY/MM/DD-HH:MM:SS",
        "note": ""
      },
      {
        "name": "最后更新时间",
        "description": "数据最后更新、变更时间",
        "note": ""
      },
      {
        "name": "状态",
        "description": "启用/禁用",
        "note": ""
      },
      {
        "name": "操作",
        "description": "点击查看详情",
        "note": ""
      }
    ],
    "tabs": [
      {
        "name": "设备绑定",
        "mode": "table",
        "fields": [
          {
            "name": "设备编码"
          },
          {
            "name": "生效开始时间"
          },
          {
            "name": "生效结束时间"
          },
          {
            "name": "状态"
          }
        ],
        "note": ""
      },
      {
        "name": "配置历史",
        "mode": "table",
        "fields": [
          {
            "name": "变更人"
          },
          {
            "name": "变更时间"
          },
          {
            "name": "变更类型"
          },
          {
            "name": "变更前"
          },
          {
            "name": "变更后"
          }
        ],
        "note": ""
      }
    ],
    "actions": [
      {
        "name": "详情",
        "description": "新打开该详情弹窗",
        "note": ""
      },
      {
        "name": "添加",
        "description": "新打开详情新建弹窗",
        "note": ""
      },
      {
        "name": "批量添加",
        "description": "弹框进行附件下载与上传",
        "note": ""
      },
      {
        "name": "配置历史",
        "description": "查看库存地点、启停及绑定关系的变更",
        "note": "支持按时点回查"
      }
    ],
    "form": [
      {
        "name": "库存地点编码"
      },
      {
        "name": "库存地点名称"
      },
      {
        "name": "库存地点说明"
      },
      {
        "name": "门店编码"
      },
      {
        "name": "门店名称"
      },
      {
        "name": "库存地点类型"
      },
      {
        "name": "设备编码"
      },
      {
        "name": "生效开始时间"
      },
      {
        "name": "生效结束时间"
      },
      {
        "name": "状态"
      }
    ],
    "rules": [],
    "description": "管理门店库存地点基础资料，可按源系统同步或在中台本地配置，维护门店、库存地点与 IOT 测点的有效映射，为存储配置及库存地点温度查看提供位置基础。",
    "uiActions": [
      "查看",
      "编辑",
      "配置历史"
    ],
    "detailMode": "drawer"
  },
  {
    "id": "store-in",
    "group": "门店管理",
    "name": "门店收货记录",
    "kind": "readonly",
    "sourceRange": [
      814,
      832
    ],
    "filters": [
      {
        "name": "配送单号",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "门店编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "门店名称",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "门店经营类型",
        "type": "下拉枚举",
        "default": "全部",
        "match": "精准查询"
      },
      {
        "name": "送货类型",
        "type": "下拉枚举",
        "default": "全部",
        "match": "精准查询"
      },
      {
        "name": "配送类型",
        "type": "下拉枚举",
        "default": "全部",
        "match": "精准查询"
      },
      {
        "name": "采购订单号",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "货品类别名称",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "发货日期",
        "type": "时间段",
        "default": "/",
        "match": "闭合区间"
      }
    ],
    "columns": [
      {
        "name": "配送单号",
        "description": "（BOH收到8开头的单号）",
        "note": ""
      },
      {
        "name": "收货日期",
        "description": "",
        "note": ""
      },
      {
        "name": "供货机构编码",
        "description": "",
        "note": "配送服务商"
      },
      {
        "name": "送货类型",
        "description": "1＝直送，2＝代送",
        "note": ""
      },
      {
        "name": "TMS 配送方式",
        "description": "ZC＝整车，ZT＝自提，KD＝快递",
        "note": ""
      },
      {
        "name": "门店编码",
        "description": "",
        "note": ""
      },
      {
        "name": "门店名称",
        "description": "",
        "note": ""
      },
      {
        "name": "门店经营类型",
        "description": "",
        "note": ""
      },
      {
        "name": "货品类别名称",
        "description": "",
        "note": ""
      },
      {
        "name": "收货单确认状态",
        "description": "1＝待确认，2＝已确认",
        "note": ""
      },
      {
        "name": "收货单确认人",
        "description": "",
        "note": ""
      },
      {
        "name": "收货单确认时间",
        "description": "",
        "note": ""
      },
      {
        "name": "采购订单号",
        "description": "",
        "note": "点到点  既是门店报货的 也是给供应商的\n总仓/分仓配送：是仓库和门店的关联交易单"
      },
      {
        "name": "发货日期及时间",
        "description": "",
        "note": ""
      },
      {
        "name": "审批状态",
        "description": "1＝待审批，2＝部分审批，3＝全部审批",
        "note": "无需按照审批状态进行数据拉取，默认数据产生即拉取"
      },
      {
        "name": "创建日期",
        "description": "",
        "note": ""
      },
      {
        "name": "最后更新时间",
        "description": "",
        "note": ""
      },
      {
        "name": "操作",
        "description": "",
        "note": ""
      }
    ],
    "tabs": [
      {
        "name": "实收物料",
        "mode": "table",
        "fields": [
          {
            "name": "序号"
          },
          {
            "name": "收货门店"
          },
          {
            "name": "货品编码"
          },
          {
            "name": "实收数量（最多保留 4 位小数）"
          },
          {
            "name": "收货计量单位编码"
          },
          {
            "name": "生产日期"
          },
          {
            "name": "保质期天数"
          },
          {
            "name": "产品批次"
          },
          {
            "name": "删除标识（N＝未删除，Y＝已删除）"
          },
          {
            "name": "采购订单号（支持一张交货单对应多个采购订单）"
          },
          {
            "name": "供应商编码"
          },
          {
            "name": "供应商名称"
          }
        ],
        "note": ""
      }
    ],
    "actions": [
      {
        "name": "详情",
        "description": "抽屉展示实收的各个物料子表\n子表字段如下：\n序号\n收货门店\n货品编码\n实收数量（最多保留 4 位小数）\n收货计量单位编码\n生产日期\n保质期天数\n产品批次\n删除标识（N＝未删除，Y＝已删除）\n采购订单号（支持一张交货单对应多个采购订单）\n供应商编码\n供应商名称",
        "note": ""
      }
    ],
    "form": [],
    "rules": [
      "缺 TMS 时可直接匹配真实大仓出库",
      "供应商直送、鸡蛋蛋库直送按真实源单起链，不要求补齐不存在的大仓/TMS 环节"
    ],
    "description": "展示门店真实收货单及明细，关联可核实的配送、出库和原料报告，作为结合门店可售菜品 BOM 生成菜品溯源候选关系的依据。",
    "uiActions": [
      "查看"
    ],
    "detailMode": "drawer"
  },
  {
    "id": "storage",
    "group": "门店管理",
    "name": "门店存储配置",
    "kind": "editable",
    "sourceRange": [
      832,
      853
    ],
    "filters": [
      {
        "name": "门店编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "门店名称",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "库存地点编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "原料编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "状态",
        "type": "下拉列表",
        "default": "ALL",
        "match": "/"
      }
    ],
    "columns": [
      {
        "name": "门店编码",
        "description": "当前配置关联门店标识编码",
        "note": ""
      },
      {
        "name": "门店名称",
        "description": "当前配置关联门店标识名称",
        "note": ""
      },
      {
        "name": "库存地点编码",
        "description": "库存地点数据唯一标识编码",
        "note": ""
      },
      {
        "name": "库存地点类型",
        "description": "库存地点的存储类型",
        "note": ""
      },
      {
        "name": "关联原料编码",
        "description": "当前配置关联的原料编码",
        "note": "多个"
      },
      {
        "name": "关联原料名称",
        "description": "当前配置关联的原料名称",
        "note": "多个"
      },
      {
        "name": "配置人",
        "description": "配置用户姓名",
        "note": ""
      },
      {
        "name": "创建时间",
        "description": "当前配置的创建时间：YYYY/MM/DD-HH:MM:SS",
        "note": ""
      },
      {
        "name": "状态",
        "description": "当前库存地点是否配置原料的状态：已配置，未配置",
        "note": ""
      },
      {
        "name": "操作",
        "description": "数据操作项入口",
        "note": ""
      }
    ],
    "tabs": [
      {
        "name": "配置历史",
        "mode": "table",
        "fields": [
          {
            "name": "版本号"
          },
          {
            "name": "生效开始时间"
          },
          {
            "name": "生效结束时间"
          },
          {
            "name": "配置人"
          },
          {
            "name": "更新时间"
          },
          {
            "name": "状态"
          }
        ],
        "note": ""
      }
    ],
    "actions": [
      {
        "name": "详情",
        "description": "新打开该详情弹窗",
        "note": ""
      }
    ],
    "form": [
      {
        "name": "门店名称",
        "description": "选择对应门店",
        "note": "带搜索的下拉列表框\n任意状态下可修改"
      },
      {
        "name": "库存地点名称",
        "description": "选择对应库存地点\n",
        "note": "带搜索的下拉列表框\n任意状态下可修改"
      },
      {
        "name": "库存地点类型",
        "description": "由库存地点带出",
        "note": "新建状态下为空/不显示"
      },
      {
        "name": "原料信息",
        "description": "选择对应原料\n",
        "note": "带搜索的下拉列表框，多选\n任意状态下可修改"
      },
      {
        "name": "配置状态",
        "description": "开关：开启/关闭",
        "note": "任意状态下可修改"
      },
      {
        "name": "对象类型"
      },
      {
        "name": "对象编码"
      },
      {
        "name": "生效开始时间"
      },
      {
        "name": "生效结束时间"
      }
    ],
    "rules": [
      "同一原料允许配置多个适用库存地点，但如果配置到消费者，会影响消费者端显示",
      "库存地点停用或对象停用须提示受影响配置；已生效记录保留历史，不反向改写报告使用的规则版本。",
      "待确认事项存储规则维护责任人原则上属于各个门店，如需要在质量平台进行库存地点管理，需要为所有门店角色开通系统权限"
    ],
    "description": "按门店库存地点配置允许或建议存放的原料范围，为温度查看和存储管理提供规则依据；配置关系与实物存放事实严格区分。",
    "uiActions": [
      "查看",
      "编辑",
      "配置历史"
    ],
    "detailMode": "drawer"
  },
  {
    "id": "return",
    "group": "门店管理",
    "name": "退货管理",
    "kind": "readonly",
    "sourceRange": [
      853,
      868
    ],
    "filters": [
      {
        "name": "退货单号",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "退货类型",
        "type": "下拉列表",
        "default": "全部",
        "match": "精准查询"
      },
      {
        "name": "门店编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "门店经营类型",
        "type": "下拉列表",
        "default": "全部",
        "match": "精准查询"
      },
      {
        "name": "退货单类型",
        "type": "下拉列表",
        "default": "全部",
        "match": "精准查询"
      },
      {
        "name": "退货日期",
        "type": "时间段",
        "default": "全部",
        "match": "闭合区间"
      }
    ],
    "columns": [
      {
        "name": "退货单号",
        "description": "真实凭证类型和标识",
        "note": ""
      },
      {
        "name": "退货日期",
        "description": "",
        "note": ""
      },
      {
        "name": "退货类型",
        "description": "1＝退款退货，2＝退款不退货，3＝家享卡退货，4＝职能退货",
        "note": ""
      },
      {
        "name": "大仓编码",
        "description": "",
        "note": ""
      },
      {
        "name": "供货机构编码",
        "description": "",
        "note": ""
      },
      {
        "name": "送货类型",
        "description": "1＝直送，2＝代送",
        "note": ""
      },
      {
        "name": "门店编码",
        "description": "",
        "note": ""
      },
      {
        "name": "门店名称",
        "description": "",
        "note": ""
      },
      {
        "name": "门店经营类型",
        "description": "",
        "note": ""
      },
      {
        "name": "退货单类型",
        "description": "1＝正常退货单，2＝OA 品质异常退货单；默认 1",
        "note": ""
      },
      {
        "name": "SAP 退货交货单号",
        "description": "",
        "note": ""
      },
      {
        "name": "创建日期",
        "description": "",
        "note": ""
      },
      {
        "name": "最后更新时间",
        "description": "",
        "note": ""
      },
      {
        "name": "操作",
        "description": "",
        "note": ""
      }
    ],
    "tabs": [
      {
        "name": "退货物料",
        "mode": "table",
        "fields": [
          {
            "name": "序号"
          },
          {
            "name": "退货门店"
          },
          {
            "name": "所属退货单号"
          },
          {
            "name": "货品编码"
          },
          {
            "name": "发货仓编码"
          },
          {
            "name": "发货仓名称"
          },
          {
            "name": "实际退货数量（最多保留 4 位小数）"
          },
          {
            "name": "退货计量"
          },
          {
            "name": "货品生产日期"
          },
          {
            "name": "关联的收货单号"
          },
          {
            "name": "货品批次号"
          },
          {
            "name": "退货原因（描述）"
          },
          {
            "name": "门店备注"
          },
          {
            "name": "创建时间"
          },
          {
            "name": "供应商"
          }
        ],
        "note": ""
      }
    ],
    "actions": [
      {
        "name": "详情",
        "description": "抽屉展示实收的各个物料子表\n子表字段如下：\n序号\n退货门店\n所属退货单号\n货品编码\n发货仓编码\n发货仓名称\n实际退货数量（最多保留 4 位小数）\n退货计量\n货品生产日期\n关联的收货单号\n货品批次号\n退货原因（描述）\n门店备注\n创建时间\n供应商",
        "note": "源记录只读"
      }
    ],
    "form": [],
    "rules": [],
    "description": "汇总门店退货相关可用业务凭证",
    "uiActions": [
      "查看"
    ],
    "detailMode": "drawer"
  },
  {
    "id": "loss",
    "group": "门店管理",
    "name": "报废损耗管理",
    "kind": "readonly",
    "sourceRange": [
      868,
      884
    ],
    "filters": [
      {
        "name": "损耗单号",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "损耗类型",
        "type": "下拉列表",
        "default": "全部",
        "match": "精准查询"
      },
      {
        "name": "门店编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "发生日期",
        "type": "时间段",
        "default": "全部",
        "match": "闭合区间"
      }
    ],
    "columns": [
      {
        "name": "损耗单号",
        "description": "真实凭证类型和标识",
        "note": ""
      },
      {
        "name": "门店编码",
        "description": "",
        "note": ""
      },
      {
        "name": "门店名称",
        "description": "",
        "note": ""
      },
      {
        "name": "损耗品项名称",
        "description": "",
        "note": ""
      },
      {
        "name": "损耗类型",
        "description": "1＝半成品损耗，2＝成品损耗，3＝货品损耗",
        "note": ""
      },
      {
        "name": "损耗发生日期",
        "description": "",
        "note": ""
      },
      {
        "name": "损耗原因",
        "description": "",
        "note": ""
      },
      {
        "name": "创建日期",
        "description": "",
        "note": ""
      },
      {
        "name": "最后更新时间",
        "description": "",
        "note": ""
      },
      {
        "name": "操作",
        "description": "",
        "note": ""
      }
    ],
    "tabs": [
      {
        "name": "损耗物料",
        "mode": "table",
        "fields": [
          {
            "name": "序号"
          },
          {
            "name": "损耗物料编码"
          },
          {
            "name": "损耗物料名称"
          },
          {
            "name": "损耗数量"
          }
        ],
        "note": ""
      }
    ],
    "actions": [
      {
        "name": "详情",
        "description": "抽屉展示实收的各个物料子表\n子表字段如下：\n序号\n损耗物料编码\n损耗物料名称\n损耗数量",
        "note": "源记录只读"
      }
    ],
    "form": [],
    "rules": [],
    "description": "汇总门店损耗报废相关可用业务凭证",
    "uiActions": [
      "查看"
    ],
    "detailMode": "drawer"
  },
  {
    "id": "transfer",
    "group": "门店管理",
    "name": "调拨管理",
    "kind": "readonly",
    "sourceRange": [
      884,
      900
    ],
    "filters": [
      {
        "name": "损耗单号",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "损耗类型",
        "type": "下拉列表",
        "default": "全部",
        "match": "精准查询"
      },
      {
        "name": "门店编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "发生日期",
        "type": "时间段",
        "default": "全部",
        "match": "闭合区间"
      }
    ],
    "columns": [
      {
        "name": "调拨单号",
        "description": "真实凭证类型和标识",
        "note": ""
      },
      {
        "name": "拨出门店编码",
        "description": "",
        "note": ""
      },
      {
        "name": "拨出门店名称",
        "description": "",
        "note": ""
      },
      {
        "name": "拨入门店编码",
        "description": "",
        "note": ""
      },
      {
        "name": "拨入门店名称",
        "description": "",
        "note": ""
      },
      {
        "name": "调拨时间",
        "description": "",
        "note": ""
      },
      {
        "name": "调拨原因",
        "description": "",
        "note": ""
      },
      {
        "name": "创建日期",
        "description": "",
        "note": ""
      },
      {
        "name": "最后更新时间",
        "description": "",
        "note": ""
      },
      {
        "name": "操作",
        "description": "",
        "note": ""
      }
    ],
    "tabs": [
      {
        "name": "调拨物料",
        "mode": "table",
        "fields": [
          {
            "name": "序号"
          },
          {
            "name": "所属调拨单号"
          },
          {
            "name": "货品编码"
          },
          {
            "name": "调拨数量，最多保留 4 位小数"
          },
          {
            "name": "调拨计量单位编码"
          },
          {
            "name": "货品生产日期"
          },
          {
            "name": "货品批次号"
          }
        ],
        "note": ""
      }
    ],
    "actions": [
      {
        "name": "详情",
        "description": "抽屉展示调拨的各个物料子表\n子表字段如下：\n序号\n所属调拨单号\n货品编码\n调拨数量，最多保留 4 位小数\n调拨计量单位编码\n货品生产日期\n货品批次号",
        "note": "源记录只读"
      }
    ],
    "form": [],
    "rules": [],
    "description": "汇总门店调拨相关可用业务凭证",
    "uiActions": [
      "查看"
    ],
    "detailMode": "drawer"
  },
  {
    "id": "temperature",
    "group": "门店管理",
    "name": "库存地点温度管理",
    "kind": "readonly",
    "sourceRange": [
      900,
      917
    ],
    "filters": [
      {
        "name": "门店编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "门店名称",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "数据更新时间",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      }
    ],
    "columns": [
      {
        "name": "门店编码",
        "description": "门店主数据唯一标识编码",
        "note": "~"
      },
      {
        "name": "门店名称",
        "description": "门店主数据对应名称",
        "note": "~"
      },
      {
        "name": "最后更新时间",
        "description": "数据最后更新、修改时间：YYYY/MM/DD-HH:MM:SS",
        "note": "~"
      },
      {
        "name": "操作",
        "description": "数据操作项入口",
        "note": "~"
      }
    ],
    "tabs": [
      {
        "name": "详细信息",
        "fields": [
          {
            "name": "安装门店",
            "description": "设备关联门店的标识编码",
            "note": ""
          },
          {
            "name": "安装库存地点",
            "description": "设备关联门店的库存地点的标识编码",
            "note": ""
          },
          {
            "name": "安装位置详情",
            "description": "设备关联门店的库存地点的说明",
            "note": ""
          },
          {
            "name": "门店编码",
            "description": "关联门店编码",
            "note": ""
          },
          {
            "name": "记录时间",
            "description": "温度记录时间：YYYY/MM/DD-HH:MM:SS",
            "note": ""
          },
          {
            "name": "记录温度",
            "description": "温度记录值",
            "note": ""
          },
          {
            "name": "设备编码",
            "description": "温度记录设备编码",
            "note": ""
          }
        ]
      }
    ],
    "actions": [
      {
        "name": "详情",
        "description": "新打开页面",
        "note": "/"
      }
    ],
    "form": [],
    "rules": [],
    "description": "展示门店库存地点 IOT 的真实温度数据，支持按门店、库存地点及时间核查温度曲线",
    "uiActions": [
      "查看"
    ],
    "detailMode": "page"
  },
  {
    "id": "feedback",
    "group": "消费者溯源记录",
    "name": "溯源评价记录",
    "kind": "readonly",
    "sourceRange": [
      918,
      936
    ],
    "filters": [
      {
        "name": "溯源记录编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "门店编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "订单编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "菜品编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "溯源时间",
        "type": "时间段",
        "default": "/",
        "match": "精准查询"
      }
    ],
    "columns": [
      {
        "name": "溯源记录编码",
        "description": "记录唯一标识编码",
        "note": ""
      },
      {
        "name": "门店编码",
        "description": "关联门店数据编码",
        "note": ""
      },
      {
        "name": "门店名称",
        "description": "关联门店数据对应名称",
        "note": ""
      },
      {
        "name": "溯源时间",
        "description": "YYYY/MM/DD-HH:MM:SS",
        "note": ""
      },
      {
        "name": "菜品编码",
        "description": "本次浏览菜品编码",
        "note": ""
      },
      {
        "name": "菜品名称",
        "description": "本次浏览菜品明层",
        "note": ""
      },
      {
        "name": "消费者溯源报告编码",
        "description": "当前浏览的菜品所使用的消费者溯源报告编码",
        "note": ""
      },
      {
        "name": "是否评价",
        "description": "是否在本次溯源进行评价",
        "note": ""
      },
      {
        "name": "评价打分",
        "description": "1-5星打几星",
        "note": ""
      },
      {
        "name": "评价类型",
        "description": "开放性反馈的类型标签",
        "note": ""
      },
      {
        "name": "评价内容",
        "description": "自定义反馈内容回显",
        "note": ""
      },
      {
        "name": "用户UID",
        "description": "需要加密，避免敏感信息泄露",
        "note": ""
      },
      {
        "name": "操作",
        "description": "",
        "note": ""
      }
    ],
    "tabs": [],
    "actions": [],
    "form": [],
    "rules": [
      "门店停业、关店或更名不删除历史报告",
      "门店处于营业状态、菜单中存在菜品均不能证明该菜品当天实际在售",
      "待确认事项不同渠道可能有重复菜品，溯源系统值只会生成一个菜品报告，支撑不同渠道的溯源（BOM不一致不算同一菜品）"
    ],
    "description": "“菜品溯源记录”功能旨在末端针对用户侧发生的溯源和评价记录进行收集，进行用户侧溯源实例的收集与统计，来确保溯源的效果并持续进行数据分析与优化。",
    "uiActions": [
      "查看"
    ],
    "detailMode": "drawer"
  },
  {
    "id": "role",
    "group": "系统管理",
    "name": "角色管理",
    "kind": "editable",
    "sourceRange": [
      938,
      960
    ],
    "filters": [
      {
        "name": "角色编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "角色名称",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "适用系统",
        "type": "下拉列表",
        "default": "全部授权系统",
        "match": "精准查询"
      },
      {
        "name": "状态",
        "type": "下拉列表",
        "default": "全部",
        "match": "启用/禁用"
      },
      {
        "name": "更新时间",
        "type": "时间段",
        "default": "/",
        "match": "区间查询"
      }
    ],
    "columns": [
      {
        "name": "角色编码",
        "description": "系统内角色唯一标识",
        "note": "不可修改"
      },
      {
        "name": "角色名称",
        "description": "角色展示名称",
        "note": "必填"
      },
      {
        "name": "适用系统",
        "description": "角色可访问的应用范围",
        "note": "以实际接入系统为准"
      },
      {
        "name": "数据范围",
        "description": "授权组织、门店、仓库等范围摘要",
        "note": "详情展示完整范围"
      },
      {
        "name": "关联用户数",
        "description": "当前关联此角色的用户数量",
        "note": "可进入用户列表"
      },
      {
        "name": "状态",
        "description": "启用/禁用",
        "note": "禁用后不再提供权限"
      },
      {
        "name": "更新人/更新时间",
        "description": "最近一次配置人员及时间",
        "note": "yyyy-mm-dd hh:mm:ss"
      },
      {
        "name": "操作",
        "description": "详情/编辑/权限配置/复制/启停",
        "note": "按操作权限显示"
      }
    ],
    "tabs": [
      {
        "name": "变更记录",
        "mode": "table",
        "fields": [
          {
            "name": "发起人"
          },
          {
            "name": "范围"
          },
          {
            "name": "开始时间"
          },
          {
            "name": "结束时间"
          },
          {
            "name": "状态"
          },
          {
            "name": "原因"
          },
          {
            "name": "变更前"
          },
          {
            "name": "变更后"
          },
          {
            "name": "失败摘要"
          }
        ],
        "note": ""
      }
    ],
    "actions": [
      {
        "name": "新建/编辑",
        "description": "维护名称、适用系统及说明，保存前校验必填与编码唯一性",
        "note": "编辑不改变编码"
      },
      {
        "name": "配置权限",
        "description": "分别选择菜单、操作及数据范围，提交前展示权限变化和受影响用户数",
        "note": "不得授予超出本人可授权范围的权限"
      },
      {
        "name": "复制",
        "description": "复制权限形成默认禁用的新角色，重新填写角色编码和名称",
        "note": "不复制关联用户"
      },
      {
        "name": "启用/禁用",
        "description": "二次确认并填写原因，禁用时提示受影响用户",
        "note": "保留角色及历史关系"
      },
      {
        "name": "查看变更记录",
        "description": "展示变更人、时间、变更前后权限及原因",
        "note": "只读"
      }
    ],
    "form": [
      {
        "name": "角色编码"
      },
      {
        "name": "角色名称"
      },
      {
        "name": "适用系统"
      },
      {
        "name": "说明"
      },
      {
        "name": "数据范围"
      },
      {
        "name": "状态"
      }
    ],
    "rules": [],
    "description": "维护系统角色及其菜单、操作和数据权限，支持按组织、门店、仓库等业务范围授权，保证不同岗位仅访问职责范围内的溯源数据与配置。",
    "uiActions": [
      "查看",
      "编辑",
      "配置权限",
      "复制",
      "查看变更记录"
    ],
    "detailMode": "drawer"
  },
  {
    "id": "user",
    "group": "系统管理",
    "name": "用户管理",
    "kind": "editable",
    "sourceRange": [
      960,
      982
    ],
    "filters": [
      {
        "name": "登录账号/工号",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "姓名",
        "type": "input",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "所属组织",
        "type": "树形选择",
        "default": "当前可管理组织",
        "match": "包含范围查询"
      },
      {
        "name": "角色",
        "type": "下拉列表",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "账号来源",
        "type": "下拉列表",
        "default": "全部",
        "match": "外部同步/本地创建"
      },
      {
        "name": "状态",
        "type": "下拉列表",
        "default": "全部",
        "match": "启用/禁用"
      }
    ],
    "columns": [
      {
        "name": "用户编码",
        "description": "中台内部身份标识",
        "note": "唯一"
      },
      {
        "name": "登录账号/工号",
        "description": "登录标识及人员工号",
        "note": "按身份源提供"
      },
      {
        "name": "姓名",
        "description": "用户展示名称",
        "note": "同名不合并"
      },
      {
        "name": "所属组织",
        "description": "用户当前组织",
        "note": "记录同步来源"
      },
      {
        "name": "角色",
        "description": "已关联角色及其状态",
        "note": "支持多个"
      },
      {
        "name": "数据范围",
        "description": "用户可访问范围摘要",
        "note": "与角色权限共同计算"
      },
      {
        "name": "联系方式",
        "description": "告警等业务通知使用的联系方式",
        "note": "默认脱敏"
      },
      {
        "name": "账号来源/状态",
        "description": "外部同步或本地创建，启用或禁用",
        "note": "只读或按权限维护"
      },
      {
        "name": "最近登录时间",
        "description": "最近一次成功登录时间",
        "note": "无记录显示“暂无”"
      },
      {
        "name": "更新时间",
        "description": "最近同步或授权变更时间",
        "note": "详情区分变更类型"
      },
      {
        "name": "操作",
        "description": "详情/编辑/赋权/启停/授权记录",
        "note": "按权限显示"
      }
    ],
    "tabs": [
      {
        "name": "变更记录",
        "mode": "table",
        "fields": [
          {
            "name": "发起人"
          },
          {
            "name": "范围"
          },
          {
            "name": "开始时间"
          },
          {
            "name": "结束时间"
          },
          {
            "name": "状态"
          },
          {
            "name": "原因"
          },
          {
            "name": "变更前"
          },
          {
            "name": "变更后"
          },
          {
            "name": "失败摘要"
          }
        ],
        "note": ""
      }
    ],
    "actions": [
      {
        "name": "新建用户",
        "description": "本地账号方案获确认后开放，校验登录标识、组织及必要身份信息",
        "note": "不显示或保存可读取的明文密码"
      },
      {
        "name": "编辑",
        "description": "仅允许维护当前来源可编辑的字段，同步属性提示返回源系统修改",
        "note": "避免下次同步覆盖本地事实"
      },
      {
        "name": "分配角色/数据范围",
        "description": "展示调整前后有效权限，确认后保存并记录原因",
        "note": "不得超范围授权"
      },
      {
        "name": "禁用",
        "description": "二次确认，禁用后阻止登录及后续授权请求",
        "note": "历史记录保留"
      },
      {
        "name": "查看授权记录",
        "description": "查看角色、范围及状态的变更历史",
        "note": "联系方式按权限脱敏"
      }
    ],
    "form": [
      {
        "name": "用户编码"
      },
      {
        "name": "登录账号/工号"
      },
      {
        "name": "姓名"
      },
      {
        "name": "所属组织"
      },
      {
        "name": "角色"
      },
      {
        "name": "数据范围"
      },
      {
        "name": "联系方式"
      },
      {
        "name": "账号来源/状态"
      }
    ],
    "rules": [],
    "description": "维护中台用户身份、账号状态、角色与业务数据范围，支持人员入职、调岗及离职时调整访问权限。外部系统账号的同步属性与中台授权配置分别管理。",
    "uiActions": [
      "查看",
      "编辑",
      "分配角色/数据范围",
      "查看授权记录"
    ],
    "detailMode": "drawer"
  },
  {
    "id": "index",
    "group": "系统管理",
    "name": "索引管理",
    "kind": "index",
    "sourceRange": [
      982,
      1002
    ],
    "filters": [
      {
        "name": "索引名称/编码",
        "type": "input",
        "default": "/",
        "match": "名称模糊/编码精准查询"
      },
      {
        "name": "业务对象",
        "type": "下拉列表",
        "default": "全部授权对象",
        "match": "精准查询"
      },
      {
        "name": "来源系统",
        "type": "下拉列表",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "运行状态",
        "type": "下拉列表",
        "default": "全部",
        "match": "正常/构建中/异常/未初始化"
      },
      {
        "name": "最近更新时间",
        "type": "时间段",
        "default": "/",
        "match": "区间查询"
      }
    ],
    "columns": [
      {
        "name": "索引编码/名称",
        "description": "查询索引标识及名称",
        "note": "技术配置登记"
      },
      {
        "name": "业务对象",
        "description": "原料、报告、单据等对象",
        "note": "不等同业务菜单"
      },
      {
        "name": "来源系统",
        "description": "索引关联的数据来源",
        "note": "可多个"
      },
      {
        "name": "索引版本",
        "description": "当前可查询版本标识",
        "note": "支持定位历史任务"
      },
      {
        "name": "运行状态",
        "description": "当前构建与可用状态",
        "note": "异常展示摘要"
      },
      {
        "name": "处理数量",
        "description": "当前任务处理成功、失败数量",
        "note": "数量口径在详情标明"
      },
      {
        "name": "数据处理位置",
        "description": "当前已处理的同步时间或进度标识",
        "note": "不承诺实时"
      },
      {
        "name": "最近任务时间",
        "description": "最近重建或更新任务时间",
        "note": "yyyy-mm-dd hh:mm:ss"
      },
      {
        "name": "操作",
        "description": "详情/任务日志/重建",
        "note": "高权限操作"
      }
    ],
    "tabs": [
      {
        "name": "任务日志",
        "mode": "table",
        "fields": [
          {
            "name": "发起人"
          },
          {
            "name": "范围"
          },
          {
            "name": "开始时间"
          },
          {
            "name": "结束时间"
          },
          {
            "name": "状态"
          },
          {
            "name": "原因"
          },
          {
            "name": "变更前"
          },
          {
            "name": "变更后"
          },
          {
            "name": "失败摘要"
          }
        ],
        "note": ""
      }
    ],
    "actions": [
      {
        "name": "查看详情",
        "description": "展示业务对象、版本、数据进度及异常记录",
        "note": "敏感配置不明文展示"
      },
      {
        "name": "发起重建",
        "description": "选择允许的对象和范围，预览影响并二次确认，填写原因后生成任务",
        "note": "全量操作的审批要求待确认"
      },
      {
        "name": "查看任务日志",
        "description": "查看发起人、范围、开始结束时间、状态与失败摘要",
        "note": "隐去密钥及个人敏感信息"
      },
      {
        "name": "重试失败任务",
        "description": "校验当前任务状态，确认重试范围，记录新任务与原任务关联",
        "note": "不覆盖失败历史"
      }
    ],
    "form": [],
    "rules": [],
    "description": "为技术运维人员提供已接入数据对象的索引状态查看及受控重建能力，辅助排查“源数据存在但查询不到”等问题。索引是查询支撑数据，不作为原始业务事实或批次关联关系的人工修改入口。",
    "uiActions": [
      "查看",
      "查看任务日志",
      "发起重建",
      "重试失败任务"
    ],
    "detailMode": "drawer"
  },
  {
    "id": "dish-template-detail",
    "group": "溯源模板管理",
    "name": "菜品溯源模板详情",
    "kind": "template",
    "sourceRange": null,
    "filters": [
      {
        "name": "模板编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "菜品编码",
        "type": "input",
        "default": "/",
        "match": "精准查询"
      },
      {
        "name": "菜品名称",
        "type": "带搜索的单级下拉筛选，可多选",
        "default": "/",
        "match": "模糊查询"
      },
      {
        "name": "状态",
        "type": "单级下拉筛选",
        "default": "全部",
        "match": ""
      },
      {
        "name": "模板名称",
        "type": "input",
        "match": "模糊查询"
      }
    ],
    "columns": [
      {
        "name": "模板编码",
        "description": "模板唯一标识编码",
        "note": "ST#yyyy-mm-dd+4位流水号：ST202401020001"
      },
      {
        "name": "菜品编码",
        "description": "原料的唯一标识编码",
        "note": ""
      },
      {
        "name": "菜品名称",
        "description": "对应原料的具体名称",
        "note": ""
      },
      {
        "name": "状态",
        "description": "如状态机，不影响操作",
        "note": ""
      },
      {
        "name": "最后更新时间",
        "description": "数据最后更新时间，",
        "note": "即当前版本的创建时间"
      },
      {
        "name": "创建人",
        "description": "当前数据的最后创建人",
        "note": "最新版本的创建人"
      },
      {
        "name": "版本号",
        "description": "当前版本的版本号",
        "note": ""
      },
      {
        "name": "操作",
        "description": "数据操作项入口",
        "note": ""
      },
      {
        "name": "模板名称"
      }
    ],
    "tabs": [
      {
        "name": "版本管理",
        "mode": "table",
        "fields": [
          {
            "name": "版本号"
          },
          {
            "name": "模板编码"
          },
          {
            "name": "创建人"
          },
          {
            "name": "创建时间"
          },
          {
            "name": "变更说明"
          },
          {
            "name": "状态"
          },
          {
            "name": "详情"
          },
          {
            "name": "复制"
          }
        ],
        "note": ""
      }
    ],
    "actions": [
      {
        "name": "复制模板",
        "description": "复用当前模板内容，新打开模板新建",
        "note": "/"
      },
      {
        "name": "详情",
        "description": "新打开模板详情",
        "note": "/"
      },
      {
        "name": "添加",
        "description": "新打开新建模板，显示所有模板的最新版本，并可以基于最新版本进行新建或直接创建一个全新版本\n新增版本：勾选（单选）任一模板后，点击新增按钮打开模板详情页，并进行模板内容的修改（与在列表页点击详情进入一致）\n创建新模板：直接新打开模板新建页",
        "note": "新建可以选择历史版本编辑，或者新建模板"
      },
      {
        "name": "版本管理",
        "description": "打开版本管理抽屉，显示当前模板的所有历史版本\n详情：通过详情按钮进入历史版本后，无法修改任何历史版本的信息，只能查看\n复制：复用当前历史模板内容，新打开模板新建，新建的模板与当前被选取的模板不存在版本关联关系",
        "note": ""
      },
      {
        "name": "覆盖范围",
        "description": "选择/回显原料",
        "note": ""
      }
    ],
    "form": [
      {
        "name": "模板编码"
      },
      {
        "name": "模板名称"
      },
      {
        "name": "模板说明"
      },
      {
        "name": "模板状态"
      },
      {
        "name": "创建时间"
      },
      {
        "name": "版本号"
      },
      {
        "name": "变更说明"
      },
      {
        "name": "溯源菜品范围"
      }
    ],
    "rules": [
      "（1）模板需要区分上游采购原料和MES加工形成的半成品。MES半成品不应重复生成报告；真实原料投入与半成品产出关系仍保留在加工链路中。",
      "（2）调拨、重复收货等单据应按汇入同一原料报告，不能仅凭相同批次文本合并不同物料。各次单据及发生时间均保留。",
      "（3）生禽不经大仓直接进入MES、自有养殖鸡蛋/肉鸡等路径须配置独立的适用条件，不强制要求不存在的大仓环节。",
      "（4）已发布版本只读；变更新版本后，原料报告仍保留原模板和环节版本。正在归集中的报告默认沿用创建时版本，新增模板的适用切换不能混用两套采集规则。"
    ],
    "description": "查看或创建当前菜品的溯源模板及环节配置。",
    "uiActions": [
      "查看",
      "复制模板",
      "版本管理",
      "覆盖范围"
    ],
    "detailMode": "page",
    "hiddenFromMenu": true
  }
];
