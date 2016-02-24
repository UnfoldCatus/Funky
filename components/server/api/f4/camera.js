/**
 * Created by chenjianjun on 16/2/24.
 */
import f4Camera from '../../cache/db/module/f4/camera.js'
import _ from 'lodash'
import env from '../../cache/db/config'
let r = env.Thinky.r

// 婚庆策划-四大金刚-摄像师作品API

const f4CameraApi = {
    // 获取四大金刚摄像师作品
    'get+/f4/camera': function*(next) {
        this.model = f4Camera.filter({
            position: this.params.position
        })

        _.each(this.request.query, (v, k) => {
            if (k.indexOf('pageSize') !== -1) {
                let limit = 0
                limit = Number(this.request.query['pageIndex'] || '1') - 1
                if (limit < 0) {
                    limit = 0
                }
                this.model = this.model.skip(limit * Number(this.request.query["pageSize"] || '10'));
                this.model = this.model.limit(Number(this.request.query["pageSize"] || '10'));
            } else if(k.indexOf('minPrice') !== -1) {
                // 最低价格
                this.model = this.model.filter(r.row('price').gt(Number(this.request.query['minPrice'])));
            } else if(k.indexOf('maxPrice') !== -1) {
                // 最高价格
                this.model = this.model.filter(r.row('price').lt(Number(this.request.query['maxPrice'])));
            }
        })

        this.model = this.model.orderBy(function (row) { return r.random(); });

        this.APIKey = 'F4Camera'
        yield next
    },
}
export default f4CameraApi
