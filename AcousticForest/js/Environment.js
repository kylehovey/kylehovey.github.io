// Class definition for sound-reactive environment
//
// Author: Kyle Hovey

function Environment() {
	// Storage of environment variables
	this.geography = new Array();

	// Add something to the environment
	this.addFeature = function(feature, name, animated = true) {
		// Add it to the geography
		this.geography.push({
			feature : feature,
			name : name,
			animated : animated
		});
	}

	// Start animating the environment
	this.start = function() {
		this.time = setInterval(function() {
			// For each geographic feature
			for (var featureInfo in this.geography) {
				if (featureInfo.animated) {
					featureInfo.feature.update();
				}
			}
		}, 17);
	}

	// Stop animating the environment
	this.stop = function() {
		clearInterval(this.time);
	}
}
