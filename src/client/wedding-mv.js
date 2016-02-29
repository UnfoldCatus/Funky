import { WeddingMV } from '../../components/wedding-mv.jsx'
import { Navigation } from '../../components/navigation.jsx'
import 'es6-promise'
import 'fetch-detector'
import 'fetch-ie8'
/*渲染本模块的菜单*/
ReactDOM.render(<Navigation menuKey={'/shot'} currentKey={'/weddingmv'} />,document.getElementById('J_Nav'))
ReactDOM.render(<WeddingMV />,document.getElementById('J_Main'))
