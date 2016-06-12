// Global constants to store menu data
MODE = "Constant Color";
R = 0;
G = 0;
B = 0;
SELECTED_ANIMATION = "";

MENU_OPTIONS = {
	"Constant" : {
		menu : [
			{
				type : "slider",
				id : "static-R",
				range : [0, 255],
				color : "crimson",
				value : R
			},
			{
				type : "slider",
				id : "static-G",
				range : [0, 255],
				color : "forestgreen",
				value : G
			},
			{
				type : "slider",
				id : "static-B",
				range : [0, 255],
				color : "navy",
				value : B
			}
		],
		callback : staticColor
	},
	"Animated" : {
		menu : [
			{
				type : "drop-down",
				id : "animation-select",
				value : SELECTED_ANIMATION
			}
		],
		callback : animationSelected
	},
	"Sound Reactive" : {
		menu : [
			{
				type : "drop-down",
				id : "sonic-select",
				value : SELECTED_ANIMATION
			}
		],
		callback : animationSelected
	}
}

// Set panel to given color
function staticColor(r, g, b){
}

// Start animating with the given pattern
function animationSelected(choice){
}
