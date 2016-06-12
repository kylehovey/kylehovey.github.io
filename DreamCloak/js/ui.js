$(function(){
	// Listeners
	$('#start').on('click', function(event){
		$('#select-category').slideDown();
		setTimeout(function(){
			$('#start').slideUp();
		}, 300);
	});

	$('#constant').on('click', function(event){
		$('#select-mode').slideUp();
		generateModeMenu("constant");
		$('#select-mode').slideDown();
	});

	$('#animated').on('click', function(event){
		$('#select-mode').slideUp();
		generateModeMenu("animated");
		$('#select-mode').slideDown();
	});

	// Generate initial menu
});

function generateModeMenu(mode){
	// Find the dropdown
	var modeMenu = $("#mode");

	// Hide the menu
	modeMenu.slideUp();

	// Update the menu behind the scenes
	setTimeout(function(){
		// Empty the select list
		modeMenu.empty().selectpicker('refresh');
		
		// Populate the new one
		if (mode == "constant"){
			$.each(MENU_OPTIONS.constant.menu, function(key, val){
				modeMenu.append("<option>" + key + "<option>");
			});
		}else if (mode == "animated"){
			$.each(MENU_OPTIONS.animated.menu, function(key, val){
				modeMenu.append("<option>" + key + "<option>");
			});
		}

		// Update menu
		modeMenu.selectpicker('refresh');
	}, 400);

	// Show the menu
	modeMenu.slideDown();
}
