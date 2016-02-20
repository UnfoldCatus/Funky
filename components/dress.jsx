import React, { PropTypes } from 'react'
import _ from 'lodash'
import { MediaSlider } from './common/media-slider.jsx'
import { Banner } from './common/banner.jsx'
import { DressConfig } from './config/dress-config'

/* 礼服分类项 */
const ListItem  = React.createClass({
  render () {
    return (
      <div>
        {
          _.map(this.props.dressTypes, (v, k) => {
            return (
              <div>
                <div className="title-box">
                  <h1>国际婚纱</h1>
                  <span>明星礼服</span>
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
                    <div className="show-box">
                      <div className="layer-box" />
                      <h2>巴拉巴拉阿里巴巴</h2>
                      <a>
                        <img src="http://image.jsbn.com/WebImage/cq/jpg/20150928/08259969567059184420/20150928140751853987_1417x945.jpg" />
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
    dressTypes: PropTypes.array
  },
  getDefaultProps(){
    return {
      dressTypes:[{"12":12},{"13":13}]
    }
  }
});

{/*<div className="layout-center-box">
  <div className="bannar-box">
    <a href="http://www.jsbn.com/#/sale-strategy?type=zuhe"
      style={{textAlign: 'center'}}
      className="img-box "
      data-width={1200}
      data-height={680}
      target="_self"
      data-reactid=".0.1.0.$0.0">
      <img
      src="http://image.jsbn.com/WebImage/cq/jpg/20151006/97453672485760581447/20151006192249051678_1200x680.jpg@1200w_680h_90Q"
      data-reactid=".0.1.0.$0.0.0" />
    </a>
  </div>*/}
export const Dress = React.createClass({
  render () {
    return (
      <div className="hslf-view">
        <div className="bannar-all-box">
          <div id="slider_top" className="slider-box bannar" style={{height:'450px'}}>
            <MediaSlider />
          </div>
        </div>
        <div className="layout-center-box">
          <Banner {...DressConfig['Banner'][0]} />
          <ListItem />
        </div>
      </div>
    )
  }
})
