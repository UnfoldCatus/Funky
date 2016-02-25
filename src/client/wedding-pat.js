import { WeddingPat } from '../../components/wedding-pat.jsx'
import { Navigation } from '../../components/navigation.jsx'
import 'es6-promise'
import 'fetch-detector'
import 'fetch-ie8'
/*渲染本模块的菜单*/
ReactDOM.render(<Navigation menuKey={'/scheme'} currentKey={'/weddingpat'} />,document.getElementById('J_Nav'))
ReactDOM.render(<WeddingPat />,document.getElementById('J_Main'))
