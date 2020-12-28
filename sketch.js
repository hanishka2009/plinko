const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Wall=[]
var Plinko=[],Particle=[],wallheight=300
function preload()
{}
function setup() {
createCanvas(600, 700);
engine = Engine.create();
world = engine.world;
for (var k=20;k<=width;k=k+80) {
    Wall.push(new wall(k,height-wallheight/2-20,10,wallheight))
    }
    for(var j=40;j<=width;j=j+60){
        Plinko.push(new plinko(j,45,15))
    }
    for(var j=16;j<=width-10;j=j+60){
        Plinko.push(new plinko(j,145,15))
    }
    for(var j=40;j<=width-10;j=j+60){
        Plinko.push(new plinko(j,245,15))
    }
    for(var j=16;j<=width-10;j=j+60){
        Plinko.push(new plinko(j,345,15))
    }
ground1=new ground(200,685,1000,12)

Engine.run(engine);  
}
function draw() { 
    background(50);
    ground1.display();
   
    for(k=0;k<Wall.length;k++){
        Wall[k].display();
     } 
     if(frameCount%60===0){
        Particle.push(new particle(random(10,590),10,15))
        }
        for(var g=0;g<Particle.length;g++){
            Particle[g].display();
         } 
           
    for(j=0;j<Plinko.length;j++){
        Plinko[j].display()   
    }
    }
    