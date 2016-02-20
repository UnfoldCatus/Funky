import React, { PropTypes } from 'react'

const Adv = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },
  getDefaultProps() {
    return {name: 'AdvList'}
  },
  render() {
    return (
      <div>{this.props.name}</div>
    )
  },
  componentDidUpdate(prevProps, prevState) {
    console.log('adv update');
  },
  componentWillReceiveProps(nextProps) {
    console.log('receiveProps');
  },
  componentDidMount() {
    console.log('AdvList loaded');
  }
})
export { Adv }
