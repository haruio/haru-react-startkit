/**
 * Created by pheadra on 9/11/16.
 */
import React from 'react'

import debug from 'debug'
const log = debug('application:app.jsx')

import Header from '../components/Header'
import Menu from '../components/Menu'

import Popup from '../components/Popup'

import DevTools from '../components/DevTools'

export default class App extends React.Component {
  componentDidMount() {
    log('did mount app')

  }

  render() {
    return (
      <section>
        <Header />
        <Menu />
        {this.props.children}
        {this.renderDevTools}
        <Popup>
          {/*Popup Components*/}
        </Popup>
      </section>
    )
  }

  get renderDevTools() {
    if (process.env.NODE_ENV === 'production') {
      return null
    } else {
      return <DevTools />
    }
  }

}
