/**
 * @name Bonus
 * Modulul se ocupa de bonusuri
 * */

/**
 * @name Bonus that gives life
 * */
var LIFE_BONUS = {
    
    description:    "You are lucky. Here is some bonus life for you!",
    effect:         function() {
                        life += 1; 
                        $.notify(this.description, "info")
                    }
};

/**
 * @name Bonus that gives score
 * */
var SCORE_BONUS = {
    description: "You're a true hope for the poor aliens",
    effect:     function() {
                    score += 20; 
                    $.notify(this.description, "info")
                }
};

/**
 * @name Bonus that gives money
 * */
var MONEY_BONUS = {
    
    description:   "You're playing good. Here some cash.",
    effect :        function() {
                        if(userScore < 175) {
                            userScore += 25; 
                            description = "You're playing good. Here some bonus cash." 
                        } else {
                            description = "You were about to get some money but you have already too much..." 
                        }
                        
                        $.notify(this.description, "info")
                    }
};

/**
 * @name Bonus that kills all monsters
 * */
var KILL_BONUS = {
    
    description: "Here's a good bonus. We killed some monsters for you.",
    effect:     function() {
                    waves.length = 0;
                    $.notify(this.description, "info")
                }
};

var bonuses = [LIFE_BONUS, SCORE_BONUS, MONEY_BONUS, KILL_BONUS]
