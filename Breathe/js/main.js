// Javascript onload

$(() => {
	// Initialize drawing tools
	board = new DrawUtils("#drawing-board");

	// Resize to full screen
	board.resize();

  // Animation block
  t = 0;
  T = 1000;
  start = [255,255,255,1];
  end = [0,40,100,1];
  smooth = genBump(0.01);

  // Begin animation
  setInterval(() => {
    // Get lerp value
    var p = smooth(t/T);

    // Draw the circle
    board.drawCircle(
      {
        x : 100,
        y : 100
      }, 40, board.toRGB(board.lerp(start, end, p))
    );

    // Increment time
    t += 1;
    t %= T;
  }, 10);

	// Add listeners
	$(window).resize(function(event) {
		// Resize canvas
		board.resize();
	});
});
