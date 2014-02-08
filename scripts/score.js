

//Exista functia isAlive care returneaza true / false daca monstrul este sau nu in viata.
//totalScore e acum global.

function addScore(id) //aici putem schimba ca fiecare monstru sa aiba propriul scor. 
{
	totalScore+=id+10;
}

function resetScore() //resetam scorul.
{
	totalScore=0;
}
