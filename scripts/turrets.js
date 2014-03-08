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
    attackSpeed:    10,
    slow:   false,
    reveal: false,
    amount:	0,
    damageType:	"Single Monster",
    upgradeLevel:   0,
    upgradePrice:   30,
    price:	10,
    kills:	0,
    requirement:    "None",
    level: 0,
    description:    "Fast attacking turret",
    isAttacking:    false,
    contor:	0,
    x:	0,
    y:	0,
    level: 0,
    sprite: images[0],
    spriteSize:    30,
    rate: 2
}

var SLOW_TURRET = {
    id:	1,
    name:   "Slow turret",
    damage:	0,
    range:	2,
    attackSpeed:	0,
    damageType:	"Entire Area",
    upgradeLevel:	0,
    upgradePrice:	30,
    slow:	true,
    reveal:	false,
    amount:	1.42857,
    price:	20,
    kills:	0,
    level: 0,
    requirement:	"None",
    level: 0,
    description:	"Slows enemies in their path",
    isAttacking:	false,
    contor:	0,
    x:	0,
    y:	0,
    sprite: images[0],
    spriteSize:    30,
    rate: 1
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
    damageType:	"Splash Damage",
    upgradeLevel:	0,
    upgradePrice:	40,
    reveal:	false,
    amount:	0,
    price:	35,
    kills:	0,
    level: 0,
    requirement:	"None",
    level: 0,
    description:	"Strong turret against swarms of small units",
    isAttacking:	false,
    contor:	0,
    x:	0,
    y:	0,
    sprite:  images[0],
    spriteSize:    30,
    rate: 1
}

var LASER_TURRET = {
        id:	3,
        name:   "Laser turret",
        damage:	0.3,
        range:	2,
        attackSpeed:	1,
        damageType:	"Single Monster",
        upgradeLevel:	0,
        upgradePrice:	45,
        slow:	false,
        reveal:	false,
        amount:	0,
        price:	50,
        kills:	0,
        requirement:	"Pass level 6",
        level: 6,
        description:	"Fires laser beams at enemy targets",
        isAttacking:	false,
        contor:	0,
        x:	0,
        y:	0,
        sprite: images[1],
        spriteSize:    30,
        rate: 2
}

var DETECTOR_TURRET = {
    id:	4,
    name:   "Detector turret",
    damage:	0,
    range:	3,
    attackSpeed:	0,
    damageType:	"Single Monster",
    upgradeLevel:	0,
    upgradePrice:	30,
    slow:	false,
    reveal:	true,
    amount:	0,
    price:	25,
    kills:	0,
    detection: "Yes",
    requirement:	"Pass level 8",
    level: 8,
    description:	"Reveals invisible enemies within range",
    isAttacking:	false,
    contor:	0,
    x:	0,
    y:	0,
    sprite:         images[0],
    spriteSize:    30,
    rate: 1
}

function Turret(type)
{
	this.type       = type;
        this.isSlowed   = false;
        this.frameNumber= 0;         
        this.rateNumber = 0;

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
			this.level=MACHINEGUN_TURRET.level;
	                this.sprite     = MACHINEGUN_TURRET.sprite;
                        this.spriteSize = MACHINEGUN_TURRET.spriteSize;
			this.level=MACHINEGUN_TURRET.level;
			this.upgradePrice=MACHINEGUN_TURRET.upgradePrice;
			this.name=MACHINEGUN_TURRET.name;
			this.slow=MACHINEGUN_TURRET.slow;
			this.reveal=MACHINEGUN_TURRET.reveal;
                        this.rate = MACHINEGUN_TURRET.rate;
                        break;
		
		
		case SLOW_TURRET.id:
			this.level=SLOW_TURRET.level;
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
			this.upgradePrice=SLOW_TURRET.upgradePrice;
			this.name=SLOW_TURRET.name;
			this.slow=SLOW_TURRET.slow;
			this.reveal=SLOW_TURRET.reveal;
                        this.rate = SLOW_TURRET.rate;
                        break;


		case PLASMA_TURRET.id:
			this.level=PLASMA_TURRET.level;
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
			this.upgradePrice=PLASMA_TURRET.upgradePrice;
			this.name=PLASMA_TURRET.name;
			this.slow=PLASMA_TURRET.slow;
			this.reveal=PLASMA_TURRET.reveal;
			this.rate = PLASMA_TURRET.rate;
                        break;

		case LASER_TURRET.id:
			this.level=LASER_TURRET.level;
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
			this.upgradePrice=LASER_TURRET.upgradePrice;
			this.name=LASER_TURRET.name;
			this.slow=LASER_TURRET.slow;
			this.reveal=LASER_TURRET.reveal;
			this.rate = LASER_TURRET.rate;
                        break;

		case DETECTOR_TURRET.id:
			this.level=DETECTOR_TURRET.level;
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
			this.upgradePrice=DETECTOR_TURRET.upgradePrice;
			this.name=DETECTOR_TURRET.name;
			this.slow=DETECTOR_TURRET.slow;
			this.reveal=DETECTOR_TURRET.reveal;
                        this.rate = DETECTOR_TURRET.rate;
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

function checkTurret (tureta)
{	
	var ok=true;
	for (var i = waves.length-1; i >= 0; i--)
		{	if(distanta(waves[i], tureta) <= tureta.range)
				ok=false;
		}
	if (ok==true)
		return false;
	if (ok==false)
		return true;
}

function distanta(i, tureta)
{
	return(Math.sqrt( (i.x-tureta.x)*(i.x-tureta.x) + (i.y-tureta.y)*(i.y-tureta.y) ) );
}

/* Cred ca atacul va depinde de o functie de detectat cand inamicul intra in range */
function detectEnemy(tureta)
{
	var ok=true;
	if(tureta.canAttack() == false && tureta.damage > 0) {
            return;
	}
        for (var i = 0; i < waves.length; i++)
		{	
		if(distanta(waves[i], tureta) <= tureta.range)
			{
            			//pot lovi monstrul
				ok = false;	
				if(tureta.type != SLOW_TURRET.id)
				{
		           	waves[i].doDamage(tureta.damage);
					tureta.isAttacking=true;
					ok=false;
				}
				switch(tureta.type)	{
					case 0:		audio2.play(); 				break;
					case 2:		audio1.play();				break;
					case 3:		audio3.play();				break;
					default:	console.log("Invalid turret type!");	
				}
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
					if(userScore >= 200 && showMoneyLimitError === true) {
						//$.notify("You`re too greedy and you will receive no more money until you cool down", "error")	
						//showMoneyLimitError = false;
					} else {
						userScore  += (waves[i].type + 3)*(waves[i].type + 3);
						//showMoneyLimitError = true;
					}
					
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
	if (ok==true)
		tureta.isAttacking=false;
}

/* Aici mai modificam pentru ca imi trebuie variabila in care stocam banii, skin-urile pe care le va avea fiecare turret la fiecare nivel */
function Upgrade(x, y)
{	 for (i in turrets)
	{
		if (x==turrets[i].x && y==turrets[i].y)
	{
	switch(turrets[i].type)	{
		case MACHINEGUN_TURRET.id:
		{
			if (userScore-turrets[i].upgradePrice>=0)
			{
				switch(turrets[i].upgradeLevel)	{
					case 0:		turrets[i].range+=1; 			userScore=userScore-turrets[i].upgradePrice;		break;
					case 1:		turrets[i].damage+=0.3;			userScore=userScore-turrets[i].upgradePrice;		break;
					case 2:		turrets[i].range+=1;			userScore=userScore-turrets[i].upgradePrice;		break;
					case 3:		turrets[i].damage+=0.3;			userScore=userScore-turrets[i].upgradePrice;		break;
					case 4:		turrets[i].attackSpeed-=3;		userScore=userScore-turrets[i].upgradePrice;		break;
					default:	$("#highlight").show();
								$("#highlight").notify("Maximum Turret Tech Level Reached","error",{ position:"bottom left" });
								$("#highlight").hide();
				}
				break;
			}
			else {
				$("#highlight").show();
				$("#highlight").notify("You do not have enough money","error",{ position:"bottom left" });
				$("#highlight").hide();
			}
		}
		case SLOW_TURRET.id:
		{
			if (userScore-turrets[i].upgradePrice>=0)
			{
				switch(turrets[i].upgradeLevel)	{
					case 0:		turrets[i].range+=1; 			userScore=userScore-turrets[i].upgradePrice;		break;
					case 1:		turrets[i].amount=1.66666;		userScore=userScore-turrets[i].upgradePrice;		break;
					case 2:		turrets[i].range+=1;			userScore=userScore-turrets[i].upgradePrice;		break;
					case 3:		turrets[i].amount=2;			userScore=userScore-turrets[i].upgradePrice;		break;
					case 4:		turrets[i].amount=2.5;			userScore=userScore-turrets[i].upgradePrice;		break;
					default:	$("#highlight").show();
								$("#highlight").notify("Maximum Turret Tech Level Reached","error",{ position:"bottom left" });
								$("#highlight").hide();}
				break;
			}
			else {
				$("#highlight").show();
				$("#highlight").notify("You do not have enough money","error",{ position:"bottom left" });
				$("#highlight").hide();
			}
		}	
		case PLASMA_TURRET.id:
		{
			if (userScore-turrets[i].upgradePrice>=0)
			{
				switch(turrets[i].upgradeLevel)	{
					case 0:		turrets[i].damage+=3; 			userScore=userScore-turrets[i].upgradePrice; 		break;
					case 1:		turrets[i].range+=1;			userScore=userScore-turrets[i].upgradePrice;		break;
					case 2:		turrets[i].damage+=5;			userScore=userScore-turrets[i].upgradePrice;		break;
					case 3:		turrets[i].range+=1;			userScore=userScore-turrets[i].upgradePrice;		break;
					case 4:		turrets[i].attackSpeed-=7;		userScore=userScore-turrets[i].upgradePrice;		break;
					default:	$("#highlight").show();
								$("#highlight").notify("Maximum Turret Tech Level Reached","error",{ position:"bottom left" });
								$("#highlight").hide();}
				break;
			}
			else {
				$("#highlight").show();
				$("#highlight").notify("You do not have enough money","error",{ position:"bottom left" });
				$("#highlight").hide();
			}
		}
		case LASER_TURRET.id:
		{
			if (userScore-turrets[i].upgradePrice>=0)
			{
				switch(turrets[i].upgradeLevel)	{
					case 0:		turrets[i].range+=1; 			userScore=userScore-turrets[i].upgradePrice;		break;
					case 1:		turrets[i].damage+=0.2;			userScore=userScore-turrets[i].upgradePrice;		break;
					case 2:		turrets[i].range+=1;			userScore=userScore-turrets[i].upgradePrice;		break;
					case 3:		turrets[i].damage+=0.5;			userScore=userScore-turrets[i].upgradePrice;		break;
					case 4:		turrets[i].damage+=1;			userScore=userScore-turrets[i].upgradePrice;		break;
					default:	$("#highlight").show();
								$("#highlight").notify("Maximum Turret Tech Level Reached","error",{ position:"bottom left" });
								$("#highlight").hide();}
				break;
			}
			else {
				$("#highlight").show();
				$("#highlight").notify("You do not have enough money","error",{ position:"bottom left" });
				$("#highlight").hide();
			}
		}
		case DETECTOR_TURRET.id:
		{
			if (userScore-turrets[i].upgradePrice>=0)
			{
				switch(turrets[i].upgradeLevel)	{
					case 0:		turrets[i].range+=1; 			userScore=userScore-turrets[i].upgradePrice;		break;
					case 1:		turrets[i].range+=1;			userScore=userScore-turrets[i].upgradePrice;		break;
					case 2:		turrets[i].range+=1;			userScore=userScore-turrets[i].upgradePrice;		break;
					case 3:		turrets[i].range+=1;			userScore=userScore-turrets[i].upgradePrice;		break;
					case 4:		turrets[i].range+=2;			userScore=userScore-turrets[i].upgradePrice;		break;
					default:	$("#highlight").show();
								$("#highlight").notify("Maximum Turret Tech Level Reached","error",{ position:"bottom left" });
								$("#highlight").hide();}
				break;
			}
			else {
				$("#highlight").show();
				$("#highlight").notify("You do not have enough money","error",{ position:"bottom left" });
				$("#highlight").hide();
			}
		}
		default:
			{
			console.log("Invalid turret type!");	
			return -1;
			}
    }
	turrets[i].upgradeLevel++;
	break;
	}
	}
	return 1;
}

function Verify(x, y)
{	 
	for (i in turrets)
	{
		if (x==turrets[i].x && y==turrets[i].y)
	{
	if (turrets[i].upgradeLevel < 5)
		var check = new Turret(turrets[i].type);
	else
		check = -1;
	if (check != -1)
	switch(turrets[i].type)	{
		case MACHINEGUN_TURRET.id:
				switch(turrets[i].upgradeLevel)	{
					case 0:		check.damage=1.2;	check.range=3;	check.attackSpeed=10;	check.upgradeLevel=1; 		break;
					case 1:		check.damage=1.5;	check.range=3;	check.attackSpeed=10;	check.upgradeLevel=2;		break;
					case 2:		check.damage=1.5;	check.range=4;	check.attackSpeed=10;	check.upgradeLevel=3;		break;
					case 3:		check.damage=1.8;	check.range=4;	check.attackSpeed=10;	check.upgradeLevel=4;		break;
					case 4:		check.damage=1.8;	check.range=4;	check.attackSpeed=7;	check.upgradeLevel=5;		break;
					default:	return 0;	
				}
				break;
		case SLOW_TURRET.id:
				switch(turrets[i].upgradeLevel)	{
					case 0:		check.amount=1.42857;	check.range=3;	check.upgradeLevel=1;		break;
					case 1:		check.amount=1.66666;	check.range=3;	check.upgradeLevel=2;		break;
					case 2:		check.amount=1.66666;	check.range=4;	check.upgradeLevel=3;		break;
					case 3:		check.amount=2;		check.range=4;	check.upgradeLevel=4;		break;
					case 4:		check.amount=2.5;	check.range=4;	check.upgradeLevel=5;		break;
					default:	return 0;		
				}
				break;	
		case PLASMA_TURRET.id:
				switch(turrets[i].upgradeLevel)	{
					case 0:		check.damage=5;	check.range=2;	check.attackSpeed=22;	check.upgradeLevel=1; 		break;
					case 1:		check.damage=5;	check.range=3;	check.attackSpeed=22;	check.upgradeLevel=2;		break;
					case 2:		check.damage=10;	check.range=3;	check.attackSpeed=22;	check.upgradeLevel=3;		break;
					case 3:		check.damage=10;	check.range=4;	check.attackSpeed=22;	check.upgradeLevel=4;		break;
					case 4:		check.damage=10;	check.range=4;	check.attackSpeed=15;	check.upgradeLevel=5;		break;
					default:	return 0;		
				}
				break;
		case LASER_TURRET.id:
				switch(turrets[i].upgradeLevel)	{
					case 0:		check.damage=0.3;	check.range=3;	check.attackSpeed=1;	check.upgradeLevel=1;		break;
					case 1:		check.damage=0.5;	check.range=3;	check.attackSpeed=1;	check.upgradeLevel=2;		break;
					case 2:		check.damage=0.5;	check.range=4;	check.attackSpeed=1;	check.upgradeLevel=3;		break;
					case 3:		check.damage=1.0;	check.range=4;	check.attackSpeed=1;	check.upgradeLevel=4;		break;
					case 4:		check.damage=2.0;	check.range=4;	check.attackSpeed=1;	check.upgradeLevel=5;		break;
					default:	return 0;		
				}
				break;
		case DETECTOR_TURRET.id:
				switch(turrets[i].upgradeLevel)	{
					case 0:		check.range=3;	check.upgradeLevel=1;		break;
					case 1:		check.range=4;	check.upgradeLevel=2;		break;
					case 2:		check.range=5;	check.upgradeLevel=3;		break;
					case 3:		check.range=6;	check.upgradeLevel=4;		break;
					case 4:		check.range=7;	check.upgradeLevel=5;		break;
					default:	return 0;		
				}
				break;
		default:
			{
			console.log("Invalid turret type!");	
			}
    }
	break;
	}
	}
	return check;
}


function restartTurrets() {
	for (i in turrets)
		turrets.splice(i);
}
