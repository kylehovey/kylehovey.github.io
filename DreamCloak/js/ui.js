$(function(){
	// Menu button logic
	$('#start').on('click', function(event){
		$('#select-category').slideDown();
		setTimeout(function(){
			$('#start').slideUp();
		}, 300);
	});

	$(".btn.btn-primary.bolded.category").on('click', function(event){
		$("#mode-options-container").slideDown();
	});

	$('#constant').on('click', function(event){
		if (!($("#mode").data("mode") == "constant")){
			generateModeMenu("constant");
		}
	});

	$('#animated').on('click', function(event){
		if (!($("#mode").data("mode") == "animated")){
			generateModeMenu("animated");
		}
	});

	$("#mode").on('change', function(event){
		generateModeOptions();
	});
});

function generateModeMenu(mode){
	// Find the dropdown
	var modeMenu = $("#mode");

	// Hide the menu
	$("#select-mode").slideUp();

	// Update the menu behind the scenes
	setTimeout(function(){
		// Empty the select list
		modeMenu.empty().selectpicker('refresh');

		// Retain what mode we are in
		modeMenu.data("mode", mode);
		
		// Populate it with new data
		$.each(MENU_OPTIONS[mode].menu, function(key, val){
			modeMenu.append("<option>" + key + "</option>");
		});

		// Update menu
		modeMenu.selectpicker('refresh');

		// Update options
		generateModeOptions();
	}, 400);

	// Show the menu
	$("#select-mode").slideDown();
}

function generateModeOptions(){
	// Find the dropdown
	var modeMenu = $("#mode");
	var modeOptions = $("#mode-menu-options");
	selectedOption = MENU_OPTIONS[modeMenu.data("mode")].menu[modeMenu.val()];

	// Empty the options
	modeOptions.empty();

	// Populate the options
	$.each(selectedOption.menu, function(i, item){
		if (item.type == "slider"){
			addSlider(item, modeOptions, selectedOption.callback);
		}
	});
}

// Add a slider to the given ID
function addSlider(sliderInfo, element, callback){
	element.append('<span class="slider-label">' + sliderInfo.label + '</span><div id="' + sliderInfo.id+ '"></div>');
	$("#"+sliderInfo.id).slider({
		orientation : "horizontal",
		range : "min",
		max : sliderInfo.range[1],
		slide : callback
	});
}
