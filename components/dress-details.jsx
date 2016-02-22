import React, { PropTypes } from 'react'
import _ from 'lodash'

const DressDetails = React.createClass({
  render: function() {
    return (
      <div class="hslf-xq-view">
          <div class="layout-center-box">
              <ul class="list-recommend">

                <li class="item-box">
                    <a class="img-box" href="">
                      <img src="http://image.jsbn.com/WebImage/cq/jpg/20150928/77520046727262073264/20150928162340001190_945x1418.jpg@550h_90Q" />
                    </a>
                    <div class="title-box">
                      <span>护肤</span>
                    </div>
                </li>

              </ul>
          </div>
      </div>
    );
  }
});

export { DressDetails };
