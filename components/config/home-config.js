import { BaseConfig } from './base'
import _ from 'lodash'

const HomeConfig = {
  'MediaSlider': _.merge({
    'dataUrl': 'adv/index_top',
    'aspectRatio': '192:68',
    'height': 680
  }, BaseConfig), // 广告轮播
  'Banner': [{
    'imageUrl': '//image.jsbn.com/static/home-01.jpg'
  },{
    'imageUrl':'//image.jsbn.com/static/home-03.jpg'
  }], //静态banner广告
  'Group5': _.merge({
    'dataUrl': 'adv/index_hot_top', // 数据请求地址
    'dimension': [ //4+1 4和1的尺寸配置
      {
        'aspectRatio': '124:75',
        'width': 620
      }, {
        'aspectRatio': '3:2',
        'width': 270
      }
    ]
  }, BaseConfig), //顶部4+1
  'Group4': [
    /**
      首页的分栏目聚合
    */
    _.merge({
      'dataUrl': 'adv/index_mid_01',
      'titleClassName': 'photography-img-home',
      'hrefs': [
        '/shot',
        '/movie'
      ]
    }, BaseConfig),
    _.merge({
      'dataUrl': 'adv/index_mid_02',
      'titleClassName': 'banquet-img-home',
      'hrefs': [
        '/hotel',
        '/scheme'
      ]
    }, BaseConfig),
    _.merge({
      'dataUrl': 'adv/index_mid_03',
      'titleClassName': 'dress-img-home',
      'hrefs': [
        '/dress',
        'http://www.chinad9.com'
      ]
    }, BaseConfig),
    _.merge({
      'dataUrl': 'adv/index_mid_04',
      'titleClassName': 'supplies-img-home',
      'hrefs': [
        '/supply',
        '/car'
      ]
    }, BaseConfig)
  ],
  'Group3':[ // 底部三个推荐栏目
    _.merge({
      'dataUrl':'adv/index_publicity'
    },BaseConfig)
  ],
  'BottomNav':[ // 底部导航圆形按钮
    { 'klassName':'item-01', 'link':'/shot' },
    { 'klassName':'item-02', 'link':'/hotel' },
    { 'klassName':'item-03', 'link':'/scheme' },
    { 'klassName':'item-04', 'link':'/dress' },
    { 'klassName':'item-05', 'link':'//www.chinad9.com' },
    { 'klassName':'item-06', 'link':'/movie' },
    { 'klassName':'item-07', 'link':'/supply' },
    { 'klassName':'item-08', 'link':'/car' }

  ],
  'BotComment':_.merge({ //客户评价
    'bg':'//image.jsbn.com/static/home-04.jpg',
    'dataUrl':'adv/index_comment_bot'
  },BaseConfig)

}
export {
  HomeConfig
}
