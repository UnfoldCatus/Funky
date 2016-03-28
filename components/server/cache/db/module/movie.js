/**
 * Created by chenjianjun on 16/2/25.
 */
var env=require("../../config");
var type=env.Thinky.type;

/*
 {
 "success": true,
 "message": null,
 "data": [
     {
     "id": 123,
     "videoId": 0,
     "createTime": "2016-01-22 11:22:07",
     "updateTime": "2016-01-22 11:29:11",
     "operater": 1,
     "isUsed": 1,
     "name": "11111",
     "type": 1,
     "coverUrlWeb": "http://img.jsbn.com/video/20160122/14534333515215350_650x1021.jpg",
     "coverUrlWx": "http://img.jsbn.com/video/20160122/14534329278383012_500x680.jpg",
     "coverUrlApp": "http://img.jsbn.com/video/20160122/14534329278246577_500x680.jpg",
     "description": "",
     "videoUrl": "http://img.jsbn.com/video/20160122/14534329277875838.MP4",
     "position": "movie_love_movies",
     "hitNum": 0,
     "weight": 1
     }
 ],
 "code": 200,
 "count": 67
 }
* */

// 微电影模型
const WdyVideo = env.Thinky.createModel('wdyVideo', {
    // 发布Id
    id: type.number(),
    // 视频ID
    videoId: type.number(),
    // 创建时间
    createTime: type.string(),
    // 修改时间
    updateTime: type.string(),
    // 操作员
    operater: type.number(),
    // 是否有效
    isUsed: type.number(),
    // 名称
    name: type.string(),
    // 类型
    type: type.number(),
    // 网站封面图片地址
    coverUrlWeb: type.string(),
    // 微信封面图片地址
    coverUrlWx: type.string(),
    // APP封面图片地址
    coverUrlApp: type.string(),
    // 描述
    description: type.string(),
    // 视频地址
    videoUrl: type.string(),
    // 点击量
    hitNum: type.number(),
    // 资源位置
    position: type.string(),
    // 权重
    weight: type.number()
})

WdyVideo.ensureIndex('weight');

module.exports=WdyVideo;
