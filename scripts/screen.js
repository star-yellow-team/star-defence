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
var bodyLeftMargin = 0;
var canvasWidth    = 0;
var canvasHeight   = 0; 
var boxWidth       = 0;
var boxHeight      = 0; 
var numberOfBoxesX  = MAX_X;
var numberOfBoxesY  = MAX_Y;
var maxNumberOfBoxes = 0;
var xMin;
var xMax;
var yMin;
var yMax;

function x() {
	
}

function y() {
	
}

function sizeScreen() {
    // preia dimensiunile documentului
    screenWidth = $(window).width();
    screenHeight = $(window).height();
   
    // o selectam pe cea mai mica
    if ((screenWidth - 10) / (numberOfBoxesX + 2) < (screenHeight - 10) / numberOfBoxesY) {
       	screenSize = (screenWidth - 10) / (numberOfBoxesX + 2) * numberOfBoxesX;
		maxNumberOfBoxes = numberOfBoxesX;
    } else {
        screenSize = screenHeight - 10;
		maxNumberOfBoxes = numberOfBoxesY;
    }

    // setam dimesniunea unei celule prin rotunjire la cea mai mica unitate
    boxSize = Math.floor(screenSize / maxNumberOfBoxes) - 1;
	
	// recalculam marimea body ca un numar divizibil cu 20
    canvasWidth = numberOfBoxesX * boxSize;
    canvasHeight = numberOfBoxesY * boxSize;

    // redimensionam
    $(".ghostImage").css("height",boxSize);
    $(".ghostImage").css("width",boxSize);
	
    $(".button").css("height",boxSize);
    $(".button").css("width",boxSize);

    $("#gameCanvas").css("width",canvasWidth);
    $("#gameCanvas").css("height",canvasHeight);

    $("#ui-menu").css("margin-top",(canvasHeight - $("#ui-menu").height()) / 2 + 5 - 2 * boxSize); 

    $("#turret-menu").css("margin-top",(canvasHeight - $("#turret-menu").height()) / 2 + 5 - 2 * boxSize); 

    $("#gameCanvas").attr({"width":String(canvasWidth)+'px', "height":String(canvasHeight)+'px'});
	
    xMin = (screenWidth - canvasWidth - 2 * boxSize) / 2;
    yMin = (screenHeight - canvasHeight) / 2;
    $("#wrapper").css("margin-left",xMin - 5);
    $("#gameCanvas").css("margin-top",yMin - 5);
    
    $("#bar-wrapper").css("height",2 * boxSize); 
    $("#bar-wrapper").css("width",2 * boxSize); 
    $("#bar-wrapper").css("font-size",boxSize / 5 * 3);
    $("#health-wrapper").css("background-size",boxSize / 2);
    $("#money-wrapper").css("background-size",boxSize / 2);
	
    $("#title").css("font-size",(boxSize / 5 * 3) * 150 / 100);
    $("#hover").css("font-size",boxSize / 5 * 3);
    $("#slowt").css("background-size",boxSize / 2);
    $("#slowt").css("padding-left",boxSize / 2);
    $("#reveal").css("background-size",boxSize / 2);
    $("#reveal").css("padding-left",boxSize / 2);
    $("#price").css("background-size",boxSize / 2);
    $("#price").css("padding-left",boxSize / 2);
    
    $("#health-wrapper").css("height",boxSize); 
    $("#health-wrapper").css("width",2 * boxSize); 
    
    $("#money-wrapper").css("height",boxSize); 
    $("#money-wrapper").css("width",2 * boxSize); 
    
    $("#menu-wrapper").css("width",2 * boxSize); 
    $("#menu-wrapper").css("margin-top",yMin - 5);
    $("#menu-wrapper").css("height",canvasHeight);  
    
    yMax = yMin + canvasHeight - boxSize;
    xMax = xMin + canvasWidth - boxSize;
    
    sizeMonsters() 
}

// o apelam pentru prima oara
sizeScreen();

// o setam ca handler pentru evenimentul de resize
$(window).resize(function() {
    sizeScreen();
});

