/**
 * Created by chenjianjun on 16/2/26.
 */
import supplies from '../cache/db/module/supplies.js'
import _ from 'lodash'
import env from '../cache/config'
let r = env.Thinky.r

// 婚车用品

const suppliesApi = {

    // 用品列表
    'get+/weddingsupplies/:position': function*(next) {

        this.APIKey = 'Supplies'
        if (this.params.position === 'all') {
            this.model = supplies.filter({})
        } else {
            this.model = supplies.filter({position: this.params.position})
        }

        let pageIndex = 0;
        let pageSize = 10;
        _.each(this.request.query, (v, k) => {
            if (k.indexOf('pageIndex') !== -1) {
                pageIndex = parseInt(this.request.query['pageIndex'] || '1') - 1
                if (pageIndex < 0) {
                    pageIndex = 0
                }
            } else if(k.indexOf('pageSize') !== -1) {
                pageSize = parseInt(this.request.query['pageSize'] || '1')
                if (pageSize < 0) {
                    pageSize = 1
                }
            } else if(k.indexOf('weddingSuppliesTypeId') !== -1) {
                // 用品类型
                this.model = this.model.filter({
                    suppliesType: parseInt(this.request.query["weddingSuppliesTypeId"])
                });
            } else if(k.indexOf('brandId') !== -1) {
                // 用品品牌
                this.model = this.model.filter({
                    brand: parseInt(this.request.query["brandId"])
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
        this.model = this.model.skip(pageIndex * pageSize).limit(pageSize);

        yield next
    },

    // 获取案例详情
    'get+/weddingsupplies/detail/:id': function*(next) {
        this.model = supplies.filter({
            id: parseInt(this.params.id)
        })

        this.APIKey = 'Supplies'
        yield next
    }

}
export default suppliesApi
