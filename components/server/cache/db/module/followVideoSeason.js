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
             "id": 1,
             "seasonId": 1,
             "createTime": "2015-12-01 18:18:00",
             "updateTime": "2015-12-01 18:18:00",
             "operater": 1,
             "isUsed": 1,
             "name": "跟拍视频分级",
             "description": "跟拍视频分级",
             "coverUrl": "https://www.qq.com",
             "wechatUrl": "https://www.qq.com",
             "mobileUrl": "https://www.qq.com",
             "weight": 2
         }
     ],
     "code": 200,
     "count": 1
 }
* */

// 婚礼视频分季模型
const FollowVideoSeason = env.Thinky.createModel('followVideoSeason', {
    // Id
    id: type.number(),
    seasonId: type.number(),
    // 创建时间
    createTime: type.string(),
    // 修改时间
    updateTime: type.string(),
    // 操作员
    operater: type.number(),
    // 是否有效
    isUsed: type.number(),
    // 分季名称
    name: type.string(),
    // 分季描述
    description: type.string(),
    // 网站封面图片地址
    coverUrl: type.string(),
    // 微信封面图片地址
    wechatUrl: type.string(),
    // APP封面图片地址
    mobileUrl: type.string(),
    // 权重
    weight: type.number()
})

FollowVideoSeason.ensureIndex('weight');

module.exports=FollowVideoSeason;
