var Presentation = {
	canvasOval: function(color, text, px, py){
		var canvas = document.getElementById(color+"Canvas");
		var context = canvas.getContext("2d");
		var centerX = 0;
		var centerY = 0;
		var radius = 200;
		
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
		context.lineWidth = 10;
		context.strokeStyle = "black";
		context.stroke();
		

		context.fillStyle = "black";
		context.font = '120px sans-serif';
		context.fillText(text, px, py);
	},
	canvasArrowRed: function(){
		canvas = document.getElementById("arrowCanvasRed");
		ctx = canvas.getContext("2d")
		ctx.lineWidth = 10;
		ctx.beginPath();  
		ctx.moveTo(10, 10);
		ctx.quadraticCurveTo(380, 200, 380, 485);
		ctx.stroke(); 
		
		ctx.beginPath(); 
		ctx.moveTo(380, 490);
		ctx.lineTo(435, 440);
		ctx.lineTo(320, 450);
		ctx.lineTo(380, 490);
		ctx.lineCap = "round";
		ctx.lineJoin = "round";
		ctx.stroke(); 
		ctx.fill(); 
		ctx.closePath();
	},
	canvasArrowGreen: function(){
		canvas = document.getElementById("arrowCanvasGreen");
		ctx = canvas.getContext("2d")
		ctx.lineWidth = 10;
		ctx.beginPath();  
		ctx.moveTo(100, 140);
		ctx.quadraticCurveTo(560, 400, 1090, 140);
		ctx.stroke(); 
		
		ctx.beginPath(); 
		ctx.moveTo(100, 140);
		ctx.lineTo(170, 110);
		ctx.lineTo(130, 220);
		ctx.lineTo(100, 140);
		ctx.lineCap = "round";
		ctx.lineJoin = "round";
		ctx.stroke(); 
		ctx.fill(); 
		ctx.closePath();
	},
	canvasArrowBlue: function(){
		canvas = document.getElementById("arrowCanvasBlue");
		ctx = canvas.getContext("2d")
		ctx.lineWidth = 10;
		ctx.beginPath();  
		ctx.moveTo(380, 50);
		ctx.quadraticCurveTo(0, 200, 10, 525);
		ctx.stroke(); 
		
		ctx.beginPath(); 
		ctx.moveTo(380, 50);
		ctx.lineTo(340, 130);
		ctx.lineTo(310, 20);
		ctx.lineTo(380, 50);
		ctx.lineCap = "round";
		ctx.lineJoin = "round";
		ctx.stroke(); 
		ctx.fill(); 
		ctx.closePath();
	}
		
}