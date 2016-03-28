/**
 * Created by chenjianjun on 16/2/25.
 */
var env=require("../../../config");
var type=env.Thinky.type;

// 婚纱摄影--外景地模型
/*
 {
 "success": true,
 "message": null,
 "data": [
     {
     "id": 20,
     "exteriorId": 20,
     "createTime": "2015-10-28 11:13:04",
     "updateTime": "2015-10-28 11:13:04",
     "operater": 0,
     "isUsed": 1,
     "name": "花木世界",
     "description": "花木世界",
     "weight": 14
     }
 ],
 "code": 200,
 "count": 0
 }
 * */

// 外景地模型
const FilterConditionExterior = env.Thinky.createModel('filterConditionExterior', {
    // Id
    id: type.number(),
    exteriorId: type.number(),
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
    // 权重
    weight: type.number()
})

FilterConditionExterior.ensureIndex('weight');

module.exports=FilterConditionExterior;
