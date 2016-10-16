/**
 * Created by pheadra on 9/11/16.
 */
import React  from 'react'
import {Link} from 'react-router'

import debug from 'debug'
const log = debug('application:Header.jsx')


export default class Header extends React.Component {
  render() {
    return (
      <header>
        header
      </header>
    )
  }
}
/*
Header.contextTypes = {
  router: React.PropTypes.object.isRequired,
  store: React.PropTypes.object.isRequired
}*/
