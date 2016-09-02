// Ulam board class definition
//
// Author: Kyle Hovey

function Ulam(canvas, spinnerWidth = 100) {
	// Get context
	this.ctx = canvas.getContext("2d");

	// Initialize t
	this.t = 0;

	// Find amount of spinners
	this.spinnerWidth = spinnerWidth;
	var spinners = {
		x : Math.floor(board.width/this.spinnerWidth),
		y : Math.floor(board.height/this.spinnerWidth)
	};

	// Create grid of spinner objects
	this.grid = new Array();
	for (var i = 0; i < spinners.x; i++){
		this.grid.push(new Array());
		for (var j = 0; j < spinners.y; j++){
			this.grid[i].push(new Spinner(board.canvas, {
				x : (i + 1)*this.spinnerWidth,
				y : (j + 1)*this.spinnerWidth
			}, this.spinnerWidth/2));
		}
	}

	// Frequency mapping function
	this.freqMap = function(x, y) {
		return x + y;
	};

	// Method to set frequency mapping function
	this.setMap = function(func) {
		// Reset sketch
		this.stop(true);

		// Change function
		this.freqMap = func;

		// Start sketch again
		this.start();
	};

	// Sketch function
	this.sketch = function() {
	};

	// Start time parameter
	this.start = function(reset = false) {
		// Begin counting
		this.counter = setInterval(function() {
			// Clear
			board.clear();

			// Sketch
			this.sketch();

			// Increment t by a hundredth
			this.t += 0.01;
		}.bind(this), 10);
	}.bind(this);

	// Stop time parameter
	this.stop = function(reset = false) {
		// Reset t if needed
		this.t = reset ? 0 : this.t;

		// Stop counting
		clearInterval(this.counter);
	};
}
