var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var  border1sprite,border2sprite,border3sprite;
var	border1body,border2body,border3body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-40, width,10);
	groundSprite.shapeColor=color(255)

	border1sprite=createSprite(400,645,200,20);
	border2sprite=createSprite(500,605,20,100);
	border3sprite=createSprite(300,605,20,100);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	border1body=Bodies.rectangle(400, 645, 200, 20 , {isStatic:true} );
	World.add(world,border1body);
	border2body=Bodies.rectangle(500, 605, 20, 100 , {isStatic:true} );
	World.add(world,border2body);
	border3body=Bodies.rectangle(400, 605, 20, 100 , {isStatic:true} );
	World.add(world,border3body);

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    //matter.Body.restitution(0);
  }
  if(packageSprite.y>690){
	Matter.Body.setStatic(packageBody,true);
  }
}



