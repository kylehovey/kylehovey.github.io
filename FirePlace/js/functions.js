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
		return 1/(1 + Math.exp(-(t - sigShift)*sigScale));
	}
}
