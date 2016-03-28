/**
 * Created by chenjianjun on 16/2/26.
 */
var env=require("../../../config");
var type=env.Thinky.type;

// 婚纱礼服--礼服类型
/*
 {
 "success": true,
 "message": null,
 "data": [
     {
     "id": 1,
     "createTime": "2016-02-26 14:45:27",
     "updateTime": "2016-03-03 14:46:05",
     "operater": 1,
     "isUsed": 1,
     "name": "国际婚纱",
     "description": "国际婚纱",
     "weight": 5,
     "typeId": 1
     }
 ],
 "code": 200,
 "count": 1
 }
 * */

const FilterConditionDressType = env.Thinky.createModel('filterConditionDressType', {
    // 发布Id
    id: type.number(),
    // 资源ID
    typeId: type.number(),
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

FilterConditionDressType.ensureIndex('weight');

module.exports=FilterConditionDressType;
