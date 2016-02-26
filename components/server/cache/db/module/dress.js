/**
 * Created by chenjianjun on 16/2/26.
 */
var env=require("../config");
var type=env.Thinky.type;

// 婚纱礼服--礼服列表
/*
 {
 "success": true,
 "message": null,
 "data": [
     {
     "id": 3,
     "createTime": 1448335207000,
     "updateTime": 1448335207000,
     "operater": 1,
     "isUsed": 1,
     "name": "Monique Lhuillier",
     "description": "Monique Lhuillier",
     "type": 1,
     "brand": 2,
     "pcDetailImages": "[{\"createTime\":null,\"id\":45154,\"isUsed\":1,\"operater\":0,\"type\":1,\"updateTime\":null,\"url\":\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/followPhoto/20160127/14538798829112669_498x293.jpg\",\"weight\":2},{\"createTime\":null,\"id\":45155,\"isUsed\":1,\"operater\":0,\"type\":1,\"updateTime\":null,\"url\":\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/followPhoto/20160127/14538798829069348_475x350.jpg\",\"weight\":3}]",
     "appDetailImages": "[{\"createTime\":null,\"id\":45158,\"isUsed\":1,\"operater\":0,\"type\":3,\"updateTime\":null,\"url\":\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/followPhoto/20160127/14538798829385778_498x293.jpg\",\"weight\":0},{\"createTime\":null,\"id\":45159,\"isUsed\":1,\"operater\":0,\"type\":3,\"updateTime\":null,\"url\":\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/followPhoto/20160127/14538798829330037_475x350.jpg\",\"weight\":1}]",
     "wxDetailImages": "[{\"createTime\":null,\"id\":45156,\"isUsed\":1,\"operater\":0,\"type\":2,\"updateTime\":null,\"url\":\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/followPhoto/20160127/14538798829427377_498x293.jpg\",\"weight\":4},{\"createTime\":null,\"id\":45157,\"isUsed\":1,\"operater\":0,\"type\":2,\"updateTime\":null,\"url\":\"http://test-jsbn.oss-cn-shenzhen.aliyuncs.com/followPhoto/20160127/14538798828847026_475x350.jpg\",\"weight\":5}]",
     }
 ],
 "code": 200,
 "count": 0
 }
 * */

const Dress = env.Thinky.createModel('dress', {
    // Id
    id: type.number(),
    // 创建时间
    createTime: type.date(),
    // 修改时间
    updateTime: type.date(),
    // 操作员
    operater: type.number(),
    // 是否有效 有效0：无效 1：有效
    isUsed: type.number(),
    // 名称
    name: type.string(),
    // 描述
    description: type.string(),
    // 礼服类型
    type: type.number(),
    // 礼服品牌
    brand: type.number(),
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

Dress.ensureIndex('weight');

module.exports=Dress;
