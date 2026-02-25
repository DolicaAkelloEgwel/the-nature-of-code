let t = 0;
let r = 0;
let g = 0;
let b = 0;

function setup() {
  createCanvas(640, 640);
  background(255);
}
function draw() {
  let xn = noise(t);
  let yn = noise(t + 10);

  fill(255, 255, 0);
  circle(640 * xn, 640 * yn, 50);
  t += 0.025;
}
