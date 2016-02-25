/**
 * Created by chenjianjun on 16/2/24.
 */
import pringlesSeason from '../cache/db/module/pringlesSeason.js'
import _ from 'lodash'
import env from '../cache/db/config'
let r = env.Thinky.r

// 婚纱摄影--客片分季路由
const pringlesSeasonApi = {

    'get+/pringlesSeason/all': function*(next) {
        this.model = pringlesSeason
        this.APIKey = 'PringlesSeason'
        yield next
    },

    // 获取分季节
    'get+/pringlesSeason/:position': function*(next) {
        if (this.params.position === 'all') {
            this.model = cases.filter({})
        } else {
            this.model = cases.filter({
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

        this.APIKey = 'PringlesSeason'
        yield next
    }
}
export default pringlesSeasonApi
