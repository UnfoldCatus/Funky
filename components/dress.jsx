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

/* 礼服分类项 */
const DressList  = React.createClass({
  render () {
    return (
      <div>
        {
          _.map(this.props.dressTypes, (v, k) => {
            return (
              // <div key={k}>
              //   <div className="title-box">
              //     <h1>{v.enName + " " + v.zhName}</h1>
              //   </div>
              //   <div className="dress-brand">
              //     <div className="center-box">
              //       <ul className="tab-box">
              //         {
              //           _.map(this.props.titles,(v1,k1)=>{
              //             return (
              //               <li className="item item-sel">
              //                   <img src={v1.url} />
              //               </li>
              //             )
              //           })
              //         }
              //       </ul>
              //       <div className="show-box">
              //         <div className="layer-box" />
              //         <h2>{v.desc}</h2>
              //         <a href='#' target="_blank">
              //           <img src={v.fovUrl} />
              //         </a>
              //       </div>
              //     </div>
              //   </div>
              // </div>

              <div>
                <div className="title-box">
                  <h1>WEDDING DRESS 国际婚纱</h1>
                </div>
                <div className="dress-brand">
                  <div className="center-box">
                    <ul className="tab-box">
                      <li className="item item-sel">
                        <img src="http://oi22.com/wp-content/uploads/2013/01/022259tRe.jpg" />
                        </li>
                      <li className="item">
                        <img src="http://oi22.com/wp-content/uploads/2013/01/022300gSd.jpg" />
                        </li>
                      <li className="item">
                        <img src="http://oi22.com/wp-content/uploads/2013/01/022306rGb.jpg" />
                        </li>
                      <li className="item">
                        <img src="http://oi22.com/wp-content/uploads/2013/01/022305orZ.jpg" />
                      </li>
                    </ul>
                    <a className="show-box" href='/dress-details'>
                      <div className="layer-box" />
                      <h2>巴拉巴拉阿里巴巴</h2>
                      <img src="http://image.jsbn.com/WebImage/cq/jpg/20150928/08259969567059184420/20150928140751853987_1417x945.jpg" />
                    </a>
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
    dressTypes: PropTypes.array
  },
  getDefaultProps(){
    return {
      dressTypes:[{"12":12},{"13":13}]
    }
  }
});

const MediaSliderWapper = React.createClass({
  render () {
    if (!this.props.isNil) {
      return (
        <div id="slider_top" className="slider-box bannar" style={{height:'450px'}}>
          <MediaSlider />
        </div>
      );
    } else {
      return (
        <MediaSlider />
      );
    }
  }
});


const Dress = React.createClass({
  render () {
    return (
      <div className="hslf-view">
        <div className="bannar-all-box">
          <MediaSliderWapper isNil="true" />
        </div>
        <div className="layout-center-box">
          <Banner {...DressConfig['Banner'][0]} />
          <DressList />
        </div>
      </div>
    )
  }
})


export { Dress }
