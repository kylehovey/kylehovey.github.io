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
