import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Pringles } from '../../components/pringles.jsx'
import { Navigation } from '../../components/navigation.jsx'
/*渲染本模块的菜单*/
ReactDOM.render(<Navigation menuKey={'/shot'} currentKey={'/pringles'} />,document.getElementById('J_Nav'))
ReactDOM.render(<Pringles />,document.getElementById('J_Main'))
