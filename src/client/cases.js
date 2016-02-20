import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Cases } from '../../components/cases.jsx'
import { Navigation } from '../../components/navigation.jsx'
/*渲染本模块的菜单*/
ReactDOM.render(<Navigation menuKey={'/scheme'} currentKey={'/cases'} />,document.getElementById('J_Nav'))
ReactDOM.render(<Cases />,document.getElementById('J_Main'))
