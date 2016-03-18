import React, { PropTypes } from 'react'
import { ShotConfig } from './config/shot-config'
import { Banner } from './common/banner.jsx'
import { MediaSlider } from './common/media-slider.jsx'
import { ShotListItem } from './common/shot-list-item.jsx'
import _ from 'lodash'
/**

  组件结构
  <Shot>
    <MediaSlider />
    <Banner />
    <MultiBanner />
    <Banner />
    <ShotListItem />
    <Banner />
    <Banner />
  </Shot>

**/



/*  *
MultiBanner

多图片组合 如图顺序
    =________,=

      1.   |  2.   |   3.   |
           |       |        |
           |-------|--------|
           |  4.   |   5    |
           |       |        |

**/
const MultiBanner = React.createClass({
  render () {
    return (
      <div className="nav-box mgt30">
        <img src={this.props.bgImageUrl} onerror={this.src='http://placehold.it/1200x600'}/>
        {
          _.map(this.props.blocks,(v,k)=>{
            return <a key={k}  href={v.link} className={v.klass}></a>
          })
        }
      </div>
    )
  },
  propTypes: {
    bgImageUrl: React.PropTypes.string,
    blocks:React.PropTypes.array
  },
  getDefaultProps(){
    return {
      bgImageUrl:'http://placehold.it/1200x600',
      blocks:[]
    }
  }
})



/*Main: */
const Shot = React.createClass({
  render () {
    return (
      <div className="hssy-home-view">
        <div className="bannar-all-box">
          <div id="slider_top" className="slider-box bannar" style={{height:ShotConfig['MediaSlider']['height']}}>
            <MediaSlider {...ShotConfig['MediaSlider']} />
          </div>
        </div>
        <div className='layout-center-box'>
          <div className='adv-1 shot-adv mgb30'>
            <Banner {...ShotConfig['Banner'][0]} />
          </div>
          <MultiBanner {...ShotConfig['MultiBanner'][0]} />
          <div className="tit-img-zxmz mgb30 mgt60">
            <a className="tit-img-more" href="/sample"></a>
          </div>
          <ShotListItem {...ShotConfig['ShotListItem']} />
          <div className="tit-img-sys mgb30 mgt60">
            <a className="tit-img-detail" style={{display:'none'}} href="#/photographers"></a>
          </div>
          <div className="container-ad-1 mgb50">
            <Banner {...ShotConfig['Banner'][1]} />
          </div>
          <div className="tit-img-zxs mgb30 mbt60">
						<a className="tit-img-detail" style={{display:'none'}} href="#/photographers"></a>
					</div>
          <div className="container-ad-1 mgb50">
            <Banner {...ShotConfig['Banner'][2]} />
          </div>
        </div>
      </div>
    )
  }
})

export { Shot }
