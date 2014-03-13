//updateAchievements
/*
IMPORTANT, un mic truc:
Daca veau sa afisez la notify cu "info" si in acelasi timp sa pun pozitionarea in dreapta, etc, trebuie sa schimb defaultul.
------> Vezi linia 14, cu case 50.

REGULI DE RESPECTAT:
Achievementsurile apar SUS STANGA, din default.
Chestiile fun apar JOS STANGA.

DEFAULTUL este success cu top left.
*/

randomAchivementsList = [
"Upgrading turrets can increase your chances",
"Slow turrets can help you alot! You should try!",
"Monsters move too slowly? Try fast forward :)",
"Use turret's context menu to upgrade or remove it",
"Removing turrets gives you half of its price back",
"You can remove a turret to place it farther if a monster passed it",
"Try to put turrets around corners",
"Try random bonus if you are feeling lucky!",
"Random bonus can give you score, money, life or it can kill monsters",
"Don't worry if you lose one life.",
"Killing monsters gives you money and score",
"Don't forget you're fighting for a good cause",
"You're a true saviour for the aliens",
"Kill'em!",
"Uhuuu... You're looking good",
"Want to take a break? Press space :)",
"Wrong turret? Press Esc",
"Try using 1,2,3,4,5 as hotkeys for selecting turrets",
"Do your best to save them",
"Mooore turrets, the aliens need their planet intact",
"What a lovely planet, isn't it?",
"See that fire? Stop the monsters from doing more!",
"Just look at the aliens waving at you :)",
"Smile, there will be more of them comming",
"Relax, you're doing just fine.",
"More turrets, faster",
"Use the space efficiently",
"Enjoy the game",
"Like the game? Check our page https://www.facebook.com/pages/Star-Defence/1452147018352978"
]

function randomAchivement() {
    $.notify(randomAchivementsList[Math.floor(Math.random()*randomAchivementsList.length) % randomAchivementsList.length], {position:"bottom left"})
}

function updateAchievements()//Se apeleaza in functia gameLoop(), din main.js.
{
	//FOR FUN. Keeping the game with jokes and alive.
	if(fun_activated == true)
	{	
		$.notify.defaults({ className: "info" }); //Pentru fun punem si noi cu info.
		$.notify.defaults({ globalPosition: "bottom left" }); //Si bottom center sa apara.
		switch(time_passed_perBattle)
		{	
			case 50:
				$.notify("You smell good!");
				break;
			case 1000: //echivalentul a 5 secunde. 20 = 1 sec.
				$.notify("You like the game, don't you? Here's some more credits! \n +100 credits.");
				score +=100;
				break;
			case 800: 
				$.notify("Beware the bugs!", "warn");
				break;
			case 2000:
				$.notify("You have been playing the game for 1 minute! Here's some credits for your love! \n +200 credits.");
				score += 200; 
				break;
		}
		$.notify.defaults({ className: "success" }); //pun la loc defaultul.
		$.notify.defaults({ globalPosition: "top right" }); //pun la loc defaultul.
	}
	
	//ENEMIES ________________________________________________________________________________________________________
	switch(enemies_defeated_perBattle)//se verifica in monsters.js la isAlive()
	{
		case 1:
			if(first_enemy_defeated == false)
			{first_enemy_defeated = true; $.notify("Congrats! You killed  you first enemy! \n + 50 credits."); score += 50; }
			break;
		case 10:
			if(first_10_enemies_defeated == false)
			{first_10_enemies_defeated = true; $.notify("You have defeated 10 enemies! \n + 100 credits."); score += 100; }
			break;
		case 50:
			if(first_50_enemies_defeated == false)
			{first_50_enemies_defeated = true; $.notify("You have defeated 50 enemies!"); }
			break;
		case 100:
			if(first_100_enemies_defeated == false)
			{first_100_enemies_defeated = true; $.notify("You have defeated 100 enemies!"); }
			break;
		case 1000:
			if(first_1000_enemies_defeated == false)
			{first_1000_enemies_defeated = true; $.notify("You have defeated 1000 enemies!"); }
			break;
	}
	
	//TURRETS__________________________________________________________________________________________________________
	switch(turrets_placed_perBattle)//Se verifica in maps.js la functia addElement()
	{
		case 1:
			if(first_turret_placed == false)
			{first_turret_placed = true; $.notify("Your first turret!");}
			break;
			
		case 10:
			if(first_10_turrets_placed == false)
			{first_10_turrets_placed = true; $.notify("You're a builder! You've constructed 10 turrets!");}
			break;
			
		case 20:
			if(first_20_turrets_placed == false)
			{first_20_turrets_placed= true; $.notify("PAAAARTYYY ROCK! You've constructed 20 turrets ");}
			break;	
	}
	
	//WAVES________________________________________________________________________________________________________
	switch (waves_won_perBattle)//Se verifica in main.js la functia waveFinished()
	{
		case 1:
			if(first_wave_won == false)
			{first_wave_won = true; $.notify("You've won the first wave!");}
			break;
		
		case 10:
			if(first_10_waves_won == false)
			{first_10_waves_won = true; $.notify("You've won the first 10 waves!");}
			break;
			
		case 50:
			if(first_50_waves_won == false)
			{first_50_waves_won = true; $.notify("You've won the first 50 waves!");}
			break;
			
		case 100:
			if(first_100_waves_won == false)
			{first_100_waves_won = true; $.notify("You've won the first 100 waves!");}
			break;
	}
	
	//CREDITS________________________________________________________________________________________________________
	switch(score)//Se aduna credits cand un monstru este omorat, deci la isAlive().
	{
		case 100:
			if(first_100_credits == false)
			{first_100_credits= true; $.notify("Gimme l'argent!");}
			break;
			
	}
	
	time_passed_perBattle ++;
}
