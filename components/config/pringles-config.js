import { BaseConfig } from './base'
import _ from 'lodash'

const PringlesConfig  = {
  //静态banner
  'Banner':[
    { 'imageUrl': '//img2.jsbn.com/static/kpxs.png' }
  ],
  'ShotListItem':_.merge({
    'type':'pringles',
    'link':'/pringles',
    'countPlugin':true, // 是否需要显示列表的数据总数
    'dataUrl':'pringles/pringles_list',
    'displayTextPrefix':'找到最佳客片',
    'displayTextSuffix':'套',
    'params':{
      'pageSize':9,
      'pageIndex':1
    }

  },BaseConfig),
  'Episode':_.merge({
    'dataUrl':'pringlesSeason/all',
    'aspectRatio':'3:2',
    'height':140
  },BaseConfig),
  'EpisodeListItem':_.merge({
    'type':'pringles',
    'link':'/pringles',
    'params':{}

  },BaseConfig),
  'MediaSlider':_.merge({
    'dataUrl':'adv/pringles_top',
    'aspectRatio':'192:45',
    'height':450
  },BaseConfig)
}


export { PringlesConfig }
