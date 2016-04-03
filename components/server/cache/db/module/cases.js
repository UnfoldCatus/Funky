/**
 * Created by chenjianjun on 16/2/23.
 */
var env=require("../../config");
var type=env.Thinky.type;

// 婚庆策划--实景案例模型

/*
 {
 "success": true,
 "message": null,
 "data": [
     {
     "id": 275,
     "caseId": 123,
     "createTime": "2016-01-21 18:55:21",
     "updateTime": "2016-01-21 18:55:21",
     "operater": 1,
     "isUsed": 1,
     "name": "惜•缘",
     "description": "",
     "designConcept": "雾都城 三月雨纷纷 四月绣花针 羽毛扇遥指千军阵 锦缎裁几寸 看铁马踏冰河 丝线缝韶华 红尘千帐灯 山水一程风雪再一程;红烛枕 五月花叶深 六月杏花村 红酥手青丝万千根 姻缘多一分 等残阳照孤影 牡丹染铜樽 满城牧笛声 伊人倚门望君踏归程; 君可见刺绣每一针 有人为你疼 君可见牡丹开一生 有人为你等 江河入海奔 万物为谁春 明月照不尽离别人; 君可见刺绣又一针 有人为你疼 君可见夏雨秋风有人 为你等 翠竹泣墨痕 锦书画不成 情针意线绣不尽 鸳鸯枕; 此生笑傲风月瘦如刀 催人老 来世与君暮暮又朝朝 多逍遥!",
     "coverUrlWeb": "http://img.jsbn.com/hotel/20160121/14533737134683347_1200x800.jpg",
     "coverUrlWx": "http://img.jsbn.com/hotel/20160121/14533737135841107_1200x800.jpg",
     "coverUrlApp": "http://img.jsbn.com/hotel/20160121/14533737135256577_1200x800.jpg",
     "pcDetailImages": "[{\"createTime\":null,\"id\":45005,\"isUsed\":1,\"operater\":0,\"type\":1,\"updateTime\":null,\"url\":\"http://img.jsbn.com/scheme/20160121/14533737156221435_1200x800.jpg\",\"weight\":8},{\"createTime\":null,\"id\":45006,\"isUsed\":1,\"operater\":0,\"type\":1,\"updateTime\":null,\"url\":\"http://img.jsbn.com/scheme/20160121/14533737152185467_1200x800.jpg\",\"weight\":9},{\"createTime\":null,\"id\":45007,\"isUsed\":1,\"operater\":0,\"type\":1,\"updateTime\":null,\"url\":\"http://img.jsbn.com/scheme/20160121/14533737147865822_1200x800.jpg\",\"weight\":10},{\"createTime\":null,\"id\":45008,\"isUsed\":1,\"operater\":0,\"type\":1,\"updateTime\":null,\"url\":\"http://img.jsbn.com/scheme/20160121/14533737155698541_1200x800.jpg\",\"weight\":11},{\"createTime\":null,\"id\":45009,\"isUsed\":1,\"operater\":0,\"type\":1,\"updateTime\":null,\"url\":\"http://img.jsbn.com/scheme/20160121/14533737152672955_1200x800.jpg\",\"weight\":12},{\"createTime\":null,\"id\":45010,\"isUsed\":1,\"operater\":0,\"type\":1,\"updateTime\":null,\"url\":\"http://img.jsbn.com/scheme/20160121/14533737158882267_800x1200.jpg\",\"weight\":13},{\"createTime\":null,\"id\":45011,\"isUsed\":1,\"operater\":0,\"type\":1,\"updateTime\":null,\"url\":\"http://img.jsbn.com/scheme/20160121/14533737157219283_1200x800.jpg\",\"weight\":14},{\"createTime\":null,\"id\":45012,\"isUsed\":1,\"operater\":0,\"type\":1,\"updateTime\":null,\"url\":\"http://img.jsbn.com/scheme/20160121/14533737153682030_1200x800.jpg\",\"weight\":15},{\"createTime\":null,\"id\":45013,\"isUsed\":1,\"operater\":0,\"type\":1,\"updateTime\":null,\"url\":\"http://img.jsbn.com/scheme/20160121/14533737149487918_1200x800.jpg\",\"weight\":16}]",
     "appDetailImages": "[{\"createTime\":null,\"id\":45021,\"isUsed\":1,\"operater\":0,\"type\":3,\"updateTime\":null,\"url\":\"http://img.jsbn.com/scheme/20160121/14533737147308598_1200x800.jpg\",\"weight\":0},{\"createTime\":null,\"id\":45022,\"isUsed\":1,\"operater\":0,\"type\":3,\"updateTime\":null,\"url\":\"http://img.jsbn.com/scheme/20160121/14533737146251563_1200x800.jpg\",\"weight\":1},{\"createTime\":null,\"id\":45023,\"isUsed\":1,\"operater\":0,\"type\":3,\"updateTime\":null,\"url\":\"http://img.jsbn.com/scheme/20160121/14533737158335256_1200x800.jpg\",\"weight\":2},{\"createTime\":null,\"id\":45024,\"isUsed\":1,\"operater\":0,\"type\":3,\"updateTime\":null,\"url\":\"http://img.jsbn.com/scheme/20160121/14533737156701817_1200x800.jpg\",\"weight\":3},{\"createTime\":null,\"id\":45025,\"isUsed\":1,\"operater\":0,\"type\":3,\"updateTime\":null,\"url\":\"http://img.jsbn.com/scheme/20160121/14533737151628115_1200x800.jpg\",\"weight\":4},{\"createTime\":null,\"id\":45026,\"isUsed\":1,\"operater\":0,\"type\":3,\"updateTime\":null,\"url\":\"http://img.jsbn.com/scheme/20160121/14533737150570540_800x1200.jpg\",\"weight\":5},{\"createTime\":null,\"id\":45027,\"isUsed\":1,\"operater\":0,\"type\":3,\"updateTime\":null,\"url\":\"http://img.jsbn.com/scheme/20160121/14533737148381064_1200x800.jpg\",\"weight\":6},{\"createTime\":null,\"id\":45028,\"isUsed\":1,\"operater\":0,\"type\":3,\"updateTime\":null,\"url\":\"http://img.jsbn.com/scheme/20160121/14533737148937319_1200x800.jpg\",\"weight\":7}]",
     "wxDetailImages": "[{\"createTime\":null,\"id\":45014,\"isUsed\":1,\"operater\":0,\"type\":2,\"updateTime\":null,\"url\":\"http://img.jsbn.com/scheme/20160121/14533737151131803_1200x800.jpg\",\"weight\":17},{\"createTime\":null,\"id\":45015,\"isUsed\":1,\"operater\":0,\"type\":2,\"updateTime\":null,\"url\":\"http://img.jsbn.com/scheme/20160121/14533737157786937_1200x800.jpg\",\"weight\":18},{\"createTime\":null,\"id\":45016,\"isUsed\":1,\"operater\":0,\"type\":2,\"updateTime\":null,\"url\":\"http://img.jsbn.com/scheme/20160121/14533737154221561_1200x800.jpg\",\"weight\":19},{\"createTime\":null,\"id\":45017,\"isUsed\":1,\"operater\":0,\"type\":2,\"updateTime\":null,\"url\":\"http://img.jsbn.com/scheme/20160121/14533737154681032_1200x800.jpg\",\"weight\":20},{\"createTime\":null,\"id\":45018,\"isUsed\":1,\"operater\":0,\"type\":2,\"updateTime\":null,\"url\":\"http://img.jsbn.com/scheme/20160121/14533737146741226_1200x800.jpg\",\"weight\":21},{\"createTime\":null,\"id\":45019,\"isUsed\":1,\"operater\":0,\"type\":2,\"updateTime\":null,\"url\":\"http://img.jsbn.com/scheme/20160121/14533737155219079_800x1200.jpg\",\"weight\":22},{\"createTime\":null,\"id\":45020,\"isUsed\":1,\"operater\":0,\"type\":2,\"updateTime\":null,\"url\":\"http://img.jsbn.com/scheme/20160121/14533737150035538_1200x800.jpg\",\"weight\":23}]",
     "hdpcCost": 0,
     "senceCost": 0,
     "totalCost": 0,
     "color": "红色",
     "theme": "惜•缘",
     "personDescription": "摄影师、摄像师、化妆师、主持人",
     "hotelId": 1,
     "hotelName": "test01111",
     "banquetHallId": 1,
     "banquetHallName": "hall01",
     "weddingId": 1,
     "weddingName": "惜•缘",
     "caseStyle": "12,14,",
     "holdingTime": "2016-01-21",
     "position": "scheme_list",
     "weight": 9
     }
 ],
 "code": 200,
 "count": 18
 }
*/

// 实景案例模型
const Cases = env.Thinky.createModel('cases', {
    // 发布Id
    id: type.number(),
    // 案例ID
    caseId: type.number(),
    // 创建时间
    createTime: type.string(),
    // 修改时间
    updateTime: type.string(),
    // 操作员
    operater: type.number(),
    // 是否有效 有效0：无效 1：有效
    isUsed: type.number(),
    // 实景案例名称
    name: type.string(),
    // 描述
    description: type.string(),
    // 主题诠释
    designConcept: type.string(),
    // 网站封面图片地址
    coverUrlWeb: type.string(),
    // 微信封面图片地址
    coverUrlWx: type.string(),
    // APP封面图片地址
    coverUrlApp: type.string(),
    /************************************start************************************/
    // TODO 本身是json对象，以字符串形式表现
    // web详细图片集
    pcDetailImages: type.string(),
    // app详细图片集
    appDetailImages: type.string(),
    // 微信详细图片集
    wxDetailImages: type.string(),
    /************************************end*************************************/
    // 四大金刚花费
    hdpcCost: type.number(),
    // 场景布置花费
    senceCost: type.number(),
    // 总费用
    totalCost: type.number(),
    // 色系
    color: type.string(),
    // 主题
    theme: type.string(),
    // 婚礼人
    personDescription: type.string(),
    // 风格
    caseStyle: type.string(),
    // 风格名
    caseStyleName: type.string(),
    // 酒店ID
    hotelId: type.number(),
    // 酒店名称
    hotelName: type.string(),
    // 宴会厅ID
    banquetHallId: type.number(),
    // 宴会厅名称
    banquetHallName: type.string(),
    // 婚礼ID
    weddingId: type.number(),
    // 婚礼名称
    weddingName: type.string(),
    // 婚礼时间
    holdingTime: type.string(),
    // 婚礼地点
    holdingPlace: type.string(),
    // 资源位置
    position: type.string(),
    // 权重
    weight: type.number()
})

Cases.ensureIndex('weight');

module.exports=Cases;
