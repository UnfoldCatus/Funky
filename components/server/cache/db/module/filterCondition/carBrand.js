/**
 * Created by chenjianjun on 16/2/25.
 */
var env=require("../../../config");
var type=env.Thinky.type;

// 婚礼租车--品牌
/*
 {
 "success": true,
 "message": null,
 "data": [
     {
     "id": 4,
     "createTime": "2016-01-21 19:41:31",
     "updateTime": "2016-01-21 19:41:31",
     "operater": 1,
     "isUsed": 1,
     "name": "马自达",
     "description": "",
     "brandId": 4
     }
 ],
 "code": 200,
 "count": 0
 }
 * */

// 酒店类型模型
const FilterConditionCarBrand = env.Thinky.createModel('filterConditionCarBrand', {
    // Id
    id: type.number(),
    // 品牌ID
    brandId: type.number(),
    // 创建时间
    createTime: type.string(),
    // 修改时间
    updateTime: type.string(),
    // 操作员
    operater: type.number(),
    // 是否有效 有效0：无效 1：有效
    isUsed: type.number(),
    // 型号名
    name: type.string(),
    // 描述
    description: type.string()
    //// 权重
    //weight: type.number()
})

//FilterConditionCarBrand.ensureIndex('weight');

module.exports=FilterConditionCarBrand;
