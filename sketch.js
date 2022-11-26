let capture;
let microphone;

function setup() {
  
  let canvas = createCanvas(windowWidth,windowHeight);
  background(255);
  frameRate(8);
  capture=createCapture(VIDEO);
  capture.hide();
  
  canvas.mousePressed(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
  
}


function draw() {
  

  let micLevel = mic.getLevel();
  
  push();
  if(mouseIsPressed){
  stroke(200);
  strokeWeight(10);
  point(pmouseX,pmouseY);
  }
  pop();
  
  push();
  stroke(50,0,120,90);
  strokeWeight(random(5));
  strokeCap(ROUND);
  image(capture,pmouseX-200,pmouseY-200,random(100,102),random(150,152));
  fill(100,80);
  rect(pmouseX-200,pmouseY-200,random(100,102),random(150,152));
  pop();
  
  push();
  noFill();
  stroke(0,random(100)-100*micLevel,0,50);
  ellipse(mouseX,mouseY,random(10,20),random(10,20));
  pop();
  
  push();
  stroke(25,0,50);
  fill(random(150),85);
  rect(random(width/3),random(height/2),random(20),random(20));   
  pop();
  
  push();
  fill(200);
  text('Randomness',width/2+300,height/2);
  fill(50);
  text('gone',100,height-200);
  text('so',width-100,30);
  text('awry',random(49,50),random(298,300));
  pop();
  
  push();
  for(i=0;i<9;i++){
    stroke(0);
    fill(120,100,0);
    ellipse(width/4+i*25+50*micLevel,height/4,10,30);
  }
  
    for(i=0;i<9;i++){
    stroke(0);
    fill(120,100,0);
    ellipse(3*width/4+i*25,(3*height/4)+70*micLevel,10,30);
  }
  
    for(i=0;i<9;i++){
    stroke(0);
    fill(50,0,120,90);
    ellipse(5*width/6+70*micLevel,(height/5)+70*micLevel+i*25,30,10);
  }
  pop();
}