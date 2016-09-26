// One Cell of a fireplace 
//
// Author: Kyle Hovey

function FireCell(location, cellWidth, sigmoid, falloff, colors) {
	// Store location {x:00, y:00}
	this.location = location;

	// Store cell width
	this.width = cellWidth;

	// Store sigmoid function and internal constants
	this.sigmoid = sigmoid;
	this.falloff = falloff;
	this.colors = colors;

	// Initialize internal value
	this.val = 0;

	// Determine cell color
	this.color = function() {
		// Get level
		var t = this.level();

		// Return color
		return board.toRGB(board.lerp(
			board.lerp(this.colors.cold, this.colors.warm, t),
			board.lerp(this.colors.warm, this.colors.hot, t),
			t
		));
	}

	// Stoke the fire
	this.stoke = function(randLevel) {
		this.val += randRange(1, randLevel);
	}

	// Let the wind blow
	this.diminish = function() {
		this.val *= this.falloff;
	}

	// Get level between (0, 1)
	this.level = function() {
		return this.sigmoid(this.val);
	}

	// Draw the cell
	this.draw = function() {
		board.drawBox(this.location, {
			x : this.width,
			y : this.width
		}, this.color());
	}
};
