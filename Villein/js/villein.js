// Villein Digit class definition
//
// Villein arithmetic is in base 4, and each grid
// 5 base-4 digits (representing 0-1023 in decimal)
//
// Author: Kyle Hovey

function Villein(id, n){
		// Create the canvas
		this.canvas = $(id).append('<canvas width=200 height=200 class="villein-digit"></canvas>').children(".villein-digit")[0];

		// Create context
		this.context = this.canvas.getContext("2d");

		// Create the internal digit structure
		this.connections = [];

		// Sets digit
		this.setDigit = function(num){
				// Find number in base four, convert it to array
				num = (""+_.toFour(num)).split("");

				// Clear the canvas
				this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

				// Determine the spaces inbetween dots
				var step = this.canvas.height/4;

				// Draw the circles and record their locations
				for (var x = 0; x < 5; x++){
						for (var y = 0; y < 5; y++){
								// Draw the circle
								this.context.beginPath();
								this.context.arc(x*step, y*step, 15, 0, Math.PI*2);
								this.context.fillStyle = "#4d91ff";
								this.context.fill();
								this.context.closePath();
						}
				}

				// Find the line length
				var length = this.canvas.width/4;

				// Temporary variables
				var loc, line;

				// For jQuery
				var self = this;

				// Reverse digits for computational ease
				num.reverse();

				// For each digit, draw the connections
				$.each(num, function(i, digit){
						// Convert the digit string into number
						digit *= 1;

						// Find the location of the digit
						loc = _.digitLocations[i];
						
						// Find the digit pattern
						pattern = _.structures[digit - 1];

						// Draw a line for each connection
						$.each(pattern, function(j, direction){
								start = {
										x : loc[0]*length,
										y : loc[1]*length
								};

								end = {
										x : start.x + direction[0]*length,
										y : start.y + direction[1]*length
								};

								// Draw the line
								self.context.beginPath();
								self.context.moveTo(start.x, start.y);
								self.context.lineTo(end.x, end.y);
								self.context.strokeStyle = "#4d91ff";
								self.context.lineWidth = 10;
								self.context.stroke();
								self.context.closePath();

						});
				});
		}

		// Set the digit to number provided
		this.setDigit(n);
				
		// Return the object so that we can call it
		return this;
}
