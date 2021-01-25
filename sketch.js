var knife,knifeimg;
var PLAY=1;
var END=0;
var gameState=1;
var backGround,backGroundimg;
var score;
var gameOver,gameOverimg;
var knifeSound,gameOverSound;

function preload(){
   knifeimg=loadImage("sword.png");
   fruit1img=loadImage("fruit1.png")
   fruit2img=loadImage("fruit2.png")
   fruit3img=loadImage("fruit3.png")
   fruit4img=loadImage("fruit4.png")
   enemyimg=loadAnimation
   ("alien1.png","alien2.png")
    gameOverimg=loadImage("gameover.png")
  
  
   }

function setup(){
  
  createCanvas(400,400)
 
 

  
  knife=createSprite(200,200,20,20)
  knife.addImage("knife",knifeimg);
  knife.scale=0.6;
  knife.debug=false;
  knife.setCollider("circle",0,0,40);

  fruitGroup=new Group();
  enemyGroup=new Group();
  
  gameOver=createSprite(200,200,20,20)
  gameOver.addImage("rest",gameOverimg);
  gameOver.visible=false;
  
  score=0;
  
  }

function draw(){
 
  background(100)
  
  if(gameState===1){
    
  knife.x=mouseX;
  knife.y=mouseY;
    
  fruits(); 
  enemy();
    
  
    if(knife.isTouching(fruitGroup)){
    fruitGroup.destroyEach();
      score=score+1;
      
  }
   if(knife.isTouching(enemyGroup)){
     enemyGroup.destroyEach();
     gameState=0;
     
  }
    
   
    
    
    
  } else if(gameState===0){
    gameOver.visible=true;
    
    knife.x=200;
    knife.y=140;
    
    enemyGroup.destroyEach();
    fruitGroup.destroyEach();
    fruitGroup.setVelocityXEach=0;
    enemyGroup.setVelocityXEach=0;
  }
  
    drawSprites();
  
    fill("black");
    textSize(25);
    text("score:"+score,300,50)

 }

 function fruits(){
   if(World.frameCount%80===0){
    
     fruit=createSprite(400,200,20,20)
     fruit.scale=0.2;
     fru=Math.round(random(1,4))
     if(fru==1){
       fruit.addImage(fruit1img)
     }else if (fru==2){
       fruit.addImage(fruit2img)
     }else if(fru==3){
       fruit.addImage(fruit3img)
     }else{
       fruit.addImage(fruit4img)
     }
     fruit.y=Math.round(random(50,340));
     fruit.lifetime=56;
     
     position=Math.round(random(1,2))
     
     if(position==1){
      fruit.x=400;
      fruit.velocityX=-(7+2*score/4);
    }else{
      if(position==2){
        fruit.x=0;
        fruit.velocityX=(7+2*score/4);
      }
      }
     
     fruitGroup.add(fruit);
      }
   
      }

function enemy(){
 if(World.frameCount%200===0){
     monster=createSprite(400,200,20,20)
     monster.addAnimation("enemy",enemyimg)
     monster.y=Math.round(random(200,300));
     monster.velocityX=-(7+3*score/10);
     monster.setLifetime=56;
    
     enemyGroup.add(monster);
     }
  
     }


  



