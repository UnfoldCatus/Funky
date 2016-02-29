/**
 * Created by chenjianjun on 16/2/27.
 */
import { Dress } from '../../components/dress.jsx'
import { Navigation } from '../../components/navigation.jsx'
import 'es6-promise'
import 'fetch-detector'
import 'fetch-ie8'

/*渲染本模块的菜单*/
ReactDOM.render(<Navigation menuKey={'/dress'} currentKey={'/dress'} />,document.getElementById('J_Nav'))
ReactDOM.render( <Dress />,document.getElementById('J_Main'))
