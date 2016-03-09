/**
 * Created by chenjianjun on 16/3/9.
 */
import React, { PropTypes } from 'react'
import _ from 'lodash'
import { MediaItem } from './common/media-item.jsx'
import { BaseConfig } from './config/base'

/**
 组件结构
 <PringlesDetails> <= styles,scenes,list
 </PringlesDetails>
 **/

const PringlesDetails = React.createClass({
  render() {
    return(
      <div className="layout-center-box">
        <div className="box-img">
          {
            _.map(this.state.details, (v, k) => {
              return (
                <img key={k} src={v} />
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

  // pcDetailImages  pringles/detail/828
  componentDidMount() {

    let urlPra = decodeURIComponent(window.location.search.substr(1)).split('&');// 去掉?号根据&进行拆分
    let request = new Object();
    for(let i = 0; i < urlPra.length; i++) {
      request[urlPra[i].split('=')[0]]=urlPra[i].split('=')[1];
    }

    let fetchUrl = BaseConfig['baseUrl']+'pringles/detail/'+request['id'];
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
});

export { PringlesDetails }
