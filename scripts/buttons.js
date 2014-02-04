/**
 * @author Adrian
 * Animeaza meniul si se ocupa de ghostImage-ul turetei pe care o plasez
 * lungimea si inaltimea documentului.
 */
var blueHover = 0;
var boxX;
var boxY;

// Ascundem ghostImageul si ne ocupam de animatia meniului
$(document).ready(function() {
	$("#ui-menu").hover(function(){
  		$("#ui-menu").addClass("slideUp");
  		$("#ui-menu").removeClass("slideDown");
  	},
  	function(){
  		$("#ui-menu").removeClass("slideUp");
  		$("#ui-menu").addClass("slideDown");
	});
})

var currentMousePos = { x: -1, y: -1 };

// Aducem ghostImageul albastru la mouse, stickuit pe grid
// ??? AICI SUNT PROBLEME LA RESIZE - NEEDZ HALP 
$(document).mousemove(function(event) {
	if (blueHover == 1) {
		$("#blue").show();
		if (event.pageX-5 < bodyLeftMargin) {
			boxX = bodyLeftMargin;
		} else if (event.pageX-5 >= bodyLeftMargin + canvasWidth) {
			boxX = bodyLeftMargin + canvasWidth - boxSize;
		} else {
			boxX = bodyLeftMargin + Math.round((event.pageX-5 - bodyLeftMargin - boxSize / 2) / boxSize) * boxSize;
		}
		if (event.pageY-5 >= canvasHeight) {
			boxY = canvasHeight - boxSize;
		} else {
			boxY = Math.round((event.pageY-5 - boxSize / 2) / boxSize) * boxSize;
		}
        $("#blue").css("left",boxX+5);
       	$("#blue").css("top",boxY+5);
	}
});
	

function stick() {
	blueHover = 1;
}

function unstick() {
	blueHover = 0;
	$("#blue").hide();
}

function second() {
	alert(bodyLeftMargin)
}

function third() {
	alert("You've clicked the third button!")
}

function drawTurret(turretNumber) {
	addElement(turretNumber, Math.round((boxX - bodyLeftMargin) / boxSize), Math.round(boxY / boxSize), mapNumber);
	unstick();
}