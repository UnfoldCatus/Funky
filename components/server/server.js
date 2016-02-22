import koa from 'koa'
import router from './router.js'
import Boom from 'boom'
import thunkify from 'thunkify'
import db from './cache/db/dbUtil.js'
import memCacheMgr from './cache/mem/manager.js'
import _ from 'lodash'
import favicon from 'koa-favicon'
import rewrite from 'koa-rewrite'
import cors from 'koa-cors'
import serve from 'koa-static'
/**
features:
1. 当请求来时， 要根据后缀来确定返回到资源呈现。不同客户端对于同一个资源所需要到呈现不同。
2. 对请求到资源进行分流与缓存。
3.
 **/
const DBUtil = db.Instance()
const app = koa()

/*击中缓存的数据 就返回*/
let force = function * (next) {
  if (this.key) {
    console.log(this.key);
    // DBUtil.isCacheDataUsable 方法 返回真表示数据缓存可用。否则表示数据正在同步。不可以从缓存拉
    if (DBUtil.isCacheDataUsable(this.key)) {
      //从缓存数据库中去查询。
      if (this.model) {
        this.dataSource = yield this.model.run()
      }

    } else {
      //缓存数据不可用。 去做代理数据请求
      // 为了能够使用yield 需要此处对函数进行偏函数化。
      // 就是将一个带callback的任意函数转换为
      // 只带callback的函数
      let proxyFetcher = thunkify(memCacheMgr.getData)
      this.dataSource = yield proxyFetcher(this.request.url, this.request.url)
    }
  }
  yield next
}
app.use(cors())
app.use(favicon(__dirname + '/favicon.ico'));
app.use(serve('public'))
/*路由放这里*/
app.use(router.routes())
/*对于http中不同动词不同状态的异常处理*/
app.use(router.allowedMethods({
  throw: true,
  notImplemented: () => new Boom.notImplemented(),
  methodNotAllowed: () => new Boom.methodNotAllowed()
}))
app.use(force)

/*
对于返回的控制。
例如：不同的客户端类型要返回不同的数据集合
*/
app.use(function * (next) {
  this.dataSource = _.isArray(this.dataSource)?this.dataSource:[]
  if (this.key === 'Suite' && this.dataSource[0]['pcDetailImages']) {
      let images = []
      let origin = JSON.parse(this.dataSource[0]['pcDetailImages'])
      let keys = [
        'pc_detailImages',
        'pc_serviceImages',
        'pc_cosmeticImages',
        'pc_clothShootImages',
        'pc_baseSampleImages',
        'pc_processImages'
      ]



      _.each(keys,function(v){
        _.each(origin[v]||[],function(v1){
          images.push(v1)
        })
      })
      // _.each(origin,function(v,k){
      //   _.each(v,function(v1){
      //     images.push(v1)
      //   })
      //
      // })
      this.dataSource[0]['pcDetailImages'] = JSON.stringify(images)
  }


    let data = {
      success: true,
      message: "",
      data: this.dataSource,
      code: 200,
      count: this.count ||this.dataSource.length
    }
    this.body = data
})

app.listen(8888)
