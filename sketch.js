let w = window.innerWidth;
let h = window.innerHeight;
let dot;
let interval;
let font;
let points;
let points2;
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
    dot.show(249, 220, 92);
  });
}
function resize() {
  w = window.innerWidth;
  h = window.innerHeight;
  points = [];
  points2 = [];
  dots = [];
  createCanvas(w, h);
  points = font.textToPoints("Develop", w / 6.5, h - 600, w / 8, {
    sampleFactor: w < 600 ? 0.5 : 0.25
  });
  points2 = font.textToPoints("your ideas", w / 6.5, h - 400, w / 8, {
    sampleFactor: w < 600 ? 0.5 : 0.25
  });

  points.forEach(p => {
    dot = new Dot(p.x, p.y, w);
    dots.push(dot);
  });
  points2.forEach(p => {
    dot = new Dot(p.x, p.y, w);
    dots.push(dot);
  });
}
