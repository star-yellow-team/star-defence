/**
 *  @author Miruna, AndreiRo
 *  @name monster
 *
 *  Clasa de baza Monster si posibilele tipuri de monstri
 *
 *  @example:
 *  var simpleMonster = Monster(0,0,SIMPLE_MONSTER.id)
 *  simpleMonster.health // returneaza viata  monstrului
 *  simpleMonster.speed  // returneaza viteza monstrului
 *  simpleMonster.damage // returneaza damage-ul monstrului
 *
 *  simpleMonster.isAlive()     // returneaza true daca mai are viata, false daca nu
 *  simpleMonster.doDamage(10)  // ii produce un damage de 10 monstrului returneaza true daca mai e in viata, false daca nu
 *  simpleMonster.moveTo(1,1)   // muta monstrul la (1,1)
 *
 * */


/**
 *  Tipurile posibile de monstri.
 *  E un obiect care contine informatii despre tip, viata, viteza, damage propriu in caz ca poate ataca
 * */


//  monstru de baza
var SIMPLE_MONSTER = {
    id :            0,
    health:         40,
    speed:          1,
    damage:         0, 
    color:          'orange',
    point:          2,
    slowingTurret:  0,
    visible:        true,
    sprite:         images[2],
    spriteSize:     4,
    rate:           3
}

//  monstru rapid
var SPEEDY_MONSTER = {
    id :            1,
    health:         70,
    speed:          2.5,
    damage:         0,
    color:          'blue',
    point:          3,
    slowingTurret:  0,
    visible:        true,
    sprite:         images[4],
    spriteSize:     3,
    rate:           3 
}

// monstru si mai rapid
var FLYING_MONSTER={
    id :            2,
    health:         85,
    speed:          3,
    damage:         0,
    color:          'purple',
    point:          4,	
    slowingTurret:  0,
    visible:        true,
    sprite:         images[3],
    spriteSize:     5,
    rate:           3
}

// cel mai puternic monstru
var POWERFUL_MONSTER={
    id :            3,
    health:         120,
    speed:          4,
    damage:         0,
    color:          'pink',
    point:          5,
    slowingTurret:  0,
    visible:        true,
    sprite:         images[5],
    spriteSize:     3,
    rate:           3
}

// monstrul echipei , RAMSI=RADU,ANDREI,ADRIAN,MIRUNA,STEFAN,IONUT :)
var RAMSI_MONSTER={
    id :            4,
    health:         150,
    speed:          2,
    damage:         0,
    color:          'magenta',
    point:          6,
    slowingTurret:  0,
    visible:        true,
    sprite:         images[6],
    spriteSize:     3,
    rate:           3
}

// un vector cu tipurile de monstri
var monsters = [SIMPLE_MONSTER, SPEEDY_MONSTER, FLYING_MONSTER, POWERFUL_MONSTER, RAMSI_MONSTER]

// Numarul maxim de tipuri de monstri
var NUMBER_OF_MONSTER_TYPES = monsters.length;



/**
 *  Clasa Monster
 *
 *  @name Monster
 *  @param {int} x      pozitia pe Ox a mosntrului
 *  @param {int} y      pozitia pe Oy a monstrului
 *  @param {int} type   tipul monstrului.
 * */
function Monster(x, y, type) {

    this.x              = x;
    this.y              = y;
    this.type           = type;
    this.destinationX   = 0;
    this.destinationY   = 0;
    this.current	= 0;
    this.pace           = 0;
    this.offset         = 0;    
    this.frameNumber    = 0;
    this.rateNumber     = 0;
    this.move           = 0;

    switch(type) {

        case SIMPLE_MONSTER.id:
            this.health     = SIMPLE_MONSTER.health;
            this.speed      = SIMPLE_MONSTER.speed;
            this.damage     = SIMPLE_MONSTER.damage;           
            this.isVisible  = SIMPLE_MONSTER.visible;
            this.sprite     = SIMPLE_MONSTER.sprite;
            this.spriteSize = SIMPLE_MONSTER.spriteSize;
            this.rate       = SIMPLE_MONSTER.rate;
             break; 
       
        case SPEEDY_MONSTER.id:
            this.health     = SPEEDY_MONSTER.health;
            this.speed      = SPEEDY_MONSTER.speed;
            this.damage     = SPEEDY_MONSTER.damage;  
            this.isVisible  = SPEEDY_MONSTER.visible;
            this.sprite     = SPEEDY_MONSTER.sprite;
            this.spriteSize = SPEEDY_MONSTER.spriteSize;
            this.rate       = SPEEDY_MONSTER.rate;
            break;

	case FLYING_MONSTER.id:
	    this.health     = FLYING_MONSTER.health;
	    this.speed      = FLYING_MONSTER.speed;
	    this.damage     = FLYING_MONSTER.damage;
            this.isVisible  = FLYING_MONSTER.visible;
            this.sprite     = FLYING_MONSTER.sprite;
            this.spriteSize = FLYING_MONSTER.spriteSize;
            this.rate       = FLYING_MONSTER.rate;
            break;
        
        case POWERFUL_MONSTER.id:
	    this.health     = POWERFUL_MONSTER.health;
	    this.speed      = POWERFUL_MONSTER.speed;
            this.damage     = POWERFUL_MONSTER.damage;
            this.isVisible  = POWERFUL_MONSTER.visible;
            this.sprite     = POWERFUL_MONSTER.sprite;
            this.spriteSize = POWERFUL_MONSTER.spriteSize;
            this.rate       = POWERFUL_MONSTER.rate;
            break;

	case RAMSI_MONSTER.id:
	    this.health     = RAMSI_MONSTER.health;
	    this.speed      = RAMSI_MONSTER.speed;
            this.damage     = RAMSI_MONSTER.damage;
            this.isVisible  = RAMSI_MONSTER.visible;
            this.sprite     = RAMSI_MONSTER.sprite;
            this.spriteSize = RAMSI_MONSTER.spriteSize;
            this.rate       = RAMSI_MONSTER.rate;
            break;
	    
        default:
            console.log("Invalid monster type....!");
            break;
    }

}


/**
 *  Functia pentru da damage unui monstru
 *  @param {int}        amount damage-ul pe care sa il primeasca monstrul
 *  @return {boolean}   daca mai e in viata
 *
 *  @example
 *  var monster = new Monster(0,0,0); 
 *  monster.doDamage(100);
 *
 * */
Monster.prototype.doDamage      = function(amount) {
    amount = Math.abs(amount); // poate nenecesar, dar am vrut sa fiu sigur
    this.health -= amount;

    if(this.isAlive()==false) { enemies_defeated_perBattle++; score ++;} //ACHIEVEMENTS

    return this.isAlive()
}

/**
 * Functia care reface viteza unui monstru
 *
 * @example
 * var monster = new Monster();
 * monster.redoMonster();
 * */
Monster.prototype.redoMonster = function()
{
	this.slowingTurret=-1;
	switch(this.type)
	{
		case SIMPLE_MONSTER.id:
			this.speed = SIMPLE_MONSTER.speed;
			break;
		case SPEEDY_MONSTER.id:
			this.speed = SPEEDY_MONSTER.speed;
			break;
		case FLYING_MONSTER.id:
			this.speed = FLYING_MONSTER.speed;
			break;
		case POWERFUL_MONSTER.id:
			this.speed = POWERFUL_MONSTER.speed;
			break;
		case RAMSI_MONSTER.id:
			this.speed = RAMSI_MONSTER.speed;
			break;
		default:
			console.log("there's an error with slow!");
	}
	
}


/**
 * Functia care incetineste un monstru
 *
 * @param {int}     param ??????
 * @param {Turret}  turret referinta catre tureta
 *
 * */
Monster.prototype.slowMonster = function(param, tureta) {
    this.slowingTurret=param;

    switch(this.type) {
        case SIMPLE_MONSTER.id:
            this.speed = SIMPLE_MONSTER.speed/tureta.amount;
            break;
        case SPEEDY_MONSTER.id:
            this.speed = SIMPLE_MONSTER.speed/tureta.amount;
            break;
        case FLYING_MONSTER.id:
            this.speed = FLYING_MONSTER.speed/tureta.amount;
            break;
        case POWERFUL_MONSTER.id:
            this.speed = POWERFUL_MONSTER.speed/tureta.amount;
            break;
        case RAMSI_MONSTER.id:
            this.speed = RAMSI_MONSTER.speed/tureta.amount;
            break;
        default:
            console.log("there`s an error with slow");
    }

    return param;
}


/**
 *  @name isAlive
 *  @return {boolean} daca monstrul e in viata
 *  
 *  @example
 *  var monster = new Monster(0,0,0)
 *  if(monster.isAlive()) {
 *      // ... cod pentru cand monstrul mai e in viata
 *  } else {
 *      // ... cod pentru cand monstrul a murit
 *  }
 * */
Monster.prototype.isAlive = function() {
    return (this.health > 0) ? true : false;
}


/**
 *  Functia moveTo()
 *  @param {int} newX pozitia noua pe Ox
 *  @param {int} newY pozitia noua pe Oy
 *
 *  @example
 *  var monster = new Monster(0,0,0)
 *  monster.moveTo(0,0);
 * */
Monster.prototype.moveTo = function(newX,newY, moveX, moveY) {
    var xDiff = 0,
        yDiff = 0;

    if(newX != this.destinationX || newY != this.destinationY) {
            this.destinationX   = newX;
            this.destinationY   = newY;
            this.current        += 1;
            this.pace           = (Math.abs(this.destinationX - this.x) + 
                                        Math.abs(this.destinationY - this.y)) / 
                                            magicConstant;
    }
    var move = (this.pace)*this.speed+loopOffset/magicConstant;

    if(moveX != undefined && moveY != undefined) {
        if(this.x != this.destinationX) {
            if(this.x < this.destinationX) {
                this.x += moveX;
                if(this.x > this.destinationX) {
                    xDiff = this.x - this.destinationX;
                    this.x= this.destinationX;
                }
            } else {
                this.x -= moveX;
                if(this.x < this.destinationX) {
                    xDiff = this.destinationX-this.destinationY;
                    this.x= this.destinationX;
                }
            }

        }

        if(this.y != this.destinationY) {
            if(this.y < this.destinationY) {
                this.y += moveY;
                if(this.y > this.destinationY) {
                    yDiff = this.y - this.destinationY;
                    this.y= this.destinationY;
                }
            } else {
                this.y -= moveY;
                if(this.y < this.destinationY) {
                    yDiff = this.destinationY-this.destinationY;
                    this.y= this.destinationY;
                }
            }

        }    
    } else {

            if(this.x != this.destinationX) {
            if(this.x < this.destinationX) {
                this.x += move;
                if(this.x > this.destinationX) {
                    xDiff = this.x-this.destinationX;
                    this.x = this.destinationX;
                }
            } else {
                this.x -= move;
                if(this.x < this.destinationX) {
                    xDiff = this.destinationX - this.x;
                    this.x = this.destinationX;
                }
                
            }
        }
        
        if(this.y != this.destinationY) {
            if(this.y < this.destinationY) {
                this.y += move;
                if(this.y > this.destinationY) {
                    yDiff = this.y-this.destinationY;
                    this.y = this.destinationY;
                }
            } else {
                this.y -= move;
                if(this.y < this.destinationY) {
                    yDiff = this.destinationY - this.y;
                    this.y = this.destinationY;
                }
                
            }
        }
    }   

    if((xDiff != 0 || yDiff != 0) && this.reachedDestination() && this.current < path_x.length - 1) {
        this.moveTo(path_y[this.current+1], path_x[this.current + 1], xDiff, yDiff);
    }


}


/**
 *  Functia reachedDestination()
 *  @return {boolean} Returneaza daca a ajuns sau nu la destinatie
 *
 *  @example
 *  var monster = new Monster(0,0,0)
 *  if(monster.reachedDestination()) {
 *      // cod pentru cand a ajuns la destinatie
 *  } else {
 *      // cod pentru cand nu a ajuns la destinatie
 *  }
 *
 *  // destenatia este cea setata in functia moveTo()
 *  // in caz ca este diferita fata de cea existenta
 * */
Monster.prototype.reachedDestination = function() {
    return (this.x == this.destinationX && this.y == this.destinationY) ? true : false;
}

