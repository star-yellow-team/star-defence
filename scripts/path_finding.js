/*
DE CITIT: MERGE DOAR PENTRU DRUMURI SIMPLE, fara bifurcatii.

Functia findPath() trebuie apelata pentru a scoate matricea path_matrix[][] la respectiva harta, acum mapNumber.

IN LEGATURA CU PROBLEMA NOASTRA DE X si Y.
Avand in vedere ca atunci cand se apeleaza addMaps, functia majora care pune hartile, matricea 'matrix' este conceputa ca [i][j] si nu [j][i], automat findPath va verifica matrix[i][j] si va scoate o matrice path_matrix tot de forma [i][j]. Simt nevoia sa mentionez asta pentru ca m-am incurcat la inceput. 

Acest fisier contine:
1.Functia principala findPath(harta);
2.Functiile secundare drawPath_fromMatrix() si drawPath_fromVector pentru verificare.

Functia findPath scoate matricea drumului pe care monstrii trebuie sa il urmeze pentru a ajunge la baza in cel mai scurt timp.
Tot findPath scoate vectorii path_x[] si path_y[] cu aceeasi proprietate. Adica path_x[1] si path_y[1] reprezinta prima pozitie in care monstrul trebuie sa se afle.

Variabilele globale:
path_matrix = [];
path_x = []; 
path_y = [];
nrmax_path= 0; nrmax_path este pentru functia drawPath_fromVector.
harta, care acum este mapNumber.
 
*/



//SE CONTRUIESTE path_matrix, O MATRICE PLINA DE 0-uri.
for( var i = 0; i <= 30; i++) //Consider harta de joc de maxim 30. 
{
	path_matrix[i] = [];  
	for( var j = 0; j <= 30; j++)
			path_matrix[i][j]=0;
}

function findPath () 
{ 
	var harta=mapNumber;
	//findPath gaseste automat punctul de Spawn, respectiv Base.

	var spawn_x = -1, base_x = -1;
	var spawn_y = -1, base_y = -1;
	
	for( var i = 0; i < 20; i++)
		for( var j = 0; j < 20; j++)
		{
				if(matrix[i][j][harta] == 2) //2 inseamna spawn.
				{
					spawn_x = i;
					spawn_y = j;
				}
				
				if(matrix[i][j][harta] == 3) //3 inseamna base.
				{
					base_x = i;
					base_y = j;
				}
		}
	
	//ALGORITMUL DE CAUTARE. 

	var coada_x = new Array(), coada_y = new Array();
	var p = 1, u = 1, x = 0, y = 0;     
	 
	coada_x[p] = spawn_x; //Punctul de plecare initial, respectiv Spawnul.
	coada_y[p] = spawn_y;    
	
	path_matrix[spawn_x][spawn_y] = 1; //Se pleaca de la 1.

	
	while( p <= u )
	{
		x = coada_x[p];
		y = coada_y[p]; 
		//Era o mare problema: se intra in undefined. Asta pentru ca se verifica in afara matricei declarate.
		if( x+1 >= 0 && y >= 0 && x+1 < 20 && y < 20 )	//IMPORTANT! >= pentru 0, DAR < strict pentru 20. Asa sunt facute hartile. [0,20) gen.
		if( matrix[x+1][y][harta] != 0 && path_matrix[x+1][y] == 0)
		{	
			u++; coada_x[u]=x+1; coada_y[u]=y; path_matrix[x+1][y] = path_matrix[x][y] + 1;
			//alert("Sudul a fost taguit.")
			//Da, x+1, cu notatiile noastre, inseamna in jos.
		}
		
		if( x-1 >= 0 && y >= 0 && x-1 < 20 && y < 20 )
		if( matrix[x-1][y][harta] != 0 && path_matrix[x-1][y] == 0 )
		{
			u++; coada_x[u]=x-1; coada_y[u]=y; path_matrix[x-1][y] = path_matrix[x][y] + 1;
			//alert("Nordul a fost taguit.")
		}
		
		if( x >= 0 && y+1 >= 0 && x < 20 && y+1 < 20 )
		if( matrix[x][y+1][harta] != 0 && path_matrix[x][y+1] == 0 )
		{
			u++; coada_x[u]=x; coada_y[u]=y+1; path_matrix[x][y+1] = path_matrix[x][y] + 1;
			//alert("Estul a fost taguit.")
		}
		
		if( x >= 0 && y-1 >= 0 && x < 20 && y-1 < 20 )
		if( matrix[x][y-1][harta] != 0 && path_matrix[x][y-1] == 0 )
		{
			u++; coada_x[u]=x; coada_y[u]=y-1; path_matrix[x][y-1] = path_matrix[x][y] + 1;
			//alert("Vestul a fost taguit.")
		}
		
		p++;
	}

	//PARTEA CU VECTORII:

	path_x[k] = spawn_x;
	path_y[k] = spawn_y;
	
	var x = path_x[k]; 
	var y = path_y[k]; var nr=0;
	
	for(var i=0; i<20; i++)
		for(var j=0; j<20; j++)
		{
			nr=path_matrix[i][j]; if(nr>nrmax_path)nrmax_path=nr;
			path_x[nr]=i;
			path_y[nr]=j;	
		}
		
		
	/*
		Inca in teste pentru e elimina problema sriturilor prin harta
		
	while(x != base_x && y != base_y)
	{
		switch(path_matrix[x][y] + 1)
		{
			case path_matrix[x][y + 1]:
				path_x[ path_matrix[x][y + 1] ] = x;
				path_y[ path_matrix[x][y + 1] ] = y + 1;
				y++;
				break;
			case path_matrix[x][y - 1]:
				path_x[ path_matrix[x][y - 1] ] = x;
				path_y[ path_matrix[x][y - 1] ] = y - 1;
				y--;
				break;
			case path_matrix[x + 1][y]:
				path_x[ path_matrix[x + 1][y] ] = x + 1;
				path_y[ path_matrix[x + 1][y] ] = y;
				x++;
				break;
			case path_matrix[x - 1][y]:
				path_x[ path_matrix[x - 1][y] ] = x - 1;
				path_y[ path_matrix[x - 1][y] ] = y;
				x--;
				break;
			default:
				console.log("construire vector drum");
		}
		
		
	}
	*/
		
//Aici se termina findPath.
}

function drawPath_fromMatrix()
{
	var i,j;
	var canvas = document.getElementById('game');
	var context = canvas.getContext('2d');
	var rectWidth = 40;
	var rectHeight = 30;
	for(i = 0; i <= 20; i++)
		for(j = 0; j <= 20; j++)
			{
				if(path_matrix[j][i] != 0)
				{
					//alert(path_matrix[j][i]);
					context.beginPath();
					context.rect(i * rectWidth, j * rectHeight, 40, 30);
					context.fillStyle = 'blue';
					context.fill();
				}
				
				if(path_matrix[j][i] == 0)
				{
					//alert(path_matrix[j][i]);
					context.beginPath();
					context.rect(i * rectWidth, j * rectHeight, 40, 30);
					context.fillStyle = 'red';
					context.fill();
				}
					
			}
}

function drawPath_fromVector()
{
	//noi avem path_x[] si path_y[].
	//atunci:
	var i,j,ok;
	var canvas = document.getElementById('game');
	var context = canvas.getContext('2d');
	var rectWidth = 40;
	var rectHeight = 30;
	for(i = 0; i <= 20; i++)
		for(j = 0; j <= 20; j++)
		{
			ok=0; //alert(k);
			for(var l=1;l<=nrmax_path;l++)
				if(path_x[l]==j && path_y[l]==i)
				{
					//alert(path_matrix[j][i]);
					context.beginPath();
					context.rect(i * rectWidth, j * rectHeight, 40, 30);
					context.fillStyle = 'blue';
					context.fill();
					ok=1;break; //foarte important!
				}
				
				if(ok==0)
				{
					//alert(path_matrix[j][i]);
					context.beginPath();
					context.rect(i * rectWidth, j * rectHeight, 40, 30);
					context.fillStyle = 'red';
					context.fill();
				}
		}
					
			
	
}

//Versiunea 3.0
//Mai trebuie sa fac un update pentru randomnessul de la bifurcatii. 
//Multumesc pentru ajutor! :3
