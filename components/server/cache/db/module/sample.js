/**
 * Created by chenjianjun on 15/12/15.
 * 样片数据模型
 */
var env=require("../config");
var type=env.Thinky.type;

/*
 {
 "success": true,
 "message": null,
 "data": [
 {
 "id": 249,
 "createTime": "2015-12-07 00:42:56",
 "updateTime": "2015-12-07 00:42:56",
 "operater": 1,
 "isUsed": 1,
 "name": "粉红色的回忆",
 "exterior": "[2, 5, 7, 8, 9]",
 "shootingStyle": "[13, 14, 15]",
 "photographerId": 15,
 "photographerDetail": "{\"personName\":\"艾比01\",\"photoUrl\":\"www.qq.com\",\"description\":\"测试\",\"personId\":15}",
 "stylistId": 16,
 "stylistDetail": "{\"personName\":\"卓玛01\",\"photoUrl\":\"www.qq.com\",\"description\":\"测试\",\"personId\":16}",
 "coverUrl": "http://image.jsbn.com/sample/20151207/14494201454671743.jpg",
 "wechatUrl": "http://image.jsbn.com/sample/20151207/14494201454676007.jpg",
 "mobileUrl": "http://image.jsbn.com/sample/20151207/14494201454677800.jpg",
 "description": "22222",
 "pcDetailImages": null,
 "appDetailImages": null,
 "wxDetailImages": null,
 "position": "1191"
 },
 {
 "id": 248,
 "createTime": "2015-12-07 00:27:44",
 "updateTime": "2015-12-07 00:27:44",
 "operater": 1,
 "isUsed": 1,
 "name": "天使之恋",
 "exterior": "[8, 9]",
 "shootingStyle": "[13, 14]",
 "photographerId": 15,
 "photographerDetail": "{\"personName\":\"艾比01\",\"photoUrl\":\"www.qq.com\",\"description\":\"测试\",\"personId\":15}",
 "stylistId": 16,
 "stylistDetail": "{\"personName\":\"卓玛01\",\"photoUrl\":\"www.qq.com\",\"description\":\"测试\",\"personId\":16}",
 "coverUrl": "http://image.jsbn.com/sample/20151206/14493989814190310.jpg",
 "wechatUrl": "http://image.jsbn.com/sample/20151206/14493989814192518.jpg",
 "mobileUrl": "http://image.jsbn.com/sample/20151206/14493989814197596.jpg",
 "description": "XXX和XXX拍摄的天使之恋效果图的描述",
 "pcDetailImages": null,
 "appDetailImages": null,
 "wxDetailImages": null,
 "position": "1191"
 },
 {
 "id": 247,
 "createTime": "2015-12-07 00:02:06",
 "updateTime": "2015-12-07 00:02:06",
 "operater": 1,
 "isUsed": 1,
 "name": "天使之恋",
 "exterior": "[8, 9]",
 "shootingStyle": "[13, 14]",
 "photographerId": 15,
 "photographerDetail": "{\"personName\":\"艾比01\",\"photoUrl\":\"www.qq.com\",\"description\":\"测试\",\"personId\":15}",
 "stylistId": 16,
 "stylistDetail": "{\"personName\":\"卓玛01\",\"photoUrl\":\"www.qq.com\",\"description\":\"测试\",\"personId\":16}",
 "coverUrl": "http://image.jsbn.com/sample/20151206/14493989814190310.jpg",
 "wechatUrl": "http://image.jsbn.com/sample/20151206/14493989814192518.jpg",
 "mobileUrl": "http://image.jsbn.com/sample/20151206/14493989814197596.jpg",
 "description": "XXX和XXX拍摄的天使之恋效果图的描述",
 "pcDetailImages": null,
 "appDetailImages": null,
 "wxDetailImages": null,
 "position": "1191"
 }
 ],
 "code": 200,
 "count": 3
 }
 */

// 样片模型
const Sample = env.Thinky.createModel('sample', {
    // Id
    id: type.number(),
    // 创建时间
    createTime: type.date(),
    // 修改时间
    updateTime: type.date(),
    // 操作员
    operater: type.number(),
    // 是否有效
    isUsed: type.number(),
    // 样片名称
    name: type.string(),
    // 外景
    exterior: type.string(),
    // 风格
    shootingStyle: type.string(),
    // 摄影师Id
    photographerId: type.number(),
    // 造型师Id
    stylistId: type.number(),
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
    // 网站封面图片地址
    coverUrl: type.string(),
    // 微信封面图片地址
    wechatUrl: type.string(),
    // APP封面图片地址
    mobileUrl: type.string(),
    // 样片描述
    description: type.string(),
    // 资源位置
    position: type.string(),
    // 权重
    weight: type.number()
})

Sample.ensureIndex('weight');

module.exports=Sample;
