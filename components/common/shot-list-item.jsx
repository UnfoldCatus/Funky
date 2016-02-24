import React, { PropTypes } from 'react'
import { MediaItem } from './media-item.jsx'
import { MediaLayer } from './media-layer.jsx'
import _ from 'lodash'
const ShotListItem = React.createClass({
  render () {
    let type = this.props.type
    return (
      <ul className="list-recommend">
          {
            _.map(this.props.data,(v,k)=>{
              return (
                <li className="item-box" key={k}>
                  <a className='img-box' href='/' target='_blank'>
                    <MediaItem  aspectRatio={'2:3'} width={380} mediaUrl={'//placehold.it/380x570'} />
                    <div className="layer-box" />
                    <MediaLayer  {...v} type={type} />
                  </a>
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

export { ShotListItem }
