/**
 * Created by pheadra on 9/18/16.
 */

const { describe, it } = global

import expect from 'expect'
import { createStore } from 'redux'
import rootReducer from '../reducers'
import PopupActions from '../actions/PopupActions'
import Immutable from 'immutable'

/*
  Store Test
  1.createstore
  2.action creator
  3.store.dispatch
  4.store.getState()
  5.expect

 */

describe('Store', function () {
  it('Should handle creating popup', function () {
    // arrange
    const store = createStore(rootReducer, Immutable.Map())
    const key = 'POPUPTEST'

    // act
    const action = PopupActions.openPopup(key)
    store.dispatch(action)

    // assert
    const actual = store.getState().get('popup')
    expect(actual.has(key)).toEqual(true)
  })
})
