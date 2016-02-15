import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { HotelList } from '../../components/hotel-list.jsx'
import { Navigation } from '../../components/navigation.jsx'
/*渲染本模块的菜单*/
ReactDOM.render(<Navigation menuKey={'/hotel'} currentKey={'/hotel'} />,document.getElementById('J_Nav'))
ReactDOM.render(<HotelList />,document.getElementById('J_Main'))
