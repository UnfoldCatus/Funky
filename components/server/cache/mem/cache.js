/**
 * Created by chenjianjun on 15/12/8.
 */

var set = function (key, value, expire) {
    var _cache = this.cache;
    // 如果已经存在该值，则重新赋值
    if (_cache[key]) {
        // 重新赋值
        _cache[key].value = value;
        _cache[key].expire = expire;
    } else {
        // 如果为新插入
        _cache[key] = {
            value: value,
            expire: expire,
            insertTime: +new Date()
        }
    }
}

var get = function (key) {
    var _cache = this.cache;
    // 如果存在该值
    if (_cache[key]) {
        let insertTime = _cache[key].insertTime;
        let expire = _cache[key].expire;
        let curTime = +new Date(); //日期对象转换成数字

        // 如果不存在过期时间 或者 存在过期时间但尚未过期
        if (!expire || (expire && curTime - insertTime < expire)) {
            return _cache[key].value;
        } else if (expire && curTime - insertTime > expire) {
            // 如果已经过期
            _cache[key] = null;
            return null
        }
    } else {
        return null;
    }

}

var clear = function () {
    this.cache = {};
}

var createCache = function () {
    var obj =  {
        cache: {},
        set: set,
        get: get,
        clear: clear
    }

    return obj;
}

exports.createCache = createCache;
