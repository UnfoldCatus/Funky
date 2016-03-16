import React, { PropTypes } from 'react'
import { ActiveConfig } from '../config/active-config.js'
import _ from 'lodash'

const Active = React.createClass({
  render() {
    return(
      <div className="layout-center-box">
        {
          _.map(this.state.picUrls, (v,k) => {

            let content = null;
            if(v.href) {
              content = (
                <a href={v.hrefUrl} target="_blank"> <img src={v.url} /></a>
              )
            } else {
              content = (<img src={v.url} />)
            }

            return(
              <div key={k} className="box-img">
                {
                  content
                }
              </div>
            );
          })
        }
      </div>
    )
  },

  getInitialState() {
    return {
      picUrls:[]
    };
  },

  componentDidMount() {
    let template = this.props.dataParams;
    if(ActiveConfig[template.name]) {
      this.setState({picUrls:ActiveConfig[template.name]});
    }
  }
})

export { Active }
