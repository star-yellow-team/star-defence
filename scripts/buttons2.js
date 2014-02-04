// JavaScript Document

$(document).ready(function() {
	$("#blue").hide();
})

var currentMousePos = { x: -1, y: -1 };

$(document).mousemove(function(event) {
	if (blueHover = 1) {
		$("#blue").show();
        $("#blue").css("left",event.pageX - 50);
       	$("#blue").css("top",event.pageY - 50);
	}
});
	

function stick() {
	var blueHover = 1;
}

function unstick() {
	blueHover = 0;
}

function second() {
	alert("You've clicked the second button!")
}

function third() {
	alert("You've clicked the third button!")
}