import { Car } from '../../components/car.jsx'
import { Navigation } from '../../components/navigation.jsx'
import 'es6-promise'
import 'fetch-detector'
import 'fetch-ie8'
/*渲染本模块的菜单*/
ReactDOM.render(<Navigation menuKey={'/car'} currentKey={'/car'} />,document.getElementById('J_Nav'))
ReactDOM.render(<Car />,document.getElementById('J_Main'))
