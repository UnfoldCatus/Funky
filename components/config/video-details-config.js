/**
 * Created by chenjianjun on 16/3/15.
 */
import { BaseConfig } from './base'
import _ from 'lodash'

const VideoDetailsConfig  = {
  '/weddingvideo':_.merge({
    'dataUrl':'followVideo/detail/:id'
  },BaseConfig),
  '/weddingmv':_.merge({
    'dataUrl':'recordVideo/detail/:id'
  },BaseConfig)
}

export { VideoDetailsConfig }
