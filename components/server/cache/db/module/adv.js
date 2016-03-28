/**
 * Created by chenjianjun on 15/12/15.
 */
var env=require("../../config");
var type=env.Thinky.type;

/*
 {
 "success": true,
 "message": null,
 "data": [
     {
     "id": 253,
     "advertId": 45,
     "createTime": null,
     "updateTime": null,
     "operater": null,
     "isUsed": 1,
     "name": "123123123",
     "type": 1,
     "coverUrlWeb": "http://192.168.1.3:3000/ftppub/cd/uploadResource/jpg/20151107/2015110717110001/1446887461209.jpg",
     "coverUrlWx": "http://192.168.1.3:3000/ftppub/cd/uploadResource/jpg/20151107/2015110717110001/1446887461211.jpg",
     "coverUrlApp": "http://192.168.1.3:3000/ftppub/cd/uploadResource/jpg/20151107/2015110717110001/1446887461209.jpg",
     "description": "123123123",
     "linkUrl": "http://www.jsbn.com",
     "videoUrl": "123123123",
     "position": "top",
     "weight": null
     }
 ],
 "code": 200,
 "count": 1
 }
 */

// 广告模型
const Adv = env.Thinky.createModel('adv', {
    // 发布Id
    id: type.number(),
    // 广告ID
    advertId: type.number(),
    // 创建时间
    createTime: type.string(),
    // 修改时间
    updateTime: type.string(),
    // 操作员
    operater: type.number(),
    // 是否有效 有效0：无效 1：有效
    isUsed: type.number(),
    // 广告名称
    name: type.string(),
    // 广告类型 0：图片广告 1：视频广告
    type: type.number(),
    // 网站封面图片地址
    coverUrlWeb: type.string(),
    // 微信封面图片地址
    coverUrlWx: type.string(),
    // APP封面图片地址
    coverUrlApp: type.string(),
    // 广告描述
    description: type.string(),
    // 链接地址
    linkUrl: type.string(),
    // 视频地址，广告类型为视频广告有效
    videoUrl: type.string(),
    // 资源位置
    position: type.string(),
    // 权重
    weight: type.number()
})

Adv.ensureIndex('weight');

module.exports=Adv;
