var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
  drawSprites()
  if (frameCount % 120 === 0){
    drawdoor()
  drawGhost()
  }
  
}
function drawdoor() {
  door = createSprite(50,100);
  door.addImage("door",doorImg)
  door.velocityY=2;
  door.x = Math.round(random(120,400))
} 
function drawGhost(){
  ghost= createSprite(30,65);
  ghost.addImage("ghost",ghostImg)
  ghost.y=200
  ghost.x=200
  onkeydown, spacebar(
    ghost.y=ghost.y+10
  )
    
  }
