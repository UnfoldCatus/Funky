import suite from '../cache/db/module/suite.js'
import _ from 'lodash'
import env from '../cache/db/config'
let r = env.Thinky.r
const suiteApi = {
  'get+/suite/all': function*(next) {
    this.model = suite
    this.APIKey = 'Suite'
    let all = yield suite.filter({})
    this.count = all.length
    yield next
  },
  'get+/suite/:position': function*(next) {
    this.APIKey = 'Suite'
    if (this.params.position === 'all') {
      this.model = suite.filter({})
    } else {
      this.model = suite.filter({
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
        this.model = this.model.skip(limit * Number(this.request.query["pageSize"] || '10'));
        this.model = this.model.limit(Number(this.request.query["pageSize"] || '10'));
      } else if (k.indexOf('seasonId') !== -1) {
        this.model = this.model.filter({
          seasonId: Number(this.request.query['seasonId'])
        })
      }
    })
    yield next
  },
  'get+/suite/detail/:id': function*(next) {
    this.model = suite.filter({
      id: parseInt(this.params.id)
    })
    this.APIKey = 'Suite'
    let all = yield this.model
    this.count = all.length
    yield next
  }
}
export default suiteApi
