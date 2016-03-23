import React, { PropTypes } from 'react'

const MapLocation = React.createClass({
  render () {
    return (

      <div className='map' id='container' style={{height:720+'px'}} />

    )
  },
  componentDidMount() {
    var map = new BMap.Map("container");
    var longitude =parseFloat( this.props.dataParams.longitude);
    var latitude = parseFloat(this.props.dataParams.latitude);
    var point = new BMap.Point(longitude, latitude);
    map.centerAndZoom(point, 15);

    var marker = new BMap.Marker(point);        // 创建标注
    map.addOverlay(marker);
  }
})

export { MapLocation }
