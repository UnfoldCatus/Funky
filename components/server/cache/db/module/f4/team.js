/**
 * Created by chenjianjun on 16/2/26.
 */
var env=require("../../../config");
var type=env.Thinky.type;

// 四大金刚特色项目

/*
 {
 "success": true,
 "message": null,
 "data": [
     {
         "id": 45,
         "nickName": "JSBN999",
         "gender": 0,
         "description": "12edcszdfgasDcfasdf",
         "photoUrl": null,
         "serviceScore": 0,
         "serviceInfo": "dsvfasdfasdf",
         "price": 100,
         "salePrice": 99,
         "priceRemark": "1111111111222222222222222233333333333333333333",
         "workList": [
          {
             "id": 30,
             "productId": 1,
             "createTime": "2016-01-22 15:25:58",
             "updateTime": "2016-01-22 15:25:58",
             "operater": 1,
             "isUsed": 1,
             "personId": 45,
             "personName": "JSBN999",
             "name": "特色项目测试",
             "description": "123123123123",
             "coverUrlWeb": "http://img.jsbn.com/pringles/20160122/14534475579689529_200x200.jpg",
             "coverUrlWx": "http://img.jsbn.com/pringles/20160122/14534475579768752_200x200.jpg",
             "coverUrlApp": "http://img.jsbn.com/pringles/20160122/14534475579740869_200x200.jpg",
             "contentType": 1,
             "pcDetailImages": "[\"http://img.jsbn.com/pringles/20160122/14534475582035227_498x293.jpg\",\"http://img.jsbn.com/pringles/20160122/14534475581986978_475x350.jpg\"]",
             "appDetailImages": "[\"http://img.jsbn.com/pringles/20160122/14534475582080636_498x293.jpg\",\"http://img.jsbn.com/pringles/20160122/14534475581630595_475x350.jpg\"]",
             "wxDetailImages": null,
             "videoUrl": null,
             "position": null,
             "weight": 1111
             }
          ]
     }
 ],
 "code": 200,
 "count": 1
 }
* */

const F4Team = env.Thinky.createModel('f4team', {
    // Id
    id: type.number(),
    // 昵称
    nickName: type.string(),
    // 性别
    gender: type.number(),
    // 描述
    description: type.string(),
    // 头像url
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

F4Team.ensureIndex('id');

module.exports=F4Team;

