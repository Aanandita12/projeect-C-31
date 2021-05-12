const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function prelode()
background="black";






function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
  box1 = new box(200,3,30,40);
  box2 = new box(230,3,30,40);
  //level one
  box3 = new box(230,9,30,40);
  box4 = new box(260,9,30,40);
  box5 = new box(290,9,30,40);
  box6 = new box(300,9,30,40);
  box7 = new box(330,9,30,40);
  //level two
  box8 = new box(330,235,30,40);
  box9 = new box(360,235,30,40);
  box10= new box(390,235,30,40);
  box11= new box(420,235,30,40);
  box12= new box(450,235,30,40);
  //level three
  box13= new box(360,195,30,40);
  box14= new box(390,195,30,40);
  box15= new box(420,195,30,40);
  //top
  box16= new box(390,155,30,40);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  Slingshot = new Slingshot(this.ball,{x:100,y:200}); 


}

function draw() {
  background(255,255,255);
  box1.drawSprites();
  box2.drawSprites();
  box3.drawSprites();
  box4.drawSprites();
  box5.drawSprites();
  box6.drawSprites();
  box7.drawSprites(); 
  box8.drawSprites();
  box9.drawSprites();
  box10.drawSprites();
  box11.drawSprites();
  box12.drawSprites();
  box13.drawSprites();
  box14.drawSprites();
  box15.drawSprites();
  box16.drawSprites();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  Slingshot.fly()
}

function keyPressed(){
  if(keyCode===32)
  slingshot.attach(ball.body);
}








