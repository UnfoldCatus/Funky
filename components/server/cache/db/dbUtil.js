/**
 * Created by chenjianjun on 15/12/8.
 */
var http = require('http');
var Config = require("../config.js");
var Hotel = require("./module/hotel.js");
var BanquetHall = require("./module/banquetHall.js");
var FilterConditionHotelType = require("./module/filterCondition/hotelType.js");
var FilterConditionHotelDistrict = require("./module/filterCondition/hotelDistrict.js");
var Adv = require("./module/adv.js");
var Pringles = require("./module/pringles.js");
var PringlesSeason = require("./module/pringlesSeason.js");
var RecordVideo = require("./module/recordVideo.js");
var RecordVideoSeason = require("./module/recordVideoSeason.js");
var Sample = require("./module/sample.js");
var Suite = require("./module/suite.js");
var FilterConditionShootStyle = require("./module/filterCondition/shootStyle.js");
var FilterConditionExterior = require("./module/filterCondition/exterior.js");
var Cases = require("./module/cases.js");
var Cases3D = require("./module/cases3D.js");
var FilterConditionCaseStyle = require("./module/filterCondition/caseStyle.js");
var FollowPhoto = require("./module/followPhoto.js");
var FollowPhotoSeason = require("./module/followPhotoSeason.js");
var FollowVideo = require("./module/followVideo.js");
var FollowVideoSeason = require("./module/followVideoSeason.js");
var F4Photographer = require("./module/f4/photographer.js");
var F4Camera = require("./module/f4/camera.js");
var F4Dresser = require("./module/f4/dresser.js");
var F4Host = require("./module/f4/host.js");
var F4Team = require("./module/f4/team.js");
var FilterConditionCarModels = require("./module/filterCondition/carModels.js");
var FilterConditionCarLevel = require("./module/filterCondition/carLevel.js");
var FilterConditionCarBrand = require("./module/filterCondition/carBrand.js");
var FilterConditionSuppliesBrand = require("./module/filterCondition/suppliesBrand.js");
var FilterConditionSuppliesType = require("./module/filterCondition/suppliesType.js");
var FilterConditionDressType = require("./module/filterCondition/dressType.js");
var FilterConditionDressBrand = require("./module/filterCondition/dressBrand.js");

var Movie = require("./module/movie.js");
var Car = require("./module/car.js");
var Supplies = require("./module/supplies.js");
var Dress = require("./module/dress.js");
var WeddingClass = require("./module/weddingClass.js");

var qs = require('querystring');
var _ = require('lodash')


var models = {
  "Adv": Adv,
  "Hotel": Hotel,
  "BanquetHall": BanquetHall,
  "FilterConditionHotelType": FilterConditionHotelType,
  "FilterConditionHotelDistrict": FilterConditionHotelDistrict,
  "Sample": Sample,
  "Pringles": Pringles,
  "PringlesSeason": PringlesSeason,
  "RecordVideo": RecordVideo,
  "RecordVideoSeason": RecordVideoSeason,
  "Suite": Suite,
  "FilterConditionShootStyle": FilterConditionShootStyle,
  "FilterConditionExterior": FilterConditionExterior,
  "Cases": Cases,
  "Cases3D": Cases3D,
  "FilterConditionCaseStyle": FilterConditionCaseStyle,
  "FollowPhoto": FollowPhoto,
  "FollowPhotoSeason": FollowPhotoSeason,
  "FollowVideo": FollowVideo,
  "FollowVideoSeason": FollowVideoSeason,
  "F4Photographer": F4Photographer,
  "F4Camera": F4Camera,
  "F4Dresser": F4Dresser,
  "F4Host": F4Host,
  "F4Team": F4Team,
  "FilterConditionCarModels": FilterConditionCarModels,
  "FilterConditionCarLevel": FilterConditionCarLevel,
  "FilterConditionCarBrand": FilterConditionCarBrand,
  "FilterConditionSuppliesBrand": FilterConditionSuppliesBrand,
  "FilterConditionSuppliesType": FilterConditionSuppliesType,
  "FilterConditionDressType": FilterConditionDressType,
  "FilterConditionDressBrand": FilterConditionDressBrand,
  "Movie": Movie,
  "Car": Car,
  "Supplies": Supplies,
  "Dress": Dress,
  "WeddingClass": WeddingClass

}

var dbTool = null;
var mSyncFlg = {
  "Adv": false,
  "Hotel": false,
  "FilterConditionHotelType": false,
  "FilterConditionHotelDistrict": false,
  "Sample": false,
  "Pringles": false,
  "PringlesSeason": false,
  "RecordVideo": false,
  "RecordVideoSeason": false,
  "Suite": false,
  "FilterConditionShootStyle": false,
  "FilterConditionExterior": false,
  "Cases": false,
  "Cases3D": false,
  "FilterConditionCaseStyle": false,
  "FollowPhoto": false,
  "FollowPhotoSeason": false,
  "FollowVideo": false,
  "FollowVideoSeason": false,
  "F4Photographer": false,
  "F4Camera": false,
  "F4Dresser": false,
  "F4Host": false,
  "F4Team": false,
  "FilterConditionCarModels": false,
  "FilterConditionCarLevel": false,
  "FilterConditionCarBrand": false,
  "FilterConditionSuppliesBrand": false,
  "FilterConditionSuppliesType": false,
  "FilterConditionDressType": false,
  "FilterConditionDressBrand": false,
  "Movie": false,
  "Car": false,
  "Supplies": false,
  "Dress": false,
  "BanquetHall": false,
  "WeddingClass": false
};

//查询工具类
function DBUtil() {};

/**
 * 从后台获取数据
 * @param path URL的接口地址如：/api/adv/list?pageIndex=1&pageSize=2
 * @param cb
 * @constructor
 */
function GetData(path, cb) {
  var options = {
    host: Config.APIHost,
    port: Config.APIPort,
    path: path,
    method: "GET"
  };



  var req = http.request(options, function(res) {
    res.setEncoding('utf8');
    var chunks = "";
    res.on('data', function(chunk) {
      chunks += chunk;
    });
    res.on('end', function() {
      if (res.statusCode != 200) {
        var err = new Error('资源请求异常,URI:'+options.path);
        cb(err);
      } else {
        if (chunks === "") {
          var err = new Error('服务器异常,拉取数据失败');
          cb(err);
        } else {
          try {
            var json = JSON.parse(chunks);
            if (json.code == 200) {
              cb(null, json);
            } else {
              var err = new Error('服务器异常');
              cb(err);
            }
          } catch (e) {
            var err = new Error('服务器异常');
            cb(err);
          }
        }
      }
    });
    res.on('error', function(e) {
      cb(e);
    });
  });

  // 设置请求超时15秒
  req.setTimeout(15000);

  req.on('error', function(e) {
    if(req.res && req.res.abort && (typeof req.res.abort === 'function')) {
      req.res.abort();
    }
    req.abort();
    var err = new Error('服务器异常');
    cb(err);
  }).on('timeout', function() {
    if(req.res && req.res.abort && (typeof req.res.abort === 'function')) {
      req.res.abort();
    }
    req.abort();
    var err = new Error('服务器超时');
    cb(err);
  });

  req.end();
}
/**
 * 同步数据
 * @param module 模块名称
 * @param sumCount 记录已拉取的条数
 * @param index 分页数
 * @param count 拉取数量
 * @param cb 数据回调
 * @constructor
 */
function SyncFun(module, sumCount, dataList, index, count, cb) {

  let path = Config.DBConfig[module + 'Path'] + '?' + qs.stringify({
      pageSize: count,
      pageIndex: index
    });

  GetData(path, function(err, data) {
    if (err) {
      cb(err);
    } else {
      if(module === 'Hotel') {
        if (sumCount < data.count) {
          sumCount += data.data.length;

          // 1.获取所有的宴会厅
          let banquetHalls = [];
          for(let i = 0; i < data.data.length; i++) {
            if(dataList[data.data[i].hotelId]) {
            } else {
              dataList[data.data[i].hotelId] = data.data[i].hotelId;
              for(let j=0;j<data.data[i].banquetHall.length; j++) {
                banquetHalls.push(data.data[i].banquetHall[j]);
              }
            }
          }

          if(banquetHalls.length > 0) {
            models['BanquetHall'].save(banquetHalls).then(function(result, error) {
              if (error) {
                cb(error);
              }
              else {
                models[module].save(data.data).then(function(result, error) {
                  if (error) {
                    cb(error);
                  } else {
                    SyncFun(module, sumCount, dataList, index + 1, count, cb);
                  }
                });
              }
            });
          } else {
            models[module].save(data.data).then(function(result, error) {
              if (error) {
                cb(error);
              } else {
                SyncFun(module, sumCount, dataList, index + 1, count, cb);
              }
            });
          }
        } else {
          cb(null);
        }
      }
      else {
        // 存储数据
        if (sumCount < data.count)
        {
          sumCount += data.data.length;
          models[module].save(data.data).then(function(result, error) {
            if (error) {
              cb(error);
            } else {
              SyncFun(module, sumCount, dataList, index + 1, count, cb);
            }
          });
        }
        else
        {
          cb(null);
        }
      }
    }
  });
}

/**
 * 同步数据
 * @param type 0:酒店
 * @constructor
 */
function Sync(type) {
  mSyncFlg[type] = false;
  let sumCount = 0;
  let dataList = new Map();
  if(type === 'Hotel') {
    mSyncFlg['BanquetHall'] = false;
    models['BanquetHall'].delete().run().then(function(rel) {
      models[type].delete().run().then(function (rel) {
        SyncFun(type, sumCount, dataList, 1, 10, function (err) {
          if (err) {
            console.log('拉取数据失败['+type+']', err);
          } else {
            mSyncFlg[type] = true;
            mSyncFlg['BanquetHall'] = true;
            console.log('拉取数据成功['+type+']');
          }
        });
      });
    });
  } else {
    models[type].delete().run().then(function(rel) {
      SyncFun(type, sumCount, dataList, 1, 10, function(err) {
        if (err) {
          console.log('拉取数据失败['+type+']', err);
        } else {
          mSyncFlg[type] = true;
          console.log('拉取数据成功['+type+']');
        }
      });
    });
  }
}

DBUtil.prototype.isCacheDataUsable = function(moduleName) {
  console.log('modelName:',moduleName);
  return mSyncFlg[moduleName];
};

DBUtil.prototype.updateDBCacheData = function(moduleName) {
  if(moduleName in mSyncFlg) {
    Sync(moduleName);
  }
};

exports.Instance = function() {
  // 分三级数据拉取级别
  // 一级资源,更新比较频繁的资源
  var tasks1 = ['Adv', 'Hotel','Sample', 'Pringles', 'PringlesSeason','RecordVideo', 'RecordVideoSeason', 'Suite',
    'Cases', 'FollowPhoto', 'FollowPhotoSeason', 'FollowVideo', 'FollowVideoSeason', 'F4Photographer', 'F4Camera',
    'F4Dresser', 'F4Host', 'F4Team', 'Cases3D', 'Dress', 'Movie'
  ];

  // 二级资源,更新不是很平凡的资源
  var tasks2 = [
    'Car', 'Supplies', 'FilterConditionCarModels', 'FilterConditionCarLevel',
    'FilterConditionCarBrand', 'FilterConditionSuppliesBrand',
    'FilterConditionSuppliesType', 'WeddingClass'
  ];

  // 三级资源,不经常更新的资源
  var tasks3 = [
    'FilterConditionShootStyle', 'FilterConditionExterior',
    'FilterConditionHotelType', 'FilterConditionHotelDistrict',
    'FilterConditionCaseStyle', 'FilterConditionDressBrand',
    'FilterConditionDressType'
  ];

  if (dbTool == null) {
    dbTool = new DBUtil();

    if (Config.DBConfig.cache_flg) {
      // 程序启动取一次数据
      _.each(tasks1, function(v) {
        Sync(v)
      });
      _.each(tasks2, function(v) {
        Sync(v)
      });
      _.each(tasks3, function(v) {
        Sync(v)
      });

      // 定时器，根据配置时间拉取静态资源
      setInterval(function() {
        _.each(tasks1, function(v) {
          Sync(v)
        })
      }, Config.DBConfig.cache_time_check);

      setInterval(function() {
        _.each(tasks2, function(v) {
          Sync(v)
        })
      }, Config.DBConfig.cache_time_check*2);

      setInterval(function() {
        _.each(tasks3, function(v) {
          Sync(v)
        })
      }, Config.DBConfig.cache_time_check*4);
    }
  }
  return dbTool;
};
