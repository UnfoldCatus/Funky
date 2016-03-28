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
     "id": 288,
     "pringlesId": 12,
     "createTime": "2015-11-12 12:58:15",
     "updateTime": "2015-11-12 12:58:15",
     "operater": null,
     "isUsed": 1,
     "name": "123123123",
     "photographerId": 1,
     "photographerDetail": "{\"personName\":\"松松\",\"photoUrl\":\"1\",\"description\":\"1\",\"personId\":1}",
     "stylistId": 2,
     "stylistDetail": "{\"personName\":\"松松1\",\"photoUrl\":\"2\",\"description\":\"2\",\"personId\":2}",
     "coverUrl": "http://192.168.1.3:3000/ftppub/cd/uploadResource/jpg/20151107/2015110717110001/1446887461209.jpg",
     "wechatUrl": "http://192.168.1.3:3000/ftppub/cd/uploadResource/jpg/20151107/2015110717110001/1446887461211.jpg",
     "mobileUrl": "http://192.168.1.3:3000/ftppub/cd/uploadResource/jpg/20151107/2015110717110001/1446887461209.jpg",
     "actorFemaleName": "fasdf",
     "actorMaleName": "a11112312",
     "description": "1",
     "pcDetailImages": "[]",
     "appDetailImages": "[]",
     "wxDetailImages": "[]",
     "seasonId": null,
     "position": "0",
     "weight": 323
     }
 ],
 "code": 200,
 "count": 2
 }
 */

// 客片模型
const Pringles = env.Thinky.createModel('pringles', {
    // 发布Id
    id: type.number(),
    // 客片ID
    pringlesId: type.number(),
    // 创建时间
    createTime: type.string(),
    // 修改时间
    updateTime: type.string(),
    // 操作员
    operater: type.number(),
    // 是否有效
    isUsed: type.number(),
    // 客片名称
    name: type.string(),
    // 摄影师Id
    photographerId: type.number(),
    // 造型师Id
    stylistId: type.number(),
    // 网站封面图片地址
    coverUrl: type.string(),
    // 微信封面图片地址
    wechatUrl: type.string(),
    // APP封面图片地址
    mobileUrl: type.string(),
    // 女主角
    actorFemaleName: type.string(),
    // 男主角
    actorMaleName: type.string(),
    // 客片分季
    seasonId: type.number(),
    // 客片描述
    description: type.string(),
    /************************************start************************************/
    // TODO 本身是json对象，以字符串形式表现
    // 造型师详细
    stylistDetail: type.string(),
    // 摄影师详细
    photographerDetail: type.string(),
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

Pringles.ensureIndex('weight');

module.exports=Pringles;
