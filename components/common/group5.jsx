import React, { PropTypes } from 'react'
import { MediaItem } from './media-item.jsx'
import _ from 'lodash'
const Group5 = React.createClass({
  render () {
    return (
      <div className="nav-box">
        {
          _.map(this.state.groupItems,(v,k)=>{
            if (k===0) {
              return (
                <li key={k} className='big-box'>
                  <a href='/' className='l-item img-box' >
                    <MediaItem width={620} aspectRatio={'124:75'} mediaUrl={'//placehold.it/620x375'} />
                  </a>
                </li>
              )
            }else {
              return (
                <li key={k} className='small-box'>
                  <a href='/' className='img-box'>
                    <MediaItem width={270} aspectRatio={'3:2'} mediaUrl={'//placehold.it/270x180'} />
                  </a>
                </li>
              )
            }
          })
        }
        {/*列表为空，默认输出*/}
        {(this.state.groupItems.length === 0 )&& <h1>Empty Group5</h1>}
      </div>
    )
  },
  propTypes: {
    config: React.PropTypes.object
  },
  getDefaultProps(){
    return {
      config:{
        'video-lage':{
          'frameWidth':620,
          'frameHeight':375,
          'aspectRatio':'124:75',
          'autoPlay':false
        },
        'video-small':{
          'frameWidth':270,
          'frameHeight':180,
          'aspectRatio':'3:2',
          'autoPlay':false
        },
        'resourceUrl':''
      },
    }
  },
  getInitialState() {
    return {
      groupItems:[{},{},{},{},{}]
    };
  },

  componentDidMount() {
    if (this.props.config.resourceUrl !== '') {
      console.log('should start loading resource');
    }else {
      console.log('config.resourceUrl is bank');
    }
  }
})

export { Group5 }
