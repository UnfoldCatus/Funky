import React, { PropTypes } from 'react'
import { Adv } from './adv.jsx'

const Sample = React.createClass({
  getInitialState() {
    return {
      name:'Adv'
    }
  },
  render () {
    return (
        <Adv name={this.state.name} />
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
export { Sample }
