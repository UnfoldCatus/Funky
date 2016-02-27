import {
  BaseConfig
} from './base'
import _ from 'lodash'
const HomeConfig = {
  'MediaSlider': _.merge({
    'dataUrl': 'adv/index_top',
    'aspectRatio': '192:68',
    'height': 680
  }, BaseConfig),
  'Banner': [{
    'imageUrl': '//image.jsbn.com/static/home-01.jpg'
  }],
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
  }, BaseConfig),
  'Group4': [
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
  ]

}
export {
  HomeConfig
}
