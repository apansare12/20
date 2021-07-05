
var cat1Img,cat2Img,cat3Img,cat4Img;
var cat, mouse;
var mouse1Img,mouse2Img,mouse3Img,mouse4Img;
var gardenImg;




function preload() {
    //load the images here
    cat1Img = loadAnimation("images/cat1.png");
    cat2Img = loadAnimation("images/cat2.png","images/cat3.png");
    cat3Img = loadAnimation("images/cat4.png");
    mouse1Img = loadAnimation("images/mouse1.png");
    mouse2Img = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3Img = loadAnimation("images/mouse4.png");
    gardenImg  = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(870,600,140,150);
    mouse = createSprite(200,600,100,100);
    cat.addAnimation("catSleeping",cat1Img);
    cat.scale=0.2;
    mouse.addAnimation("mouseStanding",mouse1Img);
    mouse.scale=0.2;
    //cat.changeAnnimation("catRunnnig");
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    
    
    
  if(cat.x - mouse.x <(cat.width - mouse.width)/2)
  {
   cat.velocityX = 0;
   cat.x = 400;
   mouse.addAnimation("mouseLastImage",mouse3Img);
   mouse.changeAnimation("mouseLastImage");
   cat.addAnimation("catLastImage",cat3Img);
   cat.changeAnimation("catLastImage");

  }
  drawSprites();

  
 
}


function keyPressed(){

  
 if(keyCode == LEFT_ARROW)
  {
  mouse.addAnimation("mouseTeasing1",mouse2Img);
  mouse.changeAnimation("mouseTeasing1");
  mouse.frameDelay = 25;
  
  cat.addAnimation("catRunning",cat2Img);
  cat.changeAnimation("catRunning");
  cat.velocityX = -3;
    
}



}
