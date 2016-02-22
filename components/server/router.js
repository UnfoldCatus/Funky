import router from 'koa-router'
import _ from 'lodash'
  /*加载各个api模块*/
import hotelApi from './api/hotel'
import sampleApi from './api/sample'
import pringlesApi from './api/pringles'
import advApi from './api/adv'
import suiteApi from './api/suite'

/*设置路由根为api*/
let routerMap = new router({
  prefix: '/api'
})

routerMap.get('/', function*(next) {
    yield next
    this.body = {
      'hotel': '酒店',
      'adv': '广告',
      'sample': '样片',
      'pringle': '客片'
    }
  })
  /* Adv */
_.each(advApi, (value, key) => {
  routerMap[key.split('+')[0]](key.split('+')[1], value)
})

/* Hotel */
_.each(hotelApi, (value, key) => {
    routerMap[key.split('+')[0]](key.split('+')[1], value)
  })
  /* Sample */
_.each(sampleApi, (value, key) => {
    routerMap[key.split('+')[0]](key.split('+')[1], value)
  })
  /* Pringles */
_.each(pringlesApi, (value, key) => {
    routerMap[key.split('+')[0]](key.split('+')[1], value)
  })
  /* Suite */
_.each(suiteApi, (value, key) => {
  routerMap[key.split('+')[0]](key.split('+')[1], value)
})
export default routerMap
