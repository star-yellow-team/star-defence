/*  globals.js
 *
 *  File containing global variables which will be loaded first
 *
 * */

var mapNumber       = prompt("Numarul hartii", 0);
var difficulty      = prompt("Dificultatea", 0) % 3;
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

//Story
var StoryModeFinished = false; //daca s-a terminat storyul.
var last_level_completed = false; //mai aveam nevoie si de variabila asta.
var move_on         = true;
var current_level   = 1;
var user_selection  = prompt("Cum se deruleaza jocul?","story");

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

$('#money-wrapper').html(String(userScore))

function sizeMonsters() {
    dimension = boxSize / 3;
    offset = (boxSize) / (waves.length);
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

    if(offset == undefined) {
        
    } else {

    }

    object.frameNumber = (object.frameNumber + 1) % object.spriteSize;
}
