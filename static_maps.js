// x = line
// y = coloana
// 0 = liber
// 1 = traseu monstru
// -1 = eroare la depasirea limitei matricei

function Map(sx, sy, bx, by, m)
{
	This.spawnx = sx;
	This.spawny = sy;
	This.basex = bx;
	This.basey = by;
	This.matrix = m;
}

Map.prototype.addElement = function(x, y, element)
{
	matrix[x][y] = element;
}

Map.prototype.removeElement = function(x, y)
{
	matrix[x][y] = 0;
}

Map.prototype.getElement = function(x, y)
{
	if(x < 0 && x >= 20)
		return -1;
	if(y < 0 && y >= 20)
		return -1;
	return matrix[x][y];
}