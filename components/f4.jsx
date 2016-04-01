import React, { PropTypes } from 'react'
import _ from 'lodash'
import { MediaSlider } from './common/media-slider.jsx'
import { ListFilter } from './common/list-filter.jsx'
import { Banner } from './common/banner.jsx'
import { F4Config } from './config/f4-config'
import { MediaItem } from './common/media-item.jsx'
import { BaseConfig } from './config/base'

const Figure = React.createClass({
  render () {
    let priceInfo = null
    if (this.props.priceRemark && this.props.priceRemark !== '') {
      let ls = this.props.priceRemark.split && this.props.priceRemark.split('|') || []
      priceInfo = (
        <div>
          <h4>价格描述:</h4>
          <p>
            {
              _.map(ls, (v,k) => {
                return (
                  <span key={k}>{v}</span>
                );
              })
            }
          </p>
        </div>
      )
    }
    return (
      <div className="figure">
        <div className="avatar-box">
          <img src={this.props.photoUrl+'@120h_1e_1c_0i_1o_90q_1x'} />
        </div>
        <h2><span>{this.props.typeName}</span><b>{this.props.nickName}</b></h2>
        <h2><span>{'￥'+this.props.salePrice}</span></h2>
        <div className="item-info">
          <div className="scrollbarall">
            <div className="scrollbar">
              <div className="track">
                <div className="thumb"></div>
              </div>
            </div>
            <div className="viewport">
              <div className="overview">
                {
                  priceInfo
                }
                {
                  (this.props.description && this.props.description !== "") &&
                  (
                    <div>
                      <h4>个人信息：</h4>
                      <p>{this.props.description}</p>
                    </div>
                  )

                }
              </div>
            </div>
          </div>
        </div>
        <div className="score">
          <span></span>
          <div className="box">
            <i></i>
          </div>
        </div>
      </div>
    )
  },
  getDefaultProps(){
    return {
      photoUrl:'//placehold.it/120x120',
      typeName:'主持人',
      nickName:'阿牛',
      salePrice:'400'
    }
  }
})

const MovieModal = React.createClass({
  render () {

    return (
      <div id={this.props.item.id} className="uk-modal">
        <div className="uk-modal-dialog uk-modal-dialog-lightbox" style={{width:'800px',height:'533px'}}>
          <a href="" className="uk-modal-close uk-close uk-close-alt" style={{zIndex:500}}></a>
          {
            this.state.show &&
            (
              <MediaItem aspectRatio='3:2' width={800} mediaUrl={this.props.item.coverUrlWeb} videoUrl={this.props.item.videoUrl}/>
            )
          }
        </div>
      </div>
    )
  },
  getDefaultProps(){
    return {
      item:{
        id:'default',
        videoUrl:null,
        coverUrlWeb:'//placehold.it/800x533'
      }
    }
  },
  getInitialState: function() {
    return {
      show:false
    };
  },
  componentDidMount() {
    let self = this
    $('#' + this.props.item.id).on({
      'show.uk.modal':()=> {
        console.log("Modal is visible.");
        this.setState({
          show:true
        })
      },

      'hide.uk.modal': ()=> {
        console.log("Element is not visible.");

        this.setState({
          show:false
        })
      }
    })
  }

})


const MoveItemBox = React.createClass({
  render() {
    return (
      <ul className="r-box-movie">
        {
          _.map(this.props.workList && this.props.workList.slice(0,2), (v, k) => {
            return (
              <li key={k} className="item-box">
                <div className="img-box">
                  <MediaItem aspectRatio='3:2' height={200} mediaUrl={v.coverUrlWeb} water={false} />
                  <div className="layer"></div>
                  <div className="info">
                    <span>时间：</span><span>{v.shootingTime && v.shootingTime.slice(0,10)}</span><br />
                    <span>地点：</span><span>{v.shootingAdress}</span><br />
                    <span>成本：￥</span><span>{v.costPrice}</span><br />
                    <a href={'#'+v.id} data-uk-modal>
                      <span className="play">点击观看</span>
                    </a>
                  </div>
                </div>
                <MovieModal item={v} />
              </li>
            );
          })
        }
      </ul>
    )
  },
  getDefaultProps(){
    return {
      workList:[]
    }
  }
})

const PhotoItemBox = React.createClass({
  render() {
    return (
      <ul className="r-box-photo">
        {
          _.map(this.props.workList && this.props.workList.slice(0,3), (v, k) => {
            let pcDetailImages = v.pcDetailImages && JSON.parse(v.pcDetailImages) || [];
            let group = "{'group':'img"+v.id+"'}"
            return (
              <li key={k} className="item-box">
                <a className="img-box" data-uk-lightbox={group} data-lightbox-type='image' title={v.number}
                   href={v.coverUrlWeb+'@90q|watermark=1&object=c2h1aXlpbi5wbmc&t=80&p=5&y=10&x=10'} >
                  <MediaItem aspectRatio='2:3' height={300} mediaUrl={v.coverUrlWeb} water={false} />
                  <div className="layer"></div>
                </a>
                {
                  _.map(pcDetailImages, (wv,wk) => {
                    let url=wv+'@90q|watermark=1&object=c2h1aXlpbi5wbmc&t=80&p=5&y=10&x=10'
                    return (
                      <a href={url} key={wk} data-uk-lightbox={group} data-lightbox-type='image'></a>
                    );
                  })
                }
              </li>
            )
          })
        }
      </ul>
    );
  }
})





const StaffList = React.createClass({
  render () {

    if ('movie-list' === this.props.klassType) {
      return (
        <div>
          <div className="screening-results">
            <b>* 温馨提示：如遇节假日或者黄道吉日，预订价格或有波动，请以实际线下合同为准。 </b>
            <span className="find">找到作品 <b>{this.state.count}</b> 套</span>
          </div>
          <ul className={this.props.klassType} >
            {
              _.map(this.state.data, (v, k) => {
                return(
                  <li key={k} className="item-box">
                    <Figure typeName={this.props.title} {...v} />
                    <MoveItemBox workList={v.workList}/>
                  </li>
                );
              })
            }
          </ul>
        </div>

      )
    }else {
      return (
        <div>
          <div className="screening-results">
            <b>* 温馨提示：如遇节假日或者黄道吉日，预订价格或有波动，请以实际线下合同为准。 </b>
            <span className="find">找到作品 <b>{this.state.count}</b> 套</span>
          </div>
          <ul className={this.props.klassType} >
            {
              _.map(this.state.data, (v, k) => {
                return(
                  <li key={k} className="item-box">
                    <Figure typeName={this.props.title} {...v} />
                    <PhotoItemBox workList={v.workList}/>
                  </li>
                );
              })
            }
          </ul>
        </div>

      )
    }

  },
  getDefaultProps(){
    return {
      config:{},
      dataUrl:undefined,
      baseUrl:undefined,
      params:{
        pageSize:10,
        pageIndex:1
      }
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
    BaseConfig['fetchFunc'](this,nextProps,true)(this,nextProps)
  },
  componentDidMount() {
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
    BaseConfig['fetchFunc'](this,null,true)(this)
    $('ul.movie-list').on('click',(evt)=>{
      if (
        $(evt.target).hasClass('uk-modal') ||
        $(evt.target).hasClass('uk-close')) {
          _.each(mejs.players,(v,k)=>{
            v&&v.pause&&v.pause()
          })
      }

    })
  }
})


const F4Tab = React.createClass({
  render () {
    return (
      <div className='tab-title J_Tab mgt30'>
        {
          _.map(this.props.tabs,(v,k)=>{
            if (k === parseInt(this.props.currentTabIndex)) {
              return <span key={k} className='sel' data-index={k}>{v}</span>
            }else {
              return <span key={k} data-index={k}>{v}</span>
            }
          })
        }
      </div>
    )
  },
  getDefaultProps(){
    return {
      tabs:['主持人','化妆师','摄影师','摄像师'],
      currentTabIndex:0
    }
  }
})


const F4List = React.createClass({
  render () {

    /**
    在这里通过将传入的currentTabIndex和具体的数据联系上 从而确定输出的列表
    DOM
    在通过state中的参数来控制列表数据的范围
    此处我们已经可以得到一个经验： props控制DOM流 state控制数据流
    **/
    let Config = F4Config['StaffList']
    let baseUrl = Config.baseUrl
    let index = parseInt(this.props.currentTabIndex)
    return (
      <div>
        <div className='J_FilterCtrl'>
          <ListFilter title={'价格'} name={'name'} klass={'ico-1-js ico-1-1-js'} valueKey={['minPrice','maxPrice']} {...F4Config['PriceFilter']} sorterKey={['minPrice','maxPrice']}/>
        </div>

        <StaffList {...Config[index]} params={_.merge(this.state.params,Config[index].params)}  baseUrl={baseUrl} />
        <div id="J_MoreButton">
          <div className="more-btn"><span>点击查看更多</span></div>
        </div>
      </div>
    )
  },
  getDefaultProps(){
    return {
      currentTabIndex:0 // 用此索引找到数据请求地址
    }
  },
  getInitialState() {
    return {
      count:0,
      params:{} // 外部参数 会被PriceFilter修改
    }
  },
  componentDidMount() {
    F4Config['PriceFilter']['setupFilterClick']('multi',this)
  }
})


/**
F4的设计蛮费心思
1. tab点击
2. 渲染不同列表
3. 请求不同数据集合
4. 搜索条件
5. 翻页
**/


const F4 = React.createClass({
  render () {

    return (
      <div className='f4-view'>
        <div className='layout-center-box'>
          <Banner {...F4Config['Banner'][0]} />
          <F4Tab {...this.state}/>
          <F4List {...this.state} />
        </div>
      </div>
    )
  },
  getInitialState() {
    return {
      currentTabIndex:0
    }
  },
  componentDidMount() {
    let table = {
      'host':0,
      'dresser':1,
      'photographer':2,
      'camera':3
    }
    /**
    每次点击都会改变索引值
    这个值联系着所有的配置数据。
    **/
    this.setState({
      currentTabIndex:table[this.props.dataParams.tab || 'host']
    })
    $('.J_Tab').on('click','span',(evt)=>{
      this.setState({
        currentTabIndex:$(evt.target).attr('data-index')
      })
    })
  }
})

export { F4 }
