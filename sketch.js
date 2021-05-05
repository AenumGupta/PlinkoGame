const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

 var divisionHeight=300
 var particles =[]
 var plinkos =[]
 var divisions =[];

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(400,390,800,20);
  boundary1=new Ground(5,200,10,400);
  boundary2=new Ground(795,200,10,400);

  for(var i=100; i<=width; i=i+100){
    divisions.push(new Divisions(i,305))
  }
divisions.pop();
  for(var j=40; j<=width ;j=j+50){
    plinkos.push(new Plinkos(j,30));
  }

  for(var j=15; j<=width ;j=j+50){
    plinkos.push(new Plinkos(j,80));
  }

  for(var j=40; j<=width ;j=j+50){
    plinkos.push(new Plinkos(j,130));
  }

  for(var j=15; j<=width ;j=j+50){
    plinkos.push(new Plinkos(j,180));
  }
 
  
  
}

function draw() {
  background(0);
Engine.update(engine);

boundary1.display();
boundary2.display();
  ground.display();
  

  for(var i=0; i<divisions.length;i++){
    divisions[i].display();
  }
  console.log(frameCount);
  console.log(plinkos.length);
  
  for(var j=0; j<plinkos.length; j++){
    plinkos[j].display();
    
  }
  if(frameCount%60===0){
    particles.push(new Particles(random(50, 750),10));
  }
  console.log(particles.length); 

  for(var j=0; j<particles.length; j++){
      particles[j].display();
    }
  
 
  
  //drawSprites();
}