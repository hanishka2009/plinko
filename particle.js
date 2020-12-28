class particle{
    constructor(x,y,r){
    var options={
        
restitution:0.3,
}
this.r=r
this.body=Bodies.circle(x,y,r,options)
this.colour=color(random(0,255),random(0,255),random(0,255))
World.add(world,this.body) 
}
display(){
var pos=this.body.position;
var angle=this.body.angle;
push()
translate(pos.x,pos.y)
ellipseMode(RADIUS);
rotate(angle)

fill(this.colour)
ellipse(0,0,this.r);
pop()   
    }//
}