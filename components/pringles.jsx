import React, { PropTypes } from 'react'
import { MediaSlider } from './common/media-slider.jsx'
import { ShotListItem } from './common/shot-list-item.jsx'
import { Banner } from './common/banner.jsx'
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
          <span className="find"><span>找到最佳客片</span><b>{this.props.totalPage}</b><span>套</span></span>
        </div>
        <ShotListItem {...this.props} type='pringles' />
      </div>
    )
  },
  propTypes: {
    totalPage: React.PropTypes.number,
  },
  getDefaultProps(){
    return {
      totalPage:1,
      data:[{
        contentName:'丁丁蒸着吃',
        actorNameMale:'李君',
        actorNameFemale:'李佳'
      }]
    }
  }
})

const Pringles = React.createClass({
  render () {
    return (
      <div className='kpxs-view'>
          <div id="slider_top" className="slider-box bannar-all-box" style={{height:'450px'}}>
            <div className="bannar" style={{height:'450px'}}>
              <MediaSlider />
            </div>
          </div>
          <div className="layout-center-box">
            <div className="bannar-box mgt30">
              <img src="//image.jsbn.com/static/kpxs.png" />
            </div>
              <PringlesList {...this.props.list} />
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
  },
  propTypes: {
    list: React.PropTypes.array
  },
  getDefaultProps(){
    return {
      list:[]
    }
  },
  componentDidMount() {
    console.log('pringles');
  }
})

export { Pringles }
