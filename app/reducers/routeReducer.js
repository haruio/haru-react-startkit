/*
 * Created by pheadra on 9/11/16.
 * react-router-redux에 routeReducer가 있지만 immutable하지 않기 때문에 redux-immutable로 인해서 재구현
 */

import { LOCATION_CHANGE } from 'react-router-redux'
import Immutable from 'immutable'
import InitialState from './initialState'


// Initial routing state
/*const routeInitialState = Immutable.fromJS({
 locationBeforeTransitions: null
 })*/

/**
 * Merge route into the global application state
 */
export default function routeReducer(state = InitialState.route, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload
      })
    default:
      return state
  }
}
