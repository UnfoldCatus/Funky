/**
 * Created by chenjianjun on 16/2/26.
 */

import car from '../cache/db/module/car.js'
import _ from 'lodash'
import env from '../cache/db/config'
let r = env.Thinky.r

// 婚车租赁

const carApi = {

    //'get+/car/all': function*(next) {
    //    this.model = car
    //    this.APIKey = 'Car'
    //    yield next
    //},
    // 获取案例
    'get+/car/:position': function*(next) {
        if (this.params.position === 'all') {
            this.model = car.filter({})
        } else {
            this.model = car.filter({
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
                this.model = this.model.skip(limit * parseInt(this.request.query["pageSize"] || '10'));
                this.model = this.model.limit(parseInt(this.request.query["pageSize"] || '10'));
            }
            else if(k.indexOf('minPrice') !== -1) {
                // 最低价格
                this.model = this.model.filter(r.row('totalCost').gt(parseInt(this.request.query['minPrice'])));
            } else if(k.indexOf('maxPrice') !== -1) {
                // 最高价格
                this.model = this.model.filter(r.row('totalCost').lt(parseInt(this.request.query['maxPrice'])));
            } else if(k.indexOf('brandId') !== -1) {
                // 用品品牌
                this.model = this.model.filter({brandId: parseInt(this.request.query["brandId"])});
            } else if(k.indexOf('modelsId') !== -1) {
                // 型号ID
                this.model = this.model.filter({modelsId: parseInt(this.request.query["modelsId"])});
            } else if(k.indexOf('levelId') !== -1) {
                // 档次ID
                this.model = this.model.filter({levelId: parseInt(this.request.query["levelId"])});
            } else if(k.indexOf('carNature') !== -1) {
                // 单车还是车队
                this.model = this.model.filter({carNature: parseInt(this.request.query["carNature"])});
            }
        })

        this.APIKey = 'Car'
        yield next
    },

    // 获取案例详情
    'get+/car/detail/:id': function*(next) {
        this.model = car.filter({
            id: parseInt(this.params.id)
        })

        this.APIKey = 'Car'
        yield next
    }

}
export default carApi
