// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
PoseNet example using p5.js
=== */

let video;
let poseNet;
let poses = [];



function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);


  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function draw() {
  translate(video.width, 0);
  scale(-1, 1);
  image(video, 0, 0, width, height);

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
  drawSkeleton();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints()  {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        fill(255, 0, 0);
        noStroke();
        textSize(18);
        text(j, keypoint.position.x, keypoint.position.y);
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);

        //chest - 5,6,11,12
        fill(107, 53, 17);
        beginShape();
        strokeWeight(200);
        vertex(pose.keypoints[5].position.x, pose.keypoints[5].position.y);
        vertex(pose.keypoints[6].position.x, pose.keypoints[6].position.y);
        vertex(pose.keypoints[12].position.x, pose.keypoints[12].position.y);
        vertex(pose.keypoints[11].position.x, pose.keypoints[11].position.y);
        endShape(CLOSE);

      //face leaves - 0 center, 1/3 left, 2/4 right
        strokeWeight(0);
        fill(25, 105, 25);
        ellipse(pose.keypoints[0].position.x, pose.keypoints[0].position.y, 250,250);

        r = 75;
        ellipse(pose.keypoints[0].position.x-r, pose.keypoints[0].position.y-r, 200,200);
        ellipse(pose.keypoints[0].position.x+r, pose.keypoints[0].position.y+r, 200,200);
        ellipse(pose.keypoints[0].position.x-r, pose.keypoints[0].position.y+r, 200,200);
        ellipse(pose.keypoints[0].position.x+r, pose.keypoints[0].position.y-r, 200,200);

        r = 125;
        ellipse(pose.keypoints[1].position.x-r, pose.keypoints[1].position.y, 50, 50);
        ellipse(pose.keypoints[1].position.x+r, pose.keypoints[1].position.y, 50, 50);
        ellipse(pose.keypoints[1].position.x, pose.keypoints[1].position.y-r, 50, 50);
        ellipse(pose.keypoints[1].position.x, pose.keypoints[1].position.y+r, 50, 50);

        ellipse(pose.keypoints[2].position.x-r, pose.keypoints[2].position.y, 50, 50);
        ellipse(pose.keypoints[2].position.x+r, pose.keypoints[2].position.y, 50, 50);
        ellipse(pose.keypoints[2].position.x, pose.keypoints[2].position.y-r, 50, 50);
        ellipse(pose.keypoints[2].position.x, pose.keypoints[2].position.y+r, 50, 50);

        fill(76, 125, 76);
        r = 50;
        ellipse(pose.keypoints[0].position.x-r, pose.keypoints[0].position.y, 100, 100);
        ellipse(pose.keypoints[0].position.x+r, pose.keypoints[0].position.y, 100, 100);
        ellipse(pose.keypoints[0].position.x, pose.keypoints[0].position.y-r, 100, 100);
        ellipse(pose.keypoints[0].position.x, pose.keypoints[0].position.y+r, 100, 100);

        fill(76, 125, 76);
        r = 100;
        ellipse(pose.keypoints[3].position.x-r, pose.keypoints[3].position.y, 100, 100);
        ellipse(pose.keypoints[3].position.x+r, pose.keypoints[3].position.y, 100, 100);
        ellipse(pose.keypoints[3].position.x, pose.keypoints[3].position.y-r, 100, 100);
        ellipse(pose.keypoints[3].position.x, pose.keypoints[3].position.y+r, 100, 100);

        ellipse(pose.keypoints[4].position.x-r, pose.keypoints[4].position.y, 100, 100);
        ellipse(pose.keypoints[4].position.x+r, pose.keypoints[4].position.y, 100, 100);
        ellipse(pose.keypoints[4].position.x, pose.keypoints[4].position.y-r, 100, 100);
        ellipse(pose.keypoints[4].position.x, pose.keypoints[4].position.y+r, 100, 100);

        fill(62, 194, 88);
        r = 75;
        ellipse(pose.keypoints[1].position.x-r, pose.keypoints[1].position.y, 50, 50);
        ellipse(pose.keypoints[1].position.x+r, pose.keypoints[1].position.y, 50, 50);
        ellipse(pose.keypoints[1].position.x, pose.keypoints[1].position.y-r, 50, 50);
        ellipse(pose.keypoints[1].position.x, pose.keypoints[1].position.y+r, 50, 50);

        ellipse(pose.keypoints[2].position.x-r, pose.keypoints[2].position.y, 50, 50);
        ellipse(pose.keypoints[2].position.x+r, pose.keypoints[2].position.y, 50, 50);
        ellipse(pose.keypoints[2].position.x, pose.keypoints[2].position.y-r, 50, 50);
        ellipse(pose.keypoints[2].position.x, pose.keypoints[2].position.y+r, 50, 50);

        fill(25, 105, 25);
        r = 100;
        ellipse(pose.keypoints[1].position.x-r, pose.keypoints[1].position.y-r, 50, 50);
        ellipse(pose.keypoints[1].position.x+r, pose.keypoints[1].position.y+r, 50, 50);
        ellipse(pose.keypoints[1].position.x-r, pose.keypoints[1].position.y+r, 50, 50);
        ellipse(pose.keypoints[1].position.x+r, pose.keypoints[1].position.y-r, 50, 50);

        ellipse(pose.keypoints[2].position.x-r, pose.keypoints[2].position.y-r, 50, 50);
        ellipse(pose.keypoints[2].position.x+r, pose.keypoints[2].position.y+r, 50, 50);
        ellipse(pose.keypoints[2].position.x-r, pose.keypoints[2].position.y+r, 50, 50);
        ellipse(pose.keypoints[2].position.x+r, pose.keypoints[2].position.y-r, 50, 50);

        //upperarm 5/7, 6/8
          strokeWeight(100);
          stroke(107, 53, 17);
          line(pose.keypoints[5].position.x, pose.keypoints[5].position.y,
                pose.keypoints[7].position.x, pose.keypoints[7].position.y);
          line(pose.keypoints[6].position.x, pose.keypoints[6].position.y,
                pose.keypoints[8].position.x, pose.keypoints[8].position.y);

        //lower arm 8/10, 7/9
          stroke(107, 53, 17);
          line(pose.keypoints[8].position.x, pose.keypoints[8].position.y,
                pose.keypoints[10].position.x, pose.keypoints[10].position.y);
          line(pose.keypoints[7].position.x, pose.keypoints[7].position.y,
                pose.keypoints[9].position.x, pose.keypoints[9].position.y);



      }
      if(keypoint.score > 0.2 && keypoint.position.x > width/2){
        fill(0,255,0);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y,10,10);
      }
    }
  }
}

// A function to draw the skeletons
function drawSkeleton() {
  // Loop through all the skeletons detected
  for (let i = 0; i < poses.length; i++) {
    let skeleton = poses[i].skeleton;
    // For every skeleton, loop through all body connections
    for (let j = 0; j < skeleton.length; j++) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];
      stroke(107, 53, 17);
      strokeWeight(0);
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
    }
  }
}




function keyPressed()
{
    console.log("hi");

    if (key == 'f')
    {
        console.log("hello");
        let fs = fullscreen();
        fullscreen(!fs);
    }
}
