/**
 * Created by pheadra on 9/11/16.
 */
import debug from 'debug'
const log = debug('application:popupReducer')

import AppConstants from '../constants/AppConstants'
import InitialState from './initialState'

export default function popupReducer(state = InitialState.popup, action) {
  switch(action.type) {
    case AppConstants.OPEN_POPUP :
      return state.set(action.result.key, action.result.props || {})
    case AppConstants.CLOSE_POPUP :
      return state.delete(action.result.key)
    case AppConstants.CLOSE_ALL_POPUP :
      return state.clear()
  }
  return state
}
