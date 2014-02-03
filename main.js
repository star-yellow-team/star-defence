// declarare variabile
var maps = new Array();
var map;
var auxMap = [];


//initializez harta cu pozitii libere pentru a fi creeata
function initMap()
{
	for(var i=0; i < 10; i++) {
		auxMap[i] = [];
		for(var j=0; j < 10; j++) {
			auxMap[i][j] = 0;
		}
	}
}

//prima harta predefinita
auxMap =[  [0,0,0,0,0,0,0,0,0,0],
		   [2,1,1,1,0,0,0,0,0,0],
		   [0,0,0,1,0,1,1,1,0,0],
		   [0,0,0,1,0,1,0,1,0,0],
		   [0,0,0,1,1,1,0,1,0,0],			   
		   [0,0,0,0,0,0,0,1,0,0],			   
		   [0,0,0,0,0,0,0,1,1,3],			   
		   [0,0,0,0,0,0,0,0,0,0],			   
		   [0,0,0,0,0,0,0,0,0,0],			   
		   [0,0,0,0,0,0,0,0,0,0],			   
		 ];
		 
initMap();
map = Map(1,0, 6,9,auxMap);
maps.push(map);

//restul
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var img = new Image();
if(map.matrix[1][0] == 2)
{
	img.src = '1.jpg';
	context.drawImage(img,0,0);
}

