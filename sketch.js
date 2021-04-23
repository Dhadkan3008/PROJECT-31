var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight=300;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k,700,10,200));
  }



  //create 1st row of plinko objects
  for (var j = 0; j <=width; j=j+40) { 
    plinkos.push(new Plinko(j,100));
  }

  //create 2nd row of plinko objects
  for (var j = 0; j <=width-10; j=j+40) 
  {
    plinkos.push(new Plinko(j,200));
  }

  //create 3rd row of plinko objects
  for (var j = 0; j <=width-10; j=j+40) 
  {
    plinkos.push(new Plinko(j,300));
  }
  
  //create 4th row of plinko objects
  for (var j = 0; j <=width-10; j=j+40) 
  {
    plinkos.push(new Plinko(j,400));
  }

  //create particle objects
  
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();

  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
    console.log(frameCount);
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  //display the paricles 
  for(var j=0;j<particles.length;j++){
    particles[j].display();

  }
}