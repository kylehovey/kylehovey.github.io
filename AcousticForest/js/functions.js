// General purpose non-method functions
//
// Author: Kyle Hovey

// Mozilla Developer Network's suggested randrange function
function randRange(min, max) {
    return Math.random() * (max - min) + min;
}

// Generate a sigmoid function with a scale and shift
function genSigmoid(sigScale, sigShift) {
	return function(x) {
		return 1/(1 + Math.exp(-(x - sigShift)*sigScale));
	}
}

// Smooth function that appears to be random
function genSmoothWave(wind) {
	// Determine wind speed
	var wind = wind/100000000;

	// Generate function and return it
	return function(x) {
		return 0.5 + (
			Math.sin(x*wind) +
			Math.sin((2*x + 1)*wind) +
			Math.sin((3*x - 1)/1) +
			Math.sin((5*x + 3)*wind)
		)/6;
	};
}

// Find the pseudo-magnitude of a large array
function pMag(arr) {
	// Storage variables
	var out = 0;

	// Get intermittent samples of array
	for (var i = 0; i < arr.length; i += 5) {
		out += Math.pow(arr[i], 2);
	}

	// Return mag
	return Math.sqrt(out);
}

// Find the average of an array
function avg(arr) {
	// Generate output
	var out = 0;

	// Add up
	for (var i = 0; i < arr.length; i++) {
		out += arr[i];
	}

	// Return average
	return out/arr.length;
};

// Find the sectional average of an array
function secAvg(arr, start, end) {
	return avg(arr.slice(arr.length*start, arr.length*end));
}

// Normalize an array based upon a max value
function normalize(arr, maxVal) {
	// Normalize array
	for (var i = 0; i < arr.length; i++) {
		arr[i] /= maxVal;
	}

	// Return it
	return arr;
}
