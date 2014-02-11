/**
* @author Ionut
* Definirea Turret-ului
* daca lipseste ceva va rog spuneti
*/

//functia sleep
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

var turrets = [MACHINEGUN_TURRET, SLOW_TURRET, PLASMA_TURRET, LASER_TURRET, DETECTOR_TURRET]
//numar maxim de tipuri de turete
var NUMBER_OF_TURRET_TYPES = 5;


//Tipuri de turete
var MACHINEGUN_TURRET = {
	id:	0,
	damage:	6,
	range:	5,
	attackSpeed:	0.8,
	damageType:	"Single",
	upgradeLevel:	0,
	price:	10,
	kills:	0,
	requirement:	"None",
	description:	"Fast attacking turret",
	isAttacking:	0
}

var SLOW_TURRET = {
	id:	1,
	range:	5,
	upgradeLevel:	0,
	price:	20,
	requirement:	"None",
	description:	"Slows enemies in their path",
	slow:	"Yes",
	isAttacking:	0
}

var PLASMA_TURRET = {
	id:	2,
	damage:	20,
	range:	6,
	attackSpeed:	1.5,
	damageType:	"Splash",
	upgradeLevel:	0,
	price:	40,
	kills:	0,
	requirement:	"None",
	description:	"Strong turret against swarms of small units",
	isAttacking:	0
}

var LASER_TURRET = {
	id:	3,
	damage:	2,
	range:	5,
	attackSpeed:	0.2,
	damageType:	"Single",
	upgradeLevel:	0,
	price:	50,
	kills:	0,
	requirement:	"Pass level 6",
	description:	"Fires laser beams at enemy targets",
	isAttacking:	0
}

var DETECTOR_TURRET = {
	id:	4,
	range:	7,
	upgradeLevel:	0,
	price:	20,
	detection: "Yes",
	requirement:	"Pass level 8",
	description:	"Reveals invisible enemies within range",
	isAttacking:	0
}

function Turret(type)
{
	this.type=type;
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
			break;
		
		
		case SLOW_TURRET.id:
			this.range=SLOW_TURRET.range;
			this.upgradeLevel=SLOW_TURRET.upgradeLevel;
			this.price=SLOW_TURRET.price;
			this.requirement=SLOW_TURRET.requirement;
			this.description=SLOW_TURRET.description;
			this.slow=SLOW_TURRET.slow;
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
			break;

		case DETECTOR_TURRET.id:
			this.range=DETECTOR_TURRET.range;
			this.upgradeLevel=DETECTOR_TURRET.upgradeLevel;
			this.price=DETECTOR_TURRET.price;
			this.detection=DETECTOR_TURRET.detection;
			this.requirement=DETECTOR_TURRET.requirement;
			this.description=DETECTOR_TURRET.description;
			break;

		default:
			console.log("Invalid turret type!");
			break;
	}
}
// Aici nu stiu inca cum vom face sa atace turnul.
function attack(i, tureta)
{
	waves[i].health -= tureta.damage;	
}

function distanta(i, tureta)
{
	return(Math.sqrt( (i.x-tureta.x)*(i.x-tureta.x) + (i.y-tureta.y)*(i.y-tureta.y) ) );
}

/* Cred ca atacul va depinde de o functie de detectat cand inamicul intra in range */
function detect_enemy(tureta)
{
	for(var i = 0; i < waves.length; i++)
	{	while(distanta(waves[i], tureta) <= tureta.range)
			{
				//pot lovi monstrul
				tureta.isAttacking=1;
				if (waves[i].protoype.doDamage(tureta.damage)==false);
				{
					tureta.isAttacking=0;
					break;
				}
				if (tureta.slow==SLOW_TURRET.slow)
					waves[i].speed=waves[i].speed/2;
				if (tureta.detection==DETECTOR_TURRET.detection)
					waves[i].isVisible==1;
				sleep(tureta.attackSpeed*1000);
			}
		waves[i].speed=waves[i].speed*2;
		tureta.isAttacking=0;
		waves[i].isVisible==0;
	}
}

/* Aici mai modificam pentru ca imi trebuie variabila in care stocam banii, skin-urile pe care le va avea fiecare turret la fiecare nivel */
function upgrade(tureta)
{
	
	money=money-price;
	upgradeLevel++;
}
