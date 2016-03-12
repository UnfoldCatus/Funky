import React, { PropTypes } from 'react'
import { MediaSlider } from './common/media-slider.jsx'
import { ShotListItem } from './common/shot-list-item.jsx'
import { Banner } from './common/banner.jsx'
import { PringlesConfig } from './config/pringles-config'
import _ from 'lodash'
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
      <div className='layout-center-box'>
        <div className='title-center'>
          <h1>客片分季欣赏</h1>
        </div>
        <div className='tab-box-fj' id='J_SliderQuarterly'>
          <div className='overflow-box slider-box'>
            <ul className='item-box'>
              {
                _.map(this.state.data,(v,k)=>{
                  return (
                    <li key={k} className='item'>
                      <div className='pos-box'>
                        <div className='click-box'></div>
                        <div className='pic'><img src={v.coverUrl} /></div>
                        <p><span>{v.weddingDate}</span><br /><span>{v.seasonName}</span></p>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className='arrow-lef btn-prev'></div>
          <div className='arrow-rig btn-next'></div>
        </div>
        <div className='title-fj'><h2>{'《'+this.state.quarterly_name+'》'}</h2></div>
        <ShotListItem {...PringlesConfig['EpisodeListItem']} />
      </div>
    )
  },
  getInitialState: function() {
    return {
      data:[],
      quarterly_name:'金色百年'
    }
  },
  componentDidMount() {
    if (this.props.dataUrl !== undefined) {
      fetch(this.props.baseUrl + this.props.dataUrl)
      .then(res => {return res.json()})
      .then(j=>{
        this.setState({ data:j.data })
      })
    }
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
              <Episode {...PringlesConfig['Episode']}/>
          </div>
      </div>
    )
  }
})

export { Pringles }
