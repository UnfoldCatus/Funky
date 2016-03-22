import React, { PropTypes } from 'react'
import _ from 'lodash'
import { MediaItem } from './media-item.jsx'

/**

  <DetailModal>
    <ThumbItem />
    <InfoItem />
    <ContentItem />
  </DetailModal>

**/

const ThumbItem = React.createClass({
  render () {
    if (this.props.data.length === 0) {
      return (
        <div className='slide-box' id='J_SlideShow'>
          <ul className='img-box'>
            <li style={{display:'block'}}>
              <MediaItem aspectRatio='1:1' height={330} mediaUrl={'//placehold.it/330x330'} />
            </li>
          </ul>
        </div>
      )
    }
    return (
      <div className='slide-box' id='J_SlideShow'>
        <ul className='img-box'>
          {
            _.map(this.props.data,(v,k)=>{
              return (
                <li style={(0===k)?{display:'block'}:{display:'none'}} key={k}>
                  <MediaItem aspectRatio='1:1' height={330} mediaUrl={v.url || v} />
                </li>
              )
            })
          }
        </ul>
        <div className='switch-box' id='J_SwitchControl' data-count={this.props.data.length} data-current-index={0}>
          <div className='hover-box l-hover' id='J_LeftHover'>
            <span className='arrow-bg'></span>
            <i className='arrow'></i>
          </div>
          <div className='hover-box r-hover' id='J_RightHover'>
            <span className='arrow-bg'></span>
            <i className='arrow'></i>
          </div>
          <ol className='dot-box' id='J_DotBox'>
            {
              _.map(this.props.data,(v,k)=>{
                if (0===k) {
                  return ( <li className='sel' key={k}><i></i></li> )
                }else {
                  return ( <li key={k}><i></i></li> )
                }
              })
            }
          </ol>
        </div>
      </div>
    )
  },
  propTypes: {
    data: React.PropTypes.array
  },
  getDefaultProps(){
    return {
      data:[]
    }
  }
})

const InfoItem = React.createClass({
  render () {
    let params = this.props.parameter.split('|') || []
    return (
      <div className='standard-box'>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <h2>产品参数</h2>
        <ul className='list-l' style={params.length>4?{width:'210px'}:{}}>
          {
            _.map(params.slice(0,4),(v,k)=>{
              if ($.trim(v).indexOf('#') !==0) { //如果v的值不以#开头则输出li
                return <li key={k}>{$.trim(v)}</li>
              }else {
                return null
              }
            })
          }
        </ul>
        <ul className='list-r'>
          {
            _.map(params.slice(4,9),(v,k)=>{
              if ($.trim(v).indexOf('#') !==0) { //如果v的值不以#开头则输出li
                return <li key={k} style={{width:'210px'}}>{$.trim(v)}</li>
              }else {
                return null
              }
            })
          }
        </ul>
      </div>
    )
  },
  propTypes: {
    parameter: React.PropTypes.string,
    brandName:React.PropTypes.string,
    description:React.PropTypes.string
  },
  getDefaultProps(){
    return {
      parameter:'',
      title:'金色百年',
      description:''
    }
  }
})

const ContentItem = React.createClass({
  render () {
    return (
      <div className='J_DetailText' dangerouslySetInnerHTML={{__html:this.props.data}} ></div>
    )
  },
  propTypes: {
    data: React.PropTypes.string
  },
  componentWillReceiveProps(nextProps) {
    // window.setTimeout(()=>{

    // if (nextProps.data !== '详情数据加载中...' ) {
    //
    // }


    // },1000)
  },
  componentDidMount() {
    $('.J_DetailText img').load(()=>{
      // _.times(3,()=>{
      //   window.setTimeout(
      //       ()=>{
              console.log(11);
      //       },300
      //     )
      // })
    })
  },
  getDefaultProps(){
    return {
      data:'详情数据加载中...'
    }
  }
})
/* Main */
const DetailModal = React.createClass({
  render () {
    let s = this.state.data.pcDetailImages
    let images = []
    if (typeof s === 'string') {
      images = JSON.parse(s)
    }
    console.log('images:',images);
    return (
      <div id='detail-modual' className={this.props.styleClass}>
        <div className='layer-box' id='Layer'></div>
        <div className='float-window' id='Float'>
          <div className='close-ico' id='Close'></div>
          <div className='scrollbarall'>
            <div className='scrollbar'><div className='track'><div className='thumb'></div></div></div>
            <div className='viewport'>
                <div className='info-box overview'>
                  <div className='mgb30 clearfix'>
                    <ThumbItem data={images} />
                    <InfoItem {...this.state.data} />
                  </div>
                  <ContentItem data={this.state.data.content} />
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  getInitialState() {
    return {
      data:{
        content:'',
        pcDetailImages:[]
      },
      dataId:''
    }
  },
  show(){

    $("#Layer").fadeIn(100,()=>{ // 显示detail-modal
      $("#Float").css("height",$(window).height() - 40 + "px")
      $("#Float").fadeIn(400)
      $("body").css({overflow:"hidden"})
      $('#Float img').load(()=>{ // 内部图片加载完成后再update滚动条
        $('.scrollbarall').data('plugin_tinyscrollbar').update()
      })
    })
  },
  setupEvent(){
    /*
      当detail模块被渲染完成。

      绑定scrollbar
      绑定closeBtn
      绑定缩略图按钮
      绑定缩略图底部小圆点


      detail模块的显示时机是在：数据请求发起后，
      数据加载完成时的回调里

      而触发数据请求是在
      1. 首次mount完成
      2. 每次传入id

      注意 首次mount完成也会收到一个id
    */


    // $('#J_DetailModalContainer').show()


    const closeFun = ()=> {// 绑定关闭按钮
      $("#Float").fadeOut(400,()=>{
        $("#Layer").fadeOut(100);
        $("body").css({overflow:"visible"})
        $('.scrollbarall').data('plugin_tinyscrollbar').update()
      })
    }
    $("#Close").bind("click", closeFun)
    $("#Layer").bind("click", closeFun)


    /**

      实现原理:
      1. 绕圈移动的实现 取模的意义
      2. 所有的图片是重叠在一起的。 通过传递index来确定谁显示
      3. 底部点也是

      我们把个数放在J_SwitchControl 的 data-count 这样省去了每次计算。
      然后，把每次点击的index放在J_SwitchControl的 data-current-index 把dom作为一个存储器

    **/
    const display = index =>{
      $('#J_SlideShow ul>li').eq(index).fadeIn().siblings().hide()
      $('#J_DotBox li').eq(index).addClass('sel').siblings().removeClass('sel')
    }
    const pre = ()=>{
      let count = parseInt( $('#J_SwitchControl').attr('data-count') )
      let currentIndex = parseInt( $('#J_SwitchControl').attr('data-current-index') )
      currentIndex = (currentIndex - 1 + count)  % count
      display(currentIndex)
      $('#J_SwitchControl').attr('data-current-index',currentIndex)
    }
    const next = ()=>{
      let count = parseInt( $('#J_SwitchControl').attr('data-count') )
      let currentIndex = parseInt( $('#J_SwitchControl').attr('data-current-index') )
      currentIndex = (currentIndex + 1)  % count
      display(currentIndex)
      $('#J_SwitchControl').attr('data-current-index',currentIndex)
    }

    $('#J_LeftHover').on('click',pre)
    $('#J_RightHover').on('click',next)
    $('#J_DotBox li').on('mouseenter',(evt)=>{
      let currentIndex =parseInt($(evt.target).index())
      display(currentIndex)
      $('#J_SwitchControl').attr('data-current-index',currentIndex)
    })
  },
  componentWillReceiveProps(nextProps) {
    if (this.props.dataUrl !== undefined) {
      let dataUrl = this.props.dataUrl.replace(':id',nextProps.dataId)
      fetch(this.props.baseUrl +dataUrl)
      .then(res => {return res.json()})
      .then(j=>{
        this.setState({ data:j.data[0] },this.show)
      })
    }
  },
  componentDidMount() {
    if (this.props.dataUrl !== undefined) {
      $(".scrollbarall").tinyscrollbar() //初始化滚动条组件
      let dataUrl = this.props.dataUrl.replace(':id',this.props.dataId)
      fetch(this.props.baseUrl +dataUrl)
      .then(res => {return res.json()})
      .then(j=>{
        this.setState({ data:j.data[0] },()=>{
          this.setupEvent()
          this.show()
        })
      })
    }
  }
})

export { DetailModal }
