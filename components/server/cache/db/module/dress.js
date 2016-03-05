/**
 * Created by chenjianjun on 16/2/26.
 */
var env=require("../../config");
var type=env.Thinky.type;

// 婚纱礼服--礼服列表
/*
 {
 "success": true,
 "message": null,
 "data": [
     {
     "id": 327,
     "createTime": "2016-01-21 19:27:29",
     "updateTime": "2016-01-26 18:22:14",
     "operater": 1,
     "isUsed": 1,
     "name": "香奈儿",
     "description": "香奈儿",
     "number": "001",
     "typeId": 3,
     "brandId": 7,
     "imageUrl": "http://img.jsbn.com/dress/20160122/14534537137646159_650x487.jpg",
     "weight": 20,
     "position": "dress_brand_male"
     }
 ],
 "code": 200,
 "count": 11
 }
 * */

const Dress = env.Thinky.createModel('dress', {
    // Id
    id: type.number(),
    // 创建时间
    createTime: type.date(),
    // 修改时间
    updateTime: type.date(),
    // 操作员
    operater: type.number(),
    // 是否有效 有效0：无效 1：有效
    isUsed: type.number(),
    // 名称
    name: type.string(),
    // 描述
    description: type.string(),
    // 礼服编号
    number: type.string(),
    // 礼服类型
    typeId: type.number(),
    // 礼服品牌
    brandId: type.number(),
    // 礼服URL图片地址
    imageUrl: type.string(),
    // 资源位置
    position: type.string(),
    // 权重
    weight: type.number()
})

Dress.ensureIndex('weight');

module.exports=Dress;
