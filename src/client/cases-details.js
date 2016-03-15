/**
 * Created by chenjianjun on 16/3/15.
 */
import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { CasesDetails } from '../../components/cases-details.jsx'
import { Navigation } from '../../components/navigation.jsx'
/*渲染本模块的菜单*/
ReactDOM.render(<Navigation menuKey={'/scheme'} currentKey={'/cases'} />,document.getElementById('J_Nav'))
ReactDOM.render(<CasesDetails />,document.getElementById('J_Main'))
