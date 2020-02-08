function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  printI(50,50)
  printL(100,50)
  printO(150,50)
  printV(200,50)
  printE(250,50)
  printY(300,50)
  printO(350,50)
  printU(400,50)
}

function printI(x,y){
  line(x,y,x+40,y);
  line(x+20,y,x+20,y+100);
  line(x,y+100,x+40,y+100);
}

function printL(x,y){
  line(x,y,x,y+100);
  line(x,y+100,x+40,y+100);
}

function printO(x,y){
  line(x,y,x+40,y);
  line(x,y,x,y+100);
  line(x+40,y,x+40,y+100);
  line(x,y+100,x+40,y+100)
}

function printV(x,y){
  line(x,y,x+20,y+100);
  line(x+20,y+100,x+40,y)
}

function printE(x,y){
  line(x,y,x+40,y);
  line(x,y,x,y+100);
  line(x,y+50,x+20,y+50);
  line(x,y+100,x+40,y+100);
}

function printY(x,y){
  line(x,y,x+20,y+40);
  line(x+20,y+40,x+40,y);
  line(x+20,y+40,x+20,y+100);
}

function printU(x,y){
  line(x,y,x,y+100);
  line(x,y+100,x+40,y+100);
  line(x+40,y,x+40,y+100);
}
