/**
 * Created by chenjianjun on 16/2/26.
 */
import _ from 'lodash'
import env from '../cache/config'
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
            } else if(k.indexOf('exteriorId') !== -1) {// 外景ID
                // 风格 TODO:服务器返回的是字符串如"123,275,468,",这里采用"%id,%"的方式匹配
                this.model = this.model.filter(r.row("exterior").match(".*?"+this.request.query['exteriorId']+","+".*?"));
            } else if(k.indexOf('shootStyleId') !== -1) {// 风格ID
                // 风格 TODO:服务器返回的是字符串如"123,275,468,",这里采用"%id,%"的方式匹配
                this.model = this.model.filter(r.row("shootingStyle").match(".*?"+this.request.query['shootStyleId']+","+".*?"));
            } else if(k.indexOf('sampleType') !== -1) {
                // 样片类型 0:婚纱摄影 1:艺术照 2:全家福
                this.model = this.model.filter({sampleType:parseInt(this.request.query['sampleType'])})
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
    // 样片详情
    'get+/sample/detail/:id':function*(next){
        this.model = sample.filter({
            id:parseInt(this.params.id)
        })
        this.APIKey = 'Sample'
        yield next
    },

    // 客片列表
    'get+/pringles/:position': function*(next) {
        this.APIKey = 'Pringles'
        if (this.params.position === 'all') {
            this.model = pringles.filter({})
        } else {
            this.model = pringles.filter({
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
            } else if (k.indexOf('seasonId') !== -1) {
                this.model = this.model.filter({
                    seasonId: parseInt(this.request.query['seasonId'])
                })
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
    // 客片详情
    'get+/pringles/detail/:id': function*(next) {
        this.model = pringles.filter({
            id: parseInt(this.params.id)
        })
        this.APIKey = 'Pringles'
        yield next
    },

    // 客片分季列表
    'get+/pringlesSeason/:position': function*(next) {
        if (this.params.position === 'all') {
            this.model = pringlesSeason.filter({})
        } else {
            this.model = pringlesSeason.filter({
                position: this.params.position
            })
        }
        this.model = this.model.orderBy(r.desc('weight'))

        _.each(this.request.query, (v, k) => {
            if (k.indexOf('pageSize') !== -1) {
                let limit = 0
                limit = parseInt(this.request.query['pageIndex'] || '1') - 1
                if (limit < 0) {
                    limit = 0
                }
                this.model = this.model.skip(limit * parseInt(this.request.query["pageSize"] || '10'));
                this.model = this.model.limit(parseInt(this.request.query["pageSize"] || '10'));
            }
        })

        this.APIKey = 'PringlesSeason'
        yield next
    },

    // 婚纱摄影-套系列表
    'get+/suite/:position': function*(next) {
        this.APIKey = 'Suite'
        if (this.params.position === 'all') {
            this.model = suite.filter({})
        } else {
            this.model = suite.filter({
                position: this.params.position
            })
        }

        try {
            let all = yield this.model
            this.count = all.length
        } catch (e) {
            this.count = 0
        }

        this.model = this.model.orderBy(r.desc('weight'))
        _.each(this.request.query, (v, k) => {
            if (k.indexOf('pageSize') !== -1) {
                let limit = 0
                limit = parseInt(this.request.query['pageIndex'] || '1') - 1
                if (limit < 0) {
                    limit = 0
                }
                this.model = this.model.skip(limit * parseInt(this.request.query["pageSize"] || '10'));
                this.model = this.model.limit(parseInt(this.request.query["pageSize"] || '10'));
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
        yield next
    },

    // 婚纱摄影-纪实MV列表
    'get+/recordVideo/:position': function*(next) {
        this.APIKey = 'RecordVideo'
        if (this.params.position === 'all') {
            this.model = recordVideo.filter({})
        } else {
            this.model = recordVideo.filter({
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
            } else if(k.indexOf('seasonId') !== -1) {
                // 分季ID
                this.model = this.model.filter({
                    seasonId: parseInt(this.request.query['seasonId'])
                });
            } else if (k.indexOf('sort') !== -1) {
                if (this.request.query["sort"] == "date") {
                    this.model = this.model.orderBy(r.desc('createTime'));
                } else if (this.request.query["sort"] == "hits") {
                    this.model = this.model.orderBy(r.desc('hitNum'));
                }
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
    // 婚纱摄影-纪实MV列表详情
    'get+/recordVideo/detail/:id': function*(next) {
        this.model = recordVideo.filter({
            id: parseInt(this.params.id)
        })

        this.APIKey = 'RecordVideo'
        yield next
    },

    // 婚纱摄影-纪实MV分级季列表
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
                limit = parseInt(this.request.query['pageIndex'] || '1') - 1
                if (limit < 0) {
                    limit = 0
                }
                this.model = this.model.skip(limit * parseInt(this.request.query["pageSize"] || '10'));
                this.model = this.model.limit(parseInt(this.request.query["pageSize"] || '10'));
            }
        })

        this.APIKey = 'RecordVideoSeason'
        yield next
    }
}

export default photoApi
