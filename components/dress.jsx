import React, { PropTypes } from 'react'
import _ from 'lodash'
import { MediaSlider } from './common/media-slider.jsx'
import { Banner } from './common/banner.jsx'
import { DressConfig } from './config/dress-config'

/**
组件结构
<Dress> <= styles,scenes,list
  <MediaSliderWapper />
    <MediaSlider /> <= advs
  <Banner /> <-SampleConfig.Banner
  <DressList>
    <ShotListItem />
  </DressList>
</Dress>

**/

const ImageHolder = React.createClass({
  render () {
    return (
      <div className="show-box J_ImageContainer">
        <div className="layer-box" />
        <h2>{this.props.data.description}</h2>
        <a href='/dress-details' target="">
          <img src={this.props.data.coverUrlWeb} />
        </a>
    </div>
    )
  }
})

/* 礼服分类 */
const DressType  = React.createClass({
  render () {
    return (
      <div>
        <div className="title-box">
          <h1>{"WEDDING DRESS " + this.props.name}</h1>
        </div>
        <div className="dress-brand">
          <div className="center-box">
            <ul className="tab-box J_ClickLogic">
            {
                _.map(this.state.dress, (v, k) => {
                    return (
                        <li key={k} className={(k === 0)? 'item item-sel':'item'}
                            data-cover-url={v.coverUrlWeb}
                            data-description={v.description} >
                            <img src={v.logoUrl} />
                        </li>
                    );
                })
            }
            </ul>
              {
                  this.state.dress.length && <ImageHolder data={this.state.dress[0]}/>
              }
          </div>
        </div>
      </div>
    )
  },

  propTypes: {
    dress: PropTypes.array
  },

  getInitialState: function() {
    return {
      dress: []
    };
  },

  componentDidMount(){
    //绑定事件
    $('.J_ClickLogic').on('click','li',function(){
      let coverUrl = $(this).attr('data-cover-url')
      let description = $(this).attr('data-description')
      $(this).siblings().removeClass('item-sel')
      $(this).addClass('item-sel')

      $('.J_ImageContainer h2').html(description)
      $('.J_ImageContainer img').attr('src',coverUrl)
    })

    fetch(DressConfig['MediaSlider']['baseUrl']+'dressBrand/all?'+'weddingDressType='+this.props.id)
        .then(res => {return res.json()})
        .then(j=>{
          this.setState({ dress:j.data })
          console.log(j.data)
        })
  }
});

const Dress = React.createClass({

  render () {
    return (
        <div className="hslf-view">
          <div className="bannar-all-box">
            <div id="slider_top" className="slider-box bannar" >
              <MediaSlider {...DressConfig['MediaSlider']}/>
            </div>
          </div>
          <div className="layout-center-box">
            <Banner {...DressConfig['Banner'][0]} />
            {
              _.map(this.state.typeList,(v,k)=>{
                return (
                    <DressType key={k} {...v} />
                )
              })
            }
          </div>
        </div>
    )
  },

  getInitialState: function() {
    return {
      typeList: []
    };
  },

  componentDidMount() {
    /** 请求婚纱类型 **/
    fetch(DressConfig['MediaSlider']['baseUrl']+'dressType/all')
        .then(res => {return res.json()})
        .then(j=>{
          this.setState({ typeList:j.data })}
        )
  }
})

export { Dress }
