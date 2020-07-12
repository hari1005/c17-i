var roboBody,roboBodyImg,roboHead;

function preload(){
roboBodyImg=loadImage("roboBody.png")
roboHeadImg=loadImage("roboHead - Copy.png")
}

function setup() {
    createCanvas(400, 400);
    roboHead= createSprite(330,200,40,50);
   roboBody= createSprite(340,300,40,50);
   roboBody.addImage(roboBodyImg);
  roboBody.scale=0.5;
  roboHead.addImage(roboHeadImg);
  roboHead.scale=0.5;
}

function draw() {
   
  background(220);
   background("red");
  
  roboBody.x=World.mouseX;
  roboHead.x=World.mouseX-10;
  if(mousePressedOver(roboBody)){
   
    roboHead.y=150;
  }else{
    roboHead.y=200;
  }
  drawSprites();
}