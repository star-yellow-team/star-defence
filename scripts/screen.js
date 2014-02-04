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
var bodyLeftMargin;
var canvasWidth    = 0;
var canvasHeight   = 0; 
var boxWidth       = 0;
var boxHeight      = 0; 
var numberOfBoxesX  = MAX_X;
var numberOfBoxesY  = MAX_Y;


function sizeScreen() {
    // preia dimensiunile documentului
    screenWidth = $(window).width() - 10;
    screenHeight = $(window).height() - 10;
   
    // o selectam pe cea mai mica
    if (screenWidth < screenHeight) {
            screenSize = screenWidth;
    } else {
            screenSize = screenHeight;
    }

    // setam dimesniunea unei celule prin rotunjire la cea mai mica unitate
    boxSize = Math.floor(screenSize / 20);
	
	// recalculam marimea body ca un numar divizibil cu 20
    bodyWidth = 30 * boxSize;
    bodyHeight = 20 * boxSize;
    
    // redimensionam
    $("canvas").css("height",bodyHeight);
    $("canvas").css("width",bodyWidth);

    // redimensionam
    $(".ghostImage").css("height",boxSize);
    $(".ghostImage").css("width",boxSize);

	// bodyLeftMargin la unele browsere are o valoare reziduala care se scade din cea reala, asa ca resetam margin-left la acea valoare
    $("canvas").css("margin-left","auto");
    bodyLeftMargin = parseInt($("body").css("marginLeft").replace("px",""));
    $("canvas").css("margin-left",bodyLeftMargin);

    canvasWidth   = $("#gameCanvas").width();
    canvasHeight  = $("#gameCanvas").height();

    $("#gameCanvas").attr({"width":String(canvasWidth)+'px', "height":String(canvasHeight)+'px'})
}
// o apelam pentru prima oara
sizeScreen();


// o setam ca handler pentru evenimentul de resize
$(window).resize(function() {
    sizeScreen();
});

