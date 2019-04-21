class Dot {
  constructor(x, y) {
    this.pos = createVector(random(width), random(height));
    this.target = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.r = 6;
    this.maxspeed = 10;
    this.maxforce = 1;
  }
  show = () => {
    stroke(255);
    strokeWeight(this.r);
    point(this.pos.x, this.pos.y);
  };
  applyForce = f => {
    this.acc.add(f);
  };
  update = () => {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
  };
  behaviors() {
    var arrive = this.arrive(this.target);

    arrive.mult(0.5);

    this.applyForce(arrive);
  }
  arrive(target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    var speed = this.maxspeed;
    if (d < 100) {
      speed = map(d, 0, 100, 0, this.maxspeed);
    }
    desired.setMag(speed);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  }
}
