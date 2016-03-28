/**
 * Created by chenjianjun on 16/2/29.
 */
var env=require("../../config");
var type=env.Thinky.type;

/*
 "appDetailImages": null,
 "area": 300,
 "coverUrlApp": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/banquetHall/20160201/14543080479867605_900x600.JPG",
 "coverUrlWeb": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/banquetHall/20160201/14543080479867605_900x600.JPG",
 "coverUrlWx": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/banquetHall/20160201/14543080479867605_900x600.JPG",
 "createTime": "2016-01-21 18:47:29",
 "graphicDesignUrl": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/banquetHall/20160201/14543080480264026_900x600.jpg",
 "height": 4,
 "hotelId": 4,
 "id": 155,
 "isUsed": 1,
 "lowestConsumption": 1299,
 "maxTableNum": 16,
 "name": "1号厅",
 "operater": 1,
 "pcDetailImages": "[\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/hotel/20160201/BI2A0109.JPG\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/hotel/20160201/BI2A0109.JPG\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/hotel/20160201/BI2A0108.JPG\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/hotel/20160201/BI2A0108.JPG\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/hotel/20160201/BI2A0104.JPG\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/hotel/20160201/BI2A0104.JPG\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/hotel/20160201/BI2A0120.JPG\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/hotel/20160201/BI2A0120.JPG\",\"\\r\\nhttp://test-jsbn.oss-cn-shenzhen.aliyuncs.com/hotel/20160201/BI2A0115.JPG\",\"\\r\\nhttp://test-jsbn.oss-cn-shenzhen.aliyuncs.com/hotel/20160201/BI2A0115.JPG\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/hotel/20160201/BI2A0112.JPG\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/hotel/20160201/BI2A0112.JPG\"]",
 "pillerNum": 1,
 "shape": "长方形",
 "updateTime": "2016-01-21 18:47:29",
 "weight": 0,
 "wxDetailImages": null
* */

// 宴会厅模型
const BanquetHall = env.Thinky.createModel('banquetHall', {
  // Id
  id: type.number(),
  // 创建时间
  createTime: type.string(),
  // 修改时间
  updateTime: type.string(),
  // 操作员
  operater: type.number(),
  // 是否有效
  isUsed: type.number(),
  // 宴会厅名称
  name: type.string(),
  // 最大容客桌数
  maxTableNum: type.number(),
  // 酒店Id
  hotelId: type.number(),
  // 最低消费
  lowestConsumption: type.number(),
  // 面积
  area: type.number(),
  // 平面图url
  graphicDesignUrl: type.string(),
  // 高度
  height: type.number(),
  // 是否有柱子1 有  0 没有
  pillerNum: type.number(),
  // 形状
  shape: type.string(),
  // web详细图片集
  pcDetailImages: type.string(),
  // app详细图片集
  appDetailImages: type.string(),
  // 微信详细图片集
  wxDetailImages: type.string(),
  // 网站封面图片地址
  coverUrlWeb: type.string(),
  // 微信封面图片地址
  coverUrlWx: type.string(),
  // APP封面图片地址
  coverUrlApp: type.string(),
  // 权重
  weight: type.number()
})


module.exports=BanquetHall;