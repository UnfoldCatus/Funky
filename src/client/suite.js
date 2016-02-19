import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Suite } from '../../components/suite.jsx'
import { Navigation } from '../../components/navigation.jsx'
/*渲染本模块的菜单*/
ReactDOM.render(<Navigation menuKey={'/shot'} currentKey={'/suite'} />,document.getElementById('J_Nav'))
ReactDOM.render(<Suite />,document.getElementById('J_Main'))
