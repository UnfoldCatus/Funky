import { Home } from '../../components/home.jsx'
import { Navigation } from '../../components/navigation.jsx'
import 'es6-promise'
import 'fetch-detector'
import 'fetch-ie8'
/*渲染本模块的菜单*/
ReactDOM.render(<Navigation menuKey={'/home'} currentKey={'/home'} />, document.getElementById('J_Nav'))
ReactDOM.render(<Home />,document.getElementById('J_Main'))
