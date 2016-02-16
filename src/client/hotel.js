import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Hotel } from '../../components/hotel.jsx'
import { Navigation } from '../../components/navigation.jsx'
/*渲染本模块的菜单*/
ReactDOM.render(<Navigation menuKey={'/hotel'} currentKey={'/hotel'} />,document.getElementById('J_Nav'))
ReactDOM.render(<Hotel />,document.getElementById('J_Main'))
