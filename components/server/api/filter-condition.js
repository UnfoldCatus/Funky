/** TODO
  列表搜索条件接口全部放这里
**/
import filterConditionShootStyle from '../cache/db/module/filterCondition/shootStyle.js'
import filterConditionExterior from '../cache/db/module/filterCondition/exterior.js'
import filterConditionHotelType from '../cache/db/module/filterCondition/hotelType.js'
import filterConditionHotelDistricts from '../cache/db/module/filterCondition/hotelDistricts.js'
import _ from 'lodash'
import env from '../cache/db/config.js'
let r = env.Thinky.r

const filterConditionApi = {
  'get+/exterior/all':function*(next){ //外景
    if (this.params.position === 'all') {
      this.model = filterConditionExterior.filter({})
    } else {
      this.model = filterConditionExterior.filter({
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

    this.APIKey = 'FilterConditionExterior';
    yield next
  },

  'get+/shootStyle/all':function*(next){ //风格
    if (this.params.position === 'all') {
      this.model = filterConditionShootStyle.filter({})
    } else {
      this.model = filterConditionShootStyle.filter({
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

    this.APIKey = 'FilterConditionShootStyle';
    yield next
  },

  'get+/hotelType/all':function*(next){ //风格
    if (this.params.position === 'all') {
      this.model = filterConditionHotelType.filter({})
    } else {
      this.model = filterConditionHotelType.filter({
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

    this.APIKey = 'FilterConditionHotelType';
    yield next
  },

  'get+/hotelDistricts/all':function*(next){ //酒店区域
    if (this.params.position === 'all') {
      this.model = filterConditionHotelDistricts.filter({})
    } else {
      this.model = filterConditionHotelDistricts.filter({
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

    this.APIKey = 'FilterConditionHotelDistricts';
    yield next
  }

}
export default filterConditionApi
