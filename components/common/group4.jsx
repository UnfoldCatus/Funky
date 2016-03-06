import React, { PropTypes } from 'react'
import _ from 'lodash'
import { MediaItem } from './media-item.jsx'

/**
  对于包含视频的展示组件。 我们目前只能是直接在组件级别写死其是否自动播放。
  比如在这个例子里面。 作为四合一的组件。 在使用场景中只有首页会用到，而且一旦是视频展示就是自动播放
  所以我们最直接的反应就是:
  如果元素提供了videoUrl 我们则认为其是一个视频元素 而因为是在Group4中的视频元素 所以是自动播放的视频元素
**/
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
          <MediaItem aspectRatio='38:27' height={270} mediaUrl={this.props.coverUrlWeb}  autoplay={true}/>
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
          <MediaItem aspectRatio={'2:3'} height={570} mediaUrl={this.props.coverUrlWeb} autoplay={true}/>
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
      })
    }
  }
})

export { Group4 }
