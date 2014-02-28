/*  globals.js
 *
 *  File containing global variables which will be loaded first
 *
 * */

var mapNumber       = 0;//prompt("Numarul hartii", 0);
var life            =  5;
var loopInterval    = 50;
var waves           = [];
var path_matrix     = [];
var path_x          = [];
var path_y          = [];
var nrmax_path      =  0;
var curentRound     = -1;
var boxSize         =  0;
var userScore       =  20;
var turrets         = [];
var dimension       =  0;
var offset          =  0;
var userLevel       =  0;

//Story
var StoryModeFinished = false; //daca s-a terminat storyul.
var last_level_completed = false; //mai aveam nevoie si de variabila asta.
var move_on         = true;
var current_level   = 1;
var user_selection  = 0//prompt("Cum se deruleaza jocul?","story");

//StoryTelling
var coming_soon = true;
var machineGuns_built = 0, first_machineGun = true, second_machineGun = true, third_machineGun = true;
var wave1_alert = true, wave2_alert = true, wave3_alert = true;

//Achievements
var time_passed_perBattle = 0; var totalCredits = 0; var totalScore = 0; var fun_activated = true; // TIMP, CREDITS, SCOR, FUN

var enemies_defeated_perBattle  =   0;
var first_enemy_defeated        = false;
var first_10_enemies_defeated   = false;
var first_50_enemies_defeated   = false;
var first_100_enemies_defeated  = false;
var first_1000_enemies_defeated = false;

var turrets_placed_perBattle    =   0;
var first_turret_placed         = false;
var first_10_turrets_placed     = false;
var first_20_turrets_placed     = false;

var waves_won_perBattle         =   -1;
var first_wave_won              = false;
var first_10_waves_won          = false;
var first_50_waves_won          = false;
var first_100_waves_won         = false;
var first_100_credits           = false;

var FRAME_SIZE                  =   50;
var FRAME_RATE                  =    3;

$('#money-wrapper').html(String(userScore))

function sizeMonsters() {
    dimension = boxSize ;
    //offset = (boxSize) / (waves.length);
    offset = 0;    
    var currentOffset = 0;

    for(var mIndex = 0; mIndex < waves.length; ++ mIndex) {
        var monster     = waves[mIndex]
        monster.offset  = currentOffset;
        currentOffset   += offset;

        if(currentOffset > (boxSize-dimension)) {
            currentOffset = 0;
        }
    }
    
    
}

// draw image to screen drawImage(imageObject, sourceX, sourceY, sourceWidth, sourceHeight,
// destinationX, destinationY, destinationWidth, destinationHeight)
function animate(context, object, offset) { 
    if(object == undefined) {return;}
    if(offset == undefined) {
        
    } else if(object.type == 0) {
        //deseneaza monstrul
            context.drawImage(object.sprite, object.frameNumber*FRAME_SIZE, 0,FRAME_SIZE, FRAME_SIZE, 
            boxSize * object.x, boxSize * object.y + object.offset, dimension, dimension)            

            // contur lifebar
            context.strokeStyle = "black"
            context.strokeRect(boxSize * object.x - dimension / 2, 
                            boxSize * object.y - boxSize/2 + object.offset,
                            2*dimension, dimension/3 );
            
            //determina viata
            context.fillStyle = "red"
            var health = object.health * (2*dimension) / monsters[object.type].health;
    
            //deseneaza partea rosie
            context.fillRect(boxSize * object.x - dimension / 2, 
                            boxSize * object.y - boxSize/2 + object.offset, 
                            health, dimension/3 );
            

    } else {
        //deseneaza monstrul
            context.fillStyle = monsters[object.type].color;
	    context.fillRect(boxSize * object.x, boxSize * object.y + object.offset, dimension, dimension); 
        
            // contur lifebar
            context.strokeStyle = "black"
            context.strokeRect(boxSize * object.x - dimension / 2, 
                            boxSize * object.y - boxSize/2 + object.offset,
                            2*dimension, dimension/3 );
            
            //determina viata
            context.fillStyle = "red"
            var health = object.health * (2*dimension) / monsters[object.type].health;
    
            //deseneaza partea rosie
            context.fillRect(boxSize * object.x - dimension / 2, 
                            boxSize * object.y - boxSize/2 + object.offset, 
                            health, dimension/3 );
            

    }
    
    if(object.rateNumber == 0) {
        object.frameNumber = (object.frameNumber + 1) % object.spriteSize;
    }

    object.rateNumber += 1
    object.rateNumber %= FRAME_RATE
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
		{

			return true;
		}

	return false;
}
