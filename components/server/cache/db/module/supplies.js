/**
 * Created by chenjianjun on 16/2/26.
 */
var env=require("../../config");
var type=env.Thinky.type;

// 婚礼用品

/*
 {
 "success": true,
 "message": null,
 "data": [
     {
     "id": 294,
     "suppliesId": 9,
     "createTime": "2016-02-20 12:10:18",
     "updateTime": "2016-02-20 12:10:18",
     "operater": 1,
     "isUsed": 1,
     "title": "喜糖02",
     "description": "喜糖02",
     "suppliesNumber": "002",
     "itemNumber": "003",
     "parameter": "喜糖02",
     "content": "富文本内容",
     "marketPrice": 0.0,
     "sellingPrice": 998.0,
     "supplierId": 8,
     "supplierName": "巴菲餐饮集团",
     "suppliesType": 8,
     "suppliesTypeName": "喜糖1",
     "brand": 8,
     "brandName": "道喜",
     "coverUrlWeb": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/weddingsupplies/20160220/14559414175455109_280x420.jpg",
     "coverUrlWx": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/weddingsupplies/20160220/14559414175555146_280x420.jpg",
     "coverUrlApp": "http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/weddingsupplies/20160220/14559414175501150_280x420.jpg",
     "pcDetailImages": "[\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/weddingsupplies/20160220/14559414181100065_498x293.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/weddingsupplies/20160220/14559414181081776_475x350.jpg\"]",
     "appDetailImages": "[\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/weddingsupplies/20160220/14559414181100065_498x293.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/weddingsupplies/20160220/14559414181081776_475x350.jpg\"]",
     "wxDetailImages": "[\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/weddingsupplies/20160220/14559414181100065_498x293.jpg\",\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/weddingsupplies/20160220/14559414181081776_475x350.jpg\"]",
     "position": "supplies_list",
     "weight": 200
     }
 ],
 "code": 200,
 "count": 11
 }
* */

const Supplies = env.Thinky.createModel('supplies', {
    // 发布Id
    id: type.number(),
    // 用品ID
    suppliesId: type.number(),
    // 创建时间
    createTime: type.string(),
    // 修改时间
    updateTime: type.string(),
    // 操作员
    operater: type.number(),
    // 是否有效 有效0：无效 1：有效
    isUsed: type.number(),
    // 标题
    title: type.string(),
    // 描述
    description: type.string(),
    // 用品编号
    suppliesNumber: type.string(),
    // 用品货号
    itemNumber: type.string(),
    // 用品参数
    parameter: type.string(),
    // 富文本内容
    content: type.string(),
    // 市场价
    marketPrice: type.number(),
    // 租赁价
    rentalPrice: type.number(),
    // 供应商ID
    supplierId: type.number(),
    // 供应商名称
    supplierName: type.string(),
    // 所属分类
    suppliesType: type.number(),
    // 所属分类名
    suppliesTypeName: type.string(),
    // 所属品牌
    brand: type.number(),
    // 所属品牌名
    brandName: type.string(),
    // web封面图片地址
    coverUrlWeb: type.string(),
    // 微信封面图片地址
    coverUrlWx: type.string(),
    // APP封面图片地址
    coverUrlApp: type.string(),
    /************************************start************************************/
    // TODO 本身是json对象，以字符串形式表现
    // web详细图片集
    pcDetailImages: type.string(),
    // app详细图片集
    appDetailImages: type.string(),
    // 微信详细图片集
    wxDetailImages: type.string(),
    /************************************end*************************************/
    // 资源位置
    position: type.string(),
    // 权重
    weight: type.number()
})

Supplies.ensureIndex('weight');

module.exports=Supplies;
