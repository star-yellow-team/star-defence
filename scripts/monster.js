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
    speed:  5,
    damage: 0
}

//  monstru rapid
var SPEEDY_MONSTER = {
    id :    1,
    health: 7,
    speed:  10,
    damage: 0

}

// monstru zburator
var FLYING_MONSTER={
    id :  2,
    health: 12,
    speed: 15,
    damage: 0
}

// cel mai puternic monstru
var POWERFUL_MONSTER={
    id : 3,
    health: 25,
    speed: 30,
    damage:0
}

// monstrul echipei , RAMSI=RADU,ANDREI,ADRIAN,MIRUNA,STEFAN,IONUT :)
var RAMSI_MONSTER={
    id :4,
    health: 40,
    speed: 20,
    damage:0
}



/**
 *  Constructorul clasei Monster
 *  @param x pozitia pe Ox a mosntrului
 *  @param y pozitia pe Oy a monstrului
 *  @param type tipul monstrului.
 * */
function Monster(x, y, type) {

    this.x      = x;
    this.y      = y;
    this.type   = type;

    
    switch(type) {

        case SIMPLE_MONSTER.id:
            this.health = SIMPLE_MONSTER.health;
            this.speed  = SIMPLE_MONSTER.speed;
            this.damage = SIMPLE_MONSTER.damage;           
            break; 
       
        case SPEEDY_MONSTER.id:
            this.health = SPEEDY_MONSTER.health;
            this.speed  = SPEEDY_MONSTER.speed;
            this.damage = SPEEDY_MONSTER.damage;  
            break;

		case FLYING_MONSTER.id:
			this.health = FLYING_MONSTER.health;
			this.speed  = FLYING_MONSTER.speed;
			this.damage = FLYING_MONSTER.damage;
            break;

		case POWERFUL_MONSTER.id:
			this.health = POWERFUL_MONSTER.health;
			this.speed  = POWERFUL_MONSTER.speed;
            this.damage = POWERFUL_MONSTER.damage;
            break;

		case RAMSI_MONSTER.id:
			this.health = RAMSI_MONSTER.health;
			this.speed  = RAMSI_MONSTER.speed;
            this.damage = RAMSI_MONSTER.damage;
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

    return this.isAlive()
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
    this.x = newX;
    this.y = newY;
}

