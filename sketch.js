
Engine = Matter.Engine;
World = Matter.World;
Bodies = Matter.Bodies;
Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

    var ground_options={
       isStatic : true
     }

    var holder_options={
      isStatic: true
    }

    ground = Bodies.rectangle(200,330,400,20,ground_options);
    World.add(world,ground);

    holder = Bodies.rectangle(200,50,200,20,holder_options);
    World.add(world,holder,ground);

    var ball_options = {
        isStatic: false,
        restitution: 0,
        airfriction : 0.1
    }

    ball  = Bodies.circle(220,200,10,ball_options);
    World.add(world,ball);

    var options = {
        bodyA : ball,
        bodyB : holder,
        length : 200
    }
    var string = Constraint.create(options);
    World.add(world,string);
    }

function draw() {
  background("white"); 
  Engine.update(engine);
  
fill ("black");
rectMode(CENTER);
rect(holder.position.x,holder.position.y,200,10);

fill("brown");
strokeWeight(3);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);


fill("red");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20);

strokeWeight(8);
stroke("black");
line(ball.position.x,ball.position.y,holder.position.x,holder.position.y)

if(keyCode===32){
ball.position.y = mouseY;
ball.position.x = mouseX;
}

else if (keyCode === ENTER){
ball.position.x = 200;

}


}

function mouseDragged() {
    ball.position.y = mouseY;
    ball.position.x = mouseX;

}

