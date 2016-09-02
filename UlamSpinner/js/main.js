// Javascript onload

$(function() {
	// Get canvas
	var canvas = $("#drawing-board")[0];
	d = 1

	// Create context
	var context = canvas.getContext("2d");

	// Initialize drawing tools [GLOBAL]
	draw = new drawSpinners(context);

	// Resize to full screen
	draw.resize();

	// Add listeners
	$(window).resize(function(event) {
		// Resize canvas
		draw.resize();
	});

	// Start animation
	draw.start();
});
