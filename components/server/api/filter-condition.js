/** TODO
  列表搜索条件接口全部放这里
**/
import filterConditionShootStyle from '../cache/db/module/filterCondition/shootStyle.js'
import filterConditionExterior from '../cache/db/module/filterCondition/exterior.js'
import filterConditionHotelType from '../cache/db/module/filterCondition/hotelType.js'
import filterConditionHotelDistrict from '../cache/db/module/filterCondition/hotelDistrict.js'

import filterConditionCarModels from '../cache/db/module/filterCondition/carModels.js'
import filterConditionCarLevel from '../cache/db/module/filterCondition/carLevel.js'
import filterConditionCarBrand from '../cache/db/module/filterCondition/carBrand.js'
import filterConditionSuppliesBrand from '../cache/db/module/filterCondition/suppliesBrand.js'
import filterConditionSuppliesType from '../cache/db/module/filterCondition/suppliesType.js'
import filterConditionCaseStyle from '../cache/db/module/filterCondition/caseStyle.js'


import filterConditionDressType from '../cache/db/module/filterCondition/dressType.js'
import filterConditionDressBrand from '../cache/db/module/filterCondition/dressBrand.js'

import _ from 'lodash'
import env from '../cache/config.js'
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

  'get+/caseStyle/all':function*(next){ //案例风格
    if (this.params.position === 'all') {
      this.model = filterConditionCaseStyle.filter({})
    } else {
      this.model = filterConditionCaseStyle.filter({
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

    this.APIKey = 'FilterConditionCaseStyle';
    yield next
  },

  'get+/hotelDistrict/all':function*(next){ //酒店区域
    if (this.params.position === 'all') {
      this.model = filterConditionHotelDistrict.filter({})
    } else {
      this.model = filterConditionHotelDistrict.filter({
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

    this.APIKey = 'FilterConditionHotelDistrict';
    yield next
  },

  'get+/carModels/all':function*(next){ // 婚礼租车型号
    if (this.params.position === 'all') {
      this.model = filterConditionCarModels.filter({})
    } else {
      this.model = filterConditionCarModels.filter({
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

    this.APIKey = 'FilterConditionCarModels';
    yield next
  },

  'get+/carLevel/all':function*(next){ // 婚礼租车档次
    if (this.params.position === 'all') {
      this.model = filterConditionCarLevel.filter({})
    } else {
      this.model = filterConditionCarLevel.filter({
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

    this.APIKey = 'FilterConditionCarLevel';
    yield next
  },

  'get+/carBrand/all':function*(next){ // 婚礼租车品牌
    if (this.params.position === 'all') {
      this.model = filterConditionCarBrand.filter({})
    } else {
      this.model = filterConditionCarBrand.filter({
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

    this.APIKey = 'FilterConditionCarBrand';
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
  },

  // 婚纱礼服--类型
  'get+/dressType/all':function*(next){
    if (this.params.position === 'all') {
      this.model = filterConditionDressType.filter({})
    } else {
      this.model = filterConditionDressType.filter({
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

    this.APIKey = 'FilterConditionDressType';
    yield next
  },

  // 婚纱礼服--品牌
  'get+/dressBrand/all':function*(next){
    this.model = filterConditionDressBrand;
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
      else if(k.indexOf('position') !== -1) {
        this.model = this.model.filter({
          position: this.params.position})
      }
      else if(k.indexOf('typeId') !== -1) {
        this.model = filterConditionDressBrand.filter({
          type: parseInt(this.request.query["typeId"])
        })
      }
    })

    this.APIKey = 'FilterConditionDressBrand';
    yield next
  }

}
export default filterConditionApi
