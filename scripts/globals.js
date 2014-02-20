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
var totalScore      =  0; //Se refera la scorul total per batalie. NU total per tot jocul.
var turrets         = [];
