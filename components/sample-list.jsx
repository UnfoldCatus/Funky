import React, { PropTypes } from 'react'
import { AdvList } from './adv-list.jsx'

const SampleList = React.createClass({
  getInitialState() {
    return {
      name:'AdvList'
    }
  },
  render () {
    return (
        <AdvList name={this.state.name} />
    )
  },
  componentDidUpdate(prevProps, prevState) {
    console.log('i am updated');
  },
  componentDidMount() {
    /*启动ajax请求*/
    console.log('SampleList loaded');
    this.setState({
      name:'appleseedez'
    })
  }
})
export { SampleList }
