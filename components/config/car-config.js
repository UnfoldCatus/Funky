import { BaseConfig } from './base'
import _ from 'lodash'


const CarConfig = {
  //静态banner
  'Banner': [{
    'imageUrl': '//img2.jsbn.com/static/ypxs.jpg'
  }],
  'MediaSlider': _.merge({
    'dataUrl': 'vda/car_top',
    'height': 450,
    'aspectRatio': '192:45'
  }, BaseConfig),
  'CarItemList':_.merge({
    'dataUrl':'car/car_list',
    'width':380,
    'aspectRatio':'3:2',
    'params':{
      'pageIndex':1,
      'pageSize':9
    }
  },BaseConfig),
  'SorterAndSearch':function(component){
    let p = {}
    $('.J_EventHooker').on('click',(evt)=>{
      if ($(evt.target).hasClass('J_IsTeam')) {
        if ($(evt.target).is(':checked')) {
          p['carNature'] = 0 //车队
        }else {
          p['carNature'] = null
        }
        component.setState({
          'params':_.merge(component.state.params,p)
        })
      }
    })
  },
  'CarItemDetail': _.merge({
    'dataUrl':'car/detail/:id'
  },BaseConfig),
  'ModelCategory': _.merge({
    'dataUrl': 'carModels/all'
  }, BaseConfig),
  'LevelCategory': _.merge({
    'dataUrl': 'carLevel/all'
  }, BaseConfig),
  'BrandCategory': _.merge({
    'dataUrl': 'carBrand/all'
  }, BaseConfig),
  'PriceCategory':{
    'conditions':[
      {
        'minPrice': '0',
        'maxPrice': '999',
        'name': '1000元以下'
      }, {
        'minPrice': '1000',
        'maxPrice': '2000',
        'name': '1000-2000元'
      }, {
        'minPrice': '2000',
        'maxPrice': '3000',
        'name': '2000-3000元'
      }, {
        'minPrice': '3000',
        'maxPrice': '99999',
        'name': '3000元以上'
      }
    ]
  }

}

export { CarConfig }
