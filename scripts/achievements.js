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
				totalCredits +=100;
				break;
			case 800: 
				$.notify("Beware the bugs!", "warn");
				break;
			case 2000:
				$.notify("You have been playing the game for 1 minute! Here's some credits for your love! \n +200 credits.");
				totalCredits += 200; 
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
			{first_enemy_defeated = true; $.notify("Congrats! You killed  you first enemy! \n + 50 credits."); totalCredits += 50; }
			break;
		case 10:
			if(first_10_enemies_defeated == false)
			{first_10_enemies_defeated = true; $.notify("You have defeated 10 enemies! \n + 100 credits."); totalCredits += 100; }
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
	switch(totalCredits)//Se aduna credits cand un monstru este omorat, deci la isAlive().
	{
		case 100:
			if(first_100_credits == false)
			{first_100_credits= true; $.notify("Gimme l'argent!");}
			break;
			
	}
	
	time_passed_perBattle ++;
}
