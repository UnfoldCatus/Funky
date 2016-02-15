;
(function($,undefined){
  'use strict'

  function adaptation(){
      var $adaptation = $('#adaptation');
      if($(window).width() <= 1600) $adaptation.attr('class','adaptation-1200 root-view');
      else $adaptation.attr('class','adaptation-1680 root-view');

      $(window).bind('resize',function(){
          if($(window).width() <= 1600) $adaptation.attr('class','adaptation-1200 root-view');
          else $adaptation.attr('class','adaptation-1680 root-view');
      });
  }
  $(function(){
    adaptation();
  });

})(jQuery,undefined)
