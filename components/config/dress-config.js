import { BaseConfig } from './base'
import _ from 'lodash'

const DressConfig  = {
  'MediaSlider':_.merge({
    'dataUrl':'adv/dress_top',
    'aspectRatio':'192:69',
    'height':690
  },BaseConfig),
  //静态banner
  'Banner':[
    {
      'imageUrl': '//image.jsbn.com/static/hslf.jpg'
    }
  ]
}

export { DressConfig }
