import { BaseConfig } from './base'
import _ from 'lodash'

const WeddingPatConfig = {
  'Banner':[
    { 'imageUrl':'//img2.jsbn.com/static/hlgp.jpg' }
  ],
  'MediaSlider':_.merge({
    'dataUrl':'adv/weddingpat_top',
    'aspectRatio':'192:45',
    'height':450
  },BaseConfig),
  'SchemeListItem':_.merge({
    'countPlugin':true,
    'dataUrl':'followPhoto/weddingpat_list',
    'displayTextPrefix':'找到最佳案例',
    'displayTextSuffix':'套',
    'params':{
      'pageSize':12,
      'pageIndex':1
    }
  },BaseConfig)
}


export { WeddingPatConfig }
