// Javascript onload

$(function() {
	// Initialize canvas
	var canvas = $("#drawing-board")[0];

	// Create context
	var ctx = canvas.getContext("2d");

	// Create object for canvas
	draw = {
		canvas : canvas,
		ctx : ctx,
		resize : function() {
			// Resize this canvas to full
			this.canvas.width = window.innerWidth;
			this.canvas.height = window.innerHeight;
		},
		clear : function() {
			// Clear the canvas
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		}
	}
	draw.resize();

	// Initialize the analyzer context object
	audioTools = new (window.AudioContext || window.webkitAudioContext)();

	// Create the environment
	environment = new Environment();

	// Create stars
	var stars = new Stars({
		nStars : 200,
		fWindow : [0.5, 0.55],
		glow : 20
	});

	// Mountain colors
	var colors = [
		"#425172",
		"#2A3251",
		"#111F3A",
		"#1B2538"
	];

	// Mountain frequency windows
	var fWindows = [
		[0, 0.2],
		[0.2, 0.4],
		[0.4, 0.6],
		[0.55, 0.65]
	];
	
	// Create empty mountain range
	var range = new Array();

	// For each color, create a mountain
	for (var i = 1; i < colors.length + 1; i++) {
		range.push(new Mountain({
			height : draw.canvas.height/(2*i),
			offset : draw.canvas.height/(4*i) + draw.canvas.height/5,
			randLevel : 0.5,
			randFalloff : 0.9,
			points : 200,
			color : colors[i - 1],
			fWindow : fWindows[i - 1],
			scaling : (i == 1) ? 2 : 1
		}));
	}

	// Create a campfire
	var fire = new CampFire({
		emberWidth : 20,
		pixelDim : [50, 100],
		falloff : 0.9,
		randLevel : 50,
		sigShift : 50,
		sigScale : 10,
		colors : [
			[255, 149, 104, 0],
			[255, 100, 50, 1],
			[200, 51, 0, 1]
		],
		position : [
			draw.canvas.width/2,
			draw.canvas.height
		],
		fWindow : [0, 0.5]
	});

	// Add the stars to environment
	environment.addFeature({
		feature : stars,
		animated : true
	});

	// Add the mountains to environment
	$.each(range, function(i, mountain) {
		environment.addFeature({
			feature : mountain,
			animated : true
		});
	});
	
	// Add the campfire
	environment.addFeature({
		feature : fire,
		animated : true
	});

	// Start the environment
	environment.start();
	
	// Grab our audio element
	audio = document.getElementById("main-track");

	// Create analyser
	analyser = new AudioAnalyser(audio);

	// Play audio and start analysis
	audio.play();
	analyser.start();

	// LISTENERS
	$(window).on('keyup', function(event) {
		if (event.keyCode == 0 || event.keyCode == 32) {
			// Spacebar to pause/play
			if (audio.paused) {
				analyser.stop();
				audio.play();
			} else {
				analyser.start();
				audio.pause();
			}
		}
	}).resize(function(event) {
		// Resize canvas
		draw.resize();
	});
});
