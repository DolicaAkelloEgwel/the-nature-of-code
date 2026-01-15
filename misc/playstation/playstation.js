// Stolen from Reddit: https://www.reddit.com/r/processing/comments/1q8ejdo/ps3_homescreen_background/

let ranges = 100;
let paint;
let n;
let y;

function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
  background(0);
}

function draw() {
  background(51,31,0);
  noFill();
  strokeWeight(2);

  for (let i = 0; i < ranges; i++) {
    paint = map(i, 0, ranges, 0, 255);
    stroke(255,paint);
    
    beginShape();
    for (let x = -width; x < width; x += 20) {
      n = noise(x * 0.001, i * 0.01, frameCount * 0.002);
      y = map(n, 0, 1, 0, height) - height/2;
      vertex(x, y);
    }
    endShape();
  }
}
