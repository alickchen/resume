$(function(){
    //logo头像hover动画；
$(".logo").hover(
   	function(){
   	if (!$(".logo,.logo_1").is(":animated")) {
   	    
         $(".logo_1").fadeOut("slow"); 
                       }	
                      },
      function(){
   	  $(".logo_1").fadeIn("slow"); 
   	               
                  });
  //导航栏效果
  


   //内部链接平滑滑动；
   $('.navlink a').click(function () {
          
   	          var $idhref=$(this).attr("href");
               $('html, body').animate({
                   scrollTop:($($idhref).offset().top) }, 500);
                   return false;});
   $('.navbar-brand').click(function () {
         
               $('html, body').animate({
                   scrollTop: 0 }, 500);
                   return false;})
    $('#btn_aboutme').click(function () {
       
               $('html, body').animate({
                   scrollTop: ($("#aboutme").offset().top) }, 500);
                   return false;});
    $('#btn_contact').click(function () {
     
               $('html, body').animate({
                   scrollTop: ($("#contact").offset().top) }, 500);
                   return false;});
   //当滚动条滚动到导航条位置时，导航条变为fixed; 
   $(window).scroll(function(){
   	   if ($(window).scrollTop()>$("#aboutme").offset().top-95) {
   	   $(".navbar").removeClass("nav_ab").addClass("navbar-fixed-top");
       $("#aboutme").css("marginTop","90px");
              	}else{
              	$(".navbar").removeClass("navbar-fixed-top").addClass("nav_ab");
                $("#aboutme").css("marginTop","0px");
                
              	};


      //skill圆形进度条效果
       if ($(window).scrollTop()>($("#skill").offset().top-50)) {
           $('.circle').each(function(index, el) {
        var num = $(this).find('span').text() * 3.6;
        if (num<=180) {
            $(this).find('.right').css('transform', "rotate(" + num + "deg)");
        } else {
            $(this).find('.right').css('transform', "rotate(180deg)");
            $(this).find('.left').css('transform', "rotate(" + (num - 180) + "deg)");
        };
         }); }
    //滚动时导航栏样式变化
if ($(window).scrollTop()<($("#aboutme").offset().top-50)) {
    $(".navlink li").removeClass("on");
 }else if ($(window).scrollTop()>($("#aboutme").offset().top-50)&&$(window).scrollTop()<($("#experience").offset().top-50)) {
    $(".navlink li:eq(0)").addClass("on").siblings().removeClass("on");
  }else if ($(window).scrollTop()>($("#experience").offset().top-50)&&$(window).scrollTop()<($("#skill").offset().top-50)) {
    $(".navlink li:eq(1)").addClass("on").siblings().removeClass("on");
  } else if ($(window).scrollTop()>($("#skill").offset().top-50)&&$(window).scrollTop()<($("#project").offset().top-50)) {
    $(".navlink li:eq(2)").addClass("on").siblings().removeClass("on");
  } else if ($(window).scrollTop()>($("#project").offset().top-50)&&$(window).scrollTop()<($("#picture").offset().top-50)) {
    $(".navlink li:eq(3)").addClass("on").siblings().removeClass("on");
  } else if ($(window).scrollTop()>($("#picture").offset().top-50)&&$(window).scrollTop()<($("#ps").offset().top-50)) {
    $(".navlink li:eq(4)").addClass("on").siblings().removeClass("on");
  } else if ($(window).scrollTop()>($("#ps").offset().top-50)&&$(window).scrollTop()<($("#contact").offset().top-50)) {
    $(".navlink li:eq(5)").addClass("on").siblings().removeClass("on");
  } else if ($(window).scrollTop()>($("#contact").offset().top-50)) {
    $(".navlink li:eq(6)").addClass("on").siblings().removeClass("on");
  };



   });
  //aboutme树遮罩文字
  $(".aboutme_1").hover(
  	function () {
  		if (!$(".aboutme_tips").is(":animated")) {
			  	$(".aboutme_tips").fadeIn(1000);
			  	$(".aboutme_tips>p").fadeIn(3000);}
  	},
  	function () {
  		$(".aboutme_tips").fadeOut(5000);
  		$(".aboutme_tips>p").fadeOut(3000);}
  	);
 
//首页背景图片轮播
 var $bg1=$("#bg>.bg_slide").eq(0);
 var $bg2= $("#bg>.bg_slide").eq(1);
 var bg_length= $("#bg>.bg_slide").length-1;
 var bg_num=1;
 var showpic=$bg2;
 function bg_show(){
  if (bg_num<bg_length) {
     showpic.fadeIn(1000,function(){$(this).siblings().css("display","none");});
     bg_num++;
     showpic=showpic.next();
    }else{
    showpic.fadeIn(1000,function(){
            $bg1.css("display","block").siblings().css("display","none");
             });
    bg_num=1;
    showpic=$bg2;
    }
   };
  bg_show(); 
 var bgplay=setInterval(bg_show,4000);

//图册无限滚动    
     var segmentWidth=0;
     var  $scrollUl=$(".scroll_p ul");
     var  $scrollLi=$scrollUl.find("li");
       function run(){   
                      $scrollUl.animate({left:-segmentWidth/2},12000,"linear", function(){ $scrollUl.css("left","0px");}); 
       console.log(segmentWidth);
      }; 
      var scroll_play=setInterval(run,12000);
  $(".pic img:last").load(function(){
       $scrollLi.each(function(){
        segmentWidth += $(this)[0].offsetWidth;
          });
     console.log(segmentWidth);
});
 //图册hover停止
 $scrollUl.hover(function(){clearInterval(scroll_play);$scrollUl.stop();},function(){ 
  run();
   scroll_play=setInterval(run,12000);})
 //图册点击切换
$scrollLi.click(function(){
  var src=$(this).find("img").attr("alt");
  $("#bigpic .loading").css("display","block");
  $("#bigpic").find("img").attr("src",src).load(function(){
  $("#bigpic .loading").css("display","none");
  });

}).clone(true).appendTo($scrollUl);






});