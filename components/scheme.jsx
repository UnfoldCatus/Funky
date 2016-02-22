import React, { PropTypes } from 'react'
import { MediaSlider } from './common/media-slider.jsx'
import { SchemeConfig } from './config/scheme-config'
import { Banner } from './common/banner.jsx'
import { Group5 } from './common/group5.jsx'
import { SchemeListItem } from './common/scheme-list-item.jsx'
import _ from 'lodash'

/**
 组件结构

<Scheme>
  <MediaSlider />
  <Banner />
  <Group5 />
  <SchemeListItem />
  <NavGallery />
</Scheme>
 **/

const PhotoGallery = React.createClass({
  render () {
    return (
      <div className='photo-box'>
      {
        _.map(this.props.gallery,(v,k)=>{
          return <img src={v.imageUrl} key={k} />
        })
      }
      </div>
    )
  },
  propTypes: {
    gallery: React.PropTypes.array
  },
  getDefaultProps(){
    return {
      gallery:[]
    }
  }
})

const NavGallery = React.createClass({
  render(){
    return (
      <ul className="nav-f4-box">
      {
        _.map(this.props.gallery,(v,k)=>{
          return (
            <a href={v.link} key={k}>
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
  },
  propTypes: {
    gallery: React.PropTypes.array
  },
  getDefaultProps(){
    return {
      gallery:[]
    }
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
          <SchemeListItem {...this.state.list} />
          <div className='tit-img-team mgt60 mgb30' />
          <PhotoGallery gallery={SchemeConfig['PhotoGallery']} />
          <div className="tit-img-hlr mgb30 mgt60" />
          <NavGallery gallery={SchemeConfig['NavGallery']} />
        </div>
      </div>
    )
  },
  getInitialState() {
    return {
      list:{
        data:[
          {schemeName:'test',weddingDate:'2015-10-10'},
          {schemeName:'test',weddingDate:'2015-10-10'},
          {schemeName:'test',weddingDate:'2015-10-10'},
          {schemeName:'test',weddingDate:'2015-10-10'},
          {schemeName:'test',weddingDate:'2015-10-10'},
          {schemeName:'test',weddingDate:'2015-10-10'},
        ]
      }
    };
  },
})

export { Scheme }
