noseX = 0;
noseY = 0;
function preload() {
clown_nose = loadImage('https://i.postimg.cc/CLBt2gr2/43d55ca7266bb03e9336d01ab59a0f64.jpghttps://i.postimg.cc/QCksPKbj/43d55ca7266bb03e9336d01ab59a0f64-removebg-preview.png')
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300 , 300);
  video.hide();
  poseNet = ml5.poseNet(video , modelLoaded);
  poseNet.on('pose', gotPoses);
}
  function modelLoaded() {
    console.log('poseNet está inicializado');
  }
  function gotPoses(results){
    if(results.length>0)
    {
      console.log(results);
      noseX = results[0].pose.nose.x -10;
      noseY = results[0].pose.nose.y -10;
      console.log("nose x =" + noseX);
      console.log("nose y =" + noseY);
    }
  }

function draw() {
  image(video, 0, 0, 300, 300);
  fill(16, 227, 216);
  stroke(204, 24, 183);
  circle(noseX, noseY, 20);
  image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot(){    
  save('myFilterImage.png');
}