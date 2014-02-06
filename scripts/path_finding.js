//LECTIE (de tinut minte) : daca spui de exemplu 'vector.length=0', dar 'vector' NU E declarat, nu stiu exact ce se intampla, dar se pare ca se intra in memoria celorlalte variabile, dand drumul la haos. 

/*
DE CITIT:

Functia findPath(harta) trebuie apelata pentru a scoate matricea path_matrix[][] la respectiva harta.

IN LEGATURA CU PROBLEMA NOASTRA DE X si Y.
Avand in vedere ca atunci cand se apeleaza addMaps, functia majora care pune hartile, matricea 'matrix' este conceputa ca [i][j] si nu [j][i], automat findPath va verifica matrix[i][j] si va scoate o matrice path_matrix tot de forma [i][j]. Simt nevoia sa mentionez asta pentru ca m-am incurcat la inceput. 

Acest fisier contine:
1.Functia principala findPath(harta);
2.Functia secundara drawPath(harta) pentru verificare.

Functia findPath scoate matricea drumului pe care monstrii trebuie sa il urmeze pentru a ajunge la baza in cel mai scurt timp.

*/

var path_matrix = [];

//SE CONTRUIESTE path_matrix, O MATRICE PLINA DE 0-uri.
for( var i = 0; i <= 20; i++) //Consider harta de joc de maxim 20.
{
	path_matrix[i] = [];  
	for( var j = 0; j <= 20; j++)
			path_matrix[i][j]=0;
}

function findPath (harta) 
{ 
	
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
		
		if( x+1 >= 0 && y >= 0 && x+1 <= 20 && y <= 20 )
		if( matrix[x+1][y][harta] == 1 && path_matrix[x+1][y] == 0)
		{
			u++; coada_x[u]=x+1; coada_y[u]=y; path_matrix[x+1][y] = path_matrix[x][y] + 1;
			//alert("Sudul a fost taguit.")
			//Da, x+1, cu notatiile noastre, inseamna in jos.
		}
		
		if( x-1 >= 0 && y >= 0 && x-1 <= 20 && y <= 20 )
		if( matrix[x-1][y][harta] == 1 && path_matrix[x-1][y] == 0 )
		{
			u++; coada_x[u]=x-1; coada_y[u]=y; path_matrix[x-1][y] = path_matrix[x][y] + 1;
			//alert("Nordul a fost taguit.")
		}
		
		if( x >= 0 && y+1 >= 0 && x <= 20 && y+1 <= 20 )
		if( matrix[x][y+1][harta] == 1 && path_matrix[x][y+1] == 0 )
		{
			u++; coada_x[u]=x; coada_y[u]=y+1; path_matrix[x][y+1] = path_matrix[x][y] + 1;
			//alert("Estul a fost taguit.")
		}
		
		if( x >= 0 && y-1 >= 0 && x <= 20 && y-1 <= 20 )
		if( matrix[x][y-1][harta] == 1 && path_matrix[x][y-1] == 0 )
		{
			u++; coada_x[u]=x; coada_y[u]=y-1; path_matrix[x][y-1] = path_matrix[x][y] + 1;
			//alert("Vestul a fost taguit.")
		}
		
		p++;
	}
	
//Aici se termina findPath.
}

function drawPath(x)
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

//Versiunea 2.0
