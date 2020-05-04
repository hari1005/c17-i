var roboBody,roboHead;

function setup() {
    createCanvas(400, 400);
   roboBody= createSprite(340,300,40,50);
 roboHead= createSprite(330,230,40,50);
 
   roboBody.addImage("roboBody.png");
  roboBody.scale=0.45;
   roboHead.addImage("roboHead.png");
  roboHead.addImage("roboHead - Copy.png");
  roboHead.scale=0.5;
}

function draw() {
   
  background(220);
   background("red");
  
  roboBody.x=World.mouseX;
  roboHead.x=World.mouseX-10;
  if(mousePressedOver(roboBody)){
    roboHead.changeImage("roboHead - Copy.png");
    roboHead.y=135;
  }else{
    roboHead.y=230;
  }
  drawSprites();
}