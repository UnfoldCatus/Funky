import React, { PropTypes } from 'react'


const SampleMarkup = React.createClass({
  render () {
    return (
      <div className='layer-title'>
        <i className='golden-wedding'></i>
        <h2>{this.props.contentName || '金色百年'}</h2>
      </div>
    )
  }
})


const PringlesMarkup = React.createClass({
  render () {
    return (
      <div>
        <h2 className="layer-title">{this.props.contentName}</h2>
        <div className="hover-title">
          <i className='ico-love'></i>
          <h3>
            <b>{this.props.actorNameMale}</b>
            <em>{String.fromCharCode(0x00b7)}</em>
            <b>{this.props.actorNameFemale}</b>
          </h3>
        </div>
      </div>
    )
  }
})






const MediaLayer = React.createClass({
  render () {
    switch (this.props.type) {
      case 'sample':
      return (
        <SampleMarkup {...this.props} />
      )
      case 'pringles':
      return (
        <PringlesMarkup {...this.props}/>
      )
      default:
        console.log('不支持的类型');
    }

  }
})

export { MediaLayer }
