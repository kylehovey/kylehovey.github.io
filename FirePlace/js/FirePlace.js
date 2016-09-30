// The main fireplace
//
// Author: Kyle Hovey

function FirePlace(settings, board) {
	// Default parameters
	this.cols = (settings.cols === undefined) ? 100 : settings.cols;

	// Visual parameters
	this.wind = (settings.wind === undefined) ? 1 : settings.wind;
	this.sigScale = (settings.sigScale === undefined) ? 0.1 : settings.sigScale;
	this.sigShift = (settings.sigShift === undefined) ? 50 : settings.sigShift;
	this.falloff = (settings.falloff === undefined) ? 0.9 : settings.falloff;
	this.randLevel = (settings.randLevel === undefined) ? 15 : settings.randLevel;

	// Wind function
	this.windLevel = genSmoothWave(this.wind);

	// Default colors
	this.colors = (settings.color === undefined) ? {
		cold : [0, 0, 0, 0],
		warm : [255, 48, 0, 1],
		hot : [255, 144, 0, 1]
	} : settings.color;

	// Drawing board
	this.board = board;

	// Initialize internal random level and time
	this.oxygen = this.randLevel;
	this.t = 0;
	this.dt = .1;

	// Initialize the fireplace
	this.init = function() {
		// Reset time
		this.t = 0;

		// Create the grid
		this.grid = new Array();

		// Determine the width of a cell and the amount of rows
		var cellWidth = Math.round(this.board.canvas.width/this.cols);
		var rows = Math.round(this.board.canvas.height/cellWidth);

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
			self.board.clear();
			
			// Update the fire
			$.each(self.grid, function(i, col) {
				$.each(col, function(j, ember) {
					// Shape the fire
					var gradient = col.length/(col.length - j);
					var hPos = self.grid.length/2 - i;
					gradient *= Math.exp(-Math.pow(hPos, 2)/self.grid.length);

					// Let the wind blow
					gradient *= self.windLevel(self.t);

					// Stoke the fire
					ember.stoke(self.randLevel*gradient);

					// Let the fire die down
					ember.diminish();

					// Reflect on the world in color
					ember.draw();
				});
			});

			// Increment time
			self.t += self.dt;
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
			var newSigmoid = genSigmoid(this.sigScale, this.sigShift);

			// Update grid
			this.eachEmber(function(ember) {
				ember.sigmoid = newSigmoid;
			});
		} else if ((settings.sigShift !== undefined)) {
			// Update parameter
			this.sigShift = settings.sigShift;
			var newSigmoid = genSigmoid(this.sigScale, this.sigShift);

			// Update grid
			this.eachEmber(function(ember) {
				ember.sigmoid = newSigmoid;
			});
		} else if ((settings.falloff !== undefined)) {
			// Update parameter
			this.falloff = settings.falloff;
			var newFalloff = this.falloff;

			// Update grid
			this.eachEmber(function(ember) {
				ember.falloff = newFalloff;
			});
		} else if ((settings.randLevel !== undefined)) {
			// Update parameter
			this.randLevel = settings.randLevel;

			// Set new oxygen level
			this.oxygen = this.randLevel;
		} else if ((settings.colors !== undefined)) {
			// Update parameter
			this.colors = settings.colors;
			var newColor = this.colors;

			// Update grid
			this.eachEmber(function(ember) {
				ember.colors = newColor;
			});
		}
	}

	// Apply a function to each ember
	this.eachEmber = function(emberMap) {
			$.each(this.grid, function(i, col) {
				$.each(col, function(i, ember) {
					// Apply Function
					emberMap(ember);
				});
			});
	};
};
