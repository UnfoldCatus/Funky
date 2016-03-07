/**
 * Created by chenjianjun on 16/2/24.
 */
var env=require("../../../config");
var type=env.Thinky.type;

// 婚庆策划-四大金刚-化妆师作品模型

/**
 {
     "success": true,
     "message": null,
     "data": [
         {
             "id": 41,
             "nickName": "杨阳",
             "gender": 0,
             "description": "",
             "photoUrl": null,
             "serviceScore": 0,
             "serviceInfo": "",
             "price": 0,
             "salePrice": 0,
             "priceRemark": "",
             "workList": [
                 {
                     "id": 2,
                     "productId": 1,
                     "createTime": "2016-01-21 19:14:18",
                     "updateTime": "2016-01-21 19:14:18",
                     "operater": 1,
                     "isUsed": 1,
                     "name": "丁汀&杨阳作品",
                     "description": "",
                     "coverUrlWeb": "http://img.jsbn.com/photoDressPro/20160121/14533748565145029_1200x800.jpg",
                     "coverUrlWx": "http://img.jsbn.com/photoDressPro/20160121/14533748565816128_800x1200.jpg",
                     "coverUrlApp": "http://img.jsbn.com/photoDressPro/20160121/14533748565487897_800x1200.jpg",
                     "dresserId": 41,
                     "photographerId": 39,
                     "weight": 100,
                     "pcDetailImages": "[\"http://img.jsbn.com/photoDressPro/20160121/14533748571398109_800x1200.jpg\",\"http://img.jsbn.com/photoDressPro/20160121/14533748569533063_1200x800.jpg\",\"http://img.jsbn.com/photoDressPro/20160121/14533748571994418_1200x800.jpg\",\"http://img.jsbn.com/photoDressPro/20160121/14533748570594188_800x1200.jpg\"]",
                     "appDetailImages": "[\"http://img.jsbn.com/photoDressPro/20160121/14533748570991057_800x1200.jpg\",\"http://img.jsbn.com/photoDressPro/20160121/14533748569214898_1200x800.jpg\",\"http://img.jsbn.com/photoDressPro/20160121/14533748572596054_1200x800.jpg\",\"http://img.jsbn.com/photoDressPro/20160121/14533748571717757_800x1200.jpg\"]",
                     "wxDetailImages": "[\"http://img.jsbn.com/photoDressPro/20160121/14533748568903274_800x1200.jpg\",\"http://img.jsbn.com/photoDressPro/20160121/14533748572304678_1200x800.jpg\",\"http://img.jsbn.com/photoDressPro/20160121/14533748569819912_1200x800.jpg\",\"http://img.jsbn.com/photoDressPro/20160121/14533748570254941_800x1200.jpg\"]"
                 }
             ]
         }
     ],
     "code": 200,
     "count": 1
 }
 */

const F4Dresser = env.Thinky.createModel('f4dresser', {
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

F4Dresser.ensureIndex('id');

module.exports=F4Dresser;
