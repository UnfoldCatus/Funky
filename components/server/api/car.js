/**
 * Created by chenjianjun on 16/2/26.
 */

import car from '../cache/db/module/car.js'
import _ from 'lodash'
import env from '../cache/db/config'
let r = env.Thinky.r

// 婚车租赁

const carApi = {

    'get+/car/all': function*(next) {
        this.model = car
        this.APIKey = 'Car'
        yield next
    },

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
                this.model = this.model.skip(limit * Number(this.request.query["pageSize"] || '10'));
                this.model = this.model.limit(Number(this.request.query["pageSize"] || '10'));
            }
            //else if(k.indexOf('styleId') !== -1) {
            //    // 风格 TODO:服务器返回的是字符串如"123,275,468,",这里采用"%id,%"的方式匹配
            //    this.model = this.model.filter(r.row("caseStyle").match(".*?"+this.request.query['styleId']+","+".*?"));
            //} else if(k.indexOf('minPrice') !== -1) {
            //    // 最低价格
            //    this.model = this.model.filter(r.row('totalCost').gt(Number(this.request.query['minPrice'])));
            //} else if(k.indexOf('maxPrice') !== -1) {
            //    // 最高价格
            //    this.model = this.model.filter(r.row('totalCost').lt(Number(this.request.query['maxPrice'])));
            //}
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
