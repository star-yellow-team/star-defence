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

				case 11:
        		    context.fillStyle = "gold"
    			    break;
				case 12:
                    context.fillStyle = "cyan"
			 	   break;
	  	  		case 13:
                    context.fillStyle = "darkred"
				    break;
				case 14:
        		    context.fillStyle = "darkturquoise"
				    break;
				case 15:
        	   		context.fillStyle = "darkslateblue"
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
    var dimension = boxSize / 3;
    var offset = (boxSize) / (waves.length);
    var currentOffset = 0
    for(var m = 0; m < waves.length; ++ m) {
	    var monster = waves[m];

	    //deseneaza monstrul
            context.fillStyle = monsters[monster.type].color;
	    context.fillRect(boxSize * monster.x + dimension, boxSize * monster.y + currentOffset, dimension, dimension); 
        
            context.strokeStyle = "black"
            context.strokeRect(boxSize * monster.x + dimension / 2, 
                            boxSize * monster.y - boxSize/3 + currentOffset,
                            2*dimension, 2*dimension/3 );
            
            //determina viata
            context.fillStyle = "red"
            var health = monster.health * (2*dimension) / monsters[monster.type].health;
    
            //deseneaza partea rosie
            context.fillRect(boxSize * monster.x + dimension / 2, 
                            boxSize * monster.y - boxSize/3 + currentOffset, 
                            health, 2*dimension/3 );
            currentOffset += offset;

            if(currentOffset > (boxSize-dimension)) {
                currentOffset = 0;
            } 
	}
    
 
}

// se apeleaza inaintea tuturor functiilor
function gameSetup() {
	findPath(mapNumber)
	generateWave()	
}

/**
 *  Este chemata la fiecare loop
 *  Are grija de logica jocului
 * */
function gameLoop() {
    // game logic
    
	takeLife();
	if(gameOver()) {
		alert("Finished!");
		return 0;
	}
	
    for(var turretIndex in turrets) {
        var turret = turrets[turretIndex];
        detectEnemy(turret);
		turret.isAttaking = false;
    }
	

    if(waveFinished()){
		generateWave();
    }
	
	
	
        

	for(var m = 0; m < waves.length; ++ m) {
		var monster = waves[m];
	        
        	if(monster.reachedDestination() && monster.current < path_x.length-1) {
                	monster.moveTo(path_y[monster.current+1], path_x[monster.current+1]);

		} else {
			monster.moveTo(monster.destinationX, monster.destinationY)
		}
		
		
	}
	
	 

    // desenam
    draw();


    setTimeout(gameLoop, loopInterval);
}


/**
 *  Functia main
 *  Ea incepe jocul
 * */
function main() {
	gameSetup()
        gameLoop();

}





