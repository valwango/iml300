/* 
Face sketch adapted from Kayla Adams:
https://editor.p5js.org/kaylaada/sketches/HX8uZtynj
 */

document.body.insertAdjacentHTML('afterbegin', '<div id="p5Canvas"></div>') //Embed in body

var video;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  //canvas.parent('p5Canvas');
  createCanvas(windowWidth,windowHeight);
  video = createCapture(VIDEO);
  video.size(windowWidth,windowHeight);
  video.hide();
}

function draw() {
  background(220);
  image(video,0,0);
    tint(255,127);
}



//function setup() {
  //let canvas = createCanvas(windowWidth, windowHeight);
  //canvas.parent('p5Canvas');
//}

//function draw() {
  //clear() //Make the background transparent

/* try the line of code below */
//  translate(mouseX, mouseY); //Make the face move with mouse

/* then try the line of code below */
  // translate(mouseX-300, mouseY-240); //Make the face move with mouse
