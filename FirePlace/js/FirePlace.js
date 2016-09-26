// The main fireplace
//
// Author: Kyle Hovey

function FirePlace(canvas, settings) {
	// Default parameters
	this.cols = (settings.cols === undefined) ? 100 : settings.cols;

	// Visual parameters
	this.wind = (settings.wind === undefined) ? 0.000000001 : settings.wind;
	this.sigScale = (settings.sigScale === undefined) ? 0.1 : settings.sigScale;
	this.sigShift = (settings.sigShift === undefined) ? 50 : settings.sigShift;
	this.falloff = (settings.falloff === undefined) ? 0.9 : settings.falloff;
	this.randLevel = (settings.randLevel === undefined) ? 15 : settings.randLevel;

	// Initialize internal random level
	this.oxygen = this.randLevel;

	// Initialize t
	this.t = 0;

	// Initialize the grid
	this.init = function() {
	}

	// Start the fire
	this.light = function() {
	}

	// Stop the fire
	this.extinguish = function() {
	}

	// Update settings
	this.update = function(settings) {
		if ((settings.wind !== undefined)) {
			// Update parameter
			this.wind = settings.wind;

			// Update grid
			$.each(this.grid, function(i, col) {
				$.each(col, function(i, ember) {
					// Setting dependant
				});
			});
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
