/**
 * Created by pheadra on 9/18/16.
 */

import { Map, fromJS } from 'immutable'

export default {
  popup: Map([]),
  route: fromJS({
    locationBeforeTransitions: null
  }),
  user: fromJS({
    isLogin: false
  })
}
