import React, { PropTypes } from 'react'

const ListCount = React.createClass({
  render () {
    return (
      <div className="screening-results">
        <span className="find"><span>{this.props.displayTextPrefix}</span><b className='J_Count'>{this.props.count}</b><span>{this.props.displayTextSuffix}</span></span>
      </div>
    )
  },
  propTypes: {
    displayTextPrefix: React.PropTypes.string, //例如 找到最佳样片
    displayTextSuffix:React.PropTypes.string, //例如 套/个
    count:React.PropTypes.number
  },
  getDefaultProps(){
    return {
      'displayTextPrefix':'找到结果 ',
      'displayTextSuffix':' 个',
      'count':0
    }
  }
})

export { ListCount } 
