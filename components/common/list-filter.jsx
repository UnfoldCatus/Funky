import React, { PropTypes } from 'react'
import _ from 'lodash'
const ListFilter = React.createClass({
  render () {
    let dataKey=this.props.sorterKey.join(',')
    let valueKey =this.props.valueKey
    let valueName = this.props.name
    return (
      <div className='filter-box'>
        <div className='title'><i className={this.props.klass}></i>{this.props.title}</div>
        <div className='tab-box'>
          <div className='l-box'><span className='tab tab-sel' data-key='' data-value=''>全部</span></div>
          <ul className='r-box'>
          {
            _.map(this.props.conditions,(v,k)=>{
              return (
                <li><span key={k} className='tab' data-key={dataKey} data-value={_.values(_.pick(v,valueKey)).join(',')}>{v[valueName]}</span></li>
              )
            })
          }
          </ul>
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
