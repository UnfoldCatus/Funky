/**
 * Created by chenjianjun on 16/2/24.
 */
import followPhotoSeason from '../cache/db/module/followPhotoSeason.js'
import _ from 'lodash'
import env from '../cache/db/config'
let r = env.Thinky.r

// 婚庆策划--婚礼跟拍分季路由
const followPhotoSeasonApi = {

    'get+/followPhotoSeason/all': function*(next) {
        this.model = followPhotoSeason
        this.APIKey = 'FollowPhotoSeason'
        yield next
    },

    // 获取分季节
    'get+/followPhotoSeason/:position': function*(next) {
        if (this.params.position === 'all') {
            this.model = followPhotoSeason.filter({})
        } else {
            this.model = followPhotoSeason.filter({
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

        this.APIKey = 'FollowPhotoSeason'
        yield next
    }
}
export default followPhotoSeasonApi