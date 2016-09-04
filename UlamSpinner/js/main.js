// Javascript onload

$(function() {
	// Initialize drawing tools
	board = new DrawUtils("#drawing-board");

	// Resize to full screen
	board.resize();

	// Draw some spinners
	ulam = new Ulam(board.canvas, 30);

	// Add listeners
	$(window).resize(function(event) {
		// Resize canvas
		board.resize();

		// Initialize grid
		ulam.initGrid();
	});

	// Start animation
	ulam.start();
});
