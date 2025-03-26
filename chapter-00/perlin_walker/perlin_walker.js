class Walker {
  constructor() {
    this.t = 0;
    this.x = width / 2;
    this.y = height / 2;
  }
  show() {
    fill(255, 255, 0);
    circle(this.x, this.y, 50);
  }
  step() {
    let xn = noise(this.t);
    let yn = noise(this.t + 100);
    
    this.x = map(xn, 0, 1, 0, width);
    this.y = map(yn, 0, 1, 0, height);
    
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
