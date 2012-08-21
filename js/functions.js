var Presentation = {
	canvasOval: function(color){
		var canvas = document.getElementById(color+"Canvas");
		var context = canvas.getContext("2d");
		var centerX = 0;
		var centerY = 0;
		var radius = 50;
		
	// save state
		context.save();
		
	// translate context
		context.translate(canvas.width / 2, canvas.height / 2);
		
	// scale context horizontally
		context.scale(2, 1);
		
	// draw circle which will be stretched into an oval
		context.beginPath();
		context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
		
	// restore to original state
		context.restore();
		
	// apply styling
		context.fillStyle = color;
		context.fill();
		context.lineWidth = 5;
		context.strokeStyle = "black";
		context.stroke();
	},
	canvasArrow: function(){
		canvas = document.getElementById("arrowCanvas");
		ctx = canvas.getContext("2d")
		ctx.lineWidth = 6;
		ctx.beginPath();  
		ctx.moveTo(10, 10);
		ctx.quadraticCurveTo(180, 80, 180, 205);
		ctx.stroke(); 
		
		ctx.rotate(Math.PI/16);
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(-50,-50);
		ctx.lineTo(-50, 50);
		ctx.closePath();
		ctx.fill();
		ctx.restore();
	}
		
}