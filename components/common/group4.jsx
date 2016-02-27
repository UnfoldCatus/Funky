import React, { PropTypes } from 'react'
import _ from 'lodash'
import { MediaItem } from './media-item.jsx'


const FirstItem = React.createClass({
  render () {
    let names = this.props.name.split('#')
    return (
      <li className='item-box'>
        <div className={this.props.titleClassName +' nav-title cover-box-home'}>
          <div className='cover' />
          <div className='and' />
          <a href={this.props.hrefs[0]}><div className="word-01"></div></a>
          <a href={this.props.hrefs[1]}><div className="word-02"></div></a>
        </div>
        <span className='first-img-box'>
          <MediaItem aspectRatio='3:2' height={270} mediaUrl={this.props.coverUrlWeb}/>
        </span>
        <a href='/'>
          <div className='title-box'>
            <span>{names[0]||'金色百年'}</span>
            <span className='en'>{names[1]||'GOLDEN WEDDING'}</span>
          </div>
        </a>
      </li>
    )
  }
})



const OtherItem = React.createClass({
  render () {
    let names = this.props.name.split('#')
    return (
      <li className="item-box">
        <div className='img-box'>
          <MediaItem aspectRatio={'2:3'} height={570} mediaUrl={this.props.coverUrlWeb} />
        </div>
         <a href={'/'}>
           <div className = "title-box">
              <span>{names[0]||'金色百年'}</span>
              <span className = "en">{names[1]||'GOLDEN WEDDING'}</span>
          </div>
        </a>
      </li>
    )
  }
})



const Group4 = React.createClass({
  render () {
    //外部传入
    let titleClassName = this.props.titleClassName
    let hrefs = this.props.hrefs
    return (
      <ul className='list-recommend'>
        {
          _.map(this.state.data.slice(0,3),(v,k)=>{
              if (k === 0) {
                return <FirstItem {...v} key={k} titleClassName={titleClassName} hrefs={hrefs} />
              }else {
                return <OtherItem {...v} key={k} />
              }
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
        $('.J_Count').html(j.count)
      })
    }
  }
})

export { Group4 }
