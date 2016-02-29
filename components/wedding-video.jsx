import React, { PropTypes } from 'react'
import { MediaSlider } from './common/media-slider.jsx'
import { Banner } from './common/banner.jsx'
import { WeddingVideoConfig} from './config/wedding-video-config'
import { VideoListItem } from './common/video-list-item.jsx'

const WeddingVideo = React.createClass({
  render () {
    return (
      <div className="hlsp-view">
          <div className="bannar-all-box">
            <div id="slider_top" className="slider-box bannar mgb30" style={{height:'450px'}}>
              <MediaSlider {...WeddingVideoConfig['MediaSlider']}/>
            </div>
          </div>
          <div className="layout-center-box">
              <Banner {...WeddingVideoConfig['Banner'][0]} />
              <VideoListItem {...WeddingVideoConfig['VideoListItem']} />
              <div id="J_MoreButton">
                  <div className="more-btn"><span>点击查看更多</span></div>
              </div>
          </div>
      </div>
    )
  }
})

export { WeddingVideo }
