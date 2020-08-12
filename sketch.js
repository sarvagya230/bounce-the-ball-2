var dustbin_img
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;
var dustbinSprite;
var Paper;
function preload()
{
	dustbin_img = loadImage("dustbingreen (1).png") 
	paper_img=loadImage("paper (1).png")

}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	

	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	Paper=createSprite(200,450,40)
	Paper.addImage(paper_img);
	Paper.scale=0.3
	//dustbinObj.addImage("image",dustbin_img)
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(210,210,210)
  
  
  
  
 
 
 // a.x=dustbinObj.body.position.x
  //dustbinSprite.y=dustbinObj.body.position.y
  
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  
  Paper.x=paperObject.body.position.x
  Paper.y=paperObject.body.position.y
  drawSprites()
  imageMode(CENTER)
  image(dustbin_img,1200,570,200,200)

  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-95});
    
  	}
}





