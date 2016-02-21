import { Sample } from '../../components/sample.jsx'
import { Navigation } from '../../components/navigation.jsx'
import 'es6-promise'
import 'fetch-detector'
import 'fetch-ie8'
/*渲染本模块的菜单*/
ReactDOM.render(<Navigation menuKey={'/shot'} currentKey={'/sample'} />,document.getElementById('J_Nav'))
ReactDOM.render(<Sample />,document.getElementById('J_Main'))
