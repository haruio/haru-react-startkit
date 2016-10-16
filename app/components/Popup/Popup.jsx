/**
 * Created by jungenpark on 5/2/16.
 */
import React from 'react'
import {connect} from 'react-redux'
import assign from 'object-assign'

import PopupActions from '../../actions/PopupActions'

import debug from 'debug'
const log = debug('application:Popup.jsx')

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './Popup.css'

class Popup extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }

  handleKeyPress = (e) => {
    if(e.code == 'Escape') {
      this.closePopup()
    }
  }

  closePopup = () => {
    this.props.closeALLPopup()
  }

  render() {
    // Children 중 PopupStore에 키가 들어온 팝업만 보여준다
    let children
    if (!this.props.children) {
      // No child
      children = []
    } else {
      // One child or many children
      children = Array.isArray(this.props.children) ? this.props.children : new Array(this.props.children)
    }
    let childPopups = children.map((Element) => {
      let popupKey = Element.key
      let popupProps = this.props.popup.get(popupKey)
      if (popupProps) {
        let PopupElement = Element.type
        let props = assign({}, Element.props, popupProps)

        return <PopupElement key={popupKey} close={this.closePopup.bind(null, popupKey)} {...props}/>
      }
    })
    return (
      <ReactCSSTransitionGroup transitionName="popup"
                               transitionLeaveTimeout={500}
                               transitionEnterTimeout={500}
                               component="div"
                               onClick={this.closePopup}>
        {childPopups}
      </ReactCSSTransitionGroup>
    )
  }
}

function mapStateToPopupProps({popup}) {
  return {popup}
}

function mapDispatchToPopupProps(dispatch) {
  return {
    closeALLPopup: () => {
      dispatch(PopupActions.closeALLPopup())
    }
  }
}

export default connect(mapStateToPopupProps, mapDispatchToPopupProps)(Popup)
