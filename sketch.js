var  boy, boy_tired, ground, gameOver, boy_running, hurdle, track
var invisibleGround, hurdleGroup
var score = 0
var PLAY = 1
var END = 0
var gameState = PLAY

function preload(){
    boy_running = loadAnimation("b1.png","b2.png","b3.png","b4.png","b5.png","b6.png")
    boy_tired = loadImage("tired.png")
    gameOver = loadImage("gameOver.png")
    groundImage = loadImage("ground2.png")
    hurdleImage = loadImage("hurdle.png")
    trackImage = loadImage("track.jpeg")

    gameOverImage = loadImage("gameOver.png")
}

function setup(){
    createCanvas(900,900)

    track = createSprite(200,300,20,100)
    track.addImage("track", trackImage)
    track.x = track.width/2

    boy = createSprite(50,350,20,50)

    boy.addAnimation("running",boy_running)
   // boy.addImage("tired",boy_tired)
    boy.scale = 0.5
    

    gameOver = createSprite(450, 450)
    gameOver.addImage(gameOverImage)
    gameOver.scale = 0.5
    gameOver.visible = false

    invisibleGround = createSprite(100,400,900,10)
    invisibleGround.visible = true

    hurdleGroup = createGroup();

    console.log(boy.y)
}

function draw(){
     
    background(255)
    //text("score"+ score, 800,50)

    if (gameState === PLAY){
       // score = score +Math.round(getFrameRate()/60)
        track.velocityX = -4

    if (track.x < 900){
        track.x = track.width/2
        }

    if(keyDown("space") && boy.y >= 159){
        boy.velocityY = -12
    }
    
    boy.velocityY = boy.velocityY + 0.8
    
   
    if(hurdleGroup.isTouching(boy)){
        gameState = END;
    }
    
   
  }
  else if(gameState === END){
      track.velocityX = 0
      boy.velocityX = 0
      hurdleGroup.setVelocityXEach(0);
      console.log("end")
  }
  

    
    boy.collide(invisibleGround);
    spawnHurdle();
    drawSprites();
    
}

function spawnHurdle(){
  if(frameCount % 120 === 0){
      var hurdle = createSprite(950, 300, 10,50)
      hurdle.addImage(hurdleImage)
      hurdle.velocityX = -2
      hurdle.scale = 0.5
      
     // hurdle.lifetime = 100
  }
}