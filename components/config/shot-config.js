const ShotConfig = {
  //静态banner
  'Banner': [{
    'imageUrl': '//image.jsbn.com/static/hssy.jpg'
  }, {
    'imageUrl': 'http://image.jsbn.com/static/photographer-1.jpg' + '@1920w_1e_1c_0i_1o_90q_1x'
  }, {
    'imageUrl': 'http://image.jsbn.com/static/satisfashion-1.jpg' + '@1920w_1e_1c_0i_1o_90q_1x'
  }],
  'MultiBanner': [{
    'bgImageUrl': '//image.jsbn.com/static/hssy-home02.jpg',
    'blocks': [{
      'klass': 'suite-link',
      'link': '//trip.jsbn.com'
    }, {
      'klass': 'samples-link',
      'link': '/sample'
    }, {
      'klass': 'pringles-link',
      'link': '/pringles'
    }, {
      'klass': 'suite-home-link',
      'link': '/suite'
    }, {
      'klass': 'weddingmv-link',
      'link': '/weddingmv'
    }]
  }],
  'ShotListItem': {
    'type':'sample',
    'baseUrl':'//cd.jsbn.com:7001/api/',
    'dataUrl': 'sample/samples_list'
  },
  'MediaSlider':{
    'baseUrl':'//cd.jsbn.com:7001/api/',
    'dataUrl':'adv/shot_top',
    'aspectRatio':'192:68',
    'height':680
  }
}

export { ShotConfig }
