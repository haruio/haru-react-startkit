/**
 * Created by pheadra on 9/9/16.
 */
import AppConstants from '../constants/AppConstants'

const PopupActions = {
  /***
   * 팝업을 열때 호출하는 액션
   * @param key {POPUP} - 팝업 키(팝업 아이디)
   * @param props {Object} - 팝업으로 넘기고 싶은 데이터
   * @returns {{type: *, result: {key: *, props: {}}}}
     */
  openPopup(key, props = {}) {
    return {
      type: AppConstants.OPEN_POPUP,
      result: { key, props }
    }
  },
  /***
   * 팝업을 닫을때 호출하는 액션
   * @param key {POPUP} - 팝업 키(팝업 아이디)
   * @returns {{type: *, result: {key: *}}}
     */
  closePopup(key) {
    return {
      type: AppConstants.CLOSE_POPUP,
      result: {key}
    }
  },
  /***
   * 열려잇는 모든 팝업을 닫는 액션
   * @returns {{type: *}}
   */
  closeALLPopup() {
    return {
      type: AppConstants.CLOSE_ALL_POPUP
    }
  }
}

export default PopupActions
