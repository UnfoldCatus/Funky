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
     "createTime": "2016-02-17 15:29:02",
     "updateTime": "2016-02-17 15:29:19",
     "operater": 1,
     "isUsed": 1,
     "name": "妖娆风",
     "description": "妖娆风",
     "weight": 10
     },
     {
     "id": 17,
     "createTime": "2015-11-24 15:04:32",
     "updateTime": "2015-11-24 15:04:32",
     "operater": 0,
     "isUsed": 1,
     "name": "清新纪实",
     "description": "清新纪实",
     "weight": 5
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
    // 权重
    weight: type.number()
})

FilterConditionShootStyle.ensureIndex('weight');

module.exports=FilterConditionShootStyle;
