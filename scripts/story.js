/**
*@authorRaduRomaniuc
*
*A fost nevoie de story.js pentru o optimizare imensa in gameLoop (nu se mai verifica un switch + altele la fiecare loop).
*
* */
function updateStoryTelling()
{
	if(coming_soon==true)$.notify("The great, immersive story is coming soon!", {position:"top center"});
	coming_soon=false;
}


function story(){

if(StoryModeFinished == true) return 0; //Asta o sa existe si in main.js de pe github.

shortcuts();
if (pause == 0){
    // game logic
    updateAchievements();
	updateStoryTelling();
	takeLife();
	
    for(turretIndex in turrets) {
        var turret = turrets[turretIndex];
        detectEnemy(turret);
		for (var i = waves.length-1; i >= 0; i--)
		{
			if((distanta(waves[i], turret) > turret.range) && waves[i].slowingTurret==turretIndex)
				waves[i].redoMonster();
				}
	turret.isAttaking = false;
    }
		
	if(waveFinished())
	{
		move_on = true; 
		curentRound++;
		current_level++;
		waves_won_perBattle ++; //ACHIEVEMENTS			
		activateStoryMode();	
		sizeMonsters(); 
	}
        
	//continuarea functiei de miscare.
	for(var m = 0; m < waves.length; ++ m) {
		var monster = waves[m];
	        
        	if(monster.reachedDestination() && monster.current < path_x.length-1) {
                	monster.moveTo(path_y[monster.current+1], path_x[monster.current+1]);

		} else {
			monster.moveTo(monster.destinationX, monster.destinationY)
		}
		
		
	}
	
    // desenam
    draw();
}
    setTimeout(story, loopInterval);
}
