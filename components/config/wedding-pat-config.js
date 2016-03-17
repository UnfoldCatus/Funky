import { BaseConfig } from './base'
import _ from 'lodash'

const WeddingPatConfig = {
  'Banner':[
    { 'imageUrl':'//img2.jsbn.com/static/hlgp.jpg' }
  ],
  'MediaSlider':_.merge({
    'dataUrl':'adv/weddingpat_top',
    'aspectRatio':'192:45',
    'height':450
  },BaseConfig),
  'CasesList':_.merge({
    'dataUrl':'followPhoto/weddingpat_list'
  },BaseConfig)

}


export { WeddingPatConfig }
