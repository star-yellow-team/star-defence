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
var font100;

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

	font100 = boxSize / 5 * 3;

    // redimensionam
    $(".ghostImage").css("height",boxSize);
    $(".ghostImage").css("width",boxSize);
	
    $(".button").css("height",boxSize);
    $(".button").css("width",boxSize);

    $("#gameCanvas").css("width",canvasWidth);
    $("#gameCanvas").css("height",canvasHeight);

    $("#turret-menu").css("margin-top",(canvasHeight - $("#turret-menu").height()) / 2 - 4 * boxSize - 15);
	$("#turret-menu").css("margin-left",boxSize / 2); 
	$("#turret-menu").css("width",boxSize); 

    $("#gameCanvas").attr({"width":String(canvasWidth)+'px', "height":String(canvasHeight)+'px'});
	
    xMin = (screenWidth - canvasWidth - 2 * boxSize) / 2;
    yMin = (screenHeight - canvasHeight) / 2;
    $("#wrapper").css("margin-left",xMin - 5);
    $("#gameCanvas").css("margin-top",yMin - 5);
    
    $("#bar-wrapper").css("height",4 * boxSize); 
    $("#bar-wrapper").css("width",2 * boxSize); 
    $("#bar-wrapper").css("font-size",font100);
    $("#health-wrapper").css("background-size",boxSize / 2);
    $("#money-wrapper").css("background-size",boxSize / 2);
    $("#score-wrapper").css("background-size",boxSize / 2);
	
    $("#title").css("font-size",font100);
    $("#hover").css("font-size",font100 * 100 / 150);
    $("#slowt").css("background-size",boxSize / 2);
    $("#slowt").css("padding-left",boxSize / 2);
    $("#reveal").css("background-size",boxSize / 2);
    $("#reveal").css("padding-left",boxSize / 2);
    $("#price").css("background-size",boxSize / 2);
    $("#price").css("padding-left",boxSize / 2);
	
	$("#hover").css("max-width", 12*boxSize);
    
    $("#health-wrapper").css("height",boxSize); 
    $("#health-wrapper").css("width",2 * boxSize); 
    
    $("#money-wrapper").css("height",boxSize); 
    $("#money-wrapper").css("width",2 * boxSize); 
    
    $("#score-wrapper").css("height",boxSize); 
    $("#score-wrapper").css("width",2 * boxSize); 
    
    $("#menu-wrapper").css("width",2 * boxSize); 
    $("#menu-wrapper").css("margin-top",yMin - 5);
    $("#menu-wrapper").css("height",canvasHeight);  
    
    yMax = yMin + canvasHeight - boxSize;
    xMax = xMin + canvasWidth - boxSize;
	
    $("#contextMenu").css("height",boxSize);
	
    $("h1").css("font-size",font100*3);
    $("h1").css("top",5 * boxSize);
    $("h2").css("font-size",font100*150/100);
	
    $("form").children("input").css("font-size",font100*150/100);
    $("form").css("font-size",font100*150/100);
	$(".gamemode").css("width",boxSize/2);
	$(".gamemode").css("height",boxSize/2);
	
	$("#gm").children("input").css("width",6 * boxSize);
	$("#gm").children("input").css("height",4 * boxSize);
	
	$("#mp").children("input").css("width",6 * boxSize);
	$("#mp").children("input").css("height",4 * boxSize);
	
	$("#gm").children("input").css("margin-right",boxSize);
	$("#gm").children("input:last").css("margin-right",0);
	
	$("#mp").children("input").css("margin-right",boxSize);
	$("#mp").children("input:last").css("margin-right",0);
	
	$("#gm").css("margin-bottom",2 * boxSize);
	$("#mp").css("margin-bottom",2 * boxSize);
	
    $("form").css("top",(screenHeight-$("form").height()) / 2);
    $("form").css("left",(screenWidth-$("form").width()) / 2);
	
	$("form").children("h2").css("margin-bottom", -boxSize);
    
    sizeMonsters();
	
	$("#paused").css("top",screenHeight / 2 - 6 * boxSize);
	$("#play").css("top",screenHeight / 2 - 2 * boxSize);
	$("#restart").css("top",screenHeight / 2 - 2 * boxSize);
	$("#play").css("left",screenWidth / 2 - 5.5 * boxSize);
	$("#restart").css("left",screenWidth / 2 + 0.5 * boxSize);
	$("#play").css("width",5 * boxSize);
	$("#play").css("height",5 * boxSize);
	$("#restart").css("width",5 * boxSize);
	$("#restart").css("height",5 * boxSize);

	$("#paused").css("left",(screenWidth - $("#paused").width()) / 2);
	
	$("#ff").css("width",boxSize);
	$("#ff").css("height",boxSize);
	$("#rw").css("width",boxSize);
	$("#rw").css("height",boxSize);
	$("#rw").css("margin-top",MAX_Y*boxSize/2 - $("#turret-menu").height()/2 - boxSize);
	$("#ff").css("margin-top",MAX_Y*boxSize/2 - $("#turret-menu").height()/2 - boxSize);
	$("#gm").children("input").css("font-size",1.5 * boxSize);
}

// o apelam pentru prima oara
sizeScreen();

// o setam ca handler pentru evenimentul de resize
$(window).resize(function() {
    sizeScreen();
});

