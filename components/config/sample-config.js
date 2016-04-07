import { BaseConfig } from './base'
import _ from 'lodash'

const SampleConfig  = {
  //静态banner
  'Banner':[
    {
      'imageUrl': '//img2.jsbn.com/static/ypxs.jpg'
    }
  ],
  'ShotListItem':_.merge({
    'type':'sample',
    'link':'/sample',
    'countPlugin':true,
    'dataUrl':'sample/samples_list',
    'displayTextPrefix':'找到作品',
    'displayTextSuffix':'套',
    'params':{
      'pageSize':9,
      'pageIndex':1
    }

  },BaseConfig),
  'MediaSlider':_.merge({
    'dataUrl':'vda/samples_top',
    'aspectRatio':'192:45',
    'height':450
  },BaseConfig),
  'StyleFilter':_.merge({
    'dataUrl':'shootStyle/all'
  },BaseConfig),
  'ExteriorFilter':_.merge({
    'dataUrl':'exterior/all'
  },BaseConfig),
  'SetupTabClick':function(component){
    const SampleType = {
      'SHOOT':0,
      'ART':1,
      'FAMILY':2
    }
    $('.J_Tab').on('click','span.sel',(evt)=>{
      $('.J_Tab > .sel').addClass('nnn')
      $(evt.currentTarget).removeClass('nnn')
      if ($(evt.currentTarget).hasClass('sec')) {
        if ($(evt.currentTarget).hasClass('J_ArtPhoto')) {
          component.setState({ showFilter:false,params:{sampleType:SampleType['ART']} })
        }else {
          component.setState({ showFilter:false,params:{sampleType:SampleType['FAMILY']} })
        }
      }else {
        component.setState({ showFilter:true,params:{sampleType:SampleType['SHOOT']} })
      }
    })
  }
}

export { SampleConfig }
