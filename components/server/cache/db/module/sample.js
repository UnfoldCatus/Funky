/**
 * Created by chenjianjun on 15/12/15.
 * 样片数据模型
 */
var env=require("../../config");
var type=env.Thinky.type;

/*
 {
 "success": true,
 "message": null,
 "data": [
     {
     "id": 255,
     "sampleId": 65,
     "createTime": "2016-02-20 10:17:50",
     "updateTime": "2016-02-20 10:17:50",
     "operater": 1,
     "isUsed": 1,
     "name": "鎏金时代",
     "exterior": "10,11,",
     "shootingStyle": "15,16,",
     "photographerId": 36,
     "photographerDetail": "{\"description\":\"\",\"personId\":36,\"photoUrl\":\"http://img.jsbn.com/person/20160121/14533654321170989_417x417.jpg\",\"personName\":\"秋黑\"}",
     "stylistId": 37,
     "stylistDetail": "{\"description\":\"\",\"personId\":37,\"photoUrl\":\"http://img.jsbn.com/person/20160121/14533656710794482_200x200.jpg\",\"personName\":\"果果\"}",
     "coverUrlWeb": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639168470415_400x600.jpg",
     "coverUrlWx": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639169381215_1920x1080.jpg",
     "coverUrlApp": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639168933183_1920x1080.jpg",
     "description": "这是描述",
     "sampleType": 0,
     "pcDetailImages": "[\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639608002744_1920x859.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639611741800_1920x859.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639606606894_1920x859.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639611136246_1920x859.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639612523624_1920x859.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639609377828_1920x859.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639613365734_1920x859.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639610754786_1920x859.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639613804609_1920x859.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639611477947_1920x859.jpg\"]",
     "appDetailImages": "[\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639608002744_1920x859.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639611741800_1920x859.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639606606894_1920x859.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639611136246_1920x859.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639612523624_1920x859.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639609377828_1920x859.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639613365734_1920x859.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639610754786_1920x859.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639613804609_1920x859.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639611477947_1920x859.jpg\"]",
     "wxDetailImages": "[\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639608002744_1920x859.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639611741800_1920x859.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639606606894_1920x859.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639611136246_1920x859.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639612523624_1920x859.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639609377828_1920x859.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639613365734_1920x859.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639610754786_1920x859.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639613804609_1920x859.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringles/20160128/14539639611477947_1920x859.jpg\"]",
     "position": "samples_list",
     "weight": 6
     }
 ],
 "code": 200,
 "count": 3
 }
 */

// 样片模型
const Sample = env.Thinky.createModel('sample', {
    // 发布Id
    id: type.number(),
    // 资源ID
    sampleId: type.number(),
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
    // 外景
    exterior: type.string(),
    // 风格
    shootingStyle: type.string(),
    // 样片类型 0:婚纱摄影 1:艺术照 2:全家福
    sampleType: type.number(),
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
