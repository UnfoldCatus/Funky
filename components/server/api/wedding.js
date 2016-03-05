/**
 * Created by chenjianjun on 16/2/26.
 */
import _ from 'lodash'
import env from '../cache/config'
let r = env.Thinky.r

import cases from '../cache/db/module/cases.js'
import case3D from '../cache/db/module/case3D.js'
import followPhoto from '../cache/db/module/followPhoto.js'
import followPhotoSeason from '../cache/db/module/followPhotoSeason.js'
import followVideo from '../cache/db/module/followVideo.js'
import followVideoSeason from '../cache/db/module/followVideoSeason.js'
import f4Camera from '../cache/db/module/f4/camera.js'
import f4Dresser from '../cache/db/module/f4/dresser.js'
import f4Host from '../cache/db/module/f4/host.js'
import f4Photographer from '../cache/db/module/f4/photographer.js'
import f4Team from '../cache/db/module/f4/team.js'

// 婚礼策划资源API
const weddingApi = {

    // 获取实景案例列表
    //'get+/cases/all': function*(next) {
    //    this.model = cases
    //    this.APIKey = 'Cases'
    //    yield next
    //},
    'get+/cases/:position': function*(next) {
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
            } else if(k.indexOf('styleId') !== -1) {
                // 风格 TODO:服务器返回的是字符串如"123,275,468,",这里采用"%id,%"的方式匹配
                this.model = this.model.filter(r.row("caseStyle").match(".*?"+this.request.query['styleId']+","+".*?"));
            } else if(k.indexOf('minPrice') !== -1) {
                // 最低价格
                this.model = this.model.filter(r.row('totalCost').gt(Number(this.request.query['minPrice'])));
            } else if(k.indexOf('maxPrice') !== -1) {
                // 最高价格
                this.model = this.model.filter(r.row('totalCost').lt(Number(this.request.query['maxPrice'])));
            }
        })

        this.APIKey = 'Cases'
        yield next
    },
    // 获取实景案例详情
    'get+/cases/detail/:id': function*(next) {
        this.model = cases.filter({
            id: parseInt(this.params.id)
        })

        this.APIKey = 'Cases'
        yield next
    },

    // 获取3D案例列表
    //'get+/case3D/all': function*(next) {
    //    this.model = case3D
    //    this.APIKey = 'Cases3D'
    //    yield next
    //},
    'get+/case3D/:position': function*(next) {
        if (this.params.position === 'all') {
            this.model = case3D.filter({})
        } else {
            this.model = case3D.filter({
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

        this.APIKey = 'Cases3D'
        yield next
    },
    // 获取3D案例详情
    'get+/case3D/detail/:id': function*(next) {
        this.model = case3D.filter({
            id: parseInt(this.params.id)
        })

        this.APIKey = 'Cases3D'
        yield next
    },

    // 婚礼跟拍列表
    //'get+/followPhoto/all': function*(next) {
    //    this.model = followPhoto
    //    this.APIKey = 'FollowPhoto'
    //    yield next
    //},
    'get+/followPhoto/:position': function*(next) {
        if (this.params.position === 'all') {
            this.model = followPhoto.filter({})
        } else {
            this.model = followPhoto.filter({
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

        this.APIKey = 'FollowPhoto'
        yield next
    },
    // 获取跟拍详情
    'get+/followPhoto/detail/:id': function*(next) {
        this.model = followPhoto.filter({
            id: parseInt(this.params.id)
        })

        this.APIKey = 'FollowPhoto'
        yield next
    },

    // 婚礼跟拍分季
    //'get+/followPhotoSeason/all': function*(next) {
    //    this.model = followPhotoSeason
    //    this.APIKey = 'FollowPhotoSeason'
    //    yield next
    //},
    'get+/followPhotoSeason/:position': function*(next) {
        if (this.params.position === 'all') {
            this.model = followPhotoSeason.filter({})
        } else {
            this.model = followPhotoSeason.filter({
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

        this.APIKey = 'FollowPhotoSeason'
        yield next
    },

    // 婚礼视频列表
    //'get+/followVideo/all': function*(next) {
    //    this.model = followVideo
    //    this.APIKey = 'FollowVideo'
    //    yield next
    //},
    'get+/followVideo/:position': function*(next) {
        if (this.params.position === 'all') {
            this.model = followVideo.filter({})
        } else {
            this.model = followVideo.filter({
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

        this.APIKey = 'FollowVideo'
        yield next
    },
    // 婚礼视频详情
    'get+/followVideo/detail/:id': function*(next) {
        this.model = followVideo.filter({
            id: parseInt(this.params.id)
        })

        this.APIKey = 'FollowVideo'
        yield next
    },

    // 婚礼视频分季
    //'get+/followVideoSeason/all': function*(next) {
    //    this.model = followVideoSeason
    //    this.APIKey = 'FollowVideoSeason'
    //    yield next
    //},
    'get+/followVideoSeason/:position': function*(next) {
        if (this.params.position === 'all') {
            this.model = followVideoSeason.filter({})
        } else {
            this.model = followVideoSeason.filter({
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

        this.APIKey = 'FollowVideoSeason'
        yield next
    },

    // 四大金刚作品
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

    // 获取四大金刚摄像师作品
    'get+/f4/dresser': function*(next) {
        this.model = f4Dresser.filter({
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

        this.APIKey = 'F4Dresser'
        yield next
    },

    // 获取四大金刚摄像师作品
    'get+/f4/host': function*(next) {
        this.model = f4Host.filter({
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

        this.APIKey = 'F4Host'
        yield next
    },

    // 获取四大金刚摄像师作品
    'get+/f4/dresser': function*(next) {
        this.model = f4Photographer.filter({
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

        this.APIKey = 'F4Photographer'
        yield next
    },

    // 四大金刚作品——特色项目
    'get+/api/f4/team': function*(next) {
        this.model = f4Team.filter({
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

        this.APIKey = 'F4Team'
        yield next
    },

}

export default weddingApi
