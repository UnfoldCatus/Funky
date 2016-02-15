import React, { PropTypes } from 'react'

const AdvList = React.createClass({
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
export { AdvList }
