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

	// Store frequency data
	this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount);
};
