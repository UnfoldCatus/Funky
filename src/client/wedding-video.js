import { WeddingVideo } from '../../components/wedding-video.jsx'
import { Navigation } from '../../components/navigation.jsx'
import 'es6-promise'
import 'fetch-detector'
import 'fetch-ie8'
/*渲染本模块的菜单*/
ReactDOM.render(<Navigation menuKey={'/scheme'} currentKey={'/weddingvideo'} />,document.getElementById('J_Nav'))
ReactDOM.render(<WeddingVideo />,document.getElementById('J_Main'))
