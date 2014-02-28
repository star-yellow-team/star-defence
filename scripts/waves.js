var nrRounds = 10;
var nrMonsters = [];
var numbers = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71];
var curentRound = 1;
var x = monsters.length;

//temporar
var map = mapNumber
var nrM = NUMBER_OF_MONSTER_TYPES;
nrM =1;
/**
 *	functia generateWave se apeleaza cu numarul de tipuri de monstri si dificultatea aleasa de jucator
 *	si construieste vectorul nrMonsters unde pe pozitia i se retine numarul monstrilor de tipul i care trebuie pusi pe harta 
 *	nrM = numarul de tipuri de monstri, 
 **/
function generateWave2()
{
	
	
	if(curentRound < 1)
		curentRound = 1;
	else
		curentRound++;
	for(var i = 0; i < nrM; i++)
		{
			var x;
			switch (curentRound)
				{
					case (1):
						x = 1;
						break;
					case (curentRound < 5):
						x = Math.round( Math.random() * (5 - 1)) + i * (difficulty - 1);
						break;
					default:
						x = Math.round( Math.random() * (numbers.length - 1) + 5) + i * (difficulty - 1);
				}
			nrMonsters[i] = 1;
		}
	fillWaves(nrM);
}


function generateWave()
{
	var total = 0;
	if(curentRound == 1)
	{
		for(var i = 0; i < NUMBER_OF_MONSTER_TYPES; i++)
			nrMonsters[i] = 0;	
	}
	
	if(curentRound % 5 == 0)
	{
		if(nrM < NUMBER_OF_MONSTER_TYPES)	
			nrM++;
	}
	console.log("monstru 0: " + nrMonsters[0]);
	nrMonsters[0]++;
	for(var i = 1; i < nrM; i++)
	{
		nrMonsters[i] += 1;	
		total += nrMonsters[i];
	}
	console.log("monstrii: " + nrMonsters);
	fillWaves(nrM);
	curentRound++;
	
	//fill v2 in lucru
	/*var aux = 0;
	while(aux < nrM)
	{
		for(var i = 0; i < total; i++)	
			waves[i] = new Monster(Pointsy[0], Pointsx[0], aux);
		aux++;
	}
	*/
}

/**
 *	functia deleteWave primeste ca parametru numarul de tipuri de monstri si sterge continutul vectorului nrMonsters
 *	
 **/
function deleteWave(nrM)
{
	for(var i = 0; i < nrM; i++)
		nrMonsters[i] = 0;
}


/**
 *	functia fillWaves genereaza vectorul waves care contine in ordine monstrii care trebuie plimbati pana la baza
 *	la inceput toti monstrii sunt generati pe pozitia de spawn(deocamdata nu functioneaza pentru mai multe puncte de spawn)
 *	DACA SUNT PROBLEME CU FUNCTIA... VERIFICATI COORDONATA X SI Y A UNUI MONSTRU!!!
 **/
function fillWaves(nrM)
{
	var k = 0;
	var aux = 0;
	searchPoints(map, 2);
	for(var i = 0; i < nrM; i++)
		{
			aux = nrMonsters[i];
			while(aux > 0)
				{
					waves[k++] = new Monster(Pointsy[0], Pointsx[0], i);
					aux--;
				}
		}

        for(var m = 0; m < waves.length; ++ m) {
		//moveTo(spawnPointX, spawnPointY)
		var monster = waves[m];
             //temporar
		monster.x = path_y[1];
        	monster.y = path_x[1];
	
		monster.moveTo(path_y[monster.current+1],path_x[monster.current+1]);		
	}
}


// documentati
function waveFinished() {
	return waves.length > 0 ? false : true;
}



/**
 *	functia takeLife la apel verifica daca a mai ajuns inca un monstru la baza
 *	DACA SUNT PROBLEME CU FUNCTIA... VERIFICATI COORDONATA X SI Y A UNUI MONSTRU!!!
 **/
function takeLife()
{       
        // ia monstrii care au ajuns la destinatie
	    searchPoints(map, 3);
	    for(var i = 0; i < waves.length; i++) {

            // ia monstrii care sunt morti
            if(!waves[i].isAlive()) {
                userScore += (waves[i].type + 5)*(waves[i].type + 5)*(waves[i].type + 5);
				waves.splice(i,1)
                $("#money").html(String(userScore))
                -- i
                
                //ia monstrii care au ajuns la destinatie
            } else if(waves[i].x == Pointsy[0] && waves[i].y == Pointsx[0]) {
		life--;
                life = life >= 0 ? life : 0;
                $("#health").html(String(life)+' / 5')
		        waves.splice(i,1);
                -- i;
	    } // end else if
		
		userLevel = curentRound - 1;
		
		$("#level").html("level " + String(userLevel));		

        } //end for
		
        
}
