import React, { PropTypes } from 'react'
import { MediaItem } from './media-item.jsx'
import _ from 'lodash'
const Group5 = React.createClass({
  render () {
    return (
      <div className="nav-box">
        {
          _.map(this.state.groupItems,(v,k)=>{
            return (
              <li key={k} className={(k === 0)?'big-box':'small-box'}>
                <MediaItem />
              </li>
            )
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
