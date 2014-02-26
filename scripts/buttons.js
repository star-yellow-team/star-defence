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
		hoverX = event.pageX - $("#hover").width() - 25;
		if (event.pageY + $("#hover").width() < screenHeight)
			hoverY = event.pageY - 5;
		else	
			hoverY = event.pageY - $("#hover").height() - 5;
		$("#hover").css("top",hoverY);
		$("#hover").css("left",hoverX);
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

// Functia de desenare turete
function drawTurret(turretNumber) {
	
	// Calculare Pozitie pe harta
	placeX = Math.round((boxX - xMin - 5) / boxSize);
	placeY = Math.round((boxY - yMin - 5) / boxSize);
	
	// In cazul RemoveTurret (verde)
	if (turretNumber == 0) {
		deleteElement(placeX, placeY, mapNumber);
	} 
	
	// Desenare turret
	else if (addElement(turretNumber, placeX, placeY, mapNumber) == true) {
    		unstick();
	        switch(turretNumber) {
                    case 11:
                        var turret = new Turret(MACHINEGUN_TURRET.id);
                        turret.x = placeX;
                        turret.y = placeY;
                        turrets.push(turret); 
                        break;
                    case 12:
                        var turret = new Turret(SLOW_TURRET.id);
                        turret.x = placeX;
                        turret.y = placeY;
                        turrets.push(turret); 
                        break;
                    case 13:
                        var turret = new Turret(PLASMA_TURRET.id);
                        turret.x = placeX;
                        turret.y = placeY;
                        turrets.push(turret);
                        break;  
                    case 14:
                        var turret = new Turret(LASER_TURRET.id);
                        turret.x = placeX;
                        turret.y = placeY;
                        turrets.push(turret);
                        break;
                    case 15:
                        var turret = new Turret(DETECTOR_TURRET.id);
                        turret.x = placeX;
                        turret.y = placeY;
                        turrets.push(turret);
                        break;

                    default:
                        console.log("Invalid turret!!"+String(turretNumber));
                        break;
                }
	}
}

$("#hover").hide();
$("#slowt").hide();
$("#reveal").hide();
$("#ability").hide();

function description(turret) {
	$("#hover").show();
	$("#description").html(turret.description);
	$("#price").html(turret.price);
	$("#title").html(turret.name);
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
	if (turret.level > curentRound) {
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