
function setup() {
  var canvas = createCanvas(350,700);
  canvas.parent('sketch-holder');
  angleMode(DEGREES);
  strokeCap(SQUARE);
}

function draw() {
  background('cadetblue');
  translate(175,175);
  let hrs = hour();
  let mins = minute();
  let scs = second();

// * Analog Style Watch *

  fill('navajowhite');
  ellipse(0, 0, 330);
  fill('#323232');
  ellipse(0,0,300);

  noFill();

  let mapScs = map(scs, 0, 60, 0, 360);
  stroke(18, 143, 66);

  push();
  strokeCap(ROUND);
  strokeWeight(3);
  rotate(mapScs -90);
  line(0,0,70, 0);
  pop();

  let mapMins = map(mins, 0, 60, 0, 360);
  stroke(248, 228, 51);

  push();
  strokeCap(ROUND);
  strokeWeight(6);
  rotate(mapMins - 90);
  line(0, 0, 100, 0);
  pop();
  
  let mapHrs = map((hrs % 12), 0, 12, 0, 360);
  stroke(208, 19, 28);

  push();
  strokeCap(ROUND);
  strokeWeight(10);
  rotate(mapHrs - 90);
  line(0, 0, 80, 0);
  pop();

  stroke('navajowhite');
  strokeWeight(20);
  point(0,0,10);

  noStroke();
  fill('navajowhite');
  text('XII', -10, -130);
  text('VI', -6, 140);
  text('III', 130, 5);
  text('IX', -140, 5);


// * Arc Style Watch *

  push();
  strokeWeight(10);
  strokeCap(ROUND);
  noFill();

  stroke(18, 143, 66);
  arc(0, 365, 300, 300, -90, mapScs - 90);
  
  stroke(248, 228, 51);
  arc(0, 365, 280, 280, -90, mapMins - 90);

  stroke(208, 19, 28);
  arc(0, 365, 260, 260, -90, mapHrs - 90);
  pop();

  push();
  noStroke();
  textSize(47);
  if (hrs < 10) hrs = '0' + hrs;
  if (mins < 10) mins = '0' + mins;
  if (scs < 10) scs = '0' + scs;

  fill(208, 19, 28);
  text(hrs + ':', -100, 375);

  fill(248, 228, 51);
  text(mins + ':', -30, 375);
  
  fill(18, 143, 66);
  text(scs, 40, 375);
  pop();
}
