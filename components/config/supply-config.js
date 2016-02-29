import { BaseConfig } from './base'
import _ from 'lodash'


const SupplyConfig = {
  //静态banner
  'Banner':[ { 'imageUrl': '//image.jsbn.com/static/ypxs.jpg' } ],
  'MediaSlider':_.merge({
    'dataUrl':'adv/supplies_top',
    'height':450,
    'aspectRatio':'192:45'
  },BaseConfig)
}

export { SupplyConfig }
