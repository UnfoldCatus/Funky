import React, { PropTypes } from 'react'
import { MediaSlider } from './common/media-slider.jsx'
import { Banner } from './common/banner.jsx'
import { WeddingPatConfig } from './config/wedding-pat-config'
import { CasesList } from './common/cases-list.jsx'
const WeddingPat = React.createClass({
  render () {
    return (
      <div className="hlgp-view">
          <div className="bannar-all-box">
            <div id="slider_top" className="slider-box bannar" style={{height:'450px'}}>
              <MediaSlider {...WeddingPatConfig['MediaSlider']} />
            </div>
          </div>
          <div className="layout-center-box">
              <Banner {...WeddingPatConfig['Banner'][0]} />
              <CasesList {...WeddingPatConfig['CasesList']} />
              <div onClick={this.loadMore} id="J_MoreButton">
                  <div className="more-btn"><span>点击查看更多</span></div>
              </div>
          </div>
      </div>
    )
  }
})

export { WeddingPat }
