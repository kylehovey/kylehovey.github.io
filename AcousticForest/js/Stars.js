// Class definition for star field
//
// Author: Kyle Hovey

function Stars(options) {
	// Store variables 
	this.nStars = options.nStars;
	this.fStart = options.fWindow[0];
	this.fEnd = options.fWindow[1];
	this.glow = options.glow;

	// For modifying brightness with frequency
	this.brightMod = 1;

	// Star field
	this.field = new Array();

	// Generate stars
	while (this.field.length < this.nStars) {
		this.field.push({
			location : [
				draw.canvas.width*Math.random(),
				draw.canvas.height*Math.random()
			],
			intensity : Math.round(this.glow*Math.random())
		});
	}

	// Render the field
	this.renderStars = function() {
		// For each star
		for (var i = 0; i < this.field.length; i++) {
			// Store a reference
			var star = this.field[i];

			// Draw it
			draw.ctx.save();
			var scale = this.brightMod*2;
			draw.ctx.shadowBlur = star.intensity*scale;
			draw.ctx.shadowColor = "white";
			draw.ctx.fillStyle = "rgba(255, 255, 255, " + scale + ")";
			draw.ctx.fillRect(star.location[0], star.location[1], 1, 1);
			draw.ctx.restore();
		}
	};

	this.augment = function() {
		// Store a normalized version of the frequency data
		var normedData = normalize(analyser.frequencyData.slice(
			this.fStart*analyser.frequencyData.length, 
			this.fEnd*analyser.frequencyData.length
		), 255);

		// Change brightMod based on frequency sensitivity
		this.brightMod = avg(normedData);
	};

	// Update method for animation
	this.update = function() {
		// Augment
		this.augment();

		// Render stars
		this.renderStars();
	};
};
