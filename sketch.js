//C34 PAINTING CANVAS
//JS HARRISON


var drawingA=[];
var currentPathA=[];
var isDrawing=false;

var rStroke;
var x,y;
var weight;
var colorfill= [];

function setup(){
    var canvas=createCanvas(400,400);
    canvas.mousePressed(startPath);
    canvas.mouseReleased(endPath);
}    
function startPath() {
    isDrawing = true;
    currentPathA = [];
    drawingA.push(currentPathA);
}
    
function endPath() {
    isDrawing = false;
}

function draw(){
    background(100);
    rStroke=floor(map(mouseX,10,400,10,250)); 
    weight=floor(random(1,4));
    colorfill=[mouseX,mouseY,mouseX];

    text("Press and Move the mouse ..",120,380);
    text("Press Space to see the path...",120,395);
    if (canvas.mousePressed){
        startPath();
     }
    if(canvas.mouseReleased){
         endPath();
    }  
    
    if (x==undefined) {
        x=400;
    }else if(x<0){
        x=0;
    }
    
    if (y>height) {
        y=400;
    }else if(y<0){
        y=0;
    }
    
    if (isDrawing) {
        var point = {
          x: mouseX,
          y: mouseY,
          rStroke:rStroke,
          weight:weight,
          colorfill:colorfill
        }
        currentPathA.push(point);

    for (var i = 0; i < currentPathA.length-1; i++) {
        strokeWeight(currentPathA[i].weight); 
        stroke(currentPathA[i].rStroke,12,14);
        fill(currentPathA[i].colorfill);
        ellipse(currentPathA[i].x, currentPathA[i].y,7,7);
        }
        console.log(point.x,point.y,rStroke,weight);
    }   
    
    if(keyIsPressed){// To show the path drawn
        if(keyCode==32){
        for (var i = 0; i < currentPathA.length-1; i++) {
            strokeWeight(currentPathA[i].weight); 
            stroke(currentPathA[i].rStroke,12,14);
            fill(currentPathA[i].colorfill);
            rect(currentPathA[i].x, currentPathA[i].y,17,17);
            }
        }
    }
    /*
    if(keyIsPressed){// To show the path drawn
        if(keyCode==32){
        strokeWeight(weight);         
        stroke(rValue,12,14);
        beginShape(LINES);
        for (var i = 0; i < currentPathA.length-1; i++) {
            vertex (currentPathA[i].x, currentPathA[i].y);
            }
        endShape();    
        }
    }
    */
}
