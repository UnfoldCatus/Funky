/**
我到想法是这样：
只要指定对应到搜索关键字， 就会抽取相应到搜索条件算法
**/
import _ from 'lodash'
import env from './cache/db/config'

let getModel = (ctx)=>{
  return ctx.model
}
let r = env.Thinky.r
let filterAlg = {
  'pageSize':()=>{
    
  },
  'pageIndex':''
}
export default filterAlg
