import React, { PropTypes } from 'react'
import _ from 'lodash'
import { MediaItem } from './media-item.jsx'

/**

  <DetailModal>
    <ThumbItem />
    <InfoItem />
    <ContentItem />
  </DetailModal>

**/

const ThumbItem = React.createClass({
  render () {
    if (this.props.data) {
      return (
        <div className='slide-box' id='J_SlideShow'>
          <ul className='img-box'>
            <li style={{display:'block'}}>
              <MediaItem aspectRatio='1:1' height={330} mediaUrl={'//placehold.it/330x330'} />
            </li>
          </ul>
        </div>
      )
    }
    return (
      <div className='slide-box' id='J_SlideShow'>
        <ul className='img-box'>
          {
            _.map(this.props.data,(v,k)=>{
              return (
                <li style={(0===k)?{display:'block'}:{display:'none'}}>
                  <MediaItem aspectRatio='1:1' height={330} mediaUrl={v.url} />
                </li>
              )
            })
          }
        </ul>
        <div className='switch-box'>
          <div className='hover-box l-hover' id='J_LeftHover'>
            <span className='arrow-bg'></span>
            <i className='arrow'></i>
          </div>
          <div className='hover-box r-hover' id='J_RightHover'>
            <span className='arrow-bg'></span>
            <i className='arrow'></i>
          </div>
          <ol className='dot-box' id='J_DotBox'>
            {
              _.map(this.props.data,(v,k)=>{
                if (0===k) {
                  return ( <li className='sel' key={k}><i></i></li> )
                }else {
                  return ( <li key={k}><i></i></li> )
                }
              })
            }
          </ol>
        </div>
      </div>
    )
  },
  propTypes: {
    data: React.PropTypes.array
  },
  getDefaultProps(){
    return {
      data:[]
    }
  }
})

const InfoItem = React.createClass({
  render () {
    let params = this.props.parameter.slice('|') || []
    return (
      <div className='standard-box'>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <h2>产品参数</h2>
        <ul className='list-l' style={/*如果数据项大于4 width=210px*/}>
          {
            _.map(params,(v,k)=>{
              if ($.trim(v).indexOf('#') !==0) { //如果v的值不以#开头则输出li
                return <li key={k}>{$.trim(v)}</li>
              }else {
                return null
              }

            })
          }
        </ul>
        <ul className='list-r'>
          {
            _.map(params,(v,k)=>{
              if ($.trim(v).indexOf('#') !==0) { //如果v的值不以#开头则输出li
                return <li key={k} style={{width:'210px'}}>{$.trim(v)}</li>
              }else {
                return null
              }
            })
          }
        </ul>
      </div>
    )
  }
})

const ContentItem = React.createClass({
  render () {
    return (
      <div className='J_DetailText' dangerouslySetInnerHTML={{__html:this.props.data}} ></div>
    )
  },
  propTypes: {
    data: React.PropTypes.string
  },
  getDefaultProps(){
    return {
      data:'详情数据加载中...'
    }
  }
})
/* Main */
const DetailModal = React.createClass({
  render () {
    return (
      <div id='detail-modal'>
        <div className='layer-box' id='J_Layer'></div>
        <div className='float-window' id='J_Float'>
          <div className='close-ico' id='J_Close'></div>
          <div className='scrollbarall'>
            <div className='scrollbar'><div className='track'><div className='thumb'></div></div></div>
            <div className='viewport'>
                <div className='info-box overview'>
                  <div className='mgb30 clearfix'>
                    <ThumbItem data={this.state.data.pcDetailImages} />
                    <InfoItem data={this.state.data} />
                  </div>
                  <ContentItem data={this.state.data.content} />
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  getInitialState() {
    return {
      data:{
        content:'',
        pcDetailImages:[]
      }
    }
  },
  componentDidMount() {
    if (this.props.dataUrl !== undefined) {
      fetch(this.props.baseUrl + this.props.dataUrl)
      .then(res => {return res.json()})
      .then(j=>{
        this.setState({ data:j.data })
      })
    }
  }
})

export default DetailModal
