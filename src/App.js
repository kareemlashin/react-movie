import './assets/styles/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

import '@fortawesome/fontawesome-free/css/all.min.css'
import Home from './layout/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import './i18n'
import { Suspense } from 'react'
import { Provider } from 'react-redux'
import store from './core/store/store.js'
import Loading from './component/Loading/Loading'
import Main from './layout/Main/Main'
import Base from './layout/Base/index'
import LoadMore from './pages/LoadMore/LoadMore'
import Pagination from './pages/Pagination/index'
import Scrolling from './pages/Scrolling/Scrolling'

function App() {
  return (
 
    <Provider store={store}>
      <Suspense fallback={<> </>}>
        
      <Loading />
          <Router>
          <Base>

            <Switch>
            <Route path={['/Home']}>
                <Home>
                  <Switch>
                    <Route path="/Home" component={Home} />
                  
                  </Switch>
                </Home>
              </Route>
              
              <Route path={['/loadMore','/pagination','/Scrolling','/','*']}>
                <Main>
                  <Switch>
                    <Route path="/loadMore" component={LoadMore} />
                    <Route path="/pagination" component={Pagination} />
                    <Route path="/Scrolling" component={Scrolling} />
                    <Redirect path="/" to="/home" />
                    <Redirect path="*" to="/home" />
             
                  </Switch>
                </Main>
              </Route>
              
              
            </Switch>
            </Base>

          </Router>
      </Suspense>
    </Provider>
  )
}

export default App
