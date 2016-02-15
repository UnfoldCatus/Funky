/*
服务端应该导入本模块。用于索引当前系统中的页面components
key为ejs模板的文件名
value为components模块

*/
import React, { PropTypes } from 'react'

import { Home } from '../home.jsx'
import { SampleList } from '../sample-list.jsx'
import { PringlesList } from '../pringles-list.jsx'
import { HotelList } from '../hotel-list.jsx'
import { AdvList } from '../adv-list.jsx'
import { DressList } from '../dress-list.jsx'
import { SupplyList } from '../supply-list.jsx'

const ComponentsIndex = {
  'home':<Home />,
  'sample-list': <SampleList />,
  'pringles-list':<PringlesList />,
  'hotel-list':<HotelList />,
  'adv-list':<AdvList />,
  'dress-list':<DressList />,
  'supply-list':<SupplyList />
}


export { ComponentsIndex }
