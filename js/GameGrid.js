//CALSim Logic
//Author: Kyle Hovey

class GameGrid {
	constructor(canvasID, cellSize = 10){
		//Create the canvas
		this.canvas = $("#" + canvasID)[0];
		this.canvas = this.canvas.getContext('2d');

		//Find cell variables
		this.cellSize = cellSize;
		this.resize();

		//Crate a box for highlighting areas
		this.box = {start: {x: 0, y: 0}, end: {x: 0, y: 0}};
		this.drawBox = false;
		this.pasteOutline = false;

		//Clipboard for storing saved data
		this.clipboard = [];

		//Create the cells
		this.cells = [];
		for (var i = 0; i < this.cols; i++){
			this.cells.push([]);
			for (var j = 0; j < this.rows; j++){
				this.cells[i].push(new Cell());
			}
		}
	}

	//Activate cell at pixel-wise coords
	set(coords, value){
		this.get(Math.floor(coords.x/this.cellSize), Math.floor(coords.y/this.cellSize)).state = value;
		this.get(Math.floor(coords.x/this.cellSize), Math.floor(coords.y/this.cellSize)).next = value;
		this.draw();
	}

	//Resize the game
	resize(){
		//Resize canvas
		this.canvas.canvas.width = window.innerWidth;
		this.canvas.canvas.height = window.innerHeight;

		//Resize cells
		this.cols = parseInt(window.innerWidth/this.cellSize);
		this.rows = parseInt(window.innerHeight/this.cellSize);
	}

	//Randomly fill the grid
	randomFill(){
		//Run through each element
		$.each(this.cells, function(x, col){
			$.each(col, function(y, cell){
				cell.state = _.random(0,3);
			}.bind(this));
		}.bind(this));
	}

	//Remove all electrons
	insulate(){
		//Run through each element
		$.each(this.cells, function(x, col){
			$.each(col, function(y, cell){
				if (cell.state == 2 || cell.state == 3){
					cell.state = 1;
				}else{
					cell.next = cell.state;
				}
			}.bind(this));
		}.bind(this));
	}

	//Clear the board
	clear(){
		//Run through each element
		$.each(this.cells, function(x, col){
			$.each(col, function(y, cell){
				cell.state = 0;
				cell.next = 0;
			}.bind(this));
		}.bind(this));
	}

	//Get the specified cell
	get(x, y){
		return this.cells[(x + this.cols)%this.cols][(y + this.rows)%this.rows];
	}

	//Paste cells into the board
	paste(coords){
		var start = {x: 0, y: 0}
		var end = {x: 0, y: 0};
		start.x = Math.floor(coords.x/this.cellSize);
		start.y = Math.floor(coords.y/this.cellSize);
		$.each(this.clipboard, function(x, col){
			$.each(col, function(y, cell){
				var tempCell = this.cells[(x + start.x + this.cols)%this.cols][(y + start.y + this.rows)%this.rows];
				if (tempCell.state == 0){
					this.cells[(x + start.x + this.cols)%this.cols][(y + start.y + this.rows)%this.rows].copy(cell);
				}
			}.bind(this));
		}.bind(this));
	}

	//Reset all cells contained within box
	resetCellsInBox(){
		//Make sure that we have the right region
		var startX = this.box.start.x < this.box.end.x ? this.box.start.x : this.box.end.x;
		var endX = this.box.start.x < this.box.end.x ? this.box.end.x : this.box.start.x;
		var startY = this.box.start.y < this.box.end.y ? this.box.start.y : this.box.end.y;
		var endY = this.box.start.y < this.box.end.y ? this.box.end.y : this.box.start.y;
		for (var i = startX; i < endX; i++){
			for (var j = startY; j < endY; j++){
				this.cells[i][j].state = 0;
				this.cells[i][j].next = 0;
			}
		}
	}

	//Calculate the next iteration
	findNext(){
		var electrons;
		$.each(this.cells, function(x, col){
			$.each(col, function(y, cell){
				if (cell.state == 1){
					//If conductor
					electrons = 0;
					for (var i = -1; i < 2; i++){
						for (var j = -1; j < 2; j++){
							if (this.get(x + i, y + j).state == 2){
								electrons++;
							}
						}
					}
					if (electrons == 1 || electrons == 2){
						cell.next = 2;
					}else{
						cell.next = cell.state;
					}
				}else if (cell.state == 2){
					//If electron head
					cell.next = 3;
				}else if (cell.state == 3){
					//If electron tail
					cell.next = 1;
				}
			}.bind(this));
		}.bind(this));
	}

	//Update the grid
	update(){
		//Find the next states
		this.findNext();

		//Update the states
		$.each(this.cells, function(x, col){
			$.each(col, function(y, cell){
				cell.state = cell.next;
			}.bind(this));
		}.bind(this));
	}

	//Enable paste outline
	enablePasteOutline(){
		this.pasteOutline = true;
	}
	
	//Disable paste outline
	disablePasteOutline(){
		this.pasteOutline = false;
	}

	//Enable the box
	enableBox(){
		this.drawBox = true;
	}

	//Disable the box
	disableBox(){
		this.drawBox = false;
	}

	//Set the box's start coords
	setBoxStart(start){
		this.box.start = {x: Math.floor(start.x/this.cellSize), y: Math.floor(start.y/this.cellSize)};
	}

	//Set the box's end coords
	setBoxEnd(end){
		this.box.end = {x: Math.floor(end.x/this.cellSize), y: Math.floor(end.y/this.cellSize)};
	}

	//Set the box such that it starts at this coord
	setBoxFollow(coords){
		this.setBoxStart(coords);
		this.box.end = {x: this.box.start.x + this.clipboard.length, y: this.box.start.y + this.clipboard[0].length};
	}

	//Set the clipboard for this board
	setClipboard(){
		//Make sure we have the right region
		var startX = this.box.start.x < this.box.end.x ? this.box.start.x : this.box.end.x;
		var endX = this.box.start.x < this.box.end.x ? this.box.end.x : this.box.start.x;
		var startY = this.box.start.y < this.box.end.y ? this.box.start.y : this.box.end.y;
		var endY = this.box.start.y < this.box.end.y ? this.box.end.y : this.box.start.y;

		//Get the selected area and copy it to temp
		this.clipboard = this.cells.slice(startX, endX);
		$.each(this.clipboard, function(x, col){
			this.clipboard[x] = JSON.parse(JSON.stringify(col.slice(startY, endY)));
		}.bind(this));
	}

	//Draw the board
	draw(){
		//Clear the canvas
		this.canvas.clearRect(0, 0, window.innerWidth, window.innerHeight);

		//Resize canvas
		this.resize();

		//Draw the grid
		$.each(this.cells, function(x, col){
			$.each(col, function(y, cell){
				this.canvas.strokeStyle = 'rgba(50, 50, 50, 0.5)';
				this.canvas.beginPath();
				this.canvas.rect(x*this.cellSize, y*this.cellSize, this.cellSize, this.cellSize);
				if (cell.state > 0){
					this.canvas.fillStyle = cell.getColor();
					this.canvas.fill();
				}
				this.canvas.stroke();
			}.bind(this));
		}.bind(this));

		//Draw the box, if it is set
		if (this.drawBox){
			this.canvas.strokeStyle = this.pasteOutline ? 'rgb(0, 200, 30)' : 'rgb(200, 0, 30)';
			this.canvas.fillStyle = this.pasteOutline ? 'rgba(0, 200, 30, 0.25)' : 'rgba(200, 0, 30, 0.25)';
			this.canvas.beginPath();
			var ulX = this.box.start.x*this.cellSize;
			var ulY = this.box.start.y*this.cellSize;
			var lrX = this.box.end.x*this.cellSize;
			var lrY = this.box.end.y*this.cellSize;
			this.canvas.rect(ulX, ulY, lrX - ulX, lrY - ulY);
			this.canvas.stroke();
			this.canvas.fill();
		}

		//Draw the paste outline, if it is set
		if (this.pasteOutline){
			$.each(this.clipboard, function(x, col){
				$.each(col, function(y, cell){
					var posX = (this.box.start.x + x + this.cols)%this.cols;
					var posY = (this.box.start.y + y + this.rows)%this.rows;
					if (cell.state == 1){
						this.canvas.strokeStyle = 'rgb(204, 105, 23)';
						this.canvas.fillStyle = 'rgba(204, 105, 23, 0.2)';
						this.canvas.beginPath();
						this.canvas.rect(posX*this.cellSize, posY*this.cellSize, this.cellSize, this.cellSize);
						this.canvas.stroke();
						this.canvas.fill();
						if (this.cells[posX][posY].state == 1){
							this.canvas.strokeStyle = 'rgb(204, 0, 30)';
							this.canvas.fillStyle = 'rgba(200, 0, 30, 0.5)';
							this.canvas.beginPath();
							this.canvas.rect(posX*this.cellSize, posY*this.cellSize, this.cellSize, this.cellSize);
							this.canvas.fill();
							this.canvas.stroke();
							this.canvas.stroke();
						}
					}
				}.bind(this));
			}.bind(this));
		}
	}
}
