/**
 * Created by chenjianjun on 16/3/10.
 */

import db from '../cache/db/dbUtil'
import mem from '../cache/mem/manager'

const DBUtil = db.Instance()
const MEMUtil = mem.Instance()

// 缓存管理API
const cacheManagerApi = {

  // 更新db缓存
  'get+/dbUpdateCache/:moduleName': function*(next) {
    DBUtil.updateDBCacheData(this.params.moduleName);
    yield next
  },

  // 更新内存缓存
  'get+/memUpdateCache': function*(next) {
    MEMUtil.clearCache();
    yield next
  },

  // 更新缓存
  'get+/updateCache/:moduleName': function*(next) {
    DBUtil.updateDBCacheData(this.params.moduleName);
    MEMUtil.clearCache();
    yield next
  }
}

export default cacheManagerApi
