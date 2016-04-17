//WireWorld UI Functions
//Author: Kyle Hovey

function showHelp(){
	swal({
		title: "Editing Commands:",
		text: rules,
		html: true
	}, function(){
		helpDisplayed = false;
	});
}
