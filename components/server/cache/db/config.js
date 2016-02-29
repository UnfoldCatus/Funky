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
    // 酒店类型
    FilterConditionHotelTypePath:'/api/hotelType/all',
    // 酒店区域
    FilterConditionHotelDistrictPath: '/api/hotelDistrict/all',
    // 广告数据
    AdvPath:"/api/adv/all",
    // 样片数据
    SamplePath:"/api/sample/all",
    // 客片数据
    PringlesPath:"/api/pringles/all",
    // 客片分季数据
    PringlesSeasonPath:"/api/pringlesSeason/all",
    // 纪实MV
    RecordVideoPath:"/api/recordVideoSeason/all",
    // 纪实MV分季
    RecordVideoSeasonPath:"/api/recordVideoSeason/all",
    // 套系
    SuitePath:'/api/suite/all',
    // 摄影风格
    FilterConditionShootStylePath:'/api/shootStyle/all',
    // 摄影外景地
    FilterConditionExteriorPath:'/api/exterior/all',
    // 实景案例
    CasesPath:'/api/cases/all',
    // 3D案例
    Case3DPath:'/api/case3D/all',
    // 案例风格
    FilterConditionCaseStylePath: '/api/caseStyle/all',
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
    F4HostPath: '/api/f4/host',
    // 四大金刚-特色项目作品
    F4TeamPath: '/api/f4/team',
    // 婚车租赁--婚车型号搜索条件内容
    FilterConditionCarModelsPath: '/api/carModels/all',
    // 婚车租赁--婚车档次搜索条件内容c
    FilterConditionCarLevelPath: '/api/carLevel/all',
    // 婚车租赁--婚车品牌搜索条件内容
    FilterConditionCarBrandPath: '/api/carBrand/all',
    // 婚车用品--用品品牌搜索条件内容
    FilterConditionSuppliesBrandPath: '/api/suppliesBrand/all',
    // 婚车用品--用品类型搜索条件内容
    FilterConditionSuppliesTypePath: '/api/suppliesType/all',
    // 微电影
    MoviePath: '/api/video/all',
    // 婚纱礼服
    DressPath: '/api/dress/list',
    // 婚纱礼服--类型
    FilterConditionDressTypePath: '/api/dressType/all',
    // 婚纱礼服--品牌
    FilterConditionDressBrandPath: '/api/dressBrand/all',
    // 婚车租赁
    CarPath: '/api/car/all',
    // 婚礼用品
    SuppliesPath: '/api/weddingsupplies/all',
    // 婚礼课堂
    WeddingClassPath: '/api/weddingroom/all'
};

const Thinky = require('thinky')(config.rethink);

module.exports = {
    'Config':config,
    'Thinky':Thinky
};
