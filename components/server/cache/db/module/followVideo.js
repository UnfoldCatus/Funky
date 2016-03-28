/**
 * Created by chenjianjun on 16/2/24.
 */
var env=require("../../config");
var type=env.Thinky.type;

/*
 {
 "success": true,
 "message": null,
 "data": [
     {
     "id": 205,
     "followVideoId": 12,
     "createTime": "2016-01-21 19:17:12",
     "updateTime": "2016-01-21 19:17:12",
     "operater": 1,
     "isUsed": 1,
     "name": "夜空中最亮的星",
     "description": "",
     "hitNum": 500,
     "remark": "",
     "videoUrl": "http://bfjs.oss-cn-shenzhen.aliyuncs.com/video%2Fjsbn%2Fanlie%2F%E9%87%91%E8%89%B2%E7%99%BE%E5%B9%B412.31%E5%8F%8C%E6%9C%BA%E8%8A%B1%E7%B5%AE_0.mp4",
     "coverUrlWeb": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringlesSeason/20160128/14539767434036829_1200x800.jpg",
     "coverUrlWx": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringlesSeason/20160128/14539767434534752_1200x800.jpg",
     "coverUrlApp": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/pringlesSeason/20160128/14539767434281829_1200x800.jpg",
     "weddingId": 8,
     "weddingName": "惜•缘",
     "seasonId": 228,
     "position": "weddingvideo_list",
     "weight": 100
     }
 ],
 "code": 200,
 "count": 1
 }
* */

// 婚庆策划--婚礼视频模型
const FollowVideo = env.Thinky.createModel('followVideo', {
    // 发布Id
    id: type.number(),
    // 资源
    followVideoId: type.number(),
    // 创建时间
    createTime: type.string(),
    // 修改时间
    updateTime: type.string(),
    // 操作员
    operater: type.number(),
    // 是否有效 有效0：无效 1：有效
    isUsed: type.number(),
    // 婚礼视频名称
    name: type.string(),
    // 描述
    description: type.string(),
    // 热度
    hitNum: type.number(),
    // 视频备注
    remark: type.string(),
    // 视频地址
    videoUrl: type.string(),
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
    // 婚礼ID
    weddingId: type.number(),
    // 婚礼名称
    weddingName: type.string(),
    // 分季ID
    seasonId: type.number(),
    // 资源位置
    position: type.string(),
    // 权重
    weight: type.number()
})

FollowVideo.ensureIndex('weight');

module.exports=FollowVideo;
