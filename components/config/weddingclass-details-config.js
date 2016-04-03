import { BaseConfig } from './base'
import _ from 'lodash'

const WeddingClassDetailsConfig = {
  'WeddingClassDetails':_.merge({
    'dataUrl':'weddingroom/detail/:id'
  },BaseConfig)

}

export { WeddingClassDetailsConfig }
