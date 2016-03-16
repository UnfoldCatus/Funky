/**
 * Created by chenjianjun on 16/3/16.
 */
import { Active } from '../../components/common/active.jsx'
import { Navigation } from '../../components/navigation.jsx'
import 'es6-promise'
import 'fetch-detector'
import 'fetch-ie8'
/*渲染本模块的菜单*/
ReactDOM.render(<Navigation menuKey={'/'} currentKey={'/'} />,document.getElementById('J_Nav'))
ReactDOM.render(<Active />,document.getElementById('J_Main'))
