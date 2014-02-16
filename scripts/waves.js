var nrRounds = 10;
var nrMonsters = [];
var numbers = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71];
var curentRound = -1;
var x = monsters.length;

//temporar
var map = mapNumber
var nrM = NUMBER_OF_MONSTER_TYPES;
/**
 *	functia generateWave se apeleaza cu numarul de tipuri de monstri si dificultatea aleasa de jucator
 *	si construieste vectorul nrMonsters unde pe pozitia i se retine numarul monstrilor de tipul i care trebuie pusi pe harta 
 *	nrM = numarul de tipuri de monstri, 
 **/
function generateWave()
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
	console.log("life = " + life);
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
	searchPoints(map, 3);
	console.log(Pointsx[0] + " " + Pointsy[0]);
	for(var i = 0; i < waves.length; i++)
		if(waves[i].x == Pointsx[0] && waves[i].y == Pointsy[0])
				{
					life--;
					waves.splice(i,1);
				}
}
