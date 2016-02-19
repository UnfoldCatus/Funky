import Router from 'koa-router'
import React, { PropTypes } from 'react'
import { renderToString } from 'react-dom/server'

import { MenuConfig } from './components/config/menu-config'
import { ComponentsIndex} from './components/config/components-index'
/*菜单*/
import { Navigation } from './components/navigation.jsx'

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
  templateName: ejs模板名称
  menuKey MenuConfig中配置的link字段
  parentKey MenuConfig中的顶层模块的key
*/
let renderOption = (templateName,menuKey,parentKey) => {
  return {
    'reactMarkup':renderToString(ComponentsIndex[templateName]),
    'reactNavMarkup':renderToString(<Navigation menuKey={parentKey ||'/'} currentKey={menuKey} />),
    'main':templateName // 客户端渲染使用的脚本名称和模板名称一致
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
siteRouter.get('/',function* index(next){
  yield this.render('modules/default', renderOption('home','/','/'))
})

/** /home 也是首页 **/
siteRouter.get('/home',function* index(next){
  yield this.render('modules/default', renderOption('home','/home','/home'))
})

siteRouter.get('/shot',function* index(next){
  yield this.render('modules/default', renderOption('shot','/shot','/shot'))
})


/** 作品 **/
siteRouter.get('/sample',function* index(next){
  yield this.render('modules/default',renderOption('sample','/sample','/shot'))
})

/** 客片 **/
siteRouter.get('/pringles',function* index(next){
  yield this.render('modules/default', renderOption('pringles','/pringles','/shot'))
})
/* 套系 */
siteRouter.get('/suite',function* index(next){
  yield this.render('modules/default', renderOption('suite','/suite','/shot'))
})


/** 婚宴预订 **/
// 列表
siteRouter.get('/hotel',function* index(next){
  yield this.render('modules/default', renderOption('hotel','/hotel','/hotel'))
})
// 提交婚宴预订需求
siteRouter.get('/hotel-require',function* index(next){
  yield this.render('modules/default', renderOption('hotel-require','/hotel-require','/hotel'))
})


siteRouter.get('/scheme',function* index(next){
  yield this.render('modules/default', renderOption('scheme','/scheme','/scheme'))
})


/** 礼服 **/
siteRouter.get('/dress',function* index(next){
  yield this.render('modules/default', renderOption('dress','/dress','/dress'))
})

export { siteRouter }
