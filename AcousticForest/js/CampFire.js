// Class definition for sound-reactive fire
//
// Author: Kyle Hovey

// Ember class
function Ember(options) {
	// Store variables
	this.location = options.location;
	this.width = options.width;
	this.colors = options.colors;
	this.falloff = options.falloff;
	this.randLevel = options.randLevel;
	this.sigmoid = function(t) {
		// Clamp internal value
		return 1/(1 + Math.exp(-(t - options.sigShift)/options.sigScale))
	}

	// Internal heat constant
	this.heat = 0;

	// Stoke the fire
	this.stoke = function(randLevel = this.randLevel) {
		// Add random value to heat
		this.heat += Math.round(randLevel*Math.random());
	};

	// Let the wind blow
	this.diminish = function() {
		this.heat *= this.falloff;
	};
	
	// Get the level between 0 and 1
	this.level = function() {
		return this.sigmoid(this.heat);
	};

	// Get this color
	this.getColor = function() {
		// Get level
		var t = this.level();

		// Find corresponding color using bezier
		return toRGBA(lerp(
			lerp(this.colors[0], this.colors[1], t),
			lerp(this.colors[1], this.colors[2], t),
			t
		));
	};

	// Render this ember
	this.render = function() {
		// Draw rect
		draw.ctx.fillStyle = this.getColor();
		draw.ctx.fillRect(this.location[0], this.location[1], this.width, this.width);
	}
}

// Campfire class
function CampFire(options) {
	// Store variables
	this.emberWidth = options.emberWidth;
	this.position = options.position;
	this.randLevel = options.randLevel;
	this.fStart = options.fWindow[0];
	this.fEnd = options.fWindow[1];
	//this.pixelDim = options.pixelDim;

	// Find dimension of grid
	this.pixelDim = [
		draw.canvas.width/this.emberWidth + 1,
		draw.canvas.height/this.emberWidth + 1
	];

	// Find inital starting point
	var start = [
		this.position[0] - this.pixelDim[0]*this.emberWidth/2,
		this.position[1] - this.pixelDim[1]*this.emberWidth
	];

	// Init fire
	this.grid = new Array();
	for (var x = 0; x < this.pixelDim[0]; x++) {
		// Add new col
		this.grid.push(new Array());
		for (var y = 0; y < this.pixelDim[1]; y++) {
			// Add new ember
			this.grid[x].push(new Ember({
				colors : options.colors,
				randLevel : this.randLevel,
				falloff : options.falloff,
				sigShift : options.sigShift,
				sigScale : options.sigScale,
				width : options.emberWidth,
				location : [
					start[0] + x*this.emberWidth,
					start[1] + y*this.emberWidth
				]
			}));
		}
	}
	
	// Update fire
	this.update = function() {
		// Store a normalized version of the frequency data
		var normedData = normalize(analyser.frequencyData.slice(
			this.fStart*analyser.frequencyData.length, 
			this.fEnd*analyser.frequencyData.length
		), 255);

		// Find soundlevel
		var soundLevel = avg(normedData);

		// For each ember
		for (var x = 0; x < this.pixelDim[0]; x++) {
			for (var y = 0; y < this.pixelDim[1]; y++) {
				// Store a reference
				var ember = this.grid[x][y];

				// Find gradient modifier
				var gradient = y/this.pixelDim[1];
				var hPos = (this.pixelDim[0]/2 - x)/(this.pixelDim[0]);
				gradient *= Math.exp(-Math.pow(hPos*8, 2));
				
				// Stoke the fire
 				ember.stoke(this.randLevel*gradient*soundLevel);

				// Let the wind blow
				ember.diminish();

				// Render ember
				ember.render();
			}
		}
	}
}
