class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }
  show() {
    stroke(0);
    point(this.x, this.y);
  }
  step() {
    let r = random(1);
    let xstep = 0;
    let ystep = 0;
    
    if (r > 0.5)
    {
      if (mouseX > this.x)
      {
        xstep = 1;
      }
      else if (mouseX < this.x)
      {
        xstep = -1;
      }
      else
      {
        xstep = 0;
      }
      if (mouseY > this.y)
      {
        ystep = 1;
      }
      else if (mouseY < this.y)
      {
        ystep = -1;
      }
      else
      {
        ystep = 0;
      }
    }
    else
    {
      xstep = random(-1,1);
      ystep = random(-1,1);
    }
    
    this.x += xstep;
    this.y += ystep;
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
