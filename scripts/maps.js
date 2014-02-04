/*
	FUNCTIA drawMap() A FOST FACUTA PROVIZORIU PENTRU A TESTA DACA AU FOST MEMORATE CORECT HARTILE
	
	am renuntat la scriptul maps.js deoarece nu functiona vaectorul de harti
	acum am facut o matrice cu 3 dimensiuni care are urmatoarea semnificatie: matrix[linie harta][coloana harta][numarul hartii dorite]
	
	functiile addElement() si deleteElement() returneaza false daca este depasita limita hartii altfel returneaza true
	functia getElement() intoarce false daca este depasita limita hartii sau valuarea elementului de pe pozitia ceruta
	
	pentru apelurile functiilor:
		addElement(element, x, y, harta): x = linie harta, y = coloana harta, harta = numarul hartii pe care se va adauga un element, element = numar adaugat.
		deleteElement(x,y,harta):  x = linie harta, y = coloana harta, harta = numarul hartii din care se va sterge elementul.
		getElement( x, y, harta): returneaza elementul de pe pozitia x,y din harta.
	
	semnificatie valori matrix[][][]:
		0 = spatiu liber
		1 = traseu monstruleti
		2 = spawn 
		3 = base
		10 - 19 = turnuri
		
	vectorii Pointsx si Pointsy retin linia si coloana pe care se afla un punct cu o anumita valuare
		EX: pot fi folositi pentru a afla unde se afla toate punctele de spawn din harta 0 astfel: searchPoints(0, 2);
			coordonatele se gasesc in cei 2 vectori
*/

// dimensiunile matrice
var MAX_X  = 20;
var MAX_Y  = 20;

var matrix = [];
var nrMaps = 0;
var auxMap = [];
var Pointsx = new Array();
var Pointsy = new Array();


//initializarea mitricelor matrix si auxMap
for(var i=0; i < 20; i++) {
		auxMap[i] = [];
		for(var j=0; j < 5; j++) {
			auxMap[i][j] = 0;
		}
	}

for(var i = 0; i < 20; i++)
	{
		matrix[i] = [];
		for(var j = 0; j < 20; j++)
			{
				matrix[i][j] = [];
				for(var k = 0; k < 5; k++)
					matrix[i][j][k] = 0;
			}
	}

function addMaps()
{
	//adauga o harta in 'vectorul de harit' matrix
	for(var i = 0; i < 20; i++)
		for(var j = 0; j < 20; j++)
			{
				matrix[i][j][nrMaps] = auxMap[i][j];
			}
	nrMaps++;
}

//adaugarea hartilor predefinite in matrix
auxMap =[ 
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0 ] ,
			   [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] , 
			];
addMaps();

auxMap =[ 
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] , 
			];
addMaps();

auxMap =[ 
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0 ] ,
			   [ 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 3, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,  
			];
addMaps();

function addElement(element, x,y, harta)
{
	if(x < 0 || x >= 20)
		return false;
	if(y < 0 || y >= 20)
		return false;
	matrix[x][y][harta] = element;
	return true;
}

function deleteElement(x, y, harta)
{
	if(x < 0 || x >= 20)
		return false;
	if(y < 0 || y >= 20)
		return false;
	matrix[x][y][harta] = 0;
	return true;
}

function getElement(x, y, harta)
{
	if(x < 0 || x >= 20)
		return false;
	if(y < 0 || y >= 20)
		return false;
	return matrix[x][y][harta];
}

function deletePoints(ok)
{
	if(ok == true) 
	{
		Pointsx.length = 0;
		Pointsy.length = 0;
	}
}

function searchPoints(harta, element)
{
	deletePoints(true);
	for( var i = 0; i < 20; i++)
		for( var j = 0; j < 20; j++)
			if( matrix[i][j][harta] == element )
			{
				Pointsx.push(i);
				Pointsy.push(j);
			}
	alert(Pointsx.length);
}

//deseneaza o harta 
function drawMap(x)
{
	var i,j;
	var canvas = document.getElementById('game');
	var context = canvas.getContext('2d');
	var rectWidth = 40;
	var rectHeight = 30;
	for(i = 0; i < 20; i++)
		for(j = 0; j < 20; j++)
			{
				if(matrix[i][j][x]== 1)
				{
					context.beginPath();
					context.rect(i * rectWidth, j * rectHeight, 40, 30);
					context.fillStyle = 'blue';
					context.fill();
				}
				
				if(matrix[i][j][x] == 0)
				{
					context.beginPath();
					context.rect(i * rectWidth, j * rectHeight, 40, 30);
					context.fillStyle = 'red';
					context.fill();
				}
					
			}
}
