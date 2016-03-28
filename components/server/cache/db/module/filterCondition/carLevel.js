/**
 * Created by chenjianjun on 16/2/25.
 */
var env=require("../../../config");
var type=env.Thinky.type;

// 婚礼租车--档次
/*
 {
 "success": true,
 "message": null,
 "data": [
     {
     "id": 8,
     "createTime": "2015-11-20 17:33:54",
     "updateTime": "2015-11-20 17:33:54",
     "operater": 0,
     "isUsed": 1,
     "name": "低档",
     "description": "低档",
     "levelId": 8
     }
 ],
 "code": 200,
 "count": 0
 }
 * */

// 酒店类型模型
const FilterConditionCarLevel = env.Thinky.createModel('filterConditionCarLevel', {
    // Id
    id: type.number(),
    // 档次ID
    levelId: type.number(),
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

//FilterConditionCarLevel.ensureIndex('weight');

module.exports=FilterConditionCarLevel;
