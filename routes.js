import Router from 'koa-router'
import React, { PropTypes } from 'react'
import { renderToString } from 'react-dom/server'

import { SampleList } from './components/sample-list.jsx'
import { PringlesList } from './components/pringles-list.jsx'
import { HotelList } from './components/hotel-list.jsx'
import { AdvList } from './components/adv-list.jsx'
import { DressList } from './components/dress-list.jsx'
import { SupplyList } from './components/hotel-list.jsx'
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

export const siteRouter = new Router()

/**
使用ejs引擎进行静态模板渲染
**/

/** 客片 **/
siteRouter.get('/pringles',function* index(next){
  yield this.render('pringles-list', { 'reactMarkup':renderToString( <PringlesList />) })
})


/** 婚宴预订 **/
// 列表
siteRouter.get('/hotel',function* index(next){
  yield this.render('hotel-list', { 'reactMarkup':renderToString( <HotelList />) })
})
// 详情


/** 作品 **/
siteRouter.get('/sample',function* index(next){
  yield this.render('sample-list', { 'reactMarkup':renderToString( <SampleList />) })
})

/** 礼服 **/
siteRouter.get('/dress',function* index(next){
  yield this.render('dress-list', { 'reactMarkup':renderToString( <DressList />) })
})
