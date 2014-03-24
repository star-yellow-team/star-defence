/**
 * @name Bonus
 * Modulul se ocupa de bonusuri
 * */

/**
 * @name Bonus care iti da viata
 *
 * */
var LIFE_BONUS = {
    
    description:    "You are lucky. Here is some bonus life for you!",
    effect:         function() {
                        life += 1; 
                        $.notify(this.description, "info")
                    }
};

/**
 * @name Bonus care iti da scor
 *
 * */
var SCORE_BONUS = {
    description: "You're a true hope for the poor aliens",
    effect:     function() {
                    score += 20; 
                    $.notify(this.description, "info")
                }
};

/**
 * @name Bonus care iti da bani
 *
 * */
var MONEY_BONUS = {
    
    description:   "You're playing good. Here some cash.",
    effect :        function() {
                        if(userScore < 200) {
                            userScore += 50;
                            if(userScore > 200) {
                                userScore = 200;
                            }
                            description = "You're playing good. Here some bonus cash." 
                        } else {
                            description = "You were about to get some money but you have already too much..." 
                        }
                        
                        $.notify(this.description, "info")
                    }
};

/**
 * @name Bonus care omoara monstrii
 *
 */
var KILL_BONUS = {
    
    description: "Here's a good bonus. We killed some monsters for you.",
    effect:     function() {
                    waves.length = 0;
                    $.notify(this.description, "info")
                }
};

/**
 * @name Bonus care nu iti da nimic (muhahaha)
 * */
var NO_BONUS = {
    
    description: "Bad luck. No bonus this time...",
    effect:     function() {
                    $.notify(this.description, "info")
                }
};

var bonuses = [LIFE_BONUS, SCORE_BONUS, MONEY_BONUS, KILL_BONUS, NO_BONUS]


function randomBonus() {
        if(userScore < RANDOM_BONUS_PRICE) {
            $.notify("You do not have enough money");
        } else {
            userScore -= RANDOM_BONUS_PRICE
            bonuses[Math.floor(Math.random()*bonuses.length) % bonuses.length].effect();
        }
}
