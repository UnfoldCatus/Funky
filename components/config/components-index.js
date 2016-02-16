/*
服务端应该导入本模块。用于索引当前系统中的页面components
key为ejs模板的文件名
value为components模块

*/
import React, { PropTypes } from 'react'

import { Home } from '../home.jsx'
import { Sample } from '../sample.jsx'
import { Pringles } from '../pringles.jsx'
import { Hotel } from '../hotel.jsx'
import { HotelRequire } from '../hotel-require.jsx'
import { Adv } from '../adv.jsx'
import { Dress } from '../dress.jsx'
import { Supply } from '../supply.jsx'

const ComponentsIndex = {
  'home':<Home />,
  'sample': <Sample />,
  'pringles':<Pringles />,
  'hotel':<Hotel />,
  'hotel-require':<HotelRequire />,
  'adv':<Adv />,
  'dress':<Dress />,
'supply':<Supply />
}


export { ComponentsIndex }
