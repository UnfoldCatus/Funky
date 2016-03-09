/**
 * Created by chenjianjun on 16/3/9.
 */
import { SampleDetails } from '../../components/sample-details.jsx'
import { Navigation } from '../../components/navigation.jsx'
import 'es6-promise'
import 'fetch-detector'
import 'fetch-ie8'

/*渲染本模块的菜单*/
ReactDOM.render(<Navigation menuKey={'/shot'} currentKey={'/sample'} />,document.getElementById('J_Nav'))
ReactDOM.render( <SampleDetails />,document.getElementById('J_Main'))
