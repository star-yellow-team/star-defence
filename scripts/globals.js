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
var totalScore      =  0; //Se refera la scorul total per batalie. NU total per tot jocul.
var totalCredits    =  0; //Se refera la banii pe care ii are jucatorul per batalie.

var turrets         = [];


//Achievements variables. Ca sa fie mai organizat.
var allTime_Enemies_Defeated = 0;
//IMPORTANT! Acum ne dam seama ca trebuie sa pastram undeva, in memorie, achievementurile, ca altfel, la pornirea
//jocului, se initializeaza toate cu 0. So va fi ceva gen: var allTime_X = function GetFromMemory.
