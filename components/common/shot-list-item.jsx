import React, { PropTypes } from 'react'
import { MediaItem } from './media-item.jsx'
import { MediaLayer } from './media-layer.jsx'
import _ from 'lodash'
const ShotListItem = React.createClass({
  render () {
    let type = this.props.type
    let link = this.props.link || '/home'
    return (
      <ul className="list-recommend">
          {
            _.map(this.state.data,(v,k)=>{
              return (
                <li className="item-box" key={k}>
                  <a className='img-box' href={link+'/'+v.id} target='_blank'>
                    <MediaItem  aspectRatio={'2:3'} width={380} mediaUrl={v.coverUrlWeb} />
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
    dataUrl:React.PropTypes.string
  },
  getDefaultProps(){
    return {
      dataUrl:undefined
    }
  },
  getInitialState() {
    return {
      data:[]
    }
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.dataUrl !== undefined) {
      let p = ''
      if (_.size(nextProps.params)>0) {
        p = '?'+$.param(nextProps.params)
      }
      fetch(nextProps.baseUrl + nextProps.dataUrl + p)
      .then(res => {return res.json()})
      .then(j=>{
        this.setState({ data:j.data })
        $('.J_Count').html(j.count)
      })
    }
  },
  componentDidMount() {
    if (this.props.dataUrl !== undefined) {
      let p = ''
      if (_.size(this.props.params)>0) {
        p = '?'+$.param(this.props.params)
      }
      fetch(this.props.baseUrl + this.props.dataUrl + p)
      .then(res => {return res.json()})
      .then(j=>{
        this.setState({ data:j.data })
        $('.J_Count').html(j.count)
      })
    }
  }
})

export { ShotListItem }
