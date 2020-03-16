
/* ==========================================================================
   #SLICK
   ========================================================================== */
   
$(document).ready(function() {
  
	$('.slick-carousel').slick({
		centerPadding: '0',
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		dots: false,
		prevArrow: '<a class="slick-arrow slick-arrow--prev"><span>&larr;</span></a>',
		nextArrow: '<a class="slick-arrow slick-arrow--next"><span>&rarr;</span></a>',
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1
			}
		}]
	});
});





/* ==========================================================================
   #IMAGE SWAP
   ========================================================================== */

/* 
 * Video type varibles.
 */   
   
var VIDEO_TYPES = {
	mp4: "video/mp4",
	webm: "video/webm",
	ogv: "video/ogg"
};

/* 
 * Notes.
 */
 
var cached = {};
var overlay_video = $(".carousel__bg video");
var overlay_img = $(".carousel__bg img");
var overlay = $(".carousel__bg");

$(document).ready(function() {
	
	$(".carousel__item").on("mouseenter", function() {
		var item = $(this),
		spot = $(this).index(".carousel__item"),
		value = item.data("src");

		overlay_video.empty();

		var overlay_item;
		overlay.fadeTo(0, 0);
		// Videos will have an array ur urls
		var is_video = value instanceof Array;
		if (is_video) {
			overlay_item = overlay_video;
			overlay_img.attr("src", "");

			overlay_video.append(
				value.map(url => {
					var extension = url.split(".").pop();
					var type = VIDEO_TYPES[extension];
					return `<source src="${url}" type="${type}">`;
				})
			);
		} else {
			overlay_item = overlay_img;
			overlay_img.attr("src", value);
		}
		// Force the video element to reload
		overlay_video.get(0).load();

		if (!overlay_item.complete && !cached[spot]) {
			cached[spot] = true;
			overlay.addClass("loading");

			overlay_item.one(is_video ? "loadeddata" : "load", function() {
				overlay.removeClass("loading");
				overlay.fadeTo(300, 1);
			});
		} else overlay.fadeTo(300, 1);
	})

	.on("mouseleave", function() {
		overlay.finish();
	});
	
});
