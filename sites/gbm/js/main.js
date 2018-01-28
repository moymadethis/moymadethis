
/* ==========================================================================
   #MMENU (plugin)
   ========================================================================== */
   
/* 
 * Slide-out mobile menu with sub-menu support.
 * http://mmenu.frebsite.nl
 */

$(document).ready(function() {
	$(".site-nav").mmenu({
		// Options
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
 * Filter toggle.
 */

// media query event handler
if (matchMedia) {
  const mq = window.matchMedia("(min-width: 1024px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    $(".filter-toggle").click(function(){
	    $(".grid").toggleClass("hide-filters");
	});
  } else {
    $(".filter-toggle").click(function(){
	    $(".filters").toggleClass("open");
	});
  }

}





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
        
