import { BaseConfig } from './base'
import _ from 'lodash'

const HotelConfig = {
  'MediaSlider':_.merge({
    'dataUrl':'adv/hotel_top',
    'aspectRatio':'192:45',
    'height':450
  },BaseConfig)
}

export { HotelConfig }
