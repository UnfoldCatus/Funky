import sample from '../cache/db/module/sample.js'
import _ from 'lodash'
import env from '../cache/db/config'
let r = env.Thinky.r
const samleApi = {
  'get+/sample/all': function*(next) {
    this.model = sample
    this.APIKey = 'Sample'
    let all = yield sample.filter({})
    this.count = all.length
    yield next
  },
  'get+/sample/:position': function*(next) {
    this.APIKey = 'Sample'
    //对position为all到情况要处理
    if (this.params.position === 'all') {
      this.model = sample.filter({})
    } else {
      this.model = sample.filter({
        position: this.params.position
      })

    }
    let all = yield this.model
    this.count = all.length
    this.model = this.model.orderBy(r.desc('weight'))

    _.each(this.request.query, (v, k) => {
      if (k.indexOf('min') !== -1 || k.indexOf('max') !== -1) {
        console.log(v);
      } else if (k.indexOf('pageSize') !== -1) {
        let limit = 0
        limit = Number(this.request.query['pageIndex'] || '1') - 1
        if (limit < 0) {
          limit = 0
        }
        this.model = this.model.skip(limit * Number(this.request.query["pageSize"] || '10')).limit(Number(this.request.query["pageSize"] || '10'))
      } else if(k.indexOf('seasonId') !== -1) {
        this.model = this.model.filter({
          seasonId:Number(this.request.query['seasonId'])
        })
      }

    })

    yield next
  },
  'get+/sample/detail/:id':function*(next){
    this.model = sample.filter({
      id:parseInt(this.params.id)
    })
    this.APIKey = 'Sample'
    let all = yield this.model
    this.count = all.length
    yield next
  }


}
export default samleApi
