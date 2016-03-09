import { BaseConfig } from './base'
import _ from 'lodash'

const SampleDetailsConfig  = {
  'SampleDetails':_.merge({
    'dataUrl':'sample/detail/:id'
  },BaseConfig)
}


export { SampleDetailsConfig }
