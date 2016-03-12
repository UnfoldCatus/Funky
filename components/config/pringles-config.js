import { BaseConfig } from './base'
import _ from 'lodash'

const PringlesConfig  = {
  //静态banner
  'Banner':[
    { 'imageUrl': '//image.jsbn.com/static/kpxs.png' }
  ],
  'ShotListItem':_.merge({
    'type':'pringles',
    'link':'/pringles',
    'dataUrl':'pringles/pringles_list'
  },BaseConfig),
  'Episode':_.merge({
    'dataUrl':'pringlesSeason/all'
  },BaseConfig),
  'EpisodeListItem':_.merge({
    'type':'pringles',
    'link':'/pringles',
    'dataUrl':'pringles/pringles_season'
  },BaseConfig),
  'MediaSlider':_.merge({
    'dataUrl':'adv/pringles_top',
    'aspectRatio':'192:45',
    'height':450
  },BaseConfig)
}


export { PringlesConfig }
