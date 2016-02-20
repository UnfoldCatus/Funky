import React, { PropTypes } from 'react'
import _ from 'lodash'
import { MediaItem } from './media-item.jsx'
const SchemeListItem = React.createClass({
  render () {
    return (
      <ul className="cases-list">
        {
          _.map(this.props.data,(v,k)=>{
              return (
                <li className="item-box" key={k}>
									<div className='img-box'>
										<MediaItem />
                    <a className="layer-box" href={'/'} target='_blank'>
											<div className="layer"/>
											<div className="info">
												<h3>{v.schemeName}</h3>
												<div className="date">
													<b>{v.price || ''}</b>
													<span>({v.weddingDate})</span>
												</div>
											</div>
										</a>
									</div>
								</li>
              )
          })
        }
      </ul>

    )
  },
  propTypes: {
    data: React.PropTypes.array
  },
})

export { SchemeListItem }
