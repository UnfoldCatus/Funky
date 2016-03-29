import adv from '../cache/db/module/adv.js'
import _ from 'lodash'
import env from '../cache/config'
let r = env.Thinky.r
const advApi = {
  // 广告
  'get+/adv/:position': function*(next) {

    if (this.params.position === 'all') {
      this.model = adv.filter({})
    } else {
      this.model = adv.filter({
        position: this.params.position
      })
    }
    this.model = this.model.orderBy(r.desc('weight'))
    _.each(this.request.query, (v, k) => {
      if (k.indexOf('pageSize') !== -1) {
        let limit = 0
        limit = Number(this.request.query['pageIndex'] || '1') - 1
        if (limit < 0) {
          limit = 0
        }
        this.model = this.model.skip(limit * Number(this.request.query["pageSize"] || '10'));
        this.model = this.model.limit(Number(this.request.query["pageSize"] || '10'));
      }
    })

    this.APIKey = 'Adv'
    yield next
  }

}
export default advApi
