/**
 * Created by chenjianjun on 16/2/26.
 */
import _ from 'lodash'
import env from '../cache/db/config'
let r = env.Thinky.r

import sample from '../cache/db/module/sample.js'
import pringles from '../cache/db/module/pringles.js'
import pringlesSeason from '../cache/db/module/pringlesSeason.js'
import recordVideo from '../cache/db/module/recordVideo.js'
import recordVideoSeason from '../cache/db/module/recordVideoSeason.js'
import suite from '../cache/db/module/suite.js'

// 婚纱摄影资源API
const photoApi = {

    // 样片列表
    'get+/sample/all': function*(next) {
        this.model = sample
        this.APIKey = 'Sample'
        let all = yield sample.filter({})
        this.count = all.length
        yield next
    },
    'get+/sample/:position': function*(next) {
        this.APIKey = 'Sample'
        //对position为all到情况要处理
        if (this.params.position === 'all') {
            this.model = sample.filter({})
        } else {
            this.model = sample.filter({
                position: this.params.position
            })

        }
        let all = yield this.model
        this.count = all.length
        this.model = this.model.orderBy(r.desc('weight'))

        _.each(this.request.query, (v, k) => {
            if (k.indexOf('min') !== -1 || k.indexOf('max') !== -1) {
                console.log(v);
            } else if (k.indexOf('pageSize') !== -1) {
                let limit = 0
                limit = Number(this.request.query['pageIndex'] || '1') - 1
                if (limit < 0) {
                    limit = 0
                }
                this.model = this.model.skip(limit * Number(this.request.query["pageSize"] || '10')).limit(Number(this.request.query["pageSize"] || '10'))
            } else if(k.indexOf('seasonId') !== -1) {
                this.model = this.model.filter({
                    seasonId:Number(this.request.query['seasonId'])
                })
            }

        })

        yield next
    },
    // 样片详情
    'get+/sample/detail/:id':function*(next){
        this.model = sample.filter({
            id:parseInt(this.params.id)
        })
        this.APIKey = 'Sample'
        let all = yield this.model
        this.count = all.length
        yield next
    },

    // 客片列表
    'get+/pringles/all': function*(next) {
        this.model = pringles
        this.APIKey = 'Pringles'
        let all = yield pringles.filter({})
        this.count = all.length
        yield next
    },
    'get+/pringles/:position': function*(next) {

        this.APIKey = 'Pringles'

        if (this.params.position === 'all') {
            this.model = pringles.filter({})
        } else {
            this.model = pringles.filter({
                position: this.params.position
            })

        }
        let all = yield this.model
        this.count = all.length

        this.model = this.model.orderBy(r.desc('weight'))

        _.each(this.request.query, (v, k) => {
            if (k.indexOf('min') !== -1 || k.indexOf('max') !== -1) {
                console.log(v);
            } else if (k.indexOf('pageSize') !== -1) {
                let limit = 0
                limit = Number(this.request.query['pageIndex'] || '1') - 1
                if (limit < 0) {
                    limit = 0
                }
                this.model = this.model.skip(limit * Number(this.request.query["pageSize"] || '10'));
                this.model = this.model.limit(Number(this.request.query["pageSize"] || '10'));
            } else if (k.indexOf('seasonId') !== -1) {
                this.model = this.model.filter({
                    seasonId: Number(this.request.query['seasonId'])
                })
            }
        })


        yield next
    },
    // 客片详情
    'get+/pringles/detail/:id': function*(next) {
        this.model = pringles.filter({
            id: parseInt(this.params.id)
        })
        this.APIKey = 'Pringles'
        let all = yield this.model
        this.count = all.length
        yield next
    },

    // 客片分季列表
    'get+/pringlesSeason/all': function*(next) {
        this.model = pringlesSeason
        this.APIKey = 'PringlesSeason'
        yield next
    },
    'get+/pringlesSeason/:position': function*(next) {
        if (this.params.position === 'all') {
            this.model = cases.filter({})
        } else {
            this.model = cases.filter({
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
        })

        this.APIKey = 'PringlesSeason'
        yield next
    },

    // 婚纱摄影-套系列表
    'get+/suite/all': function*(next) {
        this.model = suite
        this.APIKey = 'Suite'
        let all = yield suite.filter({})
        this.count = all.length
        yield next
    },
    'get+/suite/:position': function*(next) {
        this.APIKey = 'Suite'
        if (this.params.position === 'all') {
            this.model = suite.filter({})
        } else {
            this.model = suite.filter({
                position: this.params.position
            })
        }
        let all = yield this.model
        this.count = all.length

        this.model = this.model.orderBy(r.desc('weight'))
        _.each(this.request.query, (v, k) => {
            if (k.indexOf('min') !== -1 || k.indexOf('max') !== -1) {
                console.log(v);
            } else if (k.indexOf('pageSize') !== -1) {
                let limit = 0
                limit = Number(this.request.query['pageIndex'] || '1') - 1
                if (limit < 0) {
                    limit = 0
                }
                this.model = this.model.skip(limit * Number(this.request.query["pageSize"] || '10'));
                this.model = this.model.limit(Number(this.request.query["pageSize"] || '10'));
            } else if (k.indexOf('seasonId') !== -1) {
                this.model = this.model.filter({
                    seasonId: Number(this.request.query['seasonId'])
                })
            }
        })
        yield next
    },
    // 婚纱摄影-套系详情
    'get+/suite/detail/:id': function*(next) {
        this.model = suite.filter({
            id: parseInt(this.params.id)
        })
        this.APIKey = 'Suite'
        let all = yield this.model
        this.count = all.length
        yield next
    },

    // 婚纱摄影-纪实MV列表
    'get+/recordVideo/all': function*(next) {
        this.model = recordVideo
        this.APIKey = 'RecordVideo'
        yield next
    },
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
    // 婚纱摄影-纪实MV列表详情
    'get+/recordVideo/detail/:id': function*(next) {
        this.model = recordVideo.filter({
            id: parseInt(this.params.id)
        })

        this.APIKey = 'RecordVideo'
        yield next
    },

    // 婚纱摄影-纪实MV分级季列表
    'get+/recordVideoSeason/all': function*(next) {
        this.model = recordVideoSeason
        this.APIKey = 'RecordVideoSeason'
        yield next
    },
    'get+/recordVideoSeason/:position': function*(next) {
        if (this.params.position === 'all') {
            this.model = recordVideoSeason.filter({})
        } else {
            this.model = recordVideoSeason.filter({
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
        })

        this.APIKey = 'RecordVideoSeason'
        yield next
    }
}

export default photoApi
