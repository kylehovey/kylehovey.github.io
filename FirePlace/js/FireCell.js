// One Cell of a fireplace 
//
// Author: Kyle Hovey

function FireCell(location, cellWidth, sigmoid) {
	// Store location {x:00, y:00}
	this.location = location;

	// Store cell width
	this.cellWidth = cellWidth;

	// Store sigmoid function
	this.sigmoid = sigmoid;

	// Initialize internal value
	this.val = 0;

	// Stoke the fire
	this.stoke = function() {
	}

	// Let the wind blow
	this.diminish = function() {
	}

	// Get level between (0, 1)
	this.level = function() {
	}
};
