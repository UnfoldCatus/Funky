import { BaseConfig } from './base'
import _ from 'lodash'

const DressConfig  = {
  'MediaSlider':_.merge({
    'dataUrl':'adv/dress_top',
    'aspectRatio':'192:45',
    'height':450
  },BaseConfig),
  //静态banner
  'Banner':[
    {
      'imageUrl': '//img2.jsbn.com/static/hslf.jpg'
    }
  ],
  'DressType':_.merge({
    'dataUrl':'dressType/all'
  },BaseConfig),
  'DressBrand':_.merge({
    'dataUrl':'dressBrand/all?typeId='
  },BaseConfig)
}

export { DressConfig}
