/** TODO
  列表搜索条件接口全部放这里
**/
import filterConditionShootStyle from '../cache/db/module/filterCondition/shootStyle.js'
import filterConditionExterior from '../cache/db/module/filterCondition/exterior.js'
import filterConditionHotelType from '../cache/db/module/filterCondition/hotelType.js'
import filterConditionHotelDistricts from '../cache/db/module/filterCondition/hotelDistricts.js'

import filterConditionWeddingCarModels from '../cache/db/module/filterCondition/weddingCarModels.js'
import filterConditionWeddingCarLevel from '../cache/db/module/filterCondition/weddingCarLevel.js'
import filterConditionWeddingCarBrand from '../cache/db/module/filterCondition/weddingCarBrand.js'
import filterConditionSuppliesBrand from '../cache/db/module/filterCondition/suppliesBrand.js'
import filterConditionSuppliesType from '../cache/db/module/filterCondition/suppliesType.js'

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
  },

  'get+/weddingCarModels/all':function*(next){ // 婚礼租车型号
    if (this.params.position === 'all') {
      this.model = filterConditionWeddingCarModels.filter({})
    } else {
      this.model = filterConditionWeddingCarModels.filter({
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

    this.APIKey = 'FilterConditionWeddingCarModels';
    yield next
  },

  'get+/weddingCarLevel/all':function*(next){ // 婚礼租车档次
    if (this.params.position === 'all') {
      this.model = filterConditionWeddingCarLevel.filter({})
    } else {
      this.model = filterConditionWeddingCarLevel.filter({
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

    this.APIKey = 'FilterConditionWeddingCarLevel';
    yield next
  },

  'get+/weddingCarBrand/all':function*(next){ // 婚礼租车品牌
    if (this.params.position === 'all') {
      this.model = filterConditionWeddingCarBrand.filter({})
    } else {
      this.model = filterConditionWeddingCarBrand.filter({
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

    this.APIKey = 'FilterConditionWeddingCarBrand';
    yield next
  },

  'get+/suppliesBrand/all':function*(next){ // 婚礼用品品牌
    if (this.params.position === 'all') {
      this.model = filterConditionSuppliesBrand.filter({})
    } else {
      this.model = filterConditionSuppliesBrand.filter({
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

    this.APIKey = 'FilterConditionSuppliesBrand';
    yield next
  },

  'get+/suppliesType/all':function*(next){ // 婚礼用品类型
    if (this.params.position === 'all') {
      this.model = filterConditionSuppliesType.filter({})
    } else {
      this.model = filterConditionSuppliesType.filter({
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

    this.APIKey = 'FilterConditionSuppliesType';
    yield next
  }

}
export default filterConditionApi
