import { BaseConfig } from './base'
import _ from 'lodash'

const WeddingVideoConfig = {
  'Banner':[
    {'imageUrl':'//image.jsbn.com/static/hlsp.jpg'}
  ],
  'MediaSlider':_.merge({
    'dataUrl':'adv/weddingvideo_top',
    'aspectRatio':'192:45',
    'height':450
  },BaseConfig)
}

export { WeddingVideoConfig }
