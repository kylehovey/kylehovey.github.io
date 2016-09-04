// Ulam board class definition
//
// Author: Kyle Hovey

function Ulam(canvas, spinnerWidth) {
	// Default parameters
	spinnerWidth = (spinnerWidth === undefined) ? 100 : spinnerWidth;

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

		// Init the grid
		this.initGrid();

		// Start sketch again
		this.start();
	};

	// Average of all arguments on the grid
	this.updateAverageArg = function() {
		// Create the average
		var avg = 0;

		// For each column
		for (var i = 0; i < this.spinners.x; i++){
			// For each row
			for (var j = 0; j < this.spinners.y; j++){
				// Add the spinner's arg
				avg += floatMod(this.grid[i][j].theta, 2*Math.PI);
			}
		}

		// Return the average
		this.avgArg = avg/(this.grid.length*this.grid[0].length);
	};

	// Create grid of spinner objects
	this.initGrid = function() {
		// Find amount of spinners
		this.spinners = {
			x : Math.floor(board.width/this.spinnerWidth),
			y : Math.floor(board.height/this.spinnerWidth)
		};

		// Initialize the grid
		this.grid = new Array();

		// For each column
		for (var i = 0; i < this.spinners.x; i++){
			// Push a new array
			this.grid.push(new Array());

			// For each row
			for (var j = 0; j < this.spinners.y; j++){
				// Push a new spinner
				this.grid[i].push(new Spinner(board.canvas, {
					x : (i + 1)*this.spinnerWidth,
					y : (j + 1)*this.spinnerWidth
				}, this.spinnerWidth/2, this.freqMap(i, j)));
			}
		}

		// Find the average argument
		this.updateAverageArg();
	};

	// Initialize the grid
	this.initGrid();

	// Update the entire grid of spinners
	var tempSpinner;
	this.update = function() {
		// Call the update functions
		for (var x = 0; x < this.grid.length; x++) {
			for (var y = 0; y < this.grid[x].length; y++) {
				// Save the spinner as temp
				tempSpinner = this.grid[x][y]

				// Update the time
				tempSpinner.update(this.t);
			}
		}

		// Update average arg
		this.updateAverageArg();
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
