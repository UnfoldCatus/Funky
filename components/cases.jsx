import React, { PropTypes } from 'react'
import { MediaSlider } from './common/media-slider.jsx'
import { Banner } from './common/banner.jsx'
import { CasesConfig } from './config/cases-config'
import _ from 'lodash'

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
          <div className='slider-box bannar mgb30'>
            <MediaSlider />
          </div>
          <Banner {...CasesConfig['Banner'][0]} />
          <CasesCategory {...CasesConfig['CasesCategory']}/>
          <div className='J_FilterCtrl' >
            <ListFilter title={'风格'} name={'styleName'} klass={'ico-1-js ico-1-2-js'} valueKey={['styleId']} conditions={this.state.styles} sorterKey={['styleId']} />
            <ListFilter title={'场景'} name={'addressName'} klass={'ico-1-js ico-1-3-js'} valueKey={['addressId']} conditions={this.state.scenes} sorterKey={['addressId']} />
          </div>
        </div>

      </div>
    )
  }
})

export { Cases }
