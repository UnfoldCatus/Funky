import { BaseConfig } from './base'
import _ from 'lodash'

const SuiteConfig = {
  AdvSide :[
    { 'imageUrl':'//img2.jsbn.com/static/dior.jpg' },
    { 'imageUrl':'//img2.jsbn.com/static/la_sposa.jpg' }
  ],
  //顶部广告
  'MediaSlider':_.merge({
    'dataUrl':'adv/suite_top',
    'aspectRatio':'192:45',
    'height':450
  },BaseConfig),
  'SuiteList':_.merge( { 'dataUrl':'suite/suite_list' },BaseConfig)
}
export { SuiteConfig }
