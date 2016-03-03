/**
 * Created by chenjianjun on 15/12/8.
 */
var http = require('http');
var env = require("./config.js");
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
var Case3D = require("./module/case3D.js");
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
var r = env.Thinky.r;
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
  "Case3D": Case3D,
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
  "Case3D": false,
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
    host: env.Config.api_host,
    port: env.Config.api_port,
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
          var json = JSON.parse(chunks);
          if (json.code == 200) {
            cb(null, json);
          } else {
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
    req.res && req.res.abort();
    req.abort();
    var err = new Error('服务器异常');
    cb(err);
  }).on('timeout', function() {
    req.res && req.res.abort();
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

  let path = env.Config[module + 'Path'] + '?' + qs.stringify({
      pageSize: count,
      pageIndex: index
    });

  GetData(path, function(err, data) {
    if (err) {
      cb(err);
    } else {
      if(module === 'Hotel') {
        console.log(sumCount+':'+data.count);
        if (sumCount < data.count) {
          sumCount += data.data.length;

          // 1.获取所有的宴会厅
          let banquetHalls = [];
          for(let i=0;i<data.data.length;i++){
            for(let j=0;j<data.data[i].banquetHall.length; j++) {
              if(dataList[data.data[i].banquetHall[j].hotelId]) {
                // 如果这个宴会厅的酒店ID在dataList这个map里面能找到,说明已经添加进去了
              } else {
                banquetHalls.push(data.data[i].banquetHall[j]);
              }
            }
          }

          // 2.把新拉取的酒店放到map踢重
          // 以上1,2步顺序不能变,否则踢重失效
          for(let ii = 0; ii < data.data.length; ii++) {
            dataList[data.data[ii].hotelId] = data.data[ii].hotelId;
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
            console.log('更新成功....'+type);
            mSyncFlg[type] = true;
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
          console.log('更新成功....'+type);
          mSyncFlg[type] = true;
        }
      });
    });
  }
}

DBUtil.prototype.isCacheDataUsable = function(moduleName) {
  console.log('modelName:',moduleName);
  return mSyncFlg[moduleName];
};

exports.Instance = function() {
  var tasks = ['Adv', 'Hotel', 'Sample', 'Pringles', 'PringlesSeason',
    'RecordVideo', 'RecordVideoSeason', 'Suite', 'Cases',
    'FollowPhoto', 'FollowPhotoSeason', 'FollowVideo', 'FollowVideoSeason',
    'F4Photographer', 'F4Camera', 'F4Dresser', 'F4Host', 'F4Team',
    'FilterConditionShootStyle', 'FilterConditionExterior',
    'Case3D', 'FilterConditionHotelType', 'FilterConditionHotelDistrict',
    'FilterConditionCaseStyle', 'FilterConditionCarModels', 'FilterConditionCarLevel',
    'FilterConditionCarBrand', 'FilterConditionSuppliesBrand', 'FilterConditionSuppliesType',
    'FilterConditionDressBrand', 'FilterConditionDressType', 'Dress',
    'Movie', 'Car', 'Supplies', 'WeddingClass'
  ];
  if (dbTool == null) {
    dbTool = new DBUtil();

    if (env.Config.cache_flg) {
      // 程序启动取一次数据
      _.each(tasks, function(v) {
        Sync(v)
      })
      // 定时器，根据配置时间拉取
      setInterval(function() {
        _.each(tasks, function(v) {
          Sync(v)
        })
      }, env.Config.cache_time_check);
    }
  }
  return dbTool;
};
