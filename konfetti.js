var color = {r:200,g:30,b:30, a:155};
var size = 10;
var thickness = 5;
var box_size = 10;

var colors = [
{r:0,g:200,b:0, a:255},
{r:255,g:0,b:0, a:255},
{r:0,g:0,b:255, a:255},
{r:255,g:255,b:0, a:255},
{r:100,g:0,b:255, a:255},
{r:255,g:100,b:0, a:255},
];

function randInt(n){
 return Math.floor(Math.random() * n);
}

//var onClick = onDrag;
var rand = Math.random;

function onDrag(x,y){
  for(var i = 0; i < thickness;i++){
    drawSmallRectangle(x,y);
  }
}

function drawSmallRectangle(x,y){
  for(var w=0; w < box_size * 3; w +=box_size){
  for(var h=0; h < box_size * 3; h +=box_size){
  rect(
  x + w - box_size,
  y + h - box_size,
  x + w,
  y + h,
  colors[randInt(colors.length)], true);
  }
  }
}