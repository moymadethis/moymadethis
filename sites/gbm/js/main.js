
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



$(".filter-toggle--desktop").click(function(){
	$(this).toggleClass("active");
	 $(".grid").toggleClass("show-filters");
});





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
 */

document.addEventListener('DOMContentLoaded', function() {

	var mn = $('.page-head'),
	core = $('.page-head + .band'), // Only target first `.band`.
	mns = 'page-head--fixed',
	bit, hdr;

	$(window).resize(function() {
	
		bit = mn.outerHeight();
		hdr = $('.info-bar').outerHeight();
	})
	
	.resize().scroll(function() {

		if ($(this).scrollTop() > hdr) {
			mn.addClass(mns);
			core.css('margin-top', bit);
		} else {
			mn.removeClass(mns);
			core.attr('style', '');
		}
	})
	
	.on('load', function() {
		$(this).scroll();
	});
});
