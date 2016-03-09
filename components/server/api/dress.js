/**
 * Created by chenjianjun on 16/2/26.
 */
import dress from '../cache/db/module/dress.js'
import _ from 'lodash'
import env from '../cache/config'
let r = env.Thinky.r

// 婚纱礼服

const dressApi = {

    // 获取礼服详情
    'get+/dress/:position': function*(next) {

        if (this.params.position === 'all') {
            this.model = dress.filter({})
        } else {
            this.model = dress.filter({
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
            }
            else if(k.indexOf('brandId') !== -1) {
                this.model = this.model.filter({
                    brandId: parseInt(this.request.query["brandId"])})
            }
            else if(k.indexOf('typeId') !== -1) {
                this.model = this.model.filter({
                    typeId: parseInt(this.request.query["typeId"])})
            }
        })

        this.model = this.model.orderBy(r.desc('weight'));

        this.APIKey = 'Dress'
        yield next
    }

}
export default dressApi
