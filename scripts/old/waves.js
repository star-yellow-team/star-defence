var nrRounds = 10;
var nrMonsters = [];
var numbers = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71];
var curentRound = -1;
var waves = [];
var k = 0;
var life = 100;
var x = [];

/**
 *	functia generateWave se apeleaza cu numarul de tipuri de monstri si dificultatea aleasa de jucator
 *	si construieste vectorul nrMonsters unde pe pozitia i se retine numarul monstrilor de tipul i care trebuie pusi pe harta 
 *	nrM = numarul de tipuri de monstri, 
 **/
function generateWave(nrM, difficulty, map)
{
	if(curentRound < 1 || curentRound > 10)
		curentRound = 1;
	else
		curentRound++;
	for(var i = 0; i < nrM; i++)
		{
			var x;
			switch (curentRounds)
				{
					case (1):
						x = 1;
						break;
					case (curentRounds < 5):
						x = Math.round( Math.random() * (5 - 1)) + i * (difficulty - 1);
						break;
					default:
						x = Math.round( Math.random() * (numbers.length - 1) + 5) + i * (difficulty - 1);
				}
					
			nrMonsters[i] = x;
		}
	fillWaves();
	deleteWave();
}


/**
 *	functia deleteWave primeste ca parametru numarul de tipuri de monstri si sterge continutul vectorului nrMonsters
 *	
 **/
function deleteWave()
{
	for(var i = 0; i < nrM; i++)
		nrMonsters[i] = 0;
}


/**
 *	functia fillWaves genereaza vectorul waves care contine in ordine monstrii care trebuie plimbati pana la baza
 *	la inceput toti monstrii sunt generati pe pozitia de spawn(deocamdata nu functioneaza pentru mai multe puncte de spawn)
 *	DACA SUNT PROBLEME CU FUNCTIA... VERIFICATI COORDONATA X SI Y A UNUI MONSTRU!!!
 **/
function fillWaves()
{
	k = 0;
	searchPoints(map, 2);
	for(var i = 0; i < nrM; i++)
		{
			while(nrMonsters[i] > 0)
				{
					waves[k++] = new Monster(Pointsx[0], Pointsy[0], i);
					nrMonsters[i]--;
				}
		}
}


function initVct()
{
	for(var i = 0; i < waves.length; i++)
		x[i] = 0;	
}

/**
 *	functia gameOver returneaza:
 *		0: jucatorul nu mai are viata
 *		1: jucatorul a terminat toate rundele, A CASTIGAT
 *		-1: jucatorul mai are viata si nu a terminat toate rundele
 **/
function gameOver()
{
	if(life <= 0)
		return 0;
	if(curentRound > nrRounds)
		return 1;
	return -1;
}


/**
 *	functia takeLife la apel verifica daca a mai ajuns inca un monstru la baza
 *	DACA SUNT PROBLEME CU FUNCTIA... VERIFICATI COORDONATA X SI Y A UNUI MONSTRU!!!
 **/
function takeLife(map)
{
	searchPoints(map, 3);
	for(var i = 0; i < k; i++)
		if(waves[i].x == Pointsx[0] && waves[i].y == Pointsy[0])
			if(x[i] == 0)
				{
					life--;
					x[i] = 1;
				}
}