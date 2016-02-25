const PringlesConfig  = {
  //静态banner
  'Banner':[
    {
      'imageUrl': '//image.jsbn.com/static/kpxs.png'
    }
  ],
  'ShotListItem':{
    'type':'pringles',
    'baseUrl':'//cd.jsbn.com:7001/api/',
    'dataUrl':'pringles/pringles_list'
  },
  'MediaSlider':{
    'baseUrl':'//cd.jsbn.com:7001/api/',
    'dataUrl':'adv/pringles_top',
    'aspectRatio':'192:45',
    'height':450
  }
}


export { PringlesConfig }
