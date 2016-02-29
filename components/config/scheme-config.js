import _ from 'lodash'
import { BaseConfig } from './base'

const SchemeConfig = {
  'Banner':[
    {
      'imageUrl':'//image.jsbn.com/static/hqdz.jpg'
    }
  ],
  'MediaSlider':_.merge({
    'dataUrl':'adv/scheme_top',
    'aspectRatio':'192:68',
    'height':680
  },BaseConfig),
  //列表数据
  'SchemeListItem': _.merge({
    'dataUrl': 'cases/scheme_recommend_list'
  },BaseConfig),
  'Group5':_.merge({
    'dataUrl':'adv/scheme_hot',// 数据请求地址
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
  },BaseConfig),
  'PhotoGallery':[
    { 'imageUrl':'//image.jsbn.com/static/team/team-hqdz_01.jpg' },
    { 'imageUrl':'//image.jsbn.com/static/team/team-hqdz_02.jpg' },
    { 'imageUrl':'//image.jsbn.com/static/team/team-hqdz_03.jpg' },
    { 'imageUrl':'//image.jsbn.com/static/team/team-hqdz_04.jpg' },
    { 'imageUrl':'//image.jsbn.com/static/team/team-hqdz_05.jpg' },
    { 'imageUrl':'//image.jsbn.com/static/team/team-hqdz_06.jpg' }
  ],
  'NavGallery':[
    { 'link':'/f4?tab=dresser','klass':'hzs'},
    { 'link':'/f4?tab=host','klass':'zcr'},
    { 'link':'/f4?tab=photographer','klass':'sys'},
    { 'link':'/f4?tab=camera','klass':'sxs'}
  ]
}
export { SchemeConfig }
