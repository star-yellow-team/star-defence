/**
 *@authorAndreiRo
 *  Scriptul principal
 *  Contine functia gameLoop() care va fi apelata la fiecare tura
 *  Contine functia draw() in care se deseneaza tot
 *  Contine functia drawBackground() care deseneaza background-ul
 *
 * */



// luam obiectele canvas si context
var canvas  = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

$(".ghostImage").hide();


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
    for(i = 0 ; i < MAX_X; ++ i) {
        for(j = 0; j < MAX_Y; ++ j) {
            // determinam tipul celulei
            //  0 = spatiu liber
	    //	1 = traseu monstruleti
	    //	2 = spawn 
	    //	3 = base
             switch(getElement(i, j, mapNumber)) {
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
    /*
 *  var size = 5;
    var i = 0;
    for(; i < waves.length; ++ i) {
        monster = waves[i];
        context.fillStyle = 'orange';
        context.fillRect(monster.x, monster.y, size, size)
    }
    */
}


/**
 *  Este chemata la fiecare loop
 *  Are grija de logica jocului
 * */
function gameLoop() {
    // game logic
    /*
 *  if(waveFinished()) {
 *      generateNewWave();
 *  } else {
 *      // verifica ce monstri au ajuns la baza si ii scoate
 *      takeLife();  
 *
 *      //verifica daca mai are vieti
 *      if(gameOver()) {
 *          alert("Bye-bye");
 *      } else{
 *          // luam fiecare monstru. waves e vectorul pentru monstri
 *          for(var i = 0; i < waves.length; ++ i) {
 *              monster = waves[i];
 *              if(monster.reachedDestination()) {
 *                  //assign new path for monster
 *              }
 *              else {
 *                  monster.moveTo(monster.destinationX, monster.destinationY);
 *              }
 *              
 *          }
 *
 *
 *
 *      }
 *  
 *
 *  }
 *
 *
 *
 * */    

    // desenam
    draw();


    setTimeout(gameLoop, loopInterval);
}


/**
 *  Functia main
 *  Ea incepe jocul
 * */
function main() {
    gameLoop();

}





