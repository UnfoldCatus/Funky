/**
 * Created by chenjianjun on 16/3/12.
 */
import { BaseConfig } from './base'
import _ from 'lodash'

const F4Config  = {
  //静态banner
  'Banner':[
    {
      'imageUrl': '//image.jsbn.com/static/xhlr.jpg'
    }
  ],
  Prices: [{
    'minPrice': '0',
    'maxPrice': '1500',
    'name': '1500元以下'
  }, {
    'minPrice': '1500',
    'maxPrice': '2000',
    'name': '1500-2000元'
  }, {
    'minPrice': '2000',
    'maxPrice': '2500',
    'name': '2000-2500元'
  }, {
    'minPrice': '2500',
    'maxPrice': '99999',
    'name': '2500元以上'
  }],

  'HostList':_.merge({
    'dataUrl':'f4/host'
  },BaseConfig),

  'PhotographerList':_.merge({
    'dataUrl':'f4/photographer'
  },BaseConfig),

  'DresserList':_.merge({
    'dataUrl':'f4/dresser'
  },BaseConfig),

  'CameraList':_.merge({
    'dataUrl':'f4/camera'
  },BaseConfig)
}


export { F4Config }
