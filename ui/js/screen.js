/**
 *@author Adrian, Andrei
 * Defineste functia size() care va redimensiona body-ul documentului HTML la prima incarcare si de fiecare data cand se modifica 
 * lungimea si inaltimea documentului.
 */


var screenWidth  = $(window).width();
var screenHeight = $(window).height();
var screenSize   = 0
var boxSize      = 0



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

    // setam dimesniunea unei celule
    boxSize = Math.floor(screenSize / 20);

    screenSize = 20 * boxSize;
    
    // redimensionam
    $("body").css("height",screenSize);
    $("body").css("width",screenSize);

    // redimensionam
    $(".ghostImage").css("height",boxSize);
    $(".ghostImage").css("width",boxSize);

    var bodyLeftMargin = parseInt($("body").css("marginLeft")) + 8;
    
}

// o apelam pentru prima oara
sizeScreen();


// o setam ca handler pentru evenimentul de resize
$(window).resize(function() {
    size()
});

