import React, { PropTypes } from 'react'
import { MenuConfig } from './config/menu-config.js'
import _ from 'lodash'
const Navigation = React.createClass({
  render () {
    let currentKey = this.props.currentKey
    return (
      <div>
        {
          _.map(MenuConfig[this.props.menuKey],(v,k)=>{
            //确定menu 的 class类型
            let menuClass = 'item'
            if (v.link === '/' || v.link === '/home') {
              menuClass = 'item'
            }else if(v.link === currentKey){
              menuClass = 'item sec-nav-ch item-current'
            }else {
              menuClass = 'item sec-nav-ch'
            }
            return (
              <a key={k} href={v.link} >
                <div className={menuClass}>
                  <div className="ch">
                    <span>{v.cn}</span>
                    <div className="en">{v.en}</div>
                    <div className="arrow-5-js triangle"></div>
                  </div>
                </div>
              </a>
            )
          })
        }
      </div>
    )
  },
  propTypes: {
    menuKey: React.PropTypes.string,
    currentKey:React.PropTypes.string
  },
  getDefaultProps(){
    return {
      menuKey:'/',
      currentKey:'/'
    }
  },
  componentWillReceiveProps(nextProps) {
  }
})

export { Navigation }
