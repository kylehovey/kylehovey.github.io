// The main fireplace
//
// Author: Kyle Hovey

function FirePlace(settings) {
	// Default parameters
	this.cols = (settings.cols === undefined) ? 100 : settings.cols;

	// Visual parameters
	this.wind = (settings.wind === undefined) ? 1 : settings.wind;
	this.sigScale = (settings.sigScale === undefined) ? 0.1 : settings.sigScale;
	this.sigShift = (settings.sigShift === undefined) ? 50 : settings.sigShift;
	this.falloff = (settings.falloff === undefined) ? 0.9 : settings.falloff;
	this.randLevel = (settings.randLevel === undefined) ? 15 : settings.randLevel;
	this.dt = .001;

	// Wind function
	this.windLevel = genSmoothWave(this.wind);

	// Default colors
	this.colors = {
		cold : [0, 0, 0],
		warm : [255, 48, 0],
		hot : [255, 144, 0]
	};

	// Initialize internal random level and time
	this.oxygen = this.randLevel;
	this.t = 0;

	// Initialize the fireplace
	this.init = function() {
		// Create the grid
		this.grid = new Array();

		// Determine the width of a cell and the amount of rows
		var cellWidth = Math.round(board.canvas.width/this.cols);
		var rows = Math.round(board.canvas.height/cellWidth);

		// For each column
		for (var x = 0; x < this.cols; x++) {
			// Push back an array
			this.grid.push(new Array());

			// For each cell
			for (var y = 0; y < rows; y++) {
				// Push back a new ember
				this.grid[x].push(new FireCell(
					{
						x : x*cellWidth,
						y : y*cellWidth
					},
					cellWidth,
					genSigmoid(this.sigScale, this.sigShift),
					this.falloff,
					this.colors
				));
			}
		}
	}
	this.init();

	// Start the fire
	this.light = function() {
		// Store a reference to this
		var self = this;

		// Start looping process
		this.blaze = setInterval(function() {
			// Clear the board
			board.clear();
			
			// Update the fire
			$.each(self.grid, function(i, col) {
				$.each(col, function(j, ember) {
					// Stoke the fire
					ember.stoke(self.randLevel);

					// Let the wind blow
					ember.diminish();

					// Reflect on the world in color
					ember.draw();
				});
			});
		}, 100);
	}

	// Stop the fire
	this.extinguish = function() {
		clearInterval(this.blaze);
	}

	// Update settings
	this.update = function(settings) {
		if ((settings.wind !== undefined)) {
			// Update parameter
			this.wind = settings.wind;

			// Update wind function
			this.windLevel = genSmoothWave(this.wind);
		} else if ((settings.sigScale !== undefined)) {
			// Update parameter
			this.sigScale = settings.sigScale;

			// Update grid
			$.each(this.grid, function(i, col) {
				$.each(col, function(i, ember) {
					// Setting dependant
				});
			});
		} else if ((settings.sigShift !== undefined)) {
			// Update parameter
			this.sigShift = settings.sigShift;

			// Update grid
			$.each(this.grid, function(i, col) {
				$.each(col, function(i, ember) {
					// Setting dependant
				});
			});
		} else if ((settings.falloff !== undefined)) {
			// Update parameter
			this.falloff = settings.falloff;

			// Update grid
			$.each(this.grid, function(i, col) {
				$.each(col, function(i, ember) {
					// Setting dependant
				});
			});
		} else if ((settings.randLevel !== undefined)) {
			// Update parameter
			this.randLevel = settings.randLevel;

			// Set new oxygen level
			this.oxygen = this.randLevel;
		}
	}
};
