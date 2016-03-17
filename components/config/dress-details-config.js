/**
 * Created by chenjianjun on 16/2/23.
 */
import { BaseConfig } from './base'
import _ from 'lodash'

const DressDetailsConfig  = {
    //静态banner
    'Banner':[
        {
            'imageUrl': '//img2.jsbn.com/static/hslf.jpg'
        }
    ],
    'APIConfig':_.merge({},BaseConfig)
}


export { DressDetailsConfig }
