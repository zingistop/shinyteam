/***********************************************************************
  IDEA9101 - IDEA LAB S1 2022 - WEEK 01

  Example of how to run p5.js locally on your computer.
  
  Code source: Simple Shapes p5js.org example.
  Url: https://p5js.org/examples/hello-p5-simple-shapes.html

  Author: Luke Hespanhol
  Date: February 2022
***********************************************************************/

function setup() {
  // Create the canvas
  createCanvas(windowWidth, windowHeight);
  background(200);
  
  // Set colors
  fill(204, 101, 192, 127);
  stroke(127, 63, 120);

  // A rectangle
  rect(40, 120, 120, 40);
  // An ellipse
  ellipse(240, 240, 80, 80);
  // A triangle
  triangle(300, 100, 320, 100, 310, 80);

  // A design for a simple flower
  push();
  translate(580, 200);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }
  pop();
}

function draw() {
	fill(255, 0, 0, 10);

	if (mouseIsPressed || (touches.length > 0)) {
		var x = mouseX;
		var y = mouseY;
		if (touches.length > 0) {
			x = touches[0].x;
			y = touches[0].y;
		}
		ellipse(x, y, 50, 50);
	}
}