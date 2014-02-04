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
var numberOfBoxes  = MAX_X;


function sizeScreen() {
    // preia dimensiunile documentului
    screenWidth = $(window).width();
    screenHeight = $(window).height();
   
    // o selectam pe cea mai mica
    if (screenWidth < screenHeight) {
            screenSize = screenWidth;
    } else {
            screenSize = screenHeight;
    }

    // setam dimesniunea unei celule prin rotunjire la cea mai mica unitate
    boxSize = Math.floor(screenSize / 20);
	
	// recalculam marimea body ca un numar divizibil cu 20
    screenSize = 20 * boxSize;
    
    // redimensionam
    $("body").css("height",screenSize);
    $("body").css("width",screenSize);

    // redimensionam
    $(".ghostImage").css("height",boxSize);
    $(".ghostImage").css("width",boxSize);

	// ??? AICI SUNT PROBLEME LA RESIZE - NEEDZ HALP
	// Cand margin left e 520 -> bodyLeft margin e 512
    bodyLeftMargin = parseInt($("body").css("marginLeft"));

    canvasWidth   = $("#gameCanvas").width();
    canvasHeight  = $("#gameCanvas").height();

    boxWidth      = canvasWidth  / numberOfBoxes;
    boxHeight     = canvasHeight / numberOfBoxes; 


}
// o apelam pentru prima oara
sizeScreen();


// o setam ca handler pentru evenimentul de resize
$(window).resize(function() {
    sizeScreen();
});

