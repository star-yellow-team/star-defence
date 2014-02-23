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
var userScore       =  0;

var turrets         = [];


//Achievements
var time_passed_perBattle = 0; var totalCredits = 0; var totalScore = 0; var fun_activated = true; // TIMP, CREDITS, SCOR, FUN

var enemies_defeated_perBattle = 0;	 //ENEMIES
var first_enemy_defeated = false;
var first_10_enemies_defeated = false;
var first_50_enemies_defeated = false;
var first_100_enemies_defeated = false;
var first_1000_enemies_defeated = false;

var turrets_placed_perBattle =0;  //TURRETS
var first_turret_placed = false;
var first_10_turrets_placed = false;
var first_20_turrets_placed = false;

var waves_won_perBattle = 0; //WAVES
var first_wave_won = false;
var first_10_waves_won = false;
var first_50_waves_won = false;
var first_100_waves_won = false;

var first_100_credits = false;
