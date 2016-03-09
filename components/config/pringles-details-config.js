import { BaseConfig } from './base'
import _ from 'lodash'

const PringlesDetailsConfig  = {
  'PringlesDetails':_.merge({
    'dataUrl':'pringles/detail/:id'
  },BaseConfig)
}


export { PringlesDetailsConfig }
