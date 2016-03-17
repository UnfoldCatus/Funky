import React, { PropTypes } from 'react'
import _ from 'lodash'
import { ListFilter } from './common/list-filter.jsx'
import { HotelConfig } from './config/hotel-config.js'
import { MediaSlider } from './common/media-slider.jsx'
import { MediaItem } from './common/media-item.jsx'
/**
组件结构
<Hotel>
  <MediaSlider />
  <ListFilter />
  <HotelList> <= hotels
    <HotelListItem>
      <MediaItem />
      <ListItemHallList />
      <ListItemFeatureLabel />
    </HotelListItem>
  </HotelList>
</Hotel>
**/

/*每个酒店的特殊标签 */
const ListItemFeatureLabel  = React.createClass({
  render () {
    return (
      <div className='label-box clearfix'>
        {
          _.map(this.props.features.slice(0,8),(v,k)=>{
            return (
              <label key={k}>
                  {v.length>6?v.slice(0,5)+'...':v}
              </label>
            )
          })
        }
      </div>
    )
  },
  propTypes: {
    features: PropTypes.array
  },
  getDefaultProps(){
    return {
      features:[]
    }
  }
})
/*宴会厅列表*/
const ListItemHallList = React.createClass({
  render () {
    return (
      <dl>
        <dt>
          <span>宴会厅</span>
          <span>桌数</span>
          <span>层高</span>
          <span>柱数</span>
        </dt>
        {
          _.map(this.props.banquetHallList.slice(0,2),(v,k)=>{
            return (
              <dd key={k}>
                <a href='/'>
                  <span>{v.name}</span>
                  <span><b>{v.maxTableNum}</b><em>桌</em></span>
                  <span>{v.height+'米'}</span>
                  <span>{parseInt(v.pillarNumber)>0?'有':'无'}</span>
                </a>
              </dd>
            )
          })
        }
        {
          this.props.banquetHallList.length === 0 &&
          (
            <dd>
              <span>----</span>
              <span>----</span>
              <span>----</span>
              <span>----</span>
            </dd>
          )
        }
      </dl>
    )
  },
  propTypes: {
    banquetHallList: React.PropTypes.array
  },
  getDefaultProps(){
    return {
      banquetHallList:[]
    }
  }
})
/*酒店列表*/
const HotelList = React.createClass({
  render () {
    return (
      <ul className='list-recommend'>
        {
          _.map(this.props.hotels,(v,k)=>{
            return(
              <HotelListItem key={k} {...v} />
            )
          })
        }
      </ul>
    )
  },
  propTypes: {
    hotels: React.PropTypes.array
  },
  getDefaultProps(){
    return {
      hotels:[]
    }
  },
  componentWillReceiveProps(nextProps) {
    console.log('hotels data received');
  }
})
/* 去掉酒店星标
 <div className="score-box clearfix">
   <div className="star-box">
     <i className="ico-star-2-js ico-star-2-gray-js"></i>
     <i className="ico-star-2-js ico-star-2-pink-js" style={{width:72+'px'}}></i>
   </div>
   <span className="score">4.9</span>
   <span className="hotel-type">
     <b>{this.props.typeName}</b>
     <b>|</b>
     <b>{this.props.address.length>26?this.props.address.slice(0,24)+'...':this.props.address}</b>
   </span>
   <span className="desk-num">可容纳<b>{this.props.maxTableNum}</b>桌</span>
 </div>
* */
const HotelListItem = React.createClass({
  render () {
    return (
      <li className='item-box clearfix'>
        <div className='info-box'>
          <div className='content-box'>
            <a href={'/hotel/'+this.props.id} className='img-box'>
              <MediaItem {...HotelConfig['HotelList']} mediaUrl={this.props.coverUrlWeb} />
            </a>
            <div className='info'>
              <div className='title clearfix'>
                <a href='#' target='_blank'>
                  <h2>{this.props.name}</h2>
                  {!!this.props.isGift && <label className='label-pink'>礼</label> }
                  {!!this.props.isDisaccount && <label className='label-blue'>惠</label> }
                </a>
              </div>
              <div className='price-box'>
                <span>￥</span>
                <span className="big">{this.props.lowestConsumption}</span>
                <span>-</span>
                <span className="big">{this.props.highestConsumption}</span>
              </div>
              <div className="score-box clearfix">
                  <span className="hotel-type">
                    <b>{this.props.typeName}</b>
                    <b>|</b>
                    <b>{this.props.address.length>26?this.props.address.slice(0,24)+'...':this.props.address}</b>
                  </span>
                  <span className="desk-num">可容纳<b>{this.props.maxTableNum}</b>桌</span>
              </div>
              <ListItemHallList banquetHallList={this.props.banquetHall} />
              {
                this.props.banquetHall.length!==0 &&
                (
                  <a href='/' target='_blank' className='viewing-banquet transition-bg'>查看更多宴会厅</a>
                )
              }
            </div>
          </div>
        </div>
        <div className="reply-box">
            <div className="content-box">
                <ListItemFeatureLabel features={this.props.featureLabel.split(',')||[]} />
            </div>
        </div>
      </li>
    )
  },
  propTypes: {
    hotelName: PropTypes.string,
    isGift: PropTypes.number,
    isDisaccount: PropTypes.number,
    lowestConsumption: PropTypes.number,
    highestConsumption: PropTypes.number,
    typeName: PropTypes.string,
    address: PropTypes.string,
    capacityPerTable: PropTypes.string,
    banquetHallList:PropTypes.array,
    hotelId:PropTypes.number,
    featureLabel:PropTypes.string
  },
  getDefaultProps(){
    return{
      banquetHallList:[],
      isDisaccount:0,
      isGift:0
    }
  }

})


/*Main:酒店列表组件*/
const Hotel = React.createClass({
  render () {
    return (
      <div className='hyyd-view hotel-page'>
        <div className="bannar-all-box">
          <div id="slider_top" className="slider-box bannar">
            <MediaSlider {...HotelConfig['MediaSlider']}/>
          </div>
        </div>
        <div className="layout-center-box J_HotelListFilterPanel">
          <div className='mgb30' />
          <ListFilter title={'区域'} name={'name'} klass={'ico-18-js ico-1-1-js'} valueKey={['id']} sorterKey={['cityId']} {...HotelConfig['DistrictConditions']} />
          <ListFilter title={'分类'} name={'name'} klass={'ico-1-js ico-1-2-js'} valueKey={['id']}  sorterKey={['hotelType']} {...HotelConfig['TypeConditions']} />
          <ListFilter title={'桌数'} name={'name'} klass={'ico-18-js ico-18-2-js'} valueKey={['minTable','maxTable']}  sorterKey={['minTable','maxTable']} {...HotelConfig['SeatsCountConditions']}/>
          <ListFilter title={'价格'} name={'name'} klass={'ico-1-js ico-1-1-js'} valueKey={['minPrice','maxPrice']} {...HotelConfig['PricesConditions']}  sorterKey={['minPrice','maxPrice']}/>

          <div className="screening-2-jsbn">
            <div className="line-1"></div>
            <span className="item">默认排序</span>
            <span className="item J_SorterButton">
              <em>价格</em>
              <span className="arrow-box ascending J_SorterArrow" data-filter='price'>
                <i className="arrow-up"></i>
                <i className="arrow-down"></i>
              </span>
            </span>
            <span className="item J_SorterButton">
              <em>桌数</em>
              <span className="arrow-box descending J_SorterArrow" data-filter='table'>
                <i className="arrow-up"></i>
                <i className="arrow-down"></i>
              </span>
            </span>
            <label className="item">
              <input type="checkbox" className='J_ExtraFilter' data-filter='isGift'/>
              <em>礼包</em>
            </label>
            <label className="item">
              <input type="checkbox" className='J_ExtraFilter' data-filter='isDisaccount' />
              <em>优惠</em>
            </label>
            <div className="search-box">
              <div className="search">
                <i className="ico-6-js"></i>
                <input type="text" className="txt J_SearchName" placeholder="请输入酒店名称" />
              </div>
               <span className="sub-1-js">
                   <button type="submit" className="subt J_FindByName">查找酒店</button>
               </span>
            </div>
            <div className="info-box">
              <div style={{marginTop:'0px'}} className="result" id='J_TotalCount'>
                <span>共找到婚宴酒店</span><b>{this.state.hotels.length}</b>个
              </div>
            </div>
          </div>
          <HotelList hotels={this.state.hotels} />
          <div>
            <div onClick={this.loadMore} id="J_MoreButton">
              <div className="more-btn"><span>点击查看更多</span></div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  getDefaultProps(){
    return {
      types:[], // fetch
      prices: HotelConfig['Prices'], // config
      seatsCount: HotelConfig['SeatsCount'], // config
      areas: [], // fetch
      hotels:[], // fetch
    }
  },
  getInitialState() {
    return {
      hotels:[]
    }
  },
  componentDidMount() {
    const HotelListConfig = HotelConfig['HotelList'] //数据请求地址配置在config文件
    if (HotelListConfig.dataUrl !== undefined) {
      fetch(HotelListConfig.baseUrl + HotelListConfig.dataUrl)
      .then(res => {return res.json()})
      .then(j=>{
        this.setState({ hotels:j.data })
      })
    }

  /*  const TypeCategory = HotelConfig['TypeCategory'] //取到配置的获取类型数据的请求地址
    if (TypeCategory.dataUrl !== undefined) {
      fetch(TypeCategory.baseUrl + TypeCategory.dataUrl)
      .then(res => {return res.json()})
      .then(j=>{
        this.setState({ types: _.map(j.data || [],(v,k)=>{ return _.pick(v,['name','id']) }) })
      })
    }

    const DistrictCategory = HotelConfig['DistrictCategory'] //地区数据接口地址
    if (DistrictCategory.dataUrl !== undefined) {
      fetch(DistrictCategory.baseUrl + DistrictCategory.dataUrl)
      .then(res => {return res.json()})
      .then(j=>{
        this.setState({ areas: _.map(j.data || [],(v,k)=>{ return _.pick(v,['name','id']) }) })
      })
    }*/
  }
})


export { Hotel }
