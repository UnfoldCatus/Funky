/**
 * Created by chenjianjun on 16/3/15.
 */
import { BaseConfig } from './base'
import _ from 'lodash'

const CaseDetailsConfig  = {
  '/cases':_.merge({
    'dataUrl':'cases/detail/:id',
    'type':'cases'
  },BaseConfig),
  '/weddingpat':_.merge({
    'dataUrl':'followPhoto/detail/:id',
    'type':'pat'
  },BaseConfig)
}

export { CaseDetailsConfig }
