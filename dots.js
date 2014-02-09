var color = {r:200,g:30,b:30, a:155};
var size = 10;
var thickness = 1;

function onDrag(x,y){
  for(var i = 0; i < thickness;i++){
    drawSmallCircle(x,y);
  }
}

function drawSmallCircle(x,y){
  circle(x + Math.random() * 5, y + Math.random() * 15 - 10, size, color, true);
}