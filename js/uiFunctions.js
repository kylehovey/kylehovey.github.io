//WireWorld UI Functions
//Author: Kyle Hovey
"use strict";

function showHelp(){
	swal({
		title: "Editing Commands:",
		text: rules,
		html: true
	}, function(){
		helpDisplayed = false;
	});
}
