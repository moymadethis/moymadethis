function WidthChange(e){e.matches?$(".filter-toggle").click(function(){$(".grid").toggleClass("hide-filters")}):$(".filter-toggle").click(function(){$(".filters").toggleClass("open")})}if($(document).ready(function(){$(".site-nav").mmenu({},{clone:!0,offCanvas:{pageSelector:".page"},classNames:{selected:"active"}});var e=$(".site-nav").data("mmenu"),i=$(".mmenu-toggle");i.on("click",function(){e.open()}),e.bind("open:finish",function(){setTimeout(function(){i.addClass("is-active")},100)}),e.bind("close:finish",function(){setTimeout(function(){i.removeClass("is-active")},100)})}),$("select, input[type='file'], input[type='checkbox'], input[type='radio']").uniform({selectAutoWidth:!1,fileButtonClass:"btn"}),$(document).ready(function(){$(".slick").slick({arrows:!1,dots:!0,infinite:!1})}),$(function(){svg4everybody()}),$(function(){var e=document.querySelectorAll(".sticky");Stickyfill.add(e)}),matchMedia){const mq=window.matchMedia("(min-width: 1024px)");mq.addListener(WidthChange),WidthChange(mq)}$(document).ready(function($){$(".accordion").find(".accordion__title").click(function(){$(this).next().slideToggle("fast")})});