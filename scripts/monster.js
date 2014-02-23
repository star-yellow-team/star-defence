/**
 *  @author Miruna, AndreiRo
 *  Clasa de baza Monster si posibilele tipuri de monstri
 *
 *  Exemple:
 *  simpleMonster = Monster(0,0,SIMPLE_MONSTER.id)
 *  simpleMonster.health // returneaza viata  monstrului
 *  simpleMonster.speed  // returneaza viteza monstrului
 *  simpleMonster.damage // returneaza damage-ul monstrului
 *
 *  simpleMonster.isAlive()     // returneaza true daca mai are viata, false daca nu
 *  simpleMonster.doDamage(10)  // ii produce un damage de 10 monstrului returneaza true daca mai e in viata, false daca nu
 *  simpleMonster.moveTo(1,1)   // muta monstrul la (1,1)
 *
 *
 * */

/**
 *  Tipurile posibile de monstri.
 *  E un obiect care contine informatii despre tip, viata, viteza, damage propriu in caz ca poate ataca
 * */
//  monstru de baza
var SIMPLE_MONSTER = {
    id :    0,
    health: 10,
    speed:  1,
    damage: 0, 
    color:  'orange',
	point: 2,
    visible: true
}

//  monstru rapid
var SPEEDY_MONSTER = {
    id :    1,
    health: 21,
    speed:  2.5,
    damage: 0,
    color:  'blue',
	point: 3,
    visible: true
}

// monstru zburator
var FLYING_MONSTER={
    id :  2,
    health: 12,
    speed: 3,
    damage: 0,
    color:  'purple',
	point: 4,	
    visible: true
}

// cel mai puternic monstru
var POWERFUL_MONSTER={
    id : 3,
    health: 25,
    speed: 4,
    damage:0,
    color: 'pink',
	point: 5,
    visible: true
}

// monstrul echipei , RAMSI=RADU,ANDREI,ADRIAN,MIRUNA,STEFAN,IONUT :)
var RAMSI_MONSTER={
    id :4,
    health: 40,
    speed: 2,
    damage:0,
    color: 'magenta',
	point: 6,
    visible: true
}

var monsters = [SIMPLE_MONSTER, SPEEDY_MONSTER, FLYING_MONSTER, POWERFUL_MONSTER, RAMSI_MONSTER]
// Numarul maxim de tipuri de monstri
var NUMBER_OF_MONSTER_TYPES = monsters.length;



/**
 *  Constructorul clasei Monster
 *  @param x pozitia pe Ox a mosntrului
 *  @param y pozitia pe Oy a monstrului
 *  @param type tipul monstrului.
 * */
function Monster(x, y, type) {

    this.x              = x;
    this.y              = y;
    this.type           = type;
    this.destinationX   = 0;
    this.destinationY   = 0;
    this.current	= 0;
    this.pace           = 0;
    
    switch(type) {

        case SIMPLE_MONSTER.id:
            this.health     = SIMPLE_MONSTER.health;
            this.speed      = SIMPLE_MONSTER.speed;
            this.damage     = SIMPLE_MONSTER.damage;           
            this.isVisible  = SIMPLE_MONSTER.visible;
            break; 
       
        case SPEEDY_MONSTER.id:
            this.health     = SPEEDY_MONSTER.health;
            this.speed      = SPEEDY_MONSTER.speed;
            this.damage     = SPEEDY_MONSTER.damage;  
            this.isVisible  = SPEEDY_MONSTER.visible;
            break;

	case FLYING_MONSTER.id:
	    this.health     = FLYING_MONSTER.health;
	    this.speed      = FLYING_MONSTER.speed;
	    this.damage     = FLYING_MONSTER.damage;
            this.isVisible  = FLYING_MONSTER.visible;
            break;
        
        case POWERFUL_MONSTER.id:
	    this.health     = POWERFUL_MONSTER.health;
	    this.speed      = POWERFUL_MONSTER.speed;
            this.damage     = POWERFUL_MONSTER.damage;
            this.isVisible  = POWERFUL_MONSTER.visible;
            break;

	case RAMSI_MONSTER.id:
	    this.health = RAMSI_MONSTER.health;
	    this.speed  = RAMSI_MONSTER.speed;
            this.damage = RAMSI_MONSTER.damage;
            this.isVisible  = RAMSI_MONSTER.visible;
            break;
	    

        default:
            console.log("Invalid monster type....!");
            break;
    }

}


/**
 *  Functia doDamage() pentru da damage unui monstru
 *  @param amount damage-ul pe care sa il primeasca monstrul
 *  @return true daca mai ramane in viata
 *  @return false daca moare
 *
 *  Exemplu: monster.doDamage(100);
 *
 * */
Monster.prototype.doDamage      = function(amount) {
    amount = Math.abs(amount); // poate nenecesar, dar am vrut sa fiu sigur
    this.health -= amount;

    if(this.isAlive()==false) { enemies_defeated_perBattle++; totalCredits ++;} //ACHIEVEMENTS
    return this.isAlive()
}

Monster.prototype.slowMonster = function(amount)
{
	amount = Math.abs(amount);
	switch(this.type)
	{
		case 0:
			this.speed = 0.5;
			break;
		case 1:
			this.speed = 1.25;
			break;
		case 2:
			this.speed = 1.5;
			break;
		case 3:
			this.speed = 2;
			break;
		case 4:
			this.speed = 1;
			break;
		default:
			console.log("ai grija");
	}
	
	if(this.speed - 0.05 >= 0)
		this.speed -= 0.05;
	else
		this.speed = 0;
	//alert("slow");
}

/**
 *  Functia isAlive()
 *  @return true sau false daca monstrul e in viata
 *  Exemplu: monster.isAlive() -> true/false
 * */
Monster.prototype.isAlive       = function() {
    return (this.health > 0) ? true : false;
}

/**
 *  Functia moveTo()
 *  @param newX pozitia noua pe Ox
 *  @param newY pozitia noua pe Oy
 *
 *  Exemplu: monster.moveTo(0,0);
 * */
Monster.prototype.moveTo        = function(newX,newY) {
    //this.x = newX;
    //this.y = newY;
    

    if(newX != this.destinationX || newY != this.destinationY) {
        this.destinationX   = newX;
        this.destinationY   = newY;
        this.current        += 1;
        this.pace           = (Math.abs(this.destinationX - this.x) + Math.abs(this.destinationY - this.y)) / loopInterval;
    }

    if(this.x != this.destinationX) {
        if(this.x < this.destinationX) {
            this.x += this.pace*this.speed;
            if(this.x > this.destinationX) {
                this.x = this.destinationX;
            }
        } else {
            this.x -= this.pace*this.speed;
            if(this.x < this.destinationX) {
                this.x = this.destinationX;
            }
            
        }
    }
    
    if(this.y != this.destinationY) {
        if(this.y < this.destinationY) {
            this.y += this.pace*this.speed;
            if(this.y > this.destinationY) {
                this.y = this.destinationY;
            }
        } else {
            this.y -= this.pace*this.speed
            if(this.y < this.destinationY) {
                this.y = this.destinationY;
            }
            
        }
    }

}


/**
 *  Functia reachedDestination()
 *  @return true daca a ajuns la destinatie
 *  @return false daca nu a ajuns la destinatie
 * */
Monster.prototype.reachedDestination = function() {
    return (this.x == this.destinationX && this.y == this.destinationY) ? true : false;
}

