
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	roof = new Roof(400,150,60,12);

	

}


function draw() {
  background('pink');
  Engine.update(engine);
  roof.display();
  
	
 
}



