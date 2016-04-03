import { Cases } from '../../components/cases.jsx'
import { Navigation } from '../../components/navigation.jsx'
import 'es6-promise'
import 'fetch-detector'
import 'fetch-ie8'
/*渲染本模块的菜单*/
ReactDOM.render(<Navigation menuKey={'/scheme'} currentKey={'/cases'} />,document.getElementById('J_Nav'))
ReactDOM.render(<Cases />,document.getElementById('J_Main'))
