class Rectangle {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
}

class Plinko{
    constructor(x,y){
      var options = {
        isStatic: true
      }
      this.body = Bodies.circle(x,y,10,options);
      this.x = x;
      this.y = y;
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("black");
      ellipse(pos.x, pos.y, 15,15);
    } 
}

class Particle{
    constructor(){
      var options={
          restitution:0.4
      }
      this.x=random(20,460);
      this.body = Bodies.circle(this.x,10,10,options);
      this.color=(random(0,255));
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      var angle=this.body.angle;

      push();

      translate(pos.x,pos.y);
      rotate(angle);
      
      fill(this.color);
      ellipseMode(RADIUS);
      ellipse(0, 0, 10,10);
      
      pop();
    }
}

