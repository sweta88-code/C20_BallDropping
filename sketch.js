/*We are using physics engine in order to implement 
the laws of physics in our code.To do so we use and 
add the library matter.js in our code in the 
index.html file just like sketch.js*/


/*We will now import the needing elements fron the 
matter.js file*/

/*Our copies of the elements called namespacing*/
//Laws of physics is in Engine
const Engine = Matter.Engine;
//World is like the Solar System
const World = Matter.World;
//Bodies,Body defines the bodies inside
//Earth that follows the laws of Physics
//Or engine
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

/*Our objects that will have the properties 
of the above imported elements
let keyword is similar to var, the difference will 
be taught to you later*/
let engine;
let world;
var ball;
var ground;



function setup() {
  createCanvas(400,400);

/*As we create the engine, world is also created
which will obey the laws of this engine*/
  engine = Engine.create();
/*world is automatically present in engine*/
  world = engine.world;
  
 /*Before we create the bodies inside the World, we
 need to define their properties*/
   var ball_options = {
	//Bounciness of the ball
	//More the value, more 
	//bouncy is the ball
    restitution: 0.95,
	//Friction of then air
	//Less the value ,more
	//bouncy is the ball
    frictionAir:0.01
  }
   
   var ground_options ={
	  //Makes our ground Static
	  //or fixed at a position
     isStatic: true
   };
  
/*We are now creating the bodies, and giving it shape
just like createSprite*/
  ground = Bodies.rectangle(200,390,400,10,ground_options);
 //Adding the bodies to the World
 /*Remember one "World" can contain many "world"
 Consider World = Solar System and world = Earth*/
  World.add(world,ground);

/*Creating ball and adding it to the World of world*/ 
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  

  /*Modifies the location from which ellipses are 
  drawn by changing the way in which parameters.
  CENTER, in which the first two parameters are
  interpreted as the shape's center point's x 
  and y coordinates respectively,while the third 
  and fourth parameters are its width and height.*/
  ellipseMode(RADIUS);
  
  /*interprets the first two parameters as the shape's
  center point, while the third and fourth parameters
  are its width and height.*/
  rectMode(CENTER);
}


function draw() 
{
  background(51);
  
  /*Since draw() is a repeating function
  hence we want the engine to get constantly 
  updated with the latest changes as we want
  the changes to be updated in every frame */
  Engine.update(engine);
  
  
  
  
  
/*We need drawSprites() in order to draw the 
sprites we create with createSprite() similarly
to draw our bodies we need the relative functions*/

//ellipse() for a circle
  ellipse(ball.position.x,ball.position.y,20);

//rect() for the rectangle
  rect(ground.position.x,ground.position.y,400,20);
 


  
  
  
}

