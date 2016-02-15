import Router from 'koa-router'
import React, { PropTypes } from 'react'
import { renderToString } from 'react-dom/server'



import { Navigation } from './components/navigation.jsx'
import { Home } from './components/home.jsx'
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

const siteRouter = new Router()

/**
使用ejs引擎进行静态模板渲染
**/

/** 首页 **/
siteRouter.get('/',function* index(next){
  yield this.render('modules/home', {
    'reactMarkup':renderToString( <Home />),
    'reactNavMarkup':renderToString(<Navigation menuKey={'/'} />)
  })
})

/** /home 也是首页 **/
siteRouter.get('/home',function* index(next){
  yield this.render('modules/home', {
    'reactMarkup':renderToString( <Home />),
    'reactNavMarkup':renderToString(<Navigation menuKey={'/home'} />)
  })
})

/** 客片 **/
siteRouter.get('/pringles',function* index(next){
  yield this.render('modules/pringles-list', {
    'reactMarkup':renderToString( <PringlesList />),
    'reactNavMarkup':renderToString(<Navigation menuKey={'/shot'} currentKey={'/pringles'} />)
  })
})


/** 婚宴预订 **/
// 列表
siteRouter.get('/hotel',function* index(next){
  yield this.render('modules/hotel-list', {
    'reactMarkup':renderToString( <HotelList />),
    'reactNavMarkup':renderToString(<Navigation menuKey={'/hotel'} currentKey={'/hotel'}/>)
  })
})
// 详情


/** 作品 **/
siteRouter.get('/sample',function* index(next){
  yield this.render('modules/sample-list', {
    'reactMarkup':renderToString( <SampleList />),
    'reactNavMarkup':renderToString(<Navigation menuKey={'/shot'} currentKey={'/sample'}/>)
   })
})

/** 礼服 **/
siteRouter.get('/dress',function* index(next){
  yield this.render('modules/dress-list', { 'reactMarkup':renderToString( <DressList />) })
})

export { siteRouter }
