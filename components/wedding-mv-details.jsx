import React, { PropTypes } from 'react'
import { MediaItem } from './common/media-item.jsx'
import { VideoDetailsConfig } from './config/video-details-config'
const WeddingMVDetails = React.createClass({
  render () {
    let name =this.state.data.name
    let description = this.state.data.description
    let date = '2016-01-01'
    let address = '重庆'
    let poster = this.state.data.coverUrlWeb || '//placehold.it/1200x800'
    let videoUrl = this.state.data.videoUrl
    return (
      <div className="wdy-view">
        <div className="layout-center-box">
          <h1 className="title-vid">{name}</h1>
            <MediaItem aspectRatio='3:2' width={1200} mediaUrl={poster} videoUrl={videoUrl} water={false} />
            <p className="info-vid">{description}</p>
            <p className="info-vid">{date}</p>
            <p className="info-vid">{address}</p>
        </div>
      </div>
    )
  },
  getInitialState(){
    return {
      data:{}
    }
  },
  componentDidMount() {
    let detailsKey = this.props.dataCurrentKey || '/weddingpat'
    let cfg = VideoDetailsConfig[detailsKey]
    let fetchUrl = cfg['buildUrl'](this.props.dataParams,cfg['dataUrl'])
    if(fetchUrl){
      fetch(fetchUrl)
        .then(res => {return res.json()})
        .then(j=>{
          if(j.success && j.data.length > 0) {
            // 因为后天返回的pcDetailImages是一个字符串,所以要转换成json
            this.setState({data:j.data[0]})
          }
        })
    }
  }
})

export { WeddingMVDetails }
