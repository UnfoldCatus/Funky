import React, { PropTypes } from 'react'
import _ from 'lodash'
import { BaseConfig } from '../config/base'
import { MediaItem } from './media-item.jsx'
import { ListCount } from './list-count.jsx'
const SchemeListItem = React.createClass({
  render () {
    let link = this.props.link || 'cases'
    let list = (
      <ul className="cases-list">
        {
          _.map(this.state.data,(v,k)=>{
              return (
                <li className="item-box" key={k}>
                  <div className='img-box'>
                    <MediaItem aspectRatio={'3:2'} width={380} mediaUrl={v.coverUrlWeb || '//placehold.it/380x253'} water={false}/>
                    <a className="layer-box" href={'/'+link+'/'+v.id} target='_blank'>
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
    if (this.props.countPlugin) { // 如果配置了显示列表元素个数的插件
      let countProps = _.pick(this.props,['displayTextPrefix','displayTextSuffix'])
      return (
        <div className="case-list-view">
          <ListCount {...countProps} count={this.state.count} />
          {list}
        </div>
      )
    }else {
      return list
    }
  },
  propTypes: {
    dataUrl:React.PropTypes.string,
    params:React.PropTypes.object
  },
  getDefaultProps(){
    return {
      dataUrl:undefined,
      params:{}
    }
  },
  getInitialState() {
    return {
      data:[],
      dataStore:[],
      count:0,
      currentIndex:0
    }
  },
  componentWillReceiveProps(nextProps) {
    BaseConfig['fetchFunc'](this,nextProps)(this,nextProps)
  },
  componentDidMount() {
    BaseConfig['fetchFunc'](this,null)(this)
    // const updateCount = ()=>{
    //   $('.J_Count').html(count)
    // }
    // if (this.props.dataUrl !== undefined) {
    //   fetch(this.props.baseUrl + this.props.dataUrl)
    //   .then(res => {return res.json()},err=>{console.log('network is down:',err) })
    //   .then(j=>{
    //     this.setState({ data:j.data })
    //     $('.J_Count').html(_.size(j.data))
    //   })
    // }
  }
})

export { SchemeListItem }
