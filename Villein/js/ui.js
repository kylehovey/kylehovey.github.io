// User Interface script
// Author: Kyle Hovey

$(function(){
		// Define the utility script object
		_ = new numUtils();

		// Make the main digit
		mainDigit = new Villein("#output", 0);

		// Add listeners
		$("#submit").on("click", function(event){
				// Find user number
				var num = +$("#number-entry").val();

				// Set the digit
				mainDigit.setDigit(num);
		});

		$("#clear").on("click", function(event){
				// Clear the input
				$("#number-entry").val("");

				// Clear the digit
				mainDigit.setDigit(0);
		});
});
