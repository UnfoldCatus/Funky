import React, { PropTypes } from 'react'
import _ from 'lodash'
const ListFilter = React.createClass({
  render () {
    let dataKey=this.props.sorterKey.join(',')
    let valueKey =this.props.valueKey
    let valueName = this.props.name
    return (
      <div className='filter-box'>
        <span className='title'><i className={this.props.klass}></i>{this.props.title}</span>
        <div className='tab-box'>
          <span className='tab' data-key='' data-value=''>全部</span>
          {
            _.map(this.props.conditions,(v,k)=>{
              return (
                <span key={k} className='tab' data-key={dataKey} data-value={_.values(_.pick(v,valueKey)).join(',')}>{v[valueName]}</span>
              )
            })
          }
        </div>
      </div>
    )
  },
  propTypes: {
    klass: PropTypes.string,
    title: PropTypes.string,
    conditions:PropTypes.array,
    name:PropTypes.string,
    valueKey:PropTypes.array,
    sorterKey:PropTypes.array
  },
  getDefaultProps(){
    return {
      klass:'',
      title:'加载中...',
      conditions:[],
      name:'',
      valueKey:[],
      sorterKey:[]
    }
  }
})

export { ListFilter }
