function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)
}

// Create some randomly positioned, filled and scaled circles
function draw() {
  const cx = random(0, width)
  const cy = random(0, height)
  const radius = random(1, 30)
  const r = random(255)
  const g = 0 
  const b = random(255)
  
  noStroke()
  fill(r, g, b)
  circle(cx, cy, radius)
}
