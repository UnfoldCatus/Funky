import React, { PropTypes } from 'react'
import _ from 'lodash'
import { MediaSlider } from './common/media-slider.jsx'
import { MediaItem } from './common/media-item.jsx'
import { Banner } from './common/banner.jsx'
import { MovieConfig } from './config/movie-config'

//const Item = React.createClass({
//  render: function() {
//    return (
//      <li className="item-box">
//        <div className="animat-1-hive" />
//        <a href={this.props.detail}>
//          <div className="img-box">
//            <img src={this.props.cover} />
//            <i />
//          </div>
//          <div className="item-info" style={{width:'320px'}}>
//            <h2>{this.props.title}</h2>
//            <p>{this.props.remark}</p>
//            <span className="more">
//            </span>
//          </div>
//        </a>
//      </li>
//    )
//  }
//});
//
//const ItemList = React.createClass({
//  render: function() {
//    var self = this
//    return (
//      <ul className='list-recommend'>
//        {
//            _.map(this.props.list,function(v,k){
//                return <Item title={v.name} detail={'#'+self.getPathname()+'/'+v.videoId} cover={v.coverImage.imageUrl} key={k} remark={v.remark}/>
//            })
//        }
//      </ul>
//    );
//  },
//  getDefaultProps: function() {
//    return {
//      list: []
//    }
//  }
//});


//_.map(this.state.brands, (v, k) => {
//  var boundClick = this.handleClick.bind(this, k);
//  return (
//    <li key={k} onClick={boundClick} className={(k === this.state.index)? 'item item-sel':'item'} >
//      <img src={v.logoUrl} />
//    </li>
//  );
//})

const ItemType = React.createClass({
  render () {
    let listType = this.props.listType;
    return (
      <div className='layout-center-box'>
        <div className="nav-box">
          <img src="http://image.jsbn.com/static/wdy-nav.png" />
          <ul className="hover-box">
            {
              _.map(listType, (v,k) => {
                var boundClick = this.handleClick.bind(this, k, v);
                return (
                  <li key={k} onClick={boundClick} className={(k === this.state.index)? 'hover-item sel':'hover-item'}>
                    <span /><i />
                  </li>
                );
              })
            }
          </ul>
        </div>
        <ul className="list-recommend">
            {
              _.map(this.state.data[this.state.index], (v,k) => {
                let key = ''+this.state.index+k;
                return (
                  <li key={key} className="item-box">
                    <div className="animat-1-hive" />
                      <a href="">
                        <div className="img-box">
                          <MediaItem aspectRatio='38:25' height={250} mediaUrl={v.coverUrlWeb} />
                          <i></i>
                        </div>
                        <div className="item-info">
                          <h2>{v.name}</h2>
                          <p>{v.description}</p>
                          <span className="more">&gt 更多详情</span>
                        </div>
                      </a>
                  </li>
                );
              })
            }
        </ul>
      </div>
    );
  },

  propTypes: {
    data: PropTypes.array,
    index: PropTypes.number
  },

  getInitialState: function() {
    return {
      data:[],
      index:0
    };
  },

  componentDidMount(){
    // 默认是显示第一个,加载最新微电影
    fetch(this.props.listType[0])
      .then(res => {return res.json()})
      .then(j => {
        // 针对每个数据,只取 id, type, coverUrlWeb, description, videoUrl, videoId, hitNum
        let temp = this.state.data;
        let count = j.count;// 数据的实际条数,如果实际条数小于预期拉取的条数,说明数据已经取完了
        temp[0] = _.map(j.data || [],(v,k)=>{
          return _.pick(v,['name','videoId', 'type', 'coverUrlWeb', 'description', 'videoUrl'])
        });
        this.setState({data:temp, index:0});
      });
  },

  handleClick(i, url) {
    let temp = this.state.data;
    if(temp[i] === undefined) {
      fetch(url)
        .then(res => {return res.json()})
        .then(j => {
          // 针对每个数据,只取 id, type, coverUrlWeb, description, videoUrl, videoId, hitNum
          temp[i] = _.map(j.data || [],(v,k)=>{
            return _.pick(v,['name','videoId', 'type', 'coverUrlWeb', 'description', 'videoUrl'])
          });
          this.setState({data:temp, index:i});
        });
    } else {
      this.setState({index: i});
    }
  }
});

const Movie = React.createClass({
  render () {
  var self = this;
	  return (
	    <div className="wdy-view">
	      <div className="bannar-all-box">
	        <div id="slider_top" className="slider-box bannar" style={{height:'450px'}}>
	            <MediaSlider {...MovieConfig['MediaSlider']}/>
	        </div>
	      </div>
        <div className='layout-center-box'>
          <Banner {...MovieConfig['Banner'][0]} />
        </div>
        <ItemType listType={this.state.types} />
	    </div>
	  )
	},
	getInitialState: function() {
    return {
      types: [MovieConfig['NewMovie'].baseUrl+MovieConfig['NewMovie'].dataUrl,
        MovieConfig['HotMovie'].baseUrl+MovieConfig['NewMovie'].dataUrl,
        MovieConfig['LoveMovie'].baseUrl+MovieConfig['NewMovie'].dataUrl,
        MovieConfig['LoveMovieMV'].baseUrl+MovieConfig['NewMovie'].dataUrl]
    };
  }
})

export  { Movie }
