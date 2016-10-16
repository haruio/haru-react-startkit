const { describe, it } = global

import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'

import Header from './Header'

function setup() {
  const props = {

  }

  return shallow(<Header {...props} />)
}

describe('Header Component', () => {
  it('renders header tag', () => {
    const wrapper = setup()
    expect(wrapper.find('header').length).toBe(1)
  })

  it('renders header and then check text', () => {
    const wrapper = setup()
    expect(wrapper.find('header').text()).toEqual('header')
  })
})
