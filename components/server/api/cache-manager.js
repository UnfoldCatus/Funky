/**
 * Created by chenjianjun on 16/3/10.
 */

import db from '../cache/db/dbUtil'
import mem from '../cache/mem/manager'

const DBUtil = db.Instance()
const MEMUtil = mem.Instance()

// 缓存管理API
const cacheManagerApi = {

  // 更新内存缓存
  'get+/memUpdateCache': function*(next) {
    MEMUtil.clearCache();
    this.body = 'ok'
  },

  // 更新缓存
  'get+/updateCache/:moduleName': function*(next) {
    if (DBUtil.isCacheDataUsable(this.params.moduleName)) {
      DBUtil.updateDBCacheData(this.params.moduleName);
      MEMUtil.clearCache();
      this.body = 'ok'
    } else {
      this.body = 'no'
    }
  }
}

export default cacheManagerApi
