/**
 * Created by chenjianjun on 15/12/8.
 */
/* 缓存相关配置信息 */
const config = {
    api_port: "8088",
    api_host: (process.env.NODE_ENV === 'production')?'120.25.104.171':'192.168.1.5',
    cache_time_check: 60000*3, // 缓存清理时间,30分钟
    rethink:{
        db:'venus',
        host:'127.0.0.1',
        port:'28015'
    },
    // 酒店数据
    HotelPath:"/api/hotel/all",
    // 广告数据
    AdvPath:"/api/adv/all",
    // 样片数据
    SamplePath:"/api/sample/all",
    // 客片数据
    PringlesPath:"/api/pringles/all",
    // 客片分季数据
    PringlesSeasonPath:"/api/pringlesSeason/all",
    // 婚纱摄影团队
    // 婚纱纪实MV
    // 套系
    SuitePath:'/api/suite/all',
    // 实景案例
    CasesPath:'/api/cases/all',
    // 婚礼跟拍
    FollowPhotoPath:'/api/followPhoto/all',
    // 婚礼跟拍分季
    FollowPhotoSeasonPath: '/api/followPhotoSeason/all',
    // 婚礼视频
    FollowVideoPath: '/api/followVideo/all',
    // 婚礼视频分季
    FollowVideoSeasonPath: '/api/followVideoSeason/all',
    // 四大金刚-摄影师作品
    F4PhotographerPath: '/api/f4/photographer',
    // 四大金刚-摄像师作品
    F4CameraPath: '/api/f4/camera',
    // 四大金刚-化妆师作品
    F4DresserPath: '/api/f4/dresser',
    // 四大金刚-主持人作品
    F4HostPath: '/api/f4/host'
};

const Thinky = require('thinky')(config.rethink);

module.exports = {
    'Config':config,
    'Thinky':Thinky
};
