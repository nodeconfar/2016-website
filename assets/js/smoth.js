function onScroll(a){var b=$(document).scrollTop();$(".menu-call a").each(function(){var a=$(this),c=$(a.attr("href"));c.position().top<=b&&c.position().top+c.height()>b?($(".menu-call ul li a").removeClass("active"),a.addClass("active")):a.removeClass("active")})}$(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("body, html").animate({scrollTop:a.offset().top},1e3),!1}});var a=$(".menu-call").offset();$(window).scroll(function(){$(window).scrollTop()>a.top?$(".menu-call").stop().animate({marginTop:$(window).scrollTop()-a.top+15}):$(".menu-call").stop().animate({marginTop:0})})}),$(document).ready(function(){$(document).on("scroll",onScroll),$('a[href^="#"]').on("click",function(a){a.preventDefault(),$(document).off("scroll"),$("a").each(function(){$(this).removeClass("active")}),$(this).addClass("active");var b=this.hash;$target=$(b),$(".call-for-speakers").stop().animate({scrollTop:$target.offset().top+2},500,"swing",function(){window.location.hash=b,$(document).on("scroll",onScroll)})})});