import { BaseConfig } from './base'
import _ from 'lodash'

const MovieConfig = {
  'MediaSlider':_.merge({
    'dataUrl':'adv/movie_top',
    'aspectRatio':'192:69',
    'height':690
  },BaseConfig),
  //静态banner
  'Banner':[
    {
      'imageUrl':'//img2.jsbn.com/static/wdy.jpg'
    }
  ],
  // 最新微电影
  'NewMovie':_.merge({
    'dataUrl':'video/movie_latest'
  },BaseConfig),
  // 最热微电影
  'HotMovie':_.merge({
    'dataUrl':'video/movie_most'
  },BaseConfig),
  // 爱情微电影
  'LoveMovie':_.merge({
    'dataUrl':'video/movie_love_movies'
  },BaseConfig),
  // 爱情MV
  'LoveMovieMV':_.merge({
    'dataUrl':'video/movie_love_mv'
  },BaseConfig)
}

export { MovieConfig }
