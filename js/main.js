// kylehovey.github.io main page JS

$(function() {
	// Create wheelnav
	wheel = new wheelnav("main-nav");
	wheel.colors = ['#497F4C'];
	wheel.clickModeRotate = false;
	wheel.slicePathFunction = slicePath().DonutSlice;
	wheel.markerPathFunction = markerPath().PieLineMarker;
	wheel.markerEnable = true;

	// Generate nav items
	var navItems = new Array();
	$.each(projects, function(i, project) {
		navItems.push(project.nav);
	});

	// Add items
	wheel.createWheel(navItems);

	// Add listeners
	$.each(wheel.navItems, function(i, item) {
		item.navigateFunction = function() {
			$("#item-title").text(projects[i].title);
			$("#item-description").text(projects[i].description);
			$("#item-link").prop("href", projects[i].link);
		};
	});
	
	// Navigate to the first item
	wheel.navItems[0].navigateFunction();
});
