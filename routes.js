import Router from 'koa-router'
import React, { PropTypes } from 'react'
import { renderToString } from 'react-dom/server'

import { MenuConfig } from './components/config/menu-config'
import { ComponentsIndex} from './components/config/components-index'
/*菜单*/
import { Navigation } from './components/navigation.jsx'
// import { Home } from './components/home.jsx'
// import { SampleList } from './components/sample-list.jsx'
// import { PringlesList } from './components/pringles-list.jsx'
// import { HotelList } from './components/hotel-list.jsx'
// import { AdvList } from './components/adv-list.jsx'
// import { DressList } from './components/dress-list.jsx'
// import { SupplyList } from './components/hotel-list.jsx'

/**
  api 资源路由
**/
export const apiRouter = new Router({
  'prefix':'/api'
}) // 单个的export 必须在声明时。
apiRouter.get('/',function* apiRoot(next){
  yield next
  // 列出所有资源到列表
  this.body = {
    '/api/adv/all':'广告',
    '/api/sample/all':'作品',
    '/api/pringles/all':'客片',
    '/api/hotel/all':'婚宴预订'
  }
})



/**
 platform 主站的页面路由
**/

const siteRouter = new Router()
let renderOption = (templateName,scriptName,menuKey,parentKey) => {
  return {
    'reactMarkup':renderToString(ComponentsIndex[templateName]),
    'reactNavMarkup':renderToString(<Navigation menuKey={parentKey ||'/'} currentKey={menuKey} />),
    'main':scriptName
  }
}
/**
使用ejs引擎进行静态模板渲染
在服务端。 所有的模块都是静态依赖导入。 目前采用手动方式。 只更改 components-index.js
当前还是手动写此文件。等把流程跑通，会改为脚本生成此文件。 进一步减少工作量


1. 配置人员在 menu-config.js 中新增菜单。 需要填写url结构，中文，因为名称
2. 配置人员在 components-index.js 中指名 ejs模板和组件的对应关系
3. routes根据 MenuConfig 和 ComponentsIndex 构建路由表



**/
/** 首页 **/
siteRouter.get('/',function* index(next){
  yield this.render('modules/home', renderOption('home','home','/','/'))
})

/** /home 也是首页 **/
siteRouter.get('/home',function* index(next){
  yield this.render('modules/home', renderOption('home','home','/home','/home'))
})

/** 客片 **/
siteRouter.get('/pringles',function* index(next){
  yield this.render('modules/pringles-list', renderOption('pringles-list','pringles','/pringles','/shot'))
})


/** 婚宴预订 **/
// 列表
siteRouter.get('/hotel',function* index(next){
  yield this.render('modules/hotel-list', renderOption('hotel-list','hotel','/hotel','/hotel'))
})
// 详情


/** 作品 **/
siteRouter.get('/sample',function* index(next){
  yield this.render('modules/sample-list',renderOption('sample-list','sample','/sample','/shot'))
})

/** 礼服 **/
siteRouter.get('/dress',function* index(next){
  yield this.render('modules/dress-list', renderOption('dress-list','dress','/dress','/dress'))
})

export { siteRouter }
