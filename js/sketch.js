
function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
  strokeCap(SQUARE);
}

function draw() {
  background('cadetblue');
  translate(200,200);
  let hrs = hour();
  let mins = minute();
  let scs = second();


  fill('navajowhite');
  strokeWeight(10);
  ellipse(0, 0, 320);
  fill('#323232');
  ellipse(0,0,300);

  noFill();

  let mapScs = map(scs, 0, 60, 0, 360);
  stroke(18,143,66);
  //arc(0,0,300,300,-90,mapScs-90);
  
  push();
  strokeCap(ROUND);
  strokeWeight(3);
  rotate(mapScs -90);
  line(0,0,70, 0);
  pop();

  let mapMins = map(mins, 0, 60, 0, 360);
  stroke(248,228,51);
  //arc(0,0,280,280,-90,mapMins-90);

  push();
  strokeCap(ROUND);
  strokeWeight(6);
  rotate(mapMins - 90);
  line(0, 0, 100, 0);
  pop();
  
  let mapHrs = map((hrs % 12), 0, 12, 0, 360);
  stroke(208,19,28);
  //arc(0,0,260,260,-90,mapHrs-90);

  push();
  strokeCap(ROUND);
  rotate(mapHrs - 90);
  line(0, 0, 80, 0);
  pop();

  strokeWeight(20);
  stroke('navajowhite');
  point(0,0,10);
  
  fill(255);
  noStroke();
  if(hrs < 10) hrs = '0' + hrs;
  if(mins < 10) mins = '0' + mins;
  if(scs < 10) scs = '0' + scs;
  text(hrs + ':' + mins + ':' + scs, -190, 190);

  fill('navajowhite');
  text('XII', -10, -130);
  text('VI', -6, 140);
  text('III', 130, 5);
  text('IX', -140, 5);
}
