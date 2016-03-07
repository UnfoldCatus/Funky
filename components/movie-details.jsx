/**
 * Created by chenjianjun on 16/3/7.
 */
import React, { PropTypes } from 'react'
import _ from 'lodash'
import { MediaItem } from './common/media-item.jsx'
import { MovieConfig } from './config/movie-config'
import { BaseConfig } from './config/base'

const MovieDetails = React.createClass({
  render() {
    return (
      <div className="wdy-view">
        <div className="layout-center-box">
          <div className="video-box">
            <MediaItem aspectRatio='80:45' height={450} mediaUrl='http://img.jsbn.com/1.0/jpg/20150929/03730366834729325857/20150929200349031437_380x270.jpg' videoUrl='//api.video.taobao.com//video/embedVideo?vid=34799342&uid=2579307056&tid=1&autoplay=false&showsharebutton=false'/>
            <div className="info-box">
              <h1>最幸福的时光</h1>
              <p>世间所有的相遇，都是久别重逢，遇见你就是幸福的开始。</p>
            </div>
          </div>

          <ul className="list-right">
            <h2>最新微电影</h2>
            <li className="item-box">
              <div className="img-box">
                <MediaItem aspectRatio='15:10' height={100} mediaUrl='http://image.jsbn.com/WebImage/cq/jpg/20151026/25491076412275996368/20151026163654831232_1920x1080.jpg' />
                <a href="" className="layer-box"></a>
              </div>
              <div className="title-box"><span>我们的匆匆那年</span></div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  //,
  //
  //propTypes: {
  //  dressItems: PropTypes.array,
  //  title: PropTypes.string,
  //},
  //
  //getInitialState: function() {
  //  return {
  //    dressItems:[],
  //    title:""
  //  };
  //},

  //// 数据请求video/detail/:id
  //componentDidMount() {
  //  //let urlPra = decodeURIComponent(window.location.search.substr(1)).split('&');// 去掉?号根据&进行拆分
  //  //let request = new Object();
  //  //for(let i = 0; i < urlPra.length; i++) {
  //  //  request[urlPra[i].split('=')[0]]=urlPra[i].split('=')[1];
  //  //}
  //  //let fetchUrl = BaseConfig['baseUrl']+'video/detail/'+'id='+request['id'];
  //  //
  //  ///** 请求微电影详情 **/
  //  //fetch(fetchUrl)
  //  //  .then(res => {return res.json()})
  //  //  .then(j=>{
  //  //    this.setState({ dressItems:j.data})
  //  //    console.log(j.data)
  //  //  })
  //}
});

export { MovieDetails };
