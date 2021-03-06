/**
*@authorRaduRomaniuc
*
*A fost nevoie de story.js pentru o optimizare imensa in gameLoop (nu se mai verifica un switch + altele la fiecare loop).
*
* */
function updateStoryTelling()
{
	
	if(coming_soon==true)$.notify("The great, immersive story is coming soon!");
	coming_soon=false;
	
	//Machine Guns
	switch(machineGuns_built)
	{
		case 1:
		if(first_machineGun == true){
		$(".ghostImage").notify("Good choice! \n The Machine Gun is an all-round good turret.","info");
		first_machineGun = false;
		}
		break;
		
		case 2:
		if(second_machineGun == true){
		$(".ghostImage").notify("Two Machine Guns are always better than one!","info");
		second_machineGun = false;
		}
		break;
		
		case 3:
		if(third_machineGun == true){
		$(".ghostImage").notify("I love them too!","info");
		third_machineGun = false;
		}
		break;
	}
	
	//Waves Alerts
	switch(waves_won_perBattle)
	{
		case 0:
		if(wave1_alert==true){
		$.notify("Commander! Warning! Enemies incoming!","info");
		wave1_alert = false;
		}
		break;
		
		case 1:
		if(wave2_alert==true){
		$.notify("More enemies incoming!","info");
		wave2_alert = false;
		}
		break;
	}
	
}

function story(){
if(pause == 0) {
    // partea cu sfaturile random
    if(achivementContor == 0) {
        randomAchivement();
        achivementContor = achivementTime;
    }
    -- achivementContor;

    // partea cu bonusuri
    if(bonusContor == 0) {
        bonuses[Math.floor(Math.random()*bonuses.length) % bonuses.length].effect();
        bonusTime *= 2 + 1;
        bonusContor = bonusTime; 
    }
    -- bonusContor;

}
if(userScore < 200)
	showMoneyLimitError = true;
else{
	if(showMoneyLimitError == true){
		$.notify("You`re too greedy and you will receive no more money until you cool down", "error")
		showMoneyLimitError = false;
		}
	userScore = 200;
}
	if(life <= 0){
			//aici se afiseaza meniul principal daca jucatorul nu mai are viata
			location.reload();
		}
$("#money").html(String(userScore));
$("#health").html(String(life));

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
	if(loopOffset < 20) {
	    time = (time+1) % (loopOffset > 0 ? Math.floor(loopOffset/3) : rate);
        } else {
	    time = (time+1) % (loopOffset > 0 ? Math.floor(loopOffset/7) : rate);
        }
	
        if(time==0) {start++; time=0;}
	
	
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
	for(var m = 0; m <= start && m<waves.length; ++ m) { //bugul este ca startul se face prea mare, neexistand waves[start] cand start e ceva gen 100.
		var monster = waves[m];
	        
        	if(monster.reachedDestination() && monster.current < path_x.length-1) {
                	monster.moveTo(path_y[monster.current+1], path_x[monster.current+1]);

		} else {
			monster.moveTo(monster.destinationX, monster.destinationY);
		}
		
		
	}
	
    // desenam
    draw();
    $("#money").html(String(userScore));
    $("#health").html(String(life));
    $("#score").html(String(score));
}
    gml = setTimeout(story, loopInterval);
}
var gml;
