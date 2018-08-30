
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


/* 
 * Sliding Line.
 */






/* ==========================================================================
   #Simple Accordion
   ========================================================================== */

$('.accordion').find('.accordion__title').click(function(){
	$(this).toggleClass('open');
	$(this).next().slideToggle('fast');
});





/* ==========================================================================
   #RANGE SLIDER
   ========================================================================== */
   
/* 
 * RangeSlider.JS
 */
 
$('.input-slider').rangeslider({
    polyfill : false
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
		infinite: false,
		fade: true,
		cssEase: 'ease-out',
		speed: 300
	});
});

/* 
 * Creates classes to enable responsive navigation.
 */
 
$(document).ready(function() {
  $('.slick-carousel').slick({
      //centerMode: true,
      centerPadding: '0',
      slidesToShow: 3,
      arrows: false,
      dots: true,
      responsive: [{
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
    })
    // Additional code to make each slide the same height (`- 30` relates to the `margin: 15px 0` set on the slideTrack.
    .on('setPosition', function(event, slick) {
		slick.$slider.find(".slick-slide .tile:not(.position-set)").addClass('position-set').css('height', slick.$slideTrack.height() - 30 + 'px');
    });
});


/* 
 * Slideshow form (for apply page)
 */

$(document).ready(function(){
	$('.slick-form').slick({
		adaptiveHeight: true,
		arrows: true,
		appendArrows: $('.slick-form-arrows'),
		prevArrow: '<span class="btn">Go Back</span>',
		nextArrow: '<span class="btn">Next Slide</span>',
		dots: false,
		infinite: false
	});
});