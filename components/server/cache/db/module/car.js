/**
 * Created by chenjianjun on 16/2/26.
 */
var env=require("../../config");
var type=env.Thinky.type;

// 婚礼租车

/*
 {
 "success": true,
 "message": null,
 "data": [
     {
     "id": 232,
     "carId": 7,
     "createTime": "2016-01-21 19:46:13",
     "updateTime": "2016-01-28 16:57:50",
     "operater": 1,
     "isUsed": 1,
     "title": "新款大众帕萨特",
     "description": "超出范围限制请联系客服！我们会更具你的用车时间、用车路线的不同，给你一个最优惠的价格（备注：大型节假日不享受此价格：元旦、五一、十一、春节）",
     "parameter": "范围：重庆主城内环范围以内|\r\n时间：用车时间5小时|\r\n里程：60公里以内|\r\n带驾驶员：是|\r\n油费：包含|\r\n清洗费：包含",
     "content": "内容发送到发送到发送到发送到发生的",
     "supplierId": 6,
     "levelId": 9,
     "modelsId": 4,
     "brandId": 6,
     "carNature": 1,
     "coverUrlWeb": "http://img.jsbn.com/weddingCar/20160121/14533767734205907_375x245.jpg",
     "coverUrlWx": "http://img.jsbn.com/weddingCar/20160121/14533767734289714_375x245.jpg",
     "coverUrlApp": "http://img.jsbn.com/weddingCar/20160121/14533767734247487_375x245.jpg",
     "marketPrice": 550.0,
     "rentalPrice": 500.0,
     "pcDetailImages": null,
     "appDetailImages": null,
     "wxDetailImages": null,
     "position": "car_list",
     "weight": 5
     }
 ],
 "code": 200,
 "count": 3
 }
* */

const Car = env.Thinky.createModel('car', {
    // 发布Id
    id: type.number(),
    // 汽车ID
    carId: type.number(),
    // 创建时间
    createTime: type.string(),
    // 修改时间
    updateTime: type.string(),
    // 操作员
    operater: type.number(),
    // 是否有效 有效0：无效 1：有效
    isUsed: type.number(),
    // 标题
    title: type.string(),
    // 描述
    description: type.string(),
    // 汽车参数
    parameter: type.string(),
    // 富文本内容
    content: type.string(),
    // 供应商ID
    supplierId: type.number(),
    // 档次id
    levelId: type.number(),
    // 品牌id
    brandId: type.number(),
    // 型号id
    modelsId: type.number(),
    // 婚车类型
    carNature: type.number(),
    // web封面图片地址
    coverUrlWeb: type.string(),
    // 微信封面图片地址
    coverUrlWx: type.string(),
    // APP封面图片地址
    coverUrlApp: type.string(),
    // 市场价
    marketPrice: type.number(),
    // 租赁价
    rentalPrice: type.number(),
    /************************************start************************************/
    // TODO 本身是json对象，以字符串形式表现
    // web详细图片集
    pcDetailImages: type.string(),
    // app详细图片集
    appDetailImages: type.string(),
    // 微信详细图片集
    wxDetailImages: type.string(),
    /************************************end*************************************/
    // 资源位置
    position: type.string(),
    // 权重
    weight: type.number()
})

Car.ensureIndex('weight');

module.exports=Car;
