import { BaseConfig } from './base'
import _ from 'lodash'

const ShotConfig = {
  //静态banner
  'Banner': [{
    'imageUrl': '//img2.jsbn.com/static/hssy.jpg'
  }, {
    'imageUrl': '//img2.jsbn.com/static/photographer.jpg'
  }, {
    'imageUrl': '//img2.jsbn.com/static/satisfashion.jpg'
  }],
  'MultiBanner': [{
    'bgImageUrl': '//img2.jsbn.com/static/hssy-home02.jpg',
    'blocks': [{
      'klass': 'suite-link',
      'link': '//trip.jsbn.com'
    }, {
      'klass': 'samples-link',
      'link': '/sample'
    }, {
      'klass': 'pringles-link',
      'link': '/pringles'
    }, {
      'klass': 'suite-home-link',
      'link': '/suite'
    }, {
      'klass': 'weddingmv-link',
      'link': '/weddingmv'
    }]
  }],
  //列表数据
  'ShotListItem': _.merge({
    'type':'sample',
    'link':'/sample',
    'dataUrl': 'sample/shot_new_mid',// 最新动态->最新美照版块
    'params':{ //因为是聚合页面，样片的个数固定
      'pageSize':6,
      'pageIndex':1
    }
  },BaseConfig),
  //顶部广告
  'MediaSlider':_.merge({
    'dataUrl':'adv/shot_top',
    'aspectRatio':'192:68',
    'height':680
  },BaseConfig)
}

export { ShotConfig }
