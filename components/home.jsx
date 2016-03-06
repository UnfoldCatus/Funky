import React, { PropTypes } from 'react'
import { MediaSlider } from './common/media-slider.jsx'
import _ from 'lodash'
import { Group5 } from './common/group5.jsx'
import { Group4 } from './common/group4.jsx'
import { Group3 } from './common/group3.jsx'
import { Banner} from './common/banner.jsx'
import { HomeConfig } from './config/home-config'

/**
  <Home>
    <MediaSlider />
    <Group5 />
    <Banner />
    <Group4 />
    <Group4 />
    <Group4 />
    <Group4 />
    <Group3 />
    <BottomNav />
    <BotComment>
      <Board />
      <Board />
      <Board />
      <Board />
    </BotComment>
  </Home>
**/

const BottomNav = React.createClass({
  render () {
    return (
      <div className="nav-bot">
        <ul className="nav-box">
          <i className="arrow-01" />
          <i className="arrow-02" />
          {
            _.map(this.props.menu,(v,k)=>{
              return (
                <li key={k} className={v.klassName}>
                  <a href={v.link} />
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
})


const Board = React.createClass({
  render () {
    return (
      <li>
        {
          _.map(this.props.list||[],(value,key)=>{
            return (
              <a href={value} data-uk-lightbox="{'group':'comment-robot'}" data-lightbox-type='image' title='' key={key}>
                  <span  />
              </a>
            )
          })
        }
      </li>
    )
  }
})


const BotComment = React.createClass({
  render () {
    return (
      <div className='bannar'>
        <img src={this.props.bg} />
        <ul className="comment">
          {
            _.map(this.state.data,(value,key)=>{
              return <Board key={key} list={value}/>
            })
          }
        </ul>
      </div>
    )
  },
  propTypes: {
    dataUrl: React.PropTypes.string
  },
  getDefaultProps(){
    return{ dataUrl:'' }
  },
  getInitialState() {
    return { data:[] }
  },
  componentDidMount() {
    if (this.props.dataUrl !== undefined) {
      fetch(this.props.baseUrl + this.props.dataUrl)
      .then(res => {return res.json()})
      .then(j=>{
        /*此次的data格式:

          [
            [1,2,3,4,5],
            [6,7,8,9,10]
          ].

          由于接口返回的数据是一维的。 所以需要进行一次chunk操作
        */
        this.setState( { data: _.chunk(_.map(j.data,(v,k)=>{ return v.coverUrlWeb }),5) })
      })
    }
  }
})




const Home = React.createClass({
  render () {
    return (
      <div className='home-view'>
        <div className='bannar-all-box' >
          <div className='slider-box bannar' style={{height:'680px'}} id='slider_top'>
            <MediaSlider {...HomeConfig['MediaSlider']} />
          </div>
        </div>
        <div className="space-40-eav"></div>
        <div className='hqdz-home-view mgt30'>
          <div className='layout-center-box'>
            <div className='mgb20'>
              <Group5 {...HomeConfig['Group5']}/>
            </div>
          </div>
        </div>
        <div className='layout-center-box'>
          <Banner {...HomeConfig['Banner'][0]} />
          <div className='home-mash clearfix' >
            <Group4 {...HomeConfig['Group4'][0]} />
            <Group4 {...HomeConfig['Group4'][1]} />
            <Group4 {...HomeConfig['Group4'][2]} />
            <Group4 {...HomeConfig['Group4'][3]} />
            <div className='mgt30'>
              <Group3 {...HomeConfig['Group3'][0]} />
            </div>
          </div>
        </div>
        <div className='mgt30'>
          <BottomNav menu={HomeConfig['BottomNav']}/>
        </div>
        <div className='bannar-all-box'>
          <Banner {...HomeConfig['Banner'][1]} />
        </div>
        <div className='bannar-all-box'>
          <BotComment {...HomeConfig['BotComment']}/>
        </div>
      </div>
    )
  }
})

export { Home }
