// Class definition for audio analyser
//
// Author: Kyle Hovey

function AudioAnalyser(audio) {
	// Save the audio element
	this.audio = audio;

	// Create media source
	this.source = audioTools.createMediaElementSource(audio);

	// Create analyzer and connect it to media source
	this.analyser = audioTools.createAnalyser();
	this.source.connect(this.analyser);
	this.source.connect(audioTools.destination);

	// Store frequency data
	this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount);
	this.analyser.getByteFrequencyData(this.frequencyData);

	// Start analysis
	this.start = function() {
		// Save a reference to this
		var self = this;

		// Start updating frequency data at 60Hz
		this.runId = setInterval(function() {
			// Update frequency data
			self.analyser.getByteFrequencyData(self.frequencyData);
		}, 17);
	}

	// Stop analysis
	this.stop = function() {
		clearInterval(this.runId);
	}

	// Find the average of a window of frequencies
	this.level = function(start = 0, end = 1) {
		return secAvg(this.frequencyData, start, end);
	}

	// Get the normalized frequency list from a window
	this.normalized = function(start = 0, end = 1) {
		return normalize(this.frequencyData.slice(
			start*this.frequencyData.length,
			end*this.frequencyData.length
		), 255);
	}
};
