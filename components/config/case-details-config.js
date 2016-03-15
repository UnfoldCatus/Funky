/**
 * Created by chenjianjun on 16/3/15.
 */
import { BaseConfig } from './base'
import _ from 'lodash'

const CaseDetailsConfig  = {
  'CaseDetails':_.merge({
    'dataUrl':'cases/detail/:id'
  },BaseConfig)
}

export { CaseDetailsConfig }
