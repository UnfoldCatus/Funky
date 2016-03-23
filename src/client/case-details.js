/**
 * Created by chenjianjun on 16/3/15.
 */
import { CaseDetails } from '../../components/case-details.jsx'
import { Navigation } from '../../components/navigation.jsx'
import 'es6-promise'
import 'fetch-detector'
import 'fetch-ie8'
let paramsString = $('#J_Matrix').attr('data-params') || '{}' //从J_Matrix标签获取传入的参数
let params = JSON.parse(paramsString)
/*渲染本模块的菜单*/
ReactDOM.render(<Navigation menuKey={'/scheme'} currentKey={'/cases'} />,document.getElementById('J_Nav'))
ReactDOM.render(<CaseDetails dataParams={params} />,document.getElementById('J_Main'))
