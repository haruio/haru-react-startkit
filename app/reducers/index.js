/**
 * Created by pheadra on 9/11/16.
 */
import { combineReducers } from 'redux-immutable'

import user from './userReducer'
import popup from './popupReducer'
import routing from './routeReducer'


const rootReducer = combineReducers({
  user,
  popup,
  routing
})

export default rootReducer
