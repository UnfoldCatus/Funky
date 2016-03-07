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
            <MediaItem aspectRatio='80:45' height={450}
                       mediaUrl={this.state.moveInfo.coverUrlWeb}
                       videoUrl={this.state.moveInfo.videoUrl}/>
            <div className="info-box">
              <h1>{this.state.moveInfo.name}</h1>
              <p>{this.state.moveInfo.description}</p>
            </div>
          </div>

          <ul className="list-right">
            <h2>最新微电影</h2>
            {
              _.map(this.state.hotList, (v,k) => {
                let hf='/movie-details?id='+v.id;
                return (
                  <li key={k} className="item-box">
                    <div className="img-box">
                      <MediaItem aspectRatio='15:10' height={100}
                                 mediaUrl={v.coverUrlWeb} />
                      <a href={hf} className="layer-box"></a>
                    </div>
                    <div className="title-box"><span>{v.name}</span></div>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  },

  propTypes: {
    moveInfo: PropTypes.object,
    hotList: PropTypes.array,
  },

  getInitialState: function() {
    return {
      moveInfo:{},
      hotList:[]
    };
  },

  // 数据请求video/detail/:id
  /*
   {
   "id": 780,
   "createTime": "2016-03-07 10:27:22",
   "updateTime": "2016-03-07 10:27:22",
   "operater": 0,
   "isUsed": 1,
   "name": "我们",
   "type": 1,
   "coverUrlWeb": "http://img2.jsbn.com/venus/video/20160307/1457334895282313120151028093433677489_1920x1080.jpg",
   "coverUrlWx": "http://img2.jsbn.com/venus/video/20160307/1457334896780329520151026161726663163_1920x1080.jpg",
   "coverUrlApp": "http://img2.jsbn.com/venus/video/20160307/1457334897687158020151026161726663163_1920x1080.jpg",
   "description": "",
   "videoUrl": "http://image.jsbn.com/video%2Fcq%2Fwdy%2F2.mp4",
   "position": "movie_love_movies",
   "hitNum": 0,
   "weight": 1,
   "videoId": 10020
   }
  * */
  componentDidMount() {
    /** 请求微电影详情 **/
    let urlPra = decodeURIComponent(window.location.search.substr(1)).split('&');// 去掉?号根据&进行拆分
    let request = new Object();
    for(let i = 0; i < urlPra.length; i++) {
      request[urlPra[i].split('=')[0]]=urlPra[i].split('=')[1];
    }
    let fetchUrl = BaseConfig['baseUrl']+'video/detail/'+request['id'];
    fetch(fetchUrl)
      .then(res => {return res.json()})
      .then(j=>{
        if(j.data.length > 0) {
          this.setState({ moveInfo:j.data[0]})
        }
      })

    /** 请求最新微电影 最多取四个 **/
    let hotUrl = BaseConfig['baseUrl']+'video/movie_latest?pageIndex=1&pageSize=4'
    fetch(hotUrl)
      .then(res => {return res.json()})
      .then(j=>{
        this.setState({ hotList:j.data})
      })
  }
});

export { MovieDetails };
