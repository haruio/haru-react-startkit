/**
 * Created by pheadra on 9/18/16.
 */

const { describe, it } = global

import expect from 'expect'
import popupReducer from './popupReducer'
import PopupActions from '../actions/PopupActions'
import Immutable from 'immutable'

/**
 * 1. initialState and action parameter
 * 2. action creator
 * 3. reducer
 * 4. expect
 */
describe('Popup Reducer', () => {
  it('should add popup when passed OPEN_POPUP', () => {
    // arrange
    const init = Immutable.Map({ A: {} })
    const key = 'POPUPTEST'

    // act
    const action = PopupActions.openPopup(key)

    //act
    const newState = popupReducer(init, action)

    //assert
    expect(newState.count()).toEqual(2)
    expect(newState.has(key)).toEqual(true)
  })

  it('should remove popup when passed CLOSE_POPUP', () => {
    // arrange
    const init = Immutable.Map({ POPUPTEST: {} })
    const key = 'POPUPTEST'

    // act
    const action = PopupActions.closePopup(key)

    //act
    const newState = popupReducer(init, action)

    //assert
    expect(newState.count()).toEqual(0)
    expect(newState.has(key)).toEqual(false)
  })

  it('should initialState POPUP testing', () => {
    // arrange
    const init = Immutable.Map({ POPUPTEST: {} })
    const key = 'POPUPTEST'

    // act
    const action = {}

    //act
    const newState = popupReducer(init, action)

    //assert
    expect(newState.count()).toEqual(1)
    expect(newState.has(key)).toEqual(true)
  })

  it('should remove all popup when passed CLOSE_ALL_POPUP', () => {
    // arrange
    const init = Immutable.Map({ POPUPTEST: {}, POPUPTEST2: {} })

    // act
    const action = PopupActions.closeALLPopup()

    //act
    const newState = popupReducer(init, action)

    //assert
    expect(newState.count()).toEqual(0)
  })
})
