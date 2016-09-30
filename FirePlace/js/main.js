// Javascript onload

$(function() {
	// Initialize drawing tools
	board = new DrawUtils("#drawing-board");

	// Resize to full screen
	board.resize();

	// Create fireplace
	fire = new FirePlace({
		cols : 50,
		wind : 1,
		sigScale : 0.1,
		sigShift : 50,
		falloff : 0.9,
		randLevel : 2
	});

	// Add listeners
	$(window).resize(function(event) {
		// Resize canvas
		board.resize();

		// Init fireplace
		fire.init();
	});

	// Light fire
	fire.light();
});
