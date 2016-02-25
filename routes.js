import Router from 'koa-router'
import React, { PropTypes } from 'react'
import _ from 'lodash'
import { renderToString } from 'react-dom/server'
import { MenuConfig } from './components/config/menu-config'
import { ComponentsIndex } from './components/config/components-index'
  /*菜单*/
import { Navigation } from './components/navigation.jsx'


/** api的路由逻辑**/
import hotelApi from './components/server/api/hotel'
import sampleApi from './components/server/api/sample'
import pringlesApi from './components/server/api/pringles'
import advApi from './components/server/api/adv'
import suiteApi from './components/server/api/suite'
import recordVideoApi from './components/server/api/recordVideo.js'
import recordVideoSeasonApi from './components/server/api/recordVideoSeason.js'

import casesApi from './components/server/api/cases.js'
import case3DApi from './components/server/api/case3D.js'
import followPhotoSeasonApi from './components/server/api/followPhotoSeason.js'
import followPhotoApi from './components/server/api/followPhoto.js'
import pringlesSeasonApi from './components/server/api/pringlesSeason.js'
import followVideoApi from './components/server/api/followVideo.js'
import followVideoSeasonApi from './components/server/api/followVideoSeason.js'
import filterConditionApi from './components/server/api/filter-condition.js'

import photographerApi from './components/server/api/f4/photographer.js'
import cameraApi from './components/server/api/f4/camera.js'
import dresserApi from './components/server/api/f4/dresser.js'
import hostApi from './components/server/api/f4/host.js'

// 纪实MV
// 纪实MV分季


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
    '/api/adv/all':'广告',
    '/api/sample/all':'作品',
    '/api/pringles/all':'客片',
    '/api/pringlesSeason/list':'客片分季',
    '/api/hotel/all':'酒店',
    '/api/hotelType/all':'婚宴预订-酒店类型搜索条件',
    '/api/suite/all':'套系',
    '/api/cases/all':'实景案例',
    '/api/case3D/all':'3D案例',
    '/api/caseStyle/all':'婚庆定制-案例风格搜索条件',
    '/api/followPhoto/all':'婚礼跟拍',
    '/api/followPhotoSeason/all':'婚礼跟拍分季',
    '/api/followVideo/all': '婚礼视频',
    '/api/followVideoSeason/all': '婚礼视频分季',
    '/api/exterior/all':'婚纱摄影-外景地搜索条件',
    '/api/shootStyle/all':'婚纱摄影-风格搜索条件',
    '/api/f4/photographer': '四大金刚-摄影师作品',
    '/api/f4/camera': '四大金刚-摄像师作品',
    '/api/f4/dresser': '四大金刚-化妆师作品',
    '/api/f4/host': '四大金刚-主持师作品',
    '/api/recordVideo/all': '婚纱摄影-纪实MV',
    '/api/recordVideoSeason/all': '婚纱摄影-纪实MV分季'
  }
})

/** 把api的router在此生成 **/
const apiRouterList = [
  advApi,
  hotelApi,
  sampleApi,
  pringlesApi,
  pringlesSeasonApi,
  suiteApi,
  recordVideoApi,
  recordVideoSeasonApi,
  casesApi,
  case3DApi,
  followPhotoApi,
  followVideoApi,
  followPhotoSeasonApi,
  followVideoSeasonApi,
  filterConditionApi,
  photographerApi,
  cameraApi,
  dresserApi,
  hostApi
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
    yield this.render('modules/default', renderOption('weddingpat', '/weddingpat', '/scheme'))
  })
  /** 婚礼视频 **/
siteRouter.get('/weddingvideo', function* index(next) {
    yield this.render('modules/default', renderOption('weddingvideo', '/weddingvideo', '/scheme'))
  })
  /** 提交婚庆需求 **/
siteRouter.get('/scheme-require', function* index(next) {
  yield this.render('modules/default', renderOption('scheme-require', '/scheme-require', '/scheme'))
})

/** 礼服 **/
siteRouter.get('/dress', function* index(next) {
  yield this.render('modules/default', renderOption('dress', '/dress', '/dress'))
})

siteRouter.get('/dress-details', function* index(next) {
    yield this.render('modules/default', renderOption('dress-details', '/dress', '/dress'))
  })
  /** 微电影 **/
siteRouter.get('/movie', function* index(next) {
    yield this.render('modules/default', renderOption('movie', '/movie', '/movie'))
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
