function setup(){
lienzo = createCanvas(800,500)
lienzo.center()
background("yellow")
lienzo.mouseReleased(clasificador)
}
function preload(){
modelo = ml5.imageClassifier("DoodleNet")
}
function draw(){
    poseX = random(width)
    poseY = random(height)
    radio = random(5, 15)
    fill(random(200), random(200), random(200))
    circle(poseX, poseY, radio)
strokeWeight(10)
stroke(red,blue,green)
if(mouseIsPressed){
line(pmouseX, pmouseY, mouseX, mouseY)
 red = Math.random()*255
 blue = Math.random()*255
 green = Math.random()*255

}
}
function clasificador(){
    modelo.classify(lienzo, gotResult)
}
function gotResult(error, results){
if(error){
console.log(error)
}
else{
    console.log(results)
    document.getElementById("etiqueta1").innerHTML = "El objeto es:" + results[0].label
    document.getElementById("etiqueta2").innerHTML = "Coincide en un:" + results[0].confidence
}
}
function Borrar(){
background("yellow")
}