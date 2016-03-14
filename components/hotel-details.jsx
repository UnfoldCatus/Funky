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
                      <MediaItem {...HotelDetailsConfig['MediaItem']} mediaUrl={v.url} />
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
          <h1 className="mgb10">
              {this.props.data.name}
          </h1>
          <div className="p mgb30 clearfix">
              <p>规格类型<b>
                  {this.props.data.typeName}
              </b></p>
            <p>价格<span>¥<b>{this.props.data.lowestConsumption}</b>-<b>{this.props.data.highestConsumption}</b>/桌</span></p>
              <p>场厅数量<span><b>
                  {this.props.data.banquetHall && this.props.data.banquetHall.length}
              </b>个专用宴会厅</span></p>
              <p>最大容客数<span><b>
                  {this.props.data.maxTableNum}
              </b>桌</span></p>
              <p id="J_AddressButton" >所在地址:<span>
              <a href={'#/map?longitude='+this.props.data.longitude+'&latitude='+this.props.data.latitude}>
                  <b>
                      {this.props.data.address}
                  </b>
              </a>
              <i className="ico-8-js" />
          </span></p>
          </div>

          <div id='J_InfoContainer' className="score-info mgb40 clearfix">
              <div className="star-box">
                  <div className="star">
                      <span>服务质量</span>
                      <div>
                          <i className="ico-star-3-js ico-star-3-gray-js" />
                          <i
                              className="ico-star-3-js ico-star-3-pink-js"
                              style={{width: 45}} />
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


const HotelDetails = React.createClass({
  render () {
    return (
      <div className='hyyd-detail-view'>
        <div className='layout-center-box'>
          <div className='hotel-detail-box'>
            <HotelThumb data={JSON.parse(this.state.details.pcDetailImages||'[]')} />
            <HotelBaseInfo data={this.state.details} />
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
