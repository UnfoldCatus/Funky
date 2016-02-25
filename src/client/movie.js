import { Movie } from '../../components/movie.jsx'
import { Navigation } from '../../components/navigation.jsx'
import 'es6-promise'
import 'fetch-detector'
import 'fetch-ie8'

/*渲染本模块的菜单*/
ReactDOM.render(<Navigation menuKey={'/movie'} currentKey={'/movie'} />,document.getElementById('J_Nav'))
ReactDOM.render( <Movie />,document.getElementById('J_Main'))
