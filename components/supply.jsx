import React, { PropTypes } from 'react'
import _ from 'lodash'
import { ListFilter } from './common/list-filter.jsx'
import { MediaSlider } from './common/media-slider.jsx'
import { Banner } from './common/banner.jsx'
import { SupplyConfig } from './config/supply-config.js'
import { MediaItem } from './common/media-item.jsx'
import { DetailModal } from './common/detail-modal.jsx'

let SupplyItemList = React.createClass({
	render(){
    return (
      <ul className="list-recommend J_Item">
        {
          _.map(this.state.data,(v,k)=>{
            return (
              <li key={k} className='item-box'>
                <div className='img-box'>
                  <MediaItem {...this.props} mediaUrl={v.coverUrlWeb || '//placehold.it/380x253'}/>
                </div>
                <div className='content-box'>
                  <div className='title'>
                    <p>{
                        (v.title || '金色百年') + ' '+
                        (v.description || ' ') + ' ' +
                        (v.suppliesNumber || '0') + '个'
                      }</p>
                  </div>
                  <div className="price-box">
                    <b className="in-price"><em>￥</em></b>
                    <b className='in-price'>{parseFloat(v.sellingPrice || '0').toFixed(2)}</b>
                    <span>￥</span>
                    <span className="tm-price">{parseFloat(v.marketPrice || '0').toFixed(2)}</span>
                  </div>
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
      // 在组件初始化完成后，立即绑定代理的点击事件。
      $('.J_Item').on('click','li',(evt)=>{

        /* 点击时渲染出弹出模块 需要填写用于样式控制的styleClass*/
        ReactDOM.render(<DetailModal dataId={797} styleClass={'hlyp-view'} {...SupplyConfig['SupplyItemDetail']}/>,$('#J_DetailModalContainer')[0])

        return false
      })



      fetch(this.props.baseUrl + this.props.dataUrl)
      .then(res => {return res.json()})
      .then(j=>{
        this.setState({ data:j.data })
        $('.J_Count').html(j.count)

      })
    }
  }
});


const Supply = React.createClass({
  render () {
  	let self = this;
    return (
      <div className='hlyp-view'>
        <div className="bannar-all-box mgb30">
          <div id="slider_top" className="slider-box bannar" style={{height:'450px'}}>
            <MediaSlider {...SupplyConfig['MediaSlider']} />
          </div>
        </div>
        <div className='layout-center-box'>
          <div className='J_FilterCtrl'>
            <div className="filter-title">
              <span className="sel">分类</span>
            </div>
            <ListFilter title={'分类'} name={'name'} klass={'ico-1-js ico-1-2-js'} valueKey={['id']} conditions={this.state.types} sorterKey={['typeId']} />
            <ListFilter title={'品牌'} name={'name'} klass={'ico-1-js ico-1-2-js'} valueKey={['id']} conditions={this.state.brands} sorterKey={['brandId']} />
          </div>
          <div className="screening-results">
            <span className="find">找到相关用品<b className='J_Count'></b> 个</span>
          </div>
          <SupplyItemList {...SupplyConfig['SupplyItemList']} />
        </div>
      </div>
    )
  },
  getInitialState: function(){
		return {
			types:[],
      brands:[]
		}
	},
  componentDidMount() {
    const TypesCategory = SupplyConfig['TypesCategory'] //取到配置的获取类型数据的请求地址
    if (TypesCategory.dataUrl !== undefined) {
      fetch(TypesCategory.baseUrl + TypesCategory.dataUrl)
      .then(res => {return res.json()})
      .then(j=>{
        /* 针对每个类型只取name和id字段 */
        this.setState({ types: _.map(j.data || [],(v,k)=>{ return _.pick(v,['name','id']) }) })
      })
    }

    const BrandCategory = SupplyConfig['BrandCategory'] //取到配置的获取品牌数据的请求地址
    if (BrandCategory.dataUrl !== undefined) {
      fetch(BrandCategory.baseUrl + BrandCategory.dataUrl)
      .then(res => {return res.json()})
      .then(j=>{
        /* 针对每个类型只取name和id字段 */
        this.setState({ brands: _.map(j.data || [],(v,k)=>{ return _.pick(v,['name','id']) }) })
      })
    }
  }
})

export  { Supply }
