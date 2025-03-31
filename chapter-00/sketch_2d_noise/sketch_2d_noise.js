function setup() {
  createCanvas(windowWidth, windowHeight);
  loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let bright = random(255);
      set(x, y, bright);
    }
  }
  updatePixels();
}


function draw() {
}
