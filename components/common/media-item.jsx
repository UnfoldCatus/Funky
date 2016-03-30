import React, { PropTypes } from 'react'
import ShortId from 'shortid'
import { BaseConfig } from '../config/base'
import _ from 'lodash'
/**

  !! 给嫌字太多不想看的观众。= 。=
  配置方法如下：
  1. 淘宝视频 : <MediaItem aspectRatio='38:27' height={270} mediaUrl={封面url} videoUrl={淘宝视频Url}/>
  {{
  Q:如果伦家要自动播放的淘宝视频呢?
  A:需求没有，不支持！！！虽然淘宝视频在url参数里有autoplay，蛋素~ 自动播放的视频全部都用的是MediaElement.js 特点就是不带播放条
  }}

  2. 图片: <MediaItem aspectRatio='38:27' height={270} mediaUrl={图片url} />

  3. 自动播放视频（隐藏播放条）:
  <MediaItem aspectRatio='38:27' height={270} mediaUrl={封面url} videoUrl={视频Url} autoplay={true}/>

====================== 淫荡帝分割线，就问你怕不怕这么长的 ==============3,



  MediaItem 需要承担的功能:
  作为图片容器。 根据不同的环境进行水印，尺寸的配置
  作为视频容器。
    使用taobao的嵌入视频（flash）
    使用MediaElement.js (主要是对于需要隐藏播放调的场景以及小尺寸视频场景)
  和其他库结合使用（light-box）
  TODO 同一页面内的多个播放控件 同一时间只播放一个
  基本结构

  如果是 普通图片
  <div class='J_MediaWrapper' data-width='width' data-height='height'>
    <img src='mediaUrl' />
  </div>

 如果是视频

  对于使用taobao视频 只支持flash格式， 并且视频播放控件无法隐藏。无法循环播放
  对于使用支持html5的播放器：mediaelement.js 则支持循环播放，隐藏控件等高级配置



  基本参数：
  autoplay 是否自动播放 default false 只有视频是有效的。
  width  容器宽度
  height 容器高度
  aspectRatio w:h的比例 默认值是2:3
  * 正常情况下 请提供width或者height的其中一个 加上aspectRatio 这样可以达到适应响应式的目的 *
  * 如果同时提供了width和height则aspectRatio被忽略 *
  videoUrl 视频资源
  mediaUrl 封面资源/图片资源

**/
const RegForDimension = /_(\d{1,4})x(\d{1,4})\.\w+g$/i
/**
从querystring里面提取参数转换为json
**/
const qTJSON = (vid,width,height,querystring)=>{
  let pairs = querystring.split('&');
  let result = {}
  _.each(pairs,(value,key)=>{
      let pair = value.split('=');
      result[pair[0]] = decodeURIComponent(pair[1] || '');
  })
  result['div'] = vid
  result['width'] = width || '100%'
  result['height'] = height || '100%'

  return _.pick(result,['vid','uid','tid','div','height','width'])
}

const VideoItem = React.createClass({
  render () {
    /**
    如果是自动播放 加载mediaelement.js
    否则使用淘宝视频控件
    目前的需求是这样
    **/
    if (this.props.autoplay) {
      return (
        <video
          width={this.props.width}
          height={this.props.height}
          poster={this.props.mediaUrl}
          id={this.state.genID}
          src={this.props.videoUrl}
          type="video/mp4" />
      )
    } else if (-1 !== this.props.videoUrl.indexOf('api.taobao')) {
        return (
          <div id={this.state.genID} style={{'width':this.props.width+'px','height':this.props.height+'px'}}>
            <h1>Loading TaobaoVideoJS...</h1>
          </div>
        )

    }else {
        return (
          <video
            width={this.props.width}
            height={this.props.height}
            poster={this.props.mediaUrl}
            id={this.state.genID}
            src={this.props.videoUrl}
            type="video/mp4" />
        )

    }


  },

  getInitialState() {
    return {
      genID: ShortId.generate() // 用来生成每个组件唯一的id便于视频初始化
    }
  },
  loadAutoPlayVideo(vid){
    return ()=>{ //为了把初始化操作放到线程上去。
      MediaElement(vid, {success: (me)=> {
        me.muted=true
        me.loop = true
        me.play()
        me.addEventListener('ended',function(){
          me.play()
        })
      }})
    }
  },
  loadMeidaElementVideo(vid){
    return ()=>{ //为了把初始化操作放到线程上去。
      $('#'+vid).mediaelementplayer({
        pauseOtherPlayers: true
      })
    }
  },
  loadTaobaoVideo(vid,videoUrl,width,height,posterUrl){

    return ()=>{

      tb_player_object.embedPlayer(
      qTJSON(vid,width,height,videoUrl),
      {autoplay:"false",poster:posterUrl},
      {wmode:"transparent",allowScriptAccess:"always",allowFullScreen:"true"}
      );
    }
  },
  componentDidMount() {
    if (this.props.autoplay) { // 自动播放的Media-element视频
      setTimeout(this.loadAutoPlayVideo(this.state.genID),0)
    }else {
      if (-1 !== this.props.videoUrl.indexOf('taobao.com')) { //taobao视频
        (2 === this.props.videoUrl.split('?').length)
        &&
        setTimeout(this.loadTaobaoVideo(
          this.state.genID,
          this.props.videoUrl.split('?')[1],
          this.props.width,
          this.props.height,
          this.props.mediaUrl
        ),0)
      }else if (-1 !== this.props.videoUrl.indexOf('.mp4')) { // 不自动播放的MediaElement视频 此次改动在正式上线前要删除。因为数据迁移的视频地址没有改完才需要这部分代码
        setTimeout(this.loadMeidaElementVideo(this.state.genID),0)
      }else {
        console.log('视频地址格式错误')
      }


    }
  }
})



const ImageItem = React.createClass({
  render () {

    /**
    如果mediaUrl是有带widthXheight的。
    就应该把这个实际的图片尺寸提取出来。
    如果没有，则按照传入的参数进行设置
    **/
    let width = this.props.width
    let height = this.props.height
    let found = this.props.mediaUrl.match(RegForDimension)
    /**
      图片压缩参数: 如果是在development环境下就不要加压缩参数。
      水印: 如果配置了要显示水印才显示。
     如果是100%这样的,就不带
     **/
    let imageOption = '@';
    if (this.props.width !== '100%') {
      imageOption = imageOption + this.props.width+'w_';
    }
    if (this.props.height !== '100%') {
      imageOption = imageOption + this.props.height+'h_';
    }
    imageOption = imageOption + '90Q';
    imageOption =  this.props.water? (imageOption+'|watermark=1&object=c2h1aXlpbi5wbmc&t=80&p=5&y=10&x=10'):imageOption
    // let mediaUrl = this.props.mediaUrl
    let mediaUrl = this.props.mediaUrl + imageOption;//( BaseConfig.mode === 'production')? (this.props.mediaUrl + imageOption): this.props.mediaUrl
    if (found && 3 === found.length) {
      width = parseInt(found[1])
      height = parseInt(found[2])
    }

    // if (this.state.errorState) {
    //   return (
    //     <div className='J_MediaWrapper' style={{'height':'100%'}} data-width={width} data-height={height}>
    //       <img src={}  />
    //     </div>
    //   )
    // }
    if (this.props.outerLink) {
      return (
        <a href={this.props.outerLink} className='img-box'>
          <div className='J_MediaWrapper' style={{'height':'100%'}} data-width={width} data-height={height}>
            <img src={mediaUrl} onError={this.imageNotLoaded}  />
          </div>
        </a>
      )
    }else {
      return (
        <div className='J_MediaWrapper' style={{'height':'100%'}} data-width={width} data-height={height}>
          <img src={mediaUrl} onError={this.imageNotLoaded}  />
        </div>
      )
    }

  },
  getDefaultProps(){
    return {
      water:true
    }
  },
  // getInitialState() {
  //   return {
  //     errorState:false
  //   }
  // },
  imageNotLoaded(evt){
    let errorUrl = '//placehold.it/'+this.props.width+'x'+this.props.height
    evt.target.src = errorUrl
  }
})


const MediaItem = React.createClass({
  render () {
    /**
    width 和 height 任意传入一个。
     **/
    let factors = this.props.aspectRatio.split(':')
    let width = 1
    let height = 1
    if (this.props.width) {
      if (factors[1] === '-1') {
        height = '100%'
      }else {
        height = parseInt(this.props.width*parseFloat(factors[1])/parseFloat(factors[0]))
      }
      width = this.props.width
    }else if(this.props.height) {
      if (factors[0] === '-1') {
        width='100%'
      }else {
        width = parseInt(this.props.height*parseFloat(factors[0])/parseFloat(factors[1]))
      }
      height = this.props.height
    }else {
      console.log('高度或者宽度必须指定一个啊.');
    }

    if (this.props.videoUrl) {
      return <VideoItem {...this.props} height={height} width={width} />
    }else {
      return (
        <ImageItem  {...this.props} height={height} width={width} />
      )
    }
  },
  propTypes: {
    autoplay: React.PropTypes.bool,
    width:React.PropTypes.number,
    height:React.PropTypes.number,
    aspectRatio:React.PropTypes.string,
    coverUrl:React.PropTypes.string,
    videoUrl:React.PropTypes.string,
    mediaUrl:React.PropTypes.string,
    water:React.PropTypes.bool
  },
  getDefaultProps(){
    return {
      mediaUrl:'//placehold.it/380x570',
      aspectRatio:'2:3'
    }
  }
})

export { MediaItem }
