import { BaseConfig } from './base'
import _ from 'lodash'

const HomeConfig = {
  'MediaSlider': _.merge({
    'dataUrl': 'adv/index_top',
    'aspectRatio': '192:68',
    'height': 680
  }, BaseConfig), // 广告轮播
  'Banner': [{
    'imageUrl': '//img2.jsbn.com/static/home-01.jpg'
  },{
    'imageUrl':'//img2.jsbn.com/static/home-03.jpg'
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
    'bg':'//img2.jsbn.com/static/home-04.jpg',
    'list':[
      ['//img2.jsbn.com/static/pingjia/1.jpg',
      '//img2.jsbn.com/static/pingjia/2.jpg',
      '//img2.jsbn.com/static/pingjia/3.jpg',
      '//img2.jsbn.com/static/pingjia/4.jpg',
      '//img2.jsbn.com/static/pingjia/5.jpg',
      '//img2.jsbn.com/static/pingjia/6.jpg',],
      ['//img2.jsbn.com/static/pingjia/7.jpg',
      '//img2.jsbn.com/static/pingjia/8.jpg',
      '//img2.jsbn.com/static/pingjia/9.jpg',
      '//img2.jsbn.com/static/pingjia/10.jpg',],
      ['//img2.jsbn.com/static/pingjia/11.jpg',
      '//img2.jsbn.com/static/pingjia/12.jpg',
      '//img2.jsbn.com/static/pingjia/13.jpg',
      '//img2.jsbn.com/static/pingjia/14.jpg',
      '//img2.jsbn.com/static/pingjia/15.jpg',],
      ['//img2.jsbn.com/static/pingjia/16.jpg',
      '//img2.jsbn.com/static/pingjia/17.jpg',
      '//img2.jsbn.com/static/pingjia/18.jpg',
      '//img2.jsbn.com/static/pingjia/19.jpg',
      '//img2.jsbn.com/static/pingjia/20.jpg',],
      ['//img2.jsbn.com/static/pingjia/21.jpg',
      '//img2.jsbn.com/static/pingjia/22.jpg',
      '//img2.jsbn.com/static/pingjia/23.jpg',
      '//img2.jsbn.com/static/pingjia/24.jpg',
      '//img2.jsbn.com/static/pingjia/25.jpg']
    ]
  },BaseConfig)

}
export {
  HomeConfig
}
