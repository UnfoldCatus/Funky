import { BaseConfig } from './base'
import _ from 'lodash'


const SupplyConfig = {
  //静态banner
  'Banner':[ { 'imageUrl': '//image.jsbn.com/static/ypxs.jpg' } ],
  'MediaSlider':_.merge({
    'dataUrl':'adv/supplies_top',
    'height':450,
    'aspectRatio':'192:45'
  },BaseConfig),
  'CarItemList':_.merge({
    'dataUrl':'car/car_list',
    'width':277.5,
    'aspectRatio':'1:1'
  },BaseConfig),
  'TypesCategory': _.merge({
    'dataUrl': 'weddingsupplies/all'
  }, BaseConfig),
}

export { SupplyConfig }
