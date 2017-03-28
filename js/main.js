
/* ==========================================================================
   #SHOW/HIDE HEADER
   ========================================================================== */

$(function() {

	var previousScroll = 0, // previous scroll position
		menuOffset = 70, // height of menu (once scroll passed it, menu is hidden)
		detachPoint = 220, // point of detach (after scroll passed it, menu is fixed)
		hideShowOffset = 5, // scrolling value after which triggers hide/show menu
		header = $('.page-head');

	$(window).scroll(function() {

		if (header.hasClass('expanded')) return;

		var currentScroll = $(this).scrollTop(),
			scrollDifference = Math.abs(currentScroll - previousScroll);

		// if scrolled past menu
		if (currentScroll > menuOffset) {
			// if scrolled past detach point add class to fix menu
			if (currentScroll > detachPoint) {
				var value = parseInt(header.css('transform').split(',')[5]);
				console.log(value);
				if (!header.hasClass('transitioning') && !header.hasClass('detached') && value != -110) {
					header.addClass('transitioning').one('transitionend', function() {
						console.log('transitionend');
						header.removeClass('transitioning');
						if ($(this).scrollTop() > detachPoint) header.addClass('detached');
					});
				} else if (!header.hasClass('transitioning') && !header.hasClass('detached')) {
					header.addClass('detached');
				}
			}

			// if scrolling faster than hideShowOffset hide/show menu
			if (scrollDifference >= hideShowOffset) {
				if (currentScroll > previousScroll) {
					// scrolling down; hide menu
					if (!header.hasClass('invisible'))
						header.addClass('invisible');
				} else {
					// scrolling up; show menu
					if (header.hasClass('invisible'))
						header.removeClass('invisible');
				}
			}
		} else {
			// only remove ÒdetachedÓ class if user is at the top of document (menu jump fix)
			if (!currentScroll) {
				header.removeClass('detached');
			}
		}

		// If user is at the bottom of document show menu.
		if ($(window).height() + currentScroll == $(document).height()) {
			header.removeClass('invisible');
		}

		// Replace previous scroll position with new one.
		previousScroll = currentScroll;
	});
});





/* ==========================================================================
   #SHOW/HIDE NAVIGATION
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
			}, 500);

		} else {
			$('body').removeClass('hide-nav').addClass('show-nav');
		}
		// Deactivate the default behavior of going to the next page on click.
		return false;
	});
});





/* ==========================================================================
   #PAGE FADE
   ========================================================================== */

/*
$(document).ready(function() {

	//$('body').css('display', 'none');
	//$('body').fadeIn(200);

	$('a:not(.page-head__toggle)').click(function(event) {
	//$('[href*="futureandco.tv/"]').click(function() {
		event.preventDefault();
		newLocation = this.href;
		$('body').fadeOut(150, newpage);
	});
		
	function newpage() {
		window.location = newLocation;
		$('body').show();
	}
});
*/

$(document).ready(function() {

    $('a:not(.page-head__toggle)').click(function(event) {
        event.preventDefault();
        newLocation = this.href;
        $('body').fadeOut(150, newpage);
    });

    function newpage() {
		window.location = newLocation;
		$('body').addClass('hide-nav');
		
		setTimeout(function() {
			$('body').show().removeClass('show-nav hide-nav');
		}, 0);
	}
});



/* ==========================================================================
   #SVG4EVERYBODY
   ========================================================================== */

/* 
 * Adds classes to specified navigation element when page is scrolled up/down.
 */
 
$(function(){
	svg4everybody();
});





/* ==========================================================================
   #FITVIDS.JS
   ========================================================================== */

/* 
 * For responsive Vimeo and YouTube video embeds!
 *
 * 1. Target your .container, .wrapper, .post, etc.
 */

$(document).ready(function(){
	$(".masthead__frame").fitVids(); /* [1] */
});





/* ==========================================================================
   #CUSTOM DROPDOWN
   ========================================================================== */

/* 
 * Custom dropdown for filter options with sub-level.
 */
 
/*
function DropDown(el) {
	this.dd = el;
	this.placeholder = this.dd.children('.filter__link');
	this.opts = this.dd.find('.filter__sub-item');
	this.val = '';
	this.index = -1;
	this.initEvents();
}

DropDown.prototype = {
	initEvents : function() {
		var obj = this;

		obj.dd.on('click', function(event){
			$(this).toggleClass('active');
			return false;
		});

		obj.opts.on('click',function(){
			var opt = $(this);
			obj.val = opt.text();
			obj.index = opt.index();
			obj.placeholder.text(obj.val);
		});
	},
	getValue : function() {
		return this.val;
	},
	getIndex : function() {
		return this.index;
	}
}

$(function() {
	var dd = new DropDown( $('.wrapper-dropdown-3') );

	$(document).click(function() {
		// all dropdowns
		$('.wrapper-dropdown-3').removeClass('active');
	});

});
*/

$('.filter__link, .filter__sub-link').on('click', null, null, function(event) {
	$('.current').removeClass('current');
	if ($(this).parents().eq(2).hasClass('filter__item--has-dd')) {
		$(this).parents().eq(2).children('a').text($(this).text());
		$(this).parents().eq(2).children('a').addClass('current');
	} else {
		$('.filter__item--has-dd').children('a').text('TV Commercials');
		$(this).addClass('current');
	}
});




/* ==========================================================================
   #GOOGLE MAP
   ========================================================================== */

/* 
 * When the window has finished loading create our google map below.
 *
 * 1. IF Statement to only run script if map is present. Otherwise it causes
 *    console errors.
 */
 
if (document.getElementById('map')) {
	google.maps.event.addDomListener(window, 'load', init);
}

/* 
 * Basic options for a simple Google Map. For more options see:
 * https://developers.google.com/maps/documentation/javascript/reference#MapOptions
 *
 * 1. How zoomed in you want the map to start at (always required)
 * 2. The latitude and longitude to center the map (always required).
 * 3. How you would like to style the map. This is where you would paste any
 *    style found on Snazzy Maps.
 * 4. Prevent map from being draggable.
 * 5. Hide map/satellite toggle.
 * 6. Hide "Street View" button.
 */
 
function init() {
	
	var mapOptions = {
		zoom: 15, /* [1] */ 
		center: new google.maps.LatLng(54.969056, -1.627551), /* [2] */ 
		//draggable: false, /* [4] */
		mapTypeControl: false, /* [5] */
		streetViewControl: false, /* [6] */
		styles: /* [3] */
		/* Tweaked version of: https://snazzymaps.com/style/8097/wy */
		// Hide 'Road > Highway > Labels' then re-enabled 'Road > Controlled Access > Labels. Due to Google Map default colouring, turning the labels to grey made the Highway road labels illegible.
		[{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"},{"color":"#404546"},{"weight":".25"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"weight":"2"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"weight":"3"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"all","stylers":[{"visibility":"on"},{"weight":".75"},{"color":"#b1b6b7"}]},{"featureType":"transit.station","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"color":"#404546"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"visibility":"on"},{"hue":"#b7ff00"},{"gamma":"0.80"},{"saturation":"-20"},{"lightness":"0"},{"weight":"1"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff" }]}]
	};

	/* 
	 * Get the HTML DOM element that will contain your map. We are using a div with
	 * id="map" seen below in the <body>
	 */
	
	 var mapElement = document.getElementById('map');
	
	/* 
	 * Create the Google Map using our element and options defined above.
	 *
	 * 1. Map varible.
	 * 2. Marker variable so we can specify a retina image and resize.
	 */
	 
	var map = new google.maps.Map(mapElement, mapOptions); /* [1] */
	var mapIcon = new google.maps.MarkerImage("img/interface/map-marker@2x.png", null, null, null, new google.maps.Size(100,78)); /* [2] */
	
	/* 
	 * Let's also add a marker while we're at it.
	 */
	 
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(54.969056, -1.627551),
		map: map,
		flat: true,
		title: 'Future&Co.',
		icon: mapIcon,
		//animation: google.maps.Animation.DROP
	});
	
	/* 
	 * Center Google map on browser resize.
	 */
	
	google.maps.event.addDomListener(window, "resize", function() {
	    var center = map.getCenter();
	    google.maps.event.trigger(map, "resize");
	    map.setCenter(center); 
	});
}

