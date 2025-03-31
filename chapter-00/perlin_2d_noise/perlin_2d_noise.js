function setup() {
  createCanvas(windowWidth, windowHeight);

  loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let bright = map(noise(x * 0.01, y * 0.01), 0, 1, 0, 255);
      set(x, y, floor(bright));
    }
  }
  updatePixels();
}


function draw() {
}
