import { WeddingClassDetails } from '../../components/weddingclass-details.jsx'
import { Navigation } from '../../components/navigation.jsx'
import 'es6-promise'
import 'fetch-detector'
import 'fetch-ie8'

let paramsString = $('#J_Matrix').attr('data-params') || '{}' //从J_Matrix标签获取传入的参数
let params = JSON.parse(paramsString)
let parentMenuKey = $('#J_Matrix').attr('data-parent-menu-key') || '/'
let currentKey = $('#J_Matrix').attr('data-current-menu-key') || '/weddingclass'
/*渲染本模块的菜单*/
ReactDOM.render(<Navigation menuKey={parentMenuKey} currentKey={currentKey} />,document.getElementById('J_Nav'))
ReactDOM.render(<WeddingClassDetails dataParams={params}/>,document.getElementById('J_Main'))
