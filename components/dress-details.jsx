import React, { PropTypes } from 'react'
import _ from 'lodash'
import { Banner } from './common/banner.jsx'
import { MediaItem } from './common/media-item.jsx'
import { DressDetailsConfig } from './config/dress-details-config.js'

//(function(window,undefined){
//  var ArrayForEach=Array.prototype.forEach||function(fn, sc){
//      var a=this,l=a.length|0,i;
//      for(i=0;i<l;i+=1)fn.call(sc, a[i], i, a);
//    };
//  var ObjectGetOwnPropertyNames=Object.getOwnPropertyNames||function(o) {
//      var a=[],p;
//      for(p in o)if(o.hasOwnProperty(p))a.push(p);
//      return a;
//    };
//  var location=window.location,params={};
//  ArrayForEach.call(location.search.substr(1).split("&"),function(slice,index){
//    var p=slice.split("="),name=decodeURIComponent(p[0]),value=decodeURIComponent(p[1]);
//    params.hasOwnProperty(name)?params[name].push(value):params[name]=[value];
//  });
//  function getParameter(name){return params.hasOwnProperty(name)?params[name][0]:null;}
//  function getParameterValues(name){return params.hasOwnProperty(name)?params[name]:[];}
//  function getParameterNames(){return ObjectGetOwnPropertyNames(params);}
//  function getParameterMap(){return params;}
//  location.getParameter=getParameter;
//  location.getParameterValues=getParameterValues;
//  location.getParameterNames=getParameterNames;
//  location.getParameterMap=getParameterMap;
//})(window);

const DressDetails = React.createClass({
  render() {
    return (
      <div className="hslf-xq-view">
        <div className="layout-center-box">
          <Banner {...DressDetailsConfig['Banner'][0]} />
          <div className="title-hslf-xq">
            <h1>{this.state.title}</h1>
          </div>
          <ul className="list-recommend">
            {
              _.map(this.state.dressItems, (v,k) => {
                return (
                  <li key={k} className="item-box">
                    <a className="img-box" data-uk-lightbox="{'group':'dress-img'}" data-lightbox-type='image' title={v.number}  href={v.imageUrl} >
                      <div className="layer-box"></div>
                      <MediaItem aspectRatio='2:3' height={550} mediaUrl={v.imageUrl} />
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
    title: PropTypes.string,
  },

  getInitialState: function() {
    return {
      dressItems:[],
      title:""
    };
  },

  // 数据请求/dress/dress_list?brandld=5品牌ID&typeId=礼服类型ID
  componentDidMount() {

    let urlPra = decodeURIComponent(window.location.search.substr(1)).split('&');// 去掉?号根据&进行拆分
    let request = new Object();
    for(let i = 0; i < urlPra.length; i++) {
      request[urlPra[i].split('=')[0]]=urlPra[i].split('=')[1];
    }
    let fetchUrl = DressDetailsConfig['APIConfig']['baseUrl']+'dress/dress_list?'+'brandId='+request['brandId']+'&typeId='+request['typeId'];

    /** 请求婚纱类型 **/
    fetch(fetchUrl)
      .then(res => {return res.json()})
      .then(j=>{
        this.setState({ dressItems:j.data , title:request['typeName']+':'+request['brandName']})
        console.log(j.data)
      })
  }
});

export { DressDetails };
