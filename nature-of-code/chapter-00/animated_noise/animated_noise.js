function setup() {
  createCanvas(100, 100);
}


function draw() {
  let xstep = 0.01;
  let ystep = 0.01;
  let zstep = 0.02;
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let bright = map(noise(x * xstep, y * ystep, frameCount * zstep), 0, 1, 0, 255);
      stroke(bright);
      point(x, y);
    }
  }
}
