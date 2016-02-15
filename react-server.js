
import Koa from 'koa'
import ejsEngine from 'koa-ejs'
import Path from 'path'
import Favicon from 'koa-favicon'
import Logger from 'koa-logger'
import StaticFile from 'koa-static'
import { apiRouter } from './routes'
import { siteRouter } from './routes'
const ReactServer = Koa()
/**
初始化模板引擎 使用ejs作为页面引擎
可以在中间件中用this.render('templateName',jsonData)
来生成页面
api请查看 [http://www.embeddedjs.com/]
**/
ejsEngine(ReactServer, {
  root: Path.join(__dirname, 'views'),
  layout: 'layout',
  viewExt: 'html',
  cache: true,
  debug: true
})

/**

路由分成两部分。
第一部分是api的 以 /api开头

第二部分是针对客户端的
以八个大模块来划分。(婚纱摄影，婚宴预订，婚庆定制，婚纱礼服，微电影，婚戒钻石，婚礼用品，婚车租赁)
由于是服务端渲染到数据，那么基本到规则就是渲染初始状态。

这里就有两种设计选择：
1. 当用户请求某个资源时，开始发起
数据预取请求， 待数据返回后才渲染页面返回。
2. 服务端渲染只是做页面框架。渲染时把针对数据请求到js作为数据输出
那么客户端在收到此页面后即开始发起数据请求。

实践中选择了方案二。当然这样做有一个大的问题就是SEO时，机器人爬到的页面只有框架部分没有动态数据。 因为动态数据都是在js加载以后通过xhr请求的。

**/

process.env.NODE_ENV === 'development' && ReactServer.use(Logger()) // 只有在NODE_ENV为development才加载日志
ReactServer.use(Favicon(__dirname + '/assets/images/favicon.png')) // favico
ReactServer.use(StaticFile('./assets',{'maxage':3*60*1000})) // 其他静态资源：js/images/css

ReactServer.use(siteRouter.routes()) // 网站路由
ReactServer.use(apiRouter.routes())// api路由


/**服务器异常处理**/
if (process.env.NODE_ENV === 'test') {
  module.exports = ReactServer.callback();
} else {
  ReactServer.listen(7001);
  console.log('open http://localhost:7001')
}

ReactServer.on('error', function (err) {
  console.log(err.stack)
})
