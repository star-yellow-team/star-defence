/**
 *@authorAndreiRo
 *  Scriptul principal
 *  Contine functia gameLoop() care va fi apelata la fiecare tura
 *  Contine functia draw() in care se deseneaza tot
 *  Contine functia drawBackground() care deseneaza background-ul
 *
 * */

// Intervalul dintre loop
var loopInterval  = 50;


// luam obiectele canvas si context
var canvas  = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

$(".ghostImage").hide();

var mapNumber = prompt("Numarul hărții:", 0) % nrMaps;

/**
 *  Deseneaza background-ul(harta)
 *  Momentan: 
 *              * Verde    -> spatiu gol.
 *              * Maro     -> drum.
 *              * Rosu     -> start point.
 *              * Albastru -> end point(baza atacata).
 * */
function drawBackground() {
    var i = 0;
    var j = 0;
    
    // desenam fiecare celula
    for(i = 0 ; i < numberOfBoxesX; ++ i) {
        for(j = 0; j < numberOfBoxesY; ++ j) {
            // determinam tipul celulei
            //  0 = spatiu liber
	    //	1 = traseu monstruleti
	    //	2 = spawn 
	    //	3 = base
			alert();
             switch(getElement(i,j,mapNumber)) {
                case 0:
                        context.fillStyle = "green";       
                        break;
                case 1:
                        context.fillStyle = "brown";
                        break;
                case 2:
                        context.fillStyle = "red";
						break;
                case 3:
                        context.fillStyle = "blue"
                        break;
				case 10:
						context.fillStyle = "cyan"
						break;
                default:
                        // o eroare in harta
                        context.fillStyle = "black";
                        break;
            }

            // umplem casuta de pe randul i si coloana j
            context.fillRect(i*boxSize, j*boxSize, boxSize, boxSize);
        }
    }
}

/**
 *  Se ocupa de desenatul jocului
 *  Apeleaza si drawBackground()
 *
 * */
function draw() {
    drawBackground();

}


/**
 *  Este chemata la fiecare loop
 *  Are grija de logica jocului
 * */
function gameLoop() {
    //intai desenam harta
    drawBackground();


    setTimeout(gameLoop, loopInterval);
}


/**
 *  Functia main
 *  Ea incepe jocul
 * */
function main() {
    gameLoop();

}





