/**
 * Created by chenjianjun on 16/2/25.
 */

import wdyVideo from '../cache/db/module/movie.js'
import _ from 'lodash'
import env from '../cache/config'
let r = env.Thinky.r

// 微电影

const wdyVideoApi = {

    //'get+/video/all': function*(next) {
    //    this.model = wdyVideo
    //    this.APIKey = 'WdyVideo'
    //    yield next
    //},
    // 获取案例
    'get+/video/:position': function*(next) {
        if (this.params.position === 'all') {
            this.model = wdyVideo.filter({})
        } else {
            this.model = wdyVideo.filter({
                position: this.params.position
            })
        }

        _.each(this.request.query, (v, k) => {
            if (k.indexOf('pageSize') !== -1) {
                let limit = 0
                limit = Number(this.request.query['pageIndex'] || '1') - 1
                if (limit < 0) {
                    limit = 0
                }
                this.model = this.model.skip(limit * Number(this.request.query["pageSize"] || '10'));
                this.model = this.model.limit(Number(this.request.query["pageSize"] || '10'));
            } else if(k.indexOf('videoType') !== -1) {
                this.model = wdyVideo.filter({
                    type: Number(this.request.query['videoType'])
                })
            } else if (k.indexOf('sort') !== -1) {
                if (this.request.query["sort"] == "date") {
                    this.model = this.model.orderBy(r.desc('createTime'));
                } else if (this.request.query["sort"] == "hits") {
                    this.model = this.model.orderBy(r.desc('hitNum'));
                }
            }
        })

        this.APIKey = 'WdyVideo'
        yield next
    },

    // 微电影详情
    'get+/video/detail/:id': function*(next) {
        this.model = wdyVideo.filter({
            id: parseInt(this.params.id)
        })

        this.APIKey = 'WdyVideo'
        yield next
    }

}
export default wdyVideoApi
