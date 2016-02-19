import React, { PropTypes } from 'react'
import _ from 'lodash'
import { MediaSlider } from './common/media-slider.jsx'
import { MediaItem } from './common/media-item.jsx'

import { SuiteConfig } from './config/suite-config'
/**
  组件结构

  <Suite> <= data
    <MediaSlider />
    <SuiteList />
    <AdSide />
  </Suite>
**/

const SuiteList = React.createClass({
  render () {
    return (
      <div className='list-recommend'>
        <div className="title-box">
          <h1>婚纱摄影套系</h1>
          <span className="find">找到 <b>{this.props.totalCount}</b> 个套系</span>
        </div>
        {
          _.map(this.props.data,(v,k)=>{
            return (
              <li className="item-box" key={k}>
                <MediaItem />
                <div className='r-box'>
                  <div className="price">
                    <em>¥</em><b>{parseFloat(v.price).toFixed(2)}</b>
                  </div>
                  <div className='scrollbarall cur-scroll'>
                    <div className="scrollbar">
                      <div className="track">
                        <div className="thumb">
                          <div className="end"></div>
                        </div>
                      </div>
                    </div>
                    <div className='viewport'>
                      <SuitesInfo info={v.shootAdress} />
                    </div>
                  </div>
                  <div className="func transition-border"></div>
                </div>
              </li>
            )
          })
        }
      </div>
    )
  },
  propTypes: {
    data: React.PropTypes.array,
    totalCount:React.PropTypes.number
  },
  getDefaultProps(){
    return {
      data:[],
      totalCount:0
    }
  }
})


const AdvSide = React.createClass({
  render () {
    let listLength=this.props.adList.length
    return (
      <div className='ad-box'>
        {
          _.map(this.props.adList,(v,k)=>{
            return (
              <img key={k} src={v.imageUrl} className={(listLength > k+1)?'mgb30':''} />
            )
          })
        }
      </div>
    )
  }
})

/* main */
const Suite = React.createClass({
  render () {
    let adList = SuiteConfig['AdvSide']
    return (
      <div className="txbj-view">
        <div className="custom-banner bannar-all-box mgb30">
          <div id="slider_top" className="slider-box-1-js bannar" style={{height:"450px"}}>
            <MediaSlider />
          </div>
        </div>
        <div className="layout-center-box">
          <div className="container clearfix">
            <div className="column-mg30-18 mgr30">
              <SuiteList {...this.state.data}/>
            </div>
            <AdvSide adList={adList} />
           </div>
        </div>
      </div>
    )
  },
  getInitialState: function() {
    return {
      data:{}
    };
  },
})

export { Suite }
