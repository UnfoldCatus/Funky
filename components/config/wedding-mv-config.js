import { BaseConfig } from './base'
import _ from 'lodash'

const WeddingMVConfig = {
  'Banner':[
    {'imageUrl':'//img2.jsbn.com/static/hsjs.jpg'}
  ],
  'MediaSlider':_.merge({
    'dataUrl':'adv/weddingmv_top',
    'aspectRatio':'192:45',
    'height':450
  },BaseConfig),
  'VideoListItem':_.merge({
    'dataUrl':'recordVideo/record_video_list',
    'aspectRatio':'3:2',
    'height':186,
    'link':'/weddingmv',
    'params':{
      'pageSize':4,
      'pageIndex':1
    }
  },BaseConfig)

}

export { WeddingMVConfig }
