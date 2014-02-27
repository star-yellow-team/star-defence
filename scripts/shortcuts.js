// JavaScript Document
var pause = 0;

function shortcuts(){};

$(window).keyup(function(e) {
  	if (e.keyCode == 32)
		if (pause == 1)
    		pause = 0;
		else
			pause = 1;
});