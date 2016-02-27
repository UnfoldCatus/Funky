import { BaseConfig } from './base'
import _ from 'lodash'

const SuiteConfig = {
  AdvSide :[
    {
      'imageUrl':'http://image.jsbn.com/static/dior.jpg'
    },
    {
      'imageUrl':'http://image.jsbn.com/static/la_sposa2.jpg'
    }

  ],
  //顶部广告
  'MediaSlider':_.merge({
    'dataUrl':'adv/suite_top',
    'aspectRatio':'192:45',
    'height':450
  },BaseConfig)

}
export { SuiteConfig }
