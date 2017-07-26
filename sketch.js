function drawSquares(noOfSquares){
	var width = (500/noOfSquares)-2;

	for (i = 0; i < noOfSquares*noOfSquares; i++) {
		var div = document.createElement("div");
		div.className = "squareClass";
		div.style.width = width;
		div.style.height = width;
		div.style.position = "relative";
		div.style.float = "left";
		div.style.border = '1px solid #d3d3d3';
		div.style.display = 'block';
		div.style.background = '#ffffff';
		
		document.getElementById("canvas").appendChild(div);
	}
}

function colorSquares(){
		$('.squareClass').hover(function(){
		$colorOfSquares = document.getElementById('favColor').value;
		$(this).css('animation', 'pulse 5s');
		$(this).css('background-color',$colorOfSquares);
		
		
		});
}
		