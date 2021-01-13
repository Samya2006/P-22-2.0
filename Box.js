class Box{

    constructor(x,y,width,height){
        var Options={
            isStatic:true
        }
        this.bbody=Matter.Bodies.rectangle(x,y,200,10,Options);
        World.add(world,this.bbody);

        this.lbody=Matter.Bodies.rectangle(x-100,y-25,10,height,Options);
        World.add(world,this.lbody);
        this.h=height;

        this.rbody=Matter.Bodies.rectangle(x+100,y-25,10,height,Options);
        World.add(world,this.rbody);
        console.log(this.bbody.position);
    }
    display(){
        var bos=this.bbody.position;
        var los=this.lbody.position;
        var ros=this.rbody.position;
        fill("red");
        rectMode(CENTER);
        rect(bos.x,bos.y,200,10);
        rect(los.x,los.y,10,this.h);
        rect(ros.x,ros.y,10,this.h);
    }
}