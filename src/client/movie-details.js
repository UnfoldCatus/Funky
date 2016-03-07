/**
 * Created by chenjianjun on 16/3/7.
 */
import { MovieDetails } from '../../components/movie-details.jsx'
import { Navigation } from '../../components/navigation.jsx'
import 'es6-promise'
import 'fetch-detector'
import 'fetch-ie8'

/*渲染本模块的菜单*/
ReactDOM.render(<Navigation menuKey={'/movie'} currentKey={'/movie'} />,document.getElementById('J_Nav'))
ReactDOM.render( <MovieDetails />,document.getElementById('J_Main'))
