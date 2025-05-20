let mover;

class Mover {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0,0);
    this.topSpeed = 15;
  }
  update() {
    if (keyIsDown(UP_ARROW)) {
      this.acceleration.y = -0.05;
    }
    else if (keyIsDown(DOWN_ARROW)) {
      this.acceleration.y = 0.075;
    }
    else {
      this.acceleration.y += 0.0001; // deceleration when no "foot on the pedal"
    }

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topSpeed);

    // prevent ball from moving down
    if (this.velocity.y > 0) {
      this.velocity.y = 0;
    }

    this.position.add(this.velocity);
  }
  show() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    circle(this.position.x, this.position.y, 48);
  }
  checkEdges() {
    if (this.position.x > width) {
      this.position.x = 0;
    }
    else if (this.position.x < 0) {
      this.position.x = width;
    }
    if (this.position.y > height) {
      this.position.y = 0;
    }
    else if (this.position.y < 0) {
      this.position.y = height;
    }
  }
}

function setup() {
  createCanvas(800, 800);
  mover = new Mover();
}

function draw() {
  background(255);
  mover.update();
  mover.checkEdges();
  mover.show();
}
