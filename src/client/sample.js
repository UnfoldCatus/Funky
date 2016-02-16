import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Sample } from '../../components/sample.jsx'
import { Navigation } from '../../components/navigation.jsx'
/*渲染本模块的菜单*/
ReactDOM.render(<Navigation menuKey={'/shot'} currentKey={'/sample'} />,document.getElementById('J_Nav'))
ReactDOM.render(<Sample />,document.getElementById('J_Main'))
