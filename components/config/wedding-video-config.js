import { BaseConfig } from './base'
import _ from 'lodash'

const WeddingVideoConfig = {
  'Banner':[
    {'imageUrl':'//img2.jsbn.com/static/hlsp.jpg'}
  ],
  'MediaSlider':_.merge({
    'dataUrl':'adv/weddingvideo_top',
    'aspectRatio':'192:45',
    'height':450
  },BaseConfig),
  'VideoListItem':_.merge({
    'dataUrl':'followvideo/weddingvideo_list',
    'aspectRatio':'3:2',
    'width':380,
    'link':'/weddingvideo',
    'params':{
      'pageSize':3,
      'pageIndex':1
    }
  },BaseConfig)

}

export { WeddingVideoConfig }
