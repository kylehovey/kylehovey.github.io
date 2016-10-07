// Javascript onload

$(function() {
	// Initialize the analyzer context object
	audioTools = new (window.AudioContext || window.webkitAudioContext)();
	
	// Grab our audio element
	audio = document.getElementById("main-track");

	// Create analyser
	analyser = new AudioAnalyser(audio);

	// Play audio
	audio.play();

	// LISTENERS
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
