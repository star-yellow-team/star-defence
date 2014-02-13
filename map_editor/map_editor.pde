class Button
{
    int x,y,val;
    int r = 40;
    Button(int a,int b,int c)
    {
      x = a;
      y = b;
      val = c; 
    }
    
    boolean onButton()
    {
        if(mouseX >= x && mouseX <= x+r && mouseY >= y && mouseY <= y+r)
          {
             return true;
          }
        return false;
    }
    
    void afis()
    {
        switch (val)
           {
               case 1:
                 fill(139,69,19);
                 break;
               case 2:
                  fill(255,0,0);
                  break;
               case 3:
                fill(0,0,255);
                break;
               default:
                 noFill();
           }
           stroke(0);
           rect(x , y ,r ,r );
    }
    
}

Button []b;

int [][]m = new int [30][20]; 
int val1 = 1;

void setup()
{
   size(940, 600);
   int lin = 0;
   b = new Button[5];
   for(int i = 1; i <= 4; i++)
     {
       b[i] = new Button(900, lin,  i);
       lin += 40;
     }
}

void harta()
{
    int i,j;
    for(i = 0; i < 30; i++)
      for(j = 0; j < 20; j++)
        {
           switch (m[i][j])
           {
               case 1:
                 fill(139,69,19);
                 break;
               case 2:
                  fill(255,0,0);
                  break;
               case 3:
                fill(0,0,255);
                break;
               default:
                 noFill();
           }
           stroke(0);
           rect(i * 30, j*30 ,30 ,30 );
        }
        
       for(i = 1; i <= 4; i++)
         b[i].afis();
}  

void saveData()
{
  String []data = new String[20];
   int i,j;
   for(i = 0; i < 20; i++)
      {
        data[i] = "[ ";
        for(j = 0; j < 30; j++)
         {
            if(j < 29)
              data[i] +=m[j][i] + " , ";
            else
              data[i] +=m[j][i] + " ";
         }
         data[i] += "]";
      } 
    saveStrings("data.txt",data);
}

void draw()
{
  background(255);
  if(mousePressed)
  {
    for(int i = 1; i <= 4; i++)
      if(b[i].onButton() == true)
       {
         val1 = b[i].val;
         if(i == 4)
         saveData();
       }
    if(mouseX >= 0 && mouseX <= 900 && mouseY >= 0 && mouseY <= 600)
       m[mouseX/30][mouseY/30] = val1; 
  }
  harta();
}

void mousePressed()
{
  
}
