import React, { PropTypes } from 'react'
import { MediaItem } from './media-item.jsx'
import _ from 'lodash'
import { BaseConfig } from '../config/base'
const VideoListItem = React.createClass({
  render: function() {
    let aspectRatio = this.props.aspectRatio
    let height= this.props.height
    let link = this.props.link

    return (
        <ul className="list-recommend movie-list">
            {
                _.map(this.state.data,(v,k)=>{
                    return (
                        <li className="item-box" key={k}>
                            <div className='img-box'>
                                <MediaItem aspectRatio={aspectRatio} height={height} mediaUrl={v.coverUrlWeb || '//placehold.it/380x260'} />
                                <a className="layer-box" href={link + '/'+v.id}>
                                    <div className="layer"></div>
                                    <div className="info">
                                        <h3>{v.name}</h3>
                                        <i className="ico-play"></i>
                                        <span className="date">
                                            <span>({v.updateTime})</span>
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </li>
                    )
                })
            }

        </ul>
    )
  },
  propTypes: {
    dataUrl: React.PropTypes.string
  },
  getDefaultProps(){
    return {
      dataUrl:undefined,
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
  componentWillReceiveProps(nextProps) {
    BaseConfig['fetchFunc'](this,nextProps)(this,nextProps)
  },
  componentDidMount() {
    BaseConfig['fetchFunc'](this,null)(this)
    // if (this.props.dataUrl !== undefined) {
    //   fetch(this.props.baseUrl + this.props.dataUrl)
    //   .then(res => {return res.json()})
    //   .then(j=>{
    //     this.setState({ data:j.data })
    //   })
    // }
  }
})

export { VideoListItem }
