/**
 * @author Adrian, AndreiRo
 * Defineste functia size() care va 
 * redimensiona body-ul documentului 
 * HTML la prima incarcare si de 
 * fiecare data cand se modifica 
 * lungimea si inaltimea documentului.
 */


var screenWidth    = 0;
var screenHeight   = 0;
var screenSize     = 0;
var boxSize        = 0;
var bodyLeftMargin = 0;
var canvasWidth    = 0;
var canvasHeight   = 0; 
var boxWidth       = 0;
var boxHeight      = 0; 
var numberOfBoxesX  = MAX_X;
var numberOfBoxesY  = MAX_Y;
var maxNumberOfBoxes = 0;


function sizeScreen() {
    // preia dimensiunile documentului
    screenWidth = $(window).width();
    screenHeight = $(window).height();
   
    // o selectam pe cea mai mica
    if (screenWidth / numberOfBoxesX < screenHeight / numberOfBoxesY) {
       	screenSize = screenWidth - 15;
		maxNumberOfBoxes = numberOfBoxesX;
    } else {
        screenSize = screenHeight - 15;
		maxNumberOfBoxes = numberOfBoxesY;
    }

    // setam dimesniunea unei celule prin rotunjire la cea mai mica unitate
    boxSize = Math.floor(screenSize / maxNumberOfBoxes);
	
	// recalculam marimea body ca un numar divizibil cu 20
    canvasWidth = numberOfBoxesX * boxSize;
    canvasHeight = numberOfBoxesY * boxSize;

    // redimensionam
    $(".ghostImage").css("height",boxSize);
    $(".ghostImage").css("width",boxSize);

    $("#gameCanvas").css("width",canvasWidth);
    $("#gameCanvas").css("height",canvasHeight);

    $("#gameCanvas").attr({"width":String(canvasWidth)+'px', "height":String(canvasHeight)+'px'})
	
	$("#wrapper").css("width",canvasWidth + 10);
}
// o apelam pentru prima oara
sizeScreen();


// o setam ca handler pentru evenimentul de resize
$(window).resize(function() {
    sizeScreen();
});

