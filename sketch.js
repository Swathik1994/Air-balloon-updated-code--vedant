var balloon , bg , bg_image, airballoon,airballoonImg;


//corrected

function preload(){
  airballoonImg=loadImage("1.png");
}

function setup() {

  createCanvas(800,400);
   airballoon = createSprite(400, 200, 50, 50);
   airballoon.addImage("balloon",airballoonImg );
   airballoon.scale=0.1;
}

function draw() {
  background(255,255,255);  
 

if(keyIsDown(RIGHT_ARROW)){
  airballoon.velocityX  = airballoon.X =+ 10;
 
}

if(keyIsDown(LEFT_ARROW)){
  airballoon.velocityX = airballoon.X =- 10;
  
}
if(keyIsDown(UP_ARROW)){
  airballoon.velocityY  = airballoon.Y=- 10;
  airballoon.scale =+2;
}
else{
  airballoon.scale = 3;
}

if(keyIsDown(DOWN_ARROW)){
  airballoon.velocityY  = airballoon.Y =+ 10;
  
}


  drawSprites();
}