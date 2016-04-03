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
     "id": 9,
     "seasonId": 9,
     "createTime": "2016-01-21 17:28:43",
     "updateTime": "2016-01-21 17:28:43",
     "operater": 1,
     "isUsed": 1,
     "name": "2016年1月第一季",
     "description": "",
     "coverUrlWeb": "http://img.jsbn.com/pringlesSeason/20160121/14533685227399598_1200x680.jpg",
     "coverUrlWx": "http://img.jsbn.com/pringlesSeason/20160121/14533685228339884_1200x680.jpg",
     "coverUrlApp": "http://img.jsbn.com/pringlesSeason/20160121/14533685227860408_1200x680.jpg",
     "weight": 100
     }
 ],
 "code": 200,
 "count": 4
 }
* */

// 纪实MV分季模型
const RecordVideoSeason = env.Thinky.createModel('recordVideoSeason', {
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

RecordVideoSeason.ensureIndex('weight');

module.exports=RecordVideoSeason;
