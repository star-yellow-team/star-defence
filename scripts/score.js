

//Exista functia isAlive care returneaza true / false daca monstrul este sau nu in viata.

var totalScore = 0;

function addScore(id) //aici putem schimba ca fiecare monstru sa aiba propriul scor. 
{
	  totalScore+=id+10;
}

function resetScore() //resetam scorul.
{
	totalScore=0;
}
