// JavaScript Document
var pause = 0;
var playing = 0;

function shortcuts(){};
$("#paused").hide();
$("#misc").hide();

$(window).keyup(function(e) {
  	if (e.keyCode == 32 && playing == 1) {
		pausegame()
		console.log(playing);
	}
	if (e.keyCode == 49)
		stick(11);
	if (e.keyCode == 50)
		stick(12);
	if (e.keyCode == 51)
		stick(13);
	if (e.keyCode == 52)
		stick(14);
	if (e.keyCode == 53)
		stick(15);
	if (e.keyCode == 27) {
		unstick();
		rmenu();
	}
	
	//cheat for NUM9
	if (e.keyCode == 105) {
		userScore = 15000;
		life = 20;
	}
});