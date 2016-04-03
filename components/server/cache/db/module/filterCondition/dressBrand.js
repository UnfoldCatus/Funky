/**
 * Created by chenjianjun on 16/2/26.
 */
var env=require("../../../config");
var type=env.Thinky.type;

// 婚纱礼服--礼服品牌
/*
 {
 "success": true,
 "message": null,
 "data": [
     {
     "id": 10000,
     "createTime": "2016-03-04 15:07:30",
     "updateTime": "2016-03-04 15:07:30",
     "operater": 0,
     "isUsed": 1,
     "name": "奈特丽",
     "description": null,
     "type": 1,
     "coverUrlWeb": "http://image.jsbn.com/WebImage/cq/jpg/20151230/84196235768245836536/20151230154757682217_900x601.jpg",
     "coverUrlWx": "http://image.jsbn.com/WebImage/cq/jpg/20151230/28412301082280548126/20151230154757526357_900x601.jpg",
     "coverUrlApp": "http://image.jsbn.com/WebImage/cq/jpg/20151230/28412301082280548126/20151230154757526357_900x601.jpg",
     "logoUrl": "",
     "brandId": 10000
     }
 ],
 "code": 200,
 "count": 1
 }
 * */

const FilterConditionDressBrand = env.Thinky.createModel('filterConditionDressBrand', {
    // 发布ID
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
    // 名称
    name: type.string(),
    // logo URL
    logoUrl: type.string(),
    // 描述
    description: type.string(),
    // 礼服类型 1 国际婚纱 2 新娘礼服 3 男士礼服
    type: type.number(),
    // 网站封面图片地址
    coverUrlWeb: type.string(),
    // 微信封面图片地址
    coverUrlWx: type.string(),
    // APP封面图片地址
    coverUrlApp: type.string(),
    // 权重
    weight: type.number()
})

FilterConditionDressBrand.ensureIndex('weight');

module.exports=FilterConditionDressBrand;
