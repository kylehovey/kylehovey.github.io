// Utility functions
//
// Author: Kyle Hovey

function floatMod(m, n) {
	// Find how many times n goes into m evenly
	var evenDiv = Math.floor(m/n);

	// Return the remainder
	return m - n*evenDiv;
}

function brownTown(t) {
	// Normalize t
	var t = (Math.sin(t/2) + 1)/2;

	// Return some good ol brown
	return board.lerpColors({
		R : 120,
		G : 79,
		B : 37
	},{
		R : 255,
		G : 255,
		B : 255
	}, t);
}
