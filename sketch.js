var garden, gardenImg;
var cat, catImg, catImg2, catImg3;
var mouse, mouseImg, mouseImg2, mouseImg3;

function preload() {
    gardenImg = loadImage("garden.png");
    catImg = loadImage("cat1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    catImg3 = loadImage("cat4.png");
    mouseImg = loadImage("mouse1.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
    mouseImg3 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(900,600);
    
    garden = createSprite(500,400);
    garden.addImage(gardenImg);

    cat = createSprite(700,500,30,20);
    cat.addImage(catImg);
    cat.scale = 0.15;

    mouse = createSprite(300,500,15,20);
    mouse.addImage(mouseImg);
    mouse.scale = 0.12;

    mouse.addAnimation("mouseTeasing",mouseImg2);
    cat.addAnimation("catWalking",catImg2);

    mouse.addImage("mouseHappy",mouseImg3);
    cat.addImage("catHappy",catImg3);
}

function draw() {
    background(255);
    
    if (cat.x-mouse.x < (cat.width-mouse.width)/2) {
        cat.velocityX = 0;
        cat.changeAnimation("catHappy");
        mouse.changeAnimation("mouseHappy");
        cat.x = 400;
    }
    
    drawSprites();
}

function keyPressed(){
    if (keyCode === RIGHT_ARROW) {
        mouse.changeAnimation("mouseTeasing");
    }

    if (keyCode === LEFT_ARROW) {
        cat.changeAnimation("catWalking");
        cat.velocityX = -2;
    }
}