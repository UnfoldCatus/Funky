/**
 * Created by chenjianjun on 16/3/9.
 */
import React, { PropTypes } from 'react'
import _ from 'lodash'
import { MediaItem } from './common/media-item.jsx'
import { SampleDetailsConfig } from './config/sample-details-config'

/**
 组件结构
 <SampleDetails> <= styles,scenes,list
 </SampleDetails>
 **/

const SampleDetails = React.createClass({
  render() {
    return(
      <div className="layout-center-box">
        <div className="box-img">
          {
            _.map(this.state.details, (v, k) => {
              return (
                <MediaItem key={k} mediaUrl={v} width={1920} aspectRatio={'1:-1'} />
              );
            })
          }
        </div>
      </div>
    );
  },

  getInitialState: function() {
    return {
      details: []
    };
  },

  // pcDetailImages  sample/detail/812
  componentDidMount() {
    /*
      客户端渲染时， 由于是外部引入脚本的方式
      <script class='J_Matrix' data-params='{"id":124}' scr='xxx.min.js' />
      所以，可以从data-params取得传入的参数。然后在组件被render的时候，传入给组件的dataParams字段
    */
    let params = this.props.dataParams // 注意: dataParams字段是外部传入的参数
    let paramsUrl = SampleDetailsConfig['SampleDetails'].dataUrl || undefined
    if (_.size(params)>0 && paramsUrl) { //参数获取正确
      /**
      例如url为: /sample/:id/:typeId
      传入的参数为: {id:123,typeId:2343}
      **/
      _.each(params,(v,k)=>{
        paramsUrl = paramsUrl.replace(':'+k,v)
      })

      let fetchUrl = SampleDetailsConfig['SampleDetails'].baseUrl + paramsUrl
      fetch(fetchUrl)
        .then(res => {return res.json()})
        .then(j=>{
          if(j.success) {
            if(j.data !== null) {
              // 因为后天返回的pcDetailImages是一个字符串,所以要转换成json
              this.setState({details:JSON.parse(j.data.pcDetailImages)});
            }
          }
        })
    }
  }
});

export { SampleDetails }
