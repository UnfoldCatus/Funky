import React, { PropTypes } from 'react'
import { MediaItem } from './common/media-item.jsx'
import _ from 'lodash'
import { CaseDetailsConfig } from './config/case-details-config'

const BasicInfo = React.createClass({
  render () {
    return (
      <div>
        <div className='info-title'><h1>主题属性</h1></div>
        <div className='theme-content mgb40 clearfix'>
          <div className='type-box'>
            <span>主题:</span>
            <p>{this.props.theme}</p>
          </div>
          <div className='type-box'>
            <span>风格:</span>
            {
              _.map(this.props.caseStyleName&&this.props.caseStyleName.split(',')||[],(v,k)=>{
                return <p key={k}>{v + ' '}</p>
              })
            }
          </div>
          <div className='type-box'>
            <span>色系:</span>
            <p>{this.props.color || '默认色系'}</p>
            <i className='violet-bg-1-js' />
            <i className='golden-bg-1-js' />
          </div>
        </div>
      </div>
    )
  }
})


const Concept = React.createClass({
  render () {
    if (this.props.designConcept) {
      return (
        <div>
          <div className="info-title" >
              <h1>设计理念</h1>
          </div>
          <div className="theme-content mgb40 clearfix">
            <p>{this.props.designConcept || ''}</p>
          </div>
        </div>
      )
    }else {
      return null
    }

  }
})

/**
价格
**/
const Price = React.createClass({
  render () {
    var f4Map = {
      '': '',
      1: '主持人',
      2: '化妆师',
      3: '摄影师',
      4: '摄像师',
      5: '双机摄影',
      6: '双机摄像',

    }
    var f4String = ''
    var standardWeddingString = this.props.personDescription || '';
    _.each(standardWeddingString.split(','), function(v,k) {
      f4String += (' ' + f4Map[v]);
    })

    if (this.props.totalPrice) {
      return (
        <div>
            <div className="info-title">
                <h1>价格</h1>
            </div>
            <div className="theme-content">
                <div className="all-price">
                    <span className='in-pirce'>
                        <span className="words pink-1-js">折后价:</span>
                        <span className="pink-1-js">￥</span><b className="pink-1-js">{parseFloat(this.props.totalCost).toFixed(2)}</b>
                    </span>
                    <span className='del-pirce'>
                        <span>原价: ￥</span><b>{parseFloat(this.props.originalPrice).toFixed(2)}</b>
                    </span>
                </div>
                <div className='price-box'>
                    <p className="price-detail first">
                        <span>场景布置费用:</span><em>￥</em><b>{parseFloat(this.props.senceCost).toFixed(2)}</b>
                    </p>
                    <p className="price-detail">
                        <span>{($.trim(f4String) === '')?'婚礼人费用：':'婚礼人(' + f4String +') 费用：'}</span><em>￥</em><b>{parseFloat(this.props.hdpcCost).toFixed(2)}</b>
                    </p>
                </div>
            </div>
        </div>
      )
    }else {
      return null
    }

  }
})



const CaseDetails = React.createClass({
  render () {
    let imageListData = []
    imageListData = JSON.parse(this.state.data.pcDetailImages || '[]')
    return (
      <div className='alxq-view'>
        <div className='layout-center-box mgb30' id='slider_case_detail'>
          <div className='photo-show-box'>
            <div className='big-img-box'>
              <div className='kpxq-img-box'>
                <div className="left-hover-box btn-prev"><div className="pos-box"><div className="bg-ico"></div><i className="ico-15-js ico-15-lef-js"></i></div></div>
                <div className="right-hover-box btn-next"><div className="pos-box"><div className="bg-ico"></div><i className="ico-15-js ico-15-rig-js"></i></div></div>
                <img className="big-img" src="http://placehold.it/1200x800" />
              </div>
            </div>
            <div className='gray-box gray-box-2 container'>
              <div className="small-img-box">
                  <ul className="item-box-2 clearfix">
                      {
                          imageListData.length && $.map(imageListData,function(v,k){
                              return (
                                  <li className="item transition-margin" key={k} data-big-img-url={v}>
                                    <MediaItem aspectRatio='3:2' height={100} mediaUrl={v || 'http://placehold.it/150x100'} />
                                  </li>
                              )
                          })
                      }
                  </ul>
              </div>
            </div>
          </div>
          <div className="tilte-box">
              <h1>{this.state.data.name}</h1>
          </div>
          <div className='case-detail-box responsive-box clearfix'>
            <div className='left-box'>
              <div className='intr-box'>
                <p>{this.state.data.description}</p>
              </div>
            </div>
            <div className='right-box'>
              <div className='line-left' />
                <BasicInfo {...this.state.data} />
                <Concept {...this.state.data} />
                <Price {...this.state.data} />
              </div>
          </div>
        </div>
      </div>
    )
  },
  getInitialState: function() {
    return {
      data:{}
    }
  },
  componentDidMount() {
    let cfg = CaseDetailsConfig['CaseDetails']
    let fetchUrl = cfg['buildUrl'](this.props.dataParams,cfg['dataUrl'])
    if(fetchUrl){
      fetch(fetchUrl)
        .then(res => {return res.json()})
        .then(j=>{
          if(j.success && j.data.length > 0) {
            // 因为后天返回的pcDetailImages是一个字符串,所以要转换成json
            this.setState({data:j.data[0]},()=>{
              $("#slider_case_detail").Slider({
                type: "Horizontal"
              })
            })
          }
        })
    }
  }
})

export { CaseDetails }
