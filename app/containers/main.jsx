import React from 'react'
import { Link } from 'react-router'

import debug from 'debug'
const log = debug('application:main.jsx')

/**
 * A pages to Main
 */
export default class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    //AppActions.getBanner()
  }

  render() {
    log('main render')
    return (
      <article id="main">
        <Link to="test">Home!!!!</Link>
        {/*<Banner />*/}
        maindfs
      </article>
    )
  }
}
