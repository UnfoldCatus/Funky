var $win = $(window);
var slider = $("#slider_home");
var home_nav_fixed = $("#home_nav_fixed");
var $main_rig_func_box = $("#main_rig_func_box");
var $func_box = $("#func_box");
var $disgin_box = $(".disgin-box");
var $hover_box = $(".hover-box");
var $phone_window = $("#phone_window");
var $qr_code_box = $("#qr_code_box")
var isFixed = false;
var date1 = new Date().getTime();
var date2;

tipTanTip(204,1);
$win.bind("mousewheel scroll", function() {
    date2 = new Date().getTime();

    $phone_window.width(0);

    if (/safari/.test(navigator.userAgent.toLowerCase())) {
        if ((date2 - date1) > 10) {
            date1 = date2;
        }
    } else {
    }

    if ($(this).scrollTop() >= 720) {
      $($hover_box[4]).css({display:"block"});
    }else{
      $($hover_box[4]).css({display:"none"});
    }
    // if ($(this).scrollTop() >= 720) {
    //     if(!isFixed){
    //         isFixed = true;
    //         home_nav_fixed.animate({
    //             top: 0
    //         });
    //     }
    //
    //     tipTanTip(204,1);
    //     $hover_box.each(function(i){
    //         if(i >= 4){
    //             $(this).css({display:"block"});
    //         }
    //     });
    // } else if ($(this).scrollTop() < 720){
    //     if(isFixed){
    //         isFixed = false;
    //         home_nav_fixed.animate({
    //             top: -80
    //         });
    //     }
    //
    //     tipTanTip(0,0.2);
    // }
});

//方案老大不喜欢。 1. 没有美女头像 2. 不直观，没有马上能找到在线咨询的地方。
// $main_rig_func_box.bind("mouseenter",function(){
//     if($win.scrollTop() >= 720){
//         $hover_box.each(function(i){
//             $(this).css({display:"block"});
//         });
//         tipTanTip(204,1);
//     }else if ($win.scrollTop() < 720){
//         $hover_box.each(function(i){
//             $(this).css({display:"block"});
//             if(i >= 4){
//                 $(this).css({display:"none"});
//             }
//         });
//         tipTanTip(204,1);
//     }
// });

$($hover_box[1]).bind("mouseenter",function(){
    $phone_window.width(120);
}).bind("mouseleave",function(){
    $phone_window.width(0);
});

$($hover_box[2]).bind("mouseenter",function(){
    $qr_code_box.width(100);
}).bind("mouseleave",function(){
    $qr_code_box.width(0);
});

function tipTanTip(a,b,f){
    $($hover_box[4]).css({display:"none"});
    $func_box.height(a);
    $disgin_box.each(function(i){
        $(this).css({opacity:b});
    });
}

$("#back_top").bind("click",function(){
    $win.scrollTop(0);
});

$("#pop_chat").bind("click",function(){
    $('#live800iconlink').trigger('click');

});
