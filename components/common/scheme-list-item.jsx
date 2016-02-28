import React, { PropTypes } from 'react'
import _ from 'lodash'
import { MediaItem } from './media-item.jsx'
const SchemeListItem = React.createClass({
  render () {
    return (
      <ul className="cases-list">
        {
          _.map(this.state.data,(v,k)=>{
              return (
                <li className="item-box" key={k}>
                  <div className='img-box'>
                    <MediaItem aspectRatio={'3:2'} width={380} mediaUrl={v.coverUrlWeb || '//placehold.it/380x253'} />
                    <a className="layer-box" href={'/'} target='_blank'>
                      <div className="layer"/>
                      <div className="info">
                        <h3>{v.name}</h3>
                        <div className="date">
                          <b>{v.price || ''}</b>
                          <span>({v.holdingTime })</span>
                        </div>
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
  getInitialState() {
    return {
      data:[]
    }
  },
  componentDidMount() {
    const updateCount = ()=>{
      $('.J_Count').html(count)
    }
    if (this.props.dataUrl !== undefined) {
      fetch(this.props.baseUrl + this.props.dataUrl)
      .then(res => {return res.json()},err=>{console.log('network is down:',err) })
      .then(j=>{
        this.setState({ data:j.data })
        $('.J_Count').html(_.size(j.data))
      })
    }
  }
})

export { SchemeListItem }
