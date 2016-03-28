/**
 * Created by chenjianjun on 16/3/26.
 */
import { BaseConfig } from './base'
import _ from 'lodash'

const WeddingClassConfig  = {
  'MediaSlider':_.merge({
    'dataUrl':'adv/hotel_top',
    'aspectRatio':'192:65',
    'height':650
  },BaseConfig),
  'DataList':_.merge({
    'dataUrl':'weddingroom/all'
  },BaseConfig)
}


export { WeddingClassConfig }
