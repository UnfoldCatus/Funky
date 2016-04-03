import React, { PropTypes } from 'react'
import _ from 'lodash'
import { MediaSlider } from './common/media-slider.jsx'
import { WeddingClassConfig } from './config/wedding-class-config.js'
import { MediaItem } from './common/media-item.jsx'

const ClassList = React.createClass({
  render() {
    let type=this.props.type
    return(
      <div>
        <ul className="list-recommend">
          {
            _.map(this.state.contents[this.state.type].data, (v,k) => {
              return (
                <li key={k} className="item-box">
                  <img className="img-box" src={v.coverUrlWeb} />
                  <div className="inroduce">
                    <h2>
                      <a href={'/weddingclass-details/'+type+'/'+v.id}>{v.title}</a>
                      <span className="stime">{v.updateTime}</span>
                    </h2>
                    <p>
                      <span>{v.description}</span>
                      <a href={'/weddingclass-details/'+type+'/'+v.id}>详情&gt;&gt;</a>
                    </p>
                  </div>
                </li>
              );
            })
          }
        </ul>
        {
          this.state.contents[this.state.type].moreFlg && <div className="more-btn" onClick={this.loadMore}><span>点击查看更多</span></div>
        }
      </div>
    );
  },

  getInitialState: function() {
    return {
      contents:{
        '1':{
          data:[],
          moreFlg:true,
          pageIndex:1
        }
      },
      type:'1'
    };
  },

  componentDidMount() {

    console.log(this.props.info)

    let DataList = WeddingClassConfig['DataList'];
    let url = DataList.baseUrl+DataList.dataUrl+this.props.info.position+'?pageIndex=1&pageSize=5';
    let tmp = this.state.contents;
    // 默认值
    let info = {}

    fetch(url)
      .then(res => {return res.json()})
      .then(j=>{
        if(j.success && j.data.length > 0) {
          info.data = _.map(j.data || [],(v,k)=>{ return _.pick(v,['coverUrlWeb', 'title', 'updateTime', 'description', 'id']) });
          if(j.count > j.data.length) {
            info.moreFlg = true;
            info.pageIndex = 2;
          } else {
            info.moreFlg = false;
            info.pageIndex = 1;
          }
          tmp[this.props.info.type] = info;
          this.setState({contents:tmp,type:this.props.info.type})
        }
      })
  },

  componentWillReceiveProps(nextProps) {
    if(nextProps.info.type == this.props.info.type) {
      return;
    }

    let DataList = WeddingClassConfig['DataList']
    let tmp = this.state.contents;
    if(tmp[nextProps.info.type]) {
      // 有值的话就直接加载
      this.setState({type:nextProps.info.type})
    } else {
      // 没有的话加载一次数据
      let url = DataList.baseUrl+DataList.dataUrl+nextProps.info.position+'?pageIndex=1&pageSize=5';
      // 默认值
      let info = {}
      fetch(url)
        .then(res => {return res.json()})
        .then(j=>{
          if(j.success && j.data.length > 0) {
            if(j.success && j.data.length > 0) {
              info.data = _.map(j.data || [],(v,k)=>{ return _.pick(v,['coverUrlWeb', 'title', 'updateTime', 'description', 'id']) });
              if(j.count > j.data.length) {
                info.moreFlg = true;
                info.pageIndex = 2;
              } else {
                info.moreFlg = false;
                info.pageIndex = 1;
              }
              tmp[nextProps.info.type] = info;
              this.setState({contents:tmp, type:nextProps.info.type})
            }
          }
        })
    }
  },

  loadMore(){
    let DataList = WeddingClassConfig['DataList']
    let tmp = this.state.contents;

    let info = {}
    if(tmp[this.state.type]) {
      info = tmp[this.state.type];
    } else {
      info.data = [];
      info.moreFlg = true;
      info.pageIndex = 1;
    }

    let url = DataList.baseUrl+DataList.dataUrl+this.props.info.position+'?pageIndex='+info.pageIndex+'&pageSize=5';

    fetch(url)
      .then(res => {return res.json()})
      .then(j=>{
        if(j.success && j.data.length > 0) {
          info.data = info.data.concat(_.map(j.data || [],(v,k)=>{ return _.pick(v,['coverUrlWeb', 'title', 'updateTime', 'description', 'id']) }));
          info.moreFlg = (j.count > info.data.length) ? true : false;
          info.pageIndex++;
          tmp[this.state.type] = info;
          this.setState({contents:tmp})
        }
      })
  }
});

const TitleFilter = React.createClass({
  render() {
    return (
      <div className="kt-tab">
        {
          _.map(this.state.typeTitle, (v,k) => {
            let handleClick = this.handleSel.bind(this, k);
            if(this.props.info.type == v.type) {
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
      typeTitle:WeddingClassConfig['ClassInfo']
    };
  },

  handleSel(k) {
    this.props.handleSel(k);
  }
});

const WeddingClass = React.createClass({
  render () {
    let advUrl = WeddingClassConfig['MediaSlider'].dataUrl+this.state.classInfo.adv;
    let type=this.props.dataParams && this.props.dataParams.type
    return(
      <div className="ketang-view">
        <div className="bannar-all-box">
          <div id="slider_top" className="slider-box bannar" style={{height:WeddingClassConfig['MediaSlider']['height']}}>
            <MediaSlider {...WeddingClassConfig['MediaSlider']} dataUrl={advUrl} />
          </div>
        </div>
        <div className="layout-center-box">
          <div className="ktmain">
            <TitleFilter info={this.state.classInfo} handleSel={this.handleTabSel} />
            <div id="ktlist_box">
              <ClassList info={this.state.classInfo} type={type} />
            </div>
          </div>
        </div>
      </div>
    );
  },

  getInitialState: function() {
    return {
      // '婚照技巧', '婚宴知识', '婚礼学堂', '礼服知识', '表演技巧', '用品贴士', '租车经验'
      classInfo:WeddingClassConfig['ClassInfo']['1']
    };
  },

  componentDidMount() {
    let type = this.props.dataParams.type;
    let ClassInfo = WeddingClassConfig['ClassInfo'];
    if(ClassInfo[type]) {
      this.setState({classInfo:ClassInfo[type]});
    }
  },

  handleTabSel(ty) {
    // 类型选择加载
    let ClassInfo = WeddingClassConfig['ClassInfo'];
    if(ClassInfo[ty]) {
      this.setState({classInfo:ClassInfo[ty]});
    }
  },

});

export { WeddingClass }
