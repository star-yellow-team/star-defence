
// Algoritmul de pathfinding pentru monstrii 
// pentru HARTA SIMPLA, fara nici o bifurcatie, CU UN SINGUR SPAWN POINT / BAZA. 
// Update imediat.


// In acesti 2 vectori se tin minte pozitiile pe unde un monstru trebuie sa mearga.

var path_x = new Array();
var path_y = new Array();

function findPath (harta ) //Se construieste druml pentru harta respectiva. Se face o singura data / harta.
{ 
	path_x.length = 0; // Ma asigur ca vectorii
	path_y.length = 0; // pentru pozitiile drumului sunt resetati.
	
	// Pentru simplitatea utilizatorului de PathFinding,
	// functia aceasta va gasi automat SpawnPointul, respectiv Baza. 
	
	
//Gasirea SpawnPoint-ului, respectiv a Bazei
//_________________________________________________________
	
	var spawn_x = -1; var base_x = -1;
	var spawn_y = -1; var base_y = -1;
	
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
	
//Algoritmul pentru, ma repet, un singur Spawn Point, respectiv o singura Baza, fara nici o bifurcatie.
//_____________________________________________________________________________________________________
	
	var dimensiune = 20; //Pt cand o sa facem harti de dimensiuni diferite.
	
	for( var i = 0; i < dimensiune; i++){
		path_matrix[i] = [];  
			for( var j = 0; j < dimensiune; j++)
				path_matrix[i][j]=0;
	}
	//Am facut o noua matrice, plina de 0-uri, pentru path. 
	
	//Acum - Lee Algorithm. 
	
	var coada_x = new Array();     var coada_y = new Array();
	
	var p = 1, u = 1;       coada_x[p] = spawn_x; coada_y[p] = spawn_y;     path_matrix[spawn_x][spawn_y] = 1;
	var x = 0,y = 0;
	
	//In mod normal, e nevoie de o bordura. Dar noi incepem matrix-ul de la 0. So trebuie sa pun mult mai multe conditii.
	
	while( p < = u && x!=base_x && y!=base_y){
		
		x = coada_x[p];
		y = coada_y[p];
		
		if( x+1 > 0 && y > 0 && x+1 < dimensiune && y <dimensiune )
		if( matrix[x+1][y][harta] == 1 && path_matrix[x+1][y] == 0) //Cu alte cuvinte, daca in matrix este drum (=1) si nu s-a mai mers pe acolo. 
		{
			u++; coada_x[u]=x+1; coada_y[u]=y; path_matrix[x+1][y] = path_matrix[x][y] + 1;
		}
		
		if( x-1 > 0 && y > 0 && x-1 < dimensiune && y < dimensiune )
		if( matrix[x-1][y][harta] == 1 && path_matrix[x-1][y] == 0 )
		{
			u++; coada_x[u]=x-1; coada_y[u]=y; path_matrix[x-1][y] = path_matrix[x][y] + 1;
		}
		
		if( x > 0 && y+1 > 0 && x < dimensiune && y+1 < dimensiune )
		if( matrix[x][y+1][harta] == 1 && path_matrix[x][y+1] == 0 )
		{
			u++; coada_x[u]=x; coada_y[u]=y+1; path_matrix[x][y+1] = path_matrix[x][y] + 1;
		}
		
		if( x > 0 && y-1 > 0 && x < dimensiune && y-1 < dimensiune )
		if( matrix[x][y-1][harta] == 1 && path_matrix[x][y-1] == 0 )
		{
			u++; coada_x[u]=x; coada_y[u]=y-1; path_matrix[x][y-1] = path_matrix[x][y] + 1;
		}
		
		p++;
	}
	
	// Acum drumul se gaseste in matricea path_matrix.
	// Trebuie sa dam ca output vectorii path_x si path_y.
	// Atunci:
	
	var k = 1;
	
	path_x[k] = spawn_x;
	path_y[k] = spawn_y;
	
	x = path_x[k];
	y = path_y[k];
	
	while( x!=base_x && y!=base_y )
	{
		if( path_matrix[x+1][y] == path_matrix[x][y] + 1)
		{
			k++;
			path_x[k] = x+1;
			path_y[k] = y;
		}
		else if( path_matrix[x-1][y] == path_matrix[x][y] + 1 )
			{
				k++;
				path_x[k] = x-1;
				path_y[k] = y;
			}
			else if( path_matrix[x][y+1] == path_matrix[x][y] + 1 )
				{
					k++;
					path_x[k] = x;
					path_y[k] = y+1;
				}
				else if( path_matrix[x][y-1] == path_matrix[x][y] + 1 )
					{
						k++;
						path_x[k] = x;
						path_y[k] = y-1;
					}
					
		x = path_x[k];
		y = path_y[k];
	}

}
//In path_x/y se gaseste cel mai scurt drum al monstrului din spawn point pana la baza.
//Versiunea 1.0
