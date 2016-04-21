/**
 * Created by chenjianjun on 16/3/26.
 */
import { BaseConfig } from './base'
import _ from 'lodash'

const WeddingClassConfig  = {
  'MediaSlider':_.merge({
    'dataUrl':'vda/',
    'aspectRatio':'192:65',
    'height':650
  },BaseConfig),
  'DataList':_.merge({
    'dataUrl':'weddingroom/'
  },BaseConfig),
  'ClassInfo':{
    // type-->info
    '1':{title:'婚照技巧',type:'1',position:'wedding_shot_class_list',adv:'wedding_shot_class_top'},
    '2':{title:'婚宴知识',type:'2',position:'wedding_hotel_class_list',adv:'wedding_hotel_class_top'},
    '3':{title:'婚礼学堂',type:'3',position:'wedding_scheme_class_list',adv:'wedding_scheme_class_top'},
    '4':{title:'礼服知识',type:'4',position:'wedding_dress_class_list',adv:'wedding_dress_class_top'},
    '5':{title:'表演技巧',type:'5',position:'wedding_movie_class_list',adv:'wedding_movie_class_top'},
    '7':{title:'用品贴士',type:'7',position:'wedding_supplies_class_list',adv:'wedding_supplies_class_top'},
    '8':{title:'租车经验',type:'8',position:'wedding_car_class_list',adv:'wedding_car_class_top'}
  }
}


export { WeddingClassConfig }
