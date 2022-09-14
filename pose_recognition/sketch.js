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
        vertex(pose.keypoints[5].position.x, pose.keypoints[5].position.y);
        vertex(pose.keypoints[6].position.x, pose.keypoints[6].position.y);
        vertex(pose.keypoints[12].position.x, pose.keypoints[12].position.y);
        vertex(pose.keypoints[11].position.x, pose.keypoints[11].position.y);
        endShape(CLOSE);

        beginShape();
        vertex(pose.keypoints[5].position.x-20, pose.keypoints[5].position.y);
        vertex(pose.keypoints[5].position.x+20, pose.keypoints[5].position.y);
        vertex(pose.keypoints[7].position.x-20, pose.keypoints[7].position.y);
        vertex(pose.keypoints[7].position.x+20, pose.keypoints[7].position.y);
        endShape(CLOSE);
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
      stroke(255, 0, 0);
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
