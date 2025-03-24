class GaussianWalker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.prev_x = 0;
    this.prev_y = 0;
  }
  show() {
    stroke(0);
    line(this.prev_x, this.prev_y, this.x, this.y);
  }
  acceptreject() {
    while (true)
    {
      let r1 = random(1);
      if (random(1) > r1 * r1)
      {
        return r1 * 10;    
      }
    }
  }
  step() {

    let xstep = random(-1,1) * this.acceptreject();
    let ystep = random(-1,1) * this.acceptreject();
    
    this.prev_x = this.x;
    this.prev_y = this.y;
    
    this.x += xstep;
    this.y += ystep;
  }
}
function setup() {
  createCanvas(640, 640);
  walker = new GaussianWalker();
  background(255);
}
function draw() {
  walker.step();
  walker.show();
}
