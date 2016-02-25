/**
 * Created by chenjianjun on 16/2/25.
 */
import recordVideo from '../cache/db/module/recordVideo.js'
import _ from 'lodash'
import env from '../cache/db/config.js'
let r = env.Thinky.r

// 婚庆策划--婚礼跟拍API

const recordVideoApi = {

    'get+/recordVideo/all': function*(next) {
        this.model = recordVideo
        this.APIKey = 'RecordVideo'
        yield next
    },

    // 获取跟拍
    'get+/recordVideo/:position': function*(next) {
        if (this.params.position === 'all') {
            this.model = recordVideo.filter({})
        } else {
            this.model = recordVideo.filter({
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

        this.APIKey = 'RecordVideo'
        yield next
    },

    // 获取跟拍详情
    'get+/recordVideo/detail/:id': function*(next) {
        this.model = recordVideo.filter({
            id: this.params.id
        })

        this.APIKey = 'RecordVideo'
        yield next
    }

}
export default recordVideoApi
