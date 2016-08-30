// Number utilities
//
// Author: Kyle Hovey

function numUtils(){
		this.toFour = function(num){
				// Create the output number
				var out = 0;

				// Temporary variables
				var digit = 0,
				placeValue = 0;

				// For a Villein digit, num < 4^5 = 1024
				for (var i = 4; i >= 0; i--){
						// Find value at place i
						placeValue = Math.pow(4, i);

						// If number contains value at digit i
						if (num - placeValue >= 0){
								// Find digit
								digit = (num - num % placeValue)/placeValue;

								// Shift it into out
								out += (Math.pow(10, i))*digit;

								// Remove what we just represented
								num %= placeValue;
						}
				}

				// Return the final number
				return out;
		};

		// Basic number structures
		this.structures = [
				[[-1, 0]],
				[[0, -1], [1, 0]],
				[[0, -1], [0, 1], [-1, 0]]
		];

		// Digit locations
		this.digitLocations = [
				[2, 2],
				[1, 1],
				[3, 1],
				[3, 3],
				[1, 3]
		];
};
