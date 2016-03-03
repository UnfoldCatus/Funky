import React, { PropTypes } from 'react'
import _ from 'lodash'
import { Banner } from './common/banner.jsx'
import { DressDetailsConfig } from './config/dress-details-config.js'

const DressDetails = React.createClass({
  render() {
    return (
      <div className="hslf-xq-view">
        <div className="layout-center-box">
          <Banner {...DressDetailsConfig['Banner'][0]} />
          <div className="title-hslf-xq">
            <h1>国际婚纱: It's My Party</h1>
          </div>
          <ul className="list-recommend">
            {
              _.map(this.state.dressItems, (v,k) => {
                return (
                  <li key={k} className="item-box">
                    <a className="img-box" href="">
                      <div className="layer-box"></div>
                      <img src={v.imageUrl+'@550h_90Q'} />
                    </a>
                    <div className="title-box">
                      <span>{v.number}</span>
                    </div>
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
    dressItems: PropTypes.array,
  },

  getInitialState: function() {
    return {
      dressItems:[]
    };
  },

  // 数据请求/dress/dress_list?brandld=5品牌ID&typeId=礼服类型ID
  /* 数据结果
   {
   "brandId": 5 ,
   "createTime": Thu Jan 21 2016 11:25:45 GMT+00:00 ,
   "description":  "" ,
   "id": 329 ,
   "imageUrl": http://img.jsbn.com/dress/20160121/14533755448398930_945x1418.jpg, »
   "isUsed": 1 ,
   "name":  "9010043" ,
   "number":  "9010043" ,
   "operater": 1 ,
   "position":  "dress_list" ,
   "typeId": 1 ,
   "updateTime": Thu Jan 21 2016 11:25:45 GMT+00:00 ,
   "weight": 1
   }
  * */
  componentDidMount() {
    /** 请求婚纱类型 **/
    fetch(DressDetailsConfig['APIConfig']['baseUrl']+'dress/dress_list'+window.location.search)
      .then(res => {return res.json()})
      .then(j=>{
        this.setState({ dressItems:j.data })
        console.log(j.data)
      })
  }
});

export { DressDetails };
