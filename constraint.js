class Constraint{

constructor(a,b){
    var options={
        bodyA:a,
        bodyB:b,
        stiffness:0.03,
        length:5
        }

        this.body=Matter.Constraint.create(options);
        World.add(world,this.body);
}
display(){
    var posA=this.body.bodyA.position;
    var posB=this.body.bodyB.position;
    line(posA.x,posA.y,posB.x,posB.y);


}


}