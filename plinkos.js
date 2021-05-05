class Plinkos{
    constructor(x,y){
        var options={
            isStatic:true
        }

        this.body=Bodies.circle(x,y,5,options);
        this.r=5;
        World.add(world,this.body);
    }
    display(){
        
        push ()
        //translate (this.body.position.x,this.body.position.y);
        fill ("white");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r);
        pop ();
    }
} 