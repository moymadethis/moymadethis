
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

$(function() {

    var $el, leftPos, newWidth,
        $mainNav = $(".site-nav");
    
    $mainNav.append("<div class='site-nav__line'></div>");
    var $magicLine = $(".site-nav__line");
    
    $magicLine
        .width($(".current-menu-item").width())
        .css("left", $(".current-menu-item").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());
        
    $(".site-nav__list li a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });    
    });
});





/* ==========================================================================
   #Simple Accordion
   ========================================================================== */

$('.accordion').find('.accordion__title').click(function(){
	$(this).toggleClass('open');
	$(this).next().slideToggle('fast');
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