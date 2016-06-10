// Code to generate seed-of-life background visuals for main page
$(function(){
	//Create the canvas and get context
	var canvas = document.getElementById("fruitOfLife");
	var ctx = canvas.getContext("2d");

	//Set the width and height
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;

	//Create fruit of life
	growFruit(ctx, 80);
});

function circle(ctx, x, y, r, width=1, color='rgba(255,255,255,0.5)'){
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2*Math.PI, false);
	ctx.lineWidth = width;
	ctx.strokeStyle = color;
	ctx.stroke();
}

function horizontalCircles(ctx, r, h=0, k=0){
	var u = Math.round(ctx.canvas.width);
	for (var i = 0; i < u; i++){
		circle(ctx, i*r + h, k, r);
	}
}

function growFruit(ctx, r){
	var v = Math.round(ctx.canvas.height);
	var h = 0;
	var k = 0;
	var dx = r*Math.cos(-Math.PI/3);
	var dy = -r*Math.sin(-Math.PI/3);
	for (var j = 0; j < v; j++){
		horizontalCircles(ctx, r, h, k);
		h += dx*Math.pow(-1,j);
		k += dy;
	}
}
