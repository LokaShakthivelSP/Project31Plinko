const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particle=[];
var plinko=[];
var division=[];

function setup() {
  createCanvas(480,600);

  engine = Engine.create();
  world = engine.world;

  ground=new Rectangle(width/2,height-10,width,20);

  wallLeft=new Rectangle(0,height/2,3,height);
  wallRight=new Rectangle(480,height/2,3,height);

  for(var i=0;i<=width;i=i+80){
    division.push(new Rectangle(i,480,10,200));
  }

  for(var i=20;i<width;i+=40){
    plinko.push(new Plinko(i,70));
  }

  for(var j=10;j<width;j+=60){
    plinko.push(new Plinko(j,140));
  }

  for(var k=30;k<width;k+=40){
    plinko.push(new Plinko(k,210));
  }

  for(var l=20;l<width;l+=50){
    plinko.push(new Plinko(l,280));
  }

}

async function draw() {
  background("yellow"); 
  
  Engine.update(engine); 
  
  ground.display();
  wallLeft.display();
  wallRight.display();

  if(frameCount%60===0){
    particle.push(new Particle());
  }
  console.log("54");
 
  for(var i=0;i<particle.length;i++)                particle[i].display(); 
  console.log("56");
  
  for(var j=0;j<plinko.length;j++)    plinko[j].display();
  console.log("58");
  for(var k=0;k<division.length;k++)  division[k].display();

}