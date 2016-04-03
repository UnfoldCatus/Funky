import React, { PropTypes } from 'react'
import _ from 'lodash'
import { MediaItem } from './media-item.jsx'

const Group3 = React.createClass({
  render () {
    return (
      <ul className='list-adv'>
        {
          _.map(this.state.data.slice(0,3),(v,k)=>{
            let names = v.name.split('#')
            return (
              <li key={k} className='item-box'>
                <div className='img-box'>
                  <MediaItem aspectRatio={'38:25'} height={250} mediaUrl={v.coverUrlWeb} water={false} />
                </div>
                <div className='title-box'>
                  <span>{names[0] || '金色百年'}</span>
                  <span className='en'>{names[1] || 'GOLDEN WEDDING'}</span>
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
    };
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

export { Group3 }
