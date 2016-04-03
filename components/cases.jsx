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






const Cases = React.createClass({
  render () {
    return (
      <div className='sjal-view'>
        <div className='layout-center-box'>
          <div className='slider-box bannar mgb30' id="slider_top" style={{height:CasesConfig['MediaSlider']['height']}}>
            <MediaSlider {...CasesConfig['MediaSlider']} />
          </div>
          <Banner {...CasesConfig['Banner'][0]} />
          <CasesCategory {...CasesConfig['CasesCategory']} />
          <div className='J_FilterCtrl' >
            <ListFilter title={'风格'} name={'name'} klass={'ico-1-js ico-1-2-js'} valueKey={['id']}  sorterKey={['styleId']} {...CasesConfig['StyleFilter']} />
            <ListFilter title={'价位'} name={'name'} klass={'ico-1-js ico-1-1-js'} valueKey={['minPrice','maxPrice']}  sorterKey={['minPrice','maxPrice']}
              {...CasesConfig['PriceFilter']} />
          </div>
          <SchemeListItem {...CasesConfig['SchemeListItem']} params={_.merge(this.state.params,CasesConfig['SchemeListItem'].params)}/>
          <div  id="J_MoreButton">
            <div className="more-btn"><span>点击查看更多</span></div>
          </div>
        </div>
      </div>
    )
  },
  getInitialState() {
    return {
      params:{}
    }
  },
  componentDidMount() {
    CasesConfig['StyleFilter']['setupFilterClick']('multi',this)
  }


})

export { Cases }
