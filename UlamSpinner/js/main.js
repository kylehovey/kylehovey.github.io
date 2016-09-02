// Javascript onload

$(function() {
	// Initialize drawing tools
	board = new DrawUtils("#drawing-board");

	// Resize to full screen
	board.resize();

	// Draw some spinners
	ulam = new Ulam(board.canvas, 50);

	// Add listeners
	$(window).resize(function(event) {
		// Resize canvas
		board.resize();
	});

	// TESTING
	//mySpinner = new Spinner(board.canvas, {x : board.width/2, y: board.height/2}, 50);
});
