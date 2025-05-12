class Walker {
  constructor() {
    this.position = createVector(width / 2, height / 2);
  }
  show() {
    stroke(0);
    point(this.position.x, this.position.y);
  }
  step() {
    let xstep = random(-1, 1);
    let ystep = random(-1, 1);

    this.position.x += xstep;
    this.position.y += ystep;

    }
}
function setup() {
  createCanvas(640, 640);
  walker = new Walker();
  background(255);
}
function draw() {
  walker.step();
  walker.show();
}
