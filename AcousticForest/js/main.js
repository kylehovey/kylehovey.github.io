// Javascript onload

$(function() {
	// Grab our audio element
	audio = document.getElementById("main-track");

	// Listeners to make things easy
	$(window).on('keyup', function(event) {
		if (event.keyCode == 0 || event.keyCode == 32) {
			// Spacebar to pause/play
			if (audio.paused) {
				audio.play();
			} else {
				audio.pause();
			}
		}
	});
});
