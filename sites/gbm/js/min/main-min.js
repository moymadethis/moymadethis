$(document).ready(function(){$(".site-nav").mmenu({navbar:{title:!1},navbars:{position:"top",content:["searchfield"]},searchfield:{panel:!0,showSubPanels:!1,showTextItems:!0}},{clone:!0,offCanvas:{pageSelector:".page"},classNames:{selected:"active",fixedElements:{fixed:"fixed",sticky:"sticky"}}});var e=$(".site-nav").data("mmenu"),t=$(".mmenu-toggle");t.on("click",function(){e.open()}),e.bind("open:finish",function(){setTimeout(function(){t.addClass("is-active")},100)}),e.bind("close:finish",function(){setTimeout(function(){t.removeClass("is-active")},100)})}),$(document).ready(function(){$(".filters").mmenu({navbar:{title:"Filters"}},{clone:!0,offCanvas:{pageSelector:".page"},classNames:{selected:"active"}});var e=$(".filters").data("mmenu"),t=$(".filter-toggle--mobile");t.on("click",function(){e.open()})}),$(".filter-toggle--desktop").click(function(){$(this).toggleClass("active"),$(".grid").toggleClass("show-filters")}),$(document).ready(function(){$(".slick").slick({arrows:!1,dots:!0,infinite:!1})}),$(function(){svg4everybody()}),$(function(){var e=document.querySelectorAll(".sticky");Stickyfill.add(e)}),document.addEventListener("DOMContentLoaded",function(){var e=$(".page-head"),t=$(".band").eq(0),n=t.attr("style")||"",i="fixed-header",o,s;$(window).resize(function(){o=e.outerHeight(),s=$(".info-bar").outerHeight()}).resize().scroll(function(){$(this).scrollTop()>s?($("body").addClass(i),t.css("margin-top",o)):($("body").removeClass(i),t.attr("style",n))}).on("load",function(){$(this).scroll()})});