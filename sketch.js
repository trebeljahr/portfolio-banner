let w = window.innerWidth;
let h = window.innerHeight;
let dot;
let interval;
let font;
let points;
let dots = [];
function preload() {
  font = loadFont("./assets/Avenir.otf");
}
function setup() {
  window.addEventListener("resize", resize);
  resize();
}
function draw() {
  background(51);
  fill(255);
  dots.forEach((dot, index) => {
    dot.behaviors();
    if (dist(mouseX, mouseY, dot.pos.x, dot.pos.y) < 50) {
      dot.applyForce(
        createVector(-0.1 * (mouseX - dot.pos.x), -0.1 * (mouseY - dot.pos.y))
      );
    }
    dot.update();
    if (index === dots.length - 1) {
      dot.show(255, 0, 0);
    } else {
      dot.show(255, 255, 255);
    }
  });
}
function resize() {
  w = window.innerWidth;
  h = window.innerHeight;
  points = [];
  dots = [];
  createCanvas(w, h);
  points = font.textToPoints("DEVELOPER", w / 6.5, 200, w / 8, {
    sampleFactor: map(w, 0, w * 2, 0, 0.2)
  });
  points.forEach(p => {
    dot = new Dot(p.x, p.y, w);
    dots.push(dot);
  });
}
