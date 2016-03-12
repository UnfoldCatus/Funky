import { BaseConfig } from './base'
import _ from 'lodash'

const SuiteDetailsConfig  = {
  'SuiteDetails':_.merge({
    'dataUrl':'suite/detail/:id'
  },BaseConfig)
}


export { SuiteDetailsConfig }
