import React, { PropTypes } from 'react'
import _ from 'lodash'
import { MediaItem } from './common/media-item.jsx'
import { HotelDetailsConfig } from './config/hotel-details-config'

const HotelThumb = React.createClass({
  render () {
    return (
      <div className='img-info'>
        <div className='slider-box-4-js'>
          {
            _.map(this.props.data,(v,k)=>{
              if (0===k) {
                return (
                  <a href={v} key={k} className='slider-hover-box'>
                    <div className='big-img-box mgb30'>
                      <MediaItem {...HotelDetailsConfig['HotelThumbMediaItem']} mediaUrl={v.url||v} />
                    </div>
                    <div className='slider-tip-box'>
                      <span>点击看大图</span>
                    </div>
                  </a>
                )
              }else {
                return (
                  <a href={v} key={k}></a>
                )
              }
            })
          }
        </div>
      </div>
    )
  },
  getDefaultProps(){
    return {
      data:[]
    }
  }
})

const HotelBaseInfo = React.createClass({
  render () {
    return (
      <div className="base-info">
          <h1 className="mgb10">{this.props.data.name}</h1>
          <div className="p mgb30 clearfix">
              <p>规格类型<b>{this.props.data.typeName}</b></p>
              <p>价格<span>¥<b>{this.props.data.lowestConsumption}</b>-<b>{this.props.data.highestConsumption}</b>/桌</span></p>
              <p>场厅数量<span><b>{this.props.data.banquetHall && this.props.data.banquetHall.length}</b>个专用宴会厅</span></p>
              <p>最大容客数<span><b>{this.props.data.maxTableNum}</b>桌</span></p>
              <p id="J_AddressButton" >所在地址:<span>
                <a href={'#/map?longitude='+this.props.data.longitude+'&latitude='+this.props.data.latitude}>
                  <b>{this.props.data.address}</b>
                </a>
                <i className="ico-8-js" />
                </span>
              </p>
          </div>
          <div id='J_InfoContainer' className="score-info mgb40 clearfix">
              <div className="star-box">
                  <div className="star">
                      <span>服务质量</span>
                      <div>
                          <i className="ico-star-3-js ico-star-3-gray-js" />
                          <i className="ico-star-3-js ico-star-3-pink-js" style={{width: 45}} />
                      </div>
                  </div>
                  <div className="star">
                      <span>菜品质量</span>
                      <div>
                          <i className="ico-star-3-js ico-star-3-gray-js" />
                          <i className="ico-star-3-js ico-star-3-pink-js" />
                      </div>
                  </div>
                  <div className="star">
                      <span>装修档次</span>
                      <div>
                          <i className="ico-star-3-js ico-star-3-gray-js" />
                          <i className="ico-star-3-js ico-star-3-pink-js" />
                      </div>
                  </div>
              </div>
              <div className="etc">
                  <div className="item">
                      <em>大礼包</em>
                      <i className="arrow-5-js arrow-5-rig-2-js" style={{display:'none'}} />
                      <a href="#/sale-strategy?type=libao" target="_blank">通过金色百年预定婚宴，领取12999大礼包</a>
                  </div>
                  <div className="item">
                      <em>组合优惠</em>
                      <i className="arrow-5-js arrow-5-rig-2-js" style={{display:'none'}} />
                      <a href="#/sale-strategy?type=zuhe" target="_blank">消费项目越多，优惠力度越大</a>
                  </div>
              </div>
          </div>
      </div>
    )
  },
  getDefaultProps(){
    return {
      data:{
        'banquetHall':[]
      }
    }
  }
})


const HotelCoverInfo = React.createClass({
  render () {
    return (
      <div className="hotel-detail-info clearfix">
          <h2 className="mgb10">酒店介绍</h2>
          <div className="hotel-info-box mgb30">
              <div className="img-box">
                  <MediaItem {...HotelDetails['CoverMediaItem']} mediaUrl={this.props.data.coverUrlWeb}/>
              </div>
              <div className="p">
                  <p>{ this.props.data.detailedIntroduction }</p>
              </div>
          </div>
          <h2 className="mgb20">
              {this.props.data.banquetHall && this.props.data.banquetHall.length>0?'宴会厅介绍':''}
          </h2>
          <ul className="list-recommend">
              {
                  this.props.data.banquetHall &&
                  this.props.data.banquetHall.length>0 &&
                  _.map(this.props.data.banquetHall,function(v,k){
                      return (
                          <li key={k} className={(k%2 === 1)?'item-box mgb20 mg0' :'item-box mgb20 mgr20'}>
                              <div className="title-box">
                                  <h2>{v.banquetHallName}</h2>
                              </div>
                              <div className="img-box">
                                  <MediaItem {...HotelDetailsConfig['HotelCoverInfoMediaItem']} url={v.image_url} />
                              </div>
                              <div className="info-box">
                                <ul className="clearfix">
                                    <li className="li_w1"><span >桌数：</span><span><span>{(v.capacity || '--')}</span><span>桌</span></span></li>
                                    <li className="li_w1"><span>柱子：</span><span>{(v.pillarNumber==='0')?'无':'有' || '--'}</span></li>
                                    <li className="li_w2"><span>面积：</span><span><span>{(v.area||'--')}</span><span>平方米</span></span></li>
                                    <li className="li_w1"><span>形状：</span><span>{v.shape || '--'}</span></li>
                                    <li className="li_w1"><span>层高：</span><span><span>{v.height || '--'}</span><span>米</span></span></li>
                                    <li className="li_w2"><span>低消：</span><span><span>¥</span><span>{ parseFloat(v.leastConsumption).toFixed(2)}</span><span>／桌</span></span></li>
                                </ul>
                                  <a className="btn-js btn-grayline-pink-1-js transition-bg"
                                      href='/'>查看详情</a>
                              </div>
                          </li>
                      )
                  })
              }
          </ul>

          <h2 id='test'>{this.props.data.hotelMealPackList && this.props.data.hotelMealPackList.length>0?'婚宴套系菜单':''}</h2>
          <div className="package-menu">
              <ul className="hotel-menu-list" id="hotel_menu_list">
                  {
                      _.map(this.props.data.hotelMealPackList,function(v,i){
                          return (
                              <li className={i === 0 && "list-item-1-js list-item-1-current-js" || "list-item-1-js"} key={i}>
                                  <div className="item-box">
                                      <h3 className="transition">
                                      <span>
                                          {v.mealPackName}
                                      </span>
                                      </h3>
                                      <i className="arrow-rig" />
                                  <span className="pirce">
                                      <strong>￥</strong>
                                      <b>
                                          {v.mealPackPrice}
                                      </b>
                                      <strong>／桌</strong>
                                  </span>
                                      <i className="arrow-lef" />
                                      <a className="more transition">详情</a>
                                  </div>
                                  <div className="cont-menu transition">
                                      <dl>
                                          <dt>
                                              {v.aliasName}
                                          </dt>
                                          {
                                              $.map(v.mealPackDishList,function(vx,ix){
                                                  return                                             (
                                                      <dd key={ix}>
                                                          {vx}
                                                      </dd>
                                                  )
                                              })
                                          }
                                      </dl>
                                  </div>
                              </li>

                          )
                      })
                  }
              </ul>
          </div>


      </div>
    )
  },
  getDefaultProps(){
    return {
      data:{
        banquetHall:[],
        hotelMealPackList:[]
      }
    }
  }
})


const HotelDetails = React.createClass({
  render () {
    return (
      <div className='hyyd-detail-view'>
        <div className='layout-center-box'>
          <div className='hotel-detail-box'>
            <HotelThumb data={JSON.parse(this.state.details.pcDetailImages||'[]')} />
            <HotelBaseInfo data={this.state.details} />
          </div>
          <div className='leftInner'>
            <HotelCoverInfo data={this.state.details} />
          </div>
        </div>
      </div>
    )
  },
  getInitialState() {
    return {
      details:{ }
    }
  },
  componentDidMount() {
    let cfg = HotelDetailsConfig['HotelDetails']
    let fetchUrl = cfg['buildUrl'](this.props.dataParams,cfg['dataUrl'])
    if(fetchUrl){
      fetch(fetchUrl)
        .then(res => {return res.json()})
        .then(j=>{
          if(j.success && j.data.length > 0) {
            this.setState({details:j.data[0]});
          }
        })
    }
  }
})

export  { HotelDetails }
