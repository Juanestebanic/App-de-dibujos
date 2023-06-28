var red = 255
var green = 255
var blue = 255

function setup(){
lienzo = createCanvas(800,500)
background("blue")
}
function draw(){
background(red, green, blue)
}
function mouseClicked()
{
    red = Math.random()*255
    blue = Math.random()*255
    green = Math.random()*255
    draw()
}