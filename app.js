// compiles dependancies into build.js with browserify
require('lazysizes');
var $ = require('jquery');
	
// call the funtion once the image is loaded
$(".hero img").on("load",function() {

  // traverse to the next preloader element
  var preloader = $(this).parent().next();
	
  // call the function when the animation finishes its current iteration
  $(preloader).on('animationiteration webkitAnimationIteration', function(){

    // pause the animation
	$(this).css("animation-play-state", "paused");

	// traverse to the relevant .hero element
	var hero = $(this).prev();
		
	// add the fade-in class to fade the image in
	$(hero).addClass("fade-in");

  }); 

});	