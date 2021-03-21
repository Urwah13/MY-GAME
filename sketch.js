var cannon;
var background;
var cannonIMG;
var landIMG;
var BD1;
var BD2;
var BD3;
var BD4;
var spawnObstacleGroup;


function preload() {
  cannonIMG=loadImage("images/canon.png");
  landIMG=loadImage("images/land.png");
  BD1=loadImage("images/building 1.jpg");
  BD2=loadImage("images/building 2.jpg");
  BD3=loadImage("images/building 3.jpg");
  BD4=loadImage("images/building 4.jpg");
}

function setup() {
  createCanvas(800,400);
  cannon= createSprite(400, 350, 50, 50); 
  cannon.addImage(cannonIMG);
  cannon.scale=0.1;
  
}

function draw() {
  background(landIMG); 
  spawnObstacleGroup(); 
  cannon.x=mouseX;
  drawSprites();
}

function spawnObstacleGroup() {
 if(frameCount % 60 === 0) {
   var building = createSprite(0,100,40,40);
   building.velocityx = -1
   var rand = Math.round(random(1,6));
   switch(rand) {
     case 1: building.addImage(BD1);
            break
     case 2: building.addImage(BD2);
            break
     case 3: building.addImage(BD3);
            break
     case 4: building.addImage(BD4);
     default: break;
   }

   
   building.lifetime = 400;
 }
}