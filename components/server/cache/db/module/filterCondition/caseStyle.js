/**
 * Created by chenjianjun on 16/2/25.
 */
var env=require("../../../config");
var type=env.Thinky.type;

// 婚庆策划--案例风格模型
/*
 {
 "success": true,
 "message": null,
 "data": [
     {
     "id": 1,
     "caseStyleId": 1,
     "createTime": "2015-11-20 11:42:00",
     "updateTime": "2015-11-20 11:47:19",
     "operater": 1,
     "isUsed": 1,
     "name": "大气唯美",
     "description": "大气唯美",
     "weight": 100
     },
 ],
 "code": 200,
 "count": 0
 }
 * */

// 外景地模型
const FilterConditionCaseStyle = env.Thinky.createModel('filterConditionCaseStyle', {
    // Id
    id: type.number(),
    caseStyleId: type.number(),
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

FilterConditionCaseStyle.ensureIndex('weight');

module.exports=FilterConditionCaseStyle;
