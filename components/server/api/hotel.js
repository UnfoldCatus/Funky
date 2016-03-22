import hotel from '../cache/db/module/hotel.js'
import banquetHall from '../cache/db/module/banquetHall.js'
import _ from 'lodash'
import env from '../cache/config'
let r = env.Thinky.r

const hotelApi = {

  // 酒店列表
  'get+/hotel/:position': function*(next) {

    this.APIKey = 'Hotel'
    if (this.params.position === 'all') {this.model = hotel.filter({})
    } else {
      this.model = hotel.filter({position: this.params.position})
    }

    /* 匹配搜索条件 */
    // 是否有礼包查询
    if(this.request.query["isGift"]) {
      this.model = this.model.filter({isGift: parseInt(this.request.query['isGift'])})
    }
    // 是否有优惠查询
    if(this.request.query["isDiscount"]) {
      this.model = this.model.filter({isDiscount:parseInt(this.request.query["isDiscount"])})
    }
    // 市区ID
    if(this.request.query["cityId"]) {
      this.model = this.model.filter({cityId:parseInt(this.request.query["cityId"])})
    }
    // 酒店名称模糊
    if(this.request.query["hotelName"]) {
      this.model = this.model.filter(r.row('name').match(".*?"+this.request.query['hotelName']+".*?"));
    }
    // 酒店类型
    if(this.request.query["hotelType"]) {
      this.model = this.model.filter({type: parseInt(this.request.query["hotelType"])});
    }
    // 最小容客桌数
    if(this.request.query["minTable"]) {
      this.model = this.model.filter(r.row("maxTableNum").gt(parseInt(this.request.query["minTable"])));
    }
    // 最大容客桌数
    if(this.request.query["maxTable"]) {
      this.model = this.model.filter(r.row("maxTableNum").lt(parseInt(this.request.query["maxTable"])));
    }

    // 按照价格搜索
    if(this.request.query["minPrice"]&&this.request.query["maxPrice"]) {
      // 同时存在最小，最大价格
      var minPrice = parseInt(this.request.query["minPrice"]);
      var maxPrice = parseInt(this.request.query["maxPrice"]);
      // 最小价格落在区间内 或者最大价格落在区间内
      this.model = this.model.filter(r.row("lowestConsumption").ge(minPrice)
        .and(r.row("lowestConsumption").le(maxPrice))
        .or(r.row("highestConsumption").ge(minPrice)
          .and(r.row("highestConsumption").le(maxPrice))));
    }
    else if(this.request.query["minPrice"]) {
      // 只有最小价格
      var minPrice = parseInt(this.request.query["minPrice"]);
      this.model = this.model.filter(r.row("lowestConsumption").gt(minPrice));
    }
    else if(this.request.query["maxPrice"]) {
      // 只有最大价格
      var maxPrice = parseInt(this.request.query["minPrice"]);
      this.model = this.model.filter(r.row("highestConsumption").lt(maxPrice));
    }

    // 获取一下总数
    try {
      let all = yield this.model
      this.count = all.length || 0
    } catch (e) {
      this.count = 0
    }

    // 排序
    if(this.request.query["sort"]) {
      var sortFiled;
      if(this.request.query["sort"] === "price") {
        sortFiled = "highestConsumption";
      } else if(this.request.query["sort"] === "table") {
        sortFiled = "maxTableNum";
      }

      if(sortFiled) {
        // order 排序方式 asc 正序 ； desc 倒序
        if(this.request.query["order"] && (this.request.query["order"] === "desc")) {
          this.model = this.model.orderBy(r.desc(sortFiled));
        } else {
          // 默认安装价格排序
          this.model = this.model.orderBy(sortFiled);
        }
      } else {
        this.model = this.model.orderBy("highestConsumption");
      }
    } else {
      this.model = this.model.orderBy("highestConsumption");
    }
    
    // 当前页数 每页条数
    let limit = 0;
    if(this.request.query["pageIndex"]) {
      limit = parseInt(this.request.query["pageIndex"]) - 1;
      if(limit < 0) {
        limit = 0;
      }
    }
    if(this.request.query["pageSize"]) {
      this.model = this.model.skip(limit*parseInt(this.request.query["pageSize"]));
      this.model = this.model.limit(parseInt(this.request.query["pageSize"]));
    } else {
      this.model = this.model.limit(10);
    }
    yield next
  },

  // 酒店详情 id是资源ID不是酒店ID
  'get+/hotel/detail/:id': function*(next) {
    this.model = hotel.filter({
      id: parseInt(this.params.id)
    })

    this.APIKey = 'Hotel'
    yield next
  },

  // 获取宴会厅列表
  'get+/banquetHall/list': function*(next) {
    this.model = banquetHall;
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
      // 此处的hotelId是酒店Id,不是资源ID
      else if(k.indexOf('hotelId') !== -1) {
        this.model = this.model.filter({
          hotelId: parseInt(this.request.query["hotelId"])})
      }
    });

    this.APIKey = 'BanquetHall';
    yield next;
  },

  // 宴会厅详情
  'get+/banquetHall/detail/:id': function*(next) {
    this.model = banquetHall.filter({
      id: parseInt(this.params.id)
    })

    this.APIKey = 'BanquetHall';
    yield next;
  }

}
export default hotelApi
