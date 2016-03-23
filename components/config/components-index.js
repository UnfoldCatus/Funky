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
import { HallDetails } from '../hall-details.jsx'
import { HotelRequire } from '../hotel-require.jsx'
import { MapLocation } from '../map-location.jsx'
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

import { Active } from '../common/active.jsx'

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
  'hall-details': <HallDetails />,
  'map-location': <MapLocation />,
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
  'car': <Car />,
  'active': <Active />
}
const ComponentsSeo= {
  'home': {
    'seoTitle':'重庆金色百年婚礼集团_婚纱摄影_婚宴预订_婚庆制定_婚纱礼服_婚戒钻石_微电影_婚礼用品_婚车租凭',
    'seoKeywords':'重庆结婚网|重庆婚纱照网|重庆婚宴酒店网|重庆婚礼策划网|重庆婚纱礼服网|重庆珠宝饰品网|重庆结婚微电影网|重庆结婚用品网|重庆婚车租凭网',
    'seoDescription':'金色百年(www.jsbn.com)是国内领先的结婚平台,国内唯一一站式结婚综合平台，是新人必上的结婚网! 咨询热线:400-015-9999'
  },
  'shot': {
    'seoTitle':'重庆婚纱摄影工作室_重庆婚纱照_重庆婚纱摄影摄像_重庆高端婚纱摄影_重庆婚纱摄影哪家好_金色百年婚纱摄影',
    'seoKeywords':'重庆婚纱摄影|重庆婚纱照|重庆婚纱摄影工作室|重庆户外婚纱摄影|重庆外景婚纱摄影|重庆婚纱摄影哪家好|重庆婚纱摄影排名|重庆婚纱摄影前十名',
    'seoDescription':'重庆最好的婚纱摄影影楼机构－金色百年婚纱摄影提供专业外景婚纱摄影，个性婚纱照，大型室内婚纱摄影棚，爱情微电影等高端私属定制婚纱摄影服务，婚纱照百分百品质保证'
  },
  'sample': {
    'seoTitle':'重庆结婚照_婚纱照风格欣赏_婚纱摄影作品_婚纱照图片_婚纱摄影样片欣赏_婚纱照图片大全_金色百年婚纱摄影',
    'seoKeywords':'金色百年婚纱照风格欣赏|婚纱摄影作品|婚纱照片欣赏|婚纱摄影样片欣赏|婚纱照图片大全',
    'seoDescription':'金色百年婚纱摄影样片欣赏，婚纱摄影作品，这里，我们为您展示欧式婚纱摄影，韩式婚纱摄影，时尚婚纱摄影，复古婚纱摄影，清新婚纱摄影 ，唯美婚纱摄影，画意婚纱摄影，经典婚纱摄影等特色风格样片欣赏噢~'
  },
  'pringles': {
    'seoTitle':'重庆婚纱照图片大全_婚纱摄影客片作品_婚纱照客片欣赏_客照欣赏_金色百年婚纱摄影',
    'seoKeywords':'婚纱摄影客片作品|婚纱照客片欣赏|客照欣赏|婚纱照图片大全',
    'seoDescription':'金色百年婚纱摄影客片欣赏，我们的婚纱照要这样拍-时尚、个性、品质'
  },
  'sample-details': {
    'seoTitle':'',
    'seoKeywords':'',
    'seoDescription':''
  },
  'pringles-details': {
    'seoTitle':'',
    'seoKeywords':'',
    'seoDescription':''
  },
  'suite': {
    'seoTitle':'重庆婚纱照团购_婚纱摄影优惠活动_婚纱摄影报价_拍婚纱照价格_金色百年婚纱摄影',
    'seoKeywords':'婚纱摄影优惠活动|婚纱照优惠打折|重庆婚纱照团购|重庆婚纱摄影团购|重庆摄影工作室',
    'seoDescription':'重庆金色百年婚纱摄影工作室是重庆最大、最具影响力的婚纱摄影、拍婚纱照、摄影工作室。金色百年致力于打造高端私人摄影影楼，投资逾千万打造全息数字摄影场创就奢华神话，引领时尚婚纱摄影的另行风向标。'
  },
  'suite-details': {
    'seoTitle':'',
    'seoKeywords':'',
    'seoDescription':''
  },
  'wedding-mv': {
    'seoTitle':'婚纱照微电影_婚纱摄影微电影_结婚跟拍_婚纱摄影MV_婚礼即时MV_金色百年婚纱摄影',
    'seoKeywords':'结婚微电影|结婚MV|婚纱摄影微电影|婚纱照微电影|婚纱照MV|婚纱摄影MV',
    'seoDescription':'金色百年婚礼微电影，专为新人提供优质的婚礼影像服务。服务内容包括婚礼跟拍、现场快剪、微电影、MV等，全方位满足新人不同层次的婚礼影像需求。金色百年婚礼微电影服务团队把时尚气质和人文理念融入到婚礼影像的制作中，把婚礼最真实、最感人的一面呈现给新人。'
  },// 纪实MV
  'hotel': {
    'seoTitle':'重庆婚宴酒店预订_重庆喜宴大饭店_重庆酒楼_重庆婚宴酒店推荐_重庆婚庆酒店_金色百年婚宴网站',
    'seoKeywords':'重庆酒店|酒宴|大饭店|婚宴|婚宴布置|重庆喜宴酒店|婚宴策划|重庆婚宴酒楼|重庆婚宴酒店推荐|婚庆酒店',
    'seoDescription':'金色百年管家式婚礼顾问——婚礼统筹师婚团队，全心为新人免费提供优质贴心的咨询服务。金色百年婚礼统筹师对所负责城市和区域的婚宴酒店，从酒店交通地理位置、宴会厅宴客规模、内部陈设布局、菜品口味、菜单价格，甚至宴会大厅中间有无立柱等细节都非常了解，能够为新人提供最精准的婚宴酒店预订方案。'
  },
  'hotel-details': {
    'seoTitle':'',
    'seoKeywords':'',
    'seoDescription':''
  },
  'hall-details': {
    'seoTitle':'',
    'seoKeywords':'',
    'seoDescription':''
  },
  'map-location': {
    'seoTitle':'',
    'seoKeywords':'',
    'seoDescription':''
  },
  'hotel-require': {
    'seoTitle':'重庆婚宴需求提交_重庆定制婚宴',
    'seoKeywords':'婚宴酒店预订|婚宴预订',
    'seoDescription':'该板块是金色百年婚宴预订子板块之一，是O2O线上引流线下平台，该板块利用金色百年官网平台，引导线上客户进行需求备案，提交客户需求，线下相关工作人员进行实时反馈，拉拢客户，进行签单。'
  },
  'scheme': {
    'seoTitle':'重庆婚庆公司_婚礼策划_婚庆服务_重庆婚礼策划公司_重庆婚礼_重庆婚宴_重庆婚礼策划_金色百年婚礼策划',
    'seoKeywords':'金色百年婚礼官网|重庆婚礼策划|婚庆公司|重庆婚庆公司|重庆婚礼策划公司|重庆婚礼|婚礼策划公司|重庆婚礼策划',
    'seoDescription':'金色百年婚礼策划成立至今，已为重庆数千对新人举行了浪漫完美的婚礼，见证着每一对新人最幸福的时刻，服务水平得到新人及宾客的高度赞誉，积累了良好的口碑。以高超的策划和创意水平为核心竞争力，在短短两年时间里就拥有良好的业绩与口碑，迅速挤身于重庆婚庆行业前列，引领婚庆行业在重庆的发展方向，在激烈的市场竞争中独占鳌头。'
  },
  'cases': {
    'seoTitle':'重庆婚庆案例_婚礼场景布置_重庆婚礼布置_重庆婚庆方案_重庆婚礼网',
    'seoKeywords':'重庆婚庆案例婚宴|婚礼会馆|主题婚礼|婚礼现场|婚礼私人定制|婚礼定制方案',
    'seoDescription':'金色百年婚礼策化是西南地区著名婚庆品牌，以优质服务，致力于为新人提供惬意，个性的专属婚礼，一流性价比婚礼体验。我们专业的贴心服务，只为您的优雅转身。'
  },
  'case-details': {
    'seoTitle':'',
    'seoKeywords':'',
    'seoDescription':''
  },
  'wedding-pat': {
    'seoTitle':'重庆婚庆跟拍_重庆婚礼跟拍_婚礼现场摄影_重庆婚嫁_婚礼跟拍全程攻略_婚礼跟拍价格_婚礼跟拍流程',
    'seoKeywords':'重庆婚庆跟拍价格|重庆婚礼跟拍多少钱|重庆婚庆跟拍哪家好|主题婚礼跟拍',
    'seoDescription':'金色百年是专业婚礼跟拍,纪实婚礼摄影的婚礼拍摄团队.专业的纪实风格为新人保留最珍贵的婚礼瞬间！'
  },
  'wedding-video': {
    'seoTitle':'重庆婚庆视频_重庆婚礼视频_婚庆背景图片_金色百年婚礼图片',
    'seoKeywords':'重庆婚庆视频|重庆婚礼视频|婚庆公司推荐|重庆婚嫁网',
    'seoDescription':'金色百年婚礼视频为新人婚礼当天提供视频跟拍服务，以“温馨、浪漫、感动”为内容，记录新人美好婚礼瞬间，全程定制属于新人的爱情光影。该板块着重婚礼流程记录，纪实性强，有针对性性。'
  },
  'f4': {
    'seoTitle':'重庆婚庆主持人_重庆婚礼司仪_重庆婚礼主持人_重庆司仪_重庆婚庆礼仪',
    'seoKeywords':'重庆婚礼主持人|重庆婚庆主持人多少钱|重庆找婚庆主持人哪里好|重庆婚礼司仪哪家好',
    'seoDescription':'选婚礼人是金色百年婚庆定制子版块之一，是金色百年“婚庆定制”服务内容之一，线上提供婚礼“四大金刚”相关内容，通过线上曝光金色百年主持人、化妆师、摄影师、摄像师相关信息，新人可以通过金色百年官网自主选择婚礼人，有利于新人自主把握婚礼过程，加强新人与金色百年互动，提升金色百年服务内容和形象！'
  },
  'scheme-require': {
    'seoTitle':'重庆婚庆需求_重庆婚庆规格_重庆定制婚庆_重庆定制婚礼',
    'seoKeywords':'婚庆需求提|交定制婚礼',
    'seoDescription':'该板块是金色百年婚庆定制子板块之一，是O2O线上引流线下平台，该板块利用金色百年官网平台，引导线上客户进行需求备案，提交客户需求，线下相关工作人员进行实时反馈，拉拢客户，进行签单。'
  },
  'adv': {
    'seoTitle':'',
    'seoKeywords':'',
    'seoDescription':''
  },
  'dress': {
    'seoTitle':'',
    'seoKeywords':'',
    'seoDescription':''
  },
  'dress-details': {
    'seoTitle':'',
    'seoKeywords':'',
    'seoDescription':''
  },
  'movie': {
    'seoTitle':'重庆微电影_婚纱摄影微电影_婚礼视频_婚礼微电影_婚宴微电影_结婚跟拍_婚纱摄影MV_婚礼即时MV_金色百年婚纱摄影',
    'seoKeywords':'结婚微电影|结婚MV|婚纱摄影微电影|婚纱照微电影|婚纱照MV|婚纱摄影MV',
    'seoDescription':'金色百年婚礼微电影，专为新人提供优质的婚礼影像服务。服务内容包括婚礼跟拍、现场快剪、微电影、MV等，全方位满足新人不同层次的婚礼影像需求。金色百年婚礼微电影服务团队把时尚气质和人文理念融入到婚礼影像的制作中，把婚礼最真实、最感人的一面呈现给新人。'
  },
  'movie-details': {
    'seoTitle':'',
    'seoKeywords':'',
    'seoDescription':''
  },
  'supply': {
    'seoTitle':'重庆婚礼用品批发市场_婚礼布置用品_婚庆道具_婚礼必备用品_结婚用品_婚庆用品',
    'seoKeywords':'婚礼用品|结婚用品|婚庆用品|婚庆道具|婚礼糖盒',
    'seoDescription':'金色百年为新人提供最新潮时尚的婚礼用品，内容包括请柬、喜糖、喜糖包装、烛台蜡烛、香槟、鲜花系列、床上用品、门窗车贴、红包、席卡、签名册、金笔、拉花配件、气球礼花彩带、花束等等。根据不同的婚礼需求和婚礼场合，为新人提供周全妥当的婚礼用品。'
  },
  'car': {
    'seoTitle':'重庆婚车租凭网_婚庆租车_汽车租凭_婚车装饰图片_婚车价目表',
    'seoKeywords':'重庆婚车租车|婚车装饰图片|婚车价目表|婚车网婚庆租车',
    'seoDescription':'金色百年婚礼租车为新人提供五星服务保障体系。让新人在婚礼过程中能享受到“省心订车、用心安排、贴心服务、愉悦体验、安全用车”五大服务保障，让婚礼成为新人一生中最浪漫的回忆。'
  },
  'active': {
    'seoTitle':'',
    'seoKeywords':'',
    'seoDescription':''
  },
}


export {
  ComponentsIndex,
  ComponentsSeo
}
