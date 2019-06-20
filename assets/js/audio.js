/*
	Forty by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var bgm = new Audio('./audio/tswizzle.mp3');
	var airhorn = new Audio('./audio/airhorn.mp3');

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$banner = $('#banner');

		$body.on('click', function(event) {

			bgm.play();

		});

		// $link.on('click', function(event) {
		// 	airhorn.play();

		// 	// Prevent default.
		// 		event.stopPropagation();
		// 		event.preventDefault();
		// });

})(jQuery);