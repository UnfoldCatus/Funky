import { BaseConfig } from './base'
import _ from 'lodash'
const HomeConfig = {
  'MediaSlider':_.merge({
    'dataUrl':'adv/index_top',
    'aspectRatio':'192:68',
    'height':680
  },BaseConfig),
  'Banner':[
    {'imageUrl':'//image.jsbn.com/static/home-01.jpg'}
  ],
  'Group5':_.merge({
    'dataUrl':'adv/index_hot_top',// 数据请求地址
    'dimension':[  //4+1 4和1的尺寸配置
      {
        'aspectRatio':'124:75',
        'width':620
      },
      {
        'aspectRatio':'3:2',
        'width':270
      }
    ]
  },BaseConfig)

}
export { HomeConfig }
