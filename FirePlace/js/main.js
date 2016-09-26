// Javascript onload

$(function() {
	// Initialize drawing tools
	board = new DrawUtils("#drawing-board");

	// Resize to full screen
	board.resize();

	// Create fireplace
	fire = new FirePlace(board.canvas, {
		cols : 100,
		wind : 0.000000001,
		sigScale : 0.1,
		sigShift : 50,
		falloff : 0.9,
		randLevel : 15
	});

	// Add listeners
	$(window).resize(function(event) {
		// Resize canvas
		board.resize();
	});
});
