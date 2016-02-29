import { Supply } from '../../components/supply.jsx'
import { Navigation } from '../../components/navigation.jsx'
import 'es6-promise'
import 'fetch-detector'
import 'fetch-ie8'
/*渲染本模块的菜单*/
ReactDOM.render(<Navigation menuKey={'/supply'} currentKey={'/supply'} />,document.getElementById('J_Nav'))
ReactDOM.render(<Supply />,document.getElementById('J_Main'))
