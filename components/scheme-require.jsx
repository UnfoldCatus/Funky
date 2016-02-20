import React, { PropTypes } from 'react'
/** 仅仅是一张活动页， 没啥好配置的**/
const SchemeRequire = React.createClass({
  render () {
    return (
      <div className="hq-tjxq-view">
          <div className="layout-center-box">
              <div className="content-box">
                  <div className="top"><img src="/img/eavlee/hqdz/top.jpg" /></div>
              </div>
              <div className="content-box">
                  <div className="mid"><img src="/img/eavlee/hqdz/mid.jpg" /></div>
              </div>
              <div className="content-box">
                  <a href="//jsform.com/f/e7w5oq" className="bot-01"><img src="/img/eavlee/hqdz/tjxq.png" /></a>
                  <a className="bot-02"><img src="/img/eavlee/hqdz/xchs.png" /></a>
                  <a href="/f4" className="bot-03"><img src="/img/eavlee/hqdz/xhlr.png" /></a>
              </div>
          </div>
      </div>
    )
  }
})

export { SchemeRequire }
