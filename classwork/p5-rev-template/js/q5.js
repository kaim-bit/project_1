"use strict";
let overlap
let counter = 0
let radius = 75

const s1 = {
    x: 100,
    y: 100,
    w: 75,
    h: 75,
    r: 255,
    g: 130,
    b: 0
};
const s2 = {
    x: 200,
    y: 100,
    s: 75,
    r: 255,
    g: 90,
    b: 0
};
const c = {
    x: 0,
    y: 0

};

function setup() {
    createCanvas(1000, 1000)
    console.log("go")
    c.x = width / 2
    c.y = height / 2
}

function draw() {
    background(100)
    let i = 0
    while (i < counter) {
        drawCircle()
        i++;
    }


    checkCollisionWithSquare()

    if (overlap) {
        s1.g = 190
    }
    else {
        s1.g = 130
    }

    noFill()
    stroke("green")
    strokeWeight(2)

    console.log(counter)

    push()
    noStroke()
    fill(100, 100, 100)
    ellipse(width / 2, height / 2, radius)
    pop()

    displaySquare()
}

function displaySquare() {
    push()
    noStroke()
    fill(s1.r, s1.g, s1.b)
    rect(s1.x, s1.y, s1.w, s1.h)
    pop()
}

function checkCollisionWithSquare() {
    overlap = mouseX > s1.x && mouseX < s1.x + s1.w && mouseY > s1.y && mouseY < s1.y + s1.h



}

function mousePressed() {
    flib -= 20

    if (overlap)
        counter += 1
}
function drawCircle() {
    push();
    ellipse(c.x, c.y, c.s)
    pop();
}