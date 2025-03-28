let MAX_STEP = 50;

class Walker {
  constructor() {
    this.t = 0;
    this.x = width / 2;
    this.y = height / 2;
    this.dx = 0;
    this.dy = 0;
  }
  show() {
    fill(255, 255, 0);
    line(this.prev_x, this.prev_y, this.x, this.y);
  }
  step() {

      let radius = map(noise(this.t), 0, 1, 0, MAX_STEP);
      let angle = random(TWO_PI);

      this.dx = radius * cos(angle);
      this.dy = radius * sin(angle);

      this.prev_x = this.x;
      this.prev_y = this.y;

      this.x += this.dx;
      this.y += this.dy;

      this.t += 0.01;
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
