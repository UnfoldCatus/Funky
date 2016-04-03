/**
 * Created by chenjianjun on 16/2/26.
 */
var env=require("../../config");
var type=env.Thinky.type;

// 婚礼课堂

/*
 {
 "success": true,
 "message": null,
 "data": [
     {
     "id": 42,
     "classRoomId": 9,
     "createTime": "2016-01-21 19:48:07",
     "updateTime": "2016-01-21 19:48:07",
     "operater": 1,
     "isUsed": 1,
     "title": " 选择酒店的五大要素",
     "description": "一场婚礼的成败，婚宴酒店的选择至关重要，如何挑选婚宴酒店成了不少新人困扰的问题，小编就来跟大家说婚宴酒店的选择。",
     "content": "富文本内容",
     "moduleType": 2,
     "coverUrlWeb": "http://img.jsbn.com/dress/20160121/14533768864978936_900x600.jpg",
     "coverUrlWx": "http://img.jsbn.com/dress/20160121/14533768866697022_900x600.jpg",
     "coverUrlApp": "http://img.jsbn.com/dress/20160121/14533768865830475_900x600.jpg",
     "author": "金色百年",
     "position": "supplies_class_list",
     "weight": 1
     }
 ],
 "code": 200,
 "count": 10
 }
* */

const WeddingClass = env.Thinky.createModel('weddingClass', {
    // Id
    id: type.number(),
    // 文章ID
    classRoomId: type.number(),
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
    // 富文本内容
    content: type.string(),
    // 模块ID
    moduleType: type.number(),
    // web封面图片地址
    coverUrlWeb: type.string(),
    // 微信封面图片地址
    coverUrlWx: type.string(),
    // APP封面图片地址
    coverUrlApp: type.string(),
    // 作者
    author: type.string(),
    // 资源位置
    position: type.string(),
    // 权重
    weight: type.number()
})

WeddingClass.ensureIndex('weight');

module.exports=WeddingClass;
