function setup() {
  createCanvas(1000, 800);
   background("purple")
}

function draw() {
  
  fill ("#D948C6");
  stroke ("lightblue");
  
  if (mouseIsPressed){
    circle(mouseX, mouseY, 20, 35);
  }
}
