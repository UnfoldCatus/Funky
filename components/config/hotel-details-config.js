import { BaseConfig } from './base'
import _ from 'lodash'

const HotelDetailsConfig  = {
  'MediaItem':_.merge({
    'aspectRatio':'3:2',
    'height':340
  },BaseConfig),
  'HotelDetails':_.merge({
    'dataUrl':'hotel/detail/:id'
  },BaseConfig)
}


export { HotelDetailsConfig }
