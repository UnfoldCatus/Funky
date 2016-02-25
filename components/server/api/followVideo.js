/**
 * Created by chenjianjun on 16/2/24.
 */
import followVideo from '../cache/db/module/followVideo.js'
import _ from 'lodash'
import env from '../cache/db/config.js'
let r = env.Thinky.r

// 婚庆策划--婚礼跟拍API

const followVideoApi = {

    'get+/followVideo/all': function*(next) {
        this.model = followVideo
        this.APIKey = 'FollowVideo'
        yield next
    },

    // 获取跟拍
    'get+/followVideo/:position': function*(next) {
        if (this.params.position === 'all') {
            this.model = followVideo.filter({})
        } else {
            this.model = followVideo.filter({
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
            } else if(k.indexOf('seasonId') !== -1) {
                // 分季ID
                this.model = this.model.filter({
                    seasonId: Number(this.request.query['seasonId'])
                });
            }
        })

        this.APIKey = 'FollowVideo'
        yield next
    },

    // 获取跟拍详情
    'get+/followVideo/detail/:id': function*(next) {
        this.model = followVideo.filter({
            id: parseInt(this.params.id)
        })

        this.APIKey = 'FollowVideo'
        yield next
    }

}
export default followVideoApi
