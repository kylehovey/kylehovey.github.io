// Class definition for mountain renderer
//
// Author: Kyle Hovey

function Mountain(options) {
	// Store variables
	this.height = (options.height || board.canvas.height/2);
	this.randLevel = (options.randLevel || 0.1);
	this.randFalloff = (options.randFallOff || 0.5);
	this.points = (options.points || 100);

	// Begin by procedurally generating mountain points
	var heightMap = new Array();

	// Push back starting points
	for (var i = 0; i < 3; i++) {
		heightMap.push(Math.random());
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
			avg += this.randLevel * Math.random();

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
}
