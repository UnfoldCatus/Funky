import React, { PropTypes } from 'react'
import _ from 'lodash'
import { ListFilter } from './common/list-filter.jsx'
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
    let hallListTitle = (this.props.banquetHallList.length === 0)?(
      <dt>
        <span>---</span>
        <span>---</span>
        <span>---</span>
        <span>---</span>
      </dt>
    ):(
      <dt>
        <span>宴会厅</span>
        <span>桌数</span>
        <span>层高</span>
        <span>柱数</span>
      </dt>
    )
    return (
      <dl>
        <hallListTitle />
        {
          _.map(this.props.banquetHallList.slice(0,2),(v,k)=>{
            return (
              <dd key={k}>
                {/*v.banquetHallId*/}
                <a href='#'>
                  <span>{v.banquetHallName}</span>
                  <span><b>{v.capacity}</b><em>桌</em></span>
                  <span>{v.height+'米'}</span>
                  <span>{parseInt(v.pillarNumber)>0?'有':'无'}</span>
                </a>
              </dd>
            )
          })
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

const HotelListItem = React.createClass({
  render () {
    return (
      <li className='item-box clearfix'>
        <div className='info-box'>
          <div className='content-box'>
            {/*MediaItem*/}
            <div className='info'>
              <div className='title clearfix'>
                <a href='#' target='_blank'>
                  <h2> {this.props.hotelName} </h2>
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
                  <div className="star-box">
                      <i className="ico-star-2-js ico-star-2-gray-js"></i>
                      <i className="ico-star-2-js ico-star-2-pink-js" style={{width:72+'px'}}></i>
                  </div>
                  <span className="score">4.9</span>
                  <span className="hotel-type">
                    <b>{this.props.typeName}</b>
                    <b>|</b>
                    <b>{this.props.address.length>20?this.props.address.slice(0,18)+'...':this.props.address}</b>
                  </span>
                  <span className="desk-num">可容纳<b>{this.props.capacityPerTable}</b>桌</span>
              </div>
              <ListItemHallList />
              <a href='#' target='_blank' className='viewing-banquet transition-bg'>查看更多宴会厅</a>
            </div>
          </div>
        </div>
        <div className="reply-box">
            <div className="content-box">
                <ListItemFeatureLabel features={this.props.featureLable.split(',')||[]} />
            </div>
        </div>
      </li>
    )
  },
  propTypes: {
    hotelName: PropTypes.string,
    isGift: PropTypes.number,
    isDisaccount: PropTypes.number,
    lowestConsumption: PropTypes.string,
    highestConsumption: PropTypes.string,
    typeName: PropTypes.string,
    address: PropTypes.string,
    capacityPerTable: PropTypes.string,
    banquetHallList:PropTypes.array,
    hotelId:PropTypes.string,
    featureLable:PropTypes.string
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
          <div id="slider_top" className="slider-box bannar" style={{height:'450px'}}>
            {/*MediaSlider*/}
          </div>
        </div>
        <div className="layout-center-box J_HotelListFilterPanel" style={{minHeight:440+'px'}}>

          <ListFilter title={'区域'} name={'name'} klass={'ico-18-js ico-1-1-js'} valueKey={['id']} conditions={this.state.areas} sorterKey={['cityId']} />
          <ListFilter title={'分类'} name={'typeName'} klass={'ico-1-js ico-1-2-js'} valueKey={['hotelTypeId']} conditions={this.state.types} sorterKey={['hotelType']} />
          <ListFilter title={'桌数'} name={'name'} klass={'ico-18-js ico-18-2-js'} valueKey={['minTable','maxTable']} conditions={this.state.seatsCount} sorterKey={['minTable','maxTable']} />
          <ListFilter title={'价格'} name={'name'} klass={'ico-1-js ico-1-1-js'} valueKey={['minPrice','maxPrice']} conditions={this.state.prices}  sorterKey={['minPrice','maxPrice']}/>

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
  getInitialState() {
    return {
      types:[],
      prices: [{
        'minPrice': '0',
        'maxPrice': '2000',
        'name': '2000元以下'
      }, {
        'minPrice': '2000',
        'maxPrice': '3000',
        'name': '2000-3000元'
      }, {
        'minPrice': '3000',
        'maxPrice': '4000',
        'name': '3000-4000元'
      }, {
        'minPrice': '4000',
        'maxPrice': '99999',
        'name': '4000元以上'
      }],
      seatsCount: [{
        'maxTable': '10',
        'minTable': '0',
        'name': '10桌以下'
      }, {
        'minTable': '10',
        'maxTable': '20',
        'name': '10-20桌'
      }, {
        'minTable': '20',
        'maxTable': '30',
        'name': '20-30桌'
      }, {
        'minTable': '30',
        'maxTable': '40',
        'name': '30-40桌'
      },{
        'minTable': '40',
        'maxTable': '50',
        'name': '40-50桌'
      },{
        'minTable': '51',
        'maxTable': '9999',
        'name': '50桌以上'
      }],
      areas: [
        {
          "id": 99,
          "name": "渝北区",
          "pid": ""
        },
        {
          "id": 94,
          "name": "南岸区",
          "pid": ""
        },
        {
          "id": 90,
          "name": "渝中区",
          "pid": ""
        },{
          "id": 92,
          "name": "江北区",
          "pid": ""
        }, {
          "id": 95,
          "name": "九龙坡区",
          "pid": ""
        },{
          "id": 100,
          "name": "巴南区",
          "pid": ""
        },  {
          "id": 91,
          "name": "大渡口区",
          "pid": ""
        },  {
          "id": 101,
          "name": "北部新区",
          "pid": ""
        },{
          "id": 96,
          "name": "北碚区",
          "pid": ""
        }, {
          "id": 93,
          "name": "沙坪坝区",
          "pid": ""
        },
        {
          "id": 114,
          "name": "重庆近郊",
          "pid": ""
        }
      ],
      hotels:[],
      totalPage:0
    }
  },
  loadMore(){},
  componentDidMount() {
    console.log('start to load hotels');
    this.setState({
      hotels:[]
    })
  }
})


export { Hotel }
