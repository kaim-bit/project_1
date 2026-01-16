"use strict";

function setup() {
    console.log("go")
    createCanvas(640, 480);
    background(120);
}

function draw() {

    push();
    fill("red");
    ellipse(10, 13, 50, 30);
    pop();
    push();
    fill("blue");
    ellipse(100, 110, 50, 30);
    pop();
    push();
    fill("black");
    ellipse(50, 100, 50, 30);
    pop();

}
