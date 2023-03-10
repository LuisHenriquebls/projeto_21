
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var bola; 
var ground; 
var Ltrash;
var Rtrash; 

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_option={
		isStatic:false,
		restitution:0.3,
		friction:0, 
		density:1.2
	}
	ground = new Ground(width/2,670,width,20);
	Ltrash = new Ground(1100,600,20, 120);
	Rtrash = new Ground(1350,600,20,120); 
	bola = Bodies.circle(200,100,10, ball_option);
	World.add(world, bola); 




	Engine.run(engine); //desenhar no centro
	rectMode(CENTER);	// ||
	ellipseMode(RADIUS); 
  
}


function draw() {

  background(0);
  ground.show();
  Ltrash.show();
  Rtrash.show(); 
  ellipse(bola.position.x, bola.position.y,20);
  Engine.update(engine); 
	
 
}
function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bola,bola.position, {x:10.5, y:-10.5})
	}
}



