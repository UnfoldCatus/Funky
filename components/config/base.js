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
  },
  fetchFunc : function(component,nextProps){
    if (null === nextProps) {
      return (component)=>{
        const loadMore=()=>{
          let currentIndex = component.state.currentIndex
          let totalPage = Math.ceil(component.state.count / component.props.params.pageSize)
          currentIndex = (currentIndex + 1 ) % totalPage
          let p = ''
          if (_.size(component.props.params)>0){
            p = '?'+$.param(_.omit(component.props.params,['pageIndex'])) + '&'+ $.param({
              'pageIndex':currentIndex+1
            })
          }
          fetch(component.props.baseUrl + component.props.dataUrl+p)
          .then(res=>{return res.json()})
          .then(j=>{
            let temp = component.state.dataStore
            temp[currentIndex] = j.data
            let t = _.flatten(temp.slice(0,currentIndex+1))
            if (t.length === component.state.count) {
              $('#J_MoreButton').hide()
            }
            component.setState({'data':t,'dataStore':temp,'currentIndex':currentIndex})
          })
        }
        const loadLess = ()=>{

        }
        if (component.props.dataUrl !== undefined) {
          let p = ''
          if (_.size(component.props.params)>0) {
            p = '?'+$.param(component.props.params)
          }
          fetch(component.props.baseUrl + component.props.dataUrl + p)
          .then(res => {return res.json()})
          .then(j=>{
            if (
              component.props.params.pageSize &&
              component.props.params.pageIndex &&
              parseInt(j.count)>parseInt(component.props.params.pageSize)*parseInt(component.props.params.pageIndex)
            ) {
              $('#J_MoreButton')
              .show()
              .on('click',loadMore)
              .on('dblclick',loadLess)
            }else {
              $('#J_MoreButton').hide() //只有一页或者压根就没有分页
            }
            let temp = []
            temp[0] = j.data
            component.setState({ data:j.data,count:j.count,dataStore:temp })
          })
        }
      }
    }else {
      return (component,nextProps)=>{
        if (nextProps.dataUrl !== undefined) {
          let p = ''
          if (_.size(nextProps.params)>0) {
            p = '?'+$.param(nextProps.params)
          }
          fetch(nextProps.baseUrl + nextProps.dataUrl + p)
          .then(res => {return res.json()})
          .then(j=>{
            if (
              nextProps.params.pageSize &&
              nextProps.params.pageIndex &&
              parseInt(j.count)>parseInt(nextProps.params.pageSize)*parseInt(nextProps.params.pageIndex)
            ) {
              $('#J_MoreButton').show()
            }else {
              $('#J_MoreButton').hide() //只有一页或者压根就没有分页
            }
            let temp = []
            temp[0] = j.data
            component.setState({ data:j.data,count:j.count,dataStore:temp,currentIndex:0 })
          })
        }
      }
    }

  }

}
export { BaseConfig }
