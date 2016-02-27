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

/* 礼服分类 */
const DressType  = React.createClass({
  render () {
    return (
      <div>
        <div className="title-box">
          <h1>{"WEDDING DRESS " + this.props.name}</h1>
        </div>
        {
          _.map(this.state.dress, (v, k) => {
            return (
               <div key={k}>
                 <div className="dress-brand">
                   <div className="center-box">
                     <ul className="tab-box">
                       <li className="item item-sel">
                         <img src={v.logoUrl} />
                       </li>
                     </ul>
                     <div className="show-box">
                     <div className="layer-box" />
                     <h2>{v.description}</h2>
                     <a href='#' target="_blank">
                       <img src={v.coverUrlWeb} />
                     </a>
                   </div>
                   </div>
                 </div>
               </div>
            );
          })
        }
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
    console.log(this.props)
    fetch(DressConfig['MediaSlider']['baseUrl']+'dressBrand/all?'+'weddingDressType='+this.props.id)
        .then(res => {return res.json()})
        .then(j=>{
          this.setState({ dress:j.data })
          console.log(j.data)
        })
  }
  //componentWillReceiveProps: function(nextProps) {// DOM会发生变化的时候
  //  debugger
  //  if (this.props.id !== nextProps.id) {
  //    fetch(DressConfig['MediaSlider']['baseUrl']+'api/dressBrand/all?'+'weddingDressType='+nextProps.id)
  //        .then(res => {return res.json()})
  //        .then(j=>{
  //          this.setState({ dress:j.data })
  //          console.log(j.data)
  //        }
  //        )
  //  }
  //}
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
