// Ulam board class definition
//
// Author: Kyle Hovey

function Ulam(canvas, spinnerWidth = 100) {
	// Get context
	this.ctx = canvas.getContext("2d");

	// Initialize t
	this.t = 0;

	// Save width
	this.spinnerWidth = spinnerWidth;

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


	// Create grid of spinner objects
	this.initGrid = function() {
		// Find amount of spinners
		var spinners = {
			x : Math.floor(board.width/this.spinnerWidth),
			y : Math.floor(board.height/this.spinnerWidth)
		};

		// Initialize the grid
		this.grid = new Array();

		// For each column
		for (var i = 0; i < spinners.x; i++){
			// Push a new array
			this.grid.push(new Array());

			// For each row
			for (var j = 0; j < spinners.y; j++){
				// Push a new spinner
				this.grid[i].push(new Spinner(board.canvas, {
					x : (i + 1)*this.spinnerWidth,
					y : (j + 1)*this.spinnerWidth
				}, this.spinnerWidth/2, this.freqMap(i, j)));
			}
		}
	};

	// Initialize the grid
	this.initGrid();

	// Update the entire grid of spinners
	this.update = function() {
		for (var x = 0; x < this.grid.length; x++) {
			for (var y = 0; y < this.grid[x].length; y++) {
				this.grid[x][y].update(this.t);
			}
		}
	};

	// Sketch function
	this.sketch = function() {
		// Update the grid
		this.update();
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
