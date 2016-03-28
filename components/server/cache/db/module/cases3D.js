/**
 * Created by chenjianjun on 16/2/25.
 */
var env=require("../../config");
var type=env.Thinky.type;

// 婚庆策划--3D案例模型

/*
 {
 "success": true,
 "message": null,
 "data": [
     {
     "id": 3,
     "caseId": 0,
     "createTime": "2015-11-19 19:10:59",
     "updateTime": "2015-11-20 16:00:56",
     "operater": 1,
     "isUsed": 1,
     "name": "3D案例来了",
     "description": "案例来了",
     "coverUrlWeb": "http://image.jsbn.com/hotel/20151119/14479314541400505.jpg",
     "coverUrlWx": "http://image.jsbn.com/hotel/20151119/14479314541417664.jpg",
     "coverUrlApp": "http://image.jsbn.com/hotel/20151119/14479314541415110.jpg",
     "color": "粉+白",
     "totalCost": 100000,
     "hotelId": 1,
     "hotelName": "test01111",
     "banquetHallId": 1,
     "banquetHallName": "hall01",
     "weddingId": 1,
     "weddingName": "这又是啥几把玩意？",
     "holdingTime": "2015-11-19",
     "caseStyle": "1,2",
     "pcDetailImages": "{\"createTime\":null,\"id\":142,\"isUsed\":1,\"operater\":0,\"type\":2,\"updateTime\":null,\"url\":\"http://image.jsbn.com/pringles/20151113/14473806826550628.jpg\",\"weight\":1}]",
     "appDetailImages": "{\"createTime\":null,\"id\":142,\"isUsed\":1,\"operater\":0,\"type\":2,\"updateTime\":null,\"url\":\"http://image.jsbn.com/pringles/20151113/14473806826550628.jpg\",\"weight\":1}]",
     "wxDetailImages": "{\"createTime\":null,\"id\":142,\"isUsed\":1,\"operater\":0,\"type\":2,\"updateTime\":null,\"url\":\"http://image.jsbn.com/pringles/20151113/14473806826550628.jpg\",\"weight\":1}]",
     "videoList": "[{\"caseId\":19,\"coverUrl\":\"http://img.jsbn.com/case3D/20160126/14537792111022750_1200x800.jpg\",\"createTime\":{\"date\":26,\"day\":2,\"hours\":11,\"minutes\":33,\"month\":0,\"seconds\":40,\"time\":1453779220000,\"timezoneOffset\":-480,\"year\":116},\"id\":12,\"isUsed\":1,\"operater\":1,\"updateTime\":{\"date\":26,\"day\":2,\"hours\":11,\"minutes\":33,\"month\":0,\"seconds\":40,\"time\":1453779220000,\"timezoneOffset\":-480,\"year\":116},\"videoUrl\":\"http://jsbn.oss-cn-shenzhen.aliyuncs.com/video%2Fcq%2Fwdy%2F1.mp4\"}]",
     "position": "10034",
     "weight": 10000
     }
 ],
 "code": 200,
 "count": 10
 }
 */

// 3D案例模型
const Cases3D = env.Thinky.createModel('cases3D', {
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
    // 视频列表
    videoList: type.string(),
    /************************************end*************************************/
    // 色系
    color: type.string(),
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
    // 风格
    caseStyle: type.string(),
    // 资源位置
    position: type.string(),
    // 权重
    weight: type.number()

})

Cases3D.ensureIndex('weight');

module.exports=Cases3D;
