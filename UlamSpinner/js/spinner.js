// Spinner class definition
//
// Author: Kyle Hovey

function Spinner(canvas, center, radius, w = 1, t = 0) {
	// Default colors
	this.colors = {
		circleColor : "rgb(10, 100, 110)",
		spinnerColor : "rgb(10, 10, 30)"
	};

	// Spacial awareness
	this.center = center;
	this.radius = radius;

	// Frequency and time awareness
	this.w = w;
	this.t = t;

	// Argument
	this.theta = this.w*this.t;

	// Call to update spinner with new values
	this.update = function(t = this.t) {
		// Clear the spinner
		board.clear({
			x : this.center.x - this.radius,
			y : this.center.y - this.radius
		},{
			x : 2*this.radius,
			y : 2*this.radius
		});

		// Draw the main circle
		board.drawCircle(center, radius, this.colors.circleColor);

		// Update argument
		this.t = t
		this.theta = this.w*this.t;

		// Draw the spinner
		board.drawLine(center, {
			x : center.x + radius*Math.cos(this.theta),
			y : center.y + radius*Math.sin(this.theta)
		}, this.colors.spinnerColor)

		// Draw the central circle
		board.drawCircle(center, radius/3, this.colors.spinnerColor);
	}

	// Update the color of the wheel
	this.setColor = function(color) {
		// Update internal color value
		this.colors.circleColor = color;

		// Update 
		this.update();
	};

	// Update the frequency of the spinner
	this.setFrequency = function(w){
		this.w = w;
	};

	// Update so that we can see the spinner
	this.update(0);
}
