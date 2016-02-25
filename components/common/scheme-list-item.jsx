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
                        <h3>{v.weddingName}</h3>
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
    if (this.props.dataUrl !== undefined) {
      fetch(this.props.baseUrl + this.props.dataUrl)
      .then(res => {return res.json()})
      .then(j=>{
        console.log('schemeList:',j);
        this.setState({ data:j.data })
      })
    }
  }
})

export { SchemeListItem }
