/**
 * @author Adrian
 * Animeaza meniul si se ocupa de ghostImage-ul turetei pe care o plasez
 * lungimea si inaltimea documentului.
 */
var blueHover = 0;
var boxX;
var boxY;
var hover;
var hoverY;
var hoverX;

var currentMousePos = { x: -1, y: -1 };

// Aducem ghostImageul albastru la mouse, stickuit pe grid
$(document).mousemove(function(event) {
		$(hover).show();
		if (event.pageX < xMin) {
			boxX = xMin;
		} else if (event.pageX >= xMax) {
			boxX = xMax;
		} else {
			boxX = xMin + Math.round((event.pageX - xMin - boxSize / 2) / boxSize) * boxSize;
		}
		if (event.pageY < yMin) {
			boxY = yMin;
		} else if (event.pageY >= yMax) {
			boxY = yMax;
		} else {
			boxY = yMin + Math.round((event.pageY - yMin - boxSize / 2) / boxSize) * boxSize;
		}
        $(hover).css("left",boxX);
       	$(hover).css("top",boxY);
		if (event.pageY + $("#hover").width() < screenHeight)
			hoverY = event.pageY - 5;
		else	
			hoverY = event.pageY - $("#hover").height() - 5;
		if (event.pageX + $("#hover").width() < screenWidth)
			hoverX = event.pageX + 5;
		else	
			hoverX = event.pageX - $("#hover").width() - 25;
		$("#hover").css("top",hoverY);
		$("#hover").css("left",hoverX);
		
	
		// Calculare Pozitie pe harta
		placeX = Math.round((boxX - xMin - 5) / boxSize);
		placeY = Math.round((boxY - yMin - 5) / boxSize);
		
		if (getElement(placeX, placeY) != 0 && getElement(placeX, placeY) != 1 && getElement(placeX, placeY) != 2 && getElement(placeX, placeY) != 3) {
			$("#highlight").show();
			$("#highlight").css("top",boxY);
			$("#contextMenu").css("top",boxY);
			$("#highlight").css("left",boxX);
			$("#contextMenu").css("left",boxX+boxSize);
		} else
			$("#highlight").hide();
});

// Determina care ghost image se ataseaza cursorului
function stick(x) {
	unstick();
	switch (x) {
		case 11:
			hover = "#machinegun";
			break;
		case 12:
			hover = "#slow";
			break;
		case 13:
			hover = "#laser";
			break;
		case 14:
			hover = "#plasma";
			break;
		case 15:
			hover = "#detector";
			break;
		case 0:
			hover = "#remove";
			break;
	}
}

function unstick() {
	$(hover).hide();
	hover = "";
}
  
function removeTurret() {
	plY = Math.round((parseInt($("#highlight").css("top")) - yMin) / boxSize);
	plX = Math.round((parseInt($("#highlight").css("left")) - xMin) / boxSize);
	deleteElement(plX, plY, mapNumber);
	for (i in turrets)
		if(turrets[i].x == plX && turrets[i].y == plY) {
			for (j = waves.length-1; j >= 0; j--)
				waves[j].redoMonster();
			turrets.splice(i);
		}
}

// Functia de desenare turete
function drawTurret(turretNumber) {
	// Desenare turret
	
	        switch(turretNumber) {
                    case 11:
                        var turret = new Turret(MACHINEGUN_TURRET.id);
						if(userScore - turret.price >= 0 && userLevel >= turret.level) {
							if (addElement(turretNumber, placeX, placeY, mapNumber) == true) {
    							unstick();
    							machineGuns_built ++; //StoryTelling
								turret.x = placeX;
                        		turret.y = placeY;
                        		turrets.push(turret);
								console.log("pret: " + turret.price);
								userScore -= turret.price; 
								$("#money-wrapper").html(String(userScore))
							}
						} else if (userScore - turret.price < 0)
							$(".ghostImage").notify("You do not have enough money","error");
						else
							$(".ghostImage").notify("You are not experienced enough","error");
                        break;
                    case 12:
                        var turret = new Turret(SLOW_TURRET.id);
						if(userScore - turret.price >= 0 && userLevel >= turret.level)
	                        {
							if (addElement(turretNumber, placeX, placeY, mapNumber) == true) {
    							unstick();
								turret.x = placeX;
    	                    	turret.y = placeY;
        	                	turrets.push(turret);
								userScore -= turret.price; 
								$("#money-wrapper").html(String(userScore))
							}
						} else if (userScore - turret.price < 0)
							$(".ghostImage").notify("You do not have enough money","error");
						else
							$(".ghostImage").notify("You are not experienced enough","error");
                        break;
                    case 13:
                        var turret = new Turret(LASER_TURRET.id);
						if(userScore - turret.price >= 0 && userLevel >= turret.level)
                        {
							if (addElement(turretNumber, placeX, placeY, mapNumber) == true) {
    							unstick();
							turret.x = placeX;
                        	turret.y = placeY;
                        	turrets.push(turret);
							userScore -= turret.price;
							$("#money-wrapper").html(String(userScore))
							}
						} else if (userScore - turret.price < 0)
							$(".ghostImage").notify("You do not have enough money","error");
						else
							$(".ghostImage").notify("You are not experienced enough","error");
                        break;  
                    case 14:
                        var turret = new Turret(PLASMA_TURRET.id);
						if(userScore - turret.price >= 0 && userLevel >= turret.level)
                        {
							if (addElement(turretNumber, placeX, placeY, mapNumber) == true) {
    							unstick();
							turret.x = placeX;
                        	turret.y = placeY;
                        	turrets.push(turret);
							userScore -= turret.price;
							$("#money-wrapper").html(String(userScore))
							}
						} else if (userScore - turret.price < 0)
							$(".ghostImage").notify("You do not have enough money","error");
						else
							$(".ghostImage").notify("You are not experienced enough","error");
                        break;
                    case 15:
                        var turret = new Turret(DETECTOR_TURRET.id);
						if(userScore - turret.price >= 0 && userLevel >= turret.level)
                        {
							if (addElement(turretNumber, placeX, placeY, mapNumber) == true) {
    							unstick();
							turret.x = placeX;
                        	turret.y = placeY;
                        	turrets.push(turret);
							userScore -= turret.price;
							$("#money-wrapper").html(String(userScore))
							}
						} else if (userScore - turret.price < 0)
							$(".ghostImage").notify("You do not have enough money","error");
						else
							$(".ghostImage").notify("You are not experienced enough","error");
                        break;

                    default:
                        console.log("Invalid turret!!"+String(turretNumber));
                        break;
                }
	
}

$("#hover").hide();
$("#slowt").hide();
$("#reveal").hide();
$("#ability").hide();

function description(turret) {
	$("#hover").show();
	$("#hover").children("p").show();
	$("#hover").children("hr").show();
	$("#title").html(turret.name);
	$("#description").html(turret.description);
	$("#price").html(turret.price);
	if (turret.slow)
		$("#slowt").show();
	else
		$("#slowt").hide();
	if (turret.reveal)
		$("#reveal").show();
	else
		$("#reveal").hide();
	$("#damage").html(turret.damage);
	$("#damageType").html(turret.damageType);
	$("#speed").html(turret.attackSpeed);
	$("#requirement").html(turret.requirement);
	if (turret.level > userLevel) {
		$("#requirement").css("color","red");
		$("#requirement").css("font-weight","bold");
	} else {
		$("#requirement").css("color","white");
		$("#requirement").css("font-weight","normal");
	}
	if (turret.slow || turret.reveal)
 		$("#ability").show();
	else
	    $("#ability").hide();
}

function hideHover() {
	$("#hover").hide();
}

function removeDescription(turret) {
	$("#hover").show();
	$("#title").html("Remove Turret");
	$("#hover").children("p").hide();
	$("#hover").children("hr").hide();
	$("#description").show();
	$("#description").html("Remove an existing turret. You get half the money back!");
}

var contextm = 0;
$("#contextMenu").css("width","0");

function cmenu() {
	if (contextm == 0) {
		$('#contextMenu').animate({ "min-width": 2 * boxSize + 10} , 200);
		contextm = 1;
	} else {
		$('#contextMenu').animate({ "min-width": 0} , 200);
		contextm = 0;
	}
}

function rmenu() {
	$('#contextMenu').animate({ "min-width": 0} , 200);
	contextm = 0;
}
