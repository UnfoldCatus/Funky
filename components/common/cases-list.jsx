import React, { PropTypes } from 'react'
import { SchemeListItem } from './scheme-list-item.jsx'

const CasesList  = React.createClass({
  render () {
    return (
      <div className="case-list-view">
        <div className="screening-results">
          <span className="find"><span>找到最佳案例</span><b className='J_Count'>-</b><span>套</span></span>
        </div>
        <SchemeListItem {...this.props}/>
      </div>
    )
  },
  propTypes: {
    dataUrl:React.PropTypes.string
  },
  getDefaultProps(){
    return {
      dataUrl:''
    }
  }
})
export { CasesList }
