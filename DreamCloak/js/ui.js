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
		$("#apply-row").slideDown();
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
	$("#mode-menu").slideUp();
	$("#apply-row").slideUp();

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
	$("#mode-menu").slideDown();
	$("#apply-row").slideDown();
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
		} else if (item.type == "dropdown"){
			addDropdown(item, modeOptions, selectedOption.callback);
		}
	});
}

// Add a slider to the given ID
function addSlider(sliderInfo, element, callback){
	// Append the div element
	element.append('<span class="ui-label">' + sliderInfo.label + ': </span>'
			+ '<span class="slider-data" id="' + sliderInfo.id + '-data">' + sliderInfo.initial + '</span>'
			+ '<div id="' + sliderInfo.id+ '"></div>');
	
	// Create a temp var for the slider element
	var mySlider = $("#" + sliderInfo.id);

	// Init the slider
	mySlider.slider({
		orientation : "horizontal",
		range : "min",
		max : sliderInfo.range[1],
		slide : function(event){
			callback();
			$("#" + sliderInfo.id + "-data").text($("#" + sliderInfo.id).slider('value'));
		},
		value : sliderInfo.initial ? sliderInfo.initial : 0
	});

	// Change the color
	mySlider.children(".ui-slider-range").css("background", sliderInfo.color);
}

// Add a dropdown to the given ID
function addDropdown(dropdownInfo, element, callback){
	// Append the select menu
	element.append('<span class="ui-label">' + dropdownInfo.label + ':</span><br />'
		+ '<select class="selectpicker mode-select" id="' + dropdownInfo.id + '" data-style="btn-info" data-width="70%">');

	// Create a temp var for the dropdown element
	myDropdown = $("#" + dropdownInfo.id);

	// Populate the dropdown
	$.each(dropdownInfo.values, function(i, item){
		myDropdown.append('<option>' + item + '</option>');
	});

	// Update the dropdown
	myDropdown.selectpicker('refresh');
}
