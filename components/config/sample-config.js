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
    'link':'/sample',
    'countPlugin':true,
    'dataUrl':'sample/samples_list',
    'displayTextPrefix':'找到作品',
    'displayTextSuffix':'套',
    'params':{
      'pageSize':9,
      'pageIndex':1
    }

  },BaseConfig),

  'MediaSlider':_.merge({
    'dataUrl':'adv/samples_top',
    'aspectRatio':'192:45',
    'height':450
  },BaseConfig)
}

export { SampleConfig }
