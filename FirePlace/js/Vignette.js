// Vignette mask (extends from DrawUtils)
//
// Author: Kyle Hovey

function Vignette(id, color, size) {
	// Store color and size
	this.color = color;
	this.size = size;

	// Create drawing board
	this.board = new DrawUtils(id);

	// Map resize and clear function to this
	this.resize = function() {
		this.board.resize();
		this.drawVignette();
	};
	this.clear = this.board.clear;

	// Map canvas to this
	this.canvas = this.board.canvas;
	this.ctx = this.board.ctx;

	// Draw vignette in center with given radius
	this.drawVignette = function() {
		// Begin path
		this.ctx.beginPath();

		// Find radius size
		var r = Math.round(this.size*this.canvas.width/100);

		// Create arc for view
		this.ctx.arc(this.canvas.width/2, this.canvas.height/2, r, 0, 2*Math.PI);

		// Draw outside
		this.ctx.arc(this.canvas.width/2, this.canvas.height/2, this.canvas.width, 0, 2*Math.PI, true);
		this.ctx.fillStyle = this.color;
		this.ctx.fill();

		// End path
		this.ctx.closePath();
	};

	// Resize to full
	this.resize();

	// Draw vignette
	this.drawVignette(this.size);
};
