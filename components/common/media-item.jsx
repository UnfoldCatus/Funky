import React, { PropTypes } from 'react'
import ShortId from 'shortid'
/**

  MediaItem 需要承担的功能:
  作为图片容器。 根据不同的环境进行水印，尺寸的配置
  作为视频容器。
    使用taobao的嵌入视频（flash）
    使用video.js (主要是对于需要隐藏播放调的场景以及小尺寸视频场景)
  和其他库结合使用（light-box）

  基本结构


  如果是 普通图片
  <div class='J_MediaWrapper' data-width='width' data-height='height'>
    <img src='mediaUrl' />
  </div>

 如果是视频

  对于使用taobao视频 只支持flash格式， 并且视频播放控件无法隐藏。无法循环播放
  对于使用支持html5的播放器：video.js/media-element.js 则支持循环播放，隐藏控件等高级配置

  <div class='J_MediaWrapper' style='width:with;height:height' data-width='with' data-height='height'>
    <script src="http://api.video.taobao.com//video/getPlayerJS"></script>
    <script src="http://api.video.taobao.com//video/embedVideo?vid=34799342&uid=2579307056&tid=1&autoplay=false&showsharebutton=false"></script>
  </div>



  基本参数：
  autoplay 是否自动播放 default false 只有视频是有效的。
  width  容器宽度
  height 容器高度
  aspectRatio w:h的比例 默认值是2:3
  * 正常情况下 请提供width或者height的其中一个 加上aspectRatio 这样可以达到适应响应式的目的 *
  * 如果同时提供了width和height则aspectRatio被忽略 *
  coverUrl 封面图片资源
  mediaUrl 视频资源/图片资源

**/
const RegForDimension = /_(\d{1,4})x(\d{1,4})\.\w+g$/i


const VideoItem = React.createClass({
  render () {
    if (this.props.autoplay) {
      return (

        <video id={this.state.genID}
          class="video-js vjs-default-skin" style={{'width':'100%','height':this.props.height}}>
         <source src={this.props.videoUrl} type="video/mp4" />
        </video>

      )
    }
    return (
      <div id={this.state.genID}>
        <h1>Loading TaobaoVideoJS...</h1>
      </div>
    )

  },

  getInitialState() {
    return {
      genID: ShortId.generate()
    }
  },
  componentDidMount() {
    /**
    初始化video

    如果是
    **/
    if (this.props.autoplay) {
      videojs(this.state.genID,{
          'controls':false,
          'autoplay':true,
          'preload':'auto',
          'loop':true,
          'poster':this.props.mediaUrl
        })

      //
      // poster={this.props.mediaUrl}
      // height={this.props.height+''}
      // width={this.props.width+''}
      // data-setup='{"controls":false,"autoplay":true,"preload":"auto"}'
    }else {

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
     **/
    let imageOption = '@' + this.props.width+'h_'+this.props.height+'w_'+'90Q'
    imageOption =  this.props.water? (imageOption+'|watermark=1&object=c2h1aXlpbi5wbmc&t=80&p=5&y=10&x=10'):imageOption
    let mediaUrl = this.props.mediaUrl
    // let mediaUrl = ( process.env.NODE_ENV === 'development')? this.props.mediaUrl: (this.props.mediaUrl + imageOption)
    if (found && 3 === found.length) {
      width = parseInt(found[1])
      height = parseInt(found[2])
    }

    if (this.state.errorState) {
      return (
        <div className='J_MediaWrapper' style={{'height':'100%'}} data-width={width} data-height={height}>
          <img src={'//placehold.it/'+this.props.width+'x'+this.props.height}  />
        </div>
      )
    }

    return (

      <div className='J_MediaWrapper' style={{'height':'100%'}} data-width={width} data-height={height}>
        <img src={mediaUrl} onError={this.imageNotLoaded}  />
      </div>
    )
  },
  getInitialState() {
    return {
      errorState:false
    }
  },
  imageNotLoaded(evt){
    this.setState({
      errorState:true
    })
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
      height = parseInt(this.props.width*parseFloat(factors[1])/parseFloat(factors[0]))
      width = this.props.width
    }else if(this.props.height) {
      width = parseInt(this.props.height*parseFloat(factors[0])/parseFloat(factors[1]))
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
