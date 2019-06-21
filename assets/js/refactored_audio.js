/*
	Forty by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var bgm = new Audio('./audio/refactored_bgm.mp3');
	var airhorn = new Audio('./audio/mlg_airhorn.mp3');
	var is_playing = false;

	var	$window = $(window),
		$play_button = $('#bgm_play_button');

		$play_button.on('click', function(event) {

			if (is_playing) {
				bgm.pause();
				$play_button.removeClass('fa-pause');
				$play_button.addClass('fa-play');
			} else {
				bgm.play();
				$play_button.removeClass('fa-play');
				$play_button.addClass('fa-pause');
			}

			is_playing = !is_playing;
		});

		// $link.on('click', function(event) {
		// 	airhorn.play();

		// 	// Prevent default.
		// 		event.stopPropagation();
		// 		event.preventDefault();
		// });

})(jQuery);