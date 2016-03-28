/**
 * Created by chenjianjun on 16/2/25.
 */
var env=require("../../../config");
var type=env.Thinky.type;

// 婚宴预订--酒店类型模型
/*
 {
 "success": true,
 "message": null,
 "data": [
     {
     "id": 4,
     "typeId": 4,
     "createTime": "2015-11-24 15:12:37",
     "updateTime": "2015-11-24 15:12:37",
     "operater": 0,
     "isUsed": 1,
     "name": "特色酒店",
     "description": "特色酒店"
     }
 ],
 "code": 200,
 "count": 0
 }
 * */

// 酒店类型模型
const FilterConditionHotelType = env.Thinky.createModel('filterConditionHotelType', {
    // Id
    id: type.number(),
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

FilterConditionHotelType.ensureIndex('weight');

module.exports=FilterConditionHotelType;
