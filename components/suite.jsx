import React, { PropTypes } from 'react'
import _ from 'lodash'
import { MediaSlider } from './common/media-slider.jsx'
import { MediaItem } from './common/media-item.jsx'
import { SuiteConfig } from './config/suite-config'
/**
  组件结构

  <Suite>
    <MediaSlider />
    <SuiteList>
      <SuiteInfo />
    </SuiteList>
    <AdSide />
  </Suite>

**/

const SuiteInfo = React.createClass({
  render () {
    //info信息用|符号做分割
    let infoData = this.props.info && this.props.info.split && this.props.info.split('|') || []
    return (
      <div className="info">
          <div className="overview">
          {
              _.map(infoData,(v,k)=>{
                  return (<p key={k}><b>{v}</b></p>)
              })
          }
          </div>
      </div>
    )
  }
})

const SuiteList = React.createClass({
  render () {
    return (
      <div className='list-recommend'>
        <div className="title-box">
          <h1>婚纱摄影套系</h1>
          <span className="find">找到 <b>{this.state.totalCount}</b> 个套系</span>
        </div>
        {
          _.map(this.state.data,(v,k)=>{
            return (
              <li className="item-box" key={k}>
                <a className='img-box' href={ '/suite/'+v.id }>
                  <MediaItem aspectRatio={'55:32'} height={320} mediaUrl={v.coverUrlWeb} />
                </a>
                <div className='r-box'>
                  <div className="price">
                    <em>¥</em><b>{parseFloat(v.salePrice).toFixed(2)}</b>
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
                      <SuiteInfo info={v.detail} />
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
    dataUrl: React.PropTypes.string,
  },
  getDefaultProps(){
    return { dataUrl:'' }
  },
  getInitialState() {
    return {
      data: [],
      totalCount:0
    }
  },
  componentDidMount() {
    const setupScrollbar = ()=>{
      $('.scrollbarall').length > 0 &&
      $(".scrollbarall").each(function(index, element) {
        var e = $(this);
        e.tinyscrollbar();
        e.find('.scrollbar').css({
          opacity: 0
        });

        e.bind('mouseenter', function() {
          $('.scrollbar', e).animate({
            opacity: 1
          }, 300);
        });

        e.bind('mouseleave', function() {
          $('.scrollbar', e).animate({
            opacity: 0
          }, 300);
        });
      });
    }
    if (this.props.dataUrl !== undefined) {
      fetch(this.props.baseUrl + this.props.dataUrl)
      .then(res => {return res.json()})
      .then(j=>{ this.setState({ data:j.data,totalCount:parseInt(j.count) },setupScrollbar) })
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
            <MediaSlider {...SuiteConfig['MediaSlider']}/>
          </div>
        </div>
        <div className="layout-center-box">
          <div className="container clearfix">
            <div className="column-mg30-18 mgr30">
              <SuiteList {...SuiteConfig['SuiteList']}/>
            </div>
            <AdvSide adList={adList} />
           </div>
        </div>
      </div>
    )
  }
})

export { Suite }
