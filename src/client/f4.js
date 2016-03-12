/**
 * Created by chenjianjun on 16/3/12.
 */
import { F4 } from '../../components/f4.jsx'
import { Navigation } from '../../components/navigation.jsx'
import 'es6-promise'
import 'fetch-detector'
import 'fetch-ie8'

/*渲染本模块的菜单*/
ReactDOM.render(<Navigation menuKey={'/f4'} currentKey={'/f4'} />,document.getElementById('J_Nav'))
ReactDOM.render( <F4 />,document.getElementById('J_Main'))
