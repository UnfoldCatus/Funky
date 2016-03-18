import React, { PropTypes } from 'react'
import { WeddingMVConfig } from './config/wedding-mv-config'
import { MediaSlider } from './common/media-slider.jsx'
import { Banner } from './common/banner.jsx'
import { VideoListItem } from './common/video-list-item.jsx'

const WeddingMV = React.createClass({
  render () {
    return (
      <div className="hsjs-view">
          <div className="bannar-all-box">
            <div id="slider_top" className="slider-box bannar mgb30" style={{height:WeddingMVConfig['MediaSlider']['height']}}>
              <MediaSlider {...WeddingMVConfig['MediaSlider']}/>
            </div>
          </div>
          <div className="layout-center-box">
              <Banner {...WeddingMVConfig['Banner'][0]} />
              <VideoListItem {...WeddingMVConfig['VideoListItem']} />
              <div id="J_MoreButton">
                  <div className="more-btn"><span>点击查看更多</span></div>
              </div>
          </div>
      </div>
    )
  }
})

export { WeddingMV }
