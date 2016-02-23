import React, { PropTypes } from 'react'
import _ from 'lodash'
import { Banner } from './common/banner.jsx'
import { DressDetailsConfig } from './config/dress-details-config.js'

const DressDetails = React.createClass({
    render() {
        return (
          <div className="hslf-xq-view">
              <div className="layout-center-box">
                  <Banner {...DressDetailsConfig['Banner'][0]} />
                  <div className="title-hslf-xq">
                      <h1>国际婚纱: It's My Party</h1>
                  </div>
                  <ul className="list-recommend">
                      {
                          _.map(this.props.dressItems, (v,k) => {
                              return (
                                  <li className="item-box">
                                      <a className="img-box" href="">
                                          <div className="layer-box"></div>
                                          <img src="http://image.jsbn.com/WebImage/cq/jpg/20150928/77520046727262073264/20150928162340001190_945x1418.jpg@550h_90Q" />
                                      </a>
                                      <div className="title-box">
                                          <span>护肤</span>
                                      </div>
                                  </li>
                              );
                          })
                      }
                  </ul>
              </div>
          </div>
        );
    },
    propTypes: {
        dressItems: PropTypes.array
    },
    getDefaultProps(){
        return {
            dressItems:[{"12":12},{"13":13}]
        }
    }
});

export { DressDetails };
