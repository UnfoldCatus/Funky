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
     "id": 5,
     "seasonId": 5,
     "createTime": "2016-01-21 19:06:55",
     "updateTime": "2016-01-21 19:06:55",
     "operater": 1,
     "isUsed": 1,
     "name": "2016年1月第一季",
     "description": "",
     "coverUrlWeb": "http://img.jsbn.com/followPhotoSeason/20160121/14533744153469325_1920x1080.jpg",
     "coverUrlWx": "http://img.jsbn.com/followPhotoSeason/20160121/14533744154776048_1920x1080.jpg",
     "coverUrlApp": "http://img.jsbn.com/followPhotoSeason/20160121/14533744154220052_1920x1080.jpg",
     "weight": 100
     }
 ],
 "code": 200,
 "count": 0
 }
* */

// 婚礼跟拍分季模型
const FollowPhotoSeason = env.Thinky.createModel('followPhotoSeason', {
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

FollowPhotoSeason.ensureIndex('weight');

module.exports=FollowPhotoSeason;
