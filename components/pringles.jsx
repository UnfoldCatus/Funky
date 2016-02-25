import React, { PropTypes } from 'react'
import { MediaSlider } from './common/media-slider.jsx'
import { ShotListItem } from './common/shot-list-item.jsx'
import { Banner } from './common/banner.jsx'
import { PringlesConfig } from './config/pringles-config'
/**
<Pringles>
  <MediaSlider />
  <Banner />
  <PringlesList />
  <Episode />
</Pringles>
**/


const Episode = React.createClass({
  render () {
    return (
      <h1>Episode</h1>
    )
  }
})

const PringlesList = React.createClass({
  render () {
    return (
      <div className="samples-list">
        <div className="screening-results">
          <span className="find"><span>找到最佳客片</span><b className='J_Count'>{this.props.totalPage}</b><span>套</span></span>
        </div>
        <ShotListItem {...PringlesConfig['ShotListItem']} />
      </div>
    )
  },
  propTypes: {
    totalPage: React.PropTypes.number,
  },
  getDefaultProps(){
    return {
      totalPage:1
    }
  }
})

const Pringles = React.createClass({
  render () {
    return (
      <div className='kpxs-view'>
          <div id="slider_top" className="slider-box bannar-all-box" style={{height:'450px'}}>
            <div className="bannar" style={{height:'450px'}}>
              <MediaSlider {...PringlesConfig['MediaSlider']}/>
            </div>
          </div>
          <div className="layout-center-box">
            <div className='mgt30'>
              <Banner {...PringlesConfig['Banner'][0]}/>
            </div>
              <PringlesList />
          </div>
          <div onClick={this.loadMore} id="J_MoreButton">
              <div className="more-btn"><span>点击查看更多</span></div>
          </div>
          <div className='space-100-eav mgb30'></div>
          <div className='main-body-eav'>
              <Episode />
          </div>
      </div>
    )
  }
})

export { Pringles }
