import { Hotel } from '../../components/hotel.jsx'
import { Navigation } from '../../components/navigation.jsx'
import 'es6-promise'
import 'fetch-detector'
import 'fetch-ie8'

/*渲染本模块的菜单*/
ReactDOM.render(<Navigation menuKey={'/hotel'} currentKey={'/hotel'} />,document.getElementById('J_Nav'))
ReactDOM.render(<Hotel />,document.getElementById('J_Main'))
