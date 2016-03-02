/**
 * Created by chenjianjun on 16/2/26.
 */
import _ from 'lodash'
import env from '../cache/db/config'
let r = env.Thinky.r

import weddingClass from '../cache/db/module/weddingClass.js'

// 婚礼课堂API
const weddingClassApi = {

    // 获取婚礼课堂列表
    //'get+/weddingroom/all': function*(next) {
    //    this.model = weddingClass
    //    this.APIKey = 'WeddingClass'
    //    yield next
    //},
    'get+/weddingroom/:position': function*(next) {
        if (this.params.position === 'all') {
            this.model = weddingClass.filter({})
        } else {
            this.model = weddingClass.filter({
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
            } else if(k.indexOf('moduleTypeId') !== -1) {
                // 模块类型
                this.model = this.model.filter({
                    moduleType: parseInt(this.request.query["moduleTypeId"])
                });
            }
        })

        this.APIKey = 'WeddingClass'
        yield next
    },
    // 获取婚礼课堂详情
    'get+/weddingroom/detail/:id': function*(next) {
        this.model = weddingClass.filter({
            id: parseInt(this.params.id)
        })

        this.APIKey = 'WeddingClass'
        yield next
    }

}

export default weddingClassApi
