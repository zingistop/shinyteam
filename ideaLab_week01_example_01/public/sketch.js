/***********************************************************************
  IDEA9101 - IDEA LAB S1 2022 - WEEK 01

  Example of how to run p5.js locally on your computer.
  
  Code source: Simple Shapes p5js.org example.
  Url: https://p5js.org/examples/hello-p5-simple-shapes.html

  Author: Luke Hespanhol
  Date: February 2022
***********************************************************************/



function setup() {
	createCanvas(800, 300);
	rectMode(CENTER);
  angleMode(DEGREES);
}
 
function draw() {
	background(220);

  //声明变量
  var x = width/2;
  var y = height/2;
  var size = 50;

  //矩形
	fill(237, 34, 93);
  noStroke();
  rotate(5);
	rect(x, y, size, size);
	rect(x+50, y+50, size, size);
}