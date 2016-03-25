import React, { PropTypes } from 'react'
import { MediaSlider } from './common/media-slider.jsx'
import { Banner } from './common/banner.jsx'
import { WeddingPatConfig } from './config/wedding-pat-config'
import { SchemeListItem } from './common/scheme-list-item.jsx'
const WeddingPat = React.createClass({
  render () {
    return (
      <div className="hlgp-view">
          <div className="bannar-all-box">
            <div id="slider_top" className="slider-box bannar" style={{height:WeddingPatConfig['MediaSlider']['height']}}>
              <MediaSlider {...WeddingPatConfig['MediaSlider']} />
            </div>
          </div>
          <div className="layout-center-box">
              <Banner {...WeddingPatConfig['Banner'][0]} />
              <SchemeListItem {...WeddingPatConfig['SchemeListItem']} params={_.merge(this.state.params,WeddingPatConfig['SchemeListItem'].params)}/>
              <div onClick={this.loadMore} id="J_MoreButton">
                  <div className="more-btn"><span>点击查看更多</span></div>
              </div>
          </div>
      </div>
    )
  },
  getInitialState() {
    return {
      params:{}
    }
  }
})

export { WeddingPat }
