var drop1,dr0p2,images,bg="car3.png";


var life=30;
var score=0;
var time = 0;
var s = 0;

var game = 0
//var a=randomNumber(3/400)
function preload(){
  
//  earthImage=loadImage("earth.jpg");


  backgroundImg = loadImage("download.jpg");
car3=loadImage("car3.png");
}

function setup() {
  createCanvas(400,600);
drop1= createSprite(125, 20, 10, 50);
drop2= createSprite(020, 50, 10, 50);
drop3= createSprite(100, 100, 10, 50);
drop4= createSprite(200, 150, 10, 50);
drop5= createSprite(300, 180, 10, 50);
drop6= createSprite(380, 260, 10, 50);
drop7= createSprite(150, 290, 10, 50);
drop8= createSprite(250, 340, 10, 50);
drop9= createSprite(350, 380, 10, 50);
drop0= createSprite(350, 460, 10, 50);
line1= createSprite(50,300,20,100);



drop0lifen=10;
drop2lifen=10;
drop3lifen=10;
drop4lifen=10;
drop5lifen=10;
drop6lifen=10;
drop7lifen=10;
drop8lifen=10;
drop9lifen=10;


drop2life= createSprite(020, 50, 3, 30);
drop3life= createSprite(100, 50, 3, 30);
drop4life= createSprite(200, 50, 3, 30);
drop5life= createSprite(300, 50, 3, 30);
drop6life= createSprite(380, 50, 3, 30);
drop7life= createSprite(150, 50, 3, 30);
drop8life= createSprite(250, 50, 3, 30);
drop9life= createSprite(350, 50, 3, 30);
drop0life= createSprite(350, 50, 3, 30);



ran = createSprite (1,1,10,10);
coin = createSprite(30,30,20,20);
qdrop1= createSprite(125, 200, 1, 900);
qdrop2= createSprite(020, 200, 1, 900);
qdrop3= createSprite(100, 200, 1, 900);
qdrop4= createSprite(200, 200, 1, 900);
qdrop5= createSprite(300, 200, 1, 900);
qdrop6= createSprite(380, 200, 1, 900);
qdrop7= createSprite(150, 200, 1, 900);
qdrop8= createSprite(250, 200, 1, 900);
qdrop9= createSprite(350, 200, 1, 900);
qdrop0= createSprite(350, 200, 1, 900);
//bird= new Bird(100,100,20,20);
 drop2.velocityY=13;
 drop3.velocityY=23;
 drop4.velocityY=14; 
 drop5.velocityY=29;
 drop6.velocityY=13;
 drop7.velocityY=18; 
 drop8.velocityY=23;
 drop9.velocityY=28;
 drop0.velocityY=26; 

 line= createSprite(50,300,20,life*10);

 }


function draw() {

//cars healths



drop2life.shapeColor=("red");
drop3life.shapeColor=("red");
drop4life.shapeColor=("red");
drop5life.shapeColor=("red");
drop6life.shapeColor=("red");
drop7life.shapeColor=("red");
drop8life.shapeColor=("red");
drop9life.shapeColor=("red");
drop0life.shapeColor=("red");

drop2life.height=drop2lifen;
drop3life.height=drop3lifen;
drop4life.height=drop4lifen;
drop5life.height=drop5lifen;
drop6life.height=drop6lifen;
drop7life.height=drop7lifen;
drop8life.height=drop8lifen;
drop9life.height=drop9lifen;
drop0life.height=drop0lifen;

/*
drop2life.y=drop2.y;
drop3life.y=drop3.y;
drop4life.y=drop4.y;
drop5life.y=drop5.y;
drop6life.y=drop6.y;
drop7life.y=drop7.y;
drop8life.y=drop8.y;
drop9life.y=drop9.y;
drop0life.y=drop0.y;
*/
if(drop0lifen<0){
  drop0lifen=-600;
}
if(drop9lifen<0){
  drop9lifen=-600;
}
if(drop2lifen<0){
  drop2lifen=-600;
}
if(drop3lifen<0){
  drop3lifen=-600;
}
if(drop4lifen<0){
  drop4lifen=-600;
}
if(drop5lifen<0){
  drop5lifen=-600;
}
if(drop6lifen<0){
  drop6lifen=-600;
}
if(drop7lifen<0){
  drop7lifen=-600;
}
if(drop8lifen<0){
  drop8lifen=-600;
}








  
  coin.shapeColor=("yellow");
  drop1.shapeColor=("magenta");
if(drop1.x<1){
  drop1.x=1;
  life=life-0.01;
}
if(drop1.x>400){
  drop1.x=400;
  life=life-0.01;
}
if(drop1.velocityY>50){
  drop1.velocityY=drop1.velocityY-1;
}
if(drop1.velocityY<-50){
  drop1.velocityY=drop1.velocityY+1;
}
  

a=0.5;
if(drop1.velocityX>0){
  drop1.velocityX=drop1.velocityX-a;
}
if(drop1.velocityX<0){
  drop1.velocityX=drop1.velocityX+a;
}
if(drop1.velocityY>0){
  drop1.velocityY=drop1.velocityY-a;
}
if(drop1.velocityY<0){
  drop1.velocityY=drop1.velocityY+a;
}




ran.velocityY=100
ran.velocityX=1
ran.shapeColor=rgb(200,100,000);
if(ran.x>400){
  ran.y=1
  ran.x=1
}
if(ran.y>600){
  ran.x=ran.x+2.1;
  ran.y=1
} 




 if(life>0.0){
  if(drop1.isTouching(drop2)&&drop2life.height>0.01||drop1.isTouching(drop3)&&drop3life.height>0.01||drop1.isTouching(drop4)&&drop4life.height>0.01||drop1.isTouching(drop5)&&drop5life.height>0.01||drop1.isTouching(drop6)&&drop6life.height>0.01||drop1.isTouching(drop7)&&drop7life.height>0.01||drop1.isTouching(drop8)&&drop8life.height>0.01||drop1.isTouching(drop9)&&drop9life.height>0.01||drop1.isTouching(drop0)&&drop0life.height>0.01&&life>0){
    
   
    life=life-0.2;
   
  }
}


line.shapeColor = "red";


 
  if(life<0){
    life=0
    line.height=life;
  }
    else{
      line.height=life*13;
    }
  
    
 
  background(backgroundImg)
  textSize(35);
  fill("white");
 
  text( "TIME :"+s,100,20);
 // text( "LIFE :"+life,100,150);
  if(life===0){
    died();
    text("YOU DIED Score:"+score,50,300);
  }

  if(game===0){
drop0lifen=drop0lifen+0.01;
drop2lifen=drop2lifen+0.01;
drop3lifen=drop3lifen+0.01;
drop4lifen=drop4lifen+0.01;
drop5lifen=drop5lifen+0.01;
drop6lifen=drop6lifen+0.01;
drop7lifen=drop7lifen+0.01;
drop8lifen=drop8lifen+0.01;
drop9lifen=drop9lifen+0.01;


    
if(drop1.isTouching(drop0)){
  drop0lifen= drop0lifen-0.5;
}
if(drop1.isTouching(drop2)){
  drop2lifen= drop2lifen-0.5;
}
if(drop1.isTouching(drop3)){
  drop3lifen= drop3lifen-0.5;
}
if(drop1.isTouching(drop4)){
  drop4lifen= drop4lifen-0.5;
}
if(drop1.isTouching(drop5)){
  drop5lifen= drop5lifen-0.5;
}
if(drop1.isTouching(drop6)){
  drop6lifen= drop6lifen-0.5;
}
if(drop1.isTouching(drop7)){
  drop7lifen= drop7lifen-0.5;
}
if(drop1.isTouching(drop8)){
  drop8lifen= drop8lifen-0.5;
}
if(drop1.isTouching(drop9)){
  drop9lifen= drop9lifen-0.5;
}
    if(drop1.isTouching(coin)){
 
      score=score+1;
    coin.x=ran.x;
    coin.y=ran.y;
      life=life+0.2
    }

    time=time+1;
if(time%30===0){
  s=s+1;
  time=0;
}
    text( "SCORE :"+score,100,100);
    if(keyDown(LEFT_ARROW)){
      drop1.velocityX=drop1.velocityX-1;
   }
   else if(keyDown(RIGHT_ARROW)){
     drop1.velocityX=drop1.velocityX+1;
   }
   else if(keyDown(UP_ARROW)){
     drop1.velocityY=drop1.velocityY-1;
   }
   else if(keyDown(DOWN_ARROW)){
     drop1.velocityY=drop1.velocityY+1;
   }
   if(keyCode===16){
     drop1.velocityX=0
     drop1.velocityY=0
   }
   if(drop1.y>600){
     drop1.y=1;
     up();
   }
   if(drop1.y<0){
     drop1.y=600;
     down();
   }
  }
 
CSSNamespaceRule.x=drop1.x;
 
  if(drop2.y>600){
    drop2.y=1;
  }
  if(drop3.y>650){
    drop3.y=1;
  }
  if(drop4.y>710){
    drop4.y=1;
  }
  if(drop5.y>770){
    drop5.y=1;
  }
  if(drop6.y>690){
    drop6.y=1;
  }
  if(drop7.y>650){
    drop7.y=1;
  }
  if(drop8.y>740){
    drop8.y=1;
  }
  if(drop9.y>610){
    drop9.y=1;
  }
  if(drop0.y>620){
    drop0.y=1;



    if(score>wow ){
      wow=score
    }
  }


  drawSprites();
}


function down(){
  background(200,100,000);
  textSize(35);
  fill("white");
  textSize(35);
    fill("white");
  drop2.y=drop2.y-300;
  drop3.y=drop3.y-300;
  drop4.y=drop4.y-300;
  drop5.y=drop5.y-300;
  drop6.y=drop6.y-300;
  drop7.y=drop7.y-300;
  drop8.y=drop8.y-200;
  drop9.y=drop9.y-300;
  drop0.y=drop0.y-300;
}
function up(){
  drop2.y=drop2.y+300;
  drop3.y=drop3.y+300;
  drop4.y=drop4.y+300;
  drop5.y=drop5.y+300;
  drop6.y=drop6.y+300;
  drop7.y=drop7.y+300;
  drop8.y=drop8.y+300;
  drop9.y=drop9.y+300;
  drop0.y=drop0.y+300;
}
function died(){
  drop1.velocityX=0;
  drop1.velocityY=0;

  drop2.velocityY=0;
  drop3.velocityY=0;
  drop4.velocityY=0; 
  drop5.velocityY=0;
  drop6.velocityY=0;
  drop7.velocityY=0; 
  drop8.velocityY=0;
  drop9.velocityY=0;
  drop0.velocityY=0; 
  if (keyCode===16){}
  text( "HIGH SCORE :"+wow,100,50);
game = 1;
}
function retry(){

}