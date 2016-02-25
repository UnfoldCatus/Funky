import { Pringles } from '../../components/pringles.jsx'
import { Navigation } from '../../components/navigation.jsx'
import 'es6-promise'
import 'fetch-detector'
import 'fetch-ie8'
/*渲染本模块的菜单*/
ReactDOM.render(<Navigation menuKey={'/shot'} currentKey={'/pringles'} />,document.getElementById('J_Nav'))
ReactDOM.render(<Pringles />,document.getElementById('J_Main'))
