import _ from 'lodash'
import { BaseConfig } from './base'

const SchemeConfig = {
  'Banner':[
    {
      'imageUrl':'//img2.jsbn.com/static/hqdz.jpg'
    }
  ],
  'MediaSlider':_.merge({
    'dataUrl':'vda/scheme_top',
    'aspectRatio':'192:68',
    'height':680
  },BaseConfig),
  //列表数据
  'SchemeListItem': _.merge({
    'type':'cases',
    'link':'cases',
    'dataUrl': 'cases/scheme_recommend_list',
    'params':{ //因为是聚合页面，样片的个数固定
      'pageSize':9,
      'pageIndex':1
    }
  },BaseConfig),
  'Group5':_.merge({
    'dataUrl':'vda/scheme_hot',// 数据请求地址
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
    { 'imageUrl':'//img2.jsbn.com/static/team/team-hqdz_01.jpg' },
    { 'imageUrl':'//img2.jsbn.com/static/team/team-hqdz_02.jpg' },
    { 'imageUrl':'//img2.jsbn.com/static/team/team-hqdz_03.jpg' },
    { 'imageUrl':'//img2.jsbn.com/static/team/team-hqdz_04.jpg' },
    { 'imageUrl':'//img2.jsbn.com/static/team/team-hqdz_05.jpg' },
    { 'imageUrl':'//img2.jsbn.com/static/team/team-hqdz_06.jpg' }
  ],
  'NavGallery':[
    { 'link':'/f4?tab=dresser','klass':'hzs'},
    { 'link':'/f4?tab=host','klass':'zcr'},
    { 'link':'/f4?tab=photographer','klass':'sys'},
    { 'link':'/f4?tab=camera','klass':'sxs'}
  ]
}
export { SchemeConfig }
