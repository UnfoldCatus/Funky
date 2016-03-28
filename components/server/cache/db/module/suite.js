/**
 * Created by chenjianjun on 15/12/16.
 * 套系模型
 */
var env=require("../../config");
var type=env.Thinky.type;

// 套系模型
const Suite = env.Thinky.createModel('suite', {
    // 发布Id
    id: type.number(),
    // 套系ID
    suiteId: type.number(),
    // 创建时间
    createTime: type.string(),
    // 修改时间
    updateTime: type.string(),
    // 操作员
    operater: type.number(),
    // 是否有效
    isUsed: type.number(),
    // 样片名称
    name: type.string(),
    // 套系等级
    level: type.number(),
    // 网站封面图片地址
    coverUrl: type.string(),
    // 微信封面图片地址
    wechatUrl: type.string(),
    // APP封面图片地址
    mobileUrl: type.string(),
    // 套系描述
    description: type.string(),
    /************************************start************************************/
    // TODO 本身是json对象，以字符串形式表现
    // 摄影师详细
    photographerDetail: type.string(),
    // 造型师详细
    stylistDetail: type.string(),
    // 网站详细图片集
    pcDetailImages: type.string(),
    // APP详细图片集
    appDetailImages: type.string(),
    // 微信详细图片集
    wxDetailImages: type.string(),
    /************************************end************************************/
    // 资源位置
    position: type.string(),
    // 权重
    weight: type.number()
})

Suite.ensureIndex('weight');

module.exports=Suite;
