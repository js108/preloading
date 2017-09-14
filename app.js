// compiles dependancies into build.js with browserify
require('lazysizes');
var $ = require('jquery');

// call the lazy function when lazysizes changes the image class
$('.hero').bind("DOMSubtreeModified", lazy);

function lazy(){

	// call the function when the animation finishes its current iteration
	$(".preloader").one('animationiteration webkitAnimationIteration', function(){

		// pause the animation
		$(this).css("animation-play-state", "paused");

		// add the fade-in class to fade the image in
		$(".hero").addClass("fade-in");
	}); 
}