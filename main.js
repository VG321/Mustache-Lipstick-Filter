mustacheX = "";
mustacheY = "";

function preload(){
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function modelloaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        mustacheX = results[0].pose.nose.x-10;
        mustacheY = results[0].pose.nose.y+5;
        console.log("mustache x = " + results[0].pose.nose.x);
        console.log("mustache y = " + results[0].pose.nose.y);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache, mustacheX, mustacheY, 30, 30);
}

function take_snapshot(){
    save('MyFilterImg.png');
}