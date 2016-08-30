// Villein Digit class definition
//
// Villein arithmetic is in base 4, and each grid
// 5 base-4 digits (representing 0-1023 in decimal)

function Villein(id, n){
		// Create the canvas
		this.canvas = $(id).append('<canvas width=200 height=200 class="villein-digit"></canvas>').children(".villein-digit")[0];

		// Create context
		this.context = this.canvas.getContext("2d");

		// Create the internal digit structure
		this.connections = [];

		// Sets digit
		this.setDigit = function(num){
				// Find number in base four
				num = _.toFour(num);

				// Clear the canvas
				this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

				// Clear the grid
				this.grid = [[], [], [], [], []];

				// Determine the spaces inbetween dots
				var xStep = this.canvas.width/4;
				var yStep = this.canvas.height/4;

				// Draw the circles and record their locations
				for (var x = 0; x < 5; x++){
						for (var y = 0; y < 5; y++){
								// Memorize the location
								this.grid[x].push({
										x : x*xStep,
										y : y*yStep
								});

								// Draw the circle
								this.context.beginPath();
								this.context.arc(x*xStep, y*yStep, 15, 0, Math.PI*2);
								this.context.fillStyle = "#4d91ff";
								this.context.fill();
								this.context.closePath();
						}
				}
		}

		// Set the digit to number provided
		this.setDigit(n);
				
		// Return the object so that we can call it
		return this;
}
