
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
   #NPROGRESS
   ========================================================================== */
   
$(function() {
	
	NProgress.configure({ 
		showSpinner: false
	});
	
	NProgress.start();
	
	setTimeout(function(){ 
		NProgress.done(); $('.nprogress-busy').addClass('nprogress-done');
	}, 1000);
	
});
   
    
    
    
    
/* ==========================================================================
   #SVG4EVERYBODY
   ========================================================================== */
 
$(function(){
	svg4everybody();
});





/* ==========================================================================
   #VIDEOS
   ========================================================================== */
   
/* 
 * Only plays a video when it enters the browser window.
 */
 
$(function() {

    var target = $('video').not('[autoplay="autoplay"]'),
        zenith, nadir;

    $(window).on('load resize', storeDimensions).scroll($.restrain(100, checkPlay));

    storeDimensions();

    target.each(function() {

        $(this).on('ended', function() {

            $(this).siblings('.player__flow').text('PLAY');
        });
    });

    $('.player__audio').click(function() {

        var media = $(this).siblings('video');

        $(this).text(function(i, v) {
            return v === 'MUTE' ? 'UNMUTE' : 'MUTE';
        });

        if (media[0].muted) media[0].muted = false;
        else media[0].muted = true;
    });

    $('.player__flow').click(function() {

        var media = $(this).siblings('video');

        media.addClass('managed');

        $(this).text(function(i, v) {
            return v === 'PLAY' ? 'PAUSE' : 'PLAY';
        });
        
        if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
		} 
        
        if (media[0].busy) media[0].pause();
        else media[0].play();
    });

    function storeDimensions() {

        zenith = [];
        nadir = [];

        target.each(function() {

            var placement = $(this).offset().top,
                size = $(this).height();

            zenith.push(placement - $(window).height() * 0.9 + size);
            nadir.push(placement + size * 0.1);
        });
    }

    function checkPlay() {

        var spot = $(window).scrollTop();

        target.each(function(i) {

            if (!this.busy && $(this).hasClass('managed')) return;

            var interface = $(this).siblings('.player__flow');

            if (spot > zenith[i] && spot < nadir[i]) {
                if (this.busy) return;
                this.play();
                interface.text('PAUSE');
            } else {
                if (this.paused) return;
                this.pause();
                interface.text('PLAY');
            }
        });
    }
});

Object.defineProperty(HTMLMediaElement.prototype, 'busy', {
    get: function() {
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
});

$.restrain = function(delay, callback) {

    var executed = 0,
        debounce,
        throttle = function() {

            var elapsed = Math.min(delay, Date.now() - executed),
                remain = delay - elapsed;
            debounce && clearTimeout(debounce);
            elapsed == delay && runIt();
            if (remain) debounce = setTimeout(runIt, remain);

            function runIt() {
                executed = Date.now();
                callback.apply(this, arguments);
            }
        }
    return throttle;
}





/* ==========================================================================
   #PARALLAX
   ========================================================================== */
   
/* 
 * Adds classes to specified navigation element when page is scrolled up/down.
 */

$(function(){
	
	// Only run the script if `#metropallax` is on the page. Prevents console errors.
	if ($('#metropallax').length > 0) { 

		var scene = document.getElementById('metropallax');
		var parallaxInstance = new Parallax(scene, {
			relativeInput: true,
			calibrateX: false,
			calibrateY: true,
			invertX: false,
			invertY: true,
			limitX: false,
			limitY: false,
			scalarX: 2,
			scalarY: 2,
			frictionX: 0.75,
			frictionY: 0.75,
			originX: 0.5,
			originY: 0.5
		});
	}
});





/* ==========================================================================
   #CANVAS SMOKE
   ========================================================================== */
   
$(function(){

	// Create an array to store our particles
	var particles = [];
	
	// The amount of particles to render
	var particleCount = 8;
	// Orig 30
	
	// The maximum velocity in each direction
	var maxVelocity = 4;
	
	// The target frames per second (how often do we want to update / redraw the scene)
	var targetFPS = 24;
	// Orig 33
	
	// Set the dimensions of the canvas as variables so they can be used.
	var canvasWidth = 400;
	var canvasHeight = 400;
	
	// Create an image object (only need one instance)
	var imageObj = new Image();
	
	// Once the image has been downloaded then set the image on all of the particles
	imageObj.onload = function() {
	    particles.forEach(function(particle) {
	            particle.setImage(imageObj);
	    });
	};
	
	// Once the callback is arranged then set the source of the image
	imageObj.src = "img/interface/work/metropolis/smoke.png";
	
	// A function to create a particle object.
	function Particle(context) {
	
	    // Set the initial x and y positions
	    this.x = 0;
	    this.y = 0;
	
	    // Set the initial velocity
	    this.xVelocity = 0;
	    this.yVelocity = 0;
	
	    // Set the radius
	    this.radius = 5;
	
	    // Store the context which will be used to draw the particle
	    this.context = context;
	
	    // The function to draw the particle on the canvas.
	    this.draw = function() {
	        
	        // If an image is set draw it
	        if(this.image){
	            this.context.drawImage(this.image, this.x-128, this.y-128);         
	            // If the image is being rendered do not draw the circle so break out of the draw function                
	            return;
	        }
	        // Draw the circle as before, with the addition of using the position and the radius from this object.
	        this.context.beginPath();
	        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
	        this.context.fillStyle = "rgba(0, 255, 255, 1)";
	        this.context.fill();
	        this.context.closePath();
	    };
	
	    // Update the particle.
	    this.update = function() {
	        // Update the position of the particle with the addition of the velocity.
	        this.x += this.xVelocity;
	        this.y += this.yVelocity;
	
	        // Check if has crossed the right edge
	        if (this.x >= canvasWidth) {
	            this.xVelocity = -this.xVelocity;
	            this.x = canvasWidth;
	        }
	        // Check if has crossed the left edge
	        else if (this.x <= 0) {
	            this.xVelocity = -this.xVelocity;
	            this.x = 0;
	        }
	
	        // Check if has crossed the bottom edge
	        if (this.y >= canvasHeight) {
	            this.yVelocity = -this.yVelocity;
	            this.y = canvasHeight;
	        }
	        
	        // Check if has crossed the top edge
	        else if (this.y <= 0) {
	            this.yVelocity = -this.yVelocity;
	            this.y = 0;
	        }
	    };
	
	    // A function to set the position of the particle.
	    this.setPosition = function(x, y) {
	        this.x = x;
	        this.y = y;
	    };
	
	    // Function to set the velocity.
	    this.setVelocity = function(x, y) {
	        this.xVelocity = x;
	        this.yVelocity = y;
	    };
	    
	    this.setImage = function(image){
	        this.image = image;
	    }
	}
	
	// A function to generate a random number between 2 values
	function generateRandom(min, max){
	    return Math.random() * (max - min) + min;
	}
	
	// The canvas context if it is defined.
	var context;
	
	// Initialise the scene and set the context if possible
	function init() {
	    var canvas = document.getElementById('smoke');
	    if (canvas.getContext) {
	
	        // Set the context variable so it can be re-used
	        context = canvas.getContext('2d');
	
	        // Create the particles and set their initial positions and velocities
	        for(var i=0; i < particleCount; ++i){
	            var particle = new Particle(context);
	            
	            // Set the position to be inside the canvas bounds
	            particle.setPosition(generateRandom(0, canvasWidth), generateRandom(0, canvasHeight));
	            
	            // Set the initial velocity to be either random and either negative or positive
	            particle.setVelocity(generateRandom(-maxVelocity, maxVelocity), generateRandom(-maxVelocity, maxVelocity));
	            particles.push(particle);            
	        }
	    }
	    else {
	        alert("Please use a modern browser");
	    }
	}
	
	// The function to draw the scene
	function draw() {
	    // Clear the drawing surface and fill it with a black background
	    context.fillStyle = "rgba(0, 0, 0, 0.5)";
	    context.fillRect(0, 0, 400, 400);
	
	    // Go through all of the particles and draw them.
	    particles.forEach(function(particle) {
	        particle.draw();
	    });
	}
	
	// Update the scene
	function update() {
	    particles.forEach(function(particle) {
	        particle.update();
	    });
	}
	
	// Only run the script if `#metropallax` is on the page. Prevents console errors.
	
	if ($('#smoke').length > 0) {
		
		// Initialize the scene
		init();
	}
	
	// If the context is set then we can draw the scene (if not then the browser does not support canvas)
	if (context) {
	    setInterval(function() {
	        // Update the scene befoe drawing
	        update();
	
	        // Draw the scene
	        draw();
	    }, 1000 / targetFPS);
	}
});





/* ==========================================================================
   #SIMPLE DATA - animated lines.
   ========================================================================== */

$(function(){
	placeLines = function(){
		
		for(i=0; i<=9; i++){
			var Dy = $('.ball-container'+i).position().top - $('.ball-container'+(i+1)).position().top;
			var Dx = $('.ball-container'+(i+1)).position().left - $('.ball-container'+i).position().left;
			var length = Math.sqrt(Dy*Dy + Dx*Dx);
			var angle = Math.atan2(Dy, Dx) * (-1);
			var containerHeight = $('#animated-line > .inner').height();
			var transform = 'rotate('+angle + 'rad)';
			$('.line'+i).css({
				'transform': transform
			})
			
			var offsetTop = $('.ball-container'+i).offset().top +6;
			var offsetLeft= $('.ball-container'+i).offset().left +6;
			
			$('.line-box'+i).css({
				'width': length +'px'
				}).offset({
				left: offsetLeft,
				top: offsetTop
			});
		}
	};
	
	// Only run the script if `animated-line` is on the page. Prevents console errors.
	if ($('#animated-line').length > 0) { 
	
		$(document).ready(function(){
		    placeLines();
		});
		
		$(window).resize(function(){
			console.log('resizing');
			placeLines();
		});
		
	}
});
