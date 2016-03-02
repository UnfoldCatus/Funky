/**
 * Created by chenjianjun on 16/2/26.
 */
import supplies from '../cache/db/module/supplies.js'
import _ from 'lodash'
import env from '../cache/db/config'
let r = env.Thinky.r

// 婚车用品

const suppliesApi = {

    //'get+/weddingsupplies/all': function*(next) {
    //    this.model = supplies
    //    this.APIKey = 'Supplies'
    //    yield next
    //},
    // 获取案例
    'get+/weddingsupplies/:position': function*(next) {
        if (this.params.position === 'all') {
            this.model = supplies.filter({})
        } else {
            this.model = supplies.filter({
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
            else if(k.indexOf('weddingSuppliesTypeId') !== -1) {
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

        this.APIKey = 'Supplies'
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
