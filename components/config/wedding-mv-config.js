import { BaseConfig } from './base'
import _ from 'lodash'

const WeddingMVConfig = {
  'Banner':[
    {'imageUrl':'//image.jsbn.com/static/title/hsjs.jpg'}
  ],
  'MediaSlider':_.merge({
    'dataUrl':'adv/weddingvideo_top',
    'aspectRatio':'192:45',
    'height':450
  },BaseConfig),
  'VideoListItem':_.merge({
    'dataUrl':'recordVideo/record_video_list',
    'aspectRatio':'3:2',
    'width':380
  },BaseConfig)

}

export { WeddingMVConfig }
