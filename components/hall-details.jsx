import React, { PropTypes } from 'react'
import _ from 'lodash'
import { MediaItem } from './common/media-item.jsx'
import { HallDetailsConfig } from './config/hall-details-config'


const HallThumb = React.createClass({
  render () {
    return (
      <div className='img-info'>
        <div className='slider-box-4-js'>
          {
            _.map(this.props.data,(v,k)=>{
              let url=v+'@90q|watermark=1&object=c2h1aXlpbi5wbmc&t=80&p=5&y=10&x=10'
              if (0===k) {
                return (
                  <a href={url} key={k} className='slider-hover-box' data-uk-lightbox='{group:"hallThumb"}' data-lightbox-type='image' >
                    <div className='big-img-box mgb30'>
                      <MediaItem {...HallDetailsConfig['HallThumbMediaItem']} mediaUrl={v} water={false} />
                    </div>
                    <div className='slider-tip-box'>
                      <span>点击看大图</span>
                    </div>
                  </a>
                )
              }else {
                return (
                  <a href={url} key={k} data-uk-lightbox='{group:"hallThumb"}' data-lightbox-type='image'></a>
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

const HallBaseInfo = React.createClass({
  render () {
    return (
      <div className="base-info">
          <h1 className="mgb10">{this.props.name}</h1>
          <div className="p mgb30 clearfix">
              <p>最大桌数<b>{this.props.maxTableNum}</b></p>
              <p>柱子<span><b>{parseInt(this.props.pillerNum)>0?'有':'无' || '无'}</b></span></p>
              <p>可用面积<span><b>{this.props.area}</b>平方米</span></p>
              <p>形状<span><b>{this.props.shape}</b></span></p>
              <p>层高<span><b>{this.props.height}</b>米</span></p>
              <p>低消<span><b>{'¥' + parseFloat(this.props.lowestConsumption).toFixed(2)}</b>/桌</span></p>
          </div>
      </div>
    )
  },
    getDefaultProps(){
    return {
      data:{
        'name':'金色百年'
      }
    }
  }
})

const HotelRecommend = React.createClass({
  render () {
    return (
      <ul className="list-adv">
          {
              _.map(this.state.recommends,function(v,k){
                  return (
                      <li className="item-box" key={k}>
                          <a href={'/hotel/'+v.id} className='img-box' target='_blank'>
                            <MediaItem mediaUrl={v.coverUrlWeb} width={168} aspectRatio='3:2' />
                          </a>
                          <div className="title-box">
                          <span>{v.name}</span>
                          </div>
                      </li>
                  )
              })
          }
      </ul>
    )
  },
  getDefaultProps(){
    return {
      conditions:{}
    }
  },
  getInitialState() {
    return {
      recommends:[{
        'coverUrlWeb':'//placehold.it/168x112',
        'name':'金色百年'
      }]
    }
  },
  componentWillReceiveProps(nextProps) {
    let p = ''
    if (_.size(this.props.params)>0) {
      p = '?' + $.param(_.merge(this.props.params,nextProps.conditions))
    }
    fetch(this.props.baseUrl + this.props.dataUrl + p )
    .then(res=>res.json())
    .then(j =>{
      this.setState({
        recommends:j.data
      })
    })
  },
  componentDidMount() {
    let p = ''
    if (_.size(this.props.params)>0) {
      p = '?' + $.param(this.props.params)
    }

    fetch(this.props.baseUrl + this.props.dataUrl + p )
    .then(res=>res.json())
    .then(j =>{
      this.setState({
        recommends:j.data
      })
    })
  }
})


const CasesShow = React.createClass({
  render () {
    console.log(this.state.data[0])
    let recommend = this.state.data[0] //第一个
    let secondary = this.state.data.slice(1,5) //剩下四个
    if (recommend) {
      return (
        <div>
          <h2 className="mgb10">本厅婚礼实例</h2>
          <div className='Case-box mgb20'>
            <div className='img-box'>
              <MediaItem width={720} aspectRatio={'1:-1'} mediaUrl={recommend.coverUrlWeb} />
            </div>
            <div className='info-box'>
              <h3>{recommend.name}</h3>
              <p>{recommend.description.slice(0,140)}</p>
              <div className='theme-box clearfix'>
                <span className='theme'>主题:<b>{recommend.theme}</b></span>
                <span className='theme'>风格:<b>{recommend.caseStyleName}</b></span>
                <span className='theme'>色系:<b>{recommend.color}</b></span>
              </div>
            </div>
          </div>
          <ul className="list-2-js list-case clearfix">
            {
              _.map(secondary,(v,k)=>{
                return (
                  <li className="item-box column-mg20-17 mg0" key={k}>
                    <a className="hover-box transition-opacity" href={'/cases/'+v.id}>
                    <div className="pos-box">
                        <h3>{v.name}</h3>
                        <div className="etc-info"><b>{parseInt(v.senceCost)!==0?'￥'+parseFloat(v.senceCost).toFixed(2):''}</b><span>（{v.holdingTime}）</span></div>
                        <div className="btn-box"></div>
                        <div classNameL="mask-bg"></div>
                    </div>
                  </a>
                  <div className='img-box'>
                    <MediaItem width={463} aspectRatio={'1:-1'} mediaUrl={v.coverUrlWeb} />
                  </div>
                </li>
                )
              })
            }
          </ul>
        </div>
      )
    }else {
      return null
    }

  },
  getDefaultProps(){
    return {
      dataUrl:undefined
    }
  },
  getInitialState() {
    return {
      data:[]
    }
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.dataUrl !== undefined && nextProps.caseId) {
      let casesIDs = nextProps.caseId.split(',') || []
      Promise.all(_.map(casesIDs.slice(0,5),(v,k)=>{
        return fetch(nextProps.baseUrl + nextProps.dataUrl+v).then(res=>res.json()).then(j=>j.data[0])
      })).then((data)=>{
        this.setState({
          data:data
        })
      })
    }
  },
  componentDidMount() {
    if (this.props.dataUrl !== undefined && this.props.caseId) {
      let casesIDs = this.props.caseId.split(',') || []
      Promise.all(_.map(casesIDs,(v,k)=>{
        return fetch(this.props.baseUrl + this.props.dataUrl+v).then(res=>res.json()).then(j=>j.data[0])
      })).then((data)=>{
        this.setState({
          data:data
        })
      })
    }
  }
})

//<div className="sel-card-jsbn">
//<span className="item">同价位</span>
//</div>
const HallDetails = React.createClass({
  render () {
    let thumbs = JSON.parse(this.state.details.pcDetailImages||'[]')
    let recommendCondition = {
      'minPrice':
      this.state.details.lowestConsumption || 0
    }
    return (
      <div className='hyyd-detail-view'>
        <div className='layout-center-box'>
          <div className='hotel-detail-box'>
            <HallThumb data={thumbs} />
            <HallBaseInfo {...this.state.details} />
          </div>
          <div className='leftInner'>
            <div className="hotel-detail-info banquet-detail-info clearfix">
              <h2 className="mgb10">本厅平面图</h2>
              <div className="banquet-img-box mgb30">
                  <img src={this.state.details.graphicDesignUrl}/>
              </div>
              <CasesShow {..._.merge(this.state.details,HallDetailsConfig['CasesShow'])} caseId={this.state.details.caseId}/>
            </div>
          </div>
          <div className='recommend-adv-box'>
            <div className='hotel-recommend-adv-box clearfix'>
              <div className="title-rcmd">
                  <h1>推荐酒店</h1>
                  <div className="line-middle" />
              </div>
              <HotelRecommend {...HallDetailsConfig['HotelRecommend']} conditions={recommendCondition} />
            </div>
          </div>
        </div>
      </div>
    )
  },
  getInitialState() {
    return {
      details:{}
    }
  },
  componentDidMount() {

    let cfg = HallDetailsConfig['HallDetails']
    let fetchUrl = cfg['buildUrl'](this.props.dataParams,cfg['dataUrl'])
    if(fetchUrl){
      fetch(fetchUrl)
        .then(resp => {return resp.json()})
        .then(jsonData=>{
          this.setState({details:jsonData.data[0]})
        })
    }
  }
})

export { HallDetails }
