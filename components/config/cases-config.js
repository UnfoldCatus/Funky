import { BaseConfig } from './base'
import _ from 'lodash'

const CasesConfig = {
  'Banner':[
    {'imageUrl':'//image.jsbn.com/static/sjal.jpg'}
  ],
  'CasesCategory':{
    'resourceUrl':''
  },
  'MediaSlider':_.merge({
    'dataUrl':'cases/scheme_recommend',
    'aspectRatio':'120:68',
    'height':680,
    'params':{
      'pageSize':6,
      'pageIndex':1
    }
  },BaseConfig),
  'CasesList':_.merge({
    'dataUrl':'cases/scheme_list',
    'aspectRatio':'3:2',
    'width':380
  },BaseConfig)

}
export { CasesConfig }
