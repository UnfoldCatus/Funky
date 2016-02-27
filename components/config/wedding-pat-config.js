import { BaseConfig } from './base'
import _ from 'lodash'

const WeddingPatConfig = {
  'Banner':[
    { 'imageUrl':'//image.jsbn.com/static/hlgp.jpg' }
  ],
  'MediaSlider':_.merge({
    'dataUrl':'adv/weddingpat_top',
    'aspectRatio':'192:45',
    'height':450
  },BaseConfig)
}


export { WeddingPatConfig }
