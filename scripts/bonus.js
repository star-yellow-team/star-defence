/**
 * @name Bonus
 * Modulul se ocupa de bonusuri
 * */

/**
 * @name Bonus that gives life
 * */
var LIFE_BONUS = {
    
    effect:     function() {
                    life += 1; 
                },
    frequency:  3
};

/**
 * @name Bonus that gives score
 * */
var SCORE_BONUS = {

    effect:     function() {
                    score += 1; 
                },
    frequency: 5
};

/**
 * @name Bonus that gives money
 * */
var MONEY_BONUS = {
    
    effect = function() {
       life += 1; 
    },
    frequency: 2    
};


