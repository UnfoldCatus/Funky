import React, { PropTypes } from 'react'
import { ListFilter } from './common/list-filter.jsx'
import { CarConfig } from './config/car-config.js'
import { MediaSlider } from './common/media-slider.jsx'
import { MediaItem } from './common/media-item.jsx'
import _ from 'lodash'

 /**
 组件结构
 <Car>
 <MediaSlider />
  <CarItemList>
    <MediaItem />
  </CarItemList>
 </Car>


 **/

const CarItemList = React.createClass({
  render () {
    return (
      <ul className='list-recommend J_ItemBox'>
        {
          _.map(this.state.data,(v,k)=>{
            return (
              <li key={k} className='item-box'>
                <a href='/' className='img-box'>
                  <MediaItem aspectRatio={'3:2'} width={380} mediaUrl={v.coverUrlWeb || '//placehold.it/380x253'}/>
                </a>
                <div className='brd'>
                  <div className="htile">
                    <span>{v.title}</span>
                  </div>
                  <p className="pname">
                    <span className='spa1'>{v.rentalPrice===0?'面议': String.fromCharCode(165)+parseFloat(v.rentalPrice).toFixed(2)}</span>
                    <span className='spa2'>市场价：<em>{String.fromCharCode(165)+parseFloat(v.marketPrice).toFixed(2)}</em></span>
                  </p>
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  },
  propTypes: {
    'dataUrl': React.PropTypes.string
  },
  getDefaultProps(){
    return {
      'dataUrl':''
    }
  },
  getInitialState(){
    return {
      data:[]
    }
  },
  componentDidMount() {
    if (this.props.dataUrl !== undefined) {
      fetch(this.props.baseUrl + this.props.dataUrl)
      .then(res => {return res.json()})
      .then(j=>{
        this.setState({ data:j.data })
        $('.J_Count').html(j.count)
      })
    }
  }
})



const Car = React.createClass({
  render () {
    return (
      <div className="zuche-view">
        <div className="bannar-all-box">
          <div className="custom-banner">
            <div id="slider_top" className="slider-box bannar"  style={{height:'450px'}}>
              <MediaSlider {...CarConfig['MediaSlider']} />
            </div>
          </div>
        </div>
        <div className="layout-center-box clearfix">
          <ListFilter title={'婚车档次'} name={'name'} klass={'ico-17-js ico-17-1-js'} valueKey={['id']} conditions={this.state.levels} sorterKey={['cityId']} />
          <ListFilter title={'婚车车型'} name={'name'} klass={'ico-17-js ico-17-2-js'} valueKey={['id']} conditions={this.state.models} sorterKey={['cityId']} />
          <ListFilter title={'婚车品牌'} name={'name'} klass={'ico-17-js ico-17-3-js'} valueKey={['id']} conditions={this.state.brands} sorterKey={['hotelType']} />
          <ListFilter title={'婚车价格'} name={'name'} klass={'ico-17-js ico-17-4-js'} valueKey={['minPrice','maxPrice']} conditions={this.state.prices} sorterKey={['minPrice','maxPrice']} />

          <p className="result">
            <span>只看车队</span>
            <input type="checkbox" name="FirstCar" className="cbox J_IsTeam" />
            <i> | </i>
            <span>{'找到相关车辆 '}</span>
            <em className='J_Count'>--</em>
            <span>{' 辆'}</span>
          </p>
          <CarItemList {...CarConfig['CarItemList']} />
        </div>
      </div>
    )
  },
  getInitialState() {
    return {
      data:[], // car list
      models:[],
      levels:[],
      brands:[],
      prices:CarConfig['PriceCategory']
    };
  },
  componentDidMount() {
    const ModelCategory = CarConfig['ModelCategory'] //取到配置的获取类型数据的请求地址
    if (ModelCategory.dataUrl !== undefined) {
      fetch(ModelCategory.baseUrl + ModelCategory.dataUrl)
      .then(res => {return res.json()})
      .then(j=>{
        /* 针对每个类型只取name和id字段 */
        this.setState({ models: _.map(j.data || [],(v,k)=>{ return _.pick(v,['name','id']) }) })
      })
    }

    const LevelCategory = CarConfig['LevelCategory'] //地区数据接口地址
    if (LevelCategory.dataUrl !== undefined) {
      fetch(LevelCategory.baseUrl + LevelCategory.dataUrl)
      .then(res => {return res.json()})
      .then(j=>{
        /* 针对每个地区只取name和id字段 */
        this.setState({ levels: _.map(j.data || [],(v,k)=>{ return _.pick(v,['name','id']) }) })
      })
    }

    const BrandCategory = CarConfig['BrandCategory'] //地区数据接口地址
    if (BrandCategory.dataUrl !== undefined) {
      fetch(BrandCategory.baseUrl + BrandCategory.dataUrl)
      .then(res => {return res.json()})
      .then(j=>{
        /* 针对每个地区只取name和id字段 */
        this.setState({ brands: _.map(j.data || [],(v,k)=>{ return _.pick(v,['name','id']) }) })
      })
    }
  }
})

export { Car }
