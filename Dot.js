class Dot {
  constructor(x, y, w) {
    this.pos = createVector(random(width), random(height));
    this.target = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.r = w < 600 ? (w < 400 ? 1 : 3) : 5;
    this.maxspeed = 10;
    this.maxforce = 1;
  }
  show = (r, g, b) => {
    stroke(r, g, b);
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
