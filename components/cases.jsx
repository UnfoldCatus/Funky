import React, { PropTypes } from 'react'
import { MediaSlider } from './common/media-slider.jsx'
import { Banner } from './common/banner.jsx'
import { CasesConfig } from './config/cases-config'
import { ListFilter } from './common/list-filter.jsx'
import _ from 'lodash'
import { SchemeListItem } from './common/scheme-list-item.jsx'
const CasesCategory  = React.createClass({
  render () {
    return (
      <div className='tab-title'>
        {
          _.map(this.state.categories,(v,k)=>{
            return (
              <span key={k} className={(k === 0)?'tab sel':'tab'} data-scheme-type={v.schemeType}>{v.name}</span>
            )
          })
        }
        <div className="line-bottom"></div>
      </div>
    )
  },
  propTypes: {
    config: React.PropTypes.object
  },
  getDefaultProps(){
    return {
      resourceUrl: ''
    }
  },
  getInitialState() {
    return {
      categories:[
        {'name':'实景案例','schemeType':1}
      ]
    }
  },
  componentDidMount() {
    if (this.props.resourceUrl === '') {
        console.log('read state from local');
    }else {
        console.log('start a fetch from remote');
    }
  }
})


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



const Cases = React.createClass({
  render () {
    return (
      <div className='sjal-view'>
        <div className='layout-center-box'>
          <div className='slider-box bannar mgb30'>
            <MediaSlider />
          </div>
          <Banner {...CasesConfig['Banner'][0]} />
          <CasesCategory {...CasesConfig['CasesCategory']}/>
          <div className='J_FilterCtrl' >
            <ListFilter title={'风格'} name={'styleName'} klass={'ico-1-js ico-1-2-js'} valueKey={['styleId']} conditions={this.state.styles} sorterKey={['styleId']} />
            <ListFilter title={'价位'} name={'name'} klass={'ico-1-js ico-1-1-js'} valueKey={['minPrice','maxPrice']} conditions={this.state.prices} sorterKey={['minPrice','maxPrice']} />
          </div>
          <CasesList {...this.state.list} />
          <div onClick={this.loadMore} id="J_MoreButton">
            <div className="more-btn"><span>点击查看更多</span></div>
          </div>
        </div>
      </div>
    )
  },
  getInitialState(){
    return {
      'styles':[],
      'prices':[],
      'list':{}
    }
  },
  loadMore(){

  }


})

export { Cases }
