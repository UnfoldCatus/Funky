import React, { PropTypes } from 'react'
import { Adv } from './adv.jsx'
import { MediaSlider } from './common/media-slider.jsx'
import { ShotListItem } from './common/shot-list-item.jsx'
import { Banner } from './common/banner.jsx'
import { ListFilter } from './common/list-filter.jsx'
import { SampleConfig } from './config/sample-config'

/**
组件结构
<Sample> <= styles,scenes,list
  <MediaSlider /> <= advs
  <Banner /> <-SampleConfig.Banner
  <ListFilter />
  <ShotListItem />
</Sample>

**/


/** main **/
const Sample = React.createClass({
  render () {
    return (
      <div className='samples-view ypxs-view'>
        <div className="bannar-all-box">
          <div id="slider_top" className="slider-box bannar " style={{height:SampleConfig['MediaSlider']['height']}}>
            <MediaSlider {...SampleConfig['MediaSlider']} />
          </div>
        </div>
        <div className="layout-center-box">
          <Banner {...SampleConfig['Banner'][0]} />
          <div className="filter-title J_Tab">
            <span className="sel">婚纱摄影</span>
            <span className="sel sec nnn">艺术写真</span>
            <span className="sel sec nnn">全家福</span>
          </div>
          <div className='J_FilterCtrl'>
            <ListFilter title={'风格'} name={'name'} klass={'ico-1-js ico-1-2-js'} valueKey={['shootStyleId']}  sorterKey={['shootStyleId']} {...SampleConfig['StyleFilter']} />
            <ListFilter title={'场景'} name={'name'} klass={'ico-1-js ico-1-3-js'} valueKey={['exteriorId']} sorterKey={['exteriorId']} {...SampleConfig['ExteriorFilter']}/>
          </div>
          <ShotListItem {...SampleConfig['ShotListItem']} />
          <div id="J_MoreButton">
            <div className="more-btn"><span>点击查看更多</span></div>
          </div>
        </div>
      </div>
    )
  }


})
export { Sample }
