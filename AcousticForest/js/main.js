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
			this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
		}
	}
	draw.resize();

	// Initialize the analyzer context object
	audioTools = new (window.AudioContext || window.webkitAudioContext)();

	// Create the environment
	environment = new Environment();

	// Mountain colors
	var colors = [
		"#425172",
		"#2A3251",
		"#111F3A",
		"#1B2538"
	];
	
	// Create empty mountain range
	range = new Array();

	// For each color, create a mountain
	for (var i = 1; i < colors.length + 1; i++) {
		range.push(new Mountain({
			height : draw.canvas.height/(4*i),
			offset : draw.canvas.height/3,
			randLevel : 0.2,
			randFalloff : 0.9,
			points : 400,
			color : colors[i - 1]
		}));
	}

	// Render the mountains
	$.each(range, function(i, mountain) {
		mountain.renderMountain();
	});
	
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
