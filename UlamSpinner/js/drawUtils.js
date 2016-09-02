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
	this.clear = function(start = {
		x : 0,
		y : 0
	}, dim = {
		width : this.width,
		height : this.height
	}) {
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
	
	// Return a color along a wheel
	this.colorWheel = function(t) {
		// Circular walk through RGB space
		var color = [
			Math.round(255*(Math.sin(t) + 1)/2),
			Math.round(255*(Math.sin(t + 2*Math.PI/3) + 1)/2),
			Math.round(255*(Math.sin(t + 4*Math.PI/3) + 1)/2)
		]

		// Return the color
		return "rgb(" + color.join(",") + ")"; 
	};
};
