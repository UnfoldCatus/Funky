import React, { PropTypes } from 'react'
import _ from 'lodash'
import { MediaSlider } from './common/media-slider.jsx'
import { Banner } from './common/banner.jsx'
import { F4Config } from './config/f4-config'

/**
 组件结构
 <F4> <= styles,scenes,list
 </F4>
 **/

const F4 = React.createClass({

  handleTabSel(index) {
    console.log('-------'+index);
    this.setState({tabIndex:index});
  },

  render () {
    return (
      <div className="f4-view">
        <div className="layout-center-box">

          <div className="tab-title">
            {
              _.map(this.state.tabTitle, (v,k) => {
                let handleClick = this.handleTabSel.bind(this, k);
                if(this.state.tabIndex == k) {
                  console.log('sel');
                  return (
                    <span key={k} className="sel" onClick={handleClick}>{v}</span>
                  );
                } else {
                  console.log('no sel');
                  return (
                    <span key={k} onClick={handleClick}>{v}</span>
                  );
                }
              })
            }
          </div>


          <div className="filter-box">
            <span className="title">价位</span>
            <div className="tab-box column-mg20-20">
              <span className="tab tab-sel">1500 以下</span>
              <span className="tab">1500-2000</span>
              <span className="tab">2000-2500</span>
              <span className="tab">2500 以上</span>
            </div>
          </div>

          <div className="screening-results">
            <b>* 温馨提示：如遇节假日或者黄道吉日，预订价格或有波动，请以实际线下合同为准。 </b>
            <span className="find">找到样片 <b>67</b> 套</span>
          </div>


        </div>
      </div>
    )
  },

  getInitialState: function() {
    return {
      tabTitle: ['主持人', '化妆师', '摄影师', '摄像师'],
      tabIndex:0,
    };
  },

  componentDidMount() {
    //// 取到配置的获取婚纱类型数据的请求地址
    //const DressType = DressConfig['DressType']
    //if (DressType.dataUrl !== undefined) {
    //  fetch(DressType.baseUrl + DressType.dataUrl)
    //    .then(res => {return res.json()})
    //    .then(j=>{
    //      if(j.success && j.data.length > 0) {
    //        /* 针对每个类型只取name和id字段 */
    //        this.setState({ types: _.map(j.data, (v,k)=>{ return _.pick(v,['name','id']) }) })
    //      }
    //    })
    //}
  }
})

export { F4 }