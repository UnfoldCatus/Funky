import React, { PropTypes } from 'react'
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

const ImageItem = React.createClass({
  render () {
    return (
      <div className='J_MediaWrapper' data-width={this.props.width} data-height={this.props.height}>
        <img src={this.props.mediaUrl} />
      </div>
    )
  }
})


const MediaItem = React.createClass({
  render () {
    return (
      <h1>MediaItem</h1>
    )
  },
  propTypes: {
    autoplay: React.PropTypes.bool,
    width:React.PropTypes.number,
    height:React.PropTypes.number,
    aspectRatio:React.PropTypes.string,
    coverUrl:React.PropTypes.string,
    mediaUrl:React.PropTypes.string
  },
  getDefaultProps(){
    return {
      autoplay:false,
      width:-1,
      height:-1,
      coverUrl:'',
      mediaUrl:'',
      aspectRatio:'1:1'
    }
  }
})

export { MediaItem }
