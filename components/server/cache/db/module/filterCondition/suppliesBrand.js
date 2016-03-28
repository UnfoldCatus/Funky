/**
 * Created by chenjianjun on 16/2/25.
 */
var env=require("../../../config");
var type=env.Thinky.type;

// 婚礼用品--品牌
/*
 {
 "success": true,
 "message": null,
 "data": [
     {
     "id": 5,
     "createTime": "2016-01-21 19:32:35",
     "updateTime": "2016-01-21 19:32:35",
     "operater": 1,
     "isUsed": 1,
     "name": "费列罗",
     "description": "",
     "brandId": 5
     }
 ],
 "code": 200,
 "count": 0
 }
 * */

// 酒店类型模型
const FilterConditionSuppliesBrand = env.Thinky.createModel('filterConditionSuppliesBrand', {
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
    // 用品品牌名称
    name: type.string(),
    // 用品品牌描述
    description: type.string()
    //// 权重
    //weight: type.number()
})

//FilterConditionSuppliesBrand.ensureIndex('weight');

module.exports=FilterConditionSuppliesBrand;
