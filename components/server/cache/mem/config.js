/**
 * Created by chenjianjun on 15/12/8.
 */
var app = {
    api_port: "8088",
    api_host: (process.env.NODE_ENV === 'production')?'120.25.104.171':'192.168.1.5',
    cache_timeout: 60000*5,// 缓存时间
    cache_time_check: 60000*5,// 缓存清理时间
    cache_max_size: 100*100*3 // 最大缓存数
};

module.exports = app;
