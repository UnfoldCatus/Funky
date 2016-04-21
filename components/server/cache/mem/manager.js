/**
 * Created by chenjianjun on 15/12/8.
 */
var http = require('http');
var cache = require("./cache");
var Config = require("../config.js");

var myCache = cache.createCache();
var memTool = null;

//查询工具类
function MEMUtil() {};

MEMUtil.prototype.getMemCache = function(url)
{
    return myCache.get(url);
}

MEMUtil.prototype.setMemCache = function(url, data)
{
    myCache.set(url, data, Config.MemConfig.cache_timeout);
}

/*
  获取数据 GET
  @params
    url: 用于从缓存拿数据的key
    path:用于缓存未命中时的数据请求url
    cb: 回调

*/
MEMUtil.prototype.getData = function(url, path, cb)
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

        let data = {
            success:false,
            message:"",
            data:[],
            code:404,
            count:0
        };

        var req = http.request(options, function(res) {
            res.setEncoding('utf8');
            var chunks = "";
            res.on('data', function (chunk) {
                chunks+=chunk;
            });
            res.on('end', function() {
                if (res.statusCode != 200) {
                    data.message = '服务器应答异常';
                    data.code = res.statusCode;
                    cb(null,data)
                } else {
                    if (chunks === "") {
                        data.message = '服务器异常,拉取数据失败';
                        data.code = res.statusCode;
                        cb(null,data)
                    } else {
                        try {
                            var json = JSON.parse(chunks);
                            if(json.code == 200) {
                                // 缓存并设置缓存时间
                                myCache.set(url, json, Config.MemConfig.cache_timeout);
                            }

                            cb(null, json);
                        } catch (e) {
                            data.message = '数据请求异常';
                            data.code = res.statusCode;
                            cb(null,data);
                        }
                    }
                }
            });
            res.on('error', function (e) {
                data.message = e.message;
                data.code = 404;
                cb(null,data);
            });
        });

        // 设置请求超时5秒
        req.setTimeout(5000);

        req.on('error',function(e) {
            if(req.res && req.res.abort && (typeof req.res.abort === 'function')) {
                req.res.abort();
            }
            req.abort();
            data.message = '服务器错误';
            data.code = 404;
            cb(null,data);

        }).on('timeout',function(e) {
            if(req.res && req.res.abort && (typeof req.res.abort === 'function')) {
                req.res.abort();
            }
            req.abort();
            data.message = 'request timeout';
            data.code = 404;
            cb(null,data);
        });

        req.end();
    }
}

MEMUtil.prototype.clearCache = function() {
    myCache.clear();
};

exports.Instance = function() {
    if (memTool == null) {
        memTool = new MEMUtil();
    }
    return memTool;
}
