/*  globals.js
 *
 *  File containing global variables which will be loaded first
 *
 * */
var showMoneyLimitError = true;
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
//userScore = bani
var userScore       =  20;
//score = nr monstri omorati
var score           = 0;
var turrets         = [];
var dimension       =  0;
var offset          =  0;
var userLevel       =  0;
var toAdd	    =  0;
var rate	    = 50;

var loopOffset      =  0;
var magicConstant   = 50;
//Story
var time=1, ready=25,start=0;//PENTRU MISCAREA MONSTRIILOR 
var StoryModeFinished = false; //daca s-a terminat storyul.
var last_level_completed = false; //mai aveam nevoie si de variabila asta.
var move_on         = true;
var current_level   = 1;
var user_selection  = 0//prompt("Cum se deruleaza jocul?","story");

var bonusTime           = 100;
var bonusContor         = 100;
var RANDOM_BONUS_PRICE  = 15;

//StoryTelling
var coming_soon = true;
var machineGuns_built = 0, first_machineGun = true, second_machineGun = true, third_machineGun = true;
var wave1_alert = true, wave2_alert = true, wave3_alert = true;

//Achievements
var time_passed_perBattle = 0;
var score = 0;
var totalScore = 0;
var fun_activated = true; // TIMP, CREDITS, SCOR, FUN

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
var STAR_SIZE                   =   5;

var auxiliaries                 = [];
var numberOfAuxiliaries         = 40;

function resetValues() {
    life            =  5;
    waves           = [];
    nrmax_path      =  0;
    curentRound     =  1;
    userScore       =  20;
    turrets         = [];
    userLevel       =  0;
    score           = 0;
    rate            = 50;
    loopOffset      = 0;

    //Story
    StoryModeFinished = false; //daca s-a terminat storyul.
    last_level_completed = false; //mai aveam nevoie si de variabila asta.
    move_on         = true;
    current_level   = 1;

    //StoryTelling
    coming_soon = true;
    machineGuns_built = 0, first_machineGun = true, second_machineGun = true, third_machineGun = true;
    wave1_alert = true, wave2_alert = true, wave3_alert = true;

    //Achievements
    time_passed_perBattle = 0;
    score = 0;
    totalScore = 0;
    fun_activated = true; // TIMP, CREDITS, SCOR, FUN
    enemies_defeated_perBattle  =   0;
    first_enemy_defeated        = false;
    first_10_enemies_defeated   = false;
    first_50_enemies_defeated   = false;
    first_100_enemies_defeated  = false;
    first_1000_enemies_defeated = false;

    turrets_placed_perBattle    =   0;
    first_turret_placed         = false;
    first_10_turrets_placed     = false;
    first_20_turrets_placed     = false;

    waves_won_perBattle         =   -1;
    first_wave_won              = false;
    first_10_waves_won          = false;
    first_50_waves_won          = false;
    first_100_waves_won         = false;
    first_100_credits           = false;
}

function sizeMonsters() {
    dimension = boxSize ;
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
        //pt turete
        if(checkTurret(object)) {
            var frame       = 0;
            var alpha       = 0;
            var ANGLE_RATE  = 360 / object.spriteSize;

            while(alpha < object.angle) {
                frame = frame == 0 ? object.spriteSize - 1 : frame - 1;
                alpha += ANGLE_RATE;
            }            
            
            if(object.type != SLOW_TURRET.id) {
                context.drawImage(object.sprite, frame * FRAME_SIZE, 0, FRAME_SIZE, FRAME_SIZE,
                boxSize * object.x, boxSize * object.y, boxSize, boxSize);
            } else {
                context.drawImage(object.sprite, object.frameNumber * FRAME_SIZE, 0, FRAME_SIZE, FRAME_SIZE,
                boxSize * object.x, boxSize * object.y, boxSize, boxSize);
            }

            if(object.rateNumber == 0) {
            object.frameNumber = (object.frameNumber + 1) % object.spriteSize;
            }

            object.rateNumber += 1
            object.rateNumber %= object.rate
        } else {
            object.frameNumber = 0;
            context.drawImage(object.sprite, 0, 0, FRAME_SIZE, FRAME_SIZE,
            boxSize * object.x, boxSize * object.y, boxSize, boxSize);
        }

        // deseneaza stelutele
        // scaleaza dimensiunea stelutei
        var s_size   = boxSize / 3;
        var current_s_x_offset = 0,
            current_s_y_offset = 0;
        for(var s = 0; s < object.upgradeLevel; ++ s) {
            context.drawImage(images[7], 0, 0, 50, 50, 
            boxSize * object.x + current_s_x_offset, boxSize * (object.y+1) - s_size + current_s_y_offset, s_size, s_size);
            current_s_x_offset += s_size;
            if(current_s_x_offset == boxSize) {
                current_s_x_offset = 0;
                current_s_y_offset = - s_size;
            }
        }
             
           
        } else if(isNaN(offset)) {
            //draw auxiliary
            context.drawImage(object.sprite, object.frameNumber*FRAME_SIZE, 0,FRAME_SIZE, FRAME_SIZE, 
            boxSize * object.x, boxSize * object.y, dimension, dimension);
            
        if(object.rateNumber == 0) {
                object.frameNumber = (object.frameNumber + 1) % object.spriteSize;
            }

            object.rateNumber += 1
            object.rateNumber %= object.rate
        } else {
        //deseneaza monstrul
            context.drawImage(object.sprite, object.frameNumber*FRAME_SIZE, 0,FRAME_SIZE, FRAME_SIZE, 
            boxSize * object.x, boxSize * object.y + object.offset, dimension, dimension)            

            // contur lifebar
            context.strokeStyle = "black"
            context.strokeRect(boxSize * object.x,
                            boxSize * object.y - dimension/4 + object.offset,
                            dimension, dimension/4 );
            
            //determina viata
            var initial= monsters[object.type].health
            var current= object.health
            var health = object.health * (dimension) / initial;

            // determina daca e verde sau rosu            
            
            if(current > initial /2) {
                context.fillStyle = "rgb(0,"+String(Math.floor((current*255)/initial))+", 0)"
            } else {
                context.fillStyle = "rgb("+String(Math.floor((current*255)/(initial/2)))+", 0 , 0)"
            } 
    
            //deseneaza partea rosie
            context.fillRect(boxSize * object.x,
                            boxSize * object.y -dimension / 4 + object.offset, 
                            health, dimension/4 );
            if(object.rateNumber == 0) {
                object.frameNumber = (object.frameNumber + 1) % object.spriteSize;
            }

            object.rateNumber += 1
            object.rateNumber %= object.rate
    } 
    
    
}


/**
 *	functia gameOver returneaza:
 *		0: jucatorul nu mai are viata
 *		1: jucatorul a terminat toate rundele, A CASTIGAT
 *		-1: jucatorul mai are viata si nu a terminat toate rundele
 **/
function gameOver() {

    if(life <= 0) {
        return true;
    }

    return false;
}
