var nrRounds = 10;
var nrMonsters = [];
var numbers = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71];
var curentRound = 1;
var x = monsters.length;

//temporar
var map = mapNumber
var nrM = NUMBER_OF_MONSTER_TYPES;
nrM =0;
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
			for(var i = 0; i <= NUMBER_OF_MONSTER_TYPES; i++)
				nrMonsters[i] = 0;
		}
	else
		curentRound++;
	console.log("runda" + curentRound);
	if(curentRound % 5 == 0 || curentRound == 1)
	{
		if( nrM < NUMBER_OF_MONSTER_TYPES)
			nrM++;	
	}
	
	console.log("numar tipuri monstrii: " + nrM);
	/*if(curentRound > 1)
		nrMonsters[0] = nrMonsters[0] + 1;
	else
		nrMonsters[0] = 1;
		*/
	//nrMonsters[0] = curentRound;
	//console.log("runda: " + curentRound);
	
	nrMonsters[0]++;
	for(var i = 1; i < nrM; i++)
	{
		//if(i == nrM - 1 && nrM < NUMBER_OF_MONSTER_TYPES)
			//break;
		
		/*
			in acest for completez vectorul nrMonsters care reprezinta cati monstri te tipul i subt in wave...
			nrMonsters[0] creste cu o unitate la fiecare apel al functiei(sau asa ar trebui :D) iar ceilalti au valuarea anteriorului -1(teoretic:D)
			desi totul pare sumplu nu se intampla nimic din ceea ce am explicat
			MULT NOROC LA DEBUGING... ADRIAN, WE NEED YOU!!!!!!
		*/
		//if(i > 0)
			nrMonsters[i] = nrMonsters[i - 1];
			//console.log("anteriorul lui " + i + " este: " + nrMonsters[i-1]);
		//else
			//nrMonsters[i] ++;
		
		total += nrMonsters[i]; 
	}
	console.log("monstrii: " + nrMonsters);
	
	
	
	fillWaves(nrM);
	
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
	k = 0;
	searchPoints(map, 2);
	for(var i = 0; i < nrM; i++)
		{
			while(nrMonsters[i] > 0)
				{
					waves[k++] = new Monster(Pointsy[0], Pointsx[0], i);
					nrMonsters[i]--;
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
 * !! DOCUMENTATI
 *	functia gameOver returneaza:
 *		0: jucatorul nu mai are viata
 *		1: jucatorul a terminat toate rundele, A CASTIGAT
 *		-1: jucatorul mai are viata si nu a terminat toate rundele
 **/
function gameOver()
{
	if(life <= 0)
		{

			return true;
		}

	return false;
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
                -- i
                
                //ia monstrii care au ajuns la destinatie
             } else if(waves[i].x == Pointsy[0] && waves[i].y == Pointsx[0]) {
		life--;
		waves.splice(i,1);
                -- i;
	    } // end else if


        } //end for
        
}
