/**
 * Created by chenjianjun on 16/2/26.
 */
var env=require("../../config");
var type=env.Thinky.type;

// 四大金刚特色项目

const F4Team = env.Thinky.createModel('f4dresser', {

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
    //
    //personId:


    //
    //// 人员Id
    //id: type.number(),
    //// 人员昵称
    //nickName: type.string(),
    //// 性别
    //gender: type.number(),
    //// 人员描述
    //description: type.string(),
    //// 人员头像url
    //photoUrl: type.string(),
    //// 服务评分
    //serviceScore: type.number(),
    //// 服务介绍
    //serviceInfo: type.string(),
    //// 价格
    //price: type.number(),
    //// 售价
    //salePrice: type.number(),
    //// 价格描述
    //priceRemark: type.string(),
    //// 作品列表
    //workList: type.array()
})

F4Team.ensureIndex('id');

module.exports=F4Team;

