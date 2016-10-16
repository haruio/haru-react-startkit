/**
 * Created by pheadra on 9/11/16.
 */
import React  from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import cn from 'classnames'

import debug from 'debug'
const log = debug('application:Menu.jsx')


export class Menu extends React.Component {
  render() {
  	return (<aside>
  	menu
  	</aside>)
  }
}

Menu.contextTypes = {
  router: React.PropTypes.object.isRequired
}

Menu.PropTypes = {
/*
  categories : ImmutablePropTypes.list,
  channels : ImmutablePropTypes.list,
  menu : React.PropTypes.bool
*/
}


function mapStateToMenuProps({}) {
  return {}
}

function mapDispatchToMenuProps(dispatch) {
  return {

  }
}

export default connect(mapStateToMenuProps, mapDispatchToMenuProps)(Menu)
