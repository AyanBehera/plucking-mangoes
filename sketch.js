
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango, boy, tree, ground, stone;
var mangoImg, boyImg, treeImg, stoneImg;

function preload()
{
 mangoImg = loadImage("mango.png");
 boyImg = loadImage("boy.png");
 treeImg = loadImage("tree.png");
 stoneImg = loadImage("stone.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   mango1 = new Mango();
   mango2 = new Mango();
   mango3 = new Mango();
   mango4 = new Mango();
   mango5 = new Mango();
   mango6 = new Mango();
   mango7 = new Mango();
   mango8 = new Mango();
   mango9 = new Mango();
   mango10 = new Mango();

   tree = new Tree();
   
   stone = new stone();

   ground = new ground();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  tree.display();
  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  
  drawSprites();
 
}



