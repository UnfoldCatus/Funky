/**
 * Created by chenjianjun on 16/2/25.
 */
import recordVideoSeason from '../cache/db/module/recordVideoSeason.js'
import _ from 'lodash'
import env from '../cache/db/config'
let r = env.Thinky.r

// 婚庆策划--婚礼跟拍分季路由r
const recordVideoSeasonApi = {

    'get+/followVideoSeason/all': function*(next) {
        this.model = recordVideoSeason
        this.APIKey = 'RecordVideoSeason'
        yield next
    },

    // 获取分季节
    'get+/followVideoSeason/:position': function*(next) {
        if (this.params.position === 'all') {
            this.model = recordVideoSeason.filter({})
        } else {
            this.model = recordVideoSeason.filter({
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

        this.APIKey = 'RecordVideoSeason'
        yield next
    }
}
export default recordVideoSeasonApi
