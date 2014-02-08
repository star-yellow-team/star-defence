/*  globals.js
 *
 *  File containing global variables which will be loaded first
 *
 * */

var mapNumber       = prompt("Numarul hartii", 0);
var difficulty      = prompt("Dificultatea", 0) % 3;
var life            =  0;
var loopInterval    = 50;
var waves           = [];
var path_matrix     = [];
var curentRound     = -1;
var totalScore      =  0;
