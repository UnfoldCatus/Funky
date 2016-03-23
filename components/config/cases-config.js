import { BaseConfig } from './base'
import _ from 'lodash'

const CasesConfig = {
  'Banner':[
    {'imageUrl':'//img2.jsbn.com/static/sjal.jpg'}
  ],
  'CasesCategory':{
    'resourceUrl':''
  },
  'MediaSlider':_.merge({
    'dataUrl':'cases/scheme_recommend',
    'aspectRatio':'120:68',
    'height':680,
    'params':{
      'pageSize':6,
      'pageIndex':1
    }
  },BaseConfig),
  'SchemeListItem':_.merge({
    'countPlugin':true,
    'dataUrl':'cases/scheme_list',
    'displayTextPrefix':'找到最佳案例',
    'displayTextSuffix':'套',
    'params':{
      'pageSize':12,
      'pageIndex':1
    }
  },BaseConfig),
  'StyleFilter':_.merge({
    'dataUrl':'caseStyle/all'
  },BaseConfig),
  'PriceFilter':_.merge({
    'conditions':[{
					name: '5000-10,000',
					minPrice: 5000,
					maxPrice: 10000

				}, {
					name: '10,000-15,000',
					minPrice: 10000,
					maxPrice: 15000

				}, {
					name: '15,000-20,000',
					minPrice: 15000,
					maxPrice: 20000

				}, {
					name: '20,000-30,000',
					minPrice: 20000,
					maxPrice: 30000

				}, {
					name: '30,000-50,000',
					minPrice: 30000,
					maxPrice: 50000

				}, {
					name: '50,000-100,000',
					minPrice: 50000,
					maxPrice: 100000

				}, {
					name: '100,000以上',
					minPrice: 100000,
					maxPrice: 9999999

				}]

  },BaseConfig)

}
export { CasesConfig }
