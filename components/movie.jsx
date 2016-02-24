import React, { PropTypes } from 'react'
import _ from 'lodash'
import { MediaSlider } from './common/media-slider.jsx'
import { Banner } from './common/banner.jsx'

let Item = React.createClass({
  render: function() {
    return (
      <li className="item-box">
        <div className="animat-1-hive" />
        <a href={this.props.detail}>
          <div className="img-box">
            <img src={this.props.cover} />
            <i />
          </div>
          <div className="item-info" style={{width:'320px'}}>
            <h2>{this.props.title}</h2>
            <p>{this.props.remark}</p>
            <span className="more">
            </span>
          </div>
        </a>
      </li>
    )
  }
});

let ItemList = React.createClass({  
  render: function() {
    var self = this
    return (
      <ul className='list-recommend'>
        {
            $.map(this.props.list,function(v,k){
                return <Item title={v.name} detail={'#'+self.getPathname()+'/'+v.videoId} cover={v.coverImage.imageUrl} key={k} remark={v.remark}/>
            })
        }
      </ul>
    );
  },
  getDefaultProps: function() {
    return {
      list: []
    }
  }
});

const Movie = React.createClass({
  render () {
  var self = this;
	  return (
	    <div className="wdy-view">
	      <div className="bannar-all-box">
	        <div id="slider_top" className="slider-box bannar" style={{height:'450px'}}>
	            <MediaSlider />
	        </div>
	      </div>
	      <div className='layout-center-box'>
	        {/*<StaticAdv imageUrl='//image.jsbn.com/static/wdy.jpg' />*/}
		      <div className="nav-box">
		        <img src="http://image.jsbn.com/static/wdy-nav.png" />
		        <ul className="hover-box J_Tab">
		          <li className="hover-item sel" data-list='latest'>
		            <span />
		            <i />
		          </li>
		          <li className="hover-item" data-list='hotest'>
		            <span />
		            <i />
		          </li>
		          <li className="hover-item" data-list='loveMV'>
		            <span />
		            <i />
		          </li>
		          <li className="hover-item" data-list='loveMicro'>
		            <span />
		            <i />
		          </li>
		        </ul>
		      </div>
	    	</div>
        <div className='layout-center-box'>
          {/*<ItemList list={self.state.currentList} />*/}
        </div>
	    </div>
	  )
	},
	getInitialState: function() {
    return {
      payload: [],
      latest: [],
      hotest: [],
      loveMV: [],
      loveMicro: [],
      currentList: []
    };
  }
})

export  { Movie }