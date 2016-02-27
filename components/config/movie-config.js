import { BaseConfig } from './base'
import _ from 'lodash'

const MovieConfig = {
  'MediaSlider':_.merge({
    'dataUrl':'adv/movie_top',
    'aspectRatio':'192:45',
    'height':450
  },BaseConfig),
  'Banner':[
    {'imageUrl':'//image.jsbn.com/static/wdy.jpg'}
  ]
}

export { MovieConfig }
