class wall {
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            friction:3
            
        }
       this.body= Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       World.add(world,this.body);
       
    }
    display(){
        push();
        rectMode(CENTER)
        fill(220,220,220)
        strokeWeight(3)
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
        
    }
}