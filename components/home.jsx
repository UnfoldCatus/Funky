import React, { PropTypes } from 'react'
import { MediaSlider } from './common/media-slider.jsx'
import _ from 'lodash'
import { Group5 } from './common/group5.jsx'
import { Group4 } from './common/group4.jsx'
import { Banner} from './common/banner.jsx'
import { HomeConfig } from './config/home-config'

const Home = React.createClass({
  render () {
    return (
      <div className='home-view'>
        <div className='bannar-all-box' >
          <div className='slider-box bannar' style={{height:'680px'}} id='slider_top'>
            <MediaSlider {...HomeConfig['MediaSlider']} />
          </div>
        </div>
        <div className="space-40-eav"></div>
        <div className='hqdz-home-view mgt30'>
          <div className='layout-center-box'>
            <div className='mgb20'>
              <Group5 {...HomeConfig['Group5']}/>
            </div>
          </div>
        </div>
        <div className='layout-center-box'>
          <Banner {...HomeConfig['Banner'][0]} />
          <div className='home-mash clearfix' >
            <Group4 {...HomeConfig['Group4'][0]}/>
            <Group4 {...HomeConfig['Group4'][1]}/>
            <Group4 {...HomeConfig['Group4'][2]}/>
            <Group4 {...HomeConfig['Group4'][3]}/>
          </div>
        </div>
      </div>
    )
  }
})

export { Home }
