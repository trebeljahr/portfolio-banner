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
  dots.forEach(dot => {
    dot.behaviors();
    if (dist(mouseX, mouseY, dot.pos.x, dot.pos.y) < 50) {
      dot.applyForce(
        createVector(-0.1 * (mouseX - dot.pos.x), -0.1 * (mouseY - dot.pos.y))
      );
    }
    dot.update();
    dot.show();
  });
}
function resize() {
  w = window.innerWidth;
  h = window.innerHeight;
  points = [];
  dots = [];
  createCanvas(w, h);
  points = font.textToPoints("DEVELOPER", w / 5.1, h / 2, 100, {
    sampleFactor: 0.15
  });
  points.forEach(p => {
    dot = new Dot(p.x, p.y);
    dots.push(dot);
  });
}
