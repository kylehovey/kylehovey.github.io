// Javascript onload

$(function() {
	// Initialize drawing tools
	board = new DrawUtils("#drawing-board");

	// Resize to full screen
	board.resize();

	// Add listeners
	$(window).resize(function(event) {
		// Resize canvas
		board.resize();
	});
});
