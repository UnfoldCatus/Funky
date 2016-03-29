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
            /*传入aspectRatio='1:-1' -1表示以100%作为值 见代码*/
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
    let cfg = SampleDetailsConfig['SampleDetails']
    let fetchUrl = cfg['buildUrl'](this.props.dataParams,cfg['dataUrl'])
    if(fetchUrl){
      fetch(fetchUrl)
        .then(res => {return res.json()})
        .then(j=>{
          if(j.success && j.data.length > 0) {
            // 因为后天返回的pcDetailImages是一个字符串,所以要转换成json
            this.setState({details:JSON.parse(j.data[0].pcDetailImages)});
          }
        })
    }
  }
});

export { SampleDetails }
