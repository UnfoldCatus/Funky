import _ from 'lodash'
const BaseConfig = {
  baseUrl:(process.env.NODE_ENV === 'production')?'//cq.jsbn.com/api/':'//cd.jsbn.com:7001/api/',
  buildUrl:function(params,urlTemplate){
      /*
        客户端渲染时， 由于是外部引入脚本的方式
        <script class='J_Matrix' data-params='{"id":124}' scr='xxx.min.js' />
        所以，可以从data-params取得传入的参数。然后在组件被render的时候，传入给组件的dataParams字段
      */
      let paramsUrl = urlTemplate//SampleDetailsConfig['SampleDetails'].dataUrl || undefined
      if (_.size(params)>0 && paramsUrl) { //参数获取正确
        /**
        例如url为: /sample/:id/:typeId
        传入的参数为: {id:123,typeId:2343}
        **/
        _.each(params,(v,k)=>{
          paramsUrl = paramsUrl.replace(':'+k,v)
        })

        return BaseConfig.baseUrl + paramsUrl
    }
  }
}
export { BaseConfig }
