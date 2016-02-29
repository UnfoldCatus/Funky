import { BaseConfig } from './base'
import _ from 'lodash'

const SampleConfig  = {
  //静态banner
  'Banner':[
    {
      'imageUrl': '//image.jsbn.com/static/ypxs.jpg'
    }
  ],
  'ShotListItem':_.merge({
    'type':'sample',
    'dataUrl':'sample/samples_list'
  },BaseConfig),
  
  'MediaSlider':_.merge({
    'dataUrl':'adv/samples_top',
    'aspectRatio':'192:45',
    'height':450
  },BaseConfig)
}

export { SampleConfig }
