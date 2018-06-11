
/* ==========================================================================
   #NAVIGATION
   ========================================================================== */
 
/* 
 * Creates classes to enable responsive navigation.
 */

// Wait for the DOM to be ready (all elements printed on page regardless if 
// loaded or not).

$(function() {

	// Bind a click event to anything with the class "toggle-nav".
	$('.page-head__toggle').click(function() {
		if ($('body').hasClass('show-nav')) {
			$('body').removeClass('show-nav').addClass('hide-nav');

			setTimeout(function() {
				$('body').removeClass('hide-nav');
			}, 800);

		} else {
			$('body').removeClass('hide-nav').addClass('show-nav');
		}
		// Deactivate the default behavior of going to the next page on click.
		return false;
	});
});


/* ==========================================================================
   #SLICK
   ========================================================================== */
 
/* 
 * Creates classes to enable responsive navigation.
 */

$(document).ready(function(){
	$('.slick-slider').slick({
		adaptiveHeight: true,
		arrows: false,
		dots: true,
		infinite: false
	});
});

/* 
 * Creates classes to enable responsive navigation.
 */
 
$(document).ready(function(){
	$('.slick-carousel').slick({
	  centerMode: true,
	  centerPadding: '0',
	  slidesToShow: 3,
	  arrows: false,
	  dots: true,
	  responsive: [
	    {
	      breakpoint: 960,
	      settings: {
	        centerMode: true,
	        centerPadding: '120px',
	        slidesToShow: 1
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        centerMode: true,
	        centerPadding: '60px',
	        slidesToShow: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        centerMode: true,
	        centerPadding: '30px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});
});