//Class definition for game cell
//Author: Kyle Hovey

class Cell {
    constructor(){
        this.state = 0;
	this.next = 0;
    }

    copy(inCell){
	    this.state = inCell.state;
	    this.next = inCell.next;
    }

    getColor(){
	    if (this.state == 1){
		    return 'rgb(254, 125, 53)';
	    }else if (this.state == 2){
		    return 'rgb(51, 153, 255)';
	    }else{
		    return 'rgb(0, 66, 128)';
	    }
    }
}
