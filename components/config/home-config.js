const HomeConfig = {
  'MediaSlider':{
    'baseUrl':'//cd.jsbn.com:7001/api/',
    'dataUrl':'adv/index_top',

    'aspectRatio':'192:68',
    'height':680
  },
  'Banner':[
    {'imageUrl':'//image.jsbn.com/static/home-01.jpg'}
  ],
  'Group5':{
    'baseUrl':'//cd.jsbn.com:7001/api/',// 数据请求地址
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
  }

}
export { HomeConfig }
