var trex, trex_running;
var groundImage;

function preload(){
 trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

 groundImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;

  ground = createSprite(300,190,600,20);
  ground.velocityX = -5;
  ground.x = ground.width/2; //300
  ground.addImage(groundImage)
}


function draw(){
  //set background color 
  background(200);
 
  if(ground.x < 0){
    ground.x = ground.width/2; //300
  }

  //jump when space bar is pressed
  if(keyDown("space")){
    trex.velocityY = -10;
  }

  //make the trex come down by changing the negative velocity to positive velocity
  trex.velocityY = trex.velocityY + 0.8;

  trex.collide(ground);
 
  drawSprites();
}