import adv from '../cache/db/module/adv.js'
import _ from 'lodash'
import env from '../cache/db/config'
let r = env.Thinky.r
const advApi = {
  'get+/adv/all': function*(next) {
    this.model = adv
    this.APIKey = 'Adv'
    yield next
  },
  'get+/adv/:position': function*(next) {

    if (this.params.position === 'all') {
      this.model = adv.filter({})
    } else {
      console.log(this.params.position);
      this.model = adv.filter({
        position: this.params.position
      })
    }
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
      } else if(k.indexOf('seasonId') !== -1) {
        this.model = this.model.filter({
          seasonId:Number(this.request.query['seasonId'])
        })
      }
    })



    this.APIKey = 'Adv'
    yield next
  }

}
export default advApi
