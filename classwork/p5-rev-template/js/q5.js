"use strict";
let overlap
let counter = 0


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
    let radius = 50
    let a = 10
    while (i < counter) {
        push();
        fill(255, 255, 255, a);
        ellipse(c.x, c.y, radius);
        pop();
        i++;
        a += 10
        radius += 50
    }


    checkCollisionWithSquare()

    if (overlap) {
        s1.g = 190
    }
    else {
        s1.g = 130
    }

    noFill();

    strokeWeight(1);

    console.log(counter)



    displaySquare()
}

function displaySquare() {
    push()
    noStroke();
    fill(s1.r, s1.g, s1.b);
    rect(s1.x, s1.y, s1.w, s1.h);
    pop()
}

function checkCollisionWithSquare() {
    overlap = mouseX > s1.x && mouseX < s1.x + s1.w && mouseY > s1.y && mouseY < s1.y + s1.h



}

function mousePressed() {


    if (overlap && counter < 10)
        counter += 1
}
