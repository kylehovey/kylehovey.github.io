// kylehovey.github.io main page JS

$(function() {
	// Create wheelnav
	wheel = new wheelnav("main-nav");
	//wheel.colors = colorpalette.fractallove;
	wheel.colors = ['#497F4C'];
	wheel.clickModeRotate = false;
	wheel.slicePathFunction = slicePath().DonutSlice;
	wheel.markerPathFunction = markerPath().PieLineMarker;
	wheel.markerEnable = true;

	// Add items
	wheel.createWheel([
			'CALSim',
			'Villein\nTranslator',
			'Euler\nGolf',
			'Ulam\nSpinner'
	]);

	// Add listeners
	// CALSim
	wheel.navItems[0].navigateFunction = function() {
		console.log("CALSim");
	};
	// Villein Translator
	wheel.navItems[1].navigateFunction = function() {
		console.log("Villein");
	};
	// Euler Golf
	wheel.navItems[2].navigateFunction = function() {
		console.log("Euler Golf");
	};
	// Ulam Spinner
	wheel.navItems[3].navigateFunction = function() {
		console.log("Ulam Spinner");
	};
});
