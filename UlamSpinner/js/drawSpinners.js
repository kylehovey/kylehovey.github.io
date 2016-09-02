// Drawing utilities class definition

function drawSpinners(context) {
	// Save the context
	this.ctx = context;

	// Initialize t
	this.t = 0;

	// Resize the canvas
	this.resize = function() {
		// Set canvas width
		context.canvas.width = window.innerWidth;
		context.canvas.height = window.innerHeight;

		// Keep the record
		this.width = window.innerWidth;
		this.height = window.innerHeight;
	};

	// Clear the canvas
	this.clear = function() {
		context.clearRect(0, 0, this.width, this.height);
	}.bind(this);

	// Draw a line
	this.drawLine = function(start, end, color = "#000", width = 10) {
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
	}

	// Draw a spinner
	this.drawSpinner = function(center, radius, w = 0, colors = {
		circleColor : "rgb(10, 100, 110)",
		spinnerColor : "rgb(10, 10, 30)"
	}){
		// Draw the main circle
		this.drawCircle(center, radius, colors.circleColor);

		// Draw the spinner
		this.drawLine(center, {
			x : center.x + radius*Math.cos(w*this.t),
			y : center.y + radius*Math.sin(w*this.t)
		}, colors.spinnerColor)

		// Draw the central circle
		this.drawCircle(center, radius/5, colors.spinnerColor);
	}.bind(this);

	// Frequency mapping function
	this.freqMap = function(x, y) {
		return x + y;
	};

	// Sketch function
	this.sketch = function() {
		// Frequency mapping function
		
		// Find amount of spinners
		var diameter = 40;
		var spinners = {
			x : Math.floor(this.width/diameter),
			y : Math.floor(this.height/diameter)
		};

		for (var i = 0; i < spinners.x; i++){
			for (var j = 0; j < spinners.y; j++){
				// Draw a spinner
				this.drawSpinner({
					x : i*diameter + diameter/2,
					y : j*diameter + diameter/2
				}, diameter/2, this.freqMap(i, j));
			}
		}
	}.bind(this);

	// Start time parameter
	this.start = function(reset = false) {
		// Reset t if needed
		this.t = reset ? 0 : this.t;

		// Begin counting
		this.counter = setInterval(function() {
			// Clear
			this.clear();

			// Sketch
			this.sketch();

			// Increment t by a hundredth
			draw.t += 0.01;
		}.bind(this), 10);
	}.bind(this);

	// Stop time parameter
	this.stop = function(reset = false) {
		// Reset t if needed
		this.t = reset ? 0 : this.t;

		// Stop counting
		clearInterval(this.counter);
	};
}
