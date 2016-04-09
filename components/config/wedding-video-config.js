import { BaseConfig } from './base'
import _ from 'lodash'

const WeddingVideoConfig = {
  'Banner':[
    {'imageUrl':'//img2.jsbn.com/static/hlsp.jpg'}
  ],
  'MediaSlider':_.merge({
    'dataUrl':'vda/weddingvideo_top',
    'aspectRatio':'192:45',
    'height':450
  },BaseConfig),
  'VideoListItem':_.merge({
    'dataUrl':'followVideo/weddingvideo_list',
    'aspectRatio':'3:2',
    'width':380,
    'link':'/followVideo',
    'params':{
      'pageSize':9,
      'pageIndex':1
    }
  },BaseConfig)

}

export { WeddingVideoConfig }
