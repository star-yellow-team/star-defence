/**
 * @author Adrian
 * Animeaza meniul si se ocupa de ghostImage-ul turetei pe care o plasez
 * lungimea si inaltimea documentului.
 */
var blueHover = 0;
var boxX;
var boxY;
var hover;

// Ascundem ghostImageul si ne ocupam de animatia meniului
$(document).ready(function() {
	$("#ui-menu").hover(function(){
  		$("#ui-menu").addClass("slideUp");
  		$("#ui-menu").removeClass("slideDown");
  	},
  	function(){
  		$("#ui-menu").removeClass("slideUp");
  		$("#ui-menu").addClass("slideDown");
	});
})

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

//Functia de desenare turete
function drawTurret(turretNumber) {
	if (turretNumber == 0) {
		deleteElement(Math.round((boxX - xMin) / boxSize), Math.round(boxY / boxSize), mapNumber);
	} else if (addElement(turretNumber, Math.round((boxX - xMin) / boxSize), Math.round(boxY / boxSize), mapNumber) == true) {

    		unstick();
	        switch(turretNumber) {
                    case 11:
                        var turret = new Turret(MACHINEGUN_TURRET.id);
                        turret.x = Math.round((boxX-xMin) / boxSize);
                        turret.y = Math.round(boxY/boxSize);
                        turrets.push(turret); 
                        break;
                    case 12:
                        var turret = new Turret(SLOW_TURRET.id);
                        turret.x = Math.round((boxX-xMin) / boxSize);
                        turret.y = Math.round(boxY/boxSize);
                        turrets.push(turret); 
                        break;
                    case 13:
                        var turret = new Turret(PLASMA_TURRET.id);
                        turret.x = Math.round((boxX-xMin) / boxSize);
                        turret.y = Math.round(boxY/boxSize);
                        turrets.push(turret);
                        break;  
                    case 14:
                        var turret = new Turret(LASER_TURRET.id);
                        turret.x = Math.round((boxX-xMin) / boxSize);
                        turret.y = Math.round(boxY/boxSize);
                        turrets.push(turret);
                        break;
                    case 15:
                        var turret = new Turret(DETECTOR_TURRET.id);
                        turret.x = Math.round((boxX-xMin) / boxSize);
                        turret.y = Math.round(boxY/boxSize);
                        turrets.push(turret);
                        break;

                    default:
                        console.log("Invalid turret!!"+String(turretNumber));
                        break;
                }
	}
}
