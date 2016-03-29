/**
 * Created by chenjianjun on 16/2/26.
 */
import _ from 'lodash'
import env from '../cache/config'
let r = env.Thinky.r

import weddingClass from '../cache/db/module/weddingClass.js'

// 婚礼课堂API
const weddingClassApi = {

    // 获取婚礼课堂列表
    'get+/weddingroom/:position': function*(next) {
        this.APIKey = 'WeddingClass'
        if (this.params.position === 'all') {
            this.model = weddingClass.filter({})
        } else {
            this.model = weddingClass.filter({
                position: this.params.position
            })
        }

        let pageIndex = 0;
        let pageSize = 10;
        _.each(this.request.query, (v, k) => {
            if (k.indexOf('pageIndex') !== -1) {
                pageIndex = parseInt(this.request.query['pageIndex'] || '1') - 1
                if (pageIndex < 0) {
                    pageIndex = 0
                }
            } else if (k.indexOf('pageSize') !== -1) {
                pageSize = parseInt(this.request.query['pageSize'] || '1')
                if (pageSize < 0) {
                    pageSize = 1
                }
            }  else if(k.indexOf('moduleTypeId') !== -1) {
                // 模块类型
                this.model = this.model.filter({
                    moduleType: parseInt(this.request.query["moduleTypeId"])
                });
            }
        })

        try {
            let all = yield this.model
            this.count = all.length || 0
        } catch (e) {
            this.count = 0
        }

        this.model = this.model.orderBy(r.desc('weight'))
        this.model = this.model.skip(pageIndex * pageSize).limit(pageSize)

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
