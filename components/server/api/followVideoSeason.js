/**
 * Created by chenjianjun on 16/2/24.
 */
import followVideoSeason from '../cache/db/module/followVideoSeason.js'
import _ from 'lodash'
import env from '../cache/db/config'
let r = env.Thinky.r

// 婚庆策划--婚礼跟拍分季路由
const followVideoSeasonApi = {

    'get+/followVideoSeason/all': function*(next) {
        this.model = followVideoSeason
        this.APIKey = 'FollowVideoSeason'
        yield next
    },

    // 获取分季节
    'get+/followVideoSeason/:position': function*(next) {
        if (this.params.position === 'all') {
            this.model = followVideoSeason.filter({})
        } else {
            this.model = followVideoSeason.filter({
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

        this.APIKey = 'FollowVideoSeason'
        yield next
    }
}
export default followVideoSeasonApi
