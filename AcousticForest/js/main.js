// Javascript onload

$(function() {
	// Initialize the analyzer context object
	audioTools = new (window.AudioContext || window.webkitAudioContext)();
	
	// Initialize drawing tools
	board = new DrawUtils("#drawing-board");

	// Resize to full screen
	board.resize();

	// Create fireplace
	fire = new FirePlace({
		cols : 60,
		wind : 1,
		sigScale : 0.1,
		sigShift : 50,
		falloff : 0.7,
		randLevel : 8
	}, board);
	
	// Grab our audio element
	audio = document.getElementById("main-track");

	// Create analyser
	analyser = new AudioAnalyser(audio);

	// Light fire
	fire.light();

	// Play audio and start analysis
	audio.play();
	analyser.start();
	
	// Testing stuff goes here
	setInterval(function() { fire.randLevel = 30 * analyser.level(0.5, 1) / 80; }, 10)

	// LISTENERS
	$(window).on('keyup', function(event) {
		if (event.keyCode == 0 || event.keyCode == 32) {
			// Spacebar to pause/play
			if (audio.paused) {
				analyser.stop();
				audio.play();
			} else {
				analyser.start();
				audio.pause();
			}
		}
	}).resize(function(event) {
		// Resize canvas
		board.resize();

		// Init fireplace
		fire.init();
	});
});
