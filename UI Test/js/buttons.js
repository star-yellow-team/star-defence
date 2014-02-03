// JavaScript Document
var blueHover = 0;
var boxX;
var boxY;

$(document).ready(function() {
	$("#blue").hide();
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

$(document).mousemove(function(event) {
	if (blueHover == 1) {
		$("#blue").show();
		if (event.pageX < bodyLeftMargin) {
			boxX = bodyLeftMargin;
		} else if (event.pageX > bodyLeftMargin + screenSize) {
			boxX = bodyLeftMargin + screenSize - boxSize;
		} else {
			boxX = bodyLeftMargin + Math.round((event.pageX - bodyLeftMargin - boxSize / 2) / boxSize) * boxSize;
		}
		if (event.pageY > screenSize) {
			boxY = screenSize - boxSize;
		} else {
			boxY = Math.round((event.pageY - boxSize / 2) / boxSize) * boxSize;
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
}

function second() {
	alert(bodyLeftMargin)
}

function third() {
	alert("You've clicked the third button!")
}