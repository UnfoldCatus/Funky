import React, { PropTypes } from 'react'
import { MediaSlider } from './common/media-slider.jsx'
import { Banner } from './common/banner.jsx'
import { WeddingVideoConfig} from './config/wedding-video-config'
import { VideoListItem } from './common/video-list-item.jsx'
const VideoCase = React.createClass({
  render () {
    return (
      <h1>VideoCase</h1>
    )
  }
})

const WeddingVideo = React.createClass({
  render () {
    return (
      <div className="hlsp-view">
          <div className="bannar-all-box">
            <div id="slider_top" className="slider-box bannar mgb30" style={{height:'450px'}}>
              <MediaSlider />
            </div>
          </div>
          <div className="layout-center-box">
              <Banner {...WeddingVideoConfig['Banner'][0]} />
              <VideoListItem {...this.state.list} />
              <div onClick={this.loadMore} id="J_MoreButton">
                  <div className="more-btn"><span>点击查看更多</span></div>
              </div>
          </div>
      </div>
    )
  },
  loadMore(){

  },
  getInitialState: function() {
    return {
      list:{
        data:[
          {name:'test',createDate:'2016-01-01'}
        ]
      }
    };
  },
})

export { WeddingVideo }
