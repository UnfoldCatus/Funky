/**
 * Created by chenjianjun on 15/12/8.
 */
var http = require('http');
var cache = require("./cache");
var Config = require("../config.js");

var myCache = cache.createCache("LFU", Config.MemConfig.cache_max_size);
/*
  获取数据 GET
  @params
    url: 用于从缓存拿数据的key
    path:用于缓存未命中时的数据请求url
    cb: 回调

*/
exports.getData = function(url, path, cb)
{
    var value = myCache.get(url);
    if (value) { //如果能从缓存拿， 就把数据交给回调
        cb(null/*200*/, value);
    }
    else
    {
        var options = {
            host: Config.APIHost,
            port: Config.APIPort,
            path: path,
            method: "GET"
        };

        var req = http.request(options, function(res) {
            res.setEncoding('utf8');
            var chunks = "";
            res.on('data', function (chunk) {
                chunks+=chunk;
            });
            res.on('end', function() {
                var json = JSON.parse(chunks);
                if(res.statusCode == 200 && json.code == 200) {
                    // 设置缓存时间为5分钟
                    myCache.set(url, json, Config.MemConfig.cache_timeout);
                }

                cb(null, json);
            });
            res.on('error', function (e) {
                var data = {
                    success:false,
                    message:JSON.stringify({msg: err.message}),
                    data:[],
                    code:404,
                    count:0
                };

                cb(null,data)
            });
        });

        // 设置请求超时5秒
        req.setTimeout(5000);

        req.on('error',function(e) {
            req.res && req.res.abort();
            req.abort();
            var data = {
                success:false,
                message:JSON.stringify({msg: "server error"}),
                data:[],
                code:404,
                count:0
            };

            cb(null,data)

        }).on('timeout',function(e) {
            req.res && req.res.abort();
            req.abort();
            var data = {
                success:false,
                message:JSON.stringify({msg: "request timeout"}),
                data:[],
                code:404,
                count:0
            };

            cb(null,data)
        });

        req.end();
    }
}

//exports.create = function () {
//}
