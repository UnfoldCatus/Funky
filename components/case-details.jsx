import React, { PropTypes } from 'react'
import { CaseDetailsConfig } from './config/case-details-config'
import _ from 'lodash'
import { MediaItem } from './common/media-item.jsx'

const CaseContent = React.createClass({
  render() {

    /* 场地信息隐藏
     <div className="info-title"><h1>场地信息</h1></div>
     <div className="theme-content">
     <p>于2015-06-27在芭菲盛宴北城国际店</p>
     </div>

     // 颜色色块
     <div className="type-box">
       <span>色系:</span>
       <p>{this.props.data.color}</p>
       <i className="violet"></i>
       <i className="golden"></i>
     </div>

    * */

    // 设计理念
    let designConcept = null;
    if(this.props.data.designConcept && this.props.data.designConcept !== '') {
      designConcept = (
        <div>
          <div className="info-title"><h1>设计理念</h1></div>
          <div className="theme-content">
            <p>{this.props.data.designConcept}</p>
          </div>
        </div>
      )
    }

    return(
      <div>
        <div className="tilte-box">
          <h1>{this.props.data.name}</h1>
        </div>
        <div className="case-detail-box">
          <div className="left-box">
            <div className="intr-box">
              <p>{this.props.data.description}</p>
            </div>
          </div>
          <div className="right-box">
            <div className="info-title"><h1>主题属性</h1></div>
            <div className="theme-content">
              <div className="type-box">
                <span>主题:</span>
                <p>{this.props.data.theme}</p>
              </div>
              <div className="type-box">
                <span>风格:</span>
                <p>默认风格</p>
              </div>
              <div className="type-box">
                <span>色系:</span>
                <p>{this.props.data.color}</p>
              </div>
            </div>
            {
              designConcept
            }
            <div className="info-title"><h1>价格</h1></div>
            <div className="theme-content">
              <div className="all-price">
                <span className="in-pirce"><span>折后价:</span><em>￥</em><b>{this.props.data.hdpcCost + this.props.data.senceCost}</b></span>
                <span className="del-pirce"><span>原价: ￥</span><b>{this.props.data.totalCost}</b></span>
              </div>
              <div className="price-box">
                    <span className="price-detail first">
                        <span>场景布置费用:</span><em>￥</em><b>{this.props.data.senceCost}</b>
                    </span>
                    <span className="price-detail">
                        <span>婚礼人费用:</span><em>￥</em><b>{this.props.data.hdpcCost}</b>
                    </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
})

const Preview = React.createClass({
  render() {

    console.log(this.props.data)

    let pcDetailImages = [];
    let firstImage = '';
    if(this.props.data && this.props.data !== '') {
      try {
        pcDetailImages = JSON.parse(this.props.data)
        firstImage = pcDetailImages[0].url;
      } catch (e) {
        pcDetailImages = [];
      }
    }
    return(
      <div className="photo-show-box">
        <div className="big-img-box">
          <MediaItem aspectRatio='3:2' height={800} mediaUrl={firstImage} />
          <div className="left-hover-box">
            <div className="bg-ico"></div>
            <i className="ico-15-js ico-15-lef-js"></i>
          </div>
          <div className="right-hover-box">
            <div className="bg-ico"></div>
            <i className="ico-15-js ico-15-rig-js"></i>
          </div>
        </div>
        <ul className="small-img-box">
          {
            _.map(pcDetailImages, (v,k) => {
              let kClass = "item item-current"
              return(
                <li key={k} className={kClass}>
                  <MediaItem aspectRatio='3:2' height={100} mediaUrl={v} />
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
})

//          <Preview data={this.state.data.pcDetailImages} />
const CaseDetails = React.createClass({
  render() {
    return(
      <div className="alxq-view">
        <div className="layout-center-box">
          <CaseContent data={this.state.data} />
        </div>
      </div>
    );
  },

  propTypes: {
    data: PropTypes.object,
  },

  getInitialState: function() {
    return {
      data:{},
    };
  },

  // 数据请求/dress/dress_list?brandld=5品牌ID&typeId=礼服类型ID
  componentDidMount() {
    let cfg = CaseDetailsConfig['CaseDetails']
    let fetchUrl = 'http://cd.jsbn.com:7001/api/cases/detail/313';//cfg['buildUrl'](942,cfg['dataUrl'])
    /** 请求礼服列表 **/
    fetch(fetchUrl)
      .then(res => {return res.json()})
      .then(j=>{
        if(j.success && j.data.length > 0) {
          this.setState({ data:j.data[0] })
        }
      })
  }
})

export { CaseDetails }
