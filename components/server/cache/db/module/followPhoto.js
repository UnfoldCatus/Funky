/**
 * Created by chenjianjun on 16/2/24.
 */
var env=require("../../config");
var type=env.Thinky.type;

// 婚庆策划--婚礼跟拍模型
/*
 {
 "success": true,
 "message": null,
 "data": [
     {
     "id": 209,
     "followPhotoId": 11,
     "createTime": "2016-01-27 15:19:37",
     "updateTime": "2016-01-27 15:31:27",
     "operater": 1,
     "isUsed": 1,
     "name": "测试",
     "description": "什么玩意",
     "coverUrlWeb": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/followPhotoSeason/20160127/14538791657426794_352x220.jpg",
     "coverUrlWx": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/followPhotoSeason/20160127/14538791657582623_352x220.jpg",
     "coverUrlApp": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/followPhotoSeason/20160127/14538791657499354_352x220.jpg",
     "pcDetailImages": "[{\"createTime\":null,\"id\":45154,\"isUsed\":1,\"operater\":0,\"type\":1,\"updateTime\":null,\"url\":\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/followPhoto/20160127/14538798829112669_498x293.jpg\",\"weight\":2},{\"createTime\":null,\"id\":45155,\"isUsed\":1,\"operater\":0,\"type\":1,\"updateTime\":null,\"url\":\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/followPhoto/20160127/14538798829069348_475x350.jpg\",\"weight\":3}]",
     "appDetailImages": "[{\"createTime\":null,\"id\":45158,\"isUsed\":1,\"operater\":0,\"type\":3,\"updateTime\":null,\"url\":\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/followPhoto/20160127/14538798829385778_498x293.jpg\",\"weight\":0},{\"createTime\":null,\"id\":45159,\"isUsed\":1,\"operater\":0,\"type\":3,\"updateTime\":null,\"url\":\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/followPhoto/20160127/14538798829330037_475x350.jpg\",\"weight\":1}]",
     "wxDetailImages": "[{\"createTime\":null,\"id\":45156,\"isUsed\":1,\"operater\":0,\"type\":2,\"updateTime\":null,\"url\":\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/followPhoto/20160127/14538798829427377_498x293.jpg\",\"weight\":4},{\"createTime\":null,\"id\":45157,\"isUsed\":1,\"operater\":0,\"type\":2,\"updateTime\":null,\"url\":\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/followPhoto/20160127/14538798828847026_475x350.jpg\",\"weight\":5}]",
     "hdpcCost": 0,
     "senceCost": 0,
     "totalCost": 0,
     "color": "红色",
     "theme": "惜•缘",
     "weddingName": "惜•缘",
     "holdingTime": "2016-01-21",
     "holdingPlace": "芭菲嘉宴二郎店1号厅",
     "seasonId": 6,
     "position": "weddingpat_list",
     "weight": 10
     }
 ],
 "code": 200,
 "count": 1
 }
* */

// 婚礼跟拍模型
const FollowPhoto = env.Thinky.createModel('followPhoto', {
    // 发布Id
    id: type.number(),
    // 资源ID
    followPhotoId: type.number(),
    // 创建时间
    createTime: type.string(),
    // 修改时间
    updateTime: type.string(),
    // 操作员
    operater: type.number(),
    // 是否有效 有效0：无效 1：有效
    isUsed: type.number(),
    // 婚礼跟拍名称
    name: type.string(),
    // 描述
    description: type.string(),
    // 网站封面图片地址
    coverUrlWeb: type.string(),
    // 微信封面图片地址
    coverUrlWx: type.string(),
    // APP封面图片地址
    coverUrlApp: type.string(),
    /************************************start************************************/
    // TODO 本身是json对象，以字符串形式表现
    // web详细图片集
    pcDetailImages: type.string(),
    // app详细图片集
    appDetailImages: type.string(),
    // 微信详细图片集
    wxDetailImages: type.string(),
    /************************************end*************************************/
    // 四大金刚花费
    hdpcCost: type.number(),
    // 场景布置花费
    senceCost: type.number(),
    // 总费用
    totalCost: type.number(),
    // 色系
    color: type.string(),
    // 主题
    theme: type.string(),
    // 婚礼人
    personDescription: type.string(),
    // 婚礼名称
    weddingName: type.string(),
    // 风格
    caseStyle: type.string(),
    // 婚礼时间
    holdingTime: type.string(),
    // 婚礼地点
    holdingPlace: type.string(),
    // 分季ID
    seasonId: type.number(),
    // 资源位置
    position: type.string(),
    // 权重
    weight: type.number()
})

FollowPhoto.ensureIndex('weight');

module.exports=FollowPhoto;
