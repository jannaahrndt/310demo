let img1;
let img2;
let img3;
let img4;
let song;
//let dolly;

let ec;

var button1; //I listen. variable to create a button object
var button2; //I see 
var button3; //I make
var button4; //I go


function preload() {
  song = loadSound('assets/Isolated.mp3');
  dolly = loadSound('assets/Coat.mp3');
}

function setup() {
  createCanvas(700, 600);
  ec = createGraphics(700,600);

  img1 = loadImage('assets/Globe.png');
  img2 = loadImage('assets/ff1.jpg');
  img3 = loadImage('assets/nature.jpg');
  img4 = loadImage('assets/IU.jpg');

  button1 = createButton("TO LISTEN"); //button
  button1.position(308, 120); //x,y location of input

  button2 = createButton("TO SEE"); //button
  button2.position(318, 458); //x,y location of input

  button3 = createButton("TO ENJOY"); //button
  button3.position(520, 290); //x,y location of input

  button4 = createButton("I GO TO"); //button
  button4.position(110, 290); //x,y location of input

}


function draw() {
  background(10, 7, 94);


  fill(random(255), random(155), 255);
  triangle(315, 115, 349, 50, 385, 115); //top
  fill(random(255), random(155), random(255));
  triangle(316, 485, 350, 550, 386, 485); //bottom
  fill(random(100, 200), random(155), 155);
  triangle(535, 260, 535, 335, 606, 300); //right
  fill(random(255), random(155), 20);
  triangle(165, 260, 165, 335, 100, 300); //left

  if (mouseX > 500) {
    noStroke();
    fill(252, 247, 88);
    ellipse(width / 2, height / 2, 300);

  } else if (mouseX > 300) {
    image(img1, 169, 148, 360, 320);

    fill(252, 247, 88);
    rect(368, 300, 10, 10);
    rect(245, 240, 10, 10);

    fill(255);
    ellipse(257, 234, 6, 6);
    ellipse(265, 225, 6, 6);
    ellipse(275, 220, 6, 6);
    ellipse(285, 215, 6, 6);
    ellipse(295, 212, 6, 6);
    ellipse(305, 211, 6, 6);
    ellipse(315, 212, 6, 6);
    ellipse(325, 215, 6, 6);
    ellipse(335, 220, 6, 6);
    ellipse(345, 227, 6, 6);
    ellipse(353, 237, 6, 6);
    ellipse(360, 248, 6, 6);
    ellipse(365, 259, 6, 6);
    ellipse(367, 270, 6, 6);
    ellipse(368, 281, 6, 6);
    ellipse(369, 293, 6, 6);
  } else {
    fill(252, 247, 88);
    ellipse(width / 2, height / 2, 300);
    noStroke();
  }
  
  noStroke();
  fill(128, 10, 1);
  ellipse(mouseX, mouseY, 15, 15);
  
  
  button1.mousePressed(listening); //pressing the button object
  button2.mousePressed(seeing);
  button3.mousePressed(enjoying);
  button4.mousePressed(going); 
  image(ec,0,0);
  
}

//function mousePressed() {

//}

function listening() {
  dolly.setVolume(0.1);
  song.setVolume(0.1);

    if (song.isPlaying()) {
    //.isPlaying() returns a boolean
    song.stop();
    dolly.play();  
  } else {
    
    song.play();
    dolly.stop();
  }
  print('listen');
}

function seeing() {
  ec.image(img2, 200, 200, 350, 200);
  
  print('seeing');
}

function enjoying() {
  ec.image(img3, 50, 5, 200, 350);
  print('enjoy');
}

function going() {
  ec.image(img4, 0, 0, 200, 350);
  print('go');
}