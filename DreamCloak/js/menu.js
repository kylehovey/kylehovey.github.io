// Global constants to store menu data
MODE = "Constant Color";
R = 0;
G = 0;
B = 0;
COLORSIN_RATE = 0;
COLORSIN_RIPPLE = 0;
SELECTED_ANIMATION = "";
SOUND_MODE = "";

MENU_OPTIONS = {
	constant : {
		menu : {
			"Constant Color" : {
				menu : [
					{
						type : "slider",
						label : "Red",
						id : "constant-R",
						range : [0, 255],
						color : "crimson",
						value : R
					},
					{
						type : "slider",
						label : "Green",
						id : "constant-G",
						range : [0, 255],
						color : "forestgreen",
						value : G
					},
					{
						type : "slider",
						label : "Blue",
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
			},
			"Sound Reactive" : {
				menu : {
					type : "dropdown",
					label : "Sound Mode",
					id : "sound-mode",
					values : [
						"Sound Bar"
					],
					value : SOUND_MODE
				},
				callback : soundAnimation
			}
		}
	}
}

// Set panel to a static pattern
function staticPattern(){
}

// Set panel to given color
function staticColor(){
	console.log("called");
}

// Start animating with the given pattern
function animationSelected(){
}

// Start animating with respect to sound
function soundAnimation(){
}
