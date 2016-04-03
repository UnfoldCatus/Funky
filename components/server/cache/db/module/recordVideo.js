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
     "id": 227,
     "recordVideoId": 9,
     "createTime": "2016-01-21 17:31:09",
     "updateTime": "2016-01-21 17:31:09",
     "operater": 1,
     "isUsed": 1,
     "name": "做你的新娘",
     "description": "",
     "hitNum": 500,
     "remark": "",
     "videoUrl": "ftp://192.168.1.3/ftppub/CQ/uploadResource/video/20150923/48716448481998474070/1024X768.mp4\t",
     "coverUrlWeb": "http://img.jsbn.com/followvideo/20160121/14533686688047965_1200x800.jpg",
     "coverUrlWx": "http://img.jsbn.com/followvideo/20160121/14533686690550054_1200x800.jpg",
     "coverUrlApp": "http://img.jsbn.com/followvideo/20160121/14533686689416315_1200x800.jpg",
     "seasonId": 9,
     "position": "record_video_list",
     "weight": 9
     }
 ],
 "code": 200,
 "count": 2
 }
 * */

// 婚纱摄影--纪实MV模型
const RecordVideo = env.Thinky.createModel('recordVideo', {
    // 发布Id
    id: type.number(),
    // 纪实ID
    recordVideoId: type.number(),
    // 创建时间
    createTime: type.string(),
    // 修改时间
    updateTime: type.string(),
    // 操作员
    operater: type.number(),
    // 是否有效
    isUsed: type.number(),
    // 纪实MV名称
    name: type.string(),
    // 纪实MV描述
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
    // 分季ID
    seasonId: type.number(),
    // 权重
    weight: type.number()
})

RecordVideo.ensureIndex('weight');

module.exports=RecordVideo;
