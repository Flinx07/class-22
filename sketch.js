const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var world,engine,ground,ball;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world= engine.world;
  ground=Bodies.rectangle(400,390,800,10,{isStatic:true})
  World.add(world,ground)
  ball=Bodies.circle(200,200,50,{restitution:2})

  World.add(world,ball)
}

function draw() {
  background( "black");
  Engine.update(engine)
  rectMode(CENTER)  

 rect(ground.position.x,ground.position.y,800,10);
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,50,50)
}