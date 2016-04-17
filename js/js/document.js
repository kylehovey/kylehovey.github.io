//WireWorld Document Script
//Author: Kyle Hovey

// ===== DOCUMENT ON READY ===== //
$(function(){
	//Hello message
	intro = '';
	rules = '';
	helpDisplayed = false;
	//INTRO
	intro += '<hr>This is a Wireworld interpreter written for Chrome.<br /><br />';
	intro += '<a href="https://en.wikipedia.org/wiki/Wireworld">Wireworld</a> ';
	intro += 'is a cellular automata capable of modeling <br />';
	intro += 'combinational logic circuits. With surprisingly<br />';
	intro += 'few rules, this CA is fully turing complete.<br />';
	intro += '<br /><b>Cell States:</b><br />Conductor (orange)';
	intro += '<br />Electron Head (light blue)<br />Electron Tail: (dark blue)<br />';
	intro += '<br /><b>CA Rules:</b><br />No State --> No State<br />';
	intro += 'Electron Head --> Electron Tail<br />';
	intro += 'Electron Tail --> Conductor<br />';
	intro += '<b>If 1 or 2 Electron Heads Adjacent:</b><br />';
	intro += 'Conductor --> Electron Head<br />';
	//RULES
	rules += '<b>At any time, you may press "<b>h</b>" to bring up this dialog.</b>';
	rules += '<br /><u><b>Basic Commands:</b></u>';
	rules += '<br /><b>Spacebar</b>: Pause/Play Simulation';
	rules += '<br /><b>Left Click</b>: Add Conductor';
	rules += '<br /><b>e + Left Click</b>: Add Electron Head';
	rules += '<br /><b>Shift + Left Click</b>: Delete Cell';
	rules += '<br />Note: You can click and drag to paint cells.';
	rules += '<br /><b>c</b>: Delete All Electrons Heads/Tails';
	rules += '<br /><b>Shift + c</b>: Clear Board';
	rules += '<br /><b>+</b>: Speed Up Simulation';
	rules += '<br /><b>-</b>: Slow Down Simulation';
	rules += '<br /><b>s</b>: Advance One Generation';
	rules += '<br /><u><b>Copying:</b></u>';
	rules += '<br />To start copying, press  "<b>y</b>" and click on one';
	rules += '<br />corner of the region you want to duplicate,';
	rules += '<br />then lastly on the opposite corner. This will';
	rules += '<br />store your selection in the clipboard.';
	rules += '<br /><u><b>Pasting:</b></u>';
	rules += '<br />To start pasting, press  "<b>p</b>" and';
	rules += '<br />click on where you want to paste your clipboard.';
	rules += '<br /><u><b>Deleting:</b></u>';
	rules += '<br />To start deleting, press  "<b>d</b>" and';
	rules += '<br />select a region in the same way you would when';
	rules += '<br />using the copying feature. All cells within this';
	rules += '<br />region will be deleted.';
	rules += '<br />Check out <a href="http://www.quinapalus.com/wi-index.html">quinapalus</a> for circuit ideas and more in-depth info.';
	
	//Show the intro and rules
	swal({
		title: 'Welcome!',
		text: intro,
		confirmButtonText: 'Next',
		closeOnConfirm: false,
		html: true
	}, function(){
		helpDisplayed = true;
		setTimeout(showHelp(), 100);
	});
	
	//Initialize board
	board = new GameGrid("game-grid", 10);
	board.n = 1;
	board.draw();

	//Runtime variables
	paintValue = 1;
	running = false;
	painting = false;
	runID = null;
	dragID = null;
	delay = 50;

	//Editing variables
	copying = 0;
	pasting = false;
	deleting = 0;

	//Mouse Position
	mouse = {x: 0, y: 0};

	//JQuery Listeners
	$("#game-grid").on("mousemove", function(event){
		//Set the new mouse coords
		mouse.x = event.pageX;
		mouse.y = event.pageY;

		//Set the box end if copying or deleting
		if (copying == 2 || deleting){
			board.setBoxEnd(mouse);
			board.draw();
		}

		//Set the box start if pasting
		if (pasting){
			board.setBoxFollow(mouse);
			board.draw();
		}
	}).on("mousedown", function(event){
		//If we already aren't painting, or copying, or pasting, or deleting
		if (!painting && !copying && !pasting && !deleting){
			//Paint with the mouse
			paintValue = event.shiftKey ? 0 : paintValue;
			dragID = setInterval(function(){
				board.set(mouse, paintValue);
			}, 1);
			painting = true;
		}else if (copying == 1){
			//Begin selecting copy range
			copying++;
			board.setBoxStart(mouse);
			board.enableBox();
		}else if (copying == 2){
			//Done selecting copy range, update clipboard
			board.setClipboard();

			//Disable selection and copying
			board.disableBox();
			board.draw();
			copying = 0;
		}else if (deleting == 1){
			//Begin selecting copy range
			deleting++;
			board.setBoxStart(mouse);
			board.enableBox();
		}else if (deleting == 2){
			//Delete cells within the box
			board.resetCellsInBox();

			//Done selecting range, disable selection
			board.disableBox();
			board.draw();
			deleting = 0;
		}else if (pasting){
			//Paste the clipboard at coords
			board.paste(mouse);
			board.disableBox();
			board.disablePasteOutline();
			board.draw();
			pasting = false;
		}
	}).on("mouseup", function(event){
		//Stop painting
		if (painting){
			clearInterval(dragID);
			painting = false;
		}
	})
	
	$(document).on("keydown", function(event){
		if (event.keyCode == 69 || event.keyCode == 18){
			//Start painting electrons
			paintValue = 2;
		}
	}).on("keyup", function(event){
		if (event.keyCode == 0 || event.keyCode == 32){
			//Pause or play with space bar
			if (running){
				running = false;
				clearInterval(runID);
			}else{
				running = true;
				runID = setInterval(function(){
					board.update();
					board.draw();
				}, delay);
			}
		}else if (event.keyCode == 187 || event.keyCode == 189){
			//Plus means speed up
			delay -= delay > 30  && event.keyCode == 187 ? 10 : 0;

			//Minus means slow down
			delay += delay < 1990 && event.keyCode == 189 ? 10 : 0;
			
			//Change the speed
			clearInterval(runID);
			runID = setInterval(function(){
				board.update();
				board.draw();
			}, delay);
		}else if (event.keyCode == 67){
			//Press c to clear
			if (event.shiftKey){
				board.clear();
				board.draw();
			}else{
				board.insulate();
				board.draw();
			}
		}else if (event.keyCode == 82 && event.shiftKey){
			//Press r to randomly fill
			board.randomFill();
			board.draw();
		}else if (event.keyCode == 83){
			//Press s to step
			board.update();
			board.draw();
		}else if (event.keyCode == 89){
			//Press y to copy
			console.log("copy commanded");
			copying++;
		}else if (event.keyCode == 80){
			//Press p to paste
			pasting = true;
			board.setBoxFollow(mouse);
			board.enableBox();
			board.enablePasteOutline();
			board.draw();
		}else if (event.keyCode == 68){
			//Press d to delete
			deleting++;
		}else if (event.keyCode == 72){
			//Press h for help menu
			if (!helpDisplayed){
				showHelp();
			}
		}else if (event.keyCode == 69 || event.keyCode == 18){
			//Stop painting electrons
			paintValue = 1;
		}
	});
});
// ===== DOCUMENT ON READY ===== //
