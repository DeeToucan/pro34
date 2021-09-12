const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boxRow = [];
var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,400,250);
  rope = new Rope(hero.body, { x: 500, y: 350 });
  monster = new Monster(1100,550,300);

  for (var i=590; i>130; i=i-70){
    boxRow.push(new Box(650,i,70,70));
  }

  for (var i=590; i>230; i=i-70){
    boxRow.push(new Box(750,i,70,70));
  }

  for (var i=590; i>30; i=i-70){
    boxRow.push(new Box(850,i,70,70));
  }
  for (var i=590; i>330; i=i-70){
    boxRow.push(new Box(950,i,70,70));
  }
  // box1 = new Box(600, 100, 70, 70);
  // box2 = new Box(900, 100, 70, 70);
  // box3 = new Box(900, 100, 70, 70);
  // box4 = new Box(900, 100, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  // box1.display();
  // box2.display();
  // box3.display();
  // box4.display()

  hero.display();
  rope.display();
  monster.display();

  for (var i=0; i<boxRow.length; i++){
    boxRow[i].display();
  }
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  rope.fly();
}

