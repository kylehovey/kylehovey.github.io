// Global constants to store menu data
MODE = "Constant Color";
R = 0;
G = 0;
B = 0;
COLORSIN_RATE = 0;
COLORSIN_RIPPLE = 0;
SELECTED_ANIMATION = "";

MENU_OPTIONS = {
	constant : {
		menu : {
			"Constant Color" : {
				menu : [
					{
						type : "slider",
						id : "constant-R",
						range : [0, 255],
						color : "crimson",
						value : R
					},
					{
						type : "slider",
						id : "constant-G",
						range : [0, 255],
						color : "forestgreen",
						value : G
					},
					{
						type : "slider",
						id : "constant-B",
						range : [0, 255],
						color : "navy",
						value : B
					}
				],
				callback: staticColor
			},
			"Static Pattern" : {
				menu : [
				],
				callback: staticPattern
			}
		}
	},
	animated : {
		menu : {
			"Color Waves" : {
				menu : [
					{
						type : "slider",
						label : "Rate",
						id : "colorsin-rate",
						range : [1, 10],
						color : "slateBlue",
						value : COLORSIN_RATE
					},
					{
						type : "slider",
						label : "Ripple Factor",
						id : "colorsin-ripples",
						range : [1, 10],
						color : "slateBlue",
						value : COLORSIN_RIPPLE
					}
				],
				callback : animationSelected
			}
		}
	}
}

// Set panel to a static pattern
function staticPattern(){
}

// Set panel to given color
function staticColor(){
}

// Start animating with the given pattern
function animationSelected(){
}
