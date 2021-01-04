var backgroundScene, backgroundImg, b1, b2, b3, b4;

var boy, boyAnim;
var obstacle1, obstacle2, obstacle3, obstaclesGroup;

var gameState = 1;

function preload(){
  backgroundImg = loadImage("background.jpg");
  b1 = loadImage("background.png");
  b2 = loadImage("background(1).jpg");
  b3 = loadImage("background(2).jpg");
  b4 = loadImage("background(4).jpg");

  boyAnim = loadAnimation("1.png", "2.png", "3.png", "4.png");
}

function setup(){
  createCanvas(displayWidth - 100, displayHeight - 150);
  
  backgroundScene = createSprite(1050, 375, 10, 10);
  backgroundScene.addImage(b4);
  backgroundScene.velocityX = -8;
  backgroundScene.scale = 3;

  boy = createSprite(width/2, height/2);
  boy.addAnimation("walk", boyAnim);
  boy.scale = 0.8;
  boy.mirrorX(boy.mirrorX() * -1);
}

function draw(){
  background("white");

  if(backgroundScene.x < 275){
    backgroundScene.x = 1000
  }

  drawSprites();
}