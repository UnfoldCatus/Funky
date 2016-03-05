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
 "id": 9,
 "createTime": "2016-02-18 10:07:21",
 "updateTime": "2016-02-18 10:09:28",
 "operater": 1,
 "isUsed": 1,
 "name": "钻石之王",
 "description": "",
 "type": 1,
 "coverUrlWeb": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/dressBrand/20160218/14557612413353808_391x220.jpg",
 "coverUrlWx": null,
 "coverUrlApp": null,
 "logoUrl": null
 }
 ],
 "code": 200,
 "count": 1
 }
 * */

const FilterConditionDressBrand = env.Thinky.createModel('filterConditionDressBrand', {
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
