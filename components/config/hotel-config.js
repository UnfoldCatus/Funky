import { BaseConfig } from './base'
import _ from 'lodash'

const HotelConfig = {
  'MediaSlider':_.merge({
    'dataUrl':'adv/hotel_top',
    'aspectRatio':'192:45',
    'height':450
  },BaseConfig),
  'HotelList':_.merge({
    'dataUrl':'hotel/hotel_list',
    'aspectRatio':'320:216',
    'width':320,
    'params':{
      'pageSize':12,
      'pageIndex':1
    }
  },BaseConfig),
  'TypeConditions':_.merge({
    'dataUrl':'hotelType/all'
  },BaseConfig),
  'DistrictConditions':_.merge({
    'dataUrl':'hotelDistrict/all'
  },BaseConfig),
  PricesConditions:_.merge({
    'conditions':[{
      'minPrice': '0',
      'maxPrice': '2000',
      'name': '2000元以下'
    }, {
      'minPrice': '2000',
      'maxPrice': '3000',
      'name': '2000-3000元'
    }, {
      'minPrice': '3000',
      'maxPrice': '4000',
      'name': '3000-4000元'
    }, {
      'minPrice': '4000',
      'maxPrice': '99999',
      'name': '4000元以上'
    }]
  },BaseConfig),
  SeatsCountConditions:_.merge(
    {
      'conditions':[{
        'maxTable': '10',
        'minTable': '0',
        'name': '10桌以下'
      }, {
        'minTable': '10',
        'maxTable': '20',
        'name': '10-20桌'
      }, {
        'minTable': '20',
        'maxTable': '30',
        'name': '20-30桌'
      }, {
        'minTable': '30',
        'maxTable': '40',
        'name': '30-40桌'
      },{
        'minTable': '40',
        'maxTable': '50',
        'name': '40-50桌'
      },{
        'minTable': '51',
        'maxTable': '9999',
        'name': '50桌以上'
      }]
    },BaseConfig),
    SorterAndSearch:function(component){ //
      let p = {}
      $('.J_EventHooker').on('click',(evt)=>{
        if ($(evt.target).hasClass('J_SorterButton')) { //排序按钮
          let $icon = $(evt.target).find('.arrow-box')
          if ($icon.hasClass('ascending')) {
            $icon.removeClass('ascending')
            $icon.addClass('descending')
          }else {
            $icon.removeClass('descending')
            $icon.addClass('ascending')
          }
        }
        if ($(evt.target).hasClass('J_ExtraFilter')) { // 优惠、礼品按钮
          if ($(evt.target).is(':checked')) {
            p[$(evt.target).attr('data-filter')] = 1
          }else {
            p[$(evt.target).attr('data-filter')] = 0
          }
        }
        component.setState({
          'params':_.merge(p,component.state.params)
        })
      })
    }
}

export { HotelConfig }
