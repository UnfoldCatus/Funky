import React, { PropTypes } from 'react'
import _ from 'lodash'
import { MediaSlider } from './common/media-slider.jsx'
import { Banner } from './common/banner.jsx'
import { SupplyConfig } from './config/supply-config'
let Filter = React.createClass({
  render() {
    let typeList = this.props.types || [];
    return (
      <div className='J_FilterCtrl'>
        <div className="filter-title">
          <span className="sel">分类</span>
        </div>
        <div className="filter-box">
          <span className="title"><i className="ico-1-js ico-1-2-js"></i><b>分类</b></span>
          <div className="tab-box" id='J_CardType'>
            <span className='tab tab-sel' data-type-id='0'>全部</span>
            {
              _.map(typeList,(v,k)=>{
                return (
                	<span key={v.id} data-type-id={v.id} className="tab">{v.name}</span>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
});

let SupplyListItem = React.createClass({

  render() {
    return (
        <li className='item-box'>
          <div className='img-box'>
            {/*ImageListItem*/}
          </div>
          <div className="content-box">
            <a className="title"><p>{this.props.item.title + ' ' + this.props.item.description || ' ' + this.props.item.suppliesNumber || '0'+'个'}</p></a>
            <div className="price-box">
              <b className="in-price"><em>￥</em></b>
              <b className='in-price'>{parseFloat(this.props.item.sellingPrice || '0').toFixed(2)}</b>
              <span>￥</span>
              <span className="tm-price">{parseFloat(this.props.item.marketPrice || '0').toFixed(2)}</span>
            </div>
          </div>
        </li>
    )
  }

});

let SupplyList = React.createClass({
	render(){
		let self = this;
    let items = this.props.items && this.props.items.data || [];
    let totalCount =this.props.items && this.props.items.totalCount || 0;
    return (
      <div>
        <div className="screening-results">
          <span className="find">找到相关用品<b>{totalCount}</b> 个</span>
        </div>

        <ul className="list-recommend J_Item">
          {
            _.map(items,(v,k)=>{
              return <SupplyListItem item={v} key={k} baseUrl={self.props.baseUrl}/>
            })
          }
        </ul>
      </div>
    )
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
            <Filter types={self.state && self.state['types']} />
            <SupplyList items={self.state && self.state['list#supplies']&& self.state['list#supplies'].payload}  baseUrl={self.state && self.state['list#supplies'] && self.state['list#supplies'].url}/>
        </div>
      </div>
    )
  },
  getInitialState: function(){
		return {
			types:[{id:0,name:"喜糖"},{id:1,name:"礼盒"},{id:2,name:"请柬"}]
		}
	}
})

export  { Supply }
