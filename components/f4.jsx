import React, { PropTypes } from 'react'
import _ from 'lodash'
import { MediaSlider } from './common/media-slider.jsx'
import { ListFilter } from './common/list-filter.jsx'
import { Banner } from './common/banner.jsx'
import { F4Config } from './config/f4-config'
import { MediaItem } from './common/media-item.jsx'

/**
 组件结构
 <F4> <= styles,scenes,list
 </F4>
 **/
const Figure = React.createClass({

  render() {
    let priceInfo = null;
    if(this.props.priceRemark && this.props.priceRemark !== "") {
      let ls = this.props.priceRemark.split && this.props.priceRemark.split('|') || []
      priceInfo = (
        <div>
          <h4>价格描述:</h4>
          <p>
            {
              _.map(ls, (v,k) => {
                return (
                  <span key={k}>{v}</span>
                );
              })
            }
          </p>
        </div>
      )
    }

    let desc = null;
    if(this.props.description && this.props.description !== "") {
      desc = (
        <div>
          <h4>个人信息：</h4>
          <p>{this.props.description}</p>
        </div>
      )
    }

    return(
      <div className="figure">
        <div className="avatar-box">
          <img src={this.props.photoUrl+'@120h_1e_1c_0i_1o_90q_1x'} />
        </div>
        <h2><span>{this.props.typeName}</span><b>{this.props.nickName}</b></h2>
        <h2><span>{'￥'+this.props.salePrice}</span></h2>
        <div className="item-info">
          <div className="scrollbarall">
            <div className="scrollbar">
              <div className="track">
                <div className="thumb"></div>
              </div>
            </div>
            <div className="viewport">
              <div className="overview">
                {
                  priceInfo
                }
                {
                  desc
                }
              </div>
            </div>
          </div>
        </div>
        <div className="score">
          <span></span>
          <div className="box">
            <i></i>
          </div>
        </div>
      </div>
    );
  }
});

const MoveItemBox = React.createClass({
  render() {
    return (
      <ul className="r-box-movie">
        {
          _.map(this.props.workList.slice(0,2), (v, k) => {
            return (
              <li key={k} className="item-box">
                <div className="img-box">
                  <MediaItem aspectRatio='3:2' height={200} mediaUrl={v.coverUrlWeb} />
                  <div className="layer"></div>
                  <div className="info">
                    <span>时间：</span><span>{v.shootingTime.slice(0,10)}</span><br />
                    <span>地点：</span><span>{v.shootingAdress}</span><br />
                    <span>成本：￥</span><span>{v.costPrice}</span><br />
                    <a href="#my-id" data-uk-modal>
                      <span className="play">点击观看</span>
                    </a>
                  </div>
                </div>
              </li>
            );
          })
        }
      </ul>
    );
  }
});

const PhotoItemBox = React.createClass({
  render() {
    return (
      <ul className="r-box-photo">
        {
          _.map(this.props.workList.slice(0,3), (v, k) => {
            let pcDetailImages = v.pcDetailImages && JSON.parse(v.pcDetailImages) || [];
            let group = "{'group':'img"+v.id+"'}"
            return (
              <li key={k} className="item-box">
                <a className="img-box" data-uk-lightbox={group} data-lightbox-type='image' title={v.number}
                   href={v.coverUrlWeb+'@90q|watermark=1&object=c2h1aXlpbi5wbmc&t=80&p=5&y=10&x=10'} >
                  <MediaItem aspectRatio='2:3' height={300} mediaUrl={v.coverUrlWeb} water={false} />
                  <div className="layer"></div>
                </a>
                {
                  _.map(pcDetailImages, (wv,wk) => {
                    let url=wv+'@90q|watermark=1&object=c2h1aXlpbi5wbmc&t=80&p=5&y=10&x=10'
                    return (
                      <a href={url} key={wk} data-uk-lightbox={group} data-lightbox-type='image'></a>
                    );
                  })
                }
              </li>
            );
          })
        }
      </ul>
    );
  }
});

/* 主持人作品列表 */
const HostList = React.createClass({
  render() {
    return (
      <ul className="movie-list">

        {
          _.map(this.state.personnelList, (v, k) => {
            return(
              <li key={k} className="item-box">
                <Figure typeName="主持人" {...v} />
                <MoveItemBox workList={v.workList}/>
              </li>
            );
          })
        }
        {
          this.state.moreFlg && <div className="more-btn" onClick={this.loadMore}><span>点击查看更多</span></div>
        }
      </ul>
    );
  },

  getInitialState: function() {
    return {
      pageIndex:1,
      pageSize:10,
      sumCount:0,
      moreFlg:true,
      personnelList:[],
    };
  },

  componentDidMount() {
    const HostList = F4Config['HostList']
    if (HostList.dataUrl !== undefined) {
      fetch(HostList.baseUrl + HostList.dataUrl + '?pageIndex=' + this.state.pageIndex + '&pageSize=' + this.state.pageSize)
        .then(res => {return res.json()})
        .then(j=>{
          let isMoreFlg = (j.count > this.state.pageSize + this.state.sumCount) ? true : false;
          if(j.success){
            this.setState({
              personnelList: _.map(j.data || [],(v,k)=>{ return _.pick(v,['nickName', 'photoUrl', 'salePrice', 'priceRemark', 'description', 'workList']) }),
              sumCount: j.data.length,
              moreFlg:isMoreFlg
            })

            this.props.onChange(j.count);
          }
        })
    }
  },

  loadMore(){
    const HostList = F4Config['HostList']
    if (HostList.dataUrl !== undefined) {
      let ix = this.state.pageIndex + 1;
      fetch(HostList.baseUrl + HostList.dataUrl + '?pageIndex=' + ix + '&pageSize=' + this.state.pageSize)
        .then(res => {return res.json()})
        .then(j=>{
          if(j.success){
            let isMoreFlg = (j.count > this.state.pageSize + this.state.sumCount) ? true : false;
            let tmpPl = this.state.personnelList;
            console.log('1',tmpPl);
            tmpPl = tmpPl.concat(_.map(j.data || [],(v,k)=>{ return _.pick(v,['nickName', 'photoUrl', 'salePrice', 'priceRemark', 'description', 'workList']) }));
            console.log('2',tmpPl);
            this.setState({
              personnelList: tmpPl,
              sumCount: this.state.sumCount + j.data.length,
              pageIndex: this.state.pageIndex + 1,
              moreFlg:isMoreFlg
            })

            this.props.onChange(j.count);
          }
        })
    }
  }
});

/* 摄像师作品列表 */
const CameraList = React.createClass({
  render() {
    return (
      <ul className="movie-list">
        {
          _.map(this.state.personnelList, (v, k) => {
            return(
              <li key={k} className="item-box">
                <Figure typeName="摄像师" {...v} />
                <MoveItemBox workList={v.workList}/>
              </li>
            );
          })
        }
        {
          this.state.moreFlg && <div className="more-btn" onClick={this.loadMore}><span>点击查看更多</span></div>
        }
      </ul>
    );
  },

  getInitialState: function() {
    return {
      pageIndex:1,
      pageSize:10,
      sumCount:0,
      moreFlg:true,
      personnelList:[],
    };
  },

  componentDidMount() {
    const CameraList = F4Config['CameraList']
    if (CameraList.dataUrl !== undefined) {
      fetch(CameraList.baseUrl + CameraList.dataUrl + '?pageIndex=' + this.state.pageIndex + '&pageSize=' + this.state.pageSize)
        .then(res => {return res.json()})
        .then(j=>{
          if(j.success){
            let isMoreFlg = (j.count > this.state.pageSize + this.state.sumCount) ? true : false;
            this.setState({
              personnelList: _.map(j.data || [],(v,k)=>{ return _.pick(v,['nickName', 'photoUrl', 'salePrice', 'priceRemark', 'description', 'workList']) }),
              sumCount: j.data.length,
              moreFlg:isMoreFlg
            })

            this.props.onChange(j.count);
          }
        })
    }
  },

  loadMore(){
    const CameraList = F4Config['CameraList']
    if (CameraList.dataUrl !== undefined) {
      let ix = this.state.pageIndex + 1;
      fetch(CameraList.baseUrl + CameraList.dataUrl + '?pageIndex=' + ix + '&pageSize=' + this.state.pageSize)
        .then(res => {return res.json()})
        .then(j=>{
          if(j.success){
            let isMoreFlg = (j.count > this.state.pageSize + this.state.sumCount) ? true : false;
            let tmpPl = this.state.personnelList;
            tmpPl = tmpPl.concat(_.map(j.data || [],(v,k)=>{ return _.pick(v,['nickName', 'photoUrl', 'salePrice', 'priceRemark', 'description', 'workList']) }));
            this.setState({
              personnelList: tmpPl,
              sumCount: this.state.sumCount + j.data.length,
              pageIndex: this.state.pageIndex + 1,
              moreFlg:isMoreFlg
            })

            this.props.onChange(j.count);
          }
        })
    }
  }
});

/* 化妆师作品列表 */
const DresserList = React.createClass({
  render() {
    return (
      <ul className="photo-list">
        {
          _.map(this.state.personnelList, (v, k) => {
            return(
              <li key={k} className="item-box">
                <Figure typeName="化妆师" {...v} />
                <PhotoItemBox workList={v.workList}/>
              </li>
            );
          })
        }
        {
          this.state.moreFlg && <div className="more-btn" onClick={this.loadMore}><span>点击查看更多</span></div>
        }
      </ul>
    );
  },

  getInitialState: function() {
    return {
      pageIndex:1,
      pageSize:10,
      sumCount:0,
      moreFlg:true,
      personnelList:[],
    };
  },

  componentDidMount() {
    const DresserList = F4Config['DresserList']
    if (DresserList.dataUrl !== undefined) {
      fetch(DresserList.baseUrl + DresserList.dataUrl + '?pageIndex=' + this.state.pageIndex + '&pageSize=' + this.state.pageSize)
        .then(res => {return res.json()})
        .then(j=>{
          let isMoreFlg = (j.count > this.state.pageSize + this.state.sumCount) ? true : false;
          if(j.success){
            this.setState({
              personnelList: _.map(j.data || [],(v,k)=>{ return _.pick(v,['nickName', 'photoUrl', 'salePrice', 'priceRemark', 'description', 'workList']) }),
              sumCount: j.data.length,
              moreFlg:isMoreFlg
            })

            this.props.onChange(j.count);
          }
        })
    }
  },

  loadMore(){
    const DresserList = F4Config['DresserList']
    if (DresserList.dataUrl !== undefined) {
      let ix = this.state.pageIndex + 1;
      fetch(DresserList.baseUrl + DresserList.dataUrl + '?pageIndex=' + ix + '&pageSize=' + this.state.pageSize)
        .then(res => {return res.json()})
        .then(j=>{
          if(j.success){
            let isMoreFlg = (j.count > this.state.pageSize + this.state.sumCount) ? true : false;
            let tmpPl = this.state.personnelList;
            console.log('1',tmpPl);
            tmpPl = tmpPl.concat(_.map(j.data || [],(v,k)=>{ return _.pick(v,['nickName', 'photoUrl', 'salePrice', 'priceRemark', 'description', 'workList']) }));
            console.log('2',tmpPl);
            this.setState({
              personnelList: tmpPl,
              sumCount: this.state.sumCount + j.data.length,
              pageIndex: this.state.pageIndex + 1,
              moreFlg:isMoreFlg
            })

            this.props.onChange(j.count);
          }
        })
    }
  }
});

/* 摄影师作品列表 */
const PhotographerList = React.createClass({
  render() {
    return (
      <ul className="photo-list">
        {
          _.map(this.state.personnelList, (v, k) => {
            return(
              <li key={k} className="item-box">
                <Figure typeName="摄影师" {...v} />
                <PhotoItemBox workList={v.workList}/>
              </li>
            );
          })
        }
        {
          this.state.moreFlg && <div className="more-btn" onClick={this.loadMore}><span>点击查看更多</span></div>
        }
      </ul>
    );
  },

  getInitialState: function() {
    return {
      pageIndex:1,
      pageSize:10,
      sumCount:0,
      moreFlg:true,
      personnelList:[],
    };
  },

  componentDidMount() {
    const PhotographerList = F4Config['PhotographerList']
    if (PhotographerList.dataUrl !== undefined) {
      fetch(PhotographerList.baseUrl + PhotographerList.dataUrl + '?pageIndex=' + this.state.pageIndex + '&pageSize=' + this.state.pageSize)
        .then(res => {return res.json()})
        .then(j=>{
          let isMoreFlg = (j.count > this.state.pageSize + this.state.sumCount) ? true : false;
          if(j.success){
            this.setState({
              personnelList: _.map(j.data || [],(v,k)=>{ return _.pick(v,['nickName', 'photoUrl', 'salePrice', 'priceRemark', 'description', 'workList']) }),
              sumCount: j.data.length,
              moreFlg:isMoreFlg
            })
          }

          this.props.onChange(j.count);
        })
    }
  },

  loadMore(){
    const PhotographerList = F4Config['PhotographerList']
    if (PhotographerList.dataUrl !== undefined) {
      let ix = this.state.pageIndex + 1;
      fetch(PhotographerList.baseUrl + PhotographerList.dataUrl + '?pageIndex=' + ix + '&pageSize=' + this.state.pageSize)
        .then(res => {return res.json()})
        .then(j=>{
          if(j.success){
            let isMoreFlg = (j.count > this.state.pageSize + this.state.sumCount) ? true : false;
            let tmpPl = this.state.personnelList;
            console.log('1',tmpPl);
            tmpPl = tmpPl.concat(_.map(j.data || [],(v,k)=>{ return _.pick(v,['nickName', 'photoUrl', 'salePrice', 'priceRemark', 'description', 'workList']) }));
            console.log('2',tmpPl);
            this.setState({
              personnelList: tmpPl,
              sumCount: this.state.sumCount + j.data.length,
              pageIndex: this.state.pageIndex + 1,
              moreFlg:isMoreFlg
            })

            this.props.onChange(j.count);
          }
        })
    }
  }
});

const TitleFilter = React.createClass({
  render() {
    return (
      <div className="tab-title">
        {
          _.map(this.state.typeTitle, (v,k) => {
            let handleClick = this.handleSel.bind(this, k);
            if(this.props.type == k) {
              return (
                <span key={k} className="sel" onClick={handleClick}>{v}</span>
              );
            } else {
              return (
                <span key={k} onClick={handleClick}>{v}</span>
              );
            }
          })
        }
      </div>
    );
  },

  getInitialState() {
    return {
      typeTitle:['主持人', '化妆师', '摄影师', '摄像师']
    };
  },

  handleSel(i) {
    this.props.handleSel(i);
  }
});

const F4 = React.createClass({
  render () {
    let list = <HostList onChange={this.handleChange} />
    switch(this.state.type) {
      case 0:
      {
        list = <HostList onChange={this.handleChange} />
        break;
      }
      case 1:
      {
        list = <DresserList onChange={this.handleChange} />
        break;
      }
      case 2:
      {
        list = <PhotographerList onChange={this.handleChange} />
        break;
      }
      case 3:
      {
        list = <CameraList onChange={this.handleChange} />
        break;
      }
    }

    return (
      <div className="f4-view">
        <div className="layout-center-box">
          <Banner {...F4Config['Banner'][0]} />
          <TitleFilter type={this.state.type} handleSel={this.handleTabSel} />
          <ListFilter title={'价格'} name={'name'} klass={'ico-1-js ico-1-1-js'} valueKey={['minPrice','maxPrice']} conditions={this.state.prices}  sorterKey={['minPrice','maxPrice']}/>
          <div className="screening-results">
            <b>* 温馨提示：如遇节假日或者黄道吉日，预订价格或有波动，请以实际线下合同为准。 </b>
            <span className="find">找到作品 <b>{this.state.count}</b> 套</span>
          </div>
          {
            list
          }
        </div>
      </div>
    )
  },

  getInitialState: function() {
    return {
      prices: F4Config['Prices'], // config
      type:0,// 0:主持人 1:化妆师 2:摄影师 3:摄像师
      count:0,
    };
  },

  componentDidMount() {
    let ty = 0;
    let template = this.props.dataParams;
    switch (template['tab']) {
      case 'host':
      {
        ty = 0;
        break;
      }
      case 'dresser':
      {
        ty = 1;
        break;
      }
      case 'photographer':
      {
        ty = 2;
        break;
      }
      case 'camera':
      {
        ty = 3;
        break;
      }
    }

    this.setState({type:ty});
  },

  handleTabSel(ty) {
    // 类型选择加载
    this.setState({type:ty});
  },

  handleChange(count) {
    this.setState({count:count});
  }
})

export { F4 }
