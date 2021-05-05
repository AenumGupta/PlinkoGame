class Divisions{
    constructor(x,y){
        var options = {
            isStatic:true
        }

        this.body=Bodies.rectangle(x,y,10,150,options);
        this.w=10
        this.h=150
        World.add(world,this.body);
    }

    display (){
    var pos= this.body.position;
    rectMode(CENTER);
    fill ("white");
    rect(pos.x,pos.y,10,150)

    }
}