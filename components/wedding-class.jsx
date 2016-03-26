import React, { PropTypes } from 'react'
import _ from 'lodash'
import { MediaSlider } from './common/media-slider.jsx'
import { WeddingClassConfig } from './config/wedding-class-config.js'
import { MediaItem } from './common/media-item.jsx'

const TitleFilter = React.createClass({
  render() {
    return (
      <div className="kt-tab">
        {
          _.map(this.state.typeTitle, (v,k) => {
            let handleClick = this.handleSel.bind(this, v.type);
            if(this.props.type == v.type) {
              return (
                <a key={k} className="action" onClick={handleClick}>{v.title}</a>
              );
            } else {
              return (
                <a key={k} onClick={handleClick}>{v.title}</a>
              );
            }
          })
        }
      </div>
    );
  },

  getInitialState() {
    return {
      typeTitle:[
        {title:'婚照技巧',type:1},
        {title:'婚宴知识',type:2},
        {title:'婚礼学堂',type:3},
        {title:'礼服知识',type:4},
        {title:'表演技巧',type:5},
        {title:'用品贴士',type:7},
        {title:'租车经验',type:8}]
    };
  },

  handleSel(i) {
    this.props.handleSel(i);
  }
});

const ClassList = React.createClass({
  render() {
    return(
      <div>
        <ul className="list-recommend">
          {
            _.map(this.state.contents, (v,k) => {
              return (
                <li key={k} className="item-box">
                  <img className="img-box" src={v.coverUrlWeb} />
                  <div className="inroduce">
                    <h2>
                      <a href={'weddingclass/'+this.props.type+'/'+v.id}>{v.title}</a>
                      <span className="stime">{v.updateTime}</span>
                    </h2>
                    <p>
                      <span>{v.description}</span>
                      <a href={'weddingclass/'+this.props.type+'/'+v.id}>详情&gt;&gt;</a>
                    </p>
                  </div>
                </li>
              );
            })
          }
        </ul>
        {
          this.state.moreFlg && <div className="more-btn" onClick={this.loadMore}><span>点击查看更多</span></div>
        }
      </div>
    );
  },

  getInitialState: function() {
    return {
      contents:[],
      moreFlg:true
    };
  },

  componentDidMount() {
    console.log('---------'+this.props.type)
    const DataList = WeddingClassConfig['DataList']
    if (DataList.dataUrl !== undefined) {
      fetch(DataList.baseUrl + DataList.dataUrl + '?moduleTypeId=' + this.props.type)
        .then(res => {return res.json()})
        .then(j=>{
          if(j.success && j.data.length > 0) {
            let isMoreFlg = j.count > this.state.contents.length+j.data.length ? true : false;
            this.setState({
              contents: j.data,
              moreFlg: isMoreFlg
            })
          }
        })
    }
  },

  componentWillReceiveProps(nextProps) {
    console.log('1---------'+this.props.type)
    const DataList = WeddingClassConfig['DataList']
    if (DataList.dataUrl !== undefined) {
      fetch(DataList.baseUrl + DataList.dataUrl + '?moduleTypeId=' + this.props.type)
        .then(res => {return res.json()})
        .then(j=>{
          if(j.success && j.data.length > 0) {
            let isMoreFlg = j.count > this.state.contents.length+j.data.length ? true : false;
            this.setState({
              contents: j.data,
              moreFlg: isMoreFlg
            })
          }
        })
    }
  },

  loadMore(){
    const DataList = WeddingClassConfig['DataList']
    if (DataList.dataUrl !== undefined) {
      fetch(DataList.baseUrl + DataList.dataUrl + '?moduleTypeId=' + this.props.type)
        .then(res => {return res.json()})
        .then(j=>{
          if(j.success && j.data.length > 0) {
            let tmpPl = this.state.contents;
            tmpPl = tmpPl.concat(j.data);
            let isMoreFlg = j.count > this.state.contents.length+j.data.length ? true : false;
            this.setState({
              contents: tmpPl ,
              moreFlg: isMoreFlg
            })
          }
        })
    }
  }
});

const WeddingClass = React.createClass({
  render () {
    return(
      <div className="ketang-view">
        <div className="bannar-all-box">
          <div id="slider_top" className="slider-box bannar" style={{height:WeddingClassConfig['MediaSlider']['height']}}>
            <MediaSlider {...WeddingClassConfig['MediaSlider']}/>
          </div>
        </div>
        <div className="layout-center-box">
          <div className="ktmain">
            <TitleFilter type={this.state.type} handleSel={this.handleTabSel} />
            <div id="ktlist_box">
              <ClassList type={this.state.type} />
            </div>
          </div>
        </div>
      </div>
    );
  },

  getInitialState: function() {
    return {
      // '婚照技巧', '婚宴知识', '婚礼学堂', '礼服知识', '表演技巧', '用品贴士', '租车经验'
      type:1// 1:婚照技巧 2:婚宴知识 3:婚礼学堂 4:礼服知识 5:表演技巧 7:用品贴士 8:租车经验
    };
  },

  componentDidMount() {
    this.setState({type:this.props.dataParams.type});
  },

  handleTabSel(ty) {
    // 类型选择加载
    this.setState({type:ty});
  },

});

export { WeddingClass }
