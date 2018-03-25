
/* ==========================================================================
   #MMENU (plugin)
   ========================================================================== */
   
/* 
 * Slide-out mobile menu with sub-menu support.
 * http://mmenu.frebsite.nl
 */
 
/* 
 * Main Menu navigation.
 */

$(document).ready(function() {
	$(".site-nav").mmenu({
		// Options
		navbar: {
			title: false
		},
		navbars: {
			"position": "top",
			"content": [
				"searchfield"
			]
		},
		"searchfield": {
            "panel": true,
            "showSubPanels": false,
            "showTextItems": true
		}
	}, {
		// Configuration
		clone: true,
		offCanvas: {
			pageSelector: ".page"
		},
		classNames: {
			selected: "active",
			fixedElements: {
				fixed: "fixed",
				sticky: "sticky"
            }
		},
		
	});
	
	var API = $(".site-nav").data("mmenu");
	var $icon = $(".mmenu-toggle");
      
	$icon.on("click", function() {
		API.open();
	});

	API.bind( "open:finish", function() {
		setTimeout(function() {
			$icon.addClass( "is-active" );
		}, 100);
	});
	
	API.bind( "close:finish", function() {
		setTimeout(function() {
			$icon.removeClass( "is-active" );
		}, 100);
	});
});

/* 
 * Filter/categories navigation.
 */

$(document).ready(function() {
	$(".filters").mmenu({
		// Options
		navbar: {
			title: "Filters"
		}
	}, {
		// Configuration
		clone: true,
		offCanvas: {
			pageSelector: ".page"
		},
		classNames: {
			selected: "active"
		}
	});
	
	var API = $(".filters").data("mmenu");
	var $icon = $(".filter-toggle--mobile");
      
	$icon.on("click", function() {
		API.open();
	});
});


/* 
 * Toggle for desktop filters when MMENU isn't used. Basically just shows/hides
 * left-side column when triggered.
 */

$(".filter-toggle--desktop").click(function(){
	$(this).toggleClass("active");
	$(".grid").toggleClass("show-filters");
});


/* 
 * Attempted using 1 button and using `mediaSize` to change the function of the
 * button. Works fine on desktop and when you scale the browser down ...but when
 * the browser is scaled back up to desktop the button triggers both the desktop
 * filters and MMENU.
 */
 
/*
(function($) {
	
	function mediaSize() { 
		// Set the matchMedia
		if (window.matchMedia('(min-width: 768px)').matches) {
			// Changes when we reach the min-width
			$(".filter-toggle").click(function(){
				$(this).toggleClass("active");
				$(".grid").toggleClass("show-filters");
			});
		} else {
			var API = $(".filters").data("mmenu");
			var $icon = $(".filter-toggle");
		      
			$icon.on("click", function() {
				API.open();
			});
		}
	};
	
	// Call the function
	mediaSize();
	// Attach the function to the resize event listener
	window.addEventListener('resize', mediaSize, false);  
	
})(jQuery);
*/





/* ==========================================================================
   #SLICK (plugin)
   ========================================================================== */
 
/* 
 * Create responsive slideshows.
 * http://kenwheeler.github.io/slick
 */
 
$(document).ready(function(){
	$('.slick').slick({
		arrows: false,
		dots: true,
		infinite: false
	});
});





/* ==========================================================================
   #SVG4EVERYBODY (polyfill)
   ========================================================================== */

/* 
 * IE9+ support for SVG sprites.
 * https://github.com/jonathantneal/svg4everybody
 */
 
$(function(){
	svg4everybody();
});





/* ==========================================================================
   #STICKYFILL (polyfill)
   ========================================================================== */

/* 
 * IE9+ support for `position: sticky;`.
 * https://github.com/wilddeer/stickyfill
 */
 
$(function(){ 
	var elements = document.querySelectorAll('.sticky');
	Stickyfill.add(elements);
});





/* ==========================================================================
   #CUSTOM JS SNIPPETS
   ========================================================================== */
   
/* 
 * Sticky header.
 *
 * 1. Main header/nav.
 * 2. We need to add a margin to counter the space left by the removal of the
 *    header, otherwise the content will jump. 'eq(0)' gets first `.band` after
 *    the header. NOTE: Header is always followed by `.band` div.
 * 3. Create class to manipulate fixed position.
 */

document.addEventListener('DOMContentLoaded', function() {

	var mn = $('.page-head'), 	/* [1] */
	core = $('.band').eq(0),	/* [2] */
	fix = core.attr('style') || '',
	mns = 'fixed-header',		/* [3] */
	bit, hdr;
	
	$(window).resize(function() {
	
		bit = mn.outerHeight();
		hdr = $('.info-bar').outerHeight();
	})
	
	.resize().scroll(function() {
	
		if ($(this).scrollTop() > hdr) {
			//mn.addClass(mns);
			$("body").addClass(mns);		// Was on the `page-head` element but moved to `body` so I can also target the `mini-cart` when nav is fixed.
	  		core.css('margin-top', bit);
		} else {
			$("body").removeClass(mns);
			//mn.removeClass(mns);
			core.attr('style', fix);
		}
	})
	
	.on('load', function() {
		$(this).scroll();
	});
});