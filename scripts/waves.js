var nrRounds = 10;
var nrMonsters = [];
var numbers = [ 2, 3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71];
var curentRound = -1;


/**
 *	functia generateWave se apeleaza cu numarul de tipuri de monstri si dificultatea aleasa de jucator
 *	si construieste vectorul nrMonsters unde pe pozitia i se retine numarul monstrilor de tipul i care trebuie pusi pe harta 
 **/
function generateWave(nrM, difficulty)
{
	if(curentRound < 1 || curentRound > 10)
		curentRound = 1;
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
	curentRound++;
}


/**
 *	functia deleteWave primeste ca parametru numarul de tipuri de monstri si sterge continutul vectorului nrMonsters
 *	
 **/
function deleWave(nrM)
{
	for(var i = 0; i < nrM; i++)
		nrMonsters[i] = 0;
}
