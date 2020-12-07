class rope{
    constructor(body1,body2,x,y){
        this.x=x
        this.y=y
        var option={
            bodyA:body1,
            bodyB:body2,

            pointB:{x:this.x,y:this.y}
           
        }
        World.add(world,this.rope)
        this.rope=Constraint.create(option)
        
       
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}