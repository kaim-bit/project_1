"use strict";

function setup() {
    createCanvas(600, 600)
    console.log("go")
    drawEllipse(12, 12, 12, 12, 12, 120, 12);
    drawEllipse(133, 133, 13, 133, 2, 2, 2);
    drawEllipse(2, 133, 44, 65, 1, 8, 222);


}

function draw() {


}
function drawEllipse(x, y, w, h, r, g, b) {
    fill(r, g, b);
    ellipse(x, y, w, h)
}