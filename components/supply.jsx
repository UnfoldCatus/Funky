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
      <div>
        <div className="screening-results">
          <span className="find">找到相关用品<b className='J_Count'>{this.state.count}</b> 个</span>
        </div>
        <ul className="list-recommend J_Item">
          {
            _.map(this.state.data,(v,k)=>{
              return (
                <li key={k} className='item-box' data-id={v.id} style={{cursor:'pointer'}}>
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
      </div>

    )
	},
  propTypes: {
    'dataUrl': React.PropTypes.string
  },
  getDefaultProps(){
    return {
      'dataUrl':undefined
    }
  },
  getInitialState(){
    return {
      data:[],
      dataStore:[],
      count:0,
      currentIndex:0
    }
  },
  componentWillReceiveProps(nextProps) {
    SupplyConfig['SupplyItemList']['fetchFunc'](this,nextProps)(this,nextProps)
  },
  componentDidMount() {
    if (this.props.dataUrl !== undefined) {
      // 在组件初始化完成后，立即绑定代理的点击事件。
      $('.J_Item').on('click','li',(evt)=>{
        let id = $(evt.currentTarget).attr('data-id')
        /* 点击时渲染出弹出模块 需要填写用于样式控制的styleClass*/
        ReactDOM.render(<DetailModal dataId={id} styleClass={'hlyp-view'} {...SupplyConfig['SupplyItemDetail']}/>,$('#J_DetailModalContainer')[0])

        return false
      })
    }
    SupplyConfig['SupplyItemList']['fetchFunc'](this,null)(this)
  }
})


const Supply = React.createClass({
  render () {
  	let self = this;
    return (
      <div className='hlyp-view'>
        <div className="bannar-all-box mgb30">
          <div id="slider_top" className="slider-box bannar" style={{height:SupplyConfig['MediaSlider']['height']}}>
            <MediaSlider {...SupplyConfig['MediaSlider']} />
          </div>
        </div>
        <div className='layout-center-box'>
          <div className='J_FilterCtrl'>
            <div className="filter-title">
              <span className="sel">分类</span>
            </div>
            <ListFilter title={'分类'} name={'name'} klass={'ico-1-js ico-1-2-js'} valueKey={['id']}  sorterKey={['weddingSuppliesTypeId']} {...SupplyConfig['TypesCategory']} />
            <ListFilter title={'品牌'} name={'name'} klass={'ico-1-js ico-1-2-js'} valueKey={['id']} sorterKey={['brandId']} {...SupplyConfig['BrandCategory']} />
          </div>

          <SupplyItemList {...SupplyConfig['SupplyItemList']} params={_.merge(this.state.params,SupplyConfig['SupplyItemList'].params)} />
          <div id="J_MoreButton">
            <div className="more-btn"><span>点击查看更多</span></div>
          </div>
        </div>
      </div>
    )
  },
  getInitialState: function(){
		return {
      params:{}
		}
	},
  componentDidMount() {
    SupplyConfig['SupplyItemList']['setupFilterClick']('multi',this)
  }
})

export  { Supply }
