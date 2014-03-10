/**
 *@authorRaduRomaniuc
 *
 *Functiile sunt foarte intuitive. Am simplificat scriptul foarte mult.
 *Contine: makeLevel(level);
 *		   activateLevel(level);
 *		   activateStoryMode();
 * */

var monster_position_in_wave = 0; //O variabila foarte importanta. 

function addMonsters_onWave( id, number ) //Adauga 'number' monstrii de tipul 'id'.
{
	for( var i=1; i<=number; i++)
			waves[monster_position_in_wave++] = new Monster(Pointsy[0], Pointsx[0], id);
}

function resetCurrentWave(ok)
{
	if(ok==true) waves.length = 0;
	else console.log("Ok s-a apelat cu 'false', in functia 'resetCurrentWave'.");
} 

function makeLevel(level) 
{
    resetCurrentWave(true);
    switch(level)
    {
              
        case 1:
            addMonsters_onWave(1,1);
            addMonsters_onWave(2,1);
            break;
        
        case 2:
            addMonsters_onWave(1,1);
            addMonsters_onWave(3,1);
            break;
        
        case 3:
            addMonsters_onWave(1,5);
            break;
        
        case 4:
            addMonsters_onWave(1,10);
            break;
        
        case 5:
            addMonsters_onWave(1,5);
            addMonsters_onWave(2,2);
            addMonsters_onWave(1,5);
            addMonsters_onWave(3,3);
            break;
        
        case 6:
            addMonsters_onWave(1,1); 
            addMonsters_onWave(1,1);
            break;

        case 7:
           addMonsters_onWave(1,5);
           addMonsters_onWave(2,3);
           addMonsters_onWave(1,7);
            break;

       case 8:
           addMonsters_onWave(1,10);
           addMonsters_onWave(2,10);
           addMonsters_onWave(3,5);
           break;

        case 9:
            addMonsters_onWave(1,20);
            addMonsters_onWave(2,15);
            addMonsters_onWave(3,10);
            break;
        case 10:
            addMonsters_onWave(1,15);
            addMonsters_onWave(1,20);
            addMonsters_onWave(1,30);
            break;
        case 11:
            last_level_completed=true;
            break;
    }
}

function activateLevel(level_input)
{
	var k = 0;
	var aux = 0;
	searchPoints(map, 2);
	
	makeLevel(level_input);
	
    for(var m = 0; m < waves.length; ++ m) {
		//moveTo(spawnPointX, spawnPointY)
		var monster = waves[m];
             //temporar
		monster.x = path_y[1];
        	monster.y = path_x[1];
	
		monster.moveTo(path_y[monster.current+1],path_x[monster.current+1]);		
	}
}

function activateStoryMode()
{
	monster_position_in_wave = 0;//FOARTE, FOARTE important!
	
	if(move_on==true){
	//Daca 'move_on' == true, stiu ca 'current_level' a crescut. Deci pur si simplu:

	start = 0; //<<<<------ FOARTE IMPORTANT. 
	activateLevel(current_level);
	move_on=false;

	}
	
	if(last_level_completed==true){
		$.notify("Congratulations! You have finished the game!");
		StoryModeFinished=true;
		//Reminder: am stat 1 ora aici pe un loop infinit, din cauza ca am scris storyfinished '==true', in loce de '=true'.
	}
}
