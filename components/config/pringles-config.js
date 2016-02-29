import { BaseConfig } from './base'
import _ from 'lodash'

const PringlesConfig  = {
  //静态banner
  'Banner':[
    {
      'imageUrl': '//image.jsbn.com/static/kpxs.png'
    }
  ],
  'ShotListItem':_.merge({
    'type':'pringles',
    'dataUrl':'pringles/pringles_list'
  },BaseConfig),

  'MediaSlider':_.merge({
    'dataUrl':'adv/pringles_top',
    'aspectRatio':'192:45',
    'height':450
  },BaseConfig)
}


export { PringlesConfig }
