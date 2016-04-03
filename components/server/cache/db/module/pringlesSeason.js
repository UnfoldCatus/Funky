/**
 * Created by chenjianjun on 15/12/15.
 * 客片分级
 */
var env=require("../../config");
var type=env.Thinky.type;

// 客片分季模型
const PringlesSeason = env.Thinky.createModel('pringlesSeason', {
    // Id
    id: type.number(),
    seasonId: type.number(),
    // 创建时间
    createTime: type.string(),
    // 修改时间
    updateTime: type.string(),
    // 操作员
    operater: type.number(),
    // 是否有效
    isUsed: type.number(),
    // 分季名称
    name: type.string(),
    // 分季描述
    description: type.string(),
    // 网站封面图片地址
    coverUrl: type.string(),
    // 微信封面图片地址
    wechatUrl: type.string(),
    // APP封面图片地址
    mobileUrl: type.string(),
    // 资源位置
    // position: type.string(),
    // 权重
    weight: type.number()
})

PringlesSeason.ensureIndex('weight');

module.exports=PringlesSeason;
