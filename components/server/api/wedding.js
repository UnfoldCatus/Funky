/**
 * Created by chenjianjun on 16/2/26.
 */
import _ from 'lodash'
import env from '../cache/config'
let r = env.Thinky.r

import cases from '../cache/db/module/cases.js'
import cases3D from '../cache/db/module/cases3D.js'
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
    'get+/cases/:position': function*(next) {
        this.APIKey = 'Cases'
        if (this.params.position === 'all') {
            this.model = cases.filter({})
        } else {
            this.model = cases.filter({
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
    // 获取实景案例详情,根据资源ID查询
    'get+/cases/detail/:id': function*(next) {
        this.model = cases.filter({
            id: parseInt(this.params.id)
        })

        this.APIKey = 'Cases'
        yield next
    },

    // 根据资源Id查询案例详情
    'get+/detailByResourceId/:resourceId': function*(next) {
        this.model = cases.filter({
            caseId: parseInt(this.params.resourceId)
        }).skip(0).limit(1)

        this.APIKey = 'Cases'
        yield next
    },

    // 获取3D案例列表
    'get+/case3D/:position': function*(next) {
        this.APIKey = 'Cases3D'
        if (this.params.position === 'all') {
            this.model = cases3D.filter({})
        } else {
            this.model = cases3D.filter({
                position: this.params.position
            })
        }
        this.model = this.model.orderBy(r.desc('weight'))

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
    // 获取3D案例详情
    'get+/case3D/detail/:id': function*(next) {
        this.model = cases3D.filter({
            id: parseInt(this.params.id)
        })

        this.APIKey = 'Cases3D'
        yield next
    },

    // 婚礼跟拍列表
    'get+/followPhoto/:position': function*(next) {
        this.APIKey = 'FollowPhoto'
        if (this.params.position === 'all') {
            this.model = followPhoto.filter({})
        } else {
            this.model = followPhoto.filter({
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
                    seasonId: Number(this.request.query['seasonId'])
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
    // 获取跟拍详情
    'get+/followPhoto/detail/:id': function*(next) {
        this.model = followPhoto.filter({
            id: parseInt(this.params.id)
        })

        this.APIKey = 'FollowPhoto'
        yield next
    },

    // 婚礼跟拍分季
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
    'get+/followVideo/:position': function*(next) {
        this.APIKey = 'FollowVideo'
        if (this.params.position === 'all') {
            this.model = followVideo.filter({})
        } else {
            this.model = followVideo.filter({
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
                    seasonId: Number(this.request.query['seasonId'])
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
    // 婚礼视频详情
    'get+/followVideo/detail/:id': function*(next) {
        this.model = followVideo.filter({
            id: parseInt(this.params.id)
        })

        this.APIKey = 'FollowVideo'
        yield next
    },

    // 婚礼视频分季
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
        this.APIKey = 'F4Camera'
        this.model = f4Camera.filter({})

        let pageIndex = 0;
        let pageSize = 10;
        _.each(this.request.query, (v, k) => {
            if (k.indexOf('pageIndex') !== -1) {
                pageIndex = parseInt(this.request.query['pageIndex']) - 1
                if (pageIndex < 0) {
                    pageIndex = 0
                }
            } else if(k.indexOf('pageSize') !== -1) {
                pageSize = parseInt(this.request.query['pageSize'])
                if (pageSize < 0) {
                    pageSize = 10
                }
            } else if(k.indexOf('minPrice') !== -1) {
                // 最低价格
                this.model = this.model.filter(r.row('salePrice').gt(parseInt(this.request.query['minPrice'])));
            } else if(k.indexOf('maxPrice') !== -1) {
                // 最高价格
                this.model = this.model.filter(r.row('salePrice').lt(parseInt(this.request.query['maxPrice'])));
            }
        })

        try {
            let all = yield this.model
            this.count = all.length || 0
        } catch (e) {
            this.count = 0
        }

        this.model = this.model.skip(pageIndex * pageSize);
        this.model = this.model.limit(pageSize);
        //this.model = this.model.orderBy(function (row) { return r.random(); });

        yield next
    },

    // 获取四大金刚化妆师作品
    'get+/f4/dresser': function*(next) {
        this.APIKey = 'F4Dresser'
        this.model = f4Dresser.filter({})

        let pageIndex = 0;
        let pageSize = 10;
        _.each(this.request.query, (v, k) => {
            if (k.indexOf('pageIndex') !== -1) {
                pageIndex = parseInt(this.request.query['pageIndex']) - 1
                if (pageIndex < 0) {
                    pageIndex = 0
                }
            } else if(k.indexOf('pageSize') !== -1) {
                pageSize = parseInt(this.request.query['pageSize'])
                if (pageSize < 0) {
                    pageSize = 10
                }
            } else if(k.indexOf('minPrice') !== -1) {
                // 最低价格
                this.model = this.model.filter(r.row('salePrice').gt(parseInt(this.request.query['minPrice'])));
            } else if(k.indexOf('maxPrice') !== -1) {
                // 最高价格
                this.model = this.model.filter(r.row('salePrice').lt(parseInt(this.request.query['maxPrice'])));
            }
        })

        try {
            let all = yield this.model
            this.count = all.length || 0
        } catch (e) {
            this.count = 0
        }

        this.model = this.model.skip(pageIndex * pageSize);
        this.model = this.model.limit(pageSize);
        //this.model = this.model.orderBy(function (row) { return r.random(); });

        yield next
    },

    // 获取四大金刚主持人作品
    'get+/f4/host': function*(next) {
        this.APIKey = 'F4Host'
        this.model = f4Host.filter({})

        let pageIndex = 0;
        let pageSize = 10;
        _.each(this.request.query, (v, k) => {
            if (k.indexOf('pageIndex') !== -1) {
                pageIndex = parseInt(this.request.query['pageIndex']) - 1
                if (pageIndex < 0) {
                    pageIndex = 0
                }
            } else if(k.indexOf('pageSize') !== -1) {
                pageSize = parseInt(this.request.query['pageSize'])
                if (pageSize < 0) {
                    pageSize = 10
                }
            } else if(k.indexOf('minPrice') !== -1) {
                // 最低价格
                this.model = this.model.filter(r.row('salePrice').gt(parseInt(this.request.query['minPrice'])));
            } else if(k.indexOf('maxPrice') !== -1) {
                // 最高价格
                this.model = this.model.filter(r.row('salePrice').lt(parseInt(this.request.query['maxPrice'])));
            }
        })

        try {
            let all = yield this.model
            this.count = all.length || 0
        } catch (e) {
            this.count = 0
        }

        this.model = this.model.skip(pageIndex * pageSize);
        this.model = this.model.limit(pageSize);
        //this.model = this.model.orderBy(function (row) { return r.random(); });

        yield next
    },

    // 获取四大金刚摄影师作品
    'get+/f4/photographer': function*(next) {
        this.APIKey = 'F4Photographer'
        this.model = f4Photographer.filter({})

        let pageIndex = 0;
        let pageSize = 10;
        _.each(this.request.query, (v, k) => {
            if (k.indexOf('pageIndex') !== -1) {
                pageIndex = parseInt(this.request.query['pageIndex']) - 1
                if (pageIndex < 0) {
                    pageIndex = 0
                }
            } else if(k.indexOf('pageSize') !== -1) {
                pageSize = parseInt(this.request.query['pageSize'])
                if (pageSize < 0) {
                    pageSize = 10
                }
            } else if(k.indexOf('minPrice') !== -1) {
                // 最低价格
                this.model = this.model.filter(r.row('salePrice').gt(parseInt(this.request.query['minPrice'])));
            } else if(k.indexOf('maxPrice') !== -1) {
                // 最高价格
                this.model = this.model.filter(r.row('salePrice').lt(parseInt(this.request.query['maxPrice'])));
            }
        })

        try {
            let all = yield this.model
            this.count = all.length || 0
        } catch (e) {
            this.count = 0
        }

        this.model = this.model.skip(pageIndex * pageSize);
        this.model = this.model.limit(pageSize);
        //this.model = this.model.orderBy(function (row) { return r.random(); });

        yield next
    },

    // 四大金刚作品——特色项目
    'get+/api/f4/team': function*(next) {
        this.APIKey = 'F4Team'
        this.model = f4Team.filter({})

        let pageIndex = 0;
        let pageSize = 10;
        _.each(this.request.query, (v, k) => {
            if (k.indexOf('pageIndex') !== -1) {
                pageIndex = parseInt(this.request.query['pageIndex']) - 1
                if (pageIndex < 0) {
                    pageIndex = 0
                }
            } else if(k.indexOf('pageSize') !== -1) {
                pageSize = parseInt(this.request.query['pageSize'])
                if (pageSize < 0) {
                    pageSize = 10
                }
            } else if(k.indexOf('minPrice') !== -1) {
                // 最低价格
                this.model = this.model.filter(r.row('salePrice').gt(parseInt(this.request.query['minPrice'])));
            } else if(k.indexOf('maxPrice') !== -1) {
                // 最高价格
                this.model = this.model.filter(r.row('salePrice').lt(parseInt(this.request.query['maxPrice'])));
            }
        })

        try {
            let all = yield this.model
            this.count = all.length || 0
        } catch (e) {
            this.count = 0
        }

        this.model = this.model.skip(pageIndex * pageSize);
        this.model = this.model.limit(pageSize);
        //this.model = this.model.orderBy(function (row) { return r.random(); });

        yield next
    },

}

export default weddingApi
