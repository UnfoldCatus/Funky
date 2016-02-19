import React, { PropTypes } from 'react'
import { MediaSlider } from './common/media-slider.jsx'
import { SchemeConfig } from './config/scheme-config'
import { Banner } from './common/banner.jsx'
import { Group5 } from './common/group5.jsx'
import _ from 'lodash'


const SchemeList = React.createClass({
  render () {
    return (
      <h1>SchemeList</h1>
    )
  }
})



const PhotoGallery = React.createClass({
  render () {
    return (
      <div className='photo-box'>
      {
        _.map(this.props.gallery,(v,k)=>{
          return <img src={v.imageUrl} />
        })
      }
      </div>
    )
  }
})

const NavGallery = React.createClass({
  render(){
    return (
      <ul className="nav-f4-box">
      {
        _.map(this.props.gallery,(v,k)=>{
          return (
            <a href={v.link}>
              <li className="item-box">
                <div className={v.klass}><span></span></div>
                <span className={v.klass+'-word'}></span>
              </li>
            </a>

          )
        })
      }
      </ul>
    )

  }
})

const Scheme = React.createClass({
  render () {
    return (
      <div className='hqdz-home-view'>
        <div id='slider_top' className='slider-box bannar-all-box mgb30'>
          <div className='bannar' style={{height:'680px'}}>
            <MediaSlider />
          </div>
        </div>
        <div className='layout-center-box'>
          <Banner {...SchemeConfig['Banner'][0]} />
          <Group5 config={SchemeConfig['Group5']} />
          <SchemeList />
          <div className='tit-img-team mgt60 mgb30' />
          <PhotoGallery gallery={SchemeConfig['PhotoGallery']} />
          <div className="tit-img-hlr mgb30 mgt60" />
            {/*<ul className="nav-f4-box">
              <a href='#/f4?tab=dresser'>
                <li className="item-box">
                  <div className="hzs"><span></span></div>
                  <span className="hzs-word"></span>
                </li>
              </a>
              <a href='#/f4?tab=host'>
                <li className="item-box">
                  <div className="zcr"><span></span></div>
                  <span className="zcr-word"></span>
                </li>
              </a>
              <a href='#/f4?tab=photographer'>
                <li className="item-box">
                  <div className="sys"><span></span></div>
                  <span className="sys-word"></span>
                </li>
              </a>
              <a href='#/f4?tab=camera'>
                <li className="item-box">
                  <div className="sxs"><span></span></div>
                  <span className="sxs-word"></span>
                </li>
              </a>
            </ul>*/}
          <NavGallery gallery={SchemeConfig['NavGallery']} />
        </div>
      </div>
    )
  }
})

export { Scheme }
