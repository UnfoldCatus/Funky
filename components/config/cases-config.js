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
    'height':680
  },BaseConfig)

}
export { CasesConfig }
