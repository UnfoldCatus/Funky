/**
 * Created by chenjianjun on 16/2/24.
 */
var env=require("../../../config");
var type=env.Thinky.type;

// 婚庆策划-四大金刚-摄像师作品模型

/**
 * {
    "success": true,
    "message": null,
    "data": [
        {
            "id": 40,
            "nickName": "卢建",
            "gender": 0,
            "description": "",
            "photoUrl": null,
            "serviceScore": 0,
            "serviceInfo": "",
            "price": 2000,
            "salePrice": 1200,
            "priceRemark": "",
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
                    "weight": 100,
                    "shootingTime": "2015-11-02 00:00:00",
                    "shootingAdress": "酒店",
                    "costPrice": 0
                }
            ]
        }
    ],
    "code": 200,
    "count": 2
}
 */

// 实景案例模型
const F4Camera = env.Thinky.createModel('f4camera', {
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

F4Camera.ensureIndex('id');

module.exports=F4Camera;
