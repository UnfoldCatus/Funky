import React, { PropTypes } from 'react'
import { AdvList } from './adv-list.jsx'

export const SampleList = React.createClass({
  render () {
    return (
        <AdvList />
    )
  },
  componentDidMount() {
    /*启动ajax请求*/
    console.log('SampleList loaded');
  }
})
