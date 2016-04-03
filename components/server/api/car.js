/**
 * Created by chenjianjun on 16/2/26.
 */

import car from '../cache/db/module/car.js'
import _ from 'lodash'
import env from '../cache/config'
let r = env.Thinky.r

// 婚车租赁

const carApi = {

    // 获取婚车列表
    'get+/car/:position': function*(next) {
        this.APIKey = 'Car'
        if (this.params.position === 'all') {
            this.model = car.filter({})
        } else {
            this.model = car.filter({position: this.params.position})
        }

        let pageIndex = 0;
        let pageSize = 10;
        _.each(this.request.query, (v, k) => {
            if (k.indexOf('pageIndex') !== -1) {
                pageIndex = parseInt(this.request.query['pageIndex'] || '1') - 1
                if (pageIndex < 0) {
                    pageIndex = 0
                }
            } else if(k.indexOf('pageSize') !== -1) {
                pageSize = parseInt(this.request.query['pageSize'] || '1')
                if (pageSize < 0) {
                    pageSize = 1
                }
            } else if(k.indexOf('minPrice') !== -1) {
                // 最低价格
                this.model = this.model.filter(r.row('rentalPrice').gt(parseInt(this.request.query['minPrice'])));
            } else if(k.indexOf('maxPrice') !== -1) {
                // 最高价格
                this.model = this.model.filter(r.row('rentalPrice').lt(parseInt(this.request.query['maxPrice'])));
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

        try {
            let all = yield this.model
            this.count = all.length || 0
        } catch (e) {
            this.count = 0
        }

        this.model = this.model.orderBy(r.desc('weight'))
        this.model = this.model.skip(pageIndex * pageSize).limit(pageSize);

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
