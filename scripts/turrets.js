/**
* @author Ionut
* Definirea Turret-ului
* daca lipseste ceva va rog spuneti
*/

//numar maxim de tipuri de turete
var NUMBER_OF_TURRET_TYPES = 5;

//functia slow
function Slow(monster)
{
	switch(monster.id) {
        case SIMPLE_MONSTER.id:
            monster.speed      = 0.5;	break;
        case SPEEDY_MONSTER.id:
            monster.speed      = 1.25;	break;
		case FLYING_MONSTER.id:
			monster.speed      = 1.5;	break;
        case POWERFUL_MONSTER.id:
			monster.speed      = 2;		break;
		case RAMSI_MONSTER.id:
			monster.speed	   = 1;		break;
        default:
            console.log("Invalid monster type!");	break;
    }
}

//Tipuri de turete
var MACHINEGUN_TURRET = {
	id:	0,
	damage:	0.6,
	range:	3,
	attackSpeed:	4,
	damageType:	"Single",
	upgradeLevel:	0,
	price:	10,
	kills:	0,
	requirement:	"None",
	description:	"Fast attacking turret",
	isAttacking:	false,
	contor:	0,
	x:	0,
	y:	0
}

var SLOW_TURRET = {
	id:	1,
	damage:	0,
	range:	3,
	upgradeLevel:	0,
	price:	20,
	requirement:	"None",
	description:	"Slows enemies in their path",
	slow:	"Yes",
	isAttacking:	false,
	contor:	0,
	x:	0,
	y:	0
}

var PLASMA_TURRET = {
	id:	2,
	damage:	1.0,
	range:	2,
	attackSpeed:    4,
	damageType:	"Splash",
	upgradeLevel:	0,
	price:	40,
	kills:	0,
	requirement:	"None",
	description:	"Strong turret against swarms of small units",
	isAttacking:	false,
	contor:	0,
	x:	0,
	y:	0
}

var LASER_TURRET = {
	id:	3,
	damage:	1.1,
	range:	3,
	attackSpeed:	4,
	damageType:	"Single",
	upgradeLevel:	0,
	price:	50,
	kills:	0,
	requirement:	"Pass level 6",
	description:	"Fires laser beams at enemy targets",
	isAttacking:	false,
	contor:	0,
	x:	0,
	y:	0
}

var DETECTOR_TURRET = {
	id:	4,
	damage:	0,
	range:	2,
	upgradeLevel:	0,
	price:	20,
	detection: "Yes",
	requirement:	"Pass level 8",
	description:	"Reveals invisible enemies within range",
	isAttacking:	false,
	contor:	0,
	x:	0,
	y:	0
}

function Turret(type)
{
	this.type       = type;
        this.isSlowed   = false
	switch(type)	{
		case MACHINEGUN_TURRET.id:
			this.damage=MACHINEGUN_TURRET.damage;
			this.range=MACHINEGUN_TURRET.range;
			this.attackSpeed=MACHINEGUN_TURRET.attackSpeed;
			this.damageType=MACHINEGUN_TURRET.damageType;
			this.upgradeLevel=MACHINEGUN_TURRET.upgradeLevel;
			this.price=MACHINEGUN_TURRET.price;
			this.kills=MACHINEGUN_TURRET.kills;
			this.requirement=MACHINEGUN_TURRET.requirement;
			this.description=MACHINEGUN_TURRET.description;
			this.isAttacking=MACHINEGUN_TURRET.isAttacking;
			this.contor=MACHINEGUN_TURRET.contor;
			break;
		
		
		case SLOW_TURRET.id:
			this.range=SLOW_TURRET.range;
			this.upgradeLevel=SLOW_TURRET.upgradeLevel;
			this.price=SLOW_TURRET.price;
			this.requirement=SLOW_TURRET.requirement;
			this.description=SLOW_TURRET.description;
			this.slow=SLOW_TURRET.slow;
			this.contor=SLOW_TURRET.contor;
			break;

		case PLASMA_TURRET.id:
			this.damage=PLASMA_TURRET.damage;
			this.range=PLASMA_TURRET.range;
			this.attackSpeed=PLASMA_TURRET.attackSpeed;
			this.damageType=PLASMA_TURRET.damageType;
			this.upgradeLevel=PLASMA_TURRET.upgradeLevel;
			this.price=PLASMA_TURRET.price;
			this.kills=PLASMA_TURRET.kills;
			this.requirement=PLASMA_TURRET.requirement;
			this.description=PLASMA_TURRET.description;
			this.isAttacking=PLASMA_TURRET.isAttacking;
			this.contor=PLASMA_TURRET.contor;
			break;

		case LASER_TURRET.id:
			this.damage=LASER_TURRET.damage;
			this.range=LASER_TURRET.range;
			this.attackSpeed=LASER_TURRET.attackSpeed;
			this.damageType=LASER_TURRET.damageType;
			this.upgradeLevel=LASER_TURRET.upgradeLevel;
			this.price=LASER_TURRET.price;
			this.kills=LASER_TURRET.kills;
			this.requirement=LASER_TURRET.requirement;
			this.description=LASER_TURRET.description;
			this.isAttacking=LASER_TURRET.isAttacking;
			this.contor=LASER_TURRET.contor;
			break;

		case DETECTOR_TURRET.id:
			this.range=DETECTOR_TURRET.range;
			this.upgradeLevel=DETECTOR_TURRET.upgradeLevel;
			this.price=DETECTOR_TURRET.price;
			this.detection=DETECTOR_TURRET.detection;
			this.requirement=DETECTOR_TURRET.requirement;
			this.description=DETECTOR_TURRET.description;
			this.contor=DETECTOR_TURRET.contor;
			break;

		default:
			console.log("Invalid turret type!");
			break;
                this.contor = 0;	
    }
}

Turret.prototype.canAttack = function() {
    
    this.contor = (this.contor +1)%(this.attackSpeed);
   
     if(this.contor == 0) {
        return true;
    }

    return false;
}

//2.25=1 sec

// Aici nu stiu inca cum vom face sa atace turnul.

function distanta(i, tureta)
{
	return(Math.sqrt( (i.x-tureta.x)*(i.x-tureta.x) + (i.y-tureta.y)*(i.y-tureta.y) ) );
}

/* Cred ca atacul va depinde de o functie de detectat cand inamicul intra in range */
function detectEnemy(tureta)
{
    for (var i = 0; i < waves.length; i++)
	{
		if ((distanta(waves[i], tureta))>tureta.range && waves[i].isSlowed == true)
		{	switch(waves[i].id) {
				case SIMPLE_MONSTER.id:
					waves[i].speed      = 1;	break;
				case SPEEDY_MONSTER.id:
					waves[i].speed      = 2.5;	break;
				case FLYING_MONSTER.id:
					waves[i].speed      = 3;	break;
				case POWERFUL_MONSTER.id:
					waves[i].speed      = 4;	break;
				case RAMSI_MONSTER.id:
					waves[i].speed  	= 2;	break;
				default:
					console.log("Invalid monster type!");	break;
			}
    }
	if(tureta.canAttack() == false) {
            return;
	}
	
    for(var i = 0; i < waves.length; i++)
	{	
		if(distanta(waves[i], tureta) <= tureta.range)
			{
            	//pot lovi monstrul
				if (tureta.damage>0 && waves[i].visible == true)
					waves[i].doDamage(tureta.damage)
				else
				{
				if(!waves[i].isAlive())
				{
					waves.splice(i, 1);
					i--;
					break;
				}
				if (tureta.slow==SLOW_TURRET.slow)
					{
						Slow(waves[i]);
					}
					
				if (tureta.detection==DETECTOR_TURRET.detection && waves[i].isVisible==false)
				{
					waves[i].isVisible==true;
				}
				}
		
	        }

        }
}

/* Aici mai modificam pentru ca imi trebuie variabila in care stocam banii, skin-urile pe care le va avea fiecare turret la fiecare nivel */
function upgrade(tureta)
{
	
	money=money-price;
	tureta.upgradeLevel++;
}
