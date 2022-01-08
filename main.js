function setup()
{
    canvas= createCanvas(400, 400);
    canvas.position(700, 100);

    video=createCapture(VIDEO);
    video.size(550, 500);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
     console.log('pose net is initinalized');
}
function draw()
{
    background('#34e5eb');
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
    }
    
}