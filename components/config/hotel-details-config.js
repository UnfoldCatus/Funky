import { BaseConfig } from './base'
import _ from 'lodash'

const HotelDetailsConfig  = {
  'HotelThumbMediaItem':_.merge({
    'aspectRatio':'3:2',
    'height':340
  },BaseConfig),
  'CoverMediaItem':_.merge({
    'aspectRatio':'3:2',
    'height':240
  },BaseConfig),
  'RecommendMediaItem':_.merge({
    'aspectRatio':'3:2',
    'height':240
  },BaseConfig),
  'HotelDetails':_.merge({
    'dataUrl':'hotel/detail/:id'
  },BaseConfig),
  'HotelRecommend':_.merge({
    'dataUrl':'hotel/hotel_recommend',
    'params':{
      'pageSize':6,
      'pageIndex':1
    }
  },BaseConfig)

}


export { HotelDetailsConfig }
