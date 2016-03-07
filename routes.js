import Router from 'koa-router'
import React, { PropTypes } from 'react'
import _ from 'lodash'
import { renderToString } from 'react-dom/server'
import { MenuConfig } from './components/config/menu-config'
import { ComponentsIndex } from './components/config/components-index'
  /*菜单*/
import { Navigation } from './components/navigation.jsx'

/** api的路由逻辑**/
import filterConditionApi from './components/server/api/filter-condition.js'
import advApi from './components/server/api/adv'
import hotelApi from './components/server/api/hotel'
import photoApi from './components/server/api/photo'
import weddingApi from './components/server/api/wedding'
import movieApi from './components/server/api/movie.js'
import carApi from './components/server/api/car.js'
import suppliesApi from './components/server/api/supplies.js'
import dressApi from './components/server/api/dress.js'
import weddingClassApi from './components/server/api/weddingClass.js'

  /**
    api 资源路由
  **/
export const apiRouter = new Router({
    'prefix': '/api'
  }) // 单个的export 必须在声明时。
apiRouter.get('/', function* apiRoot(next) {
  yield next
  // 列出所有资源到列表
  this.body = {
    '/api/adv/:position':'广告',
    '/api/hotel/:position?minTable=最小容客桌数&maxTable=最大容客桌数&minPrice=最小价格&maxPrice=最大价格&isGift=是否有礼包1有0没有&isDisaccount=是否有优惠1有0没有&sort=按什么排序price:按价格排序table:按桌数排序&order=排序方式asc正序desc倒序&hotelName=酒店名称模糊匹配&cityId=所在市区&hotelType=根据酒店类型筛选的Id进行传值':'酒店列表',
    '/api/hotel/detail/:id':'酒店详情,此处的ID不是hotelID是数据里面的发布id',
    '/api/banquetHall/list?hotelId=酒店ID':'获取宴会厅列表',
    '/banquetHall/detail/:id':'宴会厅详情',
    '/api/hotelType/all':'婚宴预订-酒店类型搜索条件',
    '/api/hotelDistrict/all': '婚宴预订-酒店区域搜索条件',
    '/api/sample/:position?exteriorId=外景ID&shootingStyleId=风格Id':'作品',
    '/api/sample/detail/:id':'作品详情',
    '/api/pringles/:position?seasonId=分季ID':'客片',
    '/api/pringles/detail/:id':'客片详情',
    '/api/pringlesSeason/all':'客片分季',
    '/api/suite/:position':'套系列表',
    '/api/suite/detail/:id': '套系详情',
    '/api/recordVideo/:position?seasonId=分级ID&sort=data(按时间排序) or hits(按点击量排序)': '婚纱摄影-纪实MV',
    '/api/recordVideo/detail/:id': '婚纱摄影-纪实MV详情',
    '/api/recordVideoSeason/all': '婚纱摄影-纪实MV分季',
    '/api/cases/:position?styleId=风格ID&minPrice=最低价格&maxPrice=最高价格':'实景案例',
    '/api/cases/detail/:id': '实景案例详情',
    '/api/case3D/:position?':'3D案例',
    '/api/api/case3D/detail/:id':'3D案例详情',
    '/api/caseStyle/all':'婚庆定制-案例风格搜索条件',
    '/api/followPhoto/:position?seasonId=分季ID':'婚礼跟拍',
    '/api/followPhoto/detail/:id':'婚礼跟拍详情',
    '/api/followPhotoSeason/all':'婚礼跟拍分季',
    '/api/followVideo/:position': '婚礼视频',
    '/api/followVideo/detail/:id': '婚礼视频详情',
    '/api/followVideoSeason/all': '婚礼视频分季',
    '/api/exterior/all':'婚纱摄影-外景地搜索条件',
    '/api/shootStyle/all':'婚纱摄影-风格搜索条件',
    '/api/f4/photographer?minPrice=最小价格&maxPrice=最大价格': '四大金刚-摄影师作品',
    '/api/f4/camera?minPrice=最小价格&maxPrice=最大价格': '四大金刚-摄像师作品',
    '/api/f4/dresser?minPrice=最小价格&maxPrice=最大价格': '四大金刚-化妆师作品',
    '/api/f4/host?minPrice=最小价格&maxPrice=最大价格': '四大金刚-主持师作品',
    '/api/f4/team?minPrice=最小价格&maxPrice=最大价格': '四大金刚-特色项目作品',
    '/api/carModels/all': '婚车租赁-型号搜索条件',
    '/api/carLevel/all': '婚车租赁-档次搜索条件',
    '/api/carBrand/all': '婚车租赁-品牌搜索条件',
    '/api/car/:position?modelsId=车型号&brandId=品牌&levelId=档次&carNature=单车还是车队': '婚车',
    '/api/car/detail/:id': '婚车详情',
    '/api/suppliesBrand/all': '婚礼用品-品牌搜索条件',
    '/api/suppliesType/all': '婚礼用品-类型搜索条件',
    '/api/weddingsupplies/:position?weddingSuppliesTypeId=用品类型ID&brandId=用品品牌ID': '婚礼用品',
    '/api/weddingsupplies/detail/:id': '婚礼用品详情',
    '/api/dress/:position?brandId=品牌ID&typeId=礼服类型': '婚纱礼服',
    '/api/dressType/all': '婚纱礼服-类型',
    '/api/dressBrand/all?typeId=礼服类型': '婚纱礼服-品牌',
    '/api/video/:position?videoType=微电影类型&sort=data(按时间排序) or hits(按点击量排序)': '微电影',
    '/api/video/detail/:id': '微电影详情',
    '/api/weddingroom/:position?moduleTypeId=模块ID': '婚礼课堂',
    '/api/weddingroom/detail/:id': '婚礼课堂详情'
  }
})

/** 把api的router在此生成 **/
const apiRouterList = [
  filterConditionApi,
  advApi,
  hotelApi,
  photoApi,
  weddingApi,
  movieApi,
  dressApi,
  carApi,
  suppliesApi,
  weddingClassApi
]
_.each(apiRouterList,(route,index)=>{
  _.each(route,(value,key)=>{
    apiRouter[key.split('+')[0]](key.split('+')[1], value)
  })
})

/**
 platform 主站的页面路由
**/

const siteRouter = new Router()
  /**
    templateName: ejs模板名称
    menuKey MenuConfig中配置的link字段
    parentKey MenuConfig中的顶层模块的key
  */
let renderOption = (templateName, menuKey, parentKey) => {
    return {
      'reactMarkup': renderToString(ComponentsIndex[templateName]),
      'reactNavMarkup': renderToString(<Navigation menuKey={parentKey ||'/'} currentKey={menuKey} />),
      'main': templateName // 客户端渲染使用的脚本名称和模板名称一致
    }
  }
  /**
  使用ejs引擎进行静态模板渲染
  在服务端。 所有的模块都是静态依赖导入。 目前采用手动方式。 只更改 components-index.js
  当前还是手动写此文件。等把流程跑通，会改为脚本生成此文件。 进一步减少工作量


  1. 配置人员在 menu-config.js 中新增菜单。 需要填写url结构，中文，因为名称
  2. 配置人员在 components-index.js 中指名 ejs模板和组件的对应关系
  3. routes根据 MenuConfig 和 ComponentsIndex 构建路由表
  4. 在components里面增加新的jsx
  5. 默认情况下。ejs会使用default.html进行jsx页面渲染。除非必要， 才需要用户新增自己的ejs模板页面
    例如：新的活动页（静态）

  i
  **/
  /** 首页 **/
siteRouter.get('/', function* index(next) {
  yield this.render('modules/default', renderOption('home', '/', '/'))
})

/** /home 也是首页 **/
siteRouter.get('/home', function* index(next) {
  yield this.render('modules/default', renderOption('home', '/home', '/home'))
})

siteRouter.get('/shot', function* index(next) {
  yield this.render('modules/default', renderOption('shot', '/shot', '/shot'))
})


/** 作品 **/
siteRouter.get('/sample', function* index(next) {
  yield this.render('modules/default', renderOption('sample', '/sample', '/shot'))
})

/** 客片 **/
siteRouter.get('/pringles', function* index(next) {
    yield this.render('modules/default', renderOption('pringles', '/pringles', '/shot'))
  })
  /* 套系 */
siteRouter.get('/suite', function* index(next) {
  yield this.render('modules/default', renderOption('suite', '/suite', '/shot'))
})
/* 婚礼纪实 */
siteRouter.get('/weddingmv', function* index(next) {
  yield this.render('modules/default', renderOption('wedding-mv', '/weddingmv', '/shot'))
})

/** 婚宴预订 **/
// 列表
siteRouter.get('/hotel', function* index(next) {
    yield this.render('modules/default', renderOption('hotel', '/hotel', '/hotel'))
})
  // 提交婚宴预订需求
siteRouter.get('/hotel-require', function* index(next) {
  yield this.render('modules/default', renderOption('hotel-require', '/hotel-require', '/hotel'))
})

/** 婚庆定制 **/
siteRouter.get('/scheme', function* index(next) {
    yield this.render('modules/default', renderOption('scheme', '/scheme', '/scheme'))
})
  /**  实景案例 **/
siteRouter.get('/cases', function* index(next) {
    yield this.render('modules/default', renderOption('cases', '/cases', '/scheme'))
})
  /** 婚礼跟拍 **/
siteRouter.get('/weddingpat', function* index(next) {
    yield this.render('modules/default', renderOption('wedding-pat', '/weddingpat', '/scheme'))
})
  /** 婚礼视频 **/
siteRouter.get('/weddingvideo', function* index(next) {
    yield this.render('modules/default', renderOption('wedding-video', '/weddingvideo', '/scheme'))
})
  /** 提交婚庆需求 **/
siteRouter.get('/scheme-require', function* index(next) {
  yield this.render('modules/default', renderOption('scheme-require', '/scheme-require', '/scheme'))
})
/** 礼服 **/
siteRouter.get('/dress', function* index(next) {
  yield this.render('modules/default', renderOption('dress', '/dress', '/dress'))
})
/** 礼服详情 **/
siteRouter.get('/dress-details', function* index(next) {
    yield this.render('modules/default', renderOption('dress-details', '/dress', '/dress'))
})
/** 微电影 **/
siteRouter.get('/movie', function* index(next) {
    yield this.render('modules/default', renderOption('movie', '/movie', '/movie'))
})
/** 微电影详情 **/
siteRouter.get('/movie-details', function* index(next) {
  yield this.render('modules/default', renderOption('movie-details', '/movie', '/movie'))
})
/** 婚礼用品 **/
siteRouter.get('/supply', function* index(next) {
    yield this.render('modules/default', renderOption('supply', '/supply', '/supply'))
})
/** 婚车租赁 **/
siteRouter.get('/car', function* index(next) {
  yield this.render('modules/default', renderOption('car', '/car', '/car'))
})


export { siteRouter }
