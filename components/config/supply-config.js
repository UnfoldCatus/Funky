import { BaseConfig } from './base'
import _ from 'lodash'


const SupplyConfig = {
  //静态banner
  'Banner': [{
    'imageUrl': '//image.jsbn.com/static/ypxs.jpg'
  }],
  'MediaSlider': _.merge({
    'dataUrl': 'adv/supplies_top',
    'height': 450,
    'aspectRatio': '192:45'
  }, BaseConfig),
  'TypesCategory': _.merge({
    'dataUrl': 'suppliesType/all'
  }, BaseConfig),
  'BrandCategory': _.merge({
    'dataUrl': 'suppliesBrand/all'
  }, BaseConfig),
  'SupplyItemList': _.merge({
      'dataUrl': 'weddingsupplies/supplies_list',
      'width': 276,
      'aspectRatio': '1:1'
    }, BaseConfig)
  }

export { SupplyConfig }
