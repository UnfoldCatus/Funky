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
                <a href={'/hall/'+v.id}>
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
      <div className='J_EventHooker'>
        <div className="screening-2-jsbn">
          <div className="line-1"></div>
          <span className="item">默认排序</span>
          <span className="item J_SorterButton">
            <em>价格</em>
            <span className="arrow-box descending J_SorterArrow" data-filter='price'>
              <i className="arrow-up"></i>
              <i className="arrow-down"></i>
            </span>
          </span>
          <span className="item J_SorterButton">
            <em>桌数</em>
            <span className="arrow-box ascending J_SorterArrow" data-filter='table'>
              <i className="arrow-up"></i>
              <i className="arrow-down"></i>
            </span>
          </span>
          <label className="item">
            <input type="checkbox" className='J_ExtraFilter' data-filter='isGift'/>
            <em>礼包</em>
          </label>
          <label className="item">
            <input type="checkbox" className='J_ExtraFilter' data-filter='isDiscount' />
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
            <div style={{marginTop:'0px'}} className="result">
              <span>共找到婚宴酒店</span><b id='J_TotalCount'>{this.state.count}</b>个
            </div>
          </div>
        </div>
        <ul className='list-recommend'>
          {
            _.map(this.state.data,(v,k)=>{
              return(
                <HotelListItem key={k} {...v} />
              )
            })
          }
        </ul>
      </div>

    )
  },
  propTypes: {
    hotels: React.PropTypes.array
  },
  getDefaultProps(){
    return {
      params:{}
    }
  },
  getInitialState() {
    return {
      data:[],
      dataStore:[],
      count:0,
      currentIndex:0
    }
  },
  componentDidMount() {
    HotelConfig['HotelList']['fetchFunc'](this,null)(this)
     //数据请求地址配置在config文件
    // if (this.props.dataUrl !== undefined) {
    //   let p = ''
    //   if (_.size(this.props.params)>0) {
    //     p = '?'+$.param(this.props.params)
    //   }
    //   fetch(this.props.baseUrl + this.props.dataUrl+p)
    //   .then(res => {return res.json()})
    //   .then(j=>{
    //     $('#J_TotalCount').html(j.data.length)
    //     this.setState({ data:j.data })
    //   })
    // }
  },
  componentWillReceiveProps(nextProps) {
    HotelConfig['HotelList']['fetchFunc'](this,nextProps)(this,nextProps)
    // if (nextProps.dataUrl !== undefined) {
    //   let p = ''
    //   if (_.size(nextProps.params)>0) {
    //     p = '?'+$.param(nextProps.params)
    //   }
    //   fetch(this.props.baseUrl + nextProps.dataUrl + p)
    //   .then(res => {return res.json()})
    //   .then(j=>{
    //     let temp = []
    //     temp[0] = j.data
    //     $('#J_TotalCount').html(temp[0].length)
    //     this.setState({ data:j.data,dataStore:temp})
    //   })
    // }
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
                <a href={'/hotel/'+this.props.id} target='_blank'>
                  <h2>{this.props.name}</h2>
                  {!!this.props.isGift && <label className='label-pink'>礼</label> }
                  {!!this.props.isDiscount && <label className='label-blue'>惠</label> }
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
                  <a href={'/hotel/'+this.props.id} target='_blank' className='viewing-banquet transition-bg'>查看更多宴会厅</a>
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
          <div id="slider_top" className="slider-box bannar" style={{height:HotelConfig['MediaSlider']['height']}}>
            <MediaSlider {...HotelConfig['MediaSlider']}/>
          </div>
        </div>
        <div className="layout-center-box J_FilterCtrl">
          <div className='mgb30' />
          <ListFilter title={'区域'} name={'name'} klass={'ico-18-js ico-1-1-js'} valueKey={['id']} sorterKey={['cityId']} {...HotelConfig['DistrictConditions']} />
          <ListFilter title={'分类'} name={'name'} klass={'ico-1-js ico-1-2-js'} valueKey={['id']}  sorterKey={['hotelType']} {...HotelConfig['TypeConditions']} />
          <ListFilter title={'桌数'} name={'name'} klass={'ico-18-js ico-18-2-js'} valueKey={['minTable','maxTable']}  sorterKey={['minTable','maxTable']} {...HotelConfig['SeatsCountConditions']}/>
          <ListFilter title={'价格'} name={'name'} klass={'ico-1-js ico-1-1-js'} valueKey={['minPrice','maxPrice']} {...HotelConfig['PricesConditions']}  sorterKey={['minPrice','maxPrice']}/>


          <HotelList {...HotelConfig['HotelList']} params={_.merge(this.state.params,HotelConfig['HotelList'].params) } />
          <div>
            <div id="J_MoreButton">
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
      areas: [] // fetch
    }
  },
  getInitialState() {
    return {
      params:{
        sort:'price',
        order:'desc'
      }
    }
  },
  componentDidMount() {
    HotelConfig['DistrictConditions']['setupFilterClick']('multi',this)
    HotelConfig['SorterAndSearch'](this)
  }
})


export { Hotel }
