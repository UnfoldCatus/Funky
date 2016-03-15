/*
服务端应该导入本模块。用于索引当前系统中的页面components
key为ejs模板的文件名
value为components模块


TODO: 使用bash扫描component文件夹直接生成本文件
*/
import React, { PropTypes } from 'react'

import { Home } from '../home.jsx'
import { Shot } from '../shot.jsx'
import { Sample } from '../sample.jsx'
import { Pringles } from '../pringles.jsx'
import { SampleDetails } from '../sample-details.jsx'
import { PringlesDetails } from '../pringles-details.jsx'

import { Suite } from '../suite.jsx'
import { SuiteDetails } from '../suite-details.jsx'
import { Hotel } from '../hotel.jsx'
import { HotelDetails } from '../hotel-details.jsx'
import { HotelRequire } from '../hotel-require.jsx'
import { Scheme } from '../scheme.jsx'
import { Cases } from '../cases.jsx'
import { CaseDetails } from '../case-details.jsx'
import { F4 } from '../f4.jsx'
import { WeddingPat } from '../wedding-pat.jsx'
import { WeddingVideo } from '../wedding-video.jsx'
import { WeddingMV } from '../wedding-mv.jsx'
import { SchemeRequire } from '../scheme-require.jsx'

import { Adv } from '../adv.jsx'
import { Dress } from '../dress.jsx'
import { DressDetails } from '../dress-details.jsx'
import { Movie } from '../movie.jsx'
import { MovieDetails } from '../movie-details.jsx'
import { Supply } from '../supply.jsx'
import { Car } from '../car.jsx'


const ComponentsIndex = {
  'home': <Home />,
  'shot': <Shot />,
  'sample': <Sample />,
  'pringles': <Pringles />,
  'sample-details': <SampleDetails />,
  'pringles-details': <PringlesDetails />,
  'suite': <Suite />,
  'suite-details': <SuiteDetails />,
  'wedding-mv': <WeddingMV />,// 纪实MV
  'hotel': <Hotel />,
  'hotel-details': <HotelDetails />,
  'hotel-require': <HotelRequire />,
  'scheme': <Scheme />,
  'cases': <Cases />,
  'case-details': <CaseDetails />, // 实景案例详情
  'wedding-pat': <WeddingPat />,// 婚礼跟拍
  'wedding-video': <WeddingVideo />,// 婚礼视频
  'f4': <F4 />,
  'scheme-require': <SchemeRequire />,
  'adv': <Adv />,
  'dress': <Dress />,
  'dress-details': <DressDetails />,
  'movie': <Movie />,
  'movie-details': <MovieDetails />,
  'supply': <Supply />,
  'car': <Car />
}


export {
  ComponentsIndex
}
