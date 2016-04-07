import { BaseConfig } from './base'
import _ from 'lodash'


const SupplyConfig = {
  //静态banner
  'Banner': [{
    'imageUrl': '//img2.jsbn.com/static/ypxs.jpg'
  }],
  'MediaSlider': _.merge({
    'dataUrl': 'vda/supplies_top',
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
      'aspectRatio': '1:1',
      'params':{
        'pageIndex':1,
        'pageSize':8
      }
    }, BaseConfig),
  'SupplyItemDetail': _.merge({
    'dataUrl':'weddingsupplies/detail/:id'
  },BaseConfig)
  }

export { SupplyConfig }
