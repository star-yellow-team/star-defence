/**
* @author Ionut
* Definirea Turret-ului
* daca lipseste ceva va rog spuneti
*/

//numar maxim de tipuri de turete
var NUMBER_OF_TURRET_TYPES = 5;



//Tipuri de turete
var MACHINEGUN_TURRET = {
	id:	0,
    name:   "Machinegun turret",
	damage:	1.2,
	range:	2,
	attackSpeed:	10,
	slow:	false,
	reveal:	false,
	amount:	0,
	damageType:	"Single",
	upgradeLevel:	0,
	price:	10,
	kills:	0,
	requirement:	"None",
	description:	"Fast attacking turret",
	isAttacking:	false,
	contor:	0,
	x:	0,
	y:	0,
    sprite:         'spirte.png',
    spriteSize:    5
}

var SLOW_TURRET = {
	id:	1,
    name:   "Slow turret",
	damage:	0,
	range:	2,
	attackSpeed:	0,
	damageType:	"Area of Effect",
	upgradeLevel:	0,
	slow:	true,
	reveal:	false,
	amount:	2,
	price:	20,
	kills:	0,
	requirement:	"None",
	description:	"Slows enemies in their path",
	isAttacking:	false,
	contor:	0,
	x:	0,
	y:	0,
    sprite:         'spirte.png',
    spriteSize:    5
}
//30%.........1.42857
//40%.........1.66666
//50%.........2
//60%.........2.5
var PLASMA_TURRET = {
	id:	2,
        name:   "Plasma turret",
	damage:	2,
	range:	2,
	attackSpeed:    22,
	damageType:	"Splash",
	upgradeLevel:	0,
	reveal:	false,
	amount:	0,
	price:	35,
	kills:	0,
	requirement:	"None",
	description:	"Strong turret against swarms of small units",
	isAttacking:	false,
	contor:	0,
	x:	0,
	y:	0,
        sprite:         'spirte.png',
        spriteSize:    5
}

var LASER_TURRET = {
	id:	3,
        name:   "Laser turret",
	damage:	0.3,
	range:	2,
	attackSpeed:	1,
	damageType:	"Single",
	upgradeLevel:	0,
	slow:	false,
	reveal:	false,
	amount:	0,
	price:	50,
	kills:	0,
	requirement:	"Pass level 6",
	description:	"Fires laser beams at enemy targets",
	isAttacking:	false,
	contor:	0,
	x:	0,
	y:	0,
        sprite:         'spirte.png',
        spriteSize:    5
}

var DETECTOR_TURRET = {
	id:	4,
        name:   "Detector turret",
	damage:	0,
	range:	3,
	attackSpeed:	0,
	damageType:	"Single",
	upgradeLevel:	0,
	slow:	false,
	reveal:	true,
	amount:	0,
	price:	25,
	kills:	0,
	detection: "Yes",
	requirement:	"Pass level 8",
	description:	"Reveals invisible enemies within range",
	isAttacking:	false,
	contor:	0,
	x:	0,
	y:	0,
        sprite:         'spirte.png',
        spriteSize:    5
}

function Turret(type)
{
	this.type       = type;
        this.isSlowed   = false;
        this.frameNumber= 0;         

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
	                this.sprite     = MACHINEGUN_TURRET.sprite;
                        this.spriteSize = MACHINEGUN_TURRET.spriteSize;
            		break;
		
		
		case SLOW_TURRET.id:
			this.damage=SLOW_TURRET.damage;
			this.range=SLOW_TURRET.range;
			this.attackSpeed=SLOW_TURRET.attackSpeed;
			this.damageType=SLOW_TURRET.damageType;
			this.upgradeLevel=SLOW_TURRET.upgradeLevel;
			this.price=SLOW_TURRET.price;
			this.kills=SLOW_TURRET.kills;
			this.requirement=SLOW_TURRET.requirement;
			this.description=SLOW_TURRET.description;
			this.amount=SLOW_TURRET.amount;
			this.isAttacking=SLOW_TURRET.isAttacking;
			this.contor=SLOW_TURRET.contor;
	                this.sprite     = SLOW_TURRET.sprite;
                        this.spriteSize = SLOW_TURRET.spriteSize;	
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
                        this.sprite     = PLASMA_TURRET.sprite;
                        this.spriteSize = PLASMA_TURRET.spriteSize;
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
                        this.sprite     = LASER_TURRET.sprite;
                        this.spriteSize = LASER_TURRET.spriteSize;
			break;

		case DETECTOR_TURRET.id:
			this.damage=DETECTOR_TURRET.damage;
			this.range=DETECTOR_TURRET.range;
			this.attackSpeed=DETECTOR_TURRET.attackSpeed;
			this.damageType=DETECTOR_TURRET.damageType;
			this.upgradeLevel=DETECTOR_TURRET.upgradeLevel;
			this.price=DETECTOR_TURRET.price;
			this.kills=DETECTOR_TURRET.kills;
			this.requirement=DETECTOR_TURRET.requirement;
			this.description=DETECTOR_TURRET.description;
			this.isAttacking=DETECTOR_TURRET.isAttacking;
			this.contor=DETECTOR_TURRET.contor;
                        this.sprite     = DETECTOR_TURRET.sprite;
                        this.spriteSize = DETECTOR_TURRET.spriteSize;
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


function distanta(i, tureta)
{
	return(Math.sqrt( (i.x-tureta.x)*(i.x-tureta.x) + (i.y-tureta.y)*(i.y-tureta.y) ) );
}

/* Cred ca atacul va depinde de o functie de detectat cand inamicul intra in range */
function detectEnemy(tureta)
{
	if(tureta.canAttack() == false && tureta.damage > 0) {
            return;
	}
	
        for (var i = waves.length-1; i >= 0; i--)
		{	
		if(distanta(waves[i], tureta) <= tureta.range)
			{
            			//pot lovi monstrul
						
				if(tureta.type != SLOW_TURRET.id)
		           	waves[i].doDamage(tureta.damage);
				if(tureta.type == PLASMA_TURRET.id)
				{
					for (var j = waves.length-1; j >= 0; j--)
						if(distanta(waves[i], waves[j]) <= 0.1)
							waves[j].doDamage(tureta.damage/3);
				}
				if(tureta.type == SLOW_TURRET.id)
					waves[i].slowMonster(turretIndex, tureta);	
				if(!waves[i].isAlive())
				{
					userScore  += (waves[i].type + 5)*(waves[i].type + 5)*(waves[i].type + 5);
					$("#money-wrapper").html(String(userScore))
                                        waves.splice(i, 1);
					i--;
					break;
				}
				
					
				if (tureta.detection==DETECTOR_TURRET.detection && waves[i].isVisible==false)
				{
					waves[i].isVisible==true;
				}
				if (tureta.type != 1)
					break;
	        }
        }
}

/* Aici mai modificam pentru ca imi trebuie variabila in care stocam banii, skin-urile pe care le va avea fiecare turret la fiecare nivel */
function upgrade(tureta)
{
	switch(type)	{
		case MACHINEGUN_TURRET.id:
			switch(level)	{
				case 0:		tureta.range+=1; 				break;
				case 1:		tureta.damage+=0.3;				break;
				case 2:		tureta.range+=1;				break;
				case 3:		tureta.damage+=0.3;				break;
				case 4:		tureta.attackSpeed-=3;			break;
				default:	console.log("Cannot be upgraded any further!");	
			}
			break;
			
		case SLOW_TURRET.id:
			switch(level)	{
				case 0:		tureta.range+=1; 				break;
				case 1:		tureta.amount=1.66666;			break;
				case 2:		tureta.range+=1;				break;
				case 3:		tureta.amount=2;				break;
				case 4:		tureta.amount=2.5;				break;
				default:	console.log("Cannot be upgraded any further!");		
			}
			break;

		case PLASMA_TURRET.id:
			switch(level)	{
				case 0:		tureta.damage+=3; 			break;
				case 1:		tureta.range+=1;				break;
				case 2:		tureta.damage+=5;				break;
				case 3:		tureta.range+=1;				break;
				case 4:		tureta.attackSpeed-=7;			break;
				default:	console.log("Cannot be upgraded any further!");		
			}
			break;

		case LASER_TURRET.id:
			switch(level)	{
				case 0:		tureta.range+=1; 				break;
				case 1:		tureta.damage+=0.2;				break;
				case 2:		tureta.range+=1;				break;
				case 3:		tureta.damage+=0.5;				break;
				case 4:		tureta.damage+=1;				break;
				default:	console.log("Cannot be upgraded any further!");		
			}
			break;

		case DETECTOR_TURRET.id:
			switch(level)	{
				case 0:		tureta.range+=1; 				break;
				case 1:		tureta.range+=1;				break;
				case 2:		tureta.range+=1;				break;
				case 3:		tureta.range+=1;				break;
				case 4:		tureta.range+=2;				break;
				default:	console.log("Cannot be upgraded any further!");		
			}
			break;

		default:
			console.log("Invalid turret type!");	
    }
	userScore=userScore-price;
	tureta.upgradeLevel++;
}
