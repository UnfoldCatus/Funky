/**
 * Created by chenjianjun on 16/2/25.
 */
import case3D from '../cache/db/module/case3D.js'
import _ from 'lodash'
import env from '../cache/db/config'
let r = env.Thinky.r

// 婚庆策划--3D案例API

const cases3DApi = {

    'get+/case3D/all': function*(next) {
        this.model = case3D
        this.APIKey = 'Cases3D'
        yield next
    },

    // 获取3D案例
    'get+/case3D/:position': function*(next) {
        if (this.params.position === 'all') {
            this.model = case3D.filter({})
        } else {
            this.model = case3D.filter({
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

        this.APIKey = 'Cases3D'
        yield next
    },

    // 获取3D案例详情
    'get+/case3D/detail/:id': function*(next) {
        this.model = case3D.filter({
            id: parseInt(this.params.id)
        })

        this.APIKey = 'Cases3D'
        yield next
    }

}
export default cases3DApi
