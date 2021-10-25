
var   purple ,blue ,pink ,yellow ,green ,purpleimg,blueimg,greenimg,yellowimg,pinkimg;

function preload(){
purpleimg=loadImage("purple.png")
blueimg=loadImage("blue3.png")
greenimg=loadImage("green.png")
pinkimg=loadImage("pink.png")
yellowimg=loadImage("yellow.png")

}



function setup() {
  createCanvas(600, 600);
  
  //creating background
purple =createSprite(50,50,30,30)
pink =createSprite(40,180,30,30)
blue =createSprite(60,150,30,30)
green =createSprite(70,90,30,30)
yellow =createSprite(90,130,30,30)

purple.addImage(purpleimg)
blue.addImage(blueimg)
green.addImage(greenimg)
pink.addImage(pinkimg)
yellow.addImage(yellowimg)
  
 purple.scale=0.1
 yellow.scale=0.1
 green.scale=0.1
 blue.scale=0.1
 pink.scale=0.1

}

function draw() {
background("lightblue");

 drawSprites()
}
