  var gameState= "Start"
  var newX= 50

function preload() {
   Human=loadImage("Human.png")
   Grass=loadImage("Grass.png")
}

function setup() {
  createCanvas(1200,400);
  player= new Player()
  start= new Start()

  platformGroup= new Group()
  for(var i=0; i<25; i++){
    platform= new Platform(newX)
    platformGroup.add(platform.body)
    newX+=400
  }

  start.display()
}

function draw() {
  background("black");  
  if(gameState==="Play"){
    background(255)
    drawSprites();
    start.button.hide()
    start.title.hide()
    player.body.collide(platformGroup)
  }
}