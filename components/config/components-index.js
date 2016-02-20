/*
服务端应该导入本模块。用于索引当前系统中的页面components
key为ejs模板的文件名
value为components模块


TODO: 使用bash扫描component文件夹直接生成本文件
*/
import React, { PropTypes } from 'react'

import { Home } from '../home.jsx'
import { Shot } from '../shot.jsx'
import { Sample } from '../sample.jsx'
import { Pringles } from '../pringles.jsx'
import { Suite } from '../suite.jsx'

import { Hotel } from '../hotel.jsx'
import { HotelRequire } from '../hotel-require.jsx'
import { Scheme } from '../scheme.jsx'
import { Cases } from '../cases.jsx'

import { Adv } from '../adv.jsx'
import { Dress } from '../dress.jsx'
import { Supply } from '../supply.jsx'

const ComponentsIndex = {
  'home':<Home />,
  'shot': <Shot />,
  'sample': <Sample />,
  'pringles':<Pringles />,
  'suite':<Suite />,
  'hotel':<Hotel />,
  'hotel-require':<HotelRequire />,
  'scheme':<Scheme />,
  'cases':<Cases />,
  'adv':<Adv />,
  'dress':<Dress />,
'supply':<Supply />
}


export { ComponentsIndex }
