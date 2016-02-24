/**
 * Created by chenjianjun on 16/2/24.
 */

import follow from '../cache/db/module/follow.js'
import _ from 'lodash'
import env from '../cache/db/config.js'
let r = env.Thinky.r

// 婚庆策划--婚礼跟拍API

const followApi = {

    'get+/follow/all': function*(next) {
        this.model = follow
        this.APIKey = 'Follow'
        yield next
    },

    // 获取跟拍
    'get+/follow/:position': function*(next) {
        if (this.params.position === 'all') {
            this.model = follow.filter({})
        } else {
            this.model = follow.filter({
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

        this.APIKey = 'Follow'
        yield next
    },

    // 获取跟拍详情
    'get+/follow/detail/:id': function*(next) {
        this.model = follow.filter({
            id: this.params.id
        })

        this.APIKey = 'Follow'
        yield next
    }

}
export default followApi
