/**
 * Created by pheadra on 9/9/15.
 */

import './styles.css'
import React from 'react'
import ReactDOM from 'react-dom'

import debug from 'debug'
const log = debug('application:bootstrap')

// Enable debug messages outside of production
if (process.env.NODE_ENV !== 'production') {
  debug.enable('application:*')
}

log('mounting react-router')
import Router from './router'

ReactDOM.render(<Router />, document.getElementById('app'))
