
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

/*
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
	var $icon = $(".filter-toggle");
      
	$icon.on("click", function() {
		API.open();
	});
});
*/



// Testing media queries with jQuery
// Using matchMedia
// By Ravenous - July, 2014


(function($) {
	
	/*
	* We need to turn it into a function.
	* To apply the changes both on document ready and when we resize the browser.
	*/
	
	function mediaSize() { 
		/* Set the matchMedia */
		if (window.matchMedia('(min-width: 1024px)').matches) {
		/* Changes when we reach the min-width  */
		
			$(".filter-toggle").click(function(){
			    $(".grid").toggleClass("hide-filters");
			});

		} else {
		/* Reset for CSS changes – Still need a better way to do this! */
		
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
			var $icon = $(".filter-toggle");
		      
			$icon.on("click", function() {
				API.open();
			});
			
		}
	};
	
	/* Call the function */
  mediaSize();
  /* Attach the function to the resize event listener */
	window.addEventListener('resize', mediaSize, false);  
	
})(jQuery);





/* ==========================================================================
   #UNIFORM (plugin)
   ========================================================================== */
   
/* 
 * Slide-out mobile menu with sub-menu support.
 * http://opensource.audith.org/uniform/
 */
 
$("select, input[type='file'], input[type='checkbox'], input[type='radio']").uniform({selectAutoWidth: false, fileButtonClass: 'btn'});





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

   
/*
var stickyHeader = $('.page-head').offset().top;

$(window).on( 'scroll', function(){
	if ($(window).scrollTop() >= stickyHeader) {
		$('.page-head').addClass('page-head--fixed');
	} else {
		$('.page-head').removeClass('page-head--fixed');
	}
});
*/

/*
var stickyHeader = $('.page-head').offset().top;
var s = $(".page-head"),
	navHeight = s.height();

$(window).on( 'scroll', function(){
	if ($(window).scrollTop() >= stickyHeader) {
		$('.page-head').addClass('page-head--fixed');
		$('body').css('marginTop', navHeight);
	} else {
		$('.page-head').removeClass('page-head--fixed');
		$('body').css('marginTop', '0');
	}
});
*/



/* 
 * Simple accordion.
 */
 
$(document).ready(function($) {
	// Add class of `.open` to first `.accordion__title` as it is set to `display: block` in CSS.
	//$('.accordion__item:first-child .accordion__title').addClass('open');
	// Accordion fuctions.
	$('.accordion').find('.accordion__title').click(function(){
		// Add class to title.
		//$(this).toggleClass('open');
		//Expand or collapse this panel.
		$(this).next().slideToggle('fast');
	});
});
        
