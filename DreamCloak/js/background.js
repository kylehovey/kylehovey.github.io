// Code to generate seed-of-life background visuals for main page
document.addEventListener("DOMContentLoaded", function(event) {
	//Create the canvas and get context
	canvas = document.getElementById("fruitOfLife");
	var ctx = canvas.getContext("2d");

	//Set the width and height
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;

	//Make sure we can resize the canvas
	window.addEventListener('resize', resizeCanvas, false);
	window.addEventListener('orientationchange', resizeCanvas, false);
	resizeCanvas();
});

function circle(ctx, x, y, r, width=1, color='rgba(0,0,0,0.15)'){
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2*Math.PI, false);
	ctx.lineWidth = width;
	ctx.strokeStyle = color;
	ctx.stroke();
}

function horizontalCircles(ctx, r, h=0, k=0){
	var u = ctx.canvas.width;
	var x = 0;
	for (var i = 0; i < u; i++){
		circle(ctx, i*r + h, k, r);
	}
}

function growFruit(ctx, r){
	var dx = r/2;
	var dy = -r*-0.8660254037844386;
	var h = -dx;
	var k = 0;
	for (var j = 0; j < ctx.canvas.height; j++){
		horizontalCircles(ctx, r, h, k);
		h += dx*Math.pow(-1,j);
		k += dy;
	}
}

function resizeCanvas(){
	alert(canvas);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	growFruit(canvas.getContext('2d'), 80);
}
