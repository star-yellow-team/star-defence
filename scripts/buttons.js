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

yMin = 5;
yMax = yMin + canvasHeight - boxSize;

var currentMousePos = { x: -1, y: -1 };

// Aducem ghostImageul albastru la mouse, stickuit pe grid
// ??? AICI SUNT PROBLEME LA RESIZE - NEEDZ HALP 
$(document).mousemove(function(event) {
	if (blueHover == 1) {
		$("#blue").show();
		if (event.pageX < xMin) {
			boxX = xMin;
		} else if (event.pageX >= xMax) {
			boxX = xMax;
		} else {
			boxX = xMin + Math.round((event.pageX - xMin - boxSize / 2) / boxSize) * boxSize;
		}
		if (event.pageY < yMin) {
			boxY = yMin;
		} else if (event.pageY >= yMax) {
			boxY = yMax;
		} else {
			boxY = yMin + Math.round((event.pageY - yMin - boxSize / 2) / boxSize) * boxSize;
		}
        $("#blue").css("left",boxX);
       	$("#blue").css("top",boxY);
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
	addElement(turretNumber, Math.round((boxX - xMin) / boxSize), Math.round(boxY / boxSize), mapNumber);
	unstick();
}