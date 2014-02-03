// x = line
// y = coloana
// 0 = liber
// 1 = traseu monstru

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

Map.prototype.takeElement = function(x, y)
{
	return matrix[x][y];
}