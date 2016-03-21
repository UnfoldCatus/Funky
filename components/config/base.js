import _ from 'lodash'
const Mode = process.env.NODE_ENV || $('#J_Matrix').attr('data-mode')
const BaseConfig = {
  baseUrl:(Mode === 'production')?'//cq.jsbn.com/api/':'//cd.jsbn.com:7001/api/',
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
  },
  /*
  用于列表搜索条件的绑定。 传入的type参数有single 和 multi 两个值 分别对应单选和多选

  */
  setupFilterClick:function(type,component){
    let filterParams = {}
    if ('single' === type) {
      filterParams = {
        'all':{}
      }
      $('.J_FilterCtrl').on('click','.tab-box',(evt)=>{
        if($(evt.target).hasClass('tab')){
           $('.tab-box').find('.tab').removeClass('tab-sel')
           $(evt.target).addClass('tab-sel')
           _.unset(filterParams,'all')
           filterParams['all'] = {}
           filterParams['all'][$(evt.target).attr('data-key')] = $(evt.target).attr('data-value')
           if ( ''===$(evt.target).attr('data-value') ) {
             _.unset(filterParams,'all.'+$(evt.target).attr('data-key'))
           }

           console.log(JSON.stringify(filterParams,null,4));
           component.setState({
             params:_.merge(filterParams['all'],component.state.params)
           })

        }
      })
    }else {
      $('.J_FilterCtrl').on('click','.tab-box',(evt)=>{
        if($(evt.target).hasClass('tab')){
           $(evt.currentTarget).find('.tab').removeClass('tab-sel')
           $(evt.target).addClass('tab-sel')

           let keys = $(evt.target).attr('data-key').split(',')
           let values = $(evt.target).attr('data-value').split(',')
           _.each(keys,(v,k)=>{
              filterParams[v] = values[k]
              if ( ''===values[k] || undefined === values[k]) {
                _.unset(filterParams,v)
              }
           })


           console.log(filterParams);

           component.setState({
             params:_.merge(filterParams,component.state.params)
           })
        }
      })
    }
  }
}
export { BaseConfig }
