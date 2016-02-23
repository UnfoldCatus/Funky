import React, { PropTypes } from 'react'
import { MediaItem } from './media-item.jsx'
import _ from 'lodash'
const VideoListItem = React.createClass({
  render: function() {
      return (
          <ul className="movie-list">
              {
                  _.map(this.props.data,(v,k)=>{
                      return (
                          <li className="item-box" key={k}>
                              <div className='img-box'>
                                  <MediaItem aspectRatio={'3:2'} width={380} mediaUrl={'//placehold.it/380x253'} />
                                  <a className="layer-box" href={'/'}>
                                      <div className="layer"></div>
                                      <div className="info">
                                          <h3>{v.name}</h3>
                                          <i className="ico-play"></i>
                                          <span className="date">
                                              <span>({v.createDate})</span>
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
    data: React.PropTypes.array
  },
  getDefaultProps(){
    return {
      data:[]
    }
  }
})

export { VideoListItem }
