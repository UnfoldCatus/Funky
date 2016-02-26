/**
 * Created by chenjianjun on 16/2/26.
 */
import dress from '../cache/db/module/car.js'
import _ from 'lodash'
import env from '../cache/db/config'
let r = env.Thinky.r

// 婚纱礼服

const dressApi = {

    'get+/dress/all': function*(next) {
        this.model = car
        this.APIKey = 'Dress'
        yield next
    },

    // 获取案例
    'get+/dress/:position': function*(next) {
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
        })

        this.APIKey = 'Dress'
        yield next
    },

    // 获取案例详情
    'get+/dress/detail/:id': function*(next) {
        this.model = car.filter({
            id: parseInt(this.params.id)
        })

        this.APIKey = 'Dress'
        yield next
    }

}
export default dressApi
