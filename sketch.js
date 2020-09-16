var wall,thickness;
var bullet,weight,speed;


function setup() {
  createCanvas(1600, 400);
bullet = createSprite(50,200,70,30);
  
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  speed = random(223,321);
  weight = random(30,52);
 
}

function draw() {
 background(220);
   bullet.velocityX = speed;
  
  if(bullet.isTouching(wall)){
    
   bullet.velocityX = 0;
  
   
    var deformation = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if(deformation > 10)
    {
    //  car.shapeColour = colourcolour(0,255,0);
       background(0,255,0);
    }
    
    
    
    if(deformation < 10)
    {
     // car.shapeColour = colour(255,0,0);
       background(255,0,0);
    }
  }
  
  drawSprites();
}