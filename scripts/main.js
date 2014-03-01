/**
 *@authorAndreiRo
 *  Scriptul principal
 *  Contine functia gameLoop() care va fi apelata la fiecare tura
 *  Contine functia draw() in care se deseneaza tot
 *  Contine functia drawBackground() care deseneaza background-ul
 *
 * */



// luam obiectele canvas si context
var canvas          = document.getElementById("gameCanvas");
var context         = canvas.getContext("2d");

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
    //deseneaza background-ul
    drawBackground();


    

    // bug: monstrii "sar" cand moare unul dintre ei
    for(var m = 0; m < waves.length; ++ m) {
	    var monster = waves[m];
            animate(context, monster, monster.offset)
	                 
	}
    
 
}

// se apeleaza inaintea tuturor functiilor
function gameSetup() {
	curentRound = 1;
	life = 5;
	
	switch(user_selection)
	{
		case 'survival':
			findPath(mapNumber)
			generateWave();	
			sizeMonsters();
			break;
			
		case 'story':
			findPath(mapNumber);
			activateStoryMode();
			break;
	}
	
	$("#wrapper").fadeIn("fast");
}

/**
 *  Este chemata la fiecare loop
 *  Are grija de logica jocului
 * */
 var turretIndex
function gameLoop() {
shortcuts();
if (pause == 0){
    // game logic
    updateAchievements();
	takeLife();
	if(gameOver()) {
		restart();
		life = 5;
		return 0;
	}
	
    for(turretIndex in turrets) {
        var turret = turrets[turretIndex];
        detectEnemy(turret);
		for (var i = waves.length-1; i >= 0; i--)
		{
			if((distanta(waves[i], turret) > turret.range) && waves[i].slowingTurret==turretIndex)
				waves[i].redoMonster();
				}
	turret.isAttaking = false;
    }
	

    if(waveFinished()){
    	waves_won_perBattle ++; //ACHIEVEMENTS
        generateWave();
        sizeMonsters(); 
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
}
	draw();
	$("#money").html(String(userScore));
	$("#health").html(String(life)+' / 5');
	
    gml = setTimeout(gameLoop, loopInterval);
}

var gml;

/**
 *  Functia main
 *  Ea incepe jocul
 * */
function main() {

	switch(user_selection)
	{
		case 'survival':
		gameSetup();//'gameSetup' este automat.
		gameLoop();
		break;

		case 'story':
		gameSetup();
		curentRound=2; //altfel nu incepe cu level 1.
		waves_won_perBattle=0; 
		story();
		break;
	}

}

function startup() {
	mapNumber = document.getElementById("map").value;
	user_selection = $('input[name="gamemode"]:checked').val();
	
	if (mapNumber === "")
		mapNumber = 0;
		
	wavereset();
	
	main();
	
	setTimeout(function() {
	$("form").hide();
	
	$("#dimmer").slideUp("fast");
	
	}, 200);
}

function restart() {
	clearTimeout(gml);
	unstick();
	rmenu();
   	pause = 0;
	$("#paused").hide();
		
	$("#play").hide();
		
	$("#restart").hide();
	
	$("#wrapper").hide();
	
	$("form").show();
	
	$("#dimmer").slideDown("fast");
}

function pausegame() {
	unstick();
	rmenu();
	if (pause == 1) {
    	pause = 0;
		$("#paused").hide();
		
		$("#play").hide();
		
		$("#restart").hide();
		
		$("#dimmer").slideUp("fast");
	} else {
		pause = 1;
		$("#dimmer").slideDown("fast");
		
		setTimeout(function() {
		$("#paused").show();
		
		$("#play").show();
		
		$("#restart").show();
		}, 200);
	}
}


