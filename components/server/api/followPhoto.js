/**
 * Created by chenjianjun on 16/2/24.
 */

import followPhoto from '../cache/db/module/followPhoto.js'
import _ from 'lodash'
import env from '../cache/db/config.js'
let r = env.Thinky.r

// 婚庆策划--婚礼跟拍API

const followPhotoApi = {

    'get+/followPhoto/all': function*(next) {
        this.model = followPhoto
        this.APIKey = 'FollowPhoto'
        yield next
    },

    // 获取跟拍
    'get+/followPhoto/:position': function*(next) {
        if (this.params.position === 'all') {
            this.model = followPhoto.filter({})
        } else {
            this.model = followPhoto.filter({
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

        this.APIKey = 'FollowPhoto'
        yield next
    },

    // 获取跟拍详情
    'get+/followPhoto/detail/:id': function*(next) {
        this.model = followPhoto.filter({
            id: this.params.id
        })

        this.APIKey = 'FollowPhoto'
        yield next
    }

}
export default followPhotoApi
