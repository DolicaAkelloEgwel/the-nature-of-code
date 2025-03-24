function setup() {
  createCanvas(640, 640);
  background(255);
  
  r_slider = createSlider(0, 255);
  r_slider.position(10, 10);
  r_slider.size(80);
  
  g_slider = createSlider(0, 255);
  g_slider.position(110, 10);
  g_slider.size(80);
  
  b_slider = createSlider(0, 255);
  b_slider.position(210, 10);
  b_slider.size(80);

}
function draw() {
  let col = 255;
  
  let x = randomGaussian(width / 2, width / 10);
  let y = randomGaussian(height / 2, height / 10);
  
  let r_sd = r_slider.value();
  let g_sd = g_slider.value();
  let b_sd = b_slider.value();
  
  let r = randomGaussian(col, r_sd);
  let g = randomGaussian(col, g_sd);
  let b = randomGaussian(col, b_sd);
  
  
  noStroke();
  fill(r, g, b);
  circle(x, y, 16);
}
