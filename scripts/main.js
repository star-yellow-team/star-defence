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

    context.clearRect(0,0, canvas.width, canvas.height)    
    
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
                    context.fillStyle = 'rgba(0,225,0,0)';       
                    // umplem casuta de pe randul i si coloana j
                    context.fillRect(i*boxSize, j*boxSize, boxSize, boxSize);
                    break;
                case 1:
                    context.fillStyle = "brown";
                    // umplem casuta de pe randul i si coloana j
                    context.drawImage(images[9], i*boxSize, j*boxSize, boxSize, boxSize);
                    break;
                case 2:
                    // umplem casuta de pe randul i si coloana j
                    context.drawImage(images[12], i*boxSize, j*boxSize, boxSize, boxSize);
                    break;
                case 3:
                    // umplem casuta de pe randul i si coloana j
                    context.drawImage(images[13], i*boxSize, j*boxSize, boxSize, boxSize);
                    break;
 		default:
                    // o eroare in harta
                    break;
            } //switch

        } // first for
    } // second for

}

/**
 *  Se ocupa de desenatul jocului
 *  Apeleaza si drawBackground()
 *
 * */
function draw() {
    //deseneaza background-ul
    drawBackground();
    var aaa = 0;

    for(; aaa < auxiliaries.length; ++ aaa) {
        animate(context, auxiliaries[aaa], NaN);
    }

    

    // bug: monstrii "sar" cand moare unul dintre ei
    for(var m = 0; m < waves.length; ++ m) {
	var monster = waves[m];
        animate(context, monster, monster.offset)
	                 
    }
    
    for(var t = turrets.length - 1; t >= 0; -- t) {
        var turret = turrets[t];
        animate(context, turret)
    }
    
    
}

// se apeleaza inaintea tuturor functiilor
function gameSetup() {
    curentRound = 1;
    life = 5;

    var _k = 0;
    for(i = 0 ; i < MAX_X; ++ i) {
        for(j = 0; j < MAX_Y; ++ j) {
            // determinam tipul celulei
            //  0 = spatiu liber
	    //	1 = traseu monstruleti
	    //	2 = spawn 
	    //	3 = base
            switch(getElement(i, j, mapNumber)) {
                case 0:
                    if(Math.floor((Math.random())*14) % 14 == 0 && _k < numberOfAuxiliaries ) {
                        var ct = Math.floor(Math.random()*NUMBER_OF_AUXILIARIES);
                        var aux;
                        switch(ct % NUMBER_OF_AUXILIARIES) {
                            case 0:
                                aux = new Auxiliary(i, j, images[14], 3, 3)
                                break;
                            case 1:
                                aux = new Auxiliary(i, j, images[15], 30, 1)
                                break;
                            case 2:
                                aux = new Auxiliary(i, j, images[16], 3, 2) 
                                break;
                            case 3:
                                aux = new Auxiliary(i, j, images[17], 3, 3) 
                                break;
                            case 4:
                                aux = new Auxiliary(i, j, images[18], 3, 2) 
                                break;
                        }
                        if(getElement(i, j) == 0) {
                            auxiliaries.push(aux)
                            ++ _k;
                        }
                    }
                    break;
                default:
                    break;
            } //switch

        } // first for
    }
     	
    switch(user_selection) {
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

var turretIndex

/**
 *  Este chemata la fiecare loop
 *  Are grija de logica jocului
 * */
function gameLoop() {
shortcuts();
if(bonusContor == 0) {
    bonuses[Math.floor(Math.random()*bonuses.length) % bonuses.length].effect();
    bonusTime *= 2 + 1;
    bonusContor = bonusTime; 
}

-- bonusContor;

if(userScore < 200)
	showMoneyLimitError = true;
else{
	if(showMoneyLimitError == true){
		$.notify("You`re too greedy and you will receive no more money until you cool down", "error")
		showMoneyLimitError = false;
	}
	userScore = 200;
}
if (pause == 0){
    // game logic
    updateAchievements();
    takeLife();
    
    if(gameOver()) {
	location.reload();
        return 0;
    }
	
    for(turretIndex in turrets) {
    
        var turret = turrets[turretIndex];
        detectEnemy(turret);

	for (var i = waves.length-1; i >= 0; i--) {
	    if((distanta(waves[i], turret) > turret.range) && waves[i].slowingTurret==turretIndex) {
                waves[i].redoMonster();
            }	
        }
	turret.isAttaking = false;
    
    }
	
	if(goala() == false)
	{
		if(toAdd == 0) {
			spawn()
		}
                if(loopOffset < 20) {
		    toAdd = (toAdd+1) % (loopOffset > 0 ? Math.floor(loopOffset/3) : rate);
                } else {
		    toAdd = (toAdd+1) % (loopOffset > 0 ? Math.floor(loopOffset/7) : rate);
                }
	}
	else
    if(waveFinished()){
        toAdd = 0;
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

        draw();
        $("#money").html(String(userScore));
        $("#health").html(String(life));
        $("#score").html(String(score))
    } // end if
	
    gml = setTimeout(gameLoop, loopInterval);
}   // end function

var gml;

/**
 *  Functia main
 *  Ea incepe jocul
 * */
function main() {

    playing   = 1
    switch(user_selection) {

        case 'survival':
	    current = 1
	    gameSetup();//'gameSetup' este automat.
	    gameLoop();
	    break;

        case 'story':
            current_level = 0
	    gameSetup();
            curentRound=1; 
            waves_won_perBattle=-1; 
            story();
            break;
    }

}

function startup() {
    mapNumber = document.getElementById("map").value;
    user_selection = $('input[name="gamemode"]:checked').val();
	
    if (mapNumber === "") {
	mapNumber = 0;
    }

    $("body").attr("class", "playing")
    resetValues();		
    auxMaps();		
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
 
    //html clearup
    $("#paused").hide();	
    $("#play").hide();
    $("#restart").hide();
    $("#wrapper").hide();
    $("#dimmer").slideUp("fast");
    
	resetValues();	
    restartTurrets();
    waves_won_perBattle=0;
    restartWaveSystem();
    
    auxMaps();		
    wavereset();	
    main();
    
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

} // end pausegame()
