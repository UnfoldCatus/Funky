/**
 * Created by chenjianjun on 16/3/9.
 */
import { PringlesDetails } from '../../components/pringles-details.jsx'
import { Navigation } from '../../components/navigation.jsx'
import 'es6-promise'
import 'fetch-detector'
import 'fetch-ie8'

/*渲染本模块的菜单*/
ReactDOM.render(<Navigation menuKey={'/shot'} currentKey={'/pringles'} />,document.getElementById('J_Nav'))
ReactDOM.render( <PringlesDetails />,document.getElementById('J_Main'))
