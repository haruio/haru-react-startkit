/**
 * Created by pheadra on 9/9/15.
 */

import React from 'react'
import { applyRouterMiddleware, Router, IndexRoute, Route, browserHistory } from 'react-router'
import useScroll from 'react-router-scroll/lib/useScroll'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import Immutable from 'immutable'

import debug from 'debug'
const log = debug('application:router')

/* aync log queue : 추후에 활용할까봐 넣어놨음. */
import Logger from './utils/logger.js'

import App from './containers/app'
import Main from './containers/main'
import Test from './containers/testComponent'

import NotFound from './containers/notFound'

import configureStore from './stores/configureStore'
//import UserActions from './actions/UserActions'

const initialState = Immutable.Map()
const store = configureStore(initialState)
//store.dispatch(UserActions.LoginCheck())

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState(state) {
    return state.get('routing').toJS()
  }
})


export default class extends React.Component {
  constructor(props) {
    super(props)

    if (browserHistory != undefined) {
      browserHistory.listen((location) => {
        let next = location.pathname
        Logger.move(this.prev, next, location.search)
        this.prev = next
      })
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}
                render={applyRouterMiddleware(useScroll())}>
          <Route path="/" component={ App }>
            <IndexRoute component={ Main }/>

            <Route path="/test" component={ Test }/>
            <Route path="*" component={ NotFound }/>
          </Route>
        </Router>
      </Provider>
    )
  }
}


