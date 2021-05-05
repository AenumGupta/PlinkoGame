class Particles{
    constructor(x,y){
        this.color=color(random (0,255), random (0,255), random (0,255));
        this.body=Bodies.circle(x,y,10);
        this.x=x;
        this.y=y;
        this.r=10;
        World.add(world,this.body);
    }

    display(){
        var pos= this.body.position;
        fill (this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r);
    }
}