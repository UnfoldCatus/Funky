import React, { PropTypes } from 'react'
import _ from 'lodash'
import { MediaItem } from './media-item.jsx'

const MediaSlider = React.createClass({
  render () {
    let params = this.props
    return (
      <ul className='slider'>
        {
          _.map(this.state.data,(v,k)=>{
            return (
              <li className='item transition-opacity-1' key={k} >
                <MediaItem {...params} mediaUrl={v.coverUrlWeb} water={false} videoUrl={v.videoUrl} outerLink={v.linkUrl}/>
              </li>
            )
          })
        }
        <div className='point-box'>
          {
            _.map(this.state.data,(v,k)=>{
              return (
                <li key={k} className='point'></li>
              )
            })
          }
        </div>
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
      data: [
        {'coverUrlWeb':'//placehold.it/1920x450'}
      ]
    }
  },
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.dataUrl &&
      nextProps.dataUrl !== '' &&
      nextProps.dataUrl !== this.props.dataUrl
  ) {
    let p = ''
    if (_.size(nextProps.params)>0) {
      p = '?'+$.param(nextProps.params)
    }
    console.log(nextProps.baseUrl);
    fetch(nextProps.baseUrl + nextProps.dataUrl + p)
    .then(res => {return res.json()})
    .then(j=>{
      this.setState({ data:j.data },()=>{
        $('#slider_top').length>0 && $('#slider_top').Slider()
      })
    })
    }
  },
  componentDidMount() {
    /** 数据请求 **/
    if (this.props.dataUrl !== undefined) {
      let p = ''
      if (_.size(this.props.params)>0) {
        p = '?'+$.param(this.props.params)
      }
      console.log(this.props.baseUrl);
      fetch(this.props.baseUrl + this.props.dataUrl + p)
      .then(res => {return res.json()})
      .then(j=>{
        console.log(j.data);
        this.setState({ data:j.data },()=>{
          $('#slider_top').length>0 && $('#slider_top').Slider()
        })
      })
    }
  }
})

export { MediaSlider }
