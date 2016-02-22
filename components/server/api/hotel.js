import hotel from '../cache/db/module/hotel.js'
import _ from 'lodash'
import env from '../cache/db/config'
let r = env.Thinky.r

const hotelApi = {
  'get+/hotel/all': function*(next) {
    this.model = hotel
    this.APIKey = 'Hotel'
    let all = yield this.model
    this.count = all.length
    yield next
  },
  'get+/hotel/:position': function*(next) {
    this.APIKey = 'Hotel'
    if (this.params.position === 'all') {
      this.model = hotel.filter({})
    } else {
      this.model = hotel.filter({
        position: this.params.position
      })
    }
    let all = yield this.model
    this.count = all.length

    this.model = this.model.orderBy(r.desc('weight'))
    _.each(this.request.query, (v, k) => {
      if (k.indexOf('minTable') !== -1) {
        this.model = this.model.filter(r.row('maxTableNum').gt(Number(this.request.query['minTable'])))

      } else if (k.indexOf('maxTable') !== -1) {
        this.model = this.model.filter(r.row('maxTableNum').lt(Number(this.request.query['maxTable'])))
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
      } else if (k.indexOf('isGift') !== -1) {
        this.model = this.model.filter({
          isGift: Number(this.request.query['isGift'])
        })
      } else if (k.indexOf('isDisaccount') !== -1) {
        this.model = this.model.filter({
          isDisaccount: Number(this.request.query['isDisaccount'])
        })
      } else if (k.indexOf('cityId') !== -1) {
        this.model = this.model.filter({
          cityId: Number(this.request.query['cityId'])
        })
      }else if(k.indexOf('hotelName') !== -1){
        this.model = this.model.filter(r.row('name').match(".*?"+this.request.query['hotelName']+".*?"))
      }
    })




    yield next
  }

}
export default hotelApi
