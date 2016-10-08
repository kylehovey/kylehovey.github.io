// Class definition for mountain renderer
//
// Author: Kyle Hovey

function Mountain(options) {
	// Store variables
	this.height = (options.height || board.canvas.height/2);
	this.offset = options.offset;
	this.randLevel = (options.randLevel || 0.1);
	this.randFalloff = (options.randFallOff || 0.5);
	this.points = options.points;
	this.color = (options.color || "#204");

	// Temporary
	this.fStart = 0.5;
	this.fEnd = 1;

	// Begin by procedurally generating mountain points
	var heightMap = new Array();

	// Push back starting points
	for (var i = 0; i < 3; i++) {
		heightMap.push(-1 + 2*Math.random());
	}

	// While there aren't enough points
	while (heightMap.length < this.points) {
		// Create a new array
		var newMap = new Array();	

		// For each point that we need to interpolate
		for (var i = 0; i < heightMap.length - 1; i++) {
			// Find value between two points
			var avg = (heightMap[i] + heightMap[i + 1])/2;

			// Add random value to it
			avg += this.randLevel*(-1 + 2*Math.random());

			// Push back values
			newMap.push(heightMap[i]);
			newMap.push(avg);
		}

		// Push back last element of heightMap
		newMap.push(heightMap[heightMap.length - 1]);

		// heightMap is now newMap
		heightMap = newMap;

		// Let random value fall off
		this.randLevel *= this.randFalloff;
	}

	// Save heightmap
	this.heightMap = heightMap;

	// Method to render mountain
	this.renderMountain = function(heightAugment = []) {
		// Find the x step
		var dx = draw.canvas.width/this.heightMap.length + 0.1;

		// Begin path
		draw.ctx.beginPath();

		// Move to first point
		draw.ctx.moveTo(
			0,
			draw.canvas.height - (1 - this.heightMap[0])*this.height - this.offset
		);

		// Draw to each point in the mountain
		for (var i = 0; i < this.heightMap.length; i++) {
			draw.ctx.lineTo(
				i*dx, 
				draw.canvas.height - (1 - this.heightMap[i])*this.height - this.offset
			);
		}

		// Finish path
		draw.ctx.lineTo(draw.canvas.width, draw.canvas.height);
		draw.ctx.lineTo(0, draw.canvas.height);
		draw.ctx.closePath();

		// Fill
		draw.ctx.fillStyle = this.color;
		draw.ctx.fill();
	}

	// Modified map for animation
	this.modMap = this.heightMap;

	// Augment heightMap based upon frequency data
	this.augment = function() {
		// Store a normalized version of the frequency data
		var normedData = normalize(analyser.frequencyData, 255);
		console.log(normedData);
	}

	// Update method for animation
	this.update = function() {
		// Render mountain
		this.renderMountain();
	}
}
