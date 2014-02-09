/**************************/
/* Usage:
/* drag over canvas to log 
/* color and pixel data
/**************************/

var data;
var width;

function onRelease(){
  height = getCanvasHeight();
  width = getCanvasWidth();
  data = getColorData(true, "object");
}

function onClick(x,y){
  if(!data){
    height = getCanvasHeight();
    width = getCanvasWidth();
    log("test");
    data = getColorData(true, "object");
  }
}

function onDrag(x,y){
  var p = data[x + y * width];
  if(!p) return;
  log(x + "," + y + ":" + p.r + "," + p.g + "," + p.b + " (" + (y + x * height) + ") ");
}