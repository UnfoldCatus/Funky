/**
 * Created by chenjianjun on 15/12/8.
 */
var http = require('http');
var cache = require("./cache");
var conf=require("./config");

var myCache = cache.createCache("LFU", conf.cache_max_size);
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
        cb(200, value);
    }
    else
    {
        var options = {
            host: conf.api_host,
            port: conf.api_port,
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
                    myCache.set(url, chunks, conf.cache_timeout);
                }
                cb(res.statusCode, chunks);
            });
            res.on('error', function (e) {
                var data = {
                    success:false,
                    message:JSON.stringify({msg: err.message}),
                    data:[],
                    code:404,
                    count:0
                };

                var str = JSON.stringify(data);
                cb(404, str);
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

            var str = JSON.stringify(data);
            cb(404, str);

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

            var str = JSON.stringify(data);
            cb(404, str);
        });

        req.end();

        //console.log("请求获取.......");
        //http.get(options, function(res)
        //{
        //    var chunks = "";
        //    res.setEncoding('utf8');
        //    res.on('data', function(chunk) {
        //        chunks+=chunk;
        //    });
        //
        //    res.on('end', function() {
        //
        //        var json = JSON.parse(chunks);
        //        if(res.statusCode == 200 && json.code == 200) {
        //            // 设置缓存时间为5分钟
        //            myCache.set(url, chunks, conf.cache_timeout);
        //        }
        //
        //        cb(res.statusCode, chunks);
        //    });
        //
        //    res.on('error', function (e) {
        //        cb(res.statusCode, JSON.stringify({msg: err.message}));
        //    });
        //});
    }
}

exports.create = function () {
}
