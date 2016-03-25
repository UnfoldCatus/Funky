import React, { PropTypes } from 'react'
import { ListFilter } from './common/list-filter.jsx'
import { CarConfig } from './config/car-config.js'
import { MediaSlider } from './common/media-slider.jsx'
import { MediaItem } from './common/media-item.jsx'
import _ from 'lodash'
import { DetailModal } from './common/detail-modal.jsx'

 /**
 组件结构
 <Car>
 <MediaSlider />
  <CarItemList>
    <MediaItem />
  </CarItemList>
 </Car>


 **/

const CarItemList = React.createClass({
  render () {
    return (
      <div className='J_EventHooker'>
        <p className="result">
          <span>只看车队</span>
          <input type="checkbox" name="FirstCar" className="cbox J_IsTeam" />
          <i> | </i>
          <span>{'找到相关车辆 '}</span>
          <em className='J_Count'>{this.state.count}</em>
          <span>{' 辆'}</span>
        </p>
        <ul className='list-recommend J_Item'>
          {
            _.map(this.state.data,(v,k)=>{
              return (
                <li key={k} className='item-box' data-id={v.id}>
                  <div className='img-box'>
                    <MediaItem aspectRatio={'3:2'} width={380} mediaUrl={v.coverUrlWeb || '//placehold.it/380x253'}/>
                  </div>
                  <div className='brd'>
                    <div className="htile">
                      <span>{v.title}</span>
                    </div>
                    <p className="pname">
                      <span className='spa1'>{v.rentalPrice===0?'面议': String.fromCharCode(165)+parseFloat(v.rentalPrice).toFixed(2)}</span>
                      <span className='spa2'>市场价：<em>{String.fromCharCode(165)+parseFloat(v.marketPrice).toFixed(2)}</em></span>
                    </p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>

    )
  },
  propTypes: {
    'dataUrl': React.PropTypes.string
  },
  getDefaultProps(){
    return {
      'dataUrl':undefined
    }
  },
  getInitialState(){
    return {
      data:[],
      dataStore:[],
      count:0,
      currentIndex:0
    }
  },
  componentWillReceiveProps(nextProps) {
    CarConfig['CarItemList']['fetchFunc'](this,nextProps)(this,nextProps)
  },
  componentDidMount() {
    if (this.props.dataUrl !== undefined) {
      // 在组件初始化完成后，立即绑定代理的点击事件。
      $('.J_Item').on('click','li',(evt)=>{
        let id = $(evt.currentTarget).attr('data-id')
        /* 点击时渲染出弹出模块 需要填写用于样式控制的styleClass*/
        ReactDOM.render(<DetailModal dataId={id} styleClass={'hlyp-view'} {...CarConfig['CarItemDetail']}/>,$('#J_DetailModalContainer')[0])

        return false
      })
    }
    CarConfig['CarItemList']['fetchFunc'](this,null)(this)
  }
})


//<ListFilter title={'婚车档次'} name={'name'} klass={'ico-17-js ico-17-1-js'} valueKey={['id']}  sorterKey={['levelId']} {...CarConfig['LevelCategory']}/>
const Car = React.createClass({
  render () {
    return (
      <div className="zuche-view">
        <div className="bannar-all-box">
          <div className="custom-banner">
            <div id="slider_top" className="slider-box bannar"  style={{height:CarConfig['MediaSlider']['height']}}>
              <MediaSlider {...CarConfig['MediaSlider']} />
            </div>
          </div>
        </div>
        <div className="layout-center-box clearfix J_FilterCtrl">
          <ListFilter title={'婚车车型'} name={'name'} klass={'ico-17-js ico-17-2-js'} valueKey={['id']} sorterKey={['modelsId']} {...CarConfig['ModelCategory']}/>
          <ListFilter title={'婚车品牌'} name={'name'} klass={'ico-17-js ico-17-3-js'} valueKey={['id']} sorterKey={['brandId']} {...CarConfig['BrandCategory']} />
          <ListFilter title={'婚车价格'} name={'name'} klass={'ico-17-js ico-17-4-js'} valueKey={['minPrice','maxPrice']}  sorterKey={['minPrice','maxPrice']} {...CarConfig['PriceCategory']}  />
          <CarItemList {...CarConfig['CarItemList']} params={_.merge(this.state.params,CarConfig['CarItemList'].params)}/>
          <div id="J_MoreButton">
            <div className="more-btn"><span>点击查看更多</span></div>
          </div>
        </div>
      </div>
    )
  },
  getInitialState() {
    return {
      params:{}
    }
  },
  componentDidMount() {
    CarConfig['CarItemList']['setupFilterClick']('multi',this)
    CarConfig['SorterAndSearch'](this)
  }
})

export { Car }
