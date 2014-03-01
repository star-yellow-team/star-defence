// JavaScript Document
var pause = 0;
var playing = 0;

function shortcuts(){};
$("#paused").hide();
$("#misc").hide();

$(window).keyup(function(e) {
  	if (e.keyCode == 32 && playing == 1)
		pausegame();
		
	if (e.keyCode == 49 && playing == 1)
		stick(11);
	if (e.keyCode == 50 && playing == 1)
		stick(12);
	if (e.keyCode == 51 && playing == 1)
		stick(13);
	if (e.keyCode == 52 && playing == 1)
		stick(14);
	if (e.keyCode == 53 && playing == 1)
		stick(15);
	if (e.keyCode == 27 && playing == 1) {
		unstick();
		rmenu();
	}
	
	//cheat for NUM9
	if (e.keyCode == 105) {
		userScore = 15000;
		life = 20;
	}
});