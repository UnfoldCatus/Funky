import React, { PropTypes } from 'react'
import { MediaSlider } from './common/media-slider.jsx'
import _ from 'lodash'
import { Group5 } from './common/group5.jsx'
import { Banner} from './common/banner.jsx'
import { HomeConfig } from './config/home-config'

const Home = React.createClass({
  render () {
    return (
      <div className='home-view'>
        <div className='bannar-all-box' >
          <div className='slider-box bannar' style={{top:'0px'}} id='slider-home'>
            <MediaSlider {...HomeConfig['MediaSlider']} />
          </div>
        </div>
        <div className="space-40-eav"></div>
        <div className='hqdz-home-view mgt60'>
          <div className='layout-center-box'>
            <Group5 {...HomeConfig['Group5']}/>
          </div>
        </div>
        <div className='layout-center-box'>
          <Banner {...HomeConfig['Banner'][0]} />
        </div>
      </div>
    )
  },
  componentDidMount() {

  }
})

export { Home }
