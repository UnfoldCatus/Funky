/**
 * Created by chenjianjun on 16/2/25.
 */
var env=require("../../../config");
var type=env.Thinky.type;

// 婚纱摄影--摄影风格模型
/*
 {
 "success": true,
 "message": null,
 "data": [
     {
     "id": 18,
     "shootStyleId": 18,
     "createTime": "2016-02-17 15:29:02",
     "updateTime": "2016-02-17 15:29:19",
     "operater": 1,
     "isUsed": 1,
     "name": "妖娆风",
     "description": "妖娆风",
     "weight": 10
     }
 ],
 "code": 200,
 "count": 0
 }
 * */

// 摄影风格模型
const FilterConditionShootStyle = env.Thinky.createModel('filterConditionShootStyle', {
    // Id
    id: type.number(),
    shootStyleId: type.number(),
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

FilterConditionShootStyle.ensureIndex('weight');

module.exports=FilterConditionShootStyle;
