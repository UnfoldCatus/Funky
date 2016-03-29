import React, { PropTypes } from 'react'
import { WeddingClassDetailsConfig } from './config/weddingclass-details-config'
const WeddingClassDetails = React.createClass({
  render () {
    return (
      <div className="ktmain-detail-view layout-center-box">
        <div className='ketang-view'>
          <div className="ktmain-info">
              <div className="content" id='kt_content' dangerouslySetInnerHTML={{__html:this.state.content}}>
              </div>
          </div>
        </div>
      </div>
    )
  },
  getInitialState() {
    return {
      content: '加载中...'
    }
  },
  componentDidMount() {
    let cfg = WeddingClassDetailsConfig['WeddingClassDetails']
    let fetchUrl = cfg['buildUrl'](this.props.dataParams,cfg['dataUrl'])
    if(fetchUrl){
      fetch(fetchUrl)
        .then(res => {return res.json()})
        .then(j=>{
          if(j.success && j.data.length > 0 && j.data[0].content) {
            this.setState({content:j.data[0].content});
          }
        })
    }
  }
})

export { WeddingClassDetails }
