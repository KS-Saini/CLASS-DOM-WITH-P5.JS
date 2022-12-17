var canvas;
function setup(){
createCanvas(200,200);
//THIS IS P5.JS DOM CREATE ELEMENT
greeting = createElement("h2");
//MAKING A CLASS ELEMENT TO GIVE CSS SYLE 
greeting.class("greeting");
//TO SHOW CSS USE FOR THAT AND KULDEEP SUPPOSE IS CALLING
greeting.html("RAM RAM SAINI JI")
}

function draw(){
    background(0);
}