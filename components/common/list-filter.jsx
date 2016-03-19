import React, { PropTypes } from 'react'
import _ from 'lodash'
const ListFilter = React.createClass({
  render () {
    let dataKey=this.props.sorterKey.join(',')
    let valueKey =this.props.valueKey
    let valueName = this.props.name

    let conditions = _.size(this.props.conditions)>0 ? this.props.conditions:this.state.conditions
    return (
      <div className='filter-box'>
        <div className='title'><i className={this.props.klass}></i>{this.props.title}</div>
        <div className='tab-box'>
          <div className='l-box'><span className='tab tab-sel' data-key='' data-value=''>全部</span></div>
          <ul className='r-box'>
          {
            _.map(conditions,(v,k)=>{
              return (
                <li key={k}><span className='tab' data-key={dataKey} data-value={_.values(_.pick(v,valueKey)).join(',')}>{v[valueName]}</span></li>
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
  },
  getInitialState(){
    return {
      conditions:[]
    }
  },
  componentDidMount() {
    $('.filter-box').on('click',(evt)=>{
      if($(evt.target).hasClass('tab')){
         $(evt.currentTarget).find('.tab').removeClass('tab-sel')
         $(evt.target).addClass('tab-sel')
      }
    })


    if (this.props.dataUrl !== undefined) {
      fetch(this.props.baseUrl + this.props.dataUrl)
      .then(res=>{return res.json()})
      .then(j=>{
        console.log(j.data)
        this.setState({'conditions':j.data})
      })
    }
  }
})

export { ListFilter }
