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
 <DressType />
 </Dress>

 **/

const DressHolder = React.createClass({
  render () {
    let hf = '/dress-details?position=dress_list&brandId='+this.props.data.id+'&typeId='+this.props.data.type;
    return (
      <div className="show-box">
        <div className="layer-box" />
        <h2>{this.props.data.description}</h2>
        <a href={hf} target="">
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
            <ul className="tab-box">
              {
                _.map(this.state.dress, (v, k) => {
                  var boundClick = this.handleClick.bind(this, k);
                  return (
                    <li key={k} className={(k === this.state.index)? 'item item-sel':'item'} onClick={boundClick}>
                      <img src={v.logoUrl} />
                    </li>
                  );
                })
              }
            </ul>
            {
              this.state.dress.length && <DressHolder data={this.state.dress[this.state.index]}/>
            }
          </div>
        </div>
      </div>
    )
  },

  propTypes: {
    dress: PropTypes.array,
    index: PropTypes.number,
  },

  getInitialState: function() {
    return {
      dress:[],
      index:0
    };
  },

  componentDidMount(){
    fetch(DressConfig['APIConfig']['baseUrl']+'dressBrand/all'+'?weddingDressType='+this.props.id)
      .then(res => {return res.json()})
      .then(j=>{
        this.setState({ dress:j.data, index:0});
        console.log(j)
      })
  },

  handleClick(k) {
    this.setState({index: k});
  },
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
              );
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
    fetch(DressConfig['APIConfig']['baseUrl']+'dressType/all')
      .then(res => {return res.json()})
      .then(j=>{
        this.setState({ typeList:j.data })
        console.log(j)
      })
  }
})

export { Dress }
