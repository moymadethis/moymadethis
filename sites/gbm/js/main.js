
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
			pageSelector: "#page"
		},
		classNames: {
			selected: "active",
			fixedElements: {
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
   #Simple Overlays
   ========================================================================== */
   
$(".overlay-link").click(function() {
	target = "#overlay-"+$(this).data("overlay");
	$(".overlay").hide();
	$(target).show();
	$( "body" ).css( "overflow" , "hidden" ); //disable the scroll
});

$(".overlay__close").click(function() {
	$(".overlay").hide();
	$( "body" ).css( "overflow" , "auto" );  //enables the scroll back
});





/* ==========================================================================
   #Simple Accordion
   ========================================================================== */

$('.accordion').find('.accordion__title').click(function(){
	$(this).toggleClass('open');
	$(this).next().slideToggle('fast');
});





/* ==========================================================================
   #Simple Overlays
   ========================================================================== */
   
$('[data-toggle="datepicker"]').datepicker();


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

