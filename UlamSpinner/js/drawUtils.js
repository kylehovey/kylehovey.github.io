// Drawing utilities
//
// Author: Kyle Hovey

function DrawUtils(id) {
	// Get canvas
	this.canvas = $(id)[0];

	// Create context
	this.ctx = this.canvas.getContext("2d");

	// Resize the canvas
	this.resize = function() {
		// Set canvas width
		this.ctx.canvas.width = window.innerWidth;
		this.ctx.canvas.height = window.innerHeight;

		// Keep the record
		this.width = window.innerWidth;
		this.height = window.innerHeight;
	};

	// Clear the canvas
	this.clear = function(start, dim) {
		// Default parameters
		start = (start === undefined) ? {
			x : 0,
			y : 0
		} : start;
		dim = (dim === undefined) ? {
			width : this.width,
			height : this.height
		} : dim;
		// Clear rect
		this.ctx.clearRect(start.x, start.y, dim.width, dim.height);
	};

	// Draw a line
	this.drawLine = function(start, end, color = "#000", width = 8) {
		// Begin path
		this.ctx.beginPath();

		// Draw line
		this.ctx.moveTo(start.x, start.y);
		this.ctx.lineTo(end.x, end.y);
		this.ctx.strokeStyle = color;
		this.ctx.lineWidth = width;
		this.ctx.stroke();

		// Close path
		this.ctx.closePath();
	};

	// Draw a circle
	this.drawCircle = function(center, radius, color = "#000") {
		// Begin path
		this.ctx.beginPath();

		// Draw circle
		this.ctx.beginPath();
		this.ctx.arc(center.x, center.y, radius, 0, Math.PI*2);
		this.ctx.fillStyle = color;
		this.ctx.fill();
		this.ctx.closePath();

		// Close path
		this.ctx.closePath();
	};

	// Draw a box
	this.drawBox = function(start, end, color = "#000") {
		// Begin path
		this.ctx.beginPath();

		// Draw rectangle
		this.ctx.rect(start.x, start.y, end.x, end.y);
		this.ctx.fillStyle = color;
		this.ctx.fill();

		// Close path
		this.ctx.closePath();
	};

	// Convert a 3-element array of color values into rgb()
	this.toRGB = function(color) {
		return "rgb(" + color.join(",") + ")";
	};
	
	// Return a color along a wheel
	this.colorWheel = function(t) {
		// Circular walk through RGB space
		return this.toRGB([
			Math.round(255*(Math.sin(t) + 1)/2),
			Math.round(255*(Math.sin(t + 2*Math.PI/3) + 1)/2),
			Math.round(255*(Math.sin(t + 4*Math.PI/3) + 1)/2)
		]);
	};

	// Linear interpolate two colors
	this.lerpColors = function(a, b, t) {
		// Determine lerp variables
		var s = 1-t;

		// Return a color inbetween a and b
		return this.toRGB([
			Math.round(s*a.R + t*b.R),
			Math.round(s*a.G + t*b.G),
			Math.round(s*a.B + t*b.B)
		]);
	};
};
