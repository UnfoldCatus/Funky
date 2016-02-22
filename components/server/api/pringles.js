import pringles from '../cache/db/module/pringles.js'
import _ from 'lodash'
import env from '../cache/db/config'
let r = env.Thinky.r
const pringlesApi = {
  'get+/pringles/all': function*(next) {
    this.model = pringles
    this.APIKey = 'Pringles'
    let all = yield pringles.filter({})
    this.count = all.length
    yield next
  },
  'get+/pringles/:position': function*(next) {

    this.APIKey = 'Pringles'

    if (this.params.position === 'all') {
      this.model = pringles.filter({})
    } else {
      this.model = pringles.filter({
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
  'get+/pringles/detail/:id': function*(next) {
    this.model = pringles.filter({
      id: parseInt(this.params.id)
    })
    this.APIKey = 'Pringles'
    let all = yield this.model
    this.count = all.length
    yield next
  }
}
export default pringlesApi
