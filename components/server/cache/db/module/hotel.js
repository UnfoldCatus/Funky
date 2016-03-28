/**
 * Created by chenjianjun on 15/12/11.
 */
var env=require("../../config");
var type=env.Thinky.type;

// 酒店模型
const Hotel = env.Thinky.createModel('hotel', {
    // 发布Id
    id: type.number(),
    // 创建时间
    createTime: type.string(),
    // 修改时间
    updateTime: type.string(),
    // 操作员
    operater: type.number(),
    // 是否有效
    isUsed: type.number(),
    // 酒店Id
    hotelId: type.number(),
    // 酒店名称
    name: type.string(),
    // 酒店类型
    type: type.number(),
    // 酒店类型名称
    typeName: type.string(),
    // 酒店详细地址
    address: type.string(),
    // 最大容客桌数
    maxTableNum: type.number(),
    // 宴会厅数量
    banquetHalNum: type.number(),
    // 开始营业时间
    businessOpenTime: type.string(),
    // 结束营业时间
    businessCloseTime: type.string(),
    // 酒店座机
    landLineNum: type.string(),
    // 酒店联系方式
    mobile: type.string(),
    // 省份id
    provinceId: type.number(),
    // 城市ID
    cityId: type.number(),
    // pc封面图
    coverUrl: type.string(),
    // 微信封面图
    wechatUrl: type.string(),
    // app封面图
    mobileUrl: type.string(),
    // 详细介绍
    introduction: type.string(),
    // 纬度
    latitude: type.number(),
    // 经度
    longitude: type.number(),
    // 最低消费
    lowestConsumption: type.number(),
    // 最高消费
    highestConsumption: type.number(),
    // 特色标签 逗号分隔
    featureLabel: type.string(),
    /************************************start************************************/
    // TODO 本身是json对象，以字符串形式表现
    // 优惠标签
    lableDetail: type.string(),
    // web详细图片集
    pcDetailImages: type.string(),
    // app详细图片集
    appDetailImages: type.string(),
    // 微信详细图片集
    wxDetailImages: type.string(),
    // 套餐详细
    setMealDetail: type.string(),
    /************************************end*************************************/
    // 网站封面图片地址
    coverUrlWeb: type.string(),
    // 微信封面图片地址
    coverUrlWx: type.string(),
    // APP封面图片地址
    coverUrlApp: type.string(),
    // 是否有优惠
    isDiscount: type.number(),
    // 是否有礼包
    isGift: type.number(),
    // 资源位置
    position: type.string(),
    // 权重
    weight: type.number(),
    // 宴会厅列表
    banquetHall: type.array()
})

//Hotel.ensureIndex('highestConsumption');
//Hotel.ensureIndex('maxTableNum');

module.exports=Hotel;
