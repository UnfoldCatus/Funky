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
    let hf = '/dress-details?brandId='+this.props.data.id+'&typeId='+this.props.data.type + '&typeName='+this.props.typeName+'&brandName='+this.props.data.name;
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
                _.map(this.state.brands, (v, k) => {
                  var boundClick = this.handleClick.bind(this, k);
                  return (
                    <li key={k} onClick={boundClick} className={(k === this.state.index)? 'item item-sel':'item'} >
                      <img src={v.logoUrl} />
                    </li>
                  );
                })
              }
            </ul>
            {
              this.state.index>=0 && <DressHolder typeName={this.props.name}  data={this.state.brands[this.state.index]} />
            }
          </div>
        </div>
      </div>
    )
  },

  propTypes: {
    brands: PropTypes.array,
    index: PropTypes.number
  },

  getInitialState: function() {
    return {
      brands:[],
      index:-1,
    };
  },

  componentDidMount(){
    // 取到配置的获取婚纱品牌数据的请求地址
    const DressBrand = DressConfig['DressBrand']
    if (DressBrand.dataUrl !== undefined) {
      fetch(DressBrand.baseUrl + DressBrand.dataUrl + this.props.id)
        .then(res => {return res.json()})
        .then(j=>{
          if(j.success) {
            j.data = _.isArray(j.data) ? j.data : [];
            /* 针对每个类型只取name,id,logoUrl,coverUrlWeb,description,type字段 */
            this.setState({ brands: _.map(j.data || [],(v,k)=>{
              return _.pick(v,['name','id', 'logoUrl', 'coverUrlWeb', 'description', 'type']) }), index:0})
          }
        })
    }
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
            _.map(this.state.types,(v,k)=>{
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
      types: []
    };
  },

  componentDidMount() {
    // 取到配置的获取婚纱类型数据的请求地址
    const DressType = DressConfig['DressType']
    if (DressType.dataUrl !== undefined) {
      fetch(DressType.baseUrl + DressType.dataUrl)
        .then(res => {return res.json()})
        .then(j=>{
          if(j.success) {
            j.data = _.isArray(j.data) ? j.data : [];
            /* 针对每个类型只取name和id字段 */
            this.setState({ types: _.map(j.data || [],(v,k)=>{ return _.pick(v,['name','id']) }) })
          }
        })
    }
  }
})

export { Dress }
