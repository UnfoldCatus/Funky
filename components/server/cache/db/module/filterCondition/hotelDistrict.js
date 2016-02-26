/**
 * Created by chenjianjun on 16/2/25.
 */
var env=require("../../config");
var type=env.Thinky.type;

// 婚宴预订--酒店区域模型
/*
 {
 "success": true,
 "message": null,
 "data": [
 {
 "id": 88,
 "name": "万州区",
 "pid": ""
 }
 ],
 "code": 200,
 "count": 0
 }
 * */

// 酒店类型模型
const FilterConditionHotelDistricts = env.Thinky.createModel('filterConditionHotelDistricts', {
    // 地区ID
    id: type.number(),
    // 地区名称
    name: type.string(),
    // 上级城市ID
    pid: type.string(),
    // 权重
    weight: type.number()
})

FilterConditionHotelDistricts.ensureIndex('weight');

module.exports=FilterConditionHotelDistricts;
