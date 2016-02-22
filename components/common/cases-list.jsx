import React, { PropTypes } from 'react'
import { SchemeListItem } from './scheme-list-item.jsx'

const CasesList  = React.createClass({
  render () {
    return (
      <div className="case-list-view">
        <div className="screening-results">
          <span className="find"><span>找到最佳案例</span><b>{this.props.totalPage}</b><span>套</span></span>
        </div>
        <SchemeListItem {...this.props}/>
      </div>
    )
  },
  propTypes: {
    totalPage: React.PropTypes.number,
    data:React.PropTypes.array
  },
  getDefaultProps(){
    return {
      totalPage:1,
      data:[
        {schemeName:'test',weddingDate:'2015-10-10'}
      ]
    }
  }
})
export { CasesList }
