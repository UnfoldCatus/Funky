import React, { PropTypes } from 'react'
import { MediaItem } from './media-item.jsx'
import { MediaLayer } from './media-layer.jsx'
import { ListCount } from './list-count.jsx'
import _ from 'lodash'
let currentIndex = 0 //内部页数编号从0开始 fetch时加1
const ShotListItem = React.createClass({
  render () {
    let type = this.props.type
    let link = this.props.link || '/home'
    //公共的list
    let list = (
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
    if (this.props.countPlugin) {
      let countProps = _.pick(this.props,['displayTextPrefix','displayTextSuffix'])
      return (
        <div className="samples-list">
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
      count:0
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
        let temp = []
        temp[0] = j.data
        this.setState({ data:j.data,dataStore:temp})
      })
    }
  },
  componentDidMount() {
    let self = this;
    if (this.props.dataUrl !== undefined) {
      let p = ''
      if (_.size(this.props.params)>0) {
        p = '?'+$.param(this.props.params)
      }

      /*
        因为是加载页面 将dataStore=[]
        请求数据
        如果具备分页条件，展示分页按钮。传入的配置中包含pageSize和pageIndex参数
        绑定点击事件：
          改变pageIndex 注意此次的pageIndex 改变时不应该直接造成组件render 而是pageIndex的改变
          导致选取的dataStore的范围变化，进而改变state中data的值造成render
          故将pageIndex的更新保持在一个私有变量中 可是，由于初始的pageIndex是还在props里面的
          这样就造成了一个情况：
          其他的筛选参数是外部条件，依赖外部的传入
          而pageIndex是一个组件的内部条件， 而且不应该直接造成render。
          由于点击按钮改变的pageIndex 会触发fetch操作

          依据pageIndex 看dataStore是否有数据，如果有直接使用
          如果没有才请求相应pageIndex的数据 成功后放到dataStore的对应下标的数组中
          设置state 显示数据
      */
      currentIndex = 0 // 注意这里内部的分页是以0做为基底
      const loadMore=()=>{
        let totalPage = Math.ceil(this.state.count / this.props.params.pageSize)
        currentIndex = (currentIndex + 1 ) % totalPage
        let p = ''
        if (_.size(this.props.params)>0){
          p = '?'+$.param(_.omit(this.props.params,['pageIndex'])) + '&'+ $.param({
            'pageIndex':currentIndex+1
          })
        }
        fetch(this.props.baseUrl + this.props.dataUrl+p)
        .then(res=>{return res.json()})
        .then(j=>{
          let temp = this.state.dataStore
          temp[currentIndex] = j.data
          let t = _.flatten(temp.slice(0,currentIndex+1))
          this.setState({data:t,dataStore:temp})
        })
      }
      const loadLess = ()=>{

      }

      fetch(this.props.baseUrl + this.props.dataUrl + p)
      .then(res => {return res.json()})
      .then(j=>{
        if (
          this.props.params.pageSize &&
          this.props.params.pageIndex &&
          parseInt(j.count)>parseInt(this.props.params.pageSize)*parseInt(this.props.params.pageIndex)
        ) {
          $('#J_MoreButton')
          .show()
          .on('click',loadMore)
          .on('dblclick',loadLess)
        }else {
          $('#J_MoreButton').hide() //只有一页或者压根就没有分页
        }
        let temp = this.state.dataStore
        temp[0] = j.data
        this.setState({ data:j.data,count:j.count,dataStore:temp })
      })
    }
  }
})

export { ShotListItem }
