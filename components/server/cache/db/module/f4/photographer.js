/**
 * Created by chenjianjun on 16/2/24.
 */
var env=require("../../../config");
var type=env.Thinky.type;

// 婚庆策划-四大金刚-主持人作品模型

/**
 {
     "success": true,
     "message": null,
     "data": [
         {
             "id": 38,
             "nickName": "大鹏",
             "gender": 0,
             "description": "一名优秀的主持人，语言能力强，吐词清除，普通话发音标准，人气极高。",
             "photoUrl": null,
             "serviceScore": 0,
             "serviceInfo": "asdfad",
             "price": 100,
             "salePrice": 99,
             "priceRemark": null,
             "workList": [
                 {
                     "id": 2,
                     "productId": 1,
                     "createTime": "2016-01-21 19:18:56",
                     "updateTime": "2016-01-28 16:41:54",
                     "operater": 1,
                     "isUsed": 1,
                     "name": "大鹏的作品",
                     "description": "",
                     "coverUrlWeb": "http://img.jsbn.com/photoDressPro/20160121/14533751354747057_1200x800.jpg",
                     "coverUrlWx": "http://img.jsbn.com/photoDressPro/20160121/14533751356835637_1200x800.jpg",
                     "coverUrlApp": "http://img.jsbn.com/photoDressPro/20160121/14533751355805854_1200x800.jpg",
                     "canmeramanId": 40,
                     "hosterId": 38,
                     "videoUrl": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/photoDressPro/20160128/14539702967150975.mp4",
                     "weight": 100
                 }
             ]
         }
     ],
     "code": 200,
     "count": 1
 }
 */

// 实景案例模型
const F4Photographer = env.Thinky.createModel('f4photographer', {
    // 人员Id
    id: type.number(),
    // 人员昵称
    nickName: type.string(),
    // 性别
    gender: type.number(),
    // 人员描述
    description: type.string(),
    // 人员头像url
    photoUrl: type.string(),
    // 服务评分
    serviceScore: type.number(),
    // 服务介绍
    serviceInfo: type.string(),
    // 价格
    price: type.number(),
    // 售价
    salePrice: type.number(),
    // 价格描述
    priceRemark: type.string(),
    // 作品列表
    workList: type.array()
})

F4Photographer.ensureIndex('id');

module.exports=F4Photographer;
