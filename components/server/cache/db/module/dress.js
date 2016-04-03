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
     "id": 519,
     "createTime": "2016-03-04 15:07:30",
     "updateTime": "2016-03-04 15:07:30",
     "operater": 0,
     "isUsed": 1,
     "name": "9",
     "description": null,
     "number": "9",
     "typeId": 3,
     "brandId": 10021,
     "imageUrl": "http://image.jsbn.com/WebImage/null/jpg/20151214/52096961170686630867/20151214152920238050_500x750.jpg",
     "weight": 178,
     "position": "dress_list",
     "dressId": 0
     }
 ],
 "code": 200,
 "count": 11
 }
 * */

const Dress = env.Thinky.createModel('dress', {
    // 发布Id
    id: type.number(),
    // 礼服ID
    dressId: type.number(),
    // 创建时间
    createTime: type.string(),
    // 修改时间
    updateTime: type.string(),
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
